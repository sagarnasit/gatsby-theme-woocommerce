import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import { css } from "@emotion/core"
import SEO from "../components/seo"
import FormatedPrice from "../components/formatedPrice"
import useProducts from "../hooks/useProducts"

const IndexPage = () => {
  const products = useProducts()

  return (
    <Layout>
      <SEO title="Home" />
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        `}
      >
        {products.map(product => (
          <ProductPreview key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}

const ProductPreview = ({ product }) => {
  return (
    <div
      css={css`
        margin-bottom: 50px;
      `}
    >
      <Link
        to={product.slug}
        css={css`
          text-decoration: none;
          color: black;
          font-size: 16px;

          img {
            margin-bottom: 0;
          }
          h4 {
            margin-bottom: 5px;
          }

          .onSale {
            text-decoration: line-through;
            color: grey;
          }
        `}
      >
        <h4>{product.name}</h4>
        <img src={product.images[0].src} width="250px" />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <span className={product.on_sale ? `onSale` : ""}>
            Price: <FormatedPrice price={product.price} />
          </span>
          <span>
            {product.on_sale ? (
              <>
                <span>Sale: </span>
                <FormatedPrice price={product.sale_price} />
              </>
            ) : (
              ""
            )}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default IndexPage
