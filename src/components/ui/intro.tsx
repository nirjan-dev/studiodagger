/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import StyledLink from './styledLink';

const IntroBanner = styled.div`
  background: ${props => props.theme.colors.secondaryGradient};
  padding: 2rem 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 93%);

  p {
    line-height: 1.8;
    max-width: 60ch;
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
          <h2>Hello, I'm Nirjan 👋</h2>
          <p>
            As a full stack web developer, I design and create websites and web
            applications that are accessible, user-friendly and optimized. If
            you need someone who is passionate about using their coding skills
            to create wonderful web experiences for your users then I'm your
            guy.
          </p>
          <StyledLink to="/contact">Get in touch</StyledLink>
        </div>
      </IntroBanner>
    </section>
  );
}

export default Intro;
