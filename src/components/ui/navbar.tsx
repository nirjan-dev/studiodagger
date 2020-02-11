import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const navItems = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Blog",
    link: "/blog"
  },
  {
    name: "Contact",
    link: "/contact"
  }
];

const Ul = styled.ul`
  padding: 0;
  display: flex;
  list-style-type: none;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.dark};
  transition: all 300ms ease-out;
  display: inline-block;
  padding: 0.3em 2em;
  min-width: 5rem;
`;

function Navbar() {
  return (
    <nav>
      <Ul>
        {navItems.map(item => (
          <li key={item.name}>
            <StyledLink activeClassName="active" to={item.link}>
              {item.name}
            </StyledLink>
          </li>
        ))}
      </Ul>
    </nav>
  );
}

export default Navbar;
