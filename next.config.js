/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  modularizeImports: {
    'react-feather': {
      transform: 'react-feather/dist/icons/{{ lowerCase member }}',
    },
  },
};

module.exports = nextConfig;
