/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "*"],
  },
};

module.exports = nextConfig;

module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: "/api/:path*",
        destination: `http://localhost:${process.env.PORT || 3000}/api/:path*`,
      },
    ];
  };
  return { rewrites };
};