import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.hydrateRoot(
  rootElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
