
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ProductPreview from "../components/productPreview"
import SEO from "../components/seo"

const Archive = ({ pageContext: { products, pageInfo } }) => {
    const { basePath, previousPage, nextPage } = pageInfo;
    return (
        <Layout>
            <SEO title="Products" />
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

export default Archive
