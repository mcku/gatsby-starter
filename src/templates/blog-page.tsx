import * as React from "react";
import Blog from "../pages/blog";
import { graphql } from "gatsby";

export default Blog;

export const pageQuery = graphql`
query TemplateBlogPage($skip: Int) {
  # Get tags
  tags: allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    group(field: frontmatter___tags) {
      fieldValue
      totalCount
    }
  }

  # Get posts
  posts: allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___updatedDate] },
    filter: {
      frontmatter: {
        draft: { ne: true }
      },
      fileAbsolutePath: { regex: "/blog/" }
    }
    limit: 10,
    skip: $skip
  ) {
    totalCount
    edges {
      node {
        excerpt
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          updatedDate(formatString: "DD MMMM, YYYY")
          image {
              childImageSharp {
                  fixed(width: 35, height: 35) {
                  ...GatsbyImageSharpFixed 
                }
              }
          }
          author {
            id
            avatar {
              childImageSharp {
                  fixed(width: 35, height: 35) {
                  ...GatsbyImageSharpFixed 
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
