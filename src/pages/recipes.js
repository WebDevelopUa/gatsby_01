import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import Seo from "../components/Seo"

export default function Recipes() {
  return (
    <Layout>
      <Seo title={`Recipes`} description={`Recipes page description`} />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}
