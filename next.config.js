/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:['scontent.fgny1-1.fna.fbcdn.net','lh3.googleusercontent.com']
  }
}

module.exports = nextConfig
