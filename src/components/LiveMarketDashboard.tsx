'use client';

import { useState, useEffect, useRef } from 'react';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  sparkline_in_7d: {
    price: number[];
  };
}

interface PriceChangeAnimation {
  coinId: string;
  direction: 'up' | 'down';
}

const LiveMarketDashboard = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(0);
  const [animatingCoins, setAnimatingCoins] = useState<Set<string>>(new Set());
  const priceHistoryRef = useRef<Map<string, number>>(new Map());
  const updateIntervalRef = useRef<NodeJS.Timeout>(undefined);
  const updateTimerRef = useRef<NodeJS.Timeout>(undefined);

  // Fetch prices from API
  const fetchPrices = async () => {
    try {
      const response = await fetch('/api/prices');
      if (!response.ok) throw new Error('Failed to fetch prices');

      const data: CoinData[] = await response.json();

      // Track price changes for animation
      const newAnimatingCoins = new Set<string>();
      data.forEach((coin) => {
        const previousPrice = priceHistoryRef.current.get(coin.id);
        if (previousPrice !== undefined && previousPrice !== coin.current_price) {
          newAnimatingCoins.add(coin.id);
        }
        priceHistoryRef.current.set(coin.id, coin.current_price);
      });

      setCoins(data);
      setAnimatingCoins(newAnimatingCoins);
      setLastUpdated(0);
      setLoading(false);

      // Remove animation after 500ms
      const animationTimeout = setTimeout(() => {
        setAnimatingCoins(new Set());
      }, 500);

      return () => clearTimeout(animationTimeout);
    } catch (error) {
      console.error('Error fetching prices:', error);
      setLoading(false);
    }
  };

  // Initialize and set up polling
  useEffect(() => {
    fetchPrices();

    // Poll every 60 seconds
    updateIntervalRef.current = setInterval(fetchPrices, 60000);

    return () => {
      if (updateIntervalRef.current) clearInterval(updateIntervalRef.current);
      if (updateTimerRef.current) clearInterval(updateTimerRef.current);
    };
  }, []);

  // Update the "seconds ago" counter
  useEffect(() => {
    updateTimerRef.current = setInterval(() => {
      setLastUpdated((prev) => prev + 1);
    }, 1000);

    return () => {
      if (updateTimerRef.current) clearInterval(updateTimerRef.current);
    };
  }, []);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Format market cap with abbreviations
  const formatMarketCap = (value: number | null) => {
    if (!value) return 'N/A';
    if (value >= 1e12) return `$${(value / 1e12).toFixed(1)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(1)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(1)}M`;
    return formatCurrency(value);
  };

  // Render sparkline SVG
  const renderSparkline = (prices: number[]) => {
    if (!prices || prices.length === 0) return null;

    const width = 100;
    const height = 40;
    const padding = 2;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice || 1;

    const points = prices
      .map((price, index) => {
        const x = padding + (index / (prices.length - 1)) * graphWidth;
        const y = padding + ((maxPrice - price) / priceRange) * graphHeight;
        return `${x},${y}`;
      })
      .join(' ');

    const isPositive = prices[prices.length - 1] >= prices[0];

    return (
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-10"
        style={{ display: 'inline-block' }}
      >
        <polyline
          points={points}
          fill="none"
          stroke={isPositive ? '#10b981' : '#ef4444'}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          opacity={0.8}
        />
      </svg>
    );
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="w-full">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
            Live Market Dashboard
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg p-4 animate-pulse"
              style={{ backgroundColor: 'var(--glass-bg)' }}
            >
              <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-3"></div>
              <div className="h-5 bg-gray-700 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
          Live Market Dashboard
        </h2>
        <div
          className="text-sm"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Last updated: {lastUpdated}s ago
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {coins.map((coin) => {
          const isAnimating = animatingCoins.has(coin.id);
          const isPositive = coin.price_change_percentage_24h >= 0;
          const animationColor = isAnimating
            ? isPositive
              ? 'rgba(16, 185, 129, 0.1)'
              : 'rgba(239, 68, 68, 0.1)'
            : 'transparent';

          return (
            <div
              key={coin.id}
              className="rounded-lg p-4 border backdrop-blur-sm transition-all duration-500"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--color-border)',
                backgroundImage: isAnimating
                  ? `linear-gradient(135deg, ${animationColor}, transparent)`
                  : 'none',
              }}
            >
              {/* Header with icon, name, and symbol */}
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={coin.image}
                  alt={`${coin.name} cryptocurrency icon`}
                  className="w-8 h-8 rounded-full"
                  onError={(e) => {
                    e.currentTarget.src = '';
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div
                    className="font-semibold text-sm truncate"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {coin.name}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wide"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {coin.symbol}
                  </div>
                </div>
              </div>

              {/* Current price */}
              <div className="mb-2">
                <div
                  className="text-lg font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {formatCurrency(coin.current_price)}
                </div>
              </div>

              {/* 24h change percentage */}
              <div className="mb-3">
                <div
                  className={`text-sm font-semibold ${
                    isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {isPositive ? '+' : ''}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-3">
                {renderSparkline(coin.sparkline_in_7d.price)}
              </div>

              {/* Market cap */}
              <div
                className="text-xs"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <div>Market Cap</div>
                <div
                  className="font-semibold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {formatMarketCap(coin.market_cap)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {coins.length === 0 && !loading && (
        <div
          className="text-center py-12 rounded-lg"
          style={{
            backgroundColor: 'var(--glass-bg)',
            color: 'var(--color-text-secondary)',
          }}
        >
          No coins available
        </div>
      )}
    </div>
  );
};

export default LiveMarketDashboard;
