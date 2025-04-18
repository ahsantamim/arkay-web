import React from "react";
import {
  MonitorSmartphone,
  PaintBucket,
  Building2,
  TreePine,
  Award,
  Lightbulb,
} from "lucide-react";

function WhatWeDo() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="flex items-center gap-4 justify-center mb-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="w-12 h-0.5 bg-blue-500"></div>
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            What We Do
          </h2>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>

        {/* Outdoor Advertising */}
        <div className="relative mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-5/12 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <MonitorSmartphone className="w-5 h-5 text-blue-500" />
                <span className="text-blue-700">Outdoor Advertising</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Digital Billboard Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                The most prestigious LED outdoor and indoor advertising company
                in Bangladesh. Our screens are strategically located across
                major intersections, roundabouts, and motorways.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-600">Energy Efficient</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800"
                alt="Digital Billboard"
                className="w-screen h-[600px] object-cover shadow-2xl "
              />
            </div>
          </div>
        </div>

        {/* Indoor Solutions */}
        <div className="relative mb-32">
          <div className="relative h-[500px] w-full overflow-hidden ">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="Indoor Digital Display"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-2xl mx-auto px-8">
                <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                  <Building2 className="w-5 h-5 text-purple-500" />
                  <span className="text-purple-700">Indoor Solutions</span>
                </div>
                <h3 className="text-4xl font-bold text-white mt-6 mb-4">
                  Indoor Digital Solutions
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-8">
                  Transforming indoor spaces with cutting-edge digital displays
                  and interactive solutions for shopping malls, corporate
                  offices, and public venues.
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

        {/* City Beautification */}
        <div className="relative mb-32">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="w-full lg:w-5/12 space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <TreePine className="w-5 h-5 text-green-500" />
                <span className="text-green-700">City Beautification</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-800">
                Beautification of Dhaka
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Leading the transformation of urban spaces through strategic
                beautification projects. We maintain gardens, medians, and
                roundabouts with our dedicated team of landscaping experts.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800"
                alt="City Beautification"
                className="w-screen h-[600px] object-cover shadow-2xl r"
              />
            </div>
          </div>
        </div>

        {/* Creative Solutions */}
        <div className="relative">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
              <PaintBucket className="w-5 h-5 text-purple-500" />
              <span className="text-purple-700">Creative Solutions</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Creative Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
              Delivering innovative and impactful advertising solutions that
              combine creativity with cutting-edge technology to help brands
              stand out.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {["Strategy", "Design", "Technology"].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8  shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {item}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Professional {item.toLowerCase()} solutions tailored to meet
                  your specific needs and objectives.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
