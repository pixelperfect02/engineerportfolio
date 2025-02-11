import React from "react";
import HTMLFlipBook from "react-pageflip";

const Projects = () => {
  const totalPages = 23;

  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="flex justify-center items-center p-6">
        <HTMLFlipBook
          width={900}
          height={600}
          showCover={true}
          className="projects-3d-frame"
        >
          {[...Array(totalPages)].map((_, index) => (
            <div key={index} className="page bg-white flex justify-center items-center">
              <img src={`/page${index + 1}.png`} alt={`Page ${index + 1}`} className="w-full h-full" />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </section>
  );
};

export default Projects;
