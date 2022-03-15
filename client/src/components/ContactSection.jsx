import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { config } from '../config/config.js';

const ContactSection = () => (
  <section className="contact_container" id="contact">

    <h2 className="get_in_touch_header">Get In Touch</h2>

    <p className="closing_statement">For any questions, please feel free to reach out and I'll be happy to get back to you!</p>
    <div className="action_container">
      <span className="say_hello">Say Hello</span>
      <a className="email_tag" href={`mailto:${config.email}`} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="envelope" icon={faEnvelope} /></a>
      <a className="linkedin_tag" href={config.linkedIn} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="linkedIn" icon={faLinkedin} /></a>
    </div> 

    <button className="backToTop"><a className="buttonATag" href="#backtotop">Back to top</a></button>

  </section>
);

export default ContactSection;