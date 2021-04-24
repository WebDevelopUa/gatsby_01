import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function AllRecipes() {
  const { allContentfulRecipe: { nodes: recipes } } = useStaticQuery(query)

  // const data = useStaticQuery(query)
  // const recipes = data.allContentfulRecipe.nodes
  // console.log(recipes)

  return <div>
    <h4>all recipes</h4>
    <TagsList recipes={recipes} />
    <RecipesList recipes={recipes} />
  </div>
}
