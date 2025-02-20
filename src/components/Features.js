import React from 'react';

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
