import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">FinLiteracy</div>
      <button className="navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#modules">Learning Modules</a></li>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;