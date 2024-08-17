import "./navbar.scss";
const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/photo.jpg" alt="photo" />
          <div className="logo__text">
            <span>Cihan Dündar</span>
            <p>Junior Frontend Developer</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
