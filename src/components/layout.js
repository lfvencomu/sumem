import * as React from "react"
import PropTypes from "prop-types"

// import { Script } from "gatsby"

import Navbar from "./navbar"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
    {/* <Script src="https://static.landbot.io/landbot-3/landbot-3.0.0.js"/> */}
    <div className="container-fluid p-0">
      <Navbar siteTitle={'Sumem per Les Franqueses'} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
