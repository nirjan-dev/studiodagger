import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
  flex: 1;
`;

const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin-left: 1.5rem;
  color: ${props => props.theme.colors.dark};
  transition: all 300ms ease-out;
  border-bottom: 3px solid transparent;
  padding: 0.8rem 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: ${props => props.theme.colors.secondary};
    transform: scale(0);
    transition: 200ms transform ease-out;
  }
  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${props => props.theme.colors.secondary};
  }
  &:hover:after,
  &:focus:after,
  &:active:after,
  &.active:after {
    transform: scale(1);
  }
`;

function Navbar() {
  return (
    <Nav role="primary">
      <Ul>
        <li>
          <StyledLink activeClassName="active" to="/">
            Home
          </StyledLink>
          <StyledLink activeClassName="active" to="/about">
            About
          </StyledLink>
          <StyledLink activeClassName="active" to="/blog">
            Blog
          </StyledLink>
          <StyledLink activeClassName="active" to="/contact">
            Contact
          </StyledLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default Navbar;
