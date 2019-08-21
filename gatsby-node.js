/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
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
