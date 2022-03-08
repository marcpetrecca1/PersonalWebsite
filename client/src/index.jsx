import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import PersonalPhoto from './newphoto.png';
import WorkAccordian from './components/WorkAccordian';
import Technology from './components/Technology';
import ApiImage from './BalancePhoto.png';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


const App = () => {

  const work = [
    {title: 'Balance: Exercise and Meal Application', img: 'https://github.com/Wide-Open-Blue-Ocean/Blue-Ocean/raw/main/dist/images/Workout/Workout-All-Open.png', description: "MERN stack desktop application where users create personalized daily regimens for food and exercise, and track kpis and personal goals", technology: ["Node.js", "React", "Express", "MongoDB"], github: "https://github.com/Wide-Open-Blue-Ocean/Blue-Ocean", text: ['Worked on a team of 7 developers, each constructing CRUD operations for our respective features.', 'Designed MongoDB schemas and queries for Journal widget, accounting for data integrity and increased read and write capabilities.', 'Employed React to craft front end structure/functionality and SASS to apply typography,  icons, shadows, and other design rules to emphasize  website personality.', 'Implemented agile workflow, addressed time-boxed tickets, and minimized git merge conflicts.', 'Wrote clean, reusable, and secure code through modular programing']},
    {title: 'Swift Clothing Line: E-commerce API', img: `${ApiImage}`, description: "RESTful Question and Answers API for retail E-commerce Website.", technology: ["Node.js", "FS Module", "Express", "MySQL"], github: "https://github.com/Cavatappi-Engineering-Solutions/project-catwalk", text: ['Designed a backend system with schema for MySQL database, crafted RESTful API endpoints, and implemented efficient queries to access data from multiple tables.', 'Performed an extract and transform process on 3 csv files containing millions of records using Node\'s file system, stream, and readline modules to account for in-file memory limitations, helping to decrease load time by 5-6 hours.', 'Optimized queries for performance bottlenecks through indexing and use of complex subqueries, decreasing latency by 99.4%.']},
    {title: 'Swift Clothing Line: Front End E-commerce Site', img: 'https://github.com/Cavatappi-Engineering-Solutions/project-catwalk/raw/main/client/src/assets/overview/project_catwalk.gif', description: "React Front End application for existing E-commerce Back End.", technology: ["Node.js", "React", "Axios", "Swift API" ], github: "https://github.com/Cavatappi-Engineering-Solutions/project-catwalk", text: ['Constructed front end functionality and design of Questions and Answers module for retail-ecommerce website.', 'Used React, Axios, and JS promises to give users the ability to view and search questions, ask questions, answer questions, and provide feedback on questions about the current product.', 'Implemented Redux store for centralized state, avoiding prop drilling to child components and total page reloads on state updates, leading to a decrease in database requests and increase in website capability.']}
  ];

  const tech = {
    frontend: ["Javascript (ES5 and ES6)", "React", "Redux", "AJAX", "Axios", "HTML5", "CSS3", "jQuery"],
    backend: ["RESTful API Development", "Node.js", "Express", "MySQL", "MongoDB", "ETL"],
    testing: ["Mocha / Chai", "Babel", "Webpack", "Git", "Trello"],
    deployment: ["Docker", "AWS (EC2)"]
  };

  const photo = PersonalPhoto; 

  const [projects, setProjectState] = useState(work);
  const [technology, setTechnology] = useState(tech);
  const [proPic, setProPic] = useState(photo);

  useEffect(() => {
    sectionScroll();
  });

  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      body.classList.toggle('open');
      
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
        }
      });

      burger.classList.toggle('toggle');
    });
  };

  const sectionScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const backButton = document.querySelector('.backToTop');
    
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');

        if (href === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }

        if (href !== '#' && href.startsWith("#")) {
          const section = document.querySelector(href);
          section.scrollIntoView({behavior: "smooth"});
        }

      });

      backButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    });



  };
  
  return (
    <>
      <header className="headerContainer" id="about">
        <Navbar/>
        <AboutMe propic={proPic}/>
      </header>
      <WorkAccordian projects={projects}/>
      <Technology technology={technology}/>
      <div className="dividerContainer">
        <hr className="divider"></hr>
      </div>
      <section className="footer_styling">
        <ContactSection/>
        <Footer/>
      </section>
    </>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));