import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function AboutUs() {
  // Function to scroll to the next section smoothly
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-[80vh] text-white flex items-center justify-center relative mt-18 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Image/About/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Shape */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl px-6 py-16 mt-24 text-center relative z-10">
        {/* Responsive Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
          About Us
        </h2>

        {/* Responsive Paragraph */}
        <p className="text-sm sm:text-sm md:text-sm max-w-2xl mx-auto">
          Arkay operates the largest number of digital LED advertising displays
          throughout Bangladesh, owning over 80% of all the screens in the
          capital city.
        </p>
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl z-10 animate-bounce"
      >
        <RiArrowDownDoubleLine />
      </button>
    </section>
  );
}
