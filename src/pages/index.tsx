import Hero from "@/components/Home/Hero";
import Navbar from "../components/ui/Navbar";
import Gallery from "@/components/Home/About";
import SecondHeroSection from "@/components/Home/SecondHero";
import Footer from "@/components/ui/Footer";
import ClientGalleries from "@/components/Home/Client";
import BlogCardGrid from "@/components/Home/News";

export default function Home() {
  // Define the gallery items with Unsplash image URLs
  const items = [
    {
      title: "Dhaka",
      location: "Bijoy Sarani",
      image:
        "https://images.unsplash.com/photo-1741091750011-f0fb9b8400cc?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      colSpan: 2,
      rowSpan: 1,
    },
    {
      title: "Sylhet",
      location: "Sylhet Central",
      image:
        "https://media.istockphoto.com/id/1825147025/photo/financial-district-of-london.webp?a=1&b=1&s=612x612&w=0&k=20&c=t9PbEpukoC8_B5ep1qx97O9NLQgu2Y5cYFa_8cbmmJE=",
      colStart: 3,
      rowStart: 1,
    },
    {
      title: "Rajshahi",
      location: "Padma Garden",
      image:
        "https://media.istockphoto.com/id/1470238273/photo/seoul-crowds-pedestrianised-shopping-streets-myeongdong-city-nightlife-korea.webp?a=1&b=1&s=612x612&w=0&k=20&c=LwdQj4ys7kJlgnXNUOEe_P-XAqCd0MxmQiNpe0rW_10=",
      colStart: 1,
      rowStart: 2,
    },
    {
      title: "Khulna",
      location: "Rupsha Bridge",
      image: "/Image/Home/Grid/chittagong.PNG",
      colSpan: 2,
      rowStart: 2,
    },
    {
      title: "Chittagong",
      location: "New Market",
      image:
        "https://thumbs.dreamstime.com/b/digital-billboard-illuminated-animated-sale-graphics-displaying-vibrant-colors-night-urban-setting-showcases-356187786.jpg",
      colSpan: 3,
      rowStart: 3,
    },
  ];

  return (
    <div className="mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Gallery items={items} />
      <SecondHeroSection />
      <ClientGalleries />
      <BlogCardGrid />
      <Footer />
    </div>
  );
}
