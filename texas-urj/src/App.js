import logo from './logo.svg';
import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";  // Adjust the import path accordingly
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
}
