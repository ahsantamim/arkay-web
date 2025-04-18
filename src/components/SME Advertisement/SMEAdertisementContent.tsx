import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building,
  Clock,
  Image,
  BarChart3,
  Megaphone,
  Zap,
  PieChart,
} from "lucide-react";

interface AdPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
}

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
}

export const SmeAdvertisementContent = () => {
  const adPlans: AdPlan[] = [
    {
      title: "Basic",
      price: "৳10,999",
      description:
        "Perfect for small businesses starting their advertising journey",
      features: [
        "1 slot (5 minutes of screen time per hour)",
        "Basic analytics dashboard",
        "Standard image quality",
        "Weekly reports",
      ],
      highlight: false,
    },
    {
      title: "Premium",
      price: "৳25,999",
      description: "Most popular choice for growing businesses",
      features: [
        "2 slots (10 minutes of screen time per hour)",
        "Advanced analytics dashboard",
        "HD image quality",
        "Daily reports",
        "Premium slot timing selection",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "৳49,999",
      description: "Maximum visibility for established businesses",
      features: [
        "4 slots (20 minutes of screen time per hour)",
        "Comprehensive analytics suite",
        "4K image quality",
        "Real-time performance tracking",
        "Priority slot timing",
        "Dedicated account manager",
      ],
      highlight: false,
    },
  ];

  return (
    <>
      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto mt-12 mb-12 bg-white">
        <div className="container ">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              How It Works
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Our platform offers strategic advertising slots throughout the day
              across multiple screens in high-traffic locations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-green-50 hover:bg-green-100  transition-all duration-300">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Slot Based</h3>
              <p className="text-gray-600">
                Each slot guarantees 5 minutes of screen time per hour, ensuring
                your message gets seen.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-pink-50 hover:bg-pink-100  transition-all duration-300">
              <div className="bg-pink-100 p-3 rounded-full mb-4">
                <Image className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visual Impact</h3>
              <p className="text-gray-600">
                High-quality displays showcase your business with stunning
                visuals that catch attention.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-yellow-50 hover:bg-yellow-100  transition-all duration-300">
              <div className="bg-yellow-100 p-3 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Performance Analytics
              </h3>
              <p className="text-gray-600">
                Track views, engagement, and conversion metrics with our
                detailed dashboard.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-blue-50 hover:bg-blue-100 transition-all duration-300">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Megaphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Promotions</h3>
              <p className="text-gray-600">
                Take advantage of Eid offers and seasonal promotions to maximize
                visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Flexible Options
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Choose Your Advertising Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {adPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden rounded-none ${
                  plan.highlight
                    ? "border-2 border-blue-500 shadow-lg"
                    : "border border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-600 text-white px-4 py-1 text-xs font-bold transform rotate-45 translate-x-8 translate-y-3">
                      POPULAR
                    </div>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {plan.title}
                  </CardTitle>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
