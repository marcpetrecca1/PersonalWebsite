import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.navSlide = this.navSlide.bind(this);
  }

  componentDidMount () {
    this.navSlide();
  }

  navSlide () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
        }
      });

      burger.classList.toggle('toggle');
    });

  }

  clickHandler (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
  }

  smoothScroll () {
    const navATags = document.querySelectorAll('.nav-links a');
    navATags.addEventListener('click', () => {
      
    });
  }

  render() {
    return (
      <div className="main">
        <Navbar/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));