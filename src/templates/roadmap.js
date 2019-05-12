import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const RoadmapTemplate = ({ roadmap }) => {
  return <div className=""></div>;
};

RoadmapTemplate.propTypes = {
  title: PropTypes.string
};

const Roadmap = ({ data }) => {
  const { markdownRemark: roadmap } = data;

  return (
    <Layout>
      <RoadmapTemplate roadmap={roadmap} />
    </Layout>
  );
};

Roadmap.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Roadmap;

export const pageQuery = graphql`
  query Roadmap($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        items {
          name
          isActive
        }
      }
    }
  }
`;
