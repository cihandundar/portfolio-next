"use client";
import { skills } from "@/data/Skills";
import "./skills.scss";
import { TypeAnimation } from "react-type-animation";

const Skills = () => {
  return (
    <section className="skills">
      <TypeAnimation sequence={["SKILLS"]} wrapper="span" speed={20} />
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
