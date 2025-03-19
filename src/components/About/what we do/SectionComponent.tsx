import React from "react";
import { motion } from "framer-motion";

interface SectionComponentProps {
  title: string;
  icon: React.ReactNode;
  text: string;
  image: string;
  reverse?: boolean; // To alternate the layout
}

const SectionComponent: React.FC<SectionComponentProps> = ({
  title,
  icon,
  text,
  image,
  reverse = false,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className={`w-full flex flex-col md:flex-row justify-center items-center p-4 mt-8 mb-8 relative max-w-7xl mx-auto bg-white shadow-xl overflow-hidden ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Text Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeInVariants}
        className={`relative z-20 w-full md:w-1/2 ${
          reverse ? "md:ml-6" : "md:mr-6"
        } text-black text-center space-y-3`}
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
        <div className="flex flex-col items-center space-y-3">
          <div className="text-3xl">{icon}</div>
          <p className="text-sm sm:text-base text-justify leading-snug font-medium text-gray-700">
            {text}
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <div
        className={`relative z-20 w-full md:w-1/2 h-56 md:h-64 flex justify-center items-center ${
          reverse ? "md:mr-6" : "md:ml-6"
        }`}
      >
        <img
          src={image} // Use the image prop as the src
          alt={title} // Use the title as the alt text
          className="w-full h-full object-cover  shadow-md"
        />
      </div>
    </div>
  );
};

export default SectionComponent;
