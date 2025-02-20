import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Chat‑W‑Data</div>
      <ul className="nav-links text-center">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
