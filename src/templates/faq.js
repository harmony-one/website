import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const FAQTemplate = ({
  linkedin,
}) => {
  return (
    <div className="member">
    </div>
  )
}

FAQTemplate.propTypes = {
  title: PropTypes.string,
}

const FAQ = ({data}) => {
  const { markdownRemark: teamMember } = data

  return (
    <Layout>
      <FAQTemplate
        linkedin={teamMember.frontmatter.linkedin}
        title={teamMember.frontmatter.title}
      />
    </Layout>
  )
}

FAQ.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FAQ

export const pageQuery = graphql`
  query FAQ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
          question
          answer
      }
    }
  }
`
