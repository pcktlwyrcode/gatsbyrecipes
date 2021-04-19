// scope css locally
import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"
import FetchData from "../examples/fetchData"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home " />
      <main className="page">
        <header className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <FetchData />
        <AllRecipes />
      </main>
    </Layout>
  )
}
