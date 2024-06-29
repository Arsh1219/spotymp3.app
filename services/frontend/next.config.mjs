/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_WEBSITE_URL:
      process.env.NODE_ENV === "production"
        ? "https://spotymp3.app"
        : "http://localhost:3000",
  },
};

export default nextConfig;
