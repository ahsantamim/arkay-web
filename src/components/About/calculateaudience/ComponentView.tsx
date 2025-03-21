"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Population Density Analysis",
    description:
      "Arkay uses population density and the number of people within the vicinity of the display to calculate the number of pedestrians, buses, cars, motorbikes, and more. This helps us estimate audience numbers accurately.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Population Density Analysis
      </div>
    ),
  },
  {
    title: "Mobile Phone Ping Data",
    description:
      "We utilize mobile phone ping towers to identify the number of audiences in a specific area. This data provides insights into the footfall and traffic patterns around our displays.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/mobile-ping.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Mobile Ping Data"
        />
      </div>
    ),
  },
  {
    title: "Physical Counting & Surveys",
    description:
      "We conduct physical counts of commuters and surveys over a month to determine daily traffic patterns for specific locations. This helps us understand the audience flow and behavior.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Physical Counting & Surveys
      </div>
    ),
  },
  {
    title: "Commuter Interviews",
    description:
      "We randomly interview commuters on specific routes to determine how often they are exposed to advertisements. This helps us gauge the frequency of ad exposure and its impact.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Commuter Interviews
      </div>
    ),
  },
  {
    title: "Gross Rating Point (GRP)",
    description:
      "GRP is a measure of campaign effectiveness. It is calculated by multiplying the proportion of the target market reached by the number of times the ad is seen. This metric is useful for cross-channel comparisons.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--blue-500))] text-white">
        Gross Rating Point (GRP)
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 mt-12">
      {/* Centered Header with Underline Gradient */}
      <h2 className="text-3xl font-semibold text-center relative mb-12">
        Our Analysis Process
        <span className="absolute left-1/2 bottom-[-10px] w-[25%] transform -translate-x-1/2">
          <div className="h-1 bg-gradient-to-r from-blue-500 via-black to-yellow-500 rounded-3xl"></div>
        </span>
      </h2>

      {/* Sticky Scroll Section */}
      <StickyScroll content={content} />
    </div>
  );
}
