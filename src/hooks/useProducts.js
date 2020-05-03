import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
                  fixed(width: 250) {
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

  return data.wpgraphql.products.nodes
}

export default useProducts
