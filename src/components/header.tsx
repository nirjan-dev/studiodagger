import React from 'react';
import NavBrand from './ui/navBrand';
import Navbar from './ui/navbar';
import styled from '@emotion/styled';

const HeaderStyled = styled.header`
  display: flex;
  padding: 0.2rem 1rem;
  align-items: center;
`;

function Header() {
  return (
    <HeaderStyled role="primary">
      <NavBrand />
      <Navbar />
    </HeaderStyled>
  );
}

export default Header;
