import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ClientGallery from "@/components/About/client-gallery/ClientGallery";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <ClientGallery />
      <Footer />
    </div>
  );
}
