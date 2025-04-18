import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"], // Added the new domain
  },
};

export default nextConfig;
