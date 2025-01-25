import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any domain
        port: '',       // Optional: Matches any port
        pathname: '/**', // Allows any path
      },
    ],
  },
};

export default nextConfig;
