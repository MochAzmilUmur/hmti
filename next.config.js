/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    localPatterns: [
      { pathname: '/uploads/**' },
      { pathname: '/assets/**' },
      { pathname: '/**' },
    ],
  },
};

module.exports = nextConfig;
