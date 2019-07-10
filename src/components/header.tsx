import React from 'react';
import NavBrand from './ui/navBrand';
import Navbar from './ui/navbar';
function Header() {
  return (
    <header
      style={{
        display: 'flex',
        padding: '0.2rem 1rem',
      }}
      role="primary"
    >
      <NavBrand />
      <Navbar />
    </header>
  );
}

export default Header;
