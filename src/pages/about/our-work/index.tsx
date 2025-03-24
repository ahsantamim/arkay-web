import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import OurWork from "@/components/About/our work/OurWork";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <div className="max-w-screen-xl mt-24 w-full px-4">
        <OurWork 
          containerClassName="py-8"
          activeTabClassName="bg-blue-500 text-white"
          tabClassName="text-gray-800 hover:bg-gray-200"
        />
      </div>
      <Footer />
    </div>
  );
}
