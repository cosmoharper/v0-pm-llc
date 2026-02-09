/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/line-card-pdf',
        destination: '/PM204R-line-card.pdf',
      },
    ]
  },
}

export default nextConfig
