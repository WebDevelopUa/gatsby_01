import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import RecipesList from "../components/RecipesList"
import Seo from "../components/Seo"

export default function About({ data: { allContentfulRecipe: { nodes: recipes } } }) {
  return <Layout>
    <Seo title={`About`} description={`About page description`} />
    <main className="page">
      <section className="about-page">
        <article>
          <h2>About us</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <Link to={"/contact"} className="btn">Contact</Link>
        </article>
        <StaticImage
          className="about-img"
          placeholder="tracedSVG"
          src={"../assets/images/about.jpeg"}
          alt="about us" />
      </section>

      <section className="featured-recipes">
        <h5>Featured recipes</h5>
        <RecipesList recipes={recipes} />
      </section>
    </main>

  </Layout>
}


export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
