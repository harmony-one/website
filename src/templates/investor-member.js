import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
export const InvestorMemberTemplate = ({
  name,
  web,
}) => {
  return (
    <div className="member">
    </div>
  )
}

InvestorMemberTemplate.propTypes = {
  title: PropTypes.string,
}

const InvestorMember = ({data}) => {
  const { markdownRemark: InvestorMember } = data

  return (
    <Layout>
      <InvestorMemberTemplate
        linkedin={InvestorMember.frontmatter.linkedin}
        title={InvestorMember.frontmatter.title}
      />
    </Layout>
  )
}

InvestorMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default InvestorMember

export const pageQuery = graphql`
  query InvestorMember($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        web
      }
    }
  }
`
