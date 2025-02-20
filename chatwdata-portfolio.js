#!/usr/bin/env node

/**
 * This script automates:
 * 1. Creating a new React app using create-react-app.
 * 2. Setting up a folder structure with modern-styled components and pages.
 * 3. Writing starter code that mimics a design similar to genloop.ai/platform.
 *
 * Run this script with:
 *   chmod +x create-portfolio.js
 *   ./create-portfolio.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = 'chatwdata-portfolio';

// Step 1: Create the React app
console.log(`Creating React app: ${appName}...`);
execSync(`npx create-react-app ${appName}`, { stdio: 'inherit' });

// Change working directory to the new app folder
process.chdir(appName);
console.log(`Changed directory to ${process.cwd()}`);

// Step 2: Create custom directories for components and styles
const dirsToCreate = ['src/components', 'src/styles'];
dirsToCreate.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// Step 3: Overwrite/Create Files with Updated Starter Code

// --- src/index.js ---
const indexJs = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/themes.css';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
`;
fs.writeFileSync(path.join('src', 'index.js'), indexJs, 'utf8');

// --- src/App.js ---
const appJs = `import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
`;
fs.writeFileSync(path.join('src', 'App.js'), appJs, 'utf8');

// --- src/components/Navbar.js ---
const navbarJs = `import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Chat‑W‑Data</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
`;
fs.writeFileSync(path.join('src', 'components', 'Navbar.js'), navbarJs, 'utf8');

// --- src/components/Hero.js ---
const heroJs = `import React from 'react';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Chat‑W‑Data</h1>
        <p>
          Fine-tuned system to chat with both structured and unstructured data.
          Convert natural language into SQL queries seamlessly.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
`;
fs.writeFileSync(path.join('src', 'components', 'Hero.js'), heroJs, 'utf8');

// --- src/components/Features.js ---
const featuresJs = `import React from 'react';

function Features() {
  return (
    <section id="features" className="features">
      <h2>Platform Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Natural Language Querying</h3>
          <p>Seamlessly convert prompts to SQL queries.</p>
        </div>
        <div className="feature-card">
          <h3>Dynamic Tables</h3>
          <p>Interact with highly customizable tables.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable Charts</h3>
          <p>Change plots dynamically with intuitive controls.</p>
        </div>
        <div className="feature-card">
          <h3>Export Options</h3>
          <p>Download your data in PDF, CSV, or Excel formats.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
`;
fs.writeFileSync(path.join('src', 'components', 'Features.js'), featuresJs, 'utf8');

// --- src/components/CallToAction.js ---
const ctaJs = `import React from 'react';

function CallToAction() {
  return (
    <section className="cta">
      <h2>Ready to Transform Your Data Interaction?</h2>
      <button className="cta-btn">Get Started</button>
    </section>
  );
}

export default CallToAction;
`;
fs.writeFileSync(path.join('src', 'components', 'CallToAction.js'), ctaJs, 'utf8');

// --- src/components/Footer.js ---
const footerJs = `import React from 'react';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>&copy; {new Date().getFullYear()} Chat‑W‑Data. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
`;
fs.writeFileSync(path.join('src', 'components', 'Footer.js'), footerJs, 'utf8');

// --- src/styles/themes.css ---
// Global theming variables (light mode defaults; you can extend to dark mode if desired)
const themesCss = `:root {
  --primary-color: #ffffff;
  --secondary-color: #ff7f50;
  --background-color: #f7f7f7;
  --text-color: #333333;
  --gradient-start: #0f2027;
  --gradient-mid: #203a43;
  --gradient-end: #2c5364;
}

body, html {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}
`;
fs.writeFileSync(path.join('src', 'styles', 'themes.css'), themesCss, 'utf8');

// --- src/styles/App.css ---
const appCss = `/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 100;
  background: transparent;
}
.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}
.nav-links {
  list-style: none;
  display: flex;
}
.nav-links li {
  margin-left: 2rem;
}
.nav-links a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
}
.nav-links a:hover {
  color: var(--secondary-color);
}

/* Hero Section */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 2rem;
}
.hero-content h1 {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.cta-btn {
  background: var(--secondary-color);
  border: none;
  padding: 1rem 2rem;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 30px;
  transition: background 0.3s ease;
}
.cta-btn:hover {
  background: #ff6347;
}

/* Features Section */
.features {
  padding: 4rem 2rem;
  background-color: var(--background-color);
  text-align: center;
}
.features h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.feature-card {
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-10px);
}
.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.feature-card p {
  font-size: 1rem;
  color: #555;
}

/* Call To Action Section */
.cta {
  padding: 4rem 2rem;
  text-align: center;
  background: var(--gradient-end);
  color: #fff;
}
.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

/* Footer */
.footer {
  padding: 2rem;
  background-color: var(--gradient-mid);
  color: #fff;
  text-align: center;
}
`;
fs.writeFileSync(path.join('src', 'styles', 'App.css'), appCss, 'utf8');

// Step 4: Final Message
console.log('React portfolio app created successfully!');
console.log('To get started:');
console.log(`  cd ${appName}`);
console.log('  npm start');
