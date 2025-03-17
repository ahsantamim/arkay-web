import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// Gallery Component with Custom Grid Layout
const Gallery = ({ items }: { items: Array<any> }) => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto mt-24 h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4">Explore Our Digital Billboard Locations</h1>
        <p className="text-lg text-gray-700 mb-6">
          Find the perfect spot for your advertisement with our extensive network of digital billboards.
        </p>

        {/* Simple Framer Motion Button */}
        <motion.button
          whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
          className="px-12 py-3 border-2 border-black text-black bg-white rounded-full transition-all duration-100 cursor-pointer"
        >
          Start Exploring
        </motion.button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative group",
              // First row: 1st item spans 2 columns, second item in 1 column
              index === 0 && "col-span-2",
              index === 1 && "col-start-3",
              // Second row: 1st item in 1 column, 2nd item spans 2 columns
              index === 2 && "col-start-1",
              index === 3 && "col-span-2",
              // Third row: 3 items, each item in 1 column
              index === 4 && "col-span-3"
            )}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl font-bold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
