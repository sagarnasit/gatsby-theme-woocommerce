import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
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
          justify-content: space-around;
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
  const imageFixed = product.imageFile.childImageSharp.fixed

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
        <Image fixed={imageFixed} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <span className={product.onSale ? `onSale` : ""}>
            Price: {product.price}
          </span>
          <span>
            {product.onSale ? (
              <>
                <span>Sale: </span>
                {product.salePrice}
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
