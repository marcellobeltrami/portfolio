/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'export',
  
  // Optional: Change the output directory from 'out' to something else
  // distDir: 'dist',
  
  // Ensure images are handled correctly in static export
  images: {
    unoptimized: true,
  },
  
  // Disable server-only features
  experimental: {
    serverActions: false,
  },
};

export default nextConfig;

