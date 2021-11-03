import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Projects from "../components/projects/projects"
import Layout from "../components/layout"
import Footer from "../components/footer/footer"
import { Helmet } from "react-helmet";
import SmoothScroll from "../components/smooth-scroll"

export default function BlogIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title
  const locations = location
  const posts = data.allContentfulPost.edges

  return (

    <Layout location={locations} title={siteTitle}>
      <SEO title="All posts" />
      <Helmet>
        <body className="home" />
      </Helmet>
          <SmoothScroll color={"#ffffff"} location={location} >
            <Hero />
            <Projects posts={posts} />
            <Footer />
          </SmoothScroll>
    </Layout>

  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(filter: {numbering: {}}, sort: {fields: numbering})  {
     edges {
       node {
         title
         year
         slug
         class
         backgroundColor
         textColor
         image {
           fluid {
            ...GatsbyContentfulFluid
           }
         }
       }
     }
   }
  }
`
