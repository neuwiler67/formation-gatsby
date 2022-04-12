import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageNames = ["Home", "About", "Blog", "Articles"];
  const getPageLinkFromName = (pageName) => {
    if ("Home" === pageName) {
      return "/";
    } else {
      return "/" + pageName.toLowerCase();
    }
  };

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {pageNames.map(pageName => (
            <li className={navLinkItem}>
              <Link to={getPageLinkFromName(pageName)} className={navLinkText}>
                {pageName}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout