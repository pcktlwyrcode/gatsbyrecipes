import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const Testing = ({ data }) => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export const data = graphql`
  {
    site {
      id
      siteMetadata {
        title
        description
        author
        person {
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`
export default Testing
