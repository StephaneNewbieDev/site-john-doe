import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Realisations from "./pages/Realisations";
import Contact from "./pages/Contact";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
