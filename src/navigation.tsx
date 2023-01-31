import { Link } from "react-router-dom";

import "./navigation.css";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link to="progress-bar">Progress Bar</Link>
        </li>
        <li>
          <Link to="accordion">Accordion</Link>
        </li>
        <li>
          <Link to="button">Button</Link>
        </li>
      </ul>
    </>
  );
}
