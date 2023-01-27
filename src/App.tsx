import { Outlet } from "react-router-dom";

import "./App.css";
import Navigation from "./navigation";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Components</h1>
      </header>
      <div className="columns">
        <nav>
          <Navigation />
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
