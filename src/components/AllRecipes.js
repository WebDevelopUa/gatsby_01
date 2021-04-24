import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"

export default function AllRecipes() {
  return <div>
    <h4>all recipes</h4>
    <TagsList />
    <RecipesList />
  </div>
}
