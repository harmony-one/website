import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './team-detail.module.scss';

class TeamRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="members">
        {posts &&
          posts.map(({ node: post }, index) => (
            <div className="member" key={index}>
              <img
                className="member-image"
                src={post.frontmatter.avatar}
                srcSet={
                  post.frontmatter.avatar &&
                  post.frontmatter.avatar.toString().replace('.', '_2x.') +
                    ' 2x, ' +
                    post.frontmatter.avatar +
                    ' 1x'
                }
                alt={post.frontmatter.name + ', Bio Image'}
              />
              <h3>
                {post.frontmatter.name}
                <a href={post.frontmatter.linkedin} style={{ margin: '10px' }}>
                  <img alt="" src="/images/social/linkedin.svg" />
                </a>
              </h3>

              {post.frontmatter.desc.map((item, index) => (
                <div key={index}>
                  <p className={styles.bio}>{item.text}</p>
                  <br />
                </div>
              ))}
            </div>
          ))}
      </div>
    );
  }
}

TeamRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query TeamRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "team-member" } } }
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
                title
                name
                desc {
                  text
                }
                linkedin
                avatar
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TeamRoll data={data} count={count} />}
  />
);
