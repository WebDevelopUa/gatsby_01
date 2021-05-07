import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          id
        }
      }
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function TagTemplate({ data, pageContext }) {
  const recipes = data.allContentfulRecipe.nodes

  return (
    <Layout>
      <Seo
        title={
          pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
        }
        description={`${
          pageContext.tag.charAt(0).toUpperCase() + pageContext.tag.slice(1)
        } page description`}
      />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}
