import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <Link className="logo" to="/"><Logo /></Link>
      <Nav />
    </header>
  );
}

export default Header;
