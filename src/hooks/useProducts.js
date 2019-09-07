import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWcProducts {
        nodes {
          id
          name
          slug
          status
          price
          on_sale
          sale_price
          images {
            src
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
  `)

  return data.allWcProducts.nodes
}

export default useProducts
