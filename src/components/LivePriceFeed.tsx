'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  recentPrices: number[];
}

const initialCoins: Coin[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 42850, change24h: 2.34, recentPrices: Array(10).fill(42850) },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 2340, change24h: -1.45, recentPrices: Array(10).fill(2340) },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: 142.50, change24h: 5.67, recentPrices: Array(10).fill(142.50) },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB', price: 618.20, change24h: 0.89, recentPrices: Array(10).fill(618.20) },
  { id: 'ripple', symbol: 'XRP', name: 'XRP', price: 2.45, change24h: 3.21, recentPrices: Array(10).fill(2.45) },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.98, change24h: -2.15, recentPrices: Array(10).fill(0.98) },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', price: 38.50, change24h: 4.32, recentPrices: Array(10).fill(38.50) },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', price: 7.82, change24h: 1.23, recentPrices: Array(10).fill(7.82) },
  { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', price: 28.45, change24h: 6.54, recentPrices: Array(10).fill(28.45) },
  { id: 'polygon', symbol: 'MATIC', name: 'Polygon', price: 0.62, change24h: -0.87, recentPrices: Array(10).fill(0.62) },
];

export default function LivePriceFeed() {
  const [coins, setCoins] = useState<Coin[]>(initialCoins);
  const [flashingCoins, setFlashingCoins] = useState<Set<string>>(new Set());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const updateTimerRef = useRef<NodeJS.Timeout | null>(null);

  const updatePrices = useCallback(() => {
    const flashSet = new Set<string>();

    setCoins((prevCoins) => {
      const updated = prevCoins.map((coin) => {
        const volatility = coin.symbol === 'BTC' ? 0.0015 : coin.symbol === 'ETH' ? 0.002 : 0.0025;
        const changePercent = (Math.random() - 0.5) * volatility * coin.price;
        const newPrice = Math.max(coin.price + changePercent, coin.price * 0.95);

        if (changePercent !== 0) {
          flashSet.add(coin.id);
        }

        const newRecentPrices = [...coin.recentPrices.slice(1), newPrice];

        return {
          ...coin,
          price: parseFloat(newPrice.toFixed(2)),
          change24h: coin.change24h + (Math.random() - 0.5) * 0.1,
          recentPrices: newRecentPrices,
        };
      });

      return updated;
    });

    setFlashingCoins(flashSet);
  }, []);

  useEffect(() => {
    updatePrices();
    const randomDelay = 2000 + Math.random() * 1000;
    updateTimerRef.current = setTimeout(() => {
      updatePrices();
      intervalRef.current = setInterval(updatePrices, 3000);
    }, randomDelay);

    return () => {
      if (updateTimerRef.current) clearTimeout(updateTimerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [updatePrices]);

  useEffect(() => {
    const clearFlashTimer = setTimeout(() => {
      setFlashingCoins(new Set());
    }, 500);

    return () => clearTimeout(clearFlashTimer);
  }, [flashingCoins]);

  const getSparklineColor = (prices: number[]): string => {
    if (prices.length < 2) return '#3fb950';
    const startPrice = prices[0];
    const endPrice = prices[prices.length - 1];
    return endPrice >= startPrice ? '#3fb950' : '#f85149';
  };

  const getMaxPrice = (prices: number[]): number => Math.max(...prices);
  const getMinPrice = (prices: number[]): number => Math.min(...prices);

  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        padding: '0',
      }}
    >
      {coins.map((coin) => {
        const isPositive = coin.change24h >= 0;
        const isFlashing = flashingCoins.has(coin.id);
        const maxPrice = getMaxPrice(coin.recentPrices);
        const minPrice = getMinPrice(coin.recentPrices);
        const priceRange = maxPrice - minPrice || 1;

        return (
          <div
            key={coin.id}
            style={{
              backgroundColor: isFlashing ? (isPositive ? 'rgba(63, 185, 80, 0.1)' : 'rgba(248, 81, 73, 0.1)') : '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '16px',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              animation: isFlashing ? 'none' : 'none',
            }}
          >
            <style>{`
              @keyframes flash {
                0%, 100% { background-color: #161b22; }
                50% { background-color: ${isPositive ? 'rgba(63, 185, 80, 0.15)' : 'rgba(248, 81, 73, 0.15)'}; }
              }
            `}</style>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#8b949e',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {coin.symbol}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#8b949e',
                    marginTop: '4px',
                  }}
                >
                  {coin.name}
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: isPositive ? '#3fb950' : '#f85149',
                }}
              >
                <span>{isPositive ? '▲' : '▼'}</span>
                <span>{Math.abs(coin.change24h).toFixed(2)}%</span>
              </div>
            </div>

            <div
              style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#e6edf3',
                marginBottom: '12px',
                fontFamily: 'monospace',
              }}
            >
              {coin.symbol === 'BTC' || coin.symbol === 'ETH' ? '$' : ''}
              {coin.price.toLocaleString('en-US', {
                minimumFractionDigits: coin.price < 1 ? 4 : 2,
                maximumFractionDigits: coin.price < 1 ? 4 : 2,
              })}
            </div>

            <div
              style={{
                display: 'flex',
                gap: '2px',
                marginBottom: '8px',
                height: '24px',
                alignItems: 'flex-end',
              }}
            >
              {coin.recentPrices.map((price, idx) => {
                const normalizedHeight = ((price - minPrice) / priceRange) * 100;
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${Math.max(normalizedHeight, 10)}%`,
                      backgroundColor: getSparklineColor(coin.recentPrices),
                      borderRadius: '2px',
                      opacity: 0.6 + (idx / coin.recentPrices.length) * 0.4,
                    }}
                  />
                );
              })}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#8b949e',
              }}
            >
              <span>${minPrice.toFixed(2)}</span>
              <span>${maxPrice.toFixed(2)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
