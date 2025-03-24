"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link"; // Import Link from next/link

export default function ClientGalleries() {
  const clients = [
    {
      name: "McDonald's",
      image: "/Image/Home/Hero/image-2.jpg",
    },
    {
      name: "CV Library",
      image: "/Image/Home/Hero/image-3.jpg",
    },
    {
      name: "Rolex",
      image: "/Image/Home/Hero/image-4.jpg",
    },
    {
      name: "DiRT 4",
      image: "/Image/Home/Hero/image-5.jpg",
    },
    {
      name: "Client 5",
      image: "/Image/Home/Hero/image-6.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Set up auto sliding interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveSlide((prev) => (prev + 1) % clients.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length, isTransitioning]);

  // When transition ends, allow next transition
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="max-w-6xl mt-18 mx-auto px-4  py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-5xl font-normal text-gray-900 mb-8">
          Client Galleries
        </h2>

        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
          {/* Directly make Link a clickable text */}
          <span className="px-4 text-sm text-gray-500 uppercase tracking-widest">
            Clients over the Country
          </span>
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${
              (activeSlide % clients.length) * (100 / 4)
            }%)`,
            width: `${clients.length * (100 / 4)}%`,
          }}
          onTransitionEnd={handleTransitionEnd} // Wait until transition is over
        >
          {clients.map((client, index) => (
            <div key={index} className="relative flex-shrink-0 w-[25%] px-2">
              <div className="relative h-[355px] w-full">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
          {/* Duplicate images for infinite loop effect */}
          {clients.map((client, index) => (
            <div
              key={index + "duplicate"}
              className="relative flex-shrink-0 w-[25%] px-2"
            >
              <div className="relative h-[355px] w-full">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4 z-10">
        <button
          onClick={() => {
            setIsTransitioning(true);
            setActiveSlide(
              (prev) => (prev - 1 + clients.length) % clients.length
            );
          }}
        >
          <span className="text-white text-3xl">&#8592;</span>{" "}
          {/* Left arrow */}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4 z-10">
        <button
          onClick={() => {
            setIsTransitioning(true);
            setActiveSlide((prev) => (prev + 1) % clients.length);
          }}
        >
          <span className="text-white text-3xl">&#8594;</span>{" "}
          {/* Right arrow */}
        </button>
      </div>

      {/* Show More Button */}
      <div className="text-center mt-12">
        <Link
          href="/blog" // Navigate to the blog page
          passHref
        >
          <motion.button
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            className="px-6 py-2 border-2 border-black text-black font-normal bg-white rounded-full transition-all duration-100 cursor-pointer"
          >
            Show More
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
