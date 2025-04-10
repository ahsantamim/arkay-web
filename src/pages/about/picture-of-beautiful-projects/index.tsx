import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { Hero } from "@/components/About/picture-of-beautiful-projects/Hero";
import { ProjectGrid } from "@/components/About/picture-of-beautiful-projects/ProjectGrid";
import FeaturedProjects from "@/components/About/picture-of-beautiful-projects/FeaturedProjects";

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
      <ProjectGrid />
      <FeaturedProjects />
      <Footer />
    </div>
  );
}
