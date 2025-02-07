import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const skills = [
  { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "WordPress", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },

  // { name: "Canva", image: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
  { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  // { name: "Vectary", image: "https://cdn.worldvectorlogo.com/logos/vectary.svg" },
  // { name: "Lottie Animations", image: "https://cdn.worldvectorlogo.com/logos/lottie-2.svg" },

  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Ruby on Rails", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" },

  // { name: "Microsoft Office", image: "https://cdn.worldvectorlogo.com/logos/microsoft-office.svg" },
  // { name: "Google Workspace", image: "https://cdn.worldvectorlogo.com/logos/google-apps.svg" },
  { name: "Heroku", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
  // { name: "Vercel", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Vercel-logo.svg" },

  { name: "SiteGround", image: "https://cdn.worldvectorlogo.com/logos/siteground.svg" },
  // { name: "Stripe", image: "https://cdn.worldvectorlogo.com/logos/stripe-1.svg" },
  // { name: "Tawk Chatbot", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Tawk_to_logo.svg" },
  // { name: "Formspree", image: "https://cdn.worldvectorlogo.com/logos/formspree.svg" },

  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Basic SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Salesforce", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg" },
  { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  // { name: "FlippingBook", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flippingbook/flippingbook-original.svg" }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="text-gray-400 bg-black body-font min-h-screen flex flex-col justify-center items-center p-0 m-0"
    >

        <div className="animation-container">
        <DotLottieReact src="https://lottie.host/22b1626f-a75a-49c3-bd91-71780781e940/vBBK2xU7I2.lottie" loop
          autoplay></DotLottieReact>
         </div>

         {/* 3D Container with Perspective */}
         <div
  className="bg-gray-900 rounded-xl shadow-2xl px-8 pb-8"
  style={{ perspective: "1500px", marginTop: "0", paddingTop: "0" }}
>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-gray-800 p-6 rounded-2xl flex flex-col items-center shadow-xl w-32 h-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            whileHover={{ scale: 1.1, rotateY: 15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 mb-2"
              whileHover={{ scale: 1.2, rotateY: 15 }}
              transition={{ duration: 0.3 }}
            />
         
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
