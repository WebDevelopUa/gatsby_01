import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function ErrorPage() {
  return <Layout>
    <h1>Error Page</h1>
    <p>Go to: <Link to={`/`}>Homepage</Link></p>
  </Layout>
}
