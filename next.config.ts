import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'], // ✅ Allow Sanity image domain
  },
};

export default nextConfig;

