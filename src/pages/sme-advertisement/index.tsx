import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { SmeAdvertisementContent } from "@/components/SME Advertisement/SMEAdertisementContent";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <SmeAdvertisementContent />
      <Footer />
    </div>
  );
}
