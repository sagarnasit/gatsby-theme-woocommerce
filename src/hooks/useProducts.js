import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      wpgraphql {
        products {
          nodes {
            id
            name
            slug
            status
            price
            onSale
            salePrice
            image {
              sourceUrl
            }
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
  `)

  return data.wpgraphql.products.nodes
}

export default useProducts
