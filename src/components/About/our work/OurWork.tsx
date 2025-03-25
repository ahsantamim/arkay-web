import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

interface TabData {
  title: string;
  value: string;
  content: string[];
}

interface OurWorkProps {
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

// Sample image paths - replace these with your actual image paths
const sampleImage = "/Image/Home/Hero/image-5.jpg";
const sampleImages = Array(10).fill(sampleImage);

const tabsData: TabData[] = [
  {
    title: "Picture of the screen",
    value: "screen",
    content: sampleImages,
  },
  {
    title: "Picture of beautification projects",
    value: "beautification",
    content: sampleImages,
  },
  {
    title: "Pictures of factory & screens",
    value: "factory",
    content: sampleImages,
  },
  {
    title: "Pictures & videos of indoor products",
    value: "indoor",
    content: sampleImages,
  },
];

const OurWork: React.FC<OurWorkProps> = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
}) => {
  const [active, setActive] = useState<TabData>(tabsData[0]);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div
        className={cn(
          "flex flex-row justify-center mt-12 mb-12 gap-4 overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabsData.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap",
              tabClassName,
              "text-black bg-gray-200 hover:bg-gray-300", // Default state (inactive tab)
              active.value === tab.value && "text-white" // Active text color
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full bg-black", // Explicit black background
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block z-10">{tab.title}</span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-4"
          columnClassName="ml-4 bg-clip-padding"
        >
          {active.content.map((image, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="bg-gray-200 border border-gray-300 cursor-pointer w-full h-auto max-h-[400px] object-cover transform transition-transform duration-300 hover:scale-105 rounded-lg"
                onClick={() => openLightbox(index)}
                loading="lazy"
              />
            </div>
          ))}
        </Masonry>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={active.content.map(img => ({ src: img }))}
        index={lightboxIndex}
        render={{
          slide: ({ slide }) => (
            <div className="flex justify-center items-center h-full">
              <img
                src={slide.src}
                alt="Lightbox Image"
                className="rounded-lg max-w-[90vw] max-h-[90vh] object-contain"
              />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default OurWork;