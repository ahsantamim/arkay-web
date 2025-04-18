import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ImageGallery from "@/components/About/image gallery/ImageGallery";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ImageGallery />
      <Footer />
    </div>
  );
}
