import React from 'react';
import { Link } from 'gatsby';
function Navbar() {
  return (
    <nav
      role="main"
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
          <Link style={{ marginLeft: '0.5rem', textDecoration: 'none' }} to="/">
            Home
          </Link>
          <Link
            style={{ marginLeft: '0.5rem', textDecoration: 'none' }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{ marginLeft: '0.5rem', textDecoration: 'none' }}
            to="/blog"
          >
            Blog
          </Link>
          <Link
            style={{ marginLeft: '0.5rem', textDecoration: 'none' }}
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
