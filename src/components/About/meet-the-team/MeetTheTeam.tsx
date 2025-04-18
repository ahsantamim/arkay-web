import React from "react";
import { Linkedin, Trophy, Zap, Users, LineChart } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Visionary leader with 15+ years in digital marketing",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Michael Chen",
    role: "Chief Operations Officer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Operations expert specializing in scaling marketing agencies",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    description:
      "Digital marketing strategist with focus on emerging platforms",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "David Kim",
    role: "Content Strategist",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Expert in creating viral content strategies",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "Alexandra Peters",
    role: "Sales Director",
    image:
      "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Relationship builder with 10+ years in B2B sales",
    linkedin: "https://linkedin.com/in",
  },
  {
    name: "James Wilson",
    role: "Account Executive",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    description: "Specialized in enterprise client acquisition",
    linkedin: "https://linkedin.com/in",
  },
];

const stats = [
  { icon: <Trophy size={24} />, value: "250+", label: "Clients Served" },
  { icon: <Zap size={24} />, value: "95%", label: "Client Retention" },
  { icon: <Users size={24} />, value: "50+", label: "Team Members" },
  { icon: <LineChart size={24} />, value: "10M+", label: "Revenue Generated" },
];

function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">Meet Our Team</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The creative minds shaping the future of digital marketing
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

      {/* Team List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
