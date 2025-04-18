import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CareerPage from "@/components/Carrer/CarrerPage";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <CareerPage />
      <Footer />
    </div>
  );
}
