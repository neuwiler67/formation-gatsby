import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const Article = ({ data }) => {

  const article = data.strapiEditorialContents;

  return (
    <Layout pageTitle="Home Page">
      <h1>{article.Title}</h1>
      <GatsbyImage
            style={{
              gridArea: "1/1",
              borderRadius: "0px",
              maxHeight: "",
            }}
            alt="landing"
            image={
              article.headerImage.localFile.childImageSharp.gatsbyImageData
            }
            layout="fullWidth"
          />
      <p>{article.Description}</p>
    </Layout>
  )
}

export default Article;

export const query = graphql`
  query ($Slug: String!) {
    strapiEditorialContents(Slug: {eq: $Slug}, locale: {eq: "en"}) {
      Title
      Slug
      Description
      headerImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`