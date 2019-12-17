/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "@emotion/styled";
import StyledLink from "./styledLink";
import { Link } from "gatsby";

const IntroBanner = styled.div`
  background: ${props => props.theme.colors.secondaryGradient};
  padding-top: ${props => props.theme.spacing[4]};
  padding-bottom: ${props => props.theme.spacing[6]};
  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 93%);

  a:not(.primary-btn) {
    border-bottom: 3px solid ${props => props.theme.colors.primary};
  }

  p {
    line-height: 1.8;
    max-width: 60ch;
    margin: ${props => props.theme.spacing[2]} 0;
  }

  @media (max-width: 660px) {
    padding: 0rem 4rem 7rem;
  }

  @media (max-width: 480px) {
    padding: 0rem 1rem 4rem;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  }
`;
function Intro() {
  return (
    <section>
      <IntroBanner>
        <div>
          <h2>Hello, I'm Nirjan</h2>
          <p>
            I design and develop websites and applications that are blazing
            fast, user friendly, optimized and accessible to everyone. I also
            love sharing my knowledge about web development and UI/UX design
            through my <Link to="/blog">blog</Link>,{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              twitter
            </a>{" "}
            and{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
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
        </div>
      </IntroBanner>
    </section>
  );
}

export default Intro;
