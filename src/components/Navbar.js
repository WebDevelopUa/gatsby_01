import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../assets/images/logo.svg"
import { FaAlignJustify } from "react-icons/fa"

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={logo} alt="website logo" />
          </Link>
          <button
            className="nav-btn"
            onClick={() => setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>

        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link className="nav-link" activeClassName="active-link" to={`/`}>Home</Link>
          <Link className="nav-link" activeClassName="active-link" to={`/about`}>About</Link>
          <Link className="nav-link" activeClassName="active-link" to={`/recipes`}>Recipes</Link>
          <Link className="nav-link" activeClassName="active-link" to={`/tags`}>Tags</Link>
          <div className="nav-link contact-link">
            <Link className="btn" to={`/contact`}>Contact</Link>
          </div>
        </div>

      </div>


    </nav>
  )
}

export default Navbar
