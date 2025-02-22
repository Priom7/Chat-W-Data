// filepath: /Users/hin/Desktop/chat-w-data/chatwdata-portfolio/src/components/Features.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import feature1 from '../assets/featureImages/feature1.png';
import feature2 from '../assets/featureImages/feature2.png';
import feature4 from '../assets/featureImages/feature4.png';
import feature5 from '../assets/featureImages/feature5.png';

function Features() {
  return (
    <section id="features" className="features py-5">
      <Container>
        <h2 className="text-center mb-5">Platform Features</h2>
        <Row>
          <Col md={3}>
            <Card className="feature-card">
              <Card.Img variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Natural Language Querying</Card.Title>
                <Card.Text>Seamlessly convert prompts to SQL queries.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="feature-card">
              <Card.Img variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Dynamic Tables</Card.Title>
                <Card.Text>Interact with highly customizable tables.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="feature-card">
              <Card.Img variant="top" src={feature4} />
              <Card.Body>
                <Card.Title>Customizable Charts</Card.Title>
                <Card.Text>Change plots dynamically with intuitive controls.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="feature-card">
              <Card.Img variant="top" src={feature5} />
              <Card.Body>
                <Card.Title>Export Options</Card.Title>
                <Card.Text>Download your data in PDF, CSV, or Excel formats.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;