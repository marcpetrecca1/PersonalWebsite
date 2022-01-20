import React from 'react';

const AboutMe = (props) => (
  <section className="aboutContainer" id="about">
    <img className="proPic" src={props.propic}/>
    <div className="aboutMeTextContainer">
      <h1 className="aboutMeTitle"><strong className="aboutMeTitleStrong">About Me</strong></h1>
      <p className="aboutMeText">My name is <strong className="name">MarcAnthony Petrecca</strong>. I'm a software engineer located in the greater New York City area. I am a lifelong learner with the drive to use my knowledge to positively impact the world around me. In my free time, I love to follow sports, read, and spend time with friends.</p>
    </div>
  </section>
);


export default AboutMe;