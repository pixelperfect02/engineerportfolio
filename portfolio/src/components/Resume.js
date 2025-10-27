import React from "react";
import "./custom.css";

export default function Resume() {
  return (
    <section
      id="resume"
      className="resume-section flex flex-col items-center justify-center bg-[#f8f4f0] m-0 p-6 w-full pb-20"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#706F6F] mb-6 text-center">
        My Resume
      </h2>

      <div className="w-full flex justify-center">
       <div className="w-full max-w-4xl shadow-lg rounded-xl overflow-hidden p-0">
  <iframe
    src="./Resume.pdf"
    title="Resume"
    className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] block"
    style={{ border: "none" }}
  />
</div>

      </div>

      {/* Download Button */}
      <a
        href="./Resume.pdf"
        download
        className="mt-6 bg-[#DDC6A4] text-[#706F6F] font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#cbb18f] transition-all"
      >
        Download Resume
      </a>
    </section>
  );
}
