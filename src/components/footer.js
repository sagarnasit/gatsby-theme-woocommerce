import React from 'react';

const Footer = () => (
    <footer className="site-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> and
        {` `}
        <a href="https://wordpress.com">WordPress</a>
    </footer>
)

export default Footer;