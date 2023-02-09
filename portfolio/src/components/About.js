// src/components/About.js
import "./custom.css"
import React from "react";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-orange-100 body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font navbar-brand sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Archie.
            <br className="hidden lg:inline-block" /><br></br>I love to build amazing
            apps.
          </h1>
          <p className="mb-8 navbar leading-relaxed text-justify text-rose-400">
          Knowledge gained from my passion for computer software as well as my field of study has equipped me with a deep understanding in the various computer fields and areas helping me gain a broader theoretical as well as practical knowledge in the field. 
          In addition to this, it has made me proficient in numerous programming languages and taught me how to quickly learn any new language through practice.
          Through developing these skills and knowledge sets I have developed outstanding communication skills, interpersonal abilities, excellent collaboration skills and a positive ‘can do’ attitude which has been reflected throughout my work and volunteer experience. 
          With a motivation and passion for learning and continuous improvement, I am now seeking opportunities to contribute these to an organisation that shares my vision.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex navbar-brand text-white bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 navbar-brand inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              See My Past Work
            </a>

          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-contain h-100 w-70 object-center rounded"
            alt="hero"
            src="./a.gif"
          />
        </div>
      </div>
    </section>
  );
} 