/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['camo.githubusercontent.com', 'github.com'],
  },
}

module.exports = nextConfig
