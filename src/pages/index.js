import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 container">
      <div className="row py-lg-5">
        <div className="col">
          <h4><small>Te explicamos cómo <strong>vamos a acabar con la <del>política</del></strong></small>.</h4><h2>Descubre la <strong><u>participación ciudadana total:</u></strong></h2>
        </div>
        </div>
        <div className="row">
          <div className="col col-md-8">
          <h3>Tastet d'idees</h3>
          <h5>¡Nos vamos contigo de bares!</h5>
          <p>Queremos escuchar tus ideas, contarte las nuestras, e <strong>invitarte a tomar algo con nosotros (*)</strong><br />Encuéntranos por las calles de <strong>Bellavista</strong>. El <strong>12 de Noviembre</strong>. De 10.00 a 15:00hh</p>
          <p>Más información en breve en esta web, y en nuestras redes sociales. <br />¡Nos vemos en las calles!</p>
          </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
