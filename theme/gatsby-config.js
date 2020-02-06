module.exports = options => {
  return {
    siteMetadata: {
      title: `Gatsby Theme Cactus`,
      description: `Gatsby Theme Cactus`,
      siteUrl: `https://gatsby.org`,
      author: `Chris Williams`,
      lang: `en`,
      social: [{ name: `GitHub`, url: `https://github.com/chrismwilliams` }],
    },
    plugins: [
      {
        resolve: `gatsby-theme-blog-core`,
        options,
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
    ],
  };
};
