import * as React from "react"
import HomeHero from "../components/home/HomeHero"
import Layout from "../components/layout"
import Seo from "../components/shared/seo"
import AblaJsonLD from "../components/home/AblaJsonLD"

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <AblaJsonLD />
  </Layout>
)

export default IndexPage

export const Head = ({ location }) => {
  return (
    <Seo
      location={location}
      title="Home"
      description="Dr. Abla Hasan | Professor of practice of Arabic language and culture | Nebraska University"
    />
  )
}
