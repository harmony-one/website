import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const currentPage = this.props.pageContext.currentPage
    const numPages = this.props.pageContext.numPages
    let listPages = [];
    let previousPage = [];
    let nextPage = [];

    var generatePageSlug = function(num){
      if(num === 1){
        return "/blog"
      }
      return "/blog/" + num;
    }

    if (currentPage === 1) {
      previousPage.push(
        <li class="page-item disabled" aria-disabled="true" aria-label="&laquo; Previous">
          <span class="page-link" aria-hidden="true">&lsaquo;</span>
        </li>
      )
    } else {
      if (currentPage === 2) {
        previousPage.push(
          <li class="page-item">
            <a class="page-link" href="/blog" rel="previous" aria-label="&laquo; Previous">&lsaquo;</a>
          </li>
        )
      } else {
        var previousPageURL = generatePageSlug(currentPage - 1);
        previousPage.push(
          <li class="page-item">
            <a class="page-link" href={previousPageURL } rel="previous" aria-label="&laquo; Previous">&lsaquo;</a>
          </li>
        )
      }
    }

    if (currentPage === numPages) {
      nextPage.push(
        <li class="page-item disabled" aria-disabled="true" aria-label="Next &raquo;">
          <span class="page-link" aria-hidden="true">&rsaquo;</span>
        </li>
      )
    } else {
      var nextPageURL = generatePageSlug(currentPage + 1);
      nextPage.push(
        <li class="page-item">
          <a class="page-link" href={nextPageURL} rel="next" aria-label="Next &raquo;">&rsaquo;</a>
        </li>
      )
    }


    for (let i = 1; i <= numPages; i++) {
      var pageURL = generatePageSlug(i);
      if (i === currentPage) {
        listPages.push(
          <li class="page-item active"><a class="page-link" href={pageURL}>{i}</a></li>
        );
      } else {
        listPages.push(
          <li class="page-item"><a class="page-link" href={pageURL}>{i}</a></li>
        );
      }
    }

    return (
      <Layout page="blog">
        <main className="main">
          <div className="hero hero hero__careers">
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
              {posts &&
                posts.map(({ node: post }) => (
                  <div className="grid__item">
                    <img src={post.frontmatter.banner} alt={post.frontmatter.title} className="grid__item__image rounded" />
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
              <ul class="pagination" role="navigation">
                {previousPage}
                {listPages}
                {nextPage}
              </ul>
            </div>
          </section>
        </main>
      </Layout>
    )
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
`