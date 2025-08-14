/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // disable Next.js image optimization
  },
  basePath: "PORTFOLIO", // 👈 must match your GitHub repo name
  assetPrefix: "PORTFOLIO", // 👈 same as above
};

export default nextConfig;
