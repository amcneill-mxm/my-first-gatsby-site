import * as React from "react"
import {Link} from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      />
    </Layout>
  )
}

export default IndexPage
