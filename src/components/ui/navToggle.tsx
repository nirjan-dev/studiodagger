import React from "react";
import styled from "@emotion/styled";

const MenuIcons = styled.span`
  position: relative;
  margin-left: 0.2rem;

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    transition: all 250ms ease-out;
  }
  &::after,
  &::before,
  & {
    width: 30px;
    height: 3px;
    background-color: currentColor;
    display: inline-block;
  }

  &::before {
    top: -10px;
  }
  &::after {
    bottom: -10px;
  }

  .is-open & {
    height: 0;
    &::before {
      transform: rotate(45deg);
      top: 0;
    }
    &::after {
      transform: rotate(-45deg);
      bottom: 0;
      top: 0;
    }
  }
`;

const ToggleButton = styled.button`
  display: flex;
  z-index: 2;
  align-items: center;
  background-color: transparent;
  border: none;
  justify-content: space-between;
  cursor: pointer;

  @media (min-width: 845px) {
    display: none;
  }
`;

interface NavToggleProps {
  onToggle: () => void;
  isOpen: boolean;
}
function NavToggle({ onToggle, isOpen }: NavToggleProps) {
  return (
    <ToggleButton className={isOpen ? "is-open" : ""} onClick={onToggle}>
      Menu
      <MenuIcons></MenuIcons>
    </ToggleButton>
  );
}

export default NavToggle;
