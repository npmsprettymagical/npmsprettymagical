/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      faizaan: file(absolutePath: { regex: "/faizaan.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      kaushik: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div style={{ display: `flex`, marginBottom: rhythm(2.5) }}>
      <Image
        fixed={data.faizaan.childImageSharp.fixed}
        alt={""}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{ borderRadius: `50%` }}
      />
      <Image
        fixed={data.kaushik.childImageSharp.fixed}
        alt={""}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{ borderRadius: `50%` }}
      />
      <p>
        Written by <strong>{author}</strong> who live in Bengaluru and are
        building useful things.
        <br/>
        Our social
        <ul>
          <li>
            <a href={`https://twitter.com/aulisius_`}>Faizaan on Twitter</a>
          </li>
        </ul>
      </p>
    </div>
  )
}

export default Bio
