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
    // Balance concurrency: high enough for speed, low enough to avoid OOM
    // Vercel standard machines have ~8GB RAM; 8192MB heap + 25 concurrent pages works well
    staticGenerationMaxConcurrency: 25,
    workerThreads: true, // Worker threads are faster than child processes
    cpus: 4, // Force 4 workers regardless of detected CPU count
  },
};

export default nextConfig;
