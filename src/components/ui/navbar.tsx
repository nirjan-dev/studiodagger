import React from 'react';
import { Link } from 'gatsby';
function Navbar() {
  return (
    <nav
      role="primary"
      style={{
        flex: 1,
      }}
    >
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
    </nav>
  );
}

export default Navbar;
