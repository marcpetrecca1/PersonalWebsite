import React from 'react';

// import MediaQuery from 'react-responsive';

const Navbar = () => {

  // const clicked = {clicked: false};

  // const [open, setOpen] = useState(clicked);

  // const toggleNav = () => {
  //   const nav = document.querySelector('.nav-links');
  //   const aTag = document.querySelector('.nav-links a');
  //   const body = document.querySelector('body');
  //   const burger = document.querySelector('.burger');

  //   aTag.addEventListener('click', () => {
  //     nav.classList.toggle('nav-active');
  //   });
  // };

  // its not working because toggleNav is being invoked .. still work to do .. don't panic

  return (
    <nav className="navbar">
      <span className="logo">MP</span>
      <ul className="nav-links">
        <li><a className="main-nav-link" href="#about">About</a></li>
        <li><a className="main-nav-link" href="#work">Work</a></li>
        <li><a className="main-nav-link" href="#tech">Tech</a></li>
        <li><a className="main-nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

{ /* <div className="logo">
<h3 className="fullName">MarcAnthony Petrecca</h3>
<MediaQuery minWidth={375}>
  <h3 className="initals">MP</h3>
</MediaQuery>
</div> */ }
export default Navbar;