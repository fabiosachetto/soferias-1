import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "preview.redd.it"
      },
    ],
  },
/* config options here */
};

export default nextConfig;
