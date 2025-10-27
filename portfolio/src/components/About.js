import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "framer-motion";

const skills = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
];

export default function Home() {

  return (
    <section id="home" className="min-h-screen bg-[#f8f4f0] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 w-full max-w-7xl">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#706F6F] mb-4 animate-fade-in">
            Hi, I’m Archie Verma
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#DDC6A4] mb-6 animate-fade-in delay-200">
            Software Engineer & Salesforce Admin
          </h2>
          <p className="text-[#706F6F] mb-6 leading-relaxed sm:text-lg md:text-base lg:text-lg animate-fade-in delay-400">
            I build <strong>responsive web applications</strong>, optimize <strong>business workflows</strong>, and deliver digital solutions that improve customer experience.
            Experienced in <strong>Salesforce administration</strong>, <strong>CRM workflows</strong>, <strong>full-stack development</strong>, and <strong>UI/UX design</strong>.
          </p>
          <ul className="text-[#706F6F] list-disc list-inside mb-6 animate-fade-in delay-600 space-y-2 sm:text-base md:text-sm lg:text-base">
            <li><strong>CRM & Admin:</strong> Salesforce, Jira, Google Workspace</li>
            <li><strong>Data Analysis:</strong> Excel, Python, SQL, MongoDB</li>
            <li><strong>Web Development:</strong> React.js, Next.js, Node.js, WordPress</li>
            <li><strong>UI/UX & Design:</strong> Figma, Canva, Wireframing</li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-[#DDC6A4] text-[#706F6F] font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-[#cbb18f] transition-all animate-fade-in delay-800"
          >
            Let's Connect
          </a>
        </div>

        {/* Lottie + Circular Skill Icons */}
        <div className="flex-1 w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl relative animate-fade-in" style={{ transform: "translateY(-40px)" }}>

         <DotLottieReact
  src="https://lottie.host/70ea820a-d9d2-493a-8d43-79efc58f9aa6/AZO6Wwy8jk.lottie"
  loop
  autoplay
  style={{ width: "70%", maxWidth: "300px", height: "auto", margin: "0 auto" }}
/>


          {/* Circular Icons */}
          {skills.map((src, index) => {
            const total = skills.length;
            return (
              <motion.img
                key={index}
                src={src}
                alt="skill"
                className="w-10 sm:w-12 h-7 sm:h-12 absolute"
                style={{
                  top: `calc(50% - 20px + ${Math.floor((total > 0 ? 140 : 120) * Math.sin((index / total) * 2 * Math.PI))}px)`,
                  left: `calc(50% - 20px + ${Math.floor((total > 0 ? 140 : 120) * Math.cos((index / total) * 2 * Math.PI))}px)`
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.5 }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
