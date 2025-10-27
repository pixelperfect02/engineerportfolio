import React from "react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section flex flex-col items-center justify-center bg-[#f8f4f0] m-0 p-6 w-full pb-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#706F6F] mb-6 text-center">
        My Projects
      </h2>

      <div className="w-full flex justify-center">
        {/* Outer shadow container */}
        <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden bg-white p-1">
          {/* Inner iframe container */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="./portfolio1.pdf"
              title="Projects"
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] block"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Open/Download Button */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <a
          href="./portfolio1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#CBB28E] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#bfa375] transition-all"
        >
          Open Projects PDF
        </a>
        <a
          href="./portfolio1.pdf"
          download
          className="bg-[#DDC6A4] text-[#706F6F] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#cbb18f] transition-all"
        >
          Download Projects
        </a>
      </div>
    </section>
  );
}
