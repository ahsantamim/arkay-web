import React from "react";
import Image from "next/image";

// Functional Component with TypeScript (React.FC)
const Component3: React.FC = () => {
  return (
    <section className="flex items-center py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2 pr-6">
          {" "}
          {/* Added padding-right for spacing */}
          <Image
            src="/Image/About/What we do/image-3.jpg"
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            alt="Beautification of Dhaka"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left mt-8 md:mt-0">
          <h3 className="text-4xl font-semibold text-gray-800 mb-4">
            Beautification of Dhaka
          </h3>
          <p className="text-lg text-gray-600 justify-center mb-6">
            We are the largest investor in the beautification of our capital
            city, Dhaka. We have beautified paths, medians, roadsides, and
            roundabouts using our own funds and in-house gardeners.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Component3;
