import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
