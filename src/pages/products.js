import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link, graphql } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log(data)

  return (
    <Layout>
      <section className={styles.page}>
        <h1>
          {products.map(product => {
            return (
              <article key={product.id}>
                <Image fluid={product.image.fluid} alt={product.title}></Image>
                <h3>
                  {product.title} <span>${product.price}</span>
                </h3>
                <Link to={`/products/${product.slug}`}>more info... </Link>
              </article>
            )
          })}
        </h1>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
