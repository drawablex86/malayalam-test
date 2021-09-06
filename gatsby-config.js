module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/hello`,
      },
    },
  ],
  siteMetadata: {
    title: `Site title`,
  },
}


// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        // basePath defaults to `/`
        basePath: `/garden`,
        rootNote: `/garden/hello`,
        contentPath: `/content/garden`,
      },
    },
  ],
    siteMetadata: {
    title: `Malayalam`,
  },
};
