import Link from "next/link";
import "./sidebar.scss";
const SideBar = () => {
  return (
    <aside>
      <div className="info">
        <img src="/photo.jpg" alt="photo" />
        <span>Cihan Dündar</span>
        <p>Junior Frontend Developer</p>
      </div>
      <ul className="links">
        <li>
          <Link href="/projects">Projeler</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
