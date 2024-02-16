import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import App from "./Easy-banking/App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/">
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </HashRouter>
);
