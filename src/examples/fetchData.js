import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <div>
      <h2>{data.site.siteMetadata.person.name}</h2>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return <p key={index}> {item.age}</p>
        })}
      </div>
    </div>
  )
}

export default ComponentName
