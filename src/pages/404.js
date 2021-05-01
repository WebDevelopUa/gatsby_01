import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Error() {
  return <Layout>
    <Seo title={`404`} description={`404 page description`} />
    <main className="error-page">
      <section>
        <h1>404</h1>
        <h2>Error Page</h2>
        <h3>Page not found</h3>
        <h4>Go to: <Link to={`/`}>Homepage</Link></h4>
      </section>
    </main>

  </Layout>
}
