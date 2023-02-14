// import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          {/* <ChipIcon className="w-10 inline-block mb-4" /> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <div class="divide-y-2 divide-white">
  <div></div>
  <div></div>
  </div>
  <br></br>
  <p className="mb-8 leading-relaxed navbar text-justify text-teal-300">
          Knowledge gained from my passion for computer software as well as my field of study has equipped me with a deep understanding in the various computer fields and areas helping me gain a broader theoretical as well as practical knowledge in the field. 
          In addition to this, it has made me proficient in numerous programming languages and taught me how to quickly learn any new language through practice.
          Through developing these skills and knowledge sets I have developed outstanding communication skills, interpersonal abilities, excellent collaboration skills and a positive ‘can do’ attitude which has been reflected throughout my work and volunteer experience. 
          With a motivation and passion for learning and continuous improvement, I am now seeking opportunities to contribute these to an organisation that shares my vision.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                {/* <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" /> */}
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}