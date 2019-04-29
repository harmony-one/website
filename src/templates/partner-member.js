import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
export const PartnerMemberTemplate = ({
  name,
  web,
}) => {
  return (
    <div className="member">
    </div>
  )
}

PartnerMemberTemplate.propTypes = {
  title: PropTypes.string,
}

const PartnerMember = ({data}) => {
  const { markdownRemark: PartnerMember } = data

  return (
    <Layout>
      <PartnerMemberTemplate
        linkedin={PartnerMember.frontmatter.linkedin}
        title={PartnerMember.frontmatter.title}
      />
    </Layout>
  )
}

PartnerMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PartnerMember

export const pageQuery = graphql`
  query PartnerMember($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        web
      }
    }
  }
`
