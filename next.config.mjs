/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export for GitHub Pages
  // Set basePath to your repository name if hosting as a project page
  // e.g., https://username.github.io/your-repo-name/
  basePath: '/Android-Dev-Portfolio-Animated', // Adjust this if your new repo name is different
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export if you use next/image
  },
};

export default nextConfig;
