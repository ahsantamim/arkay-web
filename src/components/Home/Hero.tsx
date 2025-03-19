import { useEffect, useState } from "react";

const Hero = () => {
  // Array of image paths
  const imagePaths = [
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
    "/Image/Home/arkay-mor-hero.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${imagePaths[currentIndex]}')`,
      }}
    >
      <div className="relative z-10 text-center max-w-2xl px-6 mt-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Digital Billboards Transforming Cities
        </h1>
        <p className="text-md md:text-lg mb-6">
          Premium billboard spaces for high-impact advertising.
        </p>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-6 ring-1 ring-white/10">
            <span className="text-xl">Book a Meeting</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {imagePaths.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Carousel Images */}
      <div className="absolute w-full h-full overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imagePaths.map((imagePath, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
              style={{
                backgroundImage: `url('${imagePath}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay shadow */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
