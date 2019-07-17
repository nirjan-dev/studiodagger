import React from 'react';
import Container from './ui/container';
import Banner from './ui/banner';
import { MDXRenderer } from 'gatsby-mdx';
import { graphql } from 'gatsby';
import MasterLayout from './master';
import SEO from './SEO';
import Img, { FluidObject } from 'gatsby-image';

interface PostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        slug: string;
        cover: {
          childImageSharp: {
            fluid: FluidObject;
            original: {
              src: string;
            };
          };
        };
      };
      code: {
        body: string;
      };
      excerpt: string;
      timeToRead: string;
    };
  };
}
function Post({ data: { mdx } }: PostProps) {
  return (
    <MasterLayout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        article={true}
        image={mdx.frontmatter.cover.childImageSharp.original.src}
      />
      <Banner
        title={mdx.frontmatter.title}
        subtitle={`Published: ${mdx.frontmatter.date} • ${mdx.timeToRead} min read`}
      />
      <Container className="narrow">
        <Img
          fluid={mdx.frontmatter.cover.childImageSharp.fluid}
          alt={mdx.frontmatter.title}
        ></Img>
        <article>
          <MDXRenderer>{mdx.code.body}</MDXRenderer>
        </article>
        <section>
          <ul>
            <li>
              <a
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  'https://www.studiodagger.com/' + mdx.frontmatter.slug
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www/studiodagger.com/${mdx.frontmatter.slug}&text=${mdx.frontmatter.title} by @NirjanKhadka`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://studiodagger.com/${mdx.frontmatter.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
            </li>
          </ul>
        </section>
      </Container>
    </MasterLayout>
  );
}
export const query = graphql`
  query BlogPostQuery($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            original {
              src
            }
          }
        }
      }
      excerpt
      code {
        body
      }
      timeToRead
    }
  }
`;
export default Post;
