module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: "http://localhost:9000",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap:
          (process.env.FRONT_URL || "http://localhost:9000") + "/sitemap.xml",
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: [
              "/servier-centralamericaprod731-admin.servier-university.com.pa/admin/",
            ],
          },
        ],
      },
    },
  ],
};