import "./skills.scss";
import { skills } from "../../data/Skills";

const Skills = () => {
  return (
    <section className="skills">
      <span>Skills</span>
      <div className="wrapper">
        {skills.map((skill, index) => (
          <div key={index} className="skills__item">
            <img src={skill.image} alt="skillImage" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
