import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"

export default function TagsList({ recipes }) {
  const newTags = setupTags(recipes)

  return <div className="tags-container">
    <h4>tags list (recipes)</h4>
    <div className="tags-list">
      {newTags.map((tag, index) => {
        const [text, value] = tag

        return <Link to={`/${text}`} key={index}>
          {text}({value})
        </Link>
      })}
    </div>
  </div>
}
