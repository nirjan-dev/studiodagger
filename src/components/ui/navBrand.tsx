import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../images/logo/logo.png';

const Img = styled.img`
  max-height: 3rem;
  padding: 0.2rem;
`;

function NavBrand() {
  return (
    <Link to="/">
      <h1 aria-hidden="true" className="hidden">
        Studio Dagger
      </h1>
      <Img
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
