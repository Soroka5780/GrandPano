import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // povolí načítanie obrázkov zo Sanity
  },
};

export default nextConfig;
