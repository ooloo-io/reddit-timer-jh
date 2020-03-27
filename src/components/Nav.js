import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link className="nav-link" to="/search?q=javascript">Search</Link>
      <Link className="nav-link" to="/#about">About</Link>
      <Link className="nav-link" to="/#how-it-works">How it works</Link>
    </nav>
  );
}

export default Nav;
