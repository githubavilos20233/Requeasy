import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";

// Import your custom CSS
import "./assets/css/index.css";
import "./assets/css/homepage.css"; // Only if homepage styles are separate

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
