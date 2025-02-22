// filepath: /Users/hin/Desktop/chat-w-data/chatwdata-portfolio/src/components/CallToAction.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <section className="cta py-5 text-center">
      <Container>
        <h2>Ready to Transform Your Data Interaction?</h2>
        <Button variant="primary" className="cta-btn mt-3">Get Started</Button>
      </Container>
    </section>
  );
}

export default CallToAction;