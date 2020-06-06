import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="woocommerce__header site-header"
  >
    <div className="woocommerce__header-inner">
      <h1 className="woocommerce__header-site-link">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <Link className="woocommerce__header-cart-link" to="cart">View Cart</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
