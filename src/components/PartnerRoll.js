import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class PartnerRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="partners">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="partner" key={index}>
              <a href={post.frontmatter.web} target="">
                <div className="partner-img">
                  <img src={post.frontmatter.logo} alt={post.frontmatter.title} title={post.frontmatter.title} />
                </div>
                <h4>{post.frontmatter.name}</h4>
              </a>
            </div>
          ))}
      </div>
    )
  }
}

PartnerRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PartnerRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "partner-member" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                name
                title
                web
                logo
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PartnerRoll data={data} count={count} />}
  />
)
