'use client';

import { useEffect, useState } from 'react';

const AnimatedHero = () => {
  const [mounted, setMounted] = useState(false);
  const [counters, setCounters] = useState({
    pages: 0,
    protocols: 0,
    chains: 0,
  });

  useEffect(() => {
    setMounted(true);

    // Animate counters on mount
    const targets = { pages: 1000, protocols: 25, chains: 6 };
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounters({
        pages: Math.floor(targets.pages * progress),
        protocols: Math.floor(targets.protocols * progress),
        chains: Math.floor(targets.chains * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          25% {
            opacity: 0.3;
          }
          50% {
            transform: translateY(-100px) translateX(30px);
            opacity: 0.2;
          }
          75% {
            opacity: 0.1;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-80px) translateX(-40px);
            opacity: 0.15;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.8);
          }
        }

        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.8), rgba(34, 211, 238, 0.2));
          animation: float 6s infinite ease-in-out;
        }

        .particle-slow {
          animation: floatSlow 8s infinite ease-in-out;
        }

        .gradient-hero {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(34, 211, 238, 0.05));
        }

        .gradient-text-hero {
          background: linear-gradient(135deg, #a855f7 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ticker {
          display: flex;
          gap: 3rem;
          animation: slide 15s linear infinite;
        }

        .ticker-item {
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .ticker-price {
          font-weight: 600;
          color: #06b6d4;
        }

        .ticker-price.positive {
          color: #10b981;
        }

        .ticker-price.negative {
          color: #ef4444;
        }

        @media (prefers-reduced-motion: reduce) {
          .particle,
          .particle-slow,
          .ticker {
            animation: none;
          }
        }
      `}</style>

      <section className="relative overflow-hidden bg-gray-950 py-24 md:py-32">
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large floating particles */}
          <div
            className="particle"
            style={{
              width: '200px',
              height: '200px',
              top: '10%',
              left: '10%',
              animationDelay: '0s',
            }}
          />
          <div
            className="particle"
            style={{
              width: '150px',
              height: '150px',
              top: '20%',
              right: '15%',
              animationDelay: '1s',
            }}
          />
          <div
            className="particle"
            style={{
              width: '100px',
              height: '100px',
              bottom: '15%',
              left: '20%',
              animationDelay: '2s',
            }}
          />
          <div
            className="particle particle-slow"
            style={{
              width: '250px',
              height: '250px',
              bottom: '5%',
              right: '10%',
              animationDelay: '0.5s',
            }}
          />

          {/* Small floating accent dots */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`dot-${i}`}
              className="particle"
              style={{
                width: `${20 + (i % 4) * 10}px`,
                height: `${20 + (i % 4) * 10}px`,
                top: `${(i * 8.3) % 100}%`,
                left: `${(i * 9) % 100}%`,
                animationDelay: `${(i * 0.3) % 6}s`,
                opacity: 0.05,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main heading */}
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text-hero block">Your Edge in Crypto</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              Real-time market intelligence, DeFi yields, gas tracking, and airdrop alerts — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                className="px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)',
                }}
              >
                Explore Tools →
              </button>
              <button
                className="px-8 py-4 rounded-lg font-semibold text-cyan-400 text-lg border-2 border-cyan-400/50 bg-transparent hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400"
              >
                Track Airdrops
              </button>
            </div>
          </div>

          {/* Animated Stats Counters */}
          {mounted && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text-hero mb-2">
                  {counters.pages}+
                </div>
                <div className="text-sm md:text-base text-gray-400">Pages</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text-hero mb-2">
                  {counters.protocols}+
                </div>
                <div className="text-sm md:text-base text-gray-400">DeFi Protocols</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text-hero mb-2">
                  {counters.chains}
                </div>
                <div className="text-sm md:text-base text-gray-400">Chains Tracked</div>
              </div>

              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold gradient-text-hero mb-2">
                  24/7
                </div>
                <div className="text-sm md:text-base text-gray-400">Updated Daily</div>
              </div>
            </div>
          )}

          {/* Crypto Price Ticker */}
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-purple-500/20 backdrop-blur-sm py-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 pointer-events-none" />
            <div className="relative overflow-x-hidden">
              <div className="ticker">
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">₿ BTC</span>
                  <span className="ticker-price positive">$67,842</span>
                  <span className="text-green-400 text-sm">+2.4%</span>
                </div>
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">Ξ ETH</span>
                  <span className="ticker-price positive">$3,542</span>
                  <span className="text-green-400 text-sm">+1.8%</span>
                </div>
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">◎ SOL</span>
                  <span className="ticker-price positive">$198.45</span>
                  <span className="text-green-400 text-sm">+5.2%</span>
                </div>
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">₿ BTC</span>
                  <span className="ticker-price positive">$67,842</span>
                  <span className="text-green-400 text-sm">+2.4%</span>
                </div>
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">Ξ ETH</span>
                  <span className="ticker-price positive">$3,542</span>
                  <span className="text-green-400 text-sm">+1.8%</span>
                </div>
                <div className="ticker-item">
                  <span className="text-gray-300 font-medium">◎ SOL</span>
                  <span className="ticker-price positive">$198.45</span>
                  <span className="text-green-400 text-sm">+5.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedHero;
