/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "robohash.org"],
  },
};

module.exports = nextConfig;
