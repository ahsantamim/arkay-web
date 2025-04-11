import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  const imagePaths = [
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/Hero/image-2.jpg",
    "/Image/Home/Hero/image-3.jpg",
    "/Image/Home/Hero/image-4.jpg",
    "/Image/Home/Hero/image-5.jpg",
    "/Image/Home/Hero/image-6.jpg",
    "/Image/Home/Hero/image-7.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [transitioning, imagePaths.length]);

  const handleDotClick = (index: number) => {
    if (!transitioning) {
      setTransitioning(true);
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    }
  };

  const handleTransitionEnd = () => {
    setTransitioning(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} mode="popLayout" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ x: direction * 100 + "%" }}
            animate={{ x: 0 }}
            exit={{ x: direction * -100 + "%" }}
            transition={{
              duration: 1,
              ease: [0.45, 0, 0.55, 1],
            }}
            className="absolute inset-0"
            onAnimationComplete={handleTransitionEnd}
          >
            <div
              className="w-full h-full bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url('${imagePaths[currentIndex]}')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 font-medium">
              Premium Digital Advertising
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Digital Billboards
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
              Transforming Cities
            </span>
          </h1>

          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Premium billboard spaces for high-impact advertising that captures
            attention and drives results.
          </p>

          <div className="flex justify-center items-center">
            <button className="relative cursor-pointer group px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2 overflow-hidden">
              {/* Gradient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Button Content */}
              <div className="relative z-10 flex items-center gap-2">
                Book a Meeting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Image Navigation */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-3 z-20">
        <div className="flex gap-4">
          {imagePaths.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className="group relative"
            >
              <div
                className={`w-14 h-1 rounded-full transition-all duration-500 ${
                  currentIndex === index
                    ? "bg-white scale-100"
                    : "bg-white/30 scale-90 group-hover:bg-white/50"
                }`}
              />
              {currentIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full"
                  transition={{ duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default Hero;
