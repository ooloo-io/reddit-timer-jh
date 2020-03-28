import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import {
  HeaderStyled, Nav, NavLinkWrap, LogoLink,
} from './Header.style';

function Header() {
  return (
    <HeaderStyled>
      <LogoLink className="logo" to="/">
        <Logo />
      </LogoLink>
      <Nav>
        <NavLinkWrap>
          <Link to="/search?q=javascript">Search</Link>
        </NavLinkWrap>
        <NavLinkWrap>
          <Link className="nav-link" to="/#how-it-works">How it works</Link>
        </NavLinkWrap>
        <NavLinkWrap>
          <Link className="nav-link" to="/#about">About</Link>
        </NavLinkWrap>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
