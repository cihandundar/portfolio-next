import Links from "./links/Links";
import "./navbar.scss";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__container">
          <div className="logo">
            <img src="/photo.jpg" alt="photo" />
            <div className="logo__text">
              <span>Cihan Dündar</span>
              <p>Junior Frontend Developer</p>
            </div>
          </div>
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
