
const productTemplate = require.resolve("../src/components/product.js");
const archiveTemplate = require.resolve("../src/components/archive.js");
const chunk = require("lodash/chunk");

module.exports = async ({ actions, graphql, basePath }) => {
    const result = await graphql(`
      query {
        wpgraphql {
          products {
            nodes {
              id
              ... on WPGraphQL_SimpleProduct {
                id
                name
                description
                image {
                  sourceUrl
                }
                attributes {
                  nodes {
                    name
                  }
                }
                price
                onSale
                slug
                status
                type
                regularPrice
                salePrice(format: FORMATTED)
                imageFile {
                    childImageSharp {
                        fixed( width: 400) {
                            width
                            height
                            src
                            srcSet
                            base64
                            tracedSVG
                            srcWebp
                            srcSetWebp
                        }
                      }
                }
              }
            }
          }
        }
      }
    `)

    const products = result.data.wpgraphql.products.nodes

    products.forEach(product => {
        actions.createPage({
            path: basePath + product.slug,
            component: productTemplate,
            context: {
                id: product.id,
            },
        })
    })

    const perPage = 5

    const listPages = chunk(products, perPage)
    listPages.forEach((archiveProduts, index) => {
        const page = index + 1;
        actions.createPage({
            path: page === 1 ? basePath : basePath + page,
            component: archiveTemplate,
            context: {
                products: archiveProduts,
            },
        })
    })
}
