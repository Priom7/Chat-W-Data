import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DetailedFeatures from './components/DetailedFeatures';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <DetailedFeatures />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;