export default function About() {
  const imagePath = "/Image/Home/about.jpg";

  return (
    <section className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <img
            src={imagePath}
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Are</h2>
          <p className="text-md md:text-lg mb-6">
            We specialize in **digital billboard advertising** and **urban
            beautification**. Our goal is to create visually stunning
            environments that attract attention and enhance cityscapes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
