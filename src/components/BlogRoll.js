import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section__alternating-grid" id="grid">
        <div className="container">
          {posts &&
            posts.map(({ node: post }, index) => (
              <div className="grid__item" key={index}>
                <img
                  src={post.frontmatter.banner}
                  alt={post.frontmatter.title}
                  className="grid__item__image rounded"
                />
                <div className="grid__item__content">
                  <div className="content-inner">
                    <h3 className="text--center"> {post.frontmatter.title} </h3>
                    <p>{post.frontmatter.date}</p>
                    <a href={post.fields.slug} className="header__nav-item button outline">
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                banner
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
