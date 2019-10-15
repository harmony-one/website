import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import styles from './blog-list.module.scss';

const MediumBlogPost = ({ post }) => {
  return (
    <section className={styles.blogPostWrapper}>
      <div className={styles.blogPost}>
        <div className={styles.blogPostHeader}>
          <p>{post.title}</p>
          <p>Author: {post.author}</p>
          <p>Published: {post.pubDate}</p>
        </div>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </section>
  );
};

export default class BlogList extends React.Component {
  state = { blog_posts: [] };
  async componentDidMount() {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/harmony-one';
    const r = await fetch(url);
    const r2 = await r.json();
    console.log(r2.items[0]);
    this.setState({ blog_posts: r2.items });
    // console.log({ r2 });
  }

  render() {
    const { blog_posts } = this.state;
    return (
      <Layout page="blog">
        <main className="main">
          <div className={`hero hero hero__careers ${styles.blogTopBanner}`}>
            <img alt="" src="/images/hero/hero-curve.svg" className="hero__curve" />
            <div className="hero__container container">
              <div className="hero__col">
                <h2 className="hero__title">Blog</h2>
                <p className="hero__desc subhead" />
              </div>
            </div>
            <div className="spacer" />
          </div>
          <section className="section__alternating-grid" id="grid">
            <div className="container">
              {blog_posts.map(post => (
                <MediumBlogPost post={post} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
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
`;
