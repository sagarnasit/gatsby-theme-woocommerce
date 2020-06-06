/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Image from "gatsby-image"
import SEO from "../components/seo"
import AddToCartButton from "./addToCart"

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      product(id: $id) {
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
          salePrice
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
`

const ProductDetail = ({ id, name, price, description }) => {
  return (
    <div className="woocommerce-product__detail">
      <h2>{name}</h2>
      <p>Price: {price}</p>

      <AddToCartButton product={{ id, name, price }} />
    </div>
  )
}

const Product = ({
  data: {
    wpgraphql: { product },
  },
}) => {
  return (
    <Layout>
      <SEO title={product.name} />
      <div className="woocommerce-product__wrapper">
        <Image fixed={product.imageFile.childImageSharp.fixed} style={{ width: 250, height: 250 }} />
        <ProductDetail
          id={product.id}
          description={product.description}
          price={product.price}
          name={product.name}
        />
      </div>

      <h4>Product Description:</h4>
      <div className="woocommerce-product__description"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </Layout>
  )
}

export default Product
