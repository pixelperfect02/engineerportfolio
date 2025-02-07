import "./custom.css";
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function About() {
  return (
    <section id="about" className="about-section">
     
     <div className="animation-container">
        <DotLottieReact
          src="https://lottie.host/70ea820a-d9d2-493a-8d43-79efc58f9aa6/AZO6Wwy8jk.lottie"
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
