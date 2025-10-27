// import logo from './logo.svg';
import './App.css';
import React from "react";
// import Welcome from "./home/Welcome";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      <About />
      {/* <Skills /> */}
       <Projects />
       <Resume />
      <Contact /> 
      {/*
      <Testimonials />
     */}
    </main>
  );
}
