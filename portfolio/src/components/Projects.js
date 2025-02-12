import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const Projects = () => {
  const totalPages = 23;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="text-gray-400 bg-white body-font flex justify-center items-center min-h-screen">
      <div className="flipbook-container">
        {isSmallScreen ? (
          // Display Portfolio PDF on smaller screens
          <iframe 
            src="/portfolio.pdf" 
            width="100%" 
            height="600px" 
            className="border-none"
            title="Portfolio PDF"
          ></iframe>
        ) : (
          // Flipbook on larger screens
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
        )}
      </div>
    </section>
  );
};

export default Projects;
