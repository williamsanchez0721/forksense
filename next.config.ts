import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['elasticbeanstalk-us-east-1-867968001024.s3.us-east-1.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
