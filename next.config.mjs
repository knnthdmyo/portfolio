/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export (GitHub Pages compatible)
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  trailingSlash: true,
};

export default nextConfig;

