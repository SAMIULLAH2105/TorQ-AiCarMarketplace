/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: {
    serverComponentsHmrCache:false,
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"rdkfqshtbndzheoqoyhx.supabase.co",
        
      },
    ],
  },
    
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'seft' https://vehiql-mywaitlist.created.app; ",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
