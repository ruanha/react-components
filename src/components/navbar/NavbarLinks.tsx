import { Link } from "react-router-dom";

export default function NavbarLinks({ items }: { items: item[] }) {
  const links = items.map((item) => {
    return (
      <li>
        <Link to={item.link}>{item.title}</Link>
      </li>
    );
  });
  return <div className="navbar-links">{links}</div>;
}

type item = {
  title: string;
  link: string;
};
