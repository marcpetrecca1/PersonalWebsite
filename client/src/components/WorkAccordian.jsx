import React, { useState } from 'react';
import AccordianItem from './AccordianItem';

const WorkAccordian = (props) => {
  const [selected, setSelected] = useState(null);

  const toggle = (sel, setSel, i) => {
    if (sel === i) {
      return setSel(null);
    }
    setSel(i);
  };

  return (
    <section className="accordian_section" id="work">
      <h2 className="projects_title"><strong>Some Things I've Built</strong></h2>
      <div className="projects_container">
        {props.projects.map((project, i) => (
          <AccordianItem key={i} index={i} project={project} selected={selected} setSelected={setSelected} toggle={toggle}></AccordianItem>
        ))}
      </div>
    </section>
  );
};

export default WorkAccordian;
