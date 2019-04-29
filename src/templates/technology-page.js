import React  from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import FAQRoll from '../components/FAQRoll'

export const TechnologyPageTemplate = ({ 
  title, 
  description, 
  content
}) => {

  return (
    <main className="main">
      <div className="hero hero hero__technology">
        <img alt="" src="/images/hero/hero-curve.svg " className="hero__curve" />
        <div className="hero__container container">
          <div className="hero__col">
            <h2 className="hero__title">{title}</h2>
            <p className="hero__desc subhead">{description}</p>
          </div>
        </div>
        <div className="spacer" />
      </div>

      <section className="section__alternating-grid" id="grid">
        <div className="container">

          {content.map(item => (
            <div className="grid__item">
              <img alt="" src={item.image} className={" grid__item__image"} />
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

      <section className="section__timeline" id="timeline">
        <div className="container">
          <div className="timeline">
            <div id="timeline-catcher" />
            <div className="timeline__top">
              <h2 className="timeline__title">Roadmap</h2>
              <div className="timeline__headers">
                <p className="timeline__header  timeline-links">2018 Q2</p>
                <p className="timeline__header active timeline-links">2018 Q3 &amp; Q4</p>
                <p className="timeline__header  timeline-links">2019</p>
              </div>
            </div>
            <div className="timeline__relative-container">
              <div className="timeline__content ">
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-icon.svg " />
                  <p className="timeline__content-item">Whitepaper</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-icon.svg " />
                  <p className="timeline__content-item">Founding Team</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-icon.svg " />
                  <p className="timeline__content-item">Seed funding</p>
                </div>
              </div>
              <div className="timeline__content active">
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-icon.svg " />
                  <p className="timeline__content-item">Public benchmark: 10k tps on 10k nodes</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-icon.svg " />
                  <p className="timeline__content-item">Asia Events &amp; Community Development</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-incomplete.svg " />
                  <p className="timeline__content-item">Open source, Testnet and Demo Applications</p>
                </div>
              </div>
              <div className="timeline__content ">
                <div className="timeline__content-item-container">

                  <img alt="" src="/images/icons/check-incomplete.svg " />
                  <p className="timeline__content-item">Smart contract</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-incomplete.svg " />
                  <p className="timeline__content-item">Developer Programs</p>
                </div>
                <div className="timeline__content-item-container">
                  <img alt="" src="/images/icons/check-incomplete.svg " />
                  <p className="timeline__content-item">Mainnet Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQRoll />

      <div className="whitepaper-fixed-mobile" style={{ position: 'fixed' }}>
        <a href="/pdf/whitepaper.pdf" className="outline button" target="_blank" rel="noopener noreferrer" data-g-event="hero" data-g-label="Whitepaper" data-g-action="clicked">
          <span>Whitepaper</span>
        </a>
      </div>
    </main>
  )
}

TechnologyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.shape({  
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const TechnologyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout page='technology'>
      <TechnologyPageTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.frontmatter.content}
      />
    </Layout>
  )
}

TechnologyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TechnologyPage

export const TechnologyPageQuery = graphql`
  query TechnologyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        content {
          image
          title
          text
        }
      }
    }
  }
`
