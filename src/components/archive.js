
import React from "react"
import { Link } from "gatsby"
import Layout from "./layout"
import Image from "gatsby-image"
import SEO from "../components/seo"

const Archive = ({ pageContext: { products, pageInfo } }) => {
    const { basePath, previousPage, nextPage } = pageInfo;
    return (
        <Layout>
            <SEO title="Home" />
            <div className="woocommerce__product-archive-wrapper">
                {products.map(product => (
                    <ProductPreview key={product.id} product={product} path={basePath + product.slug} />
                ))}
            </div>
            <div className="woocommerce__product-archive-pagination">
                {previousPage != 0 ? <Link to={basePath + (previousPage == 1 ? '' : previousPage)} >Prev</Link> : ''}
                {nextPage != 0 ? <Link to={basePath + nextPage} >Next</Link> : ''}
            </div>
        </Layout>
    )
}

const ProductPreview = ({ product, path }) => {

    const imageFixed = product.imageFile.childImageSharp.fixed

    return (
        <div className="woocommerce-product">
            <Link className="woocommerce-product__link" to={path}>
                <h4>{product.name}</h4>
                <Image fixed={imageFixed} />
                <div className="woocommerce-product__price-wrapper">
                    <span className={product.onSale ? `onsale` : ""}>
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
