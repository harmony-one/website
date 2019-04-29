import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import FAQ from './FAQ';

class FAQRoll extends React.Component {
    render() {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        return (
            <section className="section__faqs" id="faqs">
                <div className="container">
                    <h2 className="text--center">Frequently Asked Questions</h2>
                    <div className="faqs">
                        <div className="members">
                            {posts &&
                                posts.map(({ node: post }, index) => (
                                    <FAQ question={post.frontmatter.question}
                                        answer={post.frontmatter.answer}
                                         key={index}
                                    />
                                ))}
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

FAQRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query FAQRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "faq" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                question
                answer
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <FAQRoll data={data} count={count} />}
    />
)
