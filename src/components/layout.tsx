import React from 'react';
import SEO from '../components/SEO';
import MasterLayout from './master';
interface LayoutProps {
  children: React.ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
}

function Layout({ children, pageContext }: LayoutProps) {
  return (
    <MasterLayout>
      <SEO title={pageContext.frontmatter.title} />
      <main style={{ minHeight: '100vh' }}>{children}</main>
    </MasterLayout>
  );
}

export default Layout;
