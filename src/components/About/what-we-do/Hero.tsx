import React, { useState, useEffect } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

const images = [
  "/Image/About/How we calculate our audience/Hero/image-1.jpg",
  "/Image/About/How we calculate our audience/Hero/image-2.jpg",
  "/Image/About/How we calculate our audience/Hero/image-3.jpg",
  "/Image/About/How we calculate our audience/Hero/image-4.jpg",
];

interface HeroProps {
  scrolled: boolean;
}

export function Hero({ scrolled }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change background image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("what-we-do-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-12">
      {/* Parallax Background with Multiple Images */}
      <div
        className="absolute inset-0 transform scale-105 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${scrolled ? "10%" : "0"}) scale(1.05)`,
          transition:
            "transform 0.5s ease-out, background-image 1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Sparkles Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-white/90">
            Innovation in Display Technology
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          About {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            US
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Arkay operates the largest number of digital LED advertising displays
          throughout Bangladesh, owning over 80% of all the screens in the
          capital city.
        </p>

        {/* Animated Scroll Down Arrow */}
        <button onClick={scrollToNextSection} className="cursor-pointer">
          <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
        </button>
      </div>
    </section>
  );
}
