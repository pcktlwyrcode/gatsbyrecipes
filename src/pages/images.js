import React from "react"
import Layout from "../components/Layout"
import Images from "../examples/images"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const images = () => {
  return (
    <Wrapper>
      <Layout>
        <h4>constrained </h4>
        <StaticImage
          src="../assets/images/recipe-1.jpeg"
          alt="food"
          placeholder="tracedSVG"
          layout="constrained"
          className="example-img"
          as="section"
        />

        <StaticImage src="../assets/images/big.jpg" alt="a plate of food" />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
  }
  .example-img {
    border-radius: 1rem;
  }
`

export default images
