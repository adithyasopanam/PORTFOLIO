/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // disable Next.js image optimization
  },
  
  basePath: "/PORTFOLIO",
assetPrefix: "/PORTFOLIO"

// 👈 must match your GitHub repo name
};

export default nextConfig;
