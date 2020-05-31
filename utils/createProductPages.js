
const productTemplate = require.resolve("../src/components/product.js");
const archiveTemplate = require.resolve("../src/components/archive.js");
const cartTemplate = require.resolve("../src/components/cart.js");
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

    // Create signle page for each product.
    products.forEach(product => {
        actions.createPage({
            path: basePath + product.slug,
            component: productTemplate,
            context: {
                id: product.id,
            },
        })
    })

    // Create paginated list of products.
    const perPage = 4
    const listPages = chunk(products, perPage)
    const totalArchivePages = listPages.length;

    listPages.forEach((archiveProduts, index) => {
        const page = index + 1;
        actions.createPage({
            path: page === 1 ? basePath : basePath + page,
            component: archiveTemplate,
            context: {
                products: archiveProduts,
                pageInfo: {
                    basePath: basePath,
                    previousPage: page - 1,
                    nextPage: page == totalArchivePages ? 0 : page + 1
                }
            },
        })
    })

    // Create cart page.
    actions.createPage({
        path: basePath + 'cart',
        component: cartTemplate
    })
}
