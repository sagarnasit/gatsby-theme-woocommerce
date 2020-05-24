
const productTemplate = require.resolve("../src/components/product.js");

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
}