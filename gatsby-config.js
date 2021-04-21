/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Simple Gatsby 3 Website",
    description: "Simple pet-project generated using gatsby-starter-hello-world starter",
    author: "@xxx",
    person: {
      name: "xxx",
      age: 22
    },
    simpleData: [
      "item #1",
      "item #2",
      "item #3",
      "item #4"
    ],
    complexData: [
      {
        name: "yyy",
        age: 33
      }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    }
  ]
}
