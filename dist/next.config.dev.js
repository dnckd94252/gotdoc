"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "*"]
  }
};
module.exports = nextConfig;

module.exports = function (phase, _ref) {
  var defaultConfig = _ref.defaultConfig;

  var rewrites = function rewrites() {
    return [{
      source: "/api/:path*",
      destination: "https://gotdoc-server.herokuapp.com/api/:path*"
    }];
  };

  return {
    rewrites: rewrites
  };
};