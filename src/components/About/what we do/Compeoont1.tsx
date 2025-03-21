import React from "react";
import Image from "next/image";

export function Component1() {
  return (
    <section className="flex items-center py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            Outdoor Advertising
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Arkay is the most prestigious LED outdoor and indoor advertising
            company in Bangladesh. Our screens are located on roadside
            intersections, roundabouts, and motorways within our city. We also
            have projects outside the city (Sylhet, Chittagong, Khulna,
            Rajshahi, Bogura).
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Image/About/What we do/image-1.jpg"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            alt="Outdoor Advertising"
          />
        </div>
      </div>
    </section>
  );
}
