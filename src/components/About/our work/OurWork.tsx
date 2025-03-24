import { useState } from "react"; 
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

const tabsData = [
  {
    title: "Picture of the Screen",
    value: "screen",
    content: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/350",
      "https://via.placeholder.com/400"
    ],
  },
  {
    title: "Picture of Beautification Projects",
    value: "beautification",
    content: [
      "https://via.placeholder.com/450",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/550"
    ],
  },
  {
    title: "Picture of Factory and Few Screens",
    value: "factory",
    content: [
      "https://via.placeholder.com/600",
      "https://via.placeholder.com/650",
      "https://via.placeholder.com/700"
    ],
  },
  {
    title: "Picture and Video of Indoor Products",
    value: "indoor",
    content: [
      "https://via.placeholder.com/750",
      "https://via.placeholder.com/800",
      "https://via.placeholder.com/850"
    ],
  },
];

const OurWork = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
}) => {
  const [active, setActive] = useState(tabsData[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabsData.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn("absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full", activeTabClassName)}
              />
            )}
            <span className="relative block text-black dark:text-white">{tab.title}</span>
          </button>
        ))}
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex w-full gap-4 mt-6"
        columnClassName="masonry-column"
      >
        {active.content.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            className="rounded-lg cursor-pointer w-full"
            onClick={() => openLightbox(index)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={active.content.map((src) => ({ src }))}
        index={lightboxIndex}
      />
    </>
  );
};

export default OurWork;
