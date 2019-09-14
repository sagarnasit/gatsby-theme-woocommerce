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
            name
            slug
            status
            onSale
            image {
              sourceUrl
            }
            imageFile {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = result.data.wpgraphql.products.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve("./src/components/product.js"),
      context: {
        id: post.id,
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
    WPGraphQL_Product: {
      // Add ImageFile for node type WCProducts only.
      imageFile: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.image.sourceUrl,
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
