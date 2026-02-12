/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navneettoptech.com",
      },
      {
      protocol: "https",
      hostname: "img.youtube.com",
    },
    ],

    formats: ["image/avif", "image/webp"],

    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

module.exports = nextConfig;
