/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  compress: true,
  staticPageGenerationTimeout: 60,
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
