import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const query = graphql`
{
  site {
    siteMetadata {
      siteTitle : title
      siteDescription : description
    }
  }
}
`
export default function Seo({ title, description }) {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDescription } = site.siteMetadata

  return <Helmet htmlAttributes={{ lang: "en" }}>
    <title>{`${title} | ${siteTitle}`}</title>
    <meta name="description" content={description || siteDescription} />
  </Helmet>
}
