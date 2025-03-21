import React from "react";

export function Component4() {
  return (
    <section
      className="w-full py-24 text-white bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/Image/About/What we do/image-4.jpg")', // Replace with your actual image path
      }}
    >
      {/* Dark overlay applied across the entire section */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />

      <div className="w-full max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Main Title */}
        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Blending Technology and Nature
        </h3>
        {/* Paragraph with enhanced styling */}
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed opacity-90">
          We have been maintaining these beautified areas and have placed
          aesthetically innovative sleek LED screens on them to complement the
          surroundings. Our goal is to seamlessly blend technology and nature,
          creating a visually appealing environment for everyone.
        </p>

        {/* Call to action section */}
        <div className="relative mt-12">
          <h4 className="text-2xl font-semibold mb-2">
            Join Us in Our Journey
          </h4>
          <p className="text-md sm:text-lg">
            Be a part of this movement. Together, we can create a harmonious
            blend of technology and nature.
          </p>
        </div>
      </div>
    </section>
  );
}
