import { motion } from "framer-motion";

const SecondHeroSection = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center  mx-auto mb-48 pb-32 "
      style={{ backgroundImage: "url('/Image/Home/secondhero.jpg')" }}
    >
      {/* Gradient Overlay Section */}
      <div className="absolute bottom-0 p-2 w-full h-1/4 bg-black clip-custom-shape flex items-center justify-center">
        <h2 className="text-3xl font-extrabold mb-4 text-white">
          Your Wish, Our Work – We Specialize in{" "}
          <span className="bg-gradient-to-r from-yellow-700 to-blue-700 bg-clip-text text-transparent">
            Beautification
          </span>
          !
        </h2>
      </div>
    </div>
  );
};

export default SecondHeroSection;
