import React from 'react';
import Header from './header';
import 'normalize.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import { Global, css } from '@emotion/core';
import SEO from '../components/SEO';

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
        <main>{children}</main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
