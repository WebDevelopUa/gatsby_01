import React from "react"
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/Seo"

export default function Home() {
  return <Layout>
    <Seo title={`Home`} description={`Homepage description`} />
    <main className="page">
      <header className="hero">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="hero"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        />
        <div className="hero-container">
          <div className="hero-text">
            <h1>simply recipes</h1>
            <h4>Lorem ipsum herfo msmiwn qadziy</h4>
          </div>
        </div>
      </header>
      <AllRecipes />
    </main>
  </Layout>
}
