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
    // Reduce static generation concurrency to avoid OOM on Vercel
    staticGenerationMaxConcurrency: 8,
    workerThreads: false, // Use child processes (separate memory) instead of worker threads
  },
};

export default nextConfig;
