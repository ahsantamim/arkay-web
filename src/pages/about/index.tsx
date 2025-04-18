import { useEffect, useState } from "react";
import { Hero } from "@/components/About/what-we-do/Hero";
import WhatWeDo from "@/components/About/what-we-do/WhatWeDo";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero scrolled={scrolled} />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
