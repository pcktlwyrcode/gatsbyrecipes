import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import img from "../images/image4.jpeg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image1.jpeg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    fluid:file(relativePath: { eq: "image4.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    example: file(relativePath: { eq: "image2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {

    return (
        <section className="images">
        <article className="single-image">
            <h3>Basic image as per React</h3>
            <img  src={img} width="100%" />
            </article> 
             <article className="single-image">
            <h3>Fixed image</h3>

            </article>
             <article className="single-image">
            <h3>Fluid image svg</h3>

            </article>   
        </section>
    )
}
export default Images