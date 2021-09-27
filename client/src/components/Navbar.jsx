import React from 'react';
import Burger from './Burger';
import MediaQuery from 'react-responsive';

const Navbar = () => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><a href="#">About</a></li>
      <li><a href="#">Experience</a></li>
      <li><a href="#">Work</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <Burger/>
  </nav>
);

{/* <div className="logo">
<h3 className="fullName">MarcAnthony Petrecca</h3>
<MediaQuery minWidth={375}>
  <h3 className="initals">MP</h3>
</MediaQuery>
</div> */}
export default Navbar;