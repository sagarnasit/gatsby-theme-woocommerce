module.exports = options => {

  return {
    siteMetadata: {
      title: `Gatsby Woocommerce`,
      description: `Ecommerce store buit with gatsby and wordpress`,
      basePath: options.basePath ? options.basePath : '/',
      author: 'sagarnasit'
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName: "WPGraphQL",
          // This is field under which it's accessible
          fieldName: "wpgraphql",
          // Url to query from
          url: options.storeUrl || `http://woocommerce.com/graphql`,
        },
      },
      `gatsby-plugin-offline`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Woocommerce Store`,
          short_name: `Woocommerce Store`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `${__dirname}/src/images/gatsby-icon.png`,
        },
      },
      'gatsby-plugin-sass',
    ],
  }

}