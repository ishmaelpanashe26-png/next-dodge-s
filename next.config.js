/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external images from Unsplash
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com', // in case we use this later
      },
    ],
  },

  // If you connect a backend API later
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3001/api/:path*', // change to your backend url
      },
    ]
  },
}

module.exports = nextConfig
