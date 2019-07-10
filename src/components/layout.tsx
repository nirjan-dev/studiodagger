import React from 'react';
import Header from './header';
import 'normalize.css';
import { ThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';
import { Global, css } from '@emotion/core';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            a {
              box-shadow: none;
            }
          `}
        />
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Layout;
