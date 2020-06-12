# 📂 Gatsby Woocomerce Theme

- Gatsby theme for WordPress Woocommerce Store. Blazing fast ecommerce store with offline product viewing and offline cart support.

## 🔥 Features

- Blazing fast site with Gatsby
- Woocommerce support WPGraphql Woocommerce
- Products Listing with Pagination
- Offline support
- offline Cart page
- Lazy load images

## 🖥️ Demo

- Click [here](https://gatsby-woocommerce.netlify.app/) to see demo.

## 👨‍💻 Maintainer

| Name                                       | Github Username |
| ------------------------------------------ | --------------- |
| [Sagar Nasit](mailto:sagarnasit@gmail.com) | @sagarnasit     |

## ⚙️ Setup

### WordPress Setup

1. Create fresh WordPress site with Woocommerce plugin installed.

2. Install [WPgraphql](https://github.com/wp-graphql/wp-graphql) and [WPgraphl Woocommerce](https://github.com/wp-graphql/wp-graphql-woocommerce) plugin on Your Wordpress site.

3. Add some simple products on woocommerce store.

### Gatsby Setup

- Create fresh Gatsby site with gatsby cli `gatsby new store`

- Install this theme package with `⚙npm i @sagarnasit/gatsby-theme-woocommerce`

- Configure theme in `gatsby-config.js`.

  ```js
  module.exports = {
    plugins: [
      {
        resolve: "gatsby-theme-woocommerce",
        options: {
          basePath: "/store/",
          storeUrl: "http://YourWordPressSite.com/graphql",
        },
      },
    ],
  }
  ```

  - `basePath` : Provide path for the Woocommerce store.
  - `storeUrl`: Provide Woocommerce site graphql endpoint.

* Start development server by `gatsby develop` or build static pages with `gatsby build`. 🎉

## 📝 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
