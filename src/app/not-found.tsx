'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const navigationCards = [
    { title: 'Tools', href: '/tools', icon: '🛠️' },
    { title: 'Exchanges', href: '/exchanges', icon: '💱' },
    { title: 'Wallets', href: '/wallets', icon: '👛' },
    { title: 'Learn', href: '/learn', icon: '📚' },
    { title: 'DeFi', href: '/defi-lending', icon: '⚙️' },
    { title: 'Compare', href: '/compare', icon: '⚖️' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-[var(--color-text)] overflow-hidden flex flex-col justify-center items-center px-4 py-16">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes crash {
          0% { transform: translateY(-100px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(0); opacity: 0.3; }
        }

        .gradient-404 {
          font-size: clamp(120px, 25vw, 320px);
          font-weight: 900;
          background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff6b6b);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
          text-shadow: 0 0 60px rgba(255, 107, 107, 0.3);
          line-height: 1;
          margin: 0;
        }

        .floating-btc {
          animation: float 3s ease-in-out infinite;
          font-size: 80px;
          opacity: 0.7;
        }

        .chart-crash {
          animation: crash 3s ease-in-out infinite;
          font-size: 60px;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(72, 219, 251, 0.6);
        }
      `}
      </style>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 floating-btc">₿</div>
      <div className="absolute bottom-32 left-10 chart-crash">📉</div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Animated 404 */}
        <h1 className="gradient-404 mb-8">404</h1>

        {/* Crypto-themed Message */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-text">
          This Page Got Liquidated
        </h2>
        <p className="text-xl sm:text-2xl text-gray-400 mb-12">
          Looks like your position went to zero. Let's get you back on track.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-16">
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for tools, wallets, exchanges..."
              className="flex-1 px-5 py-3 rounded-lg bg-[#1a1f2e] border border-[#30363d] text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:border-[#48dbfb] focus:ring-2 focus:ring-[#48dbfb]/20 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#ff6b6b] to-[#feca57] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#ff6b6b]/50 transition transform hover:scale-105"
            >
              Search
            </button>
          </div>
        </form>

        {/* Navigation Cards */}
        <div className="mb-12">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-widest">Quick Navigation</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {navigationCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative px-6 py-8 rounded-lg bg-[#1a1f2e] border border-[#30363d] hover:border-[#48dbfb] transition duration-300 hover:shadow-lg hover:shadow-[#48dbfb]/20"
              >
                <div className="text-3xl mb-2">{card.icon}</div>
                <div className="text-sm font-semibold group-hover:text-[#48dbfb] transition">
                  {card.title}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Homepage Button */}
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-[#48dbfb] to-[#1dd1a1] text-black font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-[#48dbfb]/40 transition transform hover:scale-105 mb-6"
        >
          Return to Homepage
        </Link>

        {/* Fun Fact */}
        <p className="text-gray-600 text-sm mt-8">
          Fun fact: Even DeFi protocols have 404s. This page just went full rug pull.
        </p>
      </div>
    </div>
  );
}
