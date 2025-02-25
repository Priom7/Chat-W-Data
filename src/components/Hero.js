import React, { useState, useEffect, useMemo } from "react";
import "../styles/Hero.css";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.png";
import givhutIcon from "../assets/images/github-128.png"; 

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
  }, [images.length]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Chat‑W‑Data</h1>
        <p>
          Fine-tuned system to chat with both structured and unstructured
          data. Convert natural language into SQL queries seamlessly. <br/>
            <strong>⭐ Leave a Star on GitHub : </strong>
            <a href="https://github.com/Priom7/Chat-W-Data" target="_blank" rel="noopener noreferrer" className="givhut-link">
            <img src={givhutIcon} alt="Givhut" className="givhut-icon" />
          </a>
        </p>
      
          <a href="https://chat-with-data.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn">View Demo</button>
          </a>
       
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
