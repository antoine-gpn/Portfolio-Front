import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/project/:tag" element={<ProjectPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
