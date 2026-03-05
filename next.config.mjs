/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // images: {
  //   domains: ["randomuser.me", "images.unsplash.com"],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
