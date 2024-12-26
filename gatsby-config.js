module.exports = {
  siteMetadata: {
    title: "ConceptX",
    siteUrl: `https://conceptx.ru`,
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp-exif",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photos",
        path: `${__dirname}/src/images/photos/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.svg',
      },
    },
  ]
};