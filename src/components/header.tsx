import React from "react";
import NavBrand from "./ui/navBrand";
import Navbar from "./ui/navbar";
import styled from "@emotion/styled";

const HeaderStyled = styled.header`
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <NavBrand />
      <Navbar />
    </HeaderStyled>
  );
}

export default Header;
