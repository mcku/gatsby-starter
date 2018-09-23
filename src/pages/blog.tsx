import * as React from "react";
import Link from "gatsby-link";
import { Header, Grid, Card, List, Container, Feed, Segment, Comment } from "semantic-ui-react";
import { MarkdownRemarkConnection, ImageSharp } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import TagsCard from "../components/TagsCard/TagsCard";
import BlogPagination from "../components/BlogPagination/BlogPagination";
import { get } from "lodash";
import DanismakIsterMisin from "../components/DanismakIsterMisin/DanismakIsterMisin";
import FooterContact from "../components/FooterContact/FooterContact";
import Layout from "../components/layout";
import {graphql} from "gatsby";

interface BlogProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pathContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
  location: {
    pathname: string;
  };
}

export default (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  // console.log(`BENISIL -- frontmatter.author: ${JSON.stringify(posts[0].node.frontmatter.author)}`);
  // TODO export posts in a proper component
  const Posts = (
    <Container>
      {posts.map(({ node }) => {
        const { frontmatter, timeToRead, fields: { slug }, excerpt } = node;
        const avatar = frontmatter.author.avatar.childImageSharp as ImageSharp;
        const cover = get(frontmatter, "image.children.0.responsiveResolution", {});

        const extra = (
          <Comment.Group>
            <Comment>
              <Comment.Avatar
                src={avatar.fixed.src}
                srcSet={avatar.fixed.srcSet}
              />
              <Comment.Content>
                <Comment.Author style={{ fontWeight: 400 }}>
                  {frontmatter.author.id}
                </Comment.Author>
                <Comment.Metadata style={{ margin: 0 }}>
                  {frontmatter.updatedDate} - {timeToRead} dakika okuma süresi
              </Comment.Metadata>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        );

        const description = (
          <Card.Description>
            {excerpt}
            <br />
            <Link to={slug}>Devamı…</Link>
          </Card.Description>
        );

        return (
          <Card key={slug}
            fluid
            image={cover}
            header={frontmatter.title}
            extra={extra}
            description={description}
          />
        );
      })}
    </Container>
  );

  return (
   <Layout location={props.location}>
    <Container>
      {/* Title */}
      <BlogTitle />

      {/* Content */}
      <Segment vertical>
        <Grid padded style={{ justifyContent: "space-around" }}>
          <div style={{ maxWidth: 600 }}>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination Link={Link} pathname={pathname} pageCount={pageCount} />
            </Segment>
          </div>
          <div>
            <TagsCard Link={Link} tags={tags} tag={props.pathContext.tag} />
          </div>
        </Grid>
      </Segment>
      <DanismakIsterMisin />
      <FooterContact />
    </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
query PageBlog {
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
      frontmatter: { draft: { ne: true } },
      fileAbsolutePath: { regex: "/blog/" }
    },
    limit: 10
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
                fixed(width: 700, height: 100) {
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
