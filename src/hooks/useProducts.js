import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      sitePlugin(name: {eq: "gatsby-theme-woocommerce"}) {
        pluginOptions {
          basePath
        }
      }
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
                  fixed(width: 500) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return { products: data.wpgraphql.products.nodes, themeOptions: data.sitePlugin.pluginOptions }
}

export default useProducts
