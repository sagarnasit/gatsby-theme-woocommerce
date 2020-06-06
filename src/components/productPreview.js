
import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"


const ProductPreview = ({ product, path }) => {

    const imageFixed = product.imageFile.childImageSharp.fixed

    return (
        <div className="woocommerce-product">
            <Link className="woocommerce-product__link" to={path}>
                <h4>{product.name}</h4>
                <Image fixed={imageFixed} style={{ width: 250, height: 250 }} />
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

export default ProductPreview;