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
    <section className="w-full h-screen text-white flex flex-col items-center justify-center relative mt-18 overflow-hidden">
      {/* Background Image Section */}
      <div
        className="w-full h-screen relative flex items-center justify-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay Shape */}
        <div className="absolute inset-0 bg-black/90"></div>

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
    </section>
  );
}
