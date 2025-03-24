import React, { useState, useEffect } from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const images = [
  "/Image/About/How we calculate our audience/Hero/image-1.jpg",
  "/Image/About/How we calculate our audience/Hero/image-2.jpg",
  "/Image/About/How we calculate our audience/Hero/image-3.jpg",
  "/Image/About/How we calculate our audience/Hero/image-4.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to scroll to the next section smoothly
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("what-we-do-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to change the background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Image Section */}
      <div
        className="w-full h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Shape */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Content Container */}
        <div className="text-center z-10 max-w-7xl px-6">
          {/* Centered Heading Text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4">
            How We Calculate Our Audience
          </h2>

          {/* Responsive Paragraph */}
          <p className="text-2xl sm:text-2xl md:text-2xl max-w-2xl mx-auto">
            Arkay leverages various data sources, including population density,
            mobile phone ping data, physical counting, commuter interviews, and
            GRP, to accurately estimate audience numbers, traffic patterns, and
            the effectiveness of advertisements.
          </p>
        </div>

        {/* Scroll Down Arrow */}
        <button
          onClick={scrollToNextSection}
          className="absolute cursor-pointer bottom-24 left-1/2 transform -translate-x-1/2 text-white text-3xl sm:text-4xl md:text-5xl z-10 animate-bounce"
        >
          <RiArrowDownDoubleLine />
        </button>
      </div>

      {/* Horizontal Gradient Bar Section */}
      <div className="w-full h-[3%] bg-gradient-to-r from-blue-800 via-black to-yellow-500"></div>
    </section>
  );
}
