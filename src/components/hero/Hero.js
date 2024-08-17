import "./hero.scss";
const Hero = () => {
  return (
    <section>
      <div className="logo">
        <img src="/photo.png" alt="photo" />
        <div className="logo__text">
          <span>Cihan Dündar</span>
          <span className="tag">Junior Frontend Developer</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
