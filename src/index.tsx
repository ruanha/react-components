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
        element: (
          <Component
            component={{ id: "progress-bar", title: "Progress Bar" }}
          />
        ),
      },
      {
        path: "progress-bar-ii",
        element: (
          <Component
            component={{ id: "progress-bar-ii", title: "Progress Bar II" }}
          />
        ),
      },
      {
        path: "accordion",
        element: (
          <Component component={{ id: "accordion", title: "Accordion" }} />
        ),
      },
      {
        path: "button",
        element: (
          <Component component={{ id: "button", title: "Like Button" }} />
        ),
      },
      {
        path: "tabs",
        element: <Component component={{ id: "tabs", title: "Tabs" }} />,
      },
      {
        path: "navbar",
        element: <Component component={{ id: "navbar", title: "Navbar" }} />,
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
