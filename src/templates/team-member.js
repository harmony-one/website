import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const TeamMemberTemplate = ({
  linkedin,
}) => {
  return (
    <div className="member">
    </div>
  )
}

TeamMemberTemplate.propTypes = {
  title: PropTypes.string,
}

const TeamMember = ({data}) => {
  const { markdownRemark: teamMember } = data

  return (
    <Layout>
      <TeamMemberTemplate
        linkedin={teamMember.frontmatter.linkedin}
        title={teamMember.frontmatter.title}
      />
    </Layout>
  )
}

TeamMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TeamMember

export const pageQuery = graphql`
  query TeamMember($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        linkedin
      }
    }
  }
`
