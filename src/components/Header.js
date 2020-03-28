import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from './logo.svg';

const HeaderStyled = styled.header`
  padding: 0 80px;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  align-self: center;
`;

function Header() {
  return (
    <HeaderStyled>
      <Link className="logo" to="/"><Logo /></Link>
      <Nav>
        <Link className="nav-link" to="/search?q=javascript">Search</Link>
        <Link className="nav-link" to="/#how-it-works">How it works</Link>
        <Link className="nav-link" to="/#about">About</Link>
      </Nav>
    </HeaderStyled>
  );
}

export default Header;
