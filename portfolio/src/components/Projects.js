// src/components/Projects.js
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-orange-100 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <br></br>
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <div class="divide-y-2 divide-black">
  <div></div>
  <div></div>
  </div>
  <br></br>
          <p className="mb-8 navbar leading-relaxed text-justify text-rose-400">
          Knowledge gained from my passion for computer software as well as my field of study has equipped me with a deep understanding in the various computer fields and areas helping me gain a broader theoretical as well as practical knowledge in the field. 
          In addition to this, it has made me proficient in numerous programming languages and taught me how to quickly learn any new language through practice.
          Through developing these skills and knowledge sets I have developed outstanding communication skills, interpersonal abilities, excellent collaboration skills and a positive ‘can do’ attitude which has been reflected throughout my work and volunteer experience. 
          With a motivation and passion for learning and continuous improvement, I am now seeking opportunities to contribute these to an organisation that shares my vision.
          </p>
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