/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./bootstrap.min.css"
import Navbar from './globals/Navbar'
import Footer from './globals/Footer'

const Layout = ({ children }) => <>

<Navbar />
{children}
<Footer />
</>


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
