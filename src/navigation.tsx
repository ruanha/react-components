import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <h2>NAVIGATION</h2>
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
