/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['assets.coingecko.com'],
  },
}

module.exports = nextConfig
