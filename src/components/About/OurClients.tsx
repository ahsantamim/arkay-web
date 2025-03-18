import React from "react";

export default function OurClients() {
  return (
    <section
      className="w-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: "url('/Image/Clients.jpg')",
      }}
    >
      <div className="max-w-7xl px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
        <p className="text-lg">
          We provide innovative indoor advertising solutions to corporates,
          banks, retail businesses, and hospitality institutions.
        </p>
      </div>
    </section>
  );
}
