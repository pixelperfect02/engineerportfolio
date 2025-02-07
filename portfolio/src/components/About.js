import "./custom.css";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="animation-container">
        <DotLottieReact
          src="https://lottie.host/09b708e2-8056-41a9-a475-0f3a589ef6bc/VCaoxJeHk3.lottie"
          loop
          autoplay
        />
      </div>

      <div className="girl-image-container">
        <img 
          className="girl-3d-image"
          src="./About.png" 
          alt="3D Girl Illustration"
        />
      </div>
    </section>
  );
}
