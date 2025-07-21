/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // Image optimization for static export
  images: {
    unoptimized: true
  },
  
  // SEO and performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  
  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  
  // Ignore build errors temporarily during development
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development'
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development'
  }
}

module.exports = nextConfig
