import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  const navbarStyle = {
    background: 'linear-gradient(to right, var(--gradient-start), var(--gradient-mid), var(--gradient-end))',
    color: 'var(--primary-color)'
  };

  return (
    <Navbar style={navbarStyle} expand="lg" fixed="top">
      <Navbar.Brand href="#hero" style={{ color: 'var(--primary-color)' }}>Chat‑W‑Data</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#hero" style={{ color: 'var(--primary-color)' }}>Home</Nav.Link>
          <Nav.Link href="#features" style={{ color: 'var(--primary-color)' }}>Features</Nav.Link>
          <Nav.Link href="#contact" style={{ color: 'var(--primary-color)' }}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;