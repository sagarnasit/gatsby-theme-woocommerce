/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "./layout"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"
import AddToCartButton from "./addToCart"
import "./layout.css"

export const query = graphql`
  query($slug: String) {
    wcProducts(slug: { eq: $slug }) {
      id
      name
      slug
      price
      description
      images {
        src
      }
    }
  }
`
const Img = ({ src }) => {
  return (
    <div
      css={css`
        img {
          width: 250px;
          max-width: 250px;
        }
      `}
    >
      <img src={src} />
    </div>
  )
}

const ProductImage = ({ images }) => {
  return (
    <>
      {images.map(image => (
        <Img key={image.src} src={image.src} />
      ))}
    </>
  )
}

const ProductDetail = ({ id, name, price, description }) => {
  return (
    <div
      css={css`
        margin-left: 15px;
      `}
    >
      <h2>{name}</h2>
      <p>
        Price: <FormatedPrice price={price} />
      </p>

      <AddToCartButton product={{ id, name, price }} />
    </div>
  )
}

const Product = ({ data: { wcProducts: post } }) => {
  return (
    <Layout>
      <SEO title={post.name} />
      <div
        css={css`
          display: flex;
          justify-content: "space-between";
        `}
      >
        <ProductImage images={post.images} />
        <ProductDetail
          id={post.id}
          description={post.description}
          price={post.price}
          name={post.name}
        />
      </div>

      <h4>Product Description:</h4>
      <div
        css={css`
          color: grey;
          margin-top: 5px;
        `}
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </Layout>
  )
}

export default Product
