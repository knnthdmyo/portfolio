/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Only use basePath for GitHub Pages deployment
  // Remove or comment out for Netlify/Vercel
  // basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
  // assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
  trailingSlash: true,
};

export default nextConfig;

