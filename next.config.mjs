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
  
  // Enable build caching and optimization
  generateBuildId: async () => {
    return process.env.BUILD_ID || `build-${Date.now()}`;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

