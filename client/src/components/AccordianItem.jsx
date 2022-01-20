import React from 'react';
import GithubIcon from './GithubIcon';


const AccordianItem = ({project, index, selected, setSelected, toggle}) => {
  return (
    <section className="project">
      <header className={`accordian_header ${project.title}`} onClick={() => toggle(selected, setSelected, index)}>
        <span className="button_span">
          <p className="accordian_title">{project.title}</p>
        </span>
      </header>
      <div className={selected === index ? "content show" : "content"}>
        <div className="item_header">
          <img className={`accordian_img ${project.title}`} src={project.img} alt={`${project.title} application photo`}/>
          <div className="info_container">
            <p className="item_description">{project.description}</p>
            <div className="project_technology">
              {project.technology.map((tech) => <span>{tech}</span>)}
            </div>
            <GithubIcon github={project.github}/>
          </div>
        </div>
        <ul className="accordian_list_container">
          {project.text.map((bullet, i) => (<li className="accordian_list_item" key={i}><span className="bullet">{bullet}</span></li>))}
        </ul>
      </div>
    </section>
  );
};

export default AccordianItem; 

