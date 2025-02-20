import React, { useState, useEffect, useMemo } from "react";
import "../styles/Hero.css";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.png";

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const images = useMemo(() => [ss1, ss2, ss3, ss4, ss5], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setFade(true);
      }, 1000); // Duration of fade-out transition
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Chat‑W‑Data</h1>
        <p>
          Fine-tuned system to chat with both structured and unstructured
          data. Convert natural language into SQL queries seamlessly.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="hero-banner">
        <img
          src={images[currentImage]}
          alt="Product"
          className={`hero-image ${fade ? "fade-in" : "fade-out"}`}
        />
      </div>
    </section>
  );
}

export default Hero;
