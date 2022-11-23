module.exports = {
    plugins: [
      {
        resolve: `gatsby-source-git`,
        options: {
          name: `shoutcms-ui`,
          remote: `https://github.com/bnfrnch/shoutcms-ui.git`,
          branch: `develop`,
          // Only import the docs folder from a codebase.
          patterns: `docs/**`
        }
      },
      {
        resolve: `gatsby-source-git`,
        options: {
          name: `my-repo`,
          remote: `https://bnfrnch:${process.env.GITHUB_TOKEN}@github.com/bnfrnch/shoutcms-ui`,
        },
      }
    ]
  };