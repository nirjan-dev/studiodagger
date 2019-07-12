/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from '@emotion/styled';
import StyledLink from '../ui/StyledLink';

const IntroBanner = styled.div`
  background: ${props => props.theme.colors.secondaryGradient};
  padding: 5rem 4rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    line-height: 1.8;
    max-width: 40ch;
  }

  @media (max-width: 660px) {
    padding: 4rem 3rem 6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem 3rem;
  }
`;
function Intro() {
  return (
    <section>
      <IntroBanner>
        <div>
          <h2>Hello, I'm Nirjan 👋</h2>
          <p>
            As a full stack web developer I design and create websites and web
            applications that are accessible, user-friendly and optimized. If
            you need someone who is passionate about using their coding skills
            to create wonderful web expreiences for people then I'm your guy..
          </p>
          <StyledLink to="/contact">Get in touch</StyledLink>
        </div>
      </IntroBanner>
    </section>
  );
}

export default Intro;
