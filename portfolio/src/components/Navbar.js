// src/components/Navbar.js
import "./custom.css"
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font text-white mb-4 md:mb-0">
          <a href="#about" className="text-rose-300 navbar-brand ml-3 font-serif text-xl hover:text-yellow-400">
          <img
            className="object-contain h-20 w-30 object-center rounded"
            alt="hero"
            src="./sign.png"
          />
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-white text-xl mr-5 navbar-brand hover:text-yellow-400">
          <img
            className="object-contain h-22 w-40 object-center rounded"
            alt="hero"
            src="./pw.png"
          />
          </a>
          <a href="#skills" className="text-white text-xl mr-5 navbar-brand font-serif hover:text-yellow-400">
          <img
            className="object-contain h-22 w-40 object-center rounded"
            alt="hero"
            src="./skills.png"
          />
          </a>
          <a href="#testimonials" className="text-white text-xl mr-5 navbar-brand font-serif hover:text-yellow-400">
          <img
            className="object-contain h-22 w-40 object-center rounded"
            alt="hero"
            src="./tm.png"
          />
          </a>
        
          <a href= "https://drive.google.com/file/d/1hPinqxAdgzKyJoRYk8kRCWpjfntpYG5n/view?usp=sharing" className="text-white text-xl mr-5 navbar-brand font-serif hover:text-yellow-400">
          <img
            className="object-contain h-22 w-40 object-center rounded"
            alt="hero"
            src="./resume.png"
          />
          </a>
        </nav>
        <a
          href="#contact"
          className="text-white inline-flex font-serif navbar-brand items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <img
            className="object-contain h-20 w-30 object-center rounded"
            alt="hero"
            src="./hire.png"
          />
        </a>
      </div>
    </header>
  );
}