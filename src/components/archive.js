
import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import SEO from "../components/seo"
import AddToCartButton from "./addToCart"
import "./layout.css"


const Archive = ({ pageContext: { products } }) => {

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
                    <ProductPreview key={product.id} product={product} path={product.slug} />
                ))}
            </div>
        </Layout>
    )
}

const ProductPreview = ({ product, path }) => {
    console.log(product.imageFile.childImageSharp.fixed);

    const imageFixed = product.imageFile.childImageSharp.fixed

    return (
        <div
            css={css`
          margin-bottom: 50px;
        `}
        >
            <Link
                to={path}
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

export default Archive
