import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin: 2rem 0;
`;

const NavbarLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  &.active {
    border-bottom: 2px solid grey;
  }
`;

export const Navbar = () => {
  return (
    <NavContainer>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/editor">Editor</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
    </NavContainer>
  );
};
