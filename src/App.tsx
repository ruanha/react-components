import { useState, MouseEvent } from "react";

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
              <a href="#progress-bar" onClick={handleComponentClick}>
                Progress Bar
              </a>
            </li>
            <li>
              <a href="#accordion" onClick={handleComponentClick}>
                Accordion
              </a>
            </li>
            <li>
              <a href="#button" onClick={handleComponentClick}>
                Button
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <h2>MAIN CONTENT</h2>
          {selectedComponent}
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
