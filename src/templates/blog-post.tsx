import * as React from "react";
import Link from "gatsby-link";
import { get } from "lodash";
import { Header, Container, Segment, Icon, Label, Button, Grid, Card, Image, Item, Comment } from "semantic-ui-react";
import { MarkdownRemark, ImageSharp, MarkdownRemarkConnection, Site } from "../graphql-types";
import BlogTitle from "../components/BlogTitle";
import { DiscussionEmbed } from "disqus-react";
import DanismakIsterMisin from "../components/DanismakIsterMisin/DanismakIsterMisin";
import FooterContact from "../components/FooterContact/FooterContact";
import { graphql } from "gatsby";

interface BlogPostProps {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
    site: Site
  };
}

export default (props: BlogPostProps) => {
  const { frontmatter, html, timeToRead } = props.data.post;
  const avatar = frontmatter.author.avatar.childImageSharp as ImageSharp;

  const tags = props.data.post.frontmatter.tags
    .map((tag) => <Label key={tag}><Link to={`/blog/tags/${tag}/`}>{tag}</Link></Label>);

  const recents = props.data.recents && props.data.recents.edges
    .map(({ node }) => {
      const recentAvatar = node.frontmatter.author.avatar.childImageSharp as ImageSharp;
      const recentCover = get(node, "frontmatter.image.childImageSharp.fixed", {});
      const extra = (
        <Comment.Group>
          <Comment>
            <Comment.Avatar
              src={recentAvatar.fixed.src}
              srcSet={recentAvatar.fixed.srcSet}
            />
            <Comment.Content>
              <Comment.Author style={{ fontWeight: 400 }}>
                {node.frontmatter.author.id}
              </Comment.Author>
              <Comment.Metadata style={{ margin: 0 }}>
                {node.timeToRead} dakika okuma süresi
              </Comment.Metadata>
            </Comment.Content>
          </Comment>
        </Comment.Group>
      );

      return (
        <div key={node.fields.slug} style={{ paddingBottom: "1em" }}>
          <Card as={Link}
            to={node.fields.slug}
            image={recentCover}
            header={node.frontmatter.title}
            extra={extra}
          />
        </div>
      );
    });

  const cover = get(frontmatter, "image.childImageSharp.responsiveResolution", {} );
  return (
    <Container>
      <BlogTitle />
      <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" shape="circular"
              src={avatar.fixed.src}
              srcSet={avatar.fixed.srcSet}
            />
            <Item.Content>
              <Item.Description>{frontmatter.author.id}</Item.Description>
              <Item.Meta>{frontmatter.author.bio}</Item.Meta>
              <Item.Extra>{frontmatter.updatedDate} - {timeToRead} dakika okuma süresi</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Header as="h1">{frontmatter.title}</Header>
      </Segment>
      <Image
        {...cover}
        fluid
      />
      <Segment vertical
        style={{ border: "none" }}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Segment vertical>
        {tags}
      </Segment>
      {props.data.site
        && props.data.site.siteMetadata
        && props.data.site.siteMetadata.disqus
        && <Segment vertical>
            <DiscussionEmbed shortname={props.data.site.siteMetadata.disqus}/>
        </Segment>
      }
      <Segment vertical>
        <Grid padded centered>
          {recents}
        </Grid>
      </Segment>
      <DanismakIsterMisin />
      <FooterContact />
    </Container>
  );
};

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
  site: site {
    siteMetadata {
        disqus
    }
  }
  post: markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    excerpt
    timeToRead
    fields {
      slug
    }
    frontmatter {
      tags
      author {
        id
        bio
        twitter
        avatar {
          childImageSharp{
                fixed(width: 80, height: 80, quality: 100) {
                ...GatsbyImageSharpFixed 
              }
          }
        }
      }
      title
      updatedDate(formatString: "MMM D, YYYY")
      image {
        childImageSharp{
                fixed(width: 900, height: 300, quality: 100) {
                ...GatsbyImageSharpFixed 
              }
        } 
      }
    }
  }
  recents: allMarkdownRemark(
    filter: {
      fields: {slug: {ne: $slug}}
      frontmatter: {draft: {ne: true}},
      fileAbsolutePath: {regex: "/blog/"},
    },
    sort: {order: DESC, fields: [frontmatter___updatedDate]},
    limit: 4
  ) {
    edges {
      node {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          image {
            childImageSharp{
                fixed(width: 300, height: 100) {
                ...GatsbyImageSharpFixed 
            }
            }
          }
          author {
            id
            avatar {
              childImageSharp {
                  fixed(width: 36, height: 36) {
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
