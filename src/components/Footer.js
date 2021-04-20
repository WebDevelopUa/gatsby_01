import React from "react"

const Footer = () => {
  return <footer className="page-footer">
    <p>&copy; {new Date().getFullYear()}
      <span> Simple <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby 3.0</a> Website</span>
    </p>
  </footer>
}

export default Footer
