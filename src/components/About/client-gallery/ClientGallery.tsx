import React from "react";
import {
  MonitorPlay,
  Building2,
  Megaphone,
  Lightbulb,
  ShoppingBag,
  Train,
  Hotel,
  Landmark,
  Warehouse,
  Trophy,
  Palette,
  Building,
  Tv,
  Store,
  Computer,
  BadgeDollarSign,
  Plane,
  Users,
  Mouse as Museum,
  Anchor,
  Trophy as TrophyIcon,
  Zap,
  LineChart,
} from "lucide-react";

const clients = [
  {
    name: "Times Square Plaza",
    description: "Interactive Digital Experience",
    beforeImage:
      "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1478093647753-e0d4d24f7b24?w=800&q=80",
    logo: Lightbulb,
  },
  {
    name: "Global Tech Center",
    description: "Smart Display Network",
    beforeImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    logo: Computer,
  },
  {
    name: "Global Tech Center",
    description: "Smart Display Network",
    beforeImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    logo: Computer,
  },
  {
    name: "Urban Metro Hub",
    description: "Transit Media Network",
    beforeImage:
      "https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?w=800&q=80",
    logo: Train,
  },
  {
    name: "Sunset Boulevard",
    description: "Premium LED Showcase",
    beforeImage:
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=800&q=80",
    logo: Hotel,
  },
  {
    name: "Downtown District",
    description: "Urban Display Network",
    beforeImage:
      "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=800&q=80",
    logo: Building,
  },
  {
    name: "Innovation Park",
    description: "Tech Corridor Displays",
    beforeImage:
      "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    logo: Warehouse,
  },
  {
    name: "Central Station",
    description: "Transit Media Hub",
    beforeImage:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    logo: Train,
  },
  {
    name: "Harbor Front",
    description: "Waterfront Display Network",
    beforeImage:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
    logo: Anchor,
  },
  {
    name: "Central Station",
    description: "Transit Media Hub",
    beforeImage:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80",
    logo: Train,
  },
  {
    name: "Arts District",
    description: "Creative Media Displays",
    beforeImage:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1533662635785-9e15f20c0ecf?w=800&q=80",
    logo: Palette,
  },
  {
    name: "Business Hub",
    description: "Corporate Network",
    beforeImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&q=80",
    logo: Building2,
  },
  {
    name: "Entertainment Zone",
    description: "Interactive Displays",
    beforeImage:
      "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    logo: Tv,
  },
  {
    name: "Shopping District",
    description: "Retail Media Network",
    beforeImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1519642918688-7e43b19245d8?w=800&q=80",
    logo: Store,
  },
  {
    name: "Tech Campus",
    description: "Innovation Display Grid",
    beforeImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    logo: Computer,
  },
  {
    name: "Financial Center",
    description: "Premium LED Network",
    beforeImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    logo: BadgeDollarSign,
  },
  {
    name: "Airport Terminal",
    description: "Travel Media Hub",
    beforeImage:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800&q=80",
    logo: Plane,
  },
  {
    name: "Convention Center",
    description: "Event Display System",
    beforeImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    logo: Users,
  },
  {
    name: "Cultural District",
    description: "Heritage Media Network",
    beforeImage:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1533662635785-9e15f20c0ecf?w=800&q=80",
    logo: Museum,
  },
  {
    name: "Innovation Park",
    description: "Tech Corridor Displays",
    beforeImage:
      "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    logo: Warehouse,
  },
  {
    name: "Financial Center",
    description: "Premium LED Network",
    beforeImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    logo: BadgeDollarSign,
  },
];

const stats = [
  { icon: <TrophyIcon size={24} />, value: "200+", label: "Global Locations" },
  { icon: <Zap size={24} />, value: "75M+", label: "Monthly Impressions" },
  { icon: <Users size={24} />, value: "99%", label: "Client Satisfaction" },
  { icon: <LineChart size={24} />, value: "500+", label: "Campaigns Managed" },
];

function ClientGallery() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto mb-12 bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl font-bold text-gray-900">Client Gallery</h1>
          </div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing our transformative digital advertising solutions across
            global locations
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-600 mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Global Impact Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8 [&>*:nth-child(3n-1)]:translate-y-12">
          {clients.map((client, index) => {
            const Logo = client.logo;
            return (
              <div key={index} className="group relative">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={client.beforeImage}
                    alt={`${client.name} before`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 transform scale-100 group-hover:scale-110"
                  />
                  <img
                    src={client.afterImage}
                    alt={`${client.name} after`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                  />
                  {/* Centered Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Logo className="w-24 h-24 text-white transition-opacity duration-700 group-hover:opacity-0" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {client.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {client.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ClientGallery;
