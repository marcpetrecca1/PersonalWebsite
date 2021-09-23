import React from 'react';
import Burger from './Burger';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h3>MarcAnthony Petrecca</h3> 
    </div>
    <ul className="nav-links">
      <li><a href="#">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <Burger/>
  </nav>
);

export default Navbar;