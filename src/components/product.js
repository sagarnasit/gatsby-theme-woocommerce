/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"
import AddToCartButton from "./addToCart"
import "./layout.css"

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
              fixed(width: 250) {
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
    <div
      css={css`
        margin-left: 15px;
      `}
    >
      <h2>{name}</h2>
      <p>Price: {price}</p>

      <AddToCartButton product={{ id, name, price }} />
    </div>
  )
}

const Product = ({
  data: {
    wpgraphql: { product: product },
  },
}) => {
  return (
    <Layout>
      <SEO title={product.name} />
      <div
        css={css`
          display: flex;
          justify-content: "space-between";
        `}
      >
        <Image fixed={product.imageFile.childImageSharp.fixed} />
        <ProductDetail
          id={product.id}
          description={product.description}
          price={product.price}
          name={product.name}
        />
      </div>

      <h4>Product Description:</h4>
      <div
        css={css`
          color: grey;
          margin-top: 5px;
        `}
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    </Layout>
  )
}

export default Product
