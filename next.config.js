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
        destination: `https://gotdoc-server.herokuapp.com/api/:path*`,
      },
    ];
  };
  return { rewrites };
};