import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <h1>{data.strapiLanding.Title}</h1>
      <GatsbyImage
            style={{
              gridArea: "1/1",
              borderRadius: "0px",
              maxHeight: "",
            }}
            alt="landing"
            image={
              data.strapiLanding.headerImage.localFile.childImageSharp.gatsbyImageData
            }
            layout="fullWidth"
          />
      <p>{data.strapiLanding.Description}</p>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
  query {
    strapiLanding(locale: {eq: "en"}) {
      headerImage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      Title
      Description
    }
  }
`