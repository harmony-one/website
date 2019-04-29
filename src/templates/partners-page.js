import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const PartnersPageTemplate = ({ 
  title, content, contentComponent }) => {

  return (
      <main className="main">
        <div className="hero hero hero__partners">
          <img alt="" src="/images/hero/hero-curve.svg " className="hero__curve" />
          <div className="hero__container container">
            <div className="hero__col">
              <h2 className="hero__title">{title}</h2>
              {content.map( item => (
                    <p className="hero__desc subhead">{item.text}</p>
              ))}
            </div>
          </div>
          <div className="spacer" />
        </div>
        <section className="section__partnerform" id="partnerform">
          <div className="container">
            <div className="partnerform">
              <div className="partnerform__content">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeJo1VMo9B6KJeLaV3uR_PnWWICrsi1QARNl7rGUop_uhk9kQ/viewform?embedded=true" width="100%" height={1412} frameBorder={0} marginHeight={0} marginWidth={0}>Loading...</iframe> 
              </div>
            </div>
          </div>
        </section>
        <div className="whitepaper-fixed-mobile">
          <a href="/pdf/whitepaper.pdf" className="outline button" target="_blank" rel="noopener noreferrer" data-g-event="hero" data-g-label="Whitepaper" data-g-action="clicked">
            <span>Whitepaper</span>
          </a>
        </div>
      </main>
  )
}

PartnersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.array,
  contentComponent: PropTypes.func,
}

const PartnersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout page="partners">
      <PartnersPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.frontmatter.content}
      />
    </Layout>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PartnersPage

export const PartnersPageQuery = graphql`
  query PartnersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        content {
          text
        }
      }
    }
  }
`
