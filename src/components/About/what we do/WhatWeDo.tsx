import React from "react";
import {
  FaLightbulb,
  FaBuilding,
  FaSeedling,
  FaPaintBrush,
} from "react-icons/fa";
import SectionComponent from "./SectionComponent";

const WhatWeDo = () => {
  return (
    <section id="what-we-do-section" className="w-full mt-12 mb-12">
      {/* Main Title */}
      <div className="w-full text-center bg-white text-black py-8 z-20">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-semibold mb-6">
          What We Do
        </h2>
      </div>

      {/* Section 1 */}
      <SectionComponent
        title="Outdoor Advertising"
        icon={<FaLightbulb className="text-3xl mb-4 text-yellow-400" />}
        text="Arkay is the most prestigious LED outdoor and indoor advertising company in Bangladesh. Our screens are located on roadside intersections, roundabouts, and motorways within our city. We also have projects outside the city (Sylhet, Chittagong, Khulna, Rajshahi, Bogura)."
        image="/Image/About/What we do/image-1.jpg" // Ensure this path is correct
      />

      {/* Section 2 */}
      <SectionComponent
        title="Innovative Solutions"
        icon={<FaBuilding className="text-3xl mb-4 text-blue-400" />}
        text="We have provided corporates, retails, homes, banks, and hospitality institutions with our innovative and modern indoor advertising solutions."
        image="/Image/About/What we do/image-2.jpg" // Ensure this path is correct
        reverse // This will reverse the layout
      />

      {/* Section 3 */}
      <SectionComponent
        title="Beautification of Dhaka"
        icon={<FaSeedling className="text-3xl mb-4 text-green-400" />}
        text="We are the largest investor in the beautification of our capital city, Dhaka. We have beautified paths, medians, roadsides, and roundabouts using our own funds and in-house gardeners."
        image="/Image/About/What we do/image-3.jpg" // Ensure this path is correct
      />

      {/* Section 4 */}
      <SectionComponent
        title="Blending Technology and Nature"
        icon={<FaPaintBrush className="text-3xl mb-4 text-purple-400" />}
        text="We have been maintaining these beautified areas and have placed aesthetically innovative sleek LED screens on them to complement the surroundings. Our goal is to seamlessly blend technology and nature, creating a visually appealing environment for everyone."
        image="/Image/About/What we do/image-4.jpg" // Ensure this path is correct
        reverse // This will reverse the layout
      />
    </section>
  );
};

export default WhatWeDo;
