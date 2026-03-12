'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  small: string;
  data: {
    price: number;
    price_change_percentage_24h: {
      btc: number;
    };
    market_cap_rank: number;
  };
}

interface TrendingData {
  coins: Array<{
    item: TrendingCoin;
  }>;
}

interface CoinCardData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  priceBTC: number;
  change24h: number;
  marketCapRank: number;
}

const TrendingCoins: React.FC = () => {
  const [coins, setCoins] = useState<CoinCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchTrendingCoins = async () => {
    try {
      setError(null);
      const response = await fetch('/api/trending');

      if (!response.ok) {
        throw new Error('Failed to fetch trending coins');
      }

      const data: TrendingData = await response.json();

      if (data.coins && data.coins.length > 0) {
        const processedCoins: CoinCardData[] = data.coins
          .slice(0, 7)
          .map((coin) => ({
            id: coin.item.id,
            name: coin.item.name,
            symbol: coin.item.symbol.toUpperCase(),
            image: coin.item.small,
            priceBTC: coin.item.data.price,
            change24h: coin.item.data.price_change_percentage_24h.btc,
            marketCapRank: coin.item.data.market_cap_rank || 0,
          }));

        setCoins(processedCoins);
        setLoading(false);
      } else {
        throw new Error('No trending coins data');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();

    // Auto-refresh every 5 minutes
    intervalRef.current = setInterval(fetchTrendingCoins, 5 * 60 * 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of card + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (error && coins.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="glass p-6 text-center">
          <p className="text-[var(--color-text-secondary)]">Unable to load trending coins</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
          🔥 Trending Now
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm">
          Top coins gaining momentum this week
        </p>
      </div>

      {loading ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="glass p-4 rounded-2xl flex-shrink-0 w-72 h-48 animate-pulse"
            >
              <div className="h-12 w-12 rounded-full bg-[var(--glass-bg)] mb-3" />
              <div className="h-4 w-20 bg-[var(--glass-bg)] rounded mb-2" />
              <div className="h-3 w-16 bg-[var(--glass-bg)] rounded mb-4" />
              <div className="h-4 w-24 bg-[var(--glass-bg)] rounded" />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative group">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {coins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))}
          </div>

          {/* Left Scroll Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll left"
          >
            <div className="glass p-2 rounded-full backdrop-blur-md">
              <svg
                className="w-6 h-6 text-[var(--color-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          {/* Right Scroll Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Scroll right"
          >
            <div className="glass p-2 rounded-full backdrop-blur-md">
              <svg
                className="w-6 h-6 text-[var(--color-text)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

interface CoinCardProps {
  coin: CoinCardData;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const isPositive = coin.change24h >= 0;

  return (
    <div className="glass p-6 rounded-2xl flex-shrink-0 w-72 card-hover cursor-pointer">
      {/* Header with image and name */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden flex-shrink-0">
            {coin.image ? (
              <img
                src={coin.image}
                alt={coin.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[var(--color-text)] font-bold text-sm">
                {coin.symbol[0]}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-[var(--color-text)]">{coin.name}</h3>
            <p className="text-xs text-[var(--color-text-secondary)] font-medium">
              {coin.symbol}
            </p>
          </div>
        </div>
        {coin.marketCapRank > 0 && (
          <div className="glass-pill px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
            #{coin.marketCapRank}
          </div>
        )}
      </div>

      {/* Price Info */}
      <div className="mb-4 pb-4 border-b border-[var(--glass-border)]">
        <p className="text-xs text-[var(--color-text-secondary)] mb-1">Price (BTC)</p>
        <p className="text-lg font-bold text-[var(--color-text)]">
          {coin.priceBTC < 0.01
            ? coin.priceBTC.toFixed(8)
            : coin.priceBTC.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} BTC
        </p>
      </div>

      {/* 24h Change */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-secondary)]">24h Change</span>
        <div
          className={`px-3 py-1 rounded-lg font-semibold text-sm ${
            isPositive
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {isPositive ? '↑' : '↓'} {Math.abs(coin.change24h).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
