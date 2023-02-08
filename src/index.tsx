import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Component from "./Component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "progress-bar",
        element: <Component componentId="progress-bar" />,
      },
      {
        path: "progress-bar-ii",
        element: <Component componentId="progress-bar-ii" />,
      },
      {
        path: "accordion",
        element: <Component componentId="accordion" />,
      },
      {
        path: "button",
        element: <Component componentId="button" />,
      },
      {
        path: "tabs",
        element: <Component componentId="tabs" />,
      },
      {
        path: "navbar-links",
        element: <Component componentId="navbar-links" />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
