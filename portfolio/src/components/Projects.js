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
    <section 
      id="projects" 
      className={`text-gray-400 bg-white body-font flex justify-center items-center ${
        isSmallScreen ? "h-screen" : "min-h-screen"
      }`}
    >
      <div className="flipbook-container">
        {isSmallScreen ? (
          // Button for smaller screens (no extra space)
          <a
            href="/portfolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#CBB28E] text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-opacity-80"
          >
            Open Projects PDF
          </a>
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
