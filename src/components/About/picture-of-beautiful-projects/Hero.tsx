import React from "react";
import { Sparkles, ChevronDown } from "lucide-react";

interface HeroProps {
  scrolled: boolean;
}

export function Hero({ scrolled }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-12">
      <div
        className="absolute inset-0 transform scale-105"
        style={{
          transform: `translateY(${scrolled ? "10%" : "0"})`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80"
          alt="LED Display Manufacturing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
          <Sparkles className="w-5 h-5 text-yellow-400" />
          <span className="text-white/90">
            Innovation in Display Technology
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          PICTURES OF{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            BEAUTIFICATION
          </span>{" "}
          PROJECTS
        </h1>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Transforming urban landscapes with cutting-edge LED technology and
          innovative display solutions
        </p>
        <ChevronDown className="w-8 h-8 text-white animate-bounce mx-auto" />
      </div>
    </section>
  );
}
