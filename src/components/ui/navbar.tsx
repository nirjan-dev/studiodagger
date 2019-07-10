import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
  flex: 1;
`;

function Navbar() {
  return (
    <Nav role="primary">
      <ul
        style={{
          display: 'flex',
          listStyleType: 'none',
          justifyContent: 'flex-end',
        }}
      >
        <li>
          <Link
            style={{
              marginLeft: '1.5rem',
              color: '#333',
              textDecoration: 'none',
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{
              marginLeft: '1.5rem',
              color: '#333',
              textDecoration: 'none',
            }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{
              marginLeft: '1.5rem',
              color: '#333',
              textDecoration: 'none',
            }}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            style={{
              marginLeft: '1.5rem',
              color: '#333',
              textDecoration: 'none',
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default Navbar;
