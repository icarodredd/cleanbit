import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/1000")],
  },  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
