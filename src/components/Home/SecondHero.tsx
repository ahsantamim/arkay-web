import { motion } from "framer-motion";
import { Sparkles, ArrowDownCircle, ArrowRight } from "lucide-react";

const SecondHeroSection = () => {
  return (
    <div className="relative w-full max-w-7xl h-[80vh] mx-auto mt-0">
      {/* Video Background */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Image/About/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black/80" />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">
              Discover Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Transforming Spaces with
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Precision & Care
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
          >
            Every project is a canvas for our expertise, where we blend
            innovative design with meticulous execution to create spaces that
            inspire and endure.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex gap-4 justify-center"
          >
            <button className="group px-8 py-3 rounded-full cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1  transition-transform" />
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
};

export default SecondHeroSection;
