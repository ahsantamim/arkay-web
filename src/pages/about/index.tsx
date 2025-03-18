import AboutUs from "@/components/About/AboutUs";
import WhatWeDo from "@/components/About/WhatWeDo";
import OurClients from "@/components/About/OurClients";
import BeautificationProjects from "@/components/About/BeautificaionProjects";
import LEDIntegration from "@/components/About/LEDIntegration";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <AboutUs />
      <WhatWeDo />
      <Footer />
    </div>
  );
}
