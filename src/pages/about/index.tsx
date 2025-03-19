import Hero from "@/components/About/what we do/Hero";
import WhatWeDo from "@/components/About/what we do/WhatWeDo";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
