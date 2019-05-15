import React from "react"
import { Link,graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundSection from '../components/globals/BackgroundSection';
import SEO from "../components/seo";
import Info from "../components/home/Info";
const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   <BackgroundSection img={data.img.childImageSharp.fluid} title="about us" styleClass="about-background"  />
   <Info />
  </Layout>
)
export const  query=graphql`
{
  img:file(relativePath:{eq:"about-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
