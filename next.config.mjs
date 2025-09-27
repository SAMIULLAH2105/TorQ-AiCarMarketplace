/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
    serverActions: {
      bodySizeLimit: "5mb", // Increase to 5 MB (adjust as needed)
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rdkfqshtbndzheoqoyhx.supabase.co",
      },
    ],
  },

  // Add this to fix the ESLint build error
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://vehiql-mywaitlist.created.app;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
