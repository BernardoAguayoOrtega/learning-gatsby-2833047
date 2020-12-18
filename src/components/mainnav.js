import React from "react"
import { Link } from "gatsby"

import style from "./mainnav.module.css"

const MainNav = ({ links }) => {
  console.log(links)

  return (
    <nav className={style.navigation}>
      <ul>
        {links?.map(element => (
          <li>
            <Link to={element?.link}>{element?.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MainNav
