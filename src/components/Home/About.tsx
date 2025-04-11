"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Gallery Component with Custom Grid Layout
const Gallery = ({ items }: { items: Array<any> }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Consider mobile if width < 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-24 mb-64 pb-32 h-screen px-4 sm:px-0">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-blue-500 via-black to-yellow-500 bg-clip-text text-transparent">
            Digital Billboard
          </span>{" "}
          Locations
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Find the perfect spot for your advertisement with our extensive
          network of digital billboards.
        </p>

        {/* Simple Framer Motion Button */}
        <motion.button
          whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
          className="px-12 py-3 border-2 border-black text-black font-semibold bg-white rounded-full transition-all duration-100 cursor-pointer"
        >
          Start Exploring
        </motion.button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative group",
              // First row: 1st item spans 2 columns, second item in 1 column
              index === 0 && "col-span-2",
              index === 1 && "col-start-3",
              // Second row: 1st item in 1 column, 2nd item spans 2 columns
              index === 2 && "col-start-1",
              index === 3 && "col-span-2",
              // Third row: 3 items, each item in 1 column
              index === 4 && "col-span-3"
            )}
            onClick={() => {
              if (isMobile) {
                setActiveIndex(activeIndex === index ? null : index);
              }
            }} // Only enable click effect on mobile
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover "
            />
            {/* Default Title */}
            <div className="absolute top-4 left-4 text-white text-lg font-bold">
              {item.title}
            </div>
            {/* Overlay with Hover/Touch Location Name */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 rounded-3xl",
                isMobile
                  ? activeIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                  : "group-hover:opacity-100"
              )}
            >
              <h2 className="text-white text-xl font-normal">
                {item.location}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
