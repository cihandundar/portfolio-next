"use client";
import "./projects.scss";
import { projects } from "../../data/Project";
import Card from "@/components/card/Card";
import { TypeAnimation } from "react-type-animation";
const Projects = () => {
  return (
    <section className="projects">
      <TypeAnimation sequence={["PROJECTS"]} wrapper="span" speed={20} />
      <div className="projects__container">
        {projects.map((project) => (
          <Card
            key={project.id}
            project={project}
            tecnologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
