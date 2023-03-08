/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["kkupgrader.eu.org"],
  },
  swcMinify: true,
  compiler: { styledComponents: { ssr: true } },
  crossOrigin: 'anonymous',
}

module.exports = nextConfig
