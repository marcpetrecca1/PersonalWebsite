import React from 'react';

const Technology = (props) => (
  <section className="tech_container" id="tech">
    <div className="style">
      <h2 className="tech_header"><strong>Technology</strong></h2>
      <div className="grid-4-cols">
        <div className="gridboxes">
          <h3 className="features-title"><strong>Front End</strong></h3>
          <div className="techboxes">
            {props.technology.frontend.map((tech, i) => (
              <span key={i} className="features-text">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="gridboxes">
          <h3 className="features-title">
            <strong>Back End</strong>
          </h3>
          <div className="techboxes">
            {props.technology.backend.map((tech, i) => (
              <span key={i} className="features-text">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="gridboxes">
          <h3 className="features-title">
            <strong>Testing/Development</strong>
          </h3>
          <div className="techboxes">
            {props.technology.testing.map((tech, i) => (
              <span key={i} className="features-text">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="gridboxes">
          <h3 className="features-title">
            <strong>Deployment</strong>
          </h3>
          <div className="techboxes">
            {props.technology.deployment.map((tech, i) => (
              <span key={i} className="features-text">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technology; 