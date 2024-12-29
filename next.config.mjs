/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default {
  ...nextConfig,

  // Can be safely removed in newer versions of Next.js
  future: {
    webpack5: true, // Ensure webpack 5 is used
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Resolving the fs issue for client-side usage
    };

    return config;
  },
};
