import React from 'react';
import Header from './header';
import 'normalize.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import { Global, css } from '@emotion/core';
import SEO from '../components/SEO';
import Footer from './footer';

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
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
            }
            a {
              box-shadow: none;
              transition: color 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
              &:hover,
              &:active,
              &:focus {
                color: ${theme.colors.secondary};
              }
            }

            .hidden {
              visibility: hidden;
              opacity: 0;
              font-size: 0.1px;
              position: absolute;
            }
          `}
        />
        <SEO title={pageContext.frontmatter.title} />
        <Header />
        <main style={{ minHeight: '100vh' }}>{children}</main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
