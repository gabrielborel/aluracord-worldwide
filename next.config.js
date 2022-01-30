/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'www.alura.com.br'],
    formats: ["image/avif", "image/webp"]
  },
}

module.exports = nextConfig
