import { Link } from "react-router-dom";

import classes from "./navbar.module.css";

export default function Navbar({ items }: { items: item[] }) {
  const links = items.map((item) => {
    return (
      <li key={item.title}>
        <Link to={item.link} className={classes.a}>
          {item.title}
        </Link>
      </li>
    );
  });
  return <ul>{links}</ul>;
}

type item = {
  title: string;
  link: string;
};
