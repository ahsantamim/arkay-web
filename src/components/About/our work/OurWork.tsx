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

const tabsData: TabData[] = [
  {
    title: "Picture of the screen",
    value: "screen",
    content: [
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
    ],
  },
  {
    title: "Picture of beautification projects",
    value: "beautification",
    content: [
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
    ],
  },
  {
    title: "Pictures of factory & screens",
    value: "factory",
    content: [
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
    ],
  },
  {
    title: "Pictures & vidoes of indoor products",
    value: "indoor",
    content: [
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
      "/Image/Home/Hero/image-5.jpg",
    ],
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
    <>
      <div
        className={cn(
          "flex flex-row justify-center mt-12 mb-48 gap-8 overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabsData.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "relative px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer",
              tabClassName,
              "text-black bg-gray-200", // Default state (inactive tab)
              active.value === tab.value && "bg-gray-800 text-white" // Active state
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block">{tab.title}</span>
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full gap-4 mt-6"
        columnClassName="masonry-column"
      >
        {active.content.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt="Gallery"
              className="bg-gray-600 border-amber-950  cursor-pointer w-full h-[337px] object-cover transform transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </Masonry>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[{ src: active.content[lightboxIndex] }]} // Show only one image
        index={0} // Show the first image only
        render={{
          slide: ({ slide }) => (
            <div className="flex justify-center items-center">
              <img
                src={slide.src}
                alt="Lightbox Image"
                className="rounded-lg w-[60vw] h-[40vh] object-cover" // Adjust size to a good modal view
              />
            </div>
          ),
        }}
      />
    </>
  );
};

export default OurWork;
