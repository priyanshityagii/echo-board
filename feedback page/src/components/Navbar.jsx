import React, { useState } from "react";
import logo from "../assets/images/logo.jpeg";

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-brand">EchoBoard</h1>
      </div>

<div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>About us</li>
        <li>Admin</li>
        <li>
          <i className="fas fa-user-circle"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
