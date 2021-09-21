import React from 'react';
import Burger from './Burger';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <h3>MarcAnthony Petrecca</h3> 
    </div>
    <ul className="nav-links">
      <li><a href="0">About</a></li>
      <li><a href="0">Experience</a></li>
      <li><a href="0">Work</a></li>
      <li><a href="0">Contact</a></li>
    </ul>
    <Burger/>
  </nav>
);

export default Navbar;