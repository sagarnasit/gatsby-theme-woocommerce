import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, basePath }) => {
  const cartPage = basePath + 'cart'

  return (
    <header
      className="woocommerce__header site-header"
    >
      <div className="woocommerce__header-inner">
        <h1 className="woocommerce__header-site-link">
          <Link to={basePath}>{siteTitle}</Link>
        </h1>

        <Link className="woocommerce__header-cart-link" to={cartPage}>View Cart</Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
