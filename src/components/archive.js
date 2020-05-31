
import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import { css } from "@emotion/core"
import Image from "gatsby-image"
import SEO from "../components/seo"
import "./layout.css"


const Archive = ({ pageContext: { products, pageInfo } }) => {
    const { basePath, previousPage, nextPage } = pageInfo;
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
                    <ProductPreview key={product.id} product={product} path={basePath + product.slug} />
                ))}
            </div>
            <div css={css`
                display: flex;
                justify-content: center
            `}>
                {previousPage != 0 ? <Link to={basePath + (previousPage == 1 ? '' : previousPage)} >Prev</Link> : ''}
                {nextPage != 0 ? <Link to={basePath + nextPage} >Next</Link> : ''}
            </div>
        </Layout>
    )
}

const ProductPreview = ({ product, path }) => {

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
