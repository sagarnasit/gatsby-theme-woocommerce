/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allWcProducts {
        nodes {
          id
          name
          slug
          status
          on_sale
          images {
            src
          }
        }
      }
    }
  `)

  const posts = result.data.allWcProducts.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve("./src/components/product.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}

/**
 * Use remote product image with gatsby-image
 */
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
    WCProducts: {
      // Add ImageFile for node type WCProducts only.
      imageFile: {
        type: `File`,
        resolve(node, args, context, info) {
          return createRemoteFileNode({
            url: node.images[0].src,
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
