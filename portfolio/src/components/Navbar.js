// src/components/Navbar.js
import "./custom.css"
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-black md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font text-white mb-4 md:mb-0">
          <a href="#about" className="text-rose-300 navbar-brand ml-3 font-serif text-xl hover:text-yellow-400">
            ARCHIE VERMA
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 navbar-brand hover:text-yellow-400">
            Past Work
          </a>
          <a href="#skills" className="mr-5 navbar-brand font-serif hover:text-yellow-400">
            Skills
          </a>
          <a href="#testimonials" className="mr-5 navbar-brand font-serif hover:text-yellow-400">
            Testimonials
          </a>
          <a href="https://www.linkedin.com/in/archie-verma-4ab519213/" className="mr-5 navbar-brand font-serif hover:text-yellow-400">
          LinkedIn </a>
          <a href="/" className="mr-5 navbar-brand font-serif hover:text-yellow-400">
          Resume </a>

        
     <a href="#contact" className="mr-5 navbar-brand font-serif hover:text-yellow-400">  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>
</a>

<a href="#contact" className="mr-5 navbar-brand font-serif hover:text-yellow-400">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
</a>

        </nav>
        <a
          href="#contact"
          className="inline-flex font-serif navbar-brand items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          HIRE ME

        </a>
      

      </div>
    </header>
    
  );
}