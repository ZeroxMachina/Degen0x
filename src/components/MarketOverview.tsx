'use client';

import React, { useEffect, useState, useRef } from 'react';

interface GlobalMarketData {
  totalMarketCap: string;
  totalVolume: string;
  btcDominance: number;
  ethDominance: number;
  activeCryptos: number;
  activeExchanges: number;
  marketCapChange24h: number;
}

const MarketOverview: React.FC = () => {
  const [data, setData] = useState<GlobalMarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchMarketData = async () => {
    try {
      setError(null);
      const response = await fetch(
        'https://api.coingecko.com/api/v3/global',
        { next: { revalidate: 0 } }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch market data');
      }

      const json = await response.json();
      const globalData = json.data;

      const formatted: GlobalMarketData = {
        totalMarketCap: formatLargeNumber(globalData.total_market_cap.usd),
        totalVolume: formatLargeNumber(globalData.total_volume.usd),
        btcDominance: globalData.market_cap_percentage.btc,
        ethDominance: globalData.market_cap_percentage.eth,
        activeCryptos: globalData.active_cryptocurrencies,
        activeExchanges: globalData.exchanges,
        marketCapChange24h: globalData.market_cap_change_percentage_24h_usd,
      };

      setData(formatted);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();

    // Auto-refresh every 2 minutes
    intervalRef.current = setInterval(fetchMarketData, 2 * 60 * 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (error && !data) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass p-4 text-center">
          <p className="text-[var(--color-text-secondary)] text-sm">Unable to load market data</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="glass p-6 rounded-2xl">
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 w-20 bg-[var(--glass-bg)] rounded mb-2" />
                <div className="h-6 w-32 bg-[var(--glass-bg)] rounded" />
              </div>
            ))}
          </div>
        ) : data ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Total Market Cap */}
            <div className="border-r border-[var(--glass-border)] pr-4 last:border-r-0">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                Market Cap
              </p>
              <p className="text-xl font-bold text-[var(--color-text)]">{data.totalMarketCap}</p>
              <p
                className={`text-xs mt-2 font-medium ${
                  data.marketCapChange24h >= 0 ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {data.marketCapChange24h >= 0 ? '↑' : '↓'}{' '}
                {Math.abs(data.marketCapChange24h).toFixed(2)}% (24h)
              </p>
            </div>

            {/* 24h Volume */}
            <div className="border-r border-[var(--glass-border)] pr-4 last:border-r-0">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                24h Volume
              </p>
              <p className="text-xl font-bold text-[var(--color-text)]">{data.totalVolume}</p>
            </div>

            {/* BTC Dominance */}
            <div className="border-r border-[var(--glass-border)] pr-4 last:border-r-0">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                BTC Dominance
              </p>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold text-[var(--color-text)]">
                  {data.btcDominance.toFixed(1)}%
                </p>
              </div>
              <div className="w-full bg-[var(--glass-border)] rounded-full h-1.5 mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-full rounded-full"
                  style={{ width: `${data.btcDominance}%` }}
                />
              </div>
            </div>

            {/* ETH Dominance */}
            <div className="border-r border-[var(--glass-border)] pr-4 last:border-r-0">
              <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                ETH Dominance
              </p>
              <div className="flex items-end gap-2">
                <p className="text-xl font-bold text-[var(--color-text)]">
                  {data.ethDominance.toFixed(1)}%
                </p>
              </div>
              <div className="w-full bg-[var(--glass-border)] rounded-full h-1.5 mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full"
                  style={{ width: `${data.ethDominance}%` }}
                />
              </div>
            </div>

            {/* Active Cryptos & Exchanges */}
            <div>
              <p className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wide mb-2">
                On-Chain Stats
              </p>
              <p className="text-xs text-[var(--color-text)] mb-1">
                <span className="font-bold">{data.activeCryptos.toLocaleString()}</span> coins
              </p>
              <p className="text-xs text-[var(--color-text)]">
                <span className="font-bold">{data.activeExchanges}</span> exchanges
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

function formatLargeNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  return `$${num.toFixed(0)}`;
}

export default MarketOverview;
