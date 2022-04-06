import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const SiteGatsby = ({ firstName }) => {
  return (
    <div className={container}>
      <h2>{firstName}, besoin d'en savoir plus ?</h2>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="https://www.gatsbyjs.com/docs/" className={navLinkText}>
            Gatsby Build
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="https://www.gatsbyjs.com/use-cases/technical-documentation" className={navLinkText}>
            Gatsby documentation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SiteGatsby;