import React from "react";
import { motion } from "framer-motion";

const images = [
  "/Image/About/What we do/image-1.jpg",
  "/Image/About/What we do/image-2.jpg",
  "/Image/About/What we do/image-3.jpg",
  "/Image/About/What we do/image-4.jpg",
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white text-black flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Left Column (Text) */}
        <div className="md:w-1/2 text-center md:text-left relative mb-8 md:mb-0 md:mr-8">
          {/* SVG Background */}
          <svg
            className="absolute top-0 left-0 w-full h-full z-0 opacity-10"
            viewBox="0 0 500 500"
            preserveAspectRatio="none"
          >
            <path
              d="M0,180 C180,300 350,0 500,100 L500,500 L0,500 Z"
              fill="#3B82F6"
            />
          </svg>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              What We Do
            </h2>
            <p className="text-sm sm:text-sm lg:text-sm">
              Arkay is the most prestigious LED outdoor and indoor advertising
              company in Bangladesh, with screens located at prime locations
              nationwide.
            </p>
          </div>
        </div>

        {/* Right Column (Smooth Infinite Image Slider) */}
        <div className="md:w-1/2 w-full overflow-hidden relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center">
          <motion.div
            className="flex w-max space-x-4 h-full"
            animate={{ x: ["0%", "-100%"] }} // Perfect loop
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-[200px] sm:w-[250px] h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-lg shadow-lg"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
