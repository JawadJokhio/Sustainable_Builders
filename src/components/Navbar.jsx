import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg"; // apna logo yahan rakho

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <span>Sustainable Builders</span>
        </div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact" className="nav-btn">Contact</a>
        </div>

        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
