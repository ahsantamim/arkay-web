// import React from "react";
// import { Users, Smartphone, ClipboardList, Mic, BarChart2 } from "lucide-react";

// interface MetricCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   index: number;
// }

// const MetricCard = ({ title, description, icon, index }: MetricCardProps) => {
//   const colors = [
//     "bg-blue-100 text-blue-800",
//     "bg-purple-100 text-purple-800",
//     "bg-green-100 text-green-800",
//     "bg-orange-100 text-orange-800",
//     "bg-indigo-100 text-indigo-800",
//   ];

//   return (
//     <div
//       className={`flex flex-col p-8  shadow-lg transition-all hover:scale-[1.02] ${colors[index]} hover:shadow-xl`}
//       style={{
//         transform: `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`,
//       }}
//     >
//       <div className="flex items-center gap-4 mb-6">
//         <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm">
//           {icon}
//         </div>
//         <h3 className="text-2xl font-bold">{title}</h3>
//       </div>
//       <p className="text-lg leading-relaxed">{description}</p>
//     </div>
//   );
// };

// export function AudienceMetrics() {
//   const metrics = [
//     {
//       title: "Population Density Analysis",
//       description:
//         "Arkay uses population density and the number of people within the vicinity of the display to calculate the number of pedestrians, buses, cars, motorbikes, and more. This helps us estimate audience numbers accurately.",
//       icon: <Users className="w-6 h-6" />,
//     },
//     {
//       title: "Mobile Phone Ping Data",
//       description:
//         "We utilize mobile phone ping towers to identify the number of audiences in a specific area. This data provides insights into the footfall and traffic patterns around our displays.",
//       icon: <Smartphone className="w-6 h-6" />,
//     },
//     {
//       title: "Physical Counting & Surveys",
//       description:
//         "We conduct physical counts of commuters and surveys over a month to determine daily traffic patterns for specific locations. This helps us understand the audience flow and behavior.",
//       icon: <ClipboardList className="w-6 h-6" />,
//     },
//     {
//       title: "Commuter Interviews",
//       description:
//         "We randomly interview commuters on specific routes to determine how often they are exposed to advertisements. This helps us gauge the frequency of ad exposure and its impact.",
//       icon: <Mic className="w-6 h-6" />,
//     },
//     {
//       title: "Gross Rating Point (GRP)",
//       description:
//         "GRP is a measure of campaign effectiveness. It is calculated by multiplying the proportion of the target market reached by the number of times the ad is seen. This metric is useful for cross-channel comparisons.",
//       icon: <BarChart2 className="w-6 h-6" />,
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-24">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex flex-col items-center mb-16">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="w-12 h-0.5 bg-blue-500"></div>
//             <h2 className="text-4xl font-bold text-gray-800 text-center">
//               How We Measure Impact
//             </h2>
//             <div className="w-12 h-0.5 bg-blue-500"></div>
//           </div>
//           <p className="text-xl text-gray-600 max-w-3xl text-center">
//             Our multi-faceted approach combines cutting-edge technology with
//             traditional research methods to deliver precise audience
//             measurement.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {metrics.slice(0, 3).map((metric, index) => (
//             <MetricCard
//               key={metric.title}
//               title={metric.title}
//               description={metric.description}
//               icon={metric.icon}
//               index={index}
//             />
//           ))}
//           <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
//             {metrics.slice(3).map((metric, index) => (
//               <MetricCard
//                 key={metric.title}
//                 title={metric.title}
//                 description={metric.description}
//                 icon={metric.icon}
//                 index={index + 3}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Users, Smartphone, ClipboardList, Mic, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const MetricCard = ({ title, description, icon, index }: MetricCardProps) => {
  const baseStyles =
    "relative overflow-hidden transition-all duration-300 group";
  const gradients = [
    "bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200",
    "bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200",
    "bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200",
    "bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200",
    "bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200",
  ];

  const iconColors = [
    "text-blue-600 group-hover:text-blue-700",
    "text-purple-600 group-hover:text-purple-700",
    "text-green-600 group-hover:text-green-700",
    "text-orange-600 group-hover:text-orange-700",
    "text-indigo-600 group-hover:text-indigo-700",
  ];

  return (
    <div
      className={cn(
        baseStyles,
        gradients[index],
        "p-8 hover:shadow-xl transform hover:-translate-y-1",
        "border border-gray-200/50" // Added subtle border
      )}
      style={{ borderRadius: "0px" }} // Force square corners
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 bg-white/20 blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={cn(
              "p-3 bg-white/80 backdrop-blur-sm shadow-sm transition-colors duration-300",
              "group-hover:bg-white group-hover:shadow-md",
              "border border-gray-200/30" // Added subtle border
            )}
            style={{ borderRadius: "0px" }}
          >
            {" "}
            {/* Square icon container */}
            <div className={iconColors[index]}>{icon}</div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-gray-900">
            {title}
          </h3>
        </div>
        <p className="text-lg leading-relaxed text-gray-600 group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export function AudienceMetrics() {
  const metrics = [
    {
      title: "Population Density Analysis",
      description:
        "Arkay uses population density and the number of people within the vicinity of the display to calculate the number of pedestrians, buses, cars, motorbikes, and more. This helps us estimate audience numbers accurately.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Mobile Phone Ping Data",
      description:
        "We utilize mobile phone ping towers to identify the number of audiences in a specific area. This data provides insights into the footfall and traffic patterns around our displays.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Physical Counting & Surveys",
      description:
        "We conduct physical counts of commuters and surveys over a month to determine daily traffic patterns for specific locations. This helps us understand the audience flow and behavior.",
      icon: <ClipboardList className="w-6 h-6" />,
    },
    {
      title: "Commuter Interviews",
      description:
        "We randomly interview commuters on specific routes to determine how often they are exposed to advertisements. This helps us gauge the frequency of ad exposure and its impact.",
      icon: <Mic className="w-6 h-6" />,
    },
    {
      title: "Gross Rating Point (GRP)",
      description:
        "GRP is a measure of campaign effectiveness. It is calculated by multiplying the proportion of the target market reached by the number of times the ad is seen. This metric is useful for cross-channel comparisons.",
      icon: <BarChart2 className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      {/* Background decoration */}

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-0.5 bg-blue-500/70"
              style={{ borderRadius: "0px" }}
            ></div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              How We Measure Impact
            </h2>
            <div
              className="w-12 h-0.5 bg-blue-500/70"
              style={{ borderRadius: "0px" }}
            ></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl text-center leading-relaxed">
            Our multi-faceted approach combines cutting-edge technology with
            traditional research methods to deliver precise audience
            measurement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {/* Reduced gap */}
          {metrics.slice(0, 3).map((metric, index) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              description={metric.description}
              icon={metric.icon}
              index={index}
            />
          ))}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {" "}
            {/* Reduced gap */}
            {metrics.slice(3).map((metric, index) => (
              <MetricCard
                key={metric.title}
                title={metric.title}
                description={metric.description}
                icon={metric.icon}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
