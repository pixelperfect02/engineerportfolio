// src/components/About.js
import "./custom.css"
import { about } from "../data";
import React from "react";

export default function About() {
  return (
    <section id="about" className="text-gray-400 bg-black body-font">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <br></br>
          <br></br>
          <br></br>
          <h1 className="title-font navbar-brand sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I'm Archie.
            <br className="hidden lg:inline-block" /><br></br>I love to build amazing
            apps.
          </h1>
          <p className="mb-8 navbar leading-relaxed text-justify text-teal-300">
          Knowledge gained from my passion for computer software as well as my field of study has equipped me with a deep understanding in the various computer. 
          In addition to this, it has made me proficient in numerous programming languages and taught me how to quickly learn any new language through practice.
          In addition to this, it has made me proficient in numerous programming languages and taught me archie archie abczg.
          </p>
        <div className="social-media-div">
        <div className ="flex space-x-5 ...">
  
        <a
          href={about.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg class='bg-white h-16 w-16 rounded-lg fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
      </a>
   
      <br></br>

      
        <a
          href={about.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
        
       <svg class='bg-white h-16 w-16 rounded-lg fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z"/></svg>
      </a>
     

      <br></br>
        <a
          href={`mailto:${about.linkedin}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        <svg  class='bg-white h-16 w-16 rounded-lg fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
      </a>
      <br></br>
        <a
          href={about.gmail}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        <svg class='bg-white h-16 w-16 rounded-lg fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
      </a>
      <br></br>
        <a
          href={about.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
        <svg class='bg-white h-16 w-16 rounded-lg fontawesomesvg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"/></svg>
        <span></span>
      </a>
    <br></br>
    </div>
    </div>
    <br></br>
    
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex navbar-brand text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 navbar-brand inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 hover:text-white rounded text-lg">
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
      
           <br></br>
           <br></br>
          
         

    </section>
  );
} 