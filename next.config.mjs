/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '194.87.83.234',
        port: '8055',
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig
