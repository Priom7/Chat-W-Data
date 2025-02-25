// filepath: /Users/hin/Desktop/chat-w-data/chatwdata-portfolio/src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer py-4 bg-dark text-white text-center" id="contact">
      <Container>
        <p>&copy; {new Date().getFullYear()} Chat‑W‑Data | Md Sharif Alam | All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
