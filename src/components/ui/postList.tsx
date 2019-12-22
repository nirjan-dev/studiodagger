import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "@emotion/styled";

const PostListSection = styled.section`
  max-width: 90ch;
  margin: 0 auto;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 2rem 0;
  }
  .title {
    color: inherit;
  }
  .meta {
    color: ${props => props.theme.colors.grey};
    margin-bottom: ${props => props.theme.spacing[0]};
    display: block;
  }
`;
function PostList() {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: {
          frontmatter: { publish: { eq: true } }
          fields: { collection: { eq: "posts" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "MMMM D,YYYY")
              excerpt
            }
            timeToRead
          }
        }
      }
    }
  `);
  interface Edge {
    node: {
      frontmatter: {
        title: string;
        slug: string;
        date: string;
        excerpt: string;
      };
      excerpt: string;
      timeToRead: string;
    };
  }
  return (
    <PostListSection>
      <ul>
        {data.allMdx.edges.map(({ node }: Edge) => (
          <li key={node.frontmatter.slug}>
            <Link to={`/${node.frontmatter.slug}`}>
              <h3 className="title">{node.frontmatter.title}</h3>
            </Link>
            <p>
              <small className="meta">
                {`${node.frontmatter.date} • ${node.timeToRead} min read`}
              </small>
            </p>

            <p className="excerpt">{node.frontmatter.excerpt}</p>
          </li>
        ))}
      </ul>
    </PostListSection>
  );
}

export default PostList;
