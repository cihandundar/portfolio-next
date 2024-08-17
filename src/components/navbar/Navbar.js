import "./navbar.scss";
const SideBar = () => {
  return (
    <header>
      <nav>
        <div className="info">
          <img src="/photo.jpg" alt="photo" />
          <span>Cihan Dündar</span>
          <p>Junior Frontend Developer</p>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
