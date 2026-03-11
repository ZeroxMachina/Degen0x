'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface CryptoData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  priceHistory: number[];
}

const CRYPTO_LIST: Record<string, { name: string; initialPrice: number }> = {
  BTC: { name: 'Bitcoin', initialPrice: 95000 },
  ETH: { name: 'Ethereum', initialPrice: 3800 },
  SOL: { name: 'Solana', initialPrice: 180 },
  BNB: { name: 'Binance', initialPrice: 620 },
  XRP: { name: 'Ripple', initialPrice: 2.5 },
  ADA: { name: 'Cardano', initialPrice: 0.85 },
  AVAX: { name: 'Avalanche', initialPrice: 45 },
  DOT: { name: 'Polkadot', initialPrice: 9 },
  LINK: { name: 'Chainlink', initialPrice: 22 },
  MATIC: { name: 'Polygon', initialPrice: 0.9 },
  UNI: { name: 'Uniswap', initialPrice: 14 },
  AAVE: { name: 'Aave', initialPrice: 280 },
};

const formatPrice = (price: number): string => {
  if (price >= 1000) return `$${price.toFixed(0)}`;
  if (price >= 1) return `$${price.toFixed(2)}`;
  return `$${price.toFixed(4)}`;
};

const formatMarketCap = (cap: number): string => {
  if (cap >= 1e12) return `$${(cap / 1e12).toFixed(1)}T`;
  if (cap >= 1e9) return `$${(cap / 1e9).toFixed(1)}B`;
  if (cap >= 1e6) return `$${(cap / 1e6).toFixed(1)}M`;
  return `$${cap.toFixed(0)}`;
};

const SparklineChart: React.FC<{ data: number[] }> = ({ data }) => {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const width = 50;
  const height = 20;
  const padding = 2;

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
    const y = height - ((value - min) / range) * (height - 2 * padding) - padding;
    return `${x},${y}`;
  }).join(' ');

  const isUp = data[data.length - 1] >= data[0];
  const color = isUp ? '#10b981' : '#ef4444';

  return (
    <svg width={width} height={height} className="inline-block">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};

const PriceChangeIndicator: React.FC<{ change: number; isFlashing: boolean }> = ({
  change,
  isFlashing,
}) => {
  const isPositive = change >= 0;
  const baseColor = isPositive ? 'text-green-500' : 'text-red-500';
  const flashColor = isFlashing
    ? isPositive
      ? 'animate-pulse bg-green-500/20'
      : 'animate-pulse bg-red-500/20'
    : '';

  return (
    <div className={`px-2 py-1 rounded ${flashColor} ${baseColor}`}>
      {isPositive ? '↑' : '↓'} {Math.abs(change).toFixed(2)}%
    </div>
  );
};

const CryptoTicker: React.FC<{ crypto: CryptoData; isFlashing: boolean }> = ({
  crypto,
  isFlashing,
}) => {
  const flashBg = isFlashing ? 'bg-blue-500/10' : '';

  return (
    <div
      className={`flex-shrink-0 px-4 py-3 rounded-lg border border-gray-700 bg-gray-900 transition-colors ${flashBg}`}
      style={{ minWidth: '200px' }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-sm font-semibold text-gray-100">{crypto.symbol}</p>
          <p className="text-xs text-gray-400">{crypto.name}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-white">{formatPrice(crypto.price)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex-1">
          <SparklineChart data={crypto.priceHistory} />
        </div>
        <PriceChangeIndicator change={crypto.change24h} isFlashing={isFlashing} />
      </div>

      <p className="text-xs text-gray-400 mt-2">Cap: {formatMarketCap(crypto.marketCap)}</p>
    </div>
  );
};

export default function LivePriceTickerV2() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [flashingSymbols, setFlashingSymbols] = useState<Set<string>>(new Set());
  const prevPricesRef = useRef<Record<string, number>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize crypto data
  useEffect(() => {
    const initialData = Object.entries(CRYPTO_LIST).map(([symbol, { name, initialPrice }]) => {
      const marketCap = initialPrice * (Math.random() * 1e9 + 1e8);
      return {
        symbol,
        name,
        price: initialPrice,
        change24h: (Math.random() - 0.5) * 20,
        marketCap,
        priceHistory: Array(20).fill(initialPrice),
      };
    });
    setCryptoData(initialData);
    prevPricesRef.current = Object.fromEntries(
      initialData.map((c) => [c.symbol, c.price])
    );
  }, []);

  // Simulate price updates
  useEffect(() => {
    if (cryptoData.length === 0) return;

    const interval = setInterval(() => {
      setCryptoData((prev) => {
        const newFlashing = new Set<string>();

        const updated = prev.map((crypto) => {
          const prevPrice = prevPricesRef.current[crypto.symbol] || crypto.price;
          const volatility = crypto.price * 0.002;
          const randomChange = (Math.random() - 0.5) * volatility * 4;
          const newPrice = Math.max(crypto.price + randomChange, crypto.price * 0.9);

          if (Math.abs(newPrice - prevPrice) > prevPrice * 0.0005) {
            newFlashing.add(crypto.symbol);
          }

          prevPricesRef.current[crypto.symbol] = newPrice;

          const change24hAdjustment = (Math.random() - 0.5) * 0.5;
          const newChange24h = crypto.change24h + change24hAdjustment;

          return {
            ...crypto,
            price: newPrice,
            change24h: Math.max(-100, Math.min(100, newChange24h)),
            priceHistory: [...crypto.priceHistory.slice(1), newPrice],
            marketCap: newPrice * (Math.random() * 1e9 + 1e8),
          };
        });

        setFlashingSymbols(newFlashing);
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [cryptoData.length]);

  // Clear flashing after animation
  useEffect(() => {
    if (flashingSymbols.size === 0) return;

    const timeout = setTimeout(() => {
      setFlashingSymbols(new Set());
    }, 600);

    return () => clearTimeout(timeout);
  }, [flashingSymbols]);

  return (
    <div className="w-full bg-gray-950 border-t border-gray-800 py-4">
      <div className="px-4 mb-3">
        <h2 className="text-sm font-semibold text-gray-100 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live Crypto Prices
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
      >
        <div className="flex gap-3 px-4 pb-2">
          {cryptoData.map((crypto) => (
            <CryptoTicker
              key={crypto.symbol}
              crypto={crypto}
              isFlashing={flashingSymbols.has(crypto.symbol)}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #111827;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #374151;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #4b5563;
        }
      `}</style>
    </div>
  );
}
