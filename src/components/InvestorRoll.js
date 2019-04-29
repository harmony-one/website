import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class InvestorRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="investors">
        {posts &&
          posts.map(({ node: post }, index) => (
              <div className="investor" key={index}>
                <a href={post.frontmatter.web} target="">
                  <img src={post.frontmatter.logo} alt={post.frontmatter.name} title={post.frontmatter.name} />
                </a>
              </div>
          ))}
      </div>
    )
  }
}

InvestorRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query InvestorRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "investor-member" } } }
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
                web
                logo
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <InvestorRoll data={data} count={count} />}
  />
)
