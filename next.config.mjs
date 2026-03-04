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
        hostname: "example.com",
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
