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
      <>
        <Navbar/>
        <img className="proPic" src={"https://media-exp1.licdn.com/dms/image/C4D03AQEZgH0HKMFPsQ/profile-displayphoto-shrink_800_800/0/1576449769156?e=1638403200&v=beta&t=1Huk17zZR4WHKzUR-ucZvOSppglrURd5FsP79HQNIGg"}/>
        <div className="aboutMe">My name is MarcAnthony Petrecca. I am software engineer located in the greater NYC area.</div>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));