import { useState, MouseEvent } from "react";
import { Outlet, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [selectedComponent, setSelectedComponent] = useState("");

  const handleComponentClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const component = event.currentTarget
      .getAttribute("href")
      ?.replace("#", "");
    setSelectedComponent(component ?? "");
  };

  return (
    <div className="app">
      <header>
        <h1>React Components</h1>
      </header>
      <div className="columns">
        <nav>
          <h2>NAVIGATION</h2>
          <ul>
            <li>
              <Link to="progress-bar" onClick={handleComponentClick}>
                Progress Bar
              </Link>
            </li>
            <li>
              <Link to="accordion" onClick={handleComponentClick}>
                Accordion
              </Link>
            </li>
            <li>
              <Link to="button" onClick={handleComponentClick}>
                Button
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h2>MAIN CONTENT</h2>
          <Outlet />
        </main>
        <aside>
          <h2>ASIDE</h2>
        </aside>
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
