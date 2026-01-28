/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static export
  images: {
    unoptimized: true, // Required for static export
  },
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

