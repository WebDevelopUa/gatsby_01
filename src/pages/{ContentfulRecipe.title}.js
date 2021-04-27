import React from "react"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

export const query = graphql`
 query getSingleRecipe($title: String) {
    contentfulRecipe(title: {eq: $title}) {
      title
      cookTime
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`
export default function RecipeTemplate({ data }) {
  const { title, cookTime, content, prepTime, servings, description: { description }, image } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content

  return <main className="page">
    <div className="recipe-page">
      <h2>{title}</h2>
    </div>
  </main>
}
