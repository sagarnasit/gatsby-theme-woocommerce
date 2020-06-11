
import React from "react"
import Layout from "../components/layout"
import ProductPreview from "../components/productPreview"
import Pagination from "../components/paginations"
import SEO from "../components/seo"

const Archive = ({ pageContext: { products, pageInfo } }) => {
    const { basePath, previousPage, nextPage } = pageInfo;

    const previousPageLink = previousPage != '' ? basePath + (previousPage == 1 ? '/' : previousPage) : '';
    const nextPageLink = nextPage != 0 ? basePath + nextPage : '';

    return (
        <Layout>
            <SEO title="Products" />
            <div className="woocommerce__product-archive-wrapper">
                {products.map(product => (
                    <ProductPreview key={product.id} product={product} path={basePath + product.slug} />
                ))}
            </div>

            <Pagination previousPage={previousPageLink} nextPage={nextPageLink} />
        </Layout>
    )
}

export default Archive
