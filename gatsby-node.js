/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPrductPages = require("./utils/createProductPages");
const downloadImageResolver = require("./utils/downloadImageResolver");

let basePath;
exports.onPreBootstrap = ({ store }, themeOptions) => {

  basePath = themeOptions.basePath || `/`

}

exports.createPages = async ({ actions, graphql }) => {
  await createPrductPages({ actions, graphql, basePath })
}

exports.createResolvers = (obj) => {
  downloadImageResolver(obj)
}
