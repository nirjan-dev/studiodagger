/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "@emotion/styled";
import StyledLink from "./styledLink";
import { Link, useStaticQuery, graphql } from "gatsby";
import Container from "./container";

const IntroBanner = styled.div`
  background: ${props => props.theme.colors.secondaryGradient};
  padding-top: ${props => props.theme.spacing[3]};
  padding-bottom: ${props => props.theme.spacing[5]};
  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 93%);

  a:not(.primary-btn) {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
  }

  p {
    max-width: 60ch;
    margin: ${props => props.theme.spacing[1]} 0;
  }

  @media (max-width: 55em) {
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`;
function Intro() {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
          instagramUsername
        }
      }
    }
  `);
  return (
    <section>
      <IntroBanner>
        <div>
          <Container>
            <h2>Hi, I'm Nirjan</h2>
            <p>
              I design and develop websites and applications that are blazing
              fast, user friendly, optimized and accessible to everyone. I also
              love sharing what I've learnt about web development and UI/UX
              design through my <Link to="/blog">blog</Link>,{" "}
              <a
                href={`https://twitter.com/${result.site.siteMetadata.twitterUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </a>{" "}
              and{" "}
              <a
                href={`https://instagram.com/${result.site.siteMetadata.instagramUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </a>
            </p>
            <p>
              If you need a developer who loves design, accessibility and
              performance then feel free to contact me.
            </p>
            <StyledLink className="primary-btn" to="/contact">
              Get in touch
            </StyledLink>
          </Container>
        </div>
      </IntroBanner>
    </section>
  );
}

export default Intro;
