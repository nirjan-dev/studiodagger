import React, { useState } from 'react';
import NavBrand from './ui/navBrand';
import Navbar from './ui/navbar';
import styled from '@emotion/styled';
import NavToggle from '../components/ui/navToggle';
const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 300px 1fr;
  padding: 0rem 1rem;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.primaryExtraLight};
  @media (max-width: 844px) {
    grid-template-columns: 1fr 100px;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderStyled role="primary">
      <NavBrand />
      <NavToggle
        isOpen={isOpen}
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
      />
      <Navbar isOpen={isOpen} />
    </HeaderStyled>
  );
}

export default Header;
