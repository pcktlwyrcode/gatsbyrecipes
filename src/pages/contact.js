import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              I'm baby 8-bit single-origin coffee readymade heirloom cornhole
              activated charcoal pinterest tote bag direct trade chartreuse
              distillery fashion axe. Gentrify gastropub vexillologist, poutine
              marfa four loko intelligentsia normcore farm-to-table tattooed
              live-edge twee craft beer narwhal chartreuse. Hella hashtag yr
              letterpress blog. Succulents meh knausgaard, pug tofu crucifix
              tattooed kitsch. Truffaut paleo godard, aesthetic yr slow-carb
              ramps flannel bespoke everyday carry ennui blog before they sold
              out.
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/xayanbaw"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
        </section>
      </main>
    </Layout>
  )
}

// useEffect(() => {
//   const ipFormInput = document.getElementById("ipFormInput")
// }, [])

// console.log(ipFormInput)
// fetch("https://api.ipify.org?format=json")
//   .then(response => {
//     return response.json()
//   })
//   .then(json => {
//     const ip = json.ip
//     ipFormInput.value = ip
//     console.log(ip)
//   })
//   .catch(err => {
//     console.error(`Error getting IP Address: ${err}`)
//   })

export default Contact
