"use client";
import { TypeAnimation } from "react-type-animation";
import "./hero.scss";
const Hero = () => {
  return (
    <section>
      <div className="hero">
        <div className="logo">
          <img src="/photo.png" alt="photo" />
          <div className="logo__text">
            <span>Cihan Dündar</span>
            <TypeAnimation
              sequence={["Junior Frontend Developer"]}
              wrapper="span"
              style={{ fontWeight: "700" }}
              speed={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
