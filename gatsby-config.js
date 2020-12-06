module.exports = {
  siteMetadata: {
    title: "hot-or-cold: implementation by mikeabolarin",
    author: "Mike Abolarin",
    description: "Nodejs implementation of hot-or-cold game",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mike Abolarin",
        short_name: "ma",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "src/assets/images/ma-logo.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-material-ui",
  ],
};
