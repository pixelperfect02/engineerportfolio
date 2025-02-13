import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

const Projects = () => {
  const totalPages = 23;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 767px)").matches);
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="projects" className="text-gray-400 bg-white body-font flex justify-center items-center min-h-screen">
      <div className="flipbook-container">
        {isSmallScreen ? (
          // Display PDF for smaller screens
          <div className="w-full flex flex-col items-center">
            
            <iframe
              src="/portfolio.pdf"
              width="90%"
              height="600px"
              className="border rounded-lg"
              title="Portfolio PDF"
            ></iframe>
          </div>
        ) : (
          // Flipbook for larger screens
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
