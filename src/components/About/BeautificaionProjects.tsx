import React from "react";
import { FaTree } from "react-icons/fa";

export default function BeautificationProjects() {
  return (
    <section className="w-screen bg-white text-black flex items-center justify-center">
      <div className="max-w-7xl px-6 py-16 text-center">
        <FaTree className="text-5xl text-green-500 mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4">Beautification Projects</h2>
        <p className="text-lg">
          We invest in beautifying Dhaka city by maintaining roundabouts,
          pathways, and green spaces with our own funds and expert gardeners.
        </p>
      </div>
    </section>
  );
}
