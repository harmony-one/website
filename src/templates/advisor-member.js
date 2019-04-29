import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
export const AdvisorMemberTemplate = ({
  title,
  linkedin,
}) => {
  return (
    <div className="member">
    </div>
  )
}

AdvisorMemberTemplate.propTypes = {
  title: PropTypes.string,
}

const AdvisorMember = ({data}) => {
  const { markdownRemark: AdvisorMember } = data

  return (
    <Layout>
      <AdvisorMemberTemplate
        linkedin={AdvisorMember.frontmatter.linkedin}
        title={AdvisorMember.frontmatter.title}
      />
    </Layout>
  )
}

AdvisorMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default AdvisorMember

export const pageQuery = graphql`
  query AdvisorMember($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        linkedin
      }
    }
  }
`
