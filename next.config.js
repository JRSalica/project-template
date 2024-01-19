/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [["swc-plugin-coverage-instrument", {}]],
  },
};

module.exports = nextConfig;
