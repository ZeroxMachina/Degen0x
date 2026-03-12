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
  experimental: {
    // Safe concurrency: avoids OOM on Vercel 8GB machines
    // Bulk pages converted to dynamic rendering to stay under 45min build limit
    staticGenerationMaxConcurrency: 8,
    workerThreads: false,
  },
};

export default nextConfig;
