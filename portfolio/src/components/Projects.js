// src/components/Projects.js
import React from "react"
import { projects } from "../data";

export default function Projects() {
  return (
   
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <div class="divide-y-2 divide-white">
  <div></div>
  <div></div>
  </div>
  <br></br>
          <p className="mb-8 navbar leading-relaxed text-justify text-teal-300">
          I have developed my abilities through participating in a variety of projects at the university and at my past jobs. In addition,  I have also contributed to open source platforms like Pixar and worked on several personal projects to develop my coding skills. Details of some of my previous work can be seen below with the link of a few deployed business applications like Cosy Up.  </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}