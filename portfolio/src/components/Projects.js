import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="projects-container flex justify-center items-center p-6">
        <iframe
          src="https://e.issuu.com/embed.html?d=archievermasoftwareportfolio&u=archieverma"
          className="projects-3d-frame"
          title="Flipbook"
          width="100%"
          height="500px"
          allowFullScreen
          style={{ border: "none" }}
        ></iframe>
      </div>
    </section>
  );
}
