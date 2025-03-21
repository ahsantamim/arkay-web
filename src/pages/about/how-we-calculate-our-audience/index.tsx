import Hero from "@/components/About/calculateaudience/Hero";
import { StickyScrollRevealDemo } from "@/components/About/calculateaudience/ComponentView";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <Hero />
      <StickyScrollRevealDemo />

      <Footer />
    </div>
  );
}
