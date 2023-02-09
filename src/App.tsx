import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Components</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
