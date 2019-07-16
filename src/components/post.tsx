import React from 'react';
import Layout from './layout';
import Container from './ui/container';
import Banner from './ui/banner';

interface LayoutProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
      date: string;
      slug: string;
    };
  };
}
function Post({ children, pageContext }: LayoutProps) {
  const date = new Date(pageContext.frontmatter.date);
  const formatedDate = date.toDateString().slice(3, date.toDateString().length);
  return (
    <Layout pageContext={pageContext}>
      <Banner
        title={pageContext.frontmatter.title}
        subtitle={`Published: ${formatedDate}`}
      />
      <Container className="narrow">
        <article>{children}</article>
        <section>
          <ul>
            <li>
              <a
                href={`https://mobile.twitter.com/search?q=${encodeURIComponent(
                  'https://www.studiodagger.com/' + pageContext.frontmatter.slug
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=https://www/studiodagger.com/${pageContext.frontmatter.slug}&text=${pageContext.frontmatter.title} by @NirjanKhadka`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Twitter
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://studiodagger.com/${pageContext.frontmatter.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
            </li>
          </ul>
        </section>
      </Container>
    </Layout>
  );
}

export default Post;
