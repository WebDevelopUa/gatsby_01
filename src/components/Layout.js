import React from "react"
import Navbar from "./Navbar"

import "normalize.css"
import "../assets/css/main.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}

export default Layout
