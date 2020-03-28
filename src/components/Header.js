import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import {
  HeaderStyled, Nav, NavLink, LogoLink,
} from './Header.style';

function Header() {
  return (
    <HeaderStyled>
      <LogoLink className="logo" to="/">
        <Logo />
      </LogoLink>
      <Nav>
        <NavLink to="/search?q=javascript">Search</NavLink>
        <NavLink to="/#how-it-works">How it works</NavLink>
        <NavLink to="/#about">About</NavLink>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
