import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";

const Navbar = () => {
  return (
    <div className="row">
        <div className="col">
          <Link to="/">Home</Link>
        </div>
        <div className="col">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="col">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="col">
          <Link to="/about">About</Link>
        </div>
        <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      </div>
      

      
  )
}

export default Navbar