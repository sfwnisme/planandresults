import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App.jsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

// const

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
