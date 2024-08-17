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
            <p>
              "I'm a self-taught Frontend Developer who builds interfaces for
              users to have great experiences,trying to improve myself on the
              <br />
              web since December 2021 and enjoying it!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
