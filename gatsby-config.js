require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        collectionTypes: [
          {
            name: "editorial-contents",
            api: { qs: { _locale: "en" } },
          }
        ],
        singleTypes: [
          {
            name: "landing",
            api: { qs: { _locale: "en" } },
          }
        ],
        queryLimit: 1000,
      },
    }
  ]
};