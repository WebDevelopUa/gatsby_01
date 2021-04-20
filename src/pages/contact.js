import React from "react"
import Layout from "../components/Layout"

export default function Contact() {
  return <Layout>
    <main className="page">
      <section className="contact-page">

        <article className="contact-info">
          <h3>Contact us</h3>
          <p>Integer porta quam id nunc bibendum ultrices. Etiam lacinia, enim eu mattis semper, neque turpis fringilla
            tellus, a pulvinar orci metus at risus.</p>
          <p> Sed sagittis porta sollicitudin. Integer a sagittis est, at luctus
            mauris. Nulla rutrum turpis non dui congue, at rutrum mi lobortis. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. </p>
          <p> Morbi eros leo, volutpat in tortor id, rhoncus
            lobortis ante. Nam ultricies, risus vitae facilisis lobortis, mi odio dapibus tellus, lacinia consectetur
            odio odio id est. Integer ac est varius, molestie risus at, ornare nulla. Cras in egestas nibh. Donec tempor
            mauris non justo molestie laoreet. Fusce ac metus lorem.</p>
        </article>

        <article>
          <form className="form contact-form">

            <div className="form-row">
              <label htmlFor="name"> Your Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="form-row">
              <label htmlFor="email"> Your email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="form-row">
              <label htmlFor="message"> Your message</label>
              <textarea name="message" id="message" />
            </div>

            <button className="btn block" type="submit">Submit</button>

          </form>
        </article>

      </section>
    </main>
  </Layout>
}
