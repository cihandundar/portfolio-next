import Links from "./links/Links";
import "./navbar.scss";
const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__container">
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
