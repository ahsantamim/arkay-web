import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/About/our story/Hero";
import { OurStory } from "@/components/About/our story/OurStory";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <OurStory />
      <Footer />
    </div>
  );
}
