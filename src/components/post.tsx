import React from 'react';
import Layout from './layout';
import Container from './ui/container';
import Banner from './ui/banner';

interface LayoutProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
}
function Post({ children, pageContext }: LayoutProps) {
  return (
    <Layout pageContext={pageContext}>
      <Banner title={pageContext.frontmatter.title} />
      <Container className="narrow">{children}</Container>
    </Layout>
  );
}

export default Post;
