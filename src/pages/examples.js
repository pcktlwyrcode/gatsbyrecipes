import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/layout"
import { graphql } from "gatsby"

//this is the PageQuery 33.
const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>hello from examples page</p>
      <Header />
      <HeaderStatic />
      <h5> {author}</h5>
    </Layout>
  )
}
//variable must be exported here
export const data = graphql`
  query {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`
export default examples