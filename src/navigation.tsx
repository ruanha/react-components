import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Link
        style={{ display: "inline-block", margin: "0 1rem 0.5rem" }}
        to="progress-bar"
      >
        Progress-Bar
      </Link>
      <Link
        style={{ display: "inline-block", margin: "0 1rem 0.5rem" }}
        to="accordion"
      >
        Accordion
      </Link>
      <Link
        style={{ display: "inline-block", margin: "0 1rem 0.5rem" }}
        to="button"
      >
        Like Button
      </Link>
      <Link
        style={{ display: "inline-block", margin: "0 1rem 0.5rem" }}
        to="tabs"
      >
        Tabs
      </Link>
    </>
  );
}
