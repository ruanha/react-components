import { Routes, Route } from "react-router-dom";
import Component from "./Component";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Components</h1>
      </header>
      <main>
        <h2>COMPONENT</h2>
        <Routes>
          <Route path="/" element={<Component componentId="none" />} />
          <Route
            path="/react-components"
            element={<Component componentId="none" />}
          />
          <Route
            path="/react-components/accordion"
            element={<Component componentId="accordion" />}
          />
          <Route
            path="/react-components/tabs"
            element={<Component componentId="tabs" />}
          ></Route>
          <Route
            path="/react-components/progress-bar"
            element={<Component componentId="progress-bar" />}
          ></Route>
          <Route
            path="/react-components/progress-bar-ii"
            element={<Component componentId="progress-bar-ii" />}
          ></Route>
          <Route
            path="/react-components/like-button"
            element={<Component componentId="like-button" />}
          ></Route>
        </Routes>
      </main>
      <script src="src/index.js"></script>
    </div>
  );
}

export default App;
