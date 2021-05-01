import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"
import Seo from "../components/Seo"

export const query = graphql`
  {
    allContentfulRecipe
    {
      nodes
      {
        content
        {
          tags
        }
      }
    }
  }
`
export default function Tags({ data }) {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return <Layout>
    <Seo title={`Tags`} description={`Tags page description`} />
    <main className="page">
      <section className="tags-page">
        {newTags.map(
          (tag, index) => {
            const [text, value] = tag

            return <Link to={`/${text}`} key={index} className="tag">
              <h5>{text}</h5>
              <p>{value} recipe</p>
            </Link>
          }
        )}
      </section>
    </main>
  </Layout>
}
