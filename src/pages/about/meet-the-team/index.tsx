import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MeetTheTeam from "@/components/About/meet-the-team/MeetTheTeam";
export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <Navbar />
      <MeetTheTeam />
      <Footer />
    </div>
  );
}
