import { Outlet, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Components</h1>
      </header>
      <main>
        <h2>COMPONENT</h2>
        <Link to="progress-bar">Progress-Bar</Link>
        <Outlet />
      </main>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
