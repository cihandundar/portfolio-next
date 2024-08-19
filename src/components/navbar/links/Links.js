import Link from "next/link";
import "./links.scss";
const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Projects",
      path: "/projects",
    },
    {
      title: "Skills",
      path: "/skills",
    },
  ];
  return (
    <ul>
      <li>
        {links.map((link) => (
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default Links;
