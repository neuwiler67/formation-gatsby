import * as React from 'react'
import Layout from '../components/layout'
import SiteGatsby from '../components/siteGatsby'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <SiteGatsby firstName="Pierre-Louis"/>
    </Layout>
  )
}

export default AboutPage