import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "jc-salazar.vercel.app",
          },
        ],
        destination: "https://johncarlosalazar.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
