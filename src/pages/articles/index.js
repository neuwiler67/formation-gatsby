import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const ArticleList = ({ data }) => {

  return (
    <Layout pageTitle="Liste des articles">
      {
        data.allStrapiEditorialContents.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/articles/${node.Slug}`}>
                {node.Title}
              </Link>
            </h2>
          </article>
        ))
      }
    </Layout>
  )
}

export default ArticleList;

export const query = graphql`
  query {
    allStrapiEditorialContents {
        nodes {
          Title
          id
          Slug
        }
      }
  }
`