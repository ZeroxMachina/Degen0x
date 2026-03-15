'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }} className="relative overflow-hidden">
      {/* Animated background gradient following cursor */}
      <div
        className="pointer-events-none fixed inset-0 opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
          {/* 404 Symbol */}
          <div className="space-y-4">
            <div className="text-9xl sm:text-[120px] font-bold bg-gradient-to-r from-[#6366f1] via-[#06b6d4] to-[#a855f7] bg-clip-text text-transparent animate-bounce">
              404
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-white animate-pulse">
              Position Not Found
            </div>
          </div>

          {/* Crypto-themed message */}
          <div className="space-y-3">
            <p className="text-gray-400 text-lg">
              Looks like you've ventured into a wallet that doesn't exist. This page has been <span className="text-[#ef4444]">liquidated</span>.
            </p>
            <p className="text-sm text-gray-500 font-mono bg-[#0a0e1a]/50 rounded-lg p-3 border border-[#6366f1]/20">
              404 • LP Token Vanished • Slippage Detected
            </p>
          </div>

          {/* Search suggestion */}
          <div className="space-y-3 pt-4">
            <p className="text-gray-400 text-sm">Try these popular destinations instead:</p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/tools"
                className="group relative overflow-hidden rounded-lg border border-[#6366f1]/30 bg-[#6366f1]/5 p-3 text-sm font-medium text-white transition-all hover:bg-[#6366f1]/15 hover:border-[#6366f1]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative">Tools</span>
              </Link>
              <Link
                href="/exchanges"
                className="group relative overflow-hidden rounded-lg border border-[#06b6d4]/30 bg-[#06b6d4]/5 p-3 text-sm font-medium text-white transition-all hover:bg-[#06b6d4]/15 hover:border-[#06b6d4]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative">Exchanges</span>
              </Link>
              <Link
                href="/wallets"
                className="group relative overflow-hidden rounded-lg border border-[#a855f7]/30 bg-[#a855f7]/5 p-3 text-sm font-medium text-white transition-all hover:bg-[#a855f7]/15 hover:border-[#a855f7]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative">Wallets</span>
              </Link>
              <Link
                href="/learn"
                className="group relative overflow-hidden rounded-lg border border-[#f59e0b]/30 bg-[#f59e0b]/5 p-3 text-sm font-medium text-white transition-all hover:bg-[#f59e0b]/15 hover:border-[#f59e0b]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#f59e0b] to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <span className="relative">Learn</span>
              </Link>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-3 pt-2">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#06b6d4] text-white font-semibold transition-all hover:shadow-lg hover:shadow-[#6366f1]/30 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative flex items-center gap-2">
                <span>Return to Home</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>

          {/* Footer message */}
          <div className="pt-4 border-t border-[#6366f1]/20">
            <p className="text-xs text-gray-500">
              Lost your way? Try our{' '}
              <Link href="/search" className="text-[#6366f1] hover:underline">
                search
              </Link>
              {' '}to find what you're looking for.
            </p>
          </div>
        </div>

        {/* Floating crypto symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 text-4xl opacity-5 animate-float">₿</div>
          <div className="absolute top-40 right-20 text-5xl opacity-5 animate-float-delayed">Ξ</div>
          <div className="absolute bottom-40 left-20 text-3xl opacity-5 animate-float">◆</div>
          <div className="absolute bottom-10 right-10 text-4xl opacity-5 animate-float-delayed">∞</div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}
