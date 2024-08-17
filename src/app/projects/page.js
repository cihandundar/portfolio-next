import React from "react";
import { projects } from "../../data/Project";
const Projects = () => {
  return (
    <section>
      <div>
        <h1>Projects</h1>
        <div>
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <img src={project.image} alt={project.name} />
              <h2>{project.name}</h2>
              <div className="technologies">
                {project.technologies.map((tech) => (
                  <img src={tech.image} alt={tech.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
