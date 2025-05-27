import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.jpeg";





const Navbar = ({ 
  brandName = "EchoBoard", 
  navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#admin", label: "Admin Login" }
  ],
  onNavClick 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleNavClick = (href, label) => {
    setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
    if (onNavClick) {
      onNavClick(href, label);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      
      
      <header className="navbar">
        <div className="logo-section">
          <div className="logo">
            <div className="logo-icon"></div>
          </div>
          <h1 className="brand-name">{brandName}</h1>
        </div>
        <nav className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href, item.label);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </header>
    </>
  );
};

export default Navbar;