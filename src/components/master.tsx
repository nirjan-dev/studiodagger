import React from "react";
import Header from "./header";
import "normalize.css";
import { ThemeProvider } from "emotion-theming";
import theme from "../utils/theme";
import { Global, css } from "@emotion/core";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

function MasterLayout({ children }: LayoutProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            :root {
              line-height: 1.8;
            }
            *,
            :before,
            :after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-size: calc(${theme.fonts.fontSizes[1]} + 0.5vw);
              font-family: ${theme.fonts.fontFamily.body};
              line-height: ${theme.fonts.lineHeight.body};
              color: ${theme.colors.darkLight};
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              font-family: ${theme.fonts.fontFamily.heading};
              font-weight: ${theme.fonts.fontWeight.bold};
              line-height: ${theme.fonts.lineHeight.heading};
              letter-spacing: ${theme.fonts.letterSpacing.heading};
              color: ${theme.colors.dark};
            }

            h1,
            .h1 {
              font-size: ${theme.fonts.fontSizes[6]};
            }

            h2,
            .h2 {
              font-size: ${theme.fonts.fontSizes[5]};
            }

            h3,
            .h3 {
              font-size: ${theme.fonts.fontSizes[4]};
            }

            h4,
            .h4 {
              font-size: ${theme.fonts.fontSizes[3]};
            }

            h5,
            .h5 {
              font-size: ${theme.fonts.fontSizes[2]};
            }

            h6,
            .h6 {
              font-size: ${theme.fonts.fontSizes[1]};
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            li {
              max-width: 70ch;
            }

            a {
              box-shadow: none;
              transition: color 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
              text-decoration: none;
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
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MasterLayout;
