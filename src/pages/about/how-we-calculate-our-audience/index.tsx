import { useEffect, useState } from "react";
import { Hero } from "@/components/About/how-we-calculate-audience/Hero";
import { AudienceMetrics } from "@/components/About/how-we-calculate-audience/AudienceMetrics";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FeaturedProjects from "@/components/About/how-we-calculate-audience/Project";

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
      <AudienceMetrics />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
