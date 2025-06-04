/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Server Components
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
