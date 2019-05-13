import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";

class Roadmap extends React.Component {
  constructor(props) {
    super(props);

    const { edges: posts } = props.data.allMarkdownRemark;

    this.generateTitleClass = this.generateTitleClass.bind(this);
    this.generateContentClass = this.generateContentClass.bind(this);
    this.handleRoadmapClick = this.handleRoadmapClick.bind(this);

    this.state = {
      roadmap: this.transformData(posts),
      activeData: posts.length - 1
    };
  }

  transformData(data) {
    data.map((item, index) => (item.node.frontmatter.order = index));
    return data;
  }

  generateTitleClass(order) {
    if (order === this.state.activeData) {
      return "timeline__header timeline-links active";
    }
    return "timeline__header timeline-links";
  }

  generateContentClass(order) {
    if (order === this.state.activeData) {
      return "timeline__content active";
    }
    return "timeline__content";
  }

  generateContentImage(isActive) {
    if (isActive === true) {
      return "/images/icons/check-icon.svg ";
    }
    return "/images/icons/check-incomplete.svg";
  }

  handleRoadmapClick(event, order) {
    this.setState({ activeData: order });
  }

  render() {
    const posts = this.state.roadmap;

    return (
      <section className="section__timeline" id="timeline">
        <div className="container">
          <div className="timeline">
            <div id="timeline-catcher" />
            <div className="timeline__top">
              <h2 className="timeline__title">Roadmap</h2>
              <div className="timeline__headers">
                {posts &&
                  posts.map(({ node: post }) => (
                    <p
                      className={this.generateTitleClass(
                        post.frontmatter.order
                      )}
                      onClick={e =>
                        this.handleRoadmapClick(e, post.frontmatter.order)
                      }
                    >
                      {post.frontmatter.title}
                    </p>
                  ))}
              </div>
            </div>
            <div className="timeline__relative-container">
              {posts &&
                posts.map(({ node: post }) => (
                  <div
                    className={this.generateContentClass(
                      post.frontmatter.order
                    )}
                  >
                    {post.frontmatter.items.map((item, index) => (
                      <div className="timeline__content-item-container">
                        <img
                          alt=""
                          src={this.generateContentImage(item.isActive)}
                        />
                        <p className="timeline__content-item">{item.name}</p>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query RoadmapQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "roadmap" } } }
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
                items {
                  name
                  isActive
                }
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Roadmap data={data} count={count} />}
  />
);
