'use client';

import React, { useEffect, useState, useRef } from 'react';

interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  rank: number | null;
  price: number | null;
  priceBtc: number | null;
  change24h: number | null;
  marketCap: number | null;
  sparkline: string | null;
}

interface TrendingData {
  coins: TrendingCoin[];
  updatedAt: string;
}

const FALLBACK_COINS: TrendingCoin[] = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', thumb: '', rank: 1, price: 87250, priceBtc: 1, change24h: 2.4, marketCap: 1710000000000, sparkline: null },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', thumb: '', rank: 2, price: 3420, priceBtc: 0.0392, change24h: 1.8, marketCap: 411000000000, sparkline: null },
  { id: 'solana', name: 'Solana', symbol: 'SOL', thumb: '', rank: 5, price: 198, priceBtc: 0.00227, change24h: 5.1, marketCap: 92000000000, sparkline: null },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', thumb: '', rank: 8, price: 0.42, priceBtc: 0.0000048, change24h: -1.2, marketCap: 61000000000, sparkline: null },
  { id: 'cardano', name: 'Cardano', symbol: 'ADA', thumb: '', rank: 9, price: 1.18, priceBtc: 0.0000135, change24h: 3.7, marketCap: 42000000000, sparkline: null },
  { id: 'avalanche-2', name: 'Avalanche', symbol: 'AVAX', thumb: '', rank: 12, price: 52.8, priceBtc: 0.000605, change24h: 4.3, marketCap: 21000000000, sparkline: null },
  { id: 'chainlink', name: 'Chainlink', symbol: 'LINK', thumb: '', rank: 14, price: 24.5, priceBtc: 0.000281, change24h: -0.8, marketCap: 15000000000, sparkline: null },
];

const TrendingCoins: React.FC = () => {
  const [coins, setCoins] = useState<TrendingCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [usingFallback, setUsingFallback] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchTrendingCoins = async () => {
    try {
      setError(null);
      const response = await fetch('/api/trending');

      if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
      }

      const data: TrendingData = await response.json();

      if (data.coins && data.coins.length > 0) {
        setCoins(data.coins.slice(0, 7));
        setUsingFallback(false);
        setLoading(false);
      } else {
        throw new Error('No trending coins data');
      }
    } catch (err) {
      console.warn('Trending API failed, using fallback data:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
      // Use fallback data so the section always renders
      if (coins.length === 0) {
        setCoins(FALLBACK_COINS);
        setUsingFallback(true);
      }
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
      const scrollAmount = 320;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">
            Trending Now
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Top coins gaining momentum this week
          </p>
        </div>
        {usingFallback && (
          <span className="text-xs text-[var(--color-text-secondary)] opacity-60">
            Sample data — live prices unavailable
          </span>
        )}
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
              <svg className="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
              <svg className="w-6 h-6 text-[var(--color-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

interface CoinCardProps {
  coin: TrendingCoin;
}

const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
  const change = coin.change24h ?? 0;
  const isPositive = change >= 0;
  const displayPrice = coin.price
    ? coin.price >= 1
      ? `$${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      : `$${coin.price.toFixed(6)}`
    : coin.priceBtc
      ? `${coin.priceBtc.toFixed(8)} BTC`
      : 'N/A';

  const symbolInitials = coin.symbol ? coin.symbol.slice(0, 2).toUpperCase() : '??';

  return (
    <div className="glass p-6 rounded-2xl flex-shrink-0 w-72 card-hover cursor-pointer">
      {/* Header with image and name */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] overflow-hidden flex-shrink-0">
            {coin.thumb ? (
              <img
                src={coin.thumb}
                alt={`${coin.name} trending cryptocurrency`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                {symbolInitials}
              </div>
            )}
          </div>
          <div>
            <h3 className="font-bold text-[var(--color-text)]">{coin.name}</h3>
            <p className="text-xs text-[var(--color-text-secondary)] font-medium">
              {coin.symbol?.toUpperCase()}
            </p>
          </div>
        </div>
        {coin.rank && coin.rank > 0 && (
          <div className="glass-pill px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
            #{coin.rank}
          </div>
        )}
      </div>

      {/* Price Info */}
      <div className="mb-4 pb-4 border-b border-[var(--glass-border)]">
        <p className="text-xs text-[var(--color-text-secondary)] mb-1">Price</p>
        <p className="text-lg font-bold text-[var(--color-text)]">{displayPrice}</p>
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
          {isPositive ? '\u2191' : '\u2193'} {Math.abs(change).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
