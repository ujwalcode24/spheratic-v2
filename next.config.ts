import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable optimizations for Netlify
    optimizePackageImports: ["framer-motion", "three"],
  },
  // Ensure proper image optimization
  images: {
    unoptimized: process.env.NETLIFY === "true",
  },
};

export default nextConfig;
