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
