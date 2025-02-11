import React from "react";
import HTMLFlipBook from "react-pageflip";

const Projects = () => {
  const totalPages = 23;

  return (
    <section id="projects" className="text-gray-400 bg-white body-font">
      <div className="flipbook-container">
        <HTMLFlipBook
          width={900}
          height={600}
          showCover={true}
          className="flipbook"
        >
          {[...Array(totalPages)].map((_, index) => (
            <div key={index} className="page">
              <img src={`/page${index + 1}.png`} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </section>
  );
};

export default Projects;
