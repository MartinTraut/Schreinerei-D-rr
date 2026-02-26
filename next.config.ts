import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.schreinerei-duerr.de",
      },
      {
        protocol: "https",
        hostname: "schreinerei-duerr.de",
      },
    ],
  },
};

export default nextConfig;
