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
    title: "Screens",
    value: "screen",
    content: [
      "https://via.placeholder.com/600x337/ff7b7b/333333?text=Screen+1",
      "https://via.placeholder.com/600x337/7bbff7/333333?text=Screen+2",
      "https://via.placeholder.com/600x337/7bf77b/333333?text=Screen+3",
    ],
  },
  {
    title: "Beautification Projects",
    value: "beautification",
    content: [
      "https://via.placeholder.com/600x337/f3a847/333333?text=Beautification+1",
      "https://via.placeholder.com/600x337/7b6ef7/333333?text=Beautification+2",
      "https://via.placeholder.com/600x337/f77b7b/333333?text=Beautification+3",
    ],
  },
  {
    title: "Factory & Screens",
    value: "factory",
    content: [
      "https://via.placeholder.com/600x337/ff7b9f/333333?text=Factory+1",
      "https://via.placeholder.com/600x337/5c7bf7/333333?text=Factory+2",
      "https://via.placeholder.com/600x337/7bf7b8/333333?text=Factory+3",
    ],
  },
  {
    title: "Indoor Products",
    value: "indoor",
    content: [
      "https://via.placeholder.com/600x337/8e7bf7/333333?text=Indoor+Product+1",
      "https://via.placeholder.com/600x337/7bf7f7/333333?text=Indoor+Product+2",
      "https://via.placeholder.com/600x337/7b7bf7/333333?text=Indoor+Product+3",
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
          "flex flex-row justify-center gap-8 overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
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
              className="rounded-lg cursor-pointer w-full h-[337px] object-cover transform transition-transform duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            />
          </div>
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
