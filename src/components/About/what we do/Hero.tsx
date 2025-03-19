import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

export default function Hero() {
  // Function to scroll to the next section smoothly
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("what-we-do-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full h-screen text-white flex flex-col items-center justify-center relative mt-18 overflow-hidden">
      {/* Background Image Section */}
      <div
        className="w-full h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/Image/Home/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Shape */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* About Us Content */}
        <div className="max-w-7xl px-6 py-16 text-center relative z-10">
          {/* Responsive Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            About Us
          </h2>

          {/* Responsive Paragraph */}
          <p className="text-lg sm:text-lg md:text-lg max-w-2xl mx-auto">
            Arkay operates the largest number of digital LED advertising
            displays throughout Bangladesh, owning over 80% of all the screens
            in the capital city.
          </p>

          {/* Scroll Down Arrow */}
          <button
            onClick={scrollToNextSection}
            className="absolute cursor-pointer top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl z-10 animate-bounce"
          >
            <RiArrowDownDoubleLine />
          </button>
        </div>
      </div>

      {/* Horizontal Gradient Bar Section */}
      <div className="w-full h-[3%] bg-gradient-to-r from-blue-800 via-black to-yellow-500"></div>

      {/* Additional Section Below (If needed) */}
      {/* For example, more content or sections */}
    </section>
  );
}
