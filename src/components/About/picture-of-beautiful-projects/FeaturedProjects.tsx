import React from "react";
import { Monitor, Play, Award, Lightbulb } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  category: string;
  categoryIcon: "monitor" | "play";
  categoryColor: "blue" | "purple";
  reverse?: boolean;
  fullBackground?: boolean;
}

function Project({
  title,
  description,
  image,
  category,
  categoryIcon,
  categoryColor,
  reverse = false,
  fullBackground = false,
}: ProjectProps) {
  const Icon = categoryIcon === "monitor" ? Monitor : Play;
  const colorClasses =
    categoryColor === "blue"
      ? { bg: "bg-blue-50", text: "text-blue-700", icon: "text-blue-500" }
      : {
          bg: "bg-purple-50",
          text: "text-purple-700",
          icon: "text-purple-500",
        };

  if (fullBackground) {
    return (
      <div className="relative mb-32 last:mb-0">
        <div className="relative h-[500px] w-full px-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-2xl mx-auto px-8">
              <div
                className={`inline-flex items-center gap-2 ${colorClasses.bg} px-4 py-2 rounded-full`}
              >
                <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
                <span className={colorClasses.text}>{category}</span>
              </div>
              <h3 className="text-4xl font-bold text-white mt-6 mb-4">
                {title}
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg mb-8">
                {description}
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-white" />
                  <span className="text-gray-200">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-white" />
                  <span className="text-gray-200">Energy Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const content = (
    <>
      <div className="w-full lg:w-7/12 relative">
        <div
          className={`absolute -top-4 ${
            reverse ? "-right-4" : "-left-4"
          } w-24 h-24 bg-blue-500/10 rounded-full blur-2xl`}
        ></div>
        <div
          className={`absolute -bottom-4 ${
            reverse ? "-left-4" : "-right-4"
          } w-32 h-32 bg-purple-500/10  blur-2xl`}
        ></div>
        <img
          src={image}
          alt={title}
          className="w-screen h-[600px] object-cover  shadow-2xl"
        />
      </div>
      <div className="w-full lg:w-5/12 space-y-6">
        <div
          className={`inline-flex items-center gap-2 ${colorClasses.bg} px-4 py-2 rounded-full`}
        >
          <Icon className={`w-5 h-5 ${colorClasses.icon}`} />
          <span className={colorClasses.text}>{category}</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        <div className="flex gap-4 pt-4">
          <div className="flex items-center gap-2">
            <Award className={`w-5 h-5 ${colorClasses.icon}`} />
            <span className="text-gray-600">Award Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <Lightbulb className={`w-5 h-5 ${colorClasses.icon}`} />
            <span className="text-gray-600">Energy Efficient</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative mb-32 last:mb-0">
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-12`}
      >
        {content}
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 justify-center mb-16">
          <div className="w-12 h-0.5 bg-blue-500"></div>
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>

        <Project
          title="Smart City Integration"
          description="Our cutting-edge LED displays are transforming urban landscapes into interactive environments. These installations combine aesthetic appeal with practical functionality, delivering real-time information and enhancing city experiences through innovative technology integration."
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          category="Smart City Solutions"
          categoryIcon="monitor"
          categoryColor="blue"
        />

        <Project
          title="Commercial Advertising Solutions"
          description="Revolutionizing outdoor advertising with high-brightness LED displays that capture attention 24/7. Our solutions offer unparalleled visibility and engagement opportunities for brands in high-traffic locations, with state-of-the-art technology ensuring maximum impact."
          image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
          category="Commercial Solutions"
          categoryIcon="play"
          categoryColor="purple"
          reverse
          fullBackground
        />

        <Project
          title="Interactive Display Technology"
          description="Pushing the boundaries of interaction with touch-enabled LED displays. These innovative solutions create immersive experiences for retail, education, and entertainment sectors, featuring advanced touch recognition and real-time response capabilities."
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          category="Interactive Technology"
          categoryIcon="monitor"
          categoryColor="blue"
        />

        <Project
          title="Sports & Entertainment Venues"
          description="Elevating the spectator experience with massive LED screens that bring every moment to life. Our displays deliver crystal-clear visuals and instant replays that keep audiences engaged throughout events, with HDR technology for true-to-life color reproduction."
          image="https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?auto=format&fit=crop&q=80"
          category="Entertainment Solutions"
          categoryIcon="play"
          categoryColor="purple"
          reverse
        />
      </div>
    </section>
  );
}

export default FeaturedProjects;
