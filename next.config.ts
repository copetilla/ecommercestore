import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unzklawlrqtiwnsjxrga.supabase.co',
      },
    ],
  },
};

export default nextConfig;
