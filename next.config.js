/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "https://lh3.googleusercontent.comnp",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
