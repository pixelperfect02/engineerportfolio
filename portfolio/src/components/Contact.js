// src/components/Contact.js

import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    
    <section id="contact" className="relative bg-black">
      <br></br>
    
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src= "https://www.google.com/maps/embed/v1/place?q=Adelaide+SA,+Australia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">        
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1 text-teal-300">
                Adelaide, South Australia <br />
                
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-teal-300 leading-relaxed">
                archieverma0210@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a
              href="#contact"
              className="mr-5 text-teal-300 hover:text-teal-300">
              Available on Request
            </a>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <br></br>
          
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
                      Hire Me
          </h2>
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

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black navbar-brand">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black navbar-brand ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black navbar-brand ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white navbar-brand bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}