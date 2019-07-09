import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo/logo.png';

function NavBrand() {
  return (
    <Link to="/">
      <h1
        aria-hidden="true"
        style={{
          visibility: 'hidden',
          opacity: 0,
          fontSize: '0.1px',
          position: 'absolute',
        }}
      >
        Studio Dagger
      </h1>
      <img
        style={{
          maxHeight: '3rem',
        }}
        src={logo}
        alt="studio dagger"
      />
    </Link>
  );
}

export default NavBrand;
