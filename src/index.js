import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "./componet/Navbar";
import About from "./componet/About";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./componet/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router>
  //   <Routes>
  //     <Route path="/" element={<Navbar />}>
  //       <Route path="header" element={<Header />} />
  //     </Route>
  //     <Route path="about" element={<About />} />
  //   </Routes>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
