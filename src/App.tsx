import { Outlet, Link } from "react-router-dom";

import "./App.css";

function App() {
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
              <Link to="progress-bar">Progress Bar</Link>
            </li>
            <li>
              <Link to="accordion">Accordion</Link>
            </li>
            <li>
              <Link to="button">Button</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h2>MAIN CONTENT</h2>
          <Outlet context={"main"} />
        </main>
        <aside>
          <h2>ASIDE</h2>
          <Outlet context={"aside"} />
        </aside>
      </div>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
