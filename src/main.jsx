import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ToastContainer
        limit={3}
        autoClose={3000}
        transition={Bounce}
        draggable
        draggablePercent={10}
      />
      <App />
    </Router>
  </React.StrictMode>
);
