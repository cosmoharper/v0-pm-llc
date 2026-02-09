/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/line-card-pdf',
        destination: '/PM204R-line-card.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
