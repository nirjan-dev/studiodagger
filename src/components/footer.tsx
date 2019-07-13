import React from 'react';
import Container from './ui/Container';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.primaryExtraLight};
  padding: 2rem 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  @media (max-width: 630px) {
    padding: 1rem 0;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    @media (max-width: 630px) {
      display: block;
    }
    a {
      margin: 0 2rem;
      transition: color 200ms cubic-bezier(0.39, 0.58, 0.57, 1);
      font-weight: bold;
      font-size: 80%;
      &:hover,
      &:active,
      &:focus {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;
function Footer() {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          twitterUsername
          facebookUsername
          instagramUsername
          githubUsername
        }
      }
    }
  `);
  return (
    <StyledFooter>
      <Container>
        <ul>
          <li>
            <a
              href={`https://facebook.com/${result.site.siteMetadata.facebookUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </li>

          <li>
            <a
              href={`https://twitter.com/${result.site.siteMetadata.twitterUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={`https://github.com/${result.site.siteMetadata.twitterUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href={`https://instagram.com/${result.site.siteMetadata.instagramUsername}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
        </ul>
      </Container>
    </StyledFooter>
  );
}

export default Footer;