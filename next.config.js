/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://be.coach-cube.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
