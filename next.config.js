/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  modularizeImports: {
    'react-feather': {
      transform: 'react-feather/dist/icons/{{member}}',
    },
  },
};

module.exports = nextConfig;
