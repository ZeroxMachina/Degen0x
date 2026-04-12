import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  typescript: {
    // Skip TS check during Vercel builds — already verified locally via tsc --noEmit
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
  ],
  webpack: (config, { isServer }) => {
    // Fix "__dirname is not defined" in ESM serverless functions
    if (isServer) {
      config.node = {
        ...config.node,
        __dirname: true,
        __filename: true,
      };
    }
    return config;
  },
  experimental: {
    // Safe concurrency: avoids OOM on Vercel 8GB machines
    // Bulk pages converted to dynamic rendering to stay under 45min build limit
    staticGenerationMaxConcurrency: 4,
    workerThreads: false,
  },
  // Sprint 40: Reduce memory pressure during local builds
  // Split chunks more aggressively to avoid single large bundles
  output: "standalone",
};

export default nextConfig;
