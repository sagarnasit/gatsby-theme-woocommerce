# Description

A E-commerce site with WooCommerce as a data source built with Gatsby and WordPress. <a href="https://gatsby-woocommerce.netlify.com" >Demo Link</a>

## Features

Site is using wordpress as a headless CMS for woocommerce data and GatsbyJS for frontend.

- Headless WordPress.
- PWA compatible.
- Offline viewing.

## Setup

- Create a WordPress site on you local machine or server and setup it with WooCommerce and few products.

- Add <a href="https://github.com/wp-graphql/wp-graphql" >WPGraphQL</a> and <a href="https://github.com/wp-graphql/wp-graphql-woocommerce" >WPGraphQL WooCommerce</a> plugin on WordPress site.

- Clone this repo and install npm dependecies with `npm install`.

- Configure your WorPress site's graphql endpoint url under `gatsby-source-graphql` plugin options.

- Start development server by `gatsby develop` or build static pages with `gatsby build`.
