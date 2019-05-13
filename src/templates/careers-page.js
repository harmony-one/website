import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import WhitepaperFooter from '../components/WhitepaperFooter';

export const CareersPageTemplate = ({ 
  title, 
  description,
  joblink,
  content,
  footer_title,
  footer_text,
}) => {

  return (
    <div>
      <main className="main">
        <div className="hero hero hero__careers">
          <img alt="" src="/images/hero/hero-curve.svg " className="hero__curve" />
          <div className="hero__container container">
            <div className="hero__col">
              <h2 className="hero__title">{title}</h2>
              <p className="hero__desc subhead">{description}</p>
              <div className="hero__cta">
                <a href={joblink} className="solid button" target="_blank" rel="noopener noreferrer" data-g-event="careers" data-g-label="CTA" data-g-action="clicked">
                  <span>View Job Openings</span>
                </a>
              </div>
            </div>
          </div>
          <div className="spacer" />
        </div>
        <section className="section__alternating-grid" id="grid">
          <div className="container">
            {content.map( item => (
                <div className="grid__item">
                <img alt="" src={item.image} className="grid__item__image rounded" srcSet={ item.image && item.image.toString().replace('.','_2x.') + " 2x, " + item.image + " 1x"}/>
                <div className="grid__item__content">
                  <div className="content-inner">
                    <h3 className="text--center">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            
            ))}
            </div>
          </section>

        <section className="section__apply" id="apply">
          <div className="container">
            <div className="apply">
              <div className="apply__content">
                <h4 className="text--center">{footer_title}</h4>
                <p className="text--center">{footer_text}</p>
                <div className="text--center">
                  <a href={joblink} className="solid button" target="_blank" rel="noopener noreferrer" data-g-event="careers" data-g-label="View Job Openings" data-g-action="clicked">
                    <span>View Job Openings</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WhitepaperFooter/>
      </main>
    </div>
  )
}

CareersPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  joblink: PropTypes.string,
  content: PropTypes.array,
  footer_title: PropTypes.string,
  footer_text: PropTypes.string,
}

const CareersPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout page='careers'>
      <CareersPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        joblink={post.frontmatter.joblink}
        content={post.frontmatter.content}
        footer_title={post.frontmatter.footer_title}
        footer_text={post.frontmatter.footer_text}
      />
    </Layout>
  )
}

CareersPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CareersPage

export const CareersPageQuery = graphql`
  query CareersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        joblink
        content {
          image
          title
          text
        }
        footer_title
        footer_text
      }
    }
  }
`
