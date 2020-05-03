/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
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
      path: product.slug,
      component: require.resolve("./src/components/product.js"),
      context: {
        id: product.id,
      },
    })
  })
}

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  createResolvers({
    WPGraphQL_SimpleProduct: {
      // Add ImageFile for node type WCProducts only.
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.image.sourceUrl.replace('https', 'http'),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
