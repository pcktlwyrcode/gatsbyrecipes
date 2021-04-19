import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const {site:{siteMetadata:{title, person:{name, age}}}} = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          data
          person {
            age
            name
          }
        }
      }
    }
  `)
  return <div>
    <h2> Title: {title}</h2>
      <h2> Name: {name}</h2>
      <h2> Age: {age}</h2>
  </div>
}

export default ComponentName

