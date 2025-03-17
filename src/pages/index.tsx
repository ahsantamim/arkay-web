import Hero from "@/components/Home/Hero";
import Navbar from "../components/ui/Navbar";
import Gallery from "@/components/Home/About";


export default function Home() {
  // Define the gallery items with Unsplash image URLs
  const items = [
    {
      title: "Beautiful Landscape",
      image: "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "City Lights",
      image: "https://images.unsplash.com/photo-1533282960533-51328aa49826?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colStart: 3,
      rowStart: 1,
    },
    {
      title: "Ocean Waves",
      image: "https://images.unsplash.com/photo-1593161499316-0cd67918ab6a?q=80&w=1602&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colStart: 1,
      rowStart: 2,
    },
    {
      title: "Mountain Peaks",
      image: "https://images.unsplash.com/photo-1589271755419-b813a577ad42?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 2,
      rowStart: 2,
    },
    {
      title: "Desert Sunset",
      image: "https://images.unsplash.com/photo-1532879311112-62b7188d28ce?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 3,
      rowStart: 3,
    },
  ];

  return (
    <>
      <Navbar />
      <Hero />

        <Gallery items={items} />
  
 
    </>
  );
}
