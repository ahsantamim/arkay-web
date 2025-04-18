import React from "react";
import { Monitor, Play, Award, Lightbulb, ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="w-full py-24 h-[800px] ">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full shadow-2xl">
        {/* Left Side */}
        <div className="relative h-full w-full ">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            alt="Smart City"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full w-full flex justify-center items-center">
            <div className="max-w-7xl w-full px-6 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 backdrop-blur-sm mb-4">
                <Monitor className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">
                  Smart City Solutions
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Smart City Integration
              </h3>
              <p className="text-white/90 mb-4 max-w-md mx-auto">
                Transforming urban landscapes with smart, interactive LED
                displays delivering real-time data.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-white/80">
                <div className="flex items-center gap-2 justify-center">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm font-medium">Energy Efficient</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Commercial Advertising"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 h-full w-full flex justify-center items-center">
            <div className="max-w-7xl w-full px-6 text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/20 backdrop-blur-sm mb-4">
                <Play className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">
                  Commercial Solutions
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                Commercial Advertising
              </h3>
              <p className="text-white/90 mb-4 max-w-md mx-auto">
                High-brightness LED displays that ensure brand visibility 24/7
                in prime locations.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 text-white/80">
                <div className="flex items-center gap-2 justify-center">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Lightbulb className="w-4 h-4" />
                  <span className="text-sm font-medium">Energy Efficient</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
