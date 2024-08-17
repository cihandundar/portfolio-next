import "./projects.scss";
import { projects } from "../../data/Project";
import Card from "@/components/card/Card";
const Projects = () => {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="container">
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
