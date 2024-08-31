// src/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-center">
                <div className="navbar-brand">
                    <a href="#" className="brand-logo">Brand</a>
                </div>
                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Feed</a>
                    <a href="#" className="nav-link">Mentorship</a>
                    <a href="#" className="nav-link">Peer to Peer</a>
                    <a href="#" className="nav-link">How it work</a>
                    <a href="#" className="nav-link">Roadmap</a>
                </div>
                <div className="navbar-login">
                    <button className="login-btn">Login</button>
                </div>
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
