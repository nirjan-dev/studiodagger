import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import logo from '../../images/logo/logo.png';

const Img = styled.img`
  height: 3.8rem;
  padding: 0.4rem;
  margin: 0;
`;

function NavBrand() {
  return (
    <Link to="/">
      <h1 aria-hidden="true" className="hidden">
        Studio Dagger
      </h1>
      <Img src={logo} alt="studio dagger" />
    </Link>
  );
}

export default NavBrand;
