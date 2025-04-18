"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Plane } from "lucide-react";
// Import FontAwesome icon as a placeholder

export default function ClientGalleries() {
  const clients = [
    {
      name: "McDonald's",
      location: "USA",
      image: "/Image/Home/Hero/image-2.jpg",
    },
    {
      name: "CV Library",
      location: "UK",
      image: "/Image/Home/Hero/image-3.jpg",
    },
    {
      name: "Rolex",
      location: "Switzerland",
      image: "/Image/Home/Hero/image-4.jpg",
    },
    {
      name: "DiRT 4",
      location: "Global",
      image: "/Image/Home/Hero/image-5.jpg",
    },
    {
      name: "Client 5",
      location: "Germany",
      image: "/Image/Home/Hero/image-6.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4); // Default for desktop

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet
      } else {
        setSlidesToShow(4); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set up auto sliding interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveSlide((prev) => (prev + 1) % clients.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length, isTransitioning, slidesToShow]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const calculateTransform = () => {
    return `translateX(-${
      (activeSlide % clients.length) * (100 / slidesToShow)
    }%)`;
  };

  const calculateWidth = () => {
    return `${clients.length * (100 / slidesToShow)}%`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Client Galleries
        </h2>

        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
          <span className="px-4 text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
            Clients over the Country
          </span>
          <div className="flex-grow h-px bg-gray-300 max-w-xs"></div>
        </div>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden mx-2 sm:mx-0">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: calculateTransform(),
            width: calculateWidth(),
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="relative flex-shrink-0 px-2"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 w-full">
                <Image
                  src={client.image || "/placeholder.svg"}
                  alt={client.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Title and Location - Left Bottom */}
                <div className="absolute bottom-0 left-0 p-4 bg-transparent text-white">
                  <h3 className="text-lg font-semibold">{client.name}</h3>
                  <p className="text-sm">{client.location}</p>
                </div>

                {/* Logo - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Plane className="text-white w-16 h-16" />{" "}
                  {/* Icon placeholder */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="text-center mt-8 sm:mt-12">
        <Link href="/blog" passHref>
          <motion.button
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            className="px-6 py-2 border-2 border-black text-black font-normal bg-white rounded-full transition-all duration-100 cursor-pointer text-sm sm:text-base"
          >
            Show More
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
