"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number | null;
  market_cap_rank: number | null;
  total_volume: number | null;
  price_change_percentage_1h_in_currency: number | null;
  price_change_percentage_24h_in_currency: number | null;
  price_change_percentage_7d_in_currency: number | null;
  sparkline_in_7d?: {
    price: number[];
  };
}

interface LivePriceTableProps {
  compact?: boolean;
}

const LivePriceTable: React.FC<LivePriceTableProps> = ({ compact = false }) => {
  const [coins, setCoins] = useState<CoinMarket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchCoins = useCallback(async () => {
    try {
      setError(null);
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d",
        { next: { revalidate: 0 } }
      );

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data: CoinMarket[] = await response.json();
      if (data && data.length > 0) {
        setCoins(data);
        setLastUpdated(new Date());
        setRetryCount(0);
      } else {
        throw new Error("No data received from API");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to fetch cryptocurrency data";
      setError(errorMessage);
      setCoins([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchCoins();

    // Set up auto-refresh interval (60 seconds)
    const interval = setInterval(fetchCoins, 60000);

    return () => clearInterval(interval);
  }, [fetchCoins]);

  const handleRetry = () => {
    setLoading(true);
    setRetryCount((prev) => prev + 1);
    fetchCoins();
  };

  const formatPrice = (price: number | null): string => {
    if (price === null || price === undefined) return "—";
    if (price >= 1) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: price >= 1000 ? 0 : 2,
        maximumFractionDigits: price >= 1000 ? 0 : 2,
      }).format(price);
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 4,
      maximumFractionDigits: 8,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number | null): string => {
    if (!marketCap) return "—";
    if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`;
    return `$${marketCap.toFixed(0)}`;
  };

  const formatVolume = (volume: number | null): string => {
    if (!volume) return "—";
    if (volume >= 1e12) return `$${(volume / 1e12).toFixed(2)}T`;
    if (volume >= 1e9) return `$${(volume / 1e9).toFixed(2)}B`;
    if (volume >= 1e6) return `$${(volume / 1e6).toFixed(2)}M`;
    return `$${volume.toFixed(0)}`;
  };

  const SparklineChart: React.FC<{ data: number[] | undefined; positive: boolean }> = ({
    data,
    positive,
  }) => {
    if (!data || data.length === 0) return <div className="w-16 h-10 bg-[var(--glass-bg)] rounded" />;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const points = data
      .map((price, idx) => {
        const x = (idx / (data.length - 1)) * 60;
        const y = 40 - ((price - min) / range) * 40;
        return `${x},${y}`;
      })
      .join(" ");

    return (
      <svg
        viewBox="0 0 60 40"
        className="w-16 h-10"
        style={{ opacity: 0.9 }}
        aria-label="7-day price sparkline"
      >
        <polyline
          points={points}
          fill="none"
          stroke={positive ? "#22c55e" : "#ef4444"}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points={points}
          fill={positive ? "rgba(34, 197, 94, 0.1)" : "rgba(239, 68, 68, 0.1)"}
          fillOpacity="0.3"
        />
      </svg>
    );
  };

  // Loading skeleton
  if (loading && coins.length === 0) {
    return (
      <div
        className={`rounded-xl border border-[var(--color-border)] overflow-hidden ${
          compact ? "p-4" : "p-6"
        }`}
        style={{ backgroundColor: "var(--color-bg-card)" }}
      >
        <style>{`
          @keyframes shimmer {
            0% { opacity: 0.6; }
            50% { opacity: 0.8; }
            100% { opacity: 0.6; }
          }
          .skeleton-row {
            animation: shimmer 1.5s infinite;
          }
        `}</style>
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton-row bg-[var(--glass-bg)] h-12 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  // Error state
  if (error && coins.length === 0) {
    return (
      <div
        className="rounded-xl border border-[var(--color-border)] p-6 text-center"
        style={{ backgroundColor: "var(--color-bg-card)" }}
      >
        <div className="mb-4">
          <svg
            className="w-12 h-12 mx-auto text-[var(--color-text-secondary)] opacity-50 mb-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4v2m0 4v2M7.08 6.47a9 9 0 1 1 9.84 0M9 9h.01"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Data Unavailable</h3>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">{error}</p>
        <button
          onClick={handleRetry}
          className="inline-block px-4 py-2 rounded-lg bg-[var(--color-primary)] text-[var(--color-text)] font-medium hover:opacity-90 transition-opacity"
        >
          Retry
        </button>
      </div>
    );
  }

  // Table view
  return (
    <div
      className="rounded-xl border border-[var(--color-border)] overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-card)" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr
              className="border-b border-[var(--color-border)]"
              style={{ backgroundColor: "var(--glass-bg)" }}
            >
              <th className="text-left px-4 py-3 font-semibold text-[var(--color-text-secondary)] w-12">
                #
              </th>
              <th className="text-left px-4 py-3 font-semibold text-[var(--color-text-secondary)]">
                Name
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden md:table-cell">
                Price
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden sm:table-cell">
                1h
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)]">
                24h
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden md:table-cell">
                7d
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden lg:table-cell">
                Market Cap
              </th>
              <th className="text-right px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden lg:table-cell">
                Volume (24h)
              </th>
              <th className="text-center px-4 py-3 font-semibold text-[var(--color-text-secondary)] hidden md:table-cell">
                7d Chart
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin, index) => {
              const change24h = coin.price_change_percentage_24h_in_currency ?? 0;
              const change7d = coin.price_change_percentage_7d_in_currency ?? 0;
              const change1h = coin.price_change_percentage_1h_in_currency ?? 0;
              const isPositive24h = change24h >= 0;
              const isPositive7d = change7d >= 0;
              const isPositive1h = change1h >= 0;

              return (
                <tr
                  key={coin.id}
                  className="border-b border-[var(--color-border)] hover:bg-[var(--glass-bg)] transition-colors duration-200"
                >
                  <td className="px-4 py-3 text-[var(--color-text-secondary)] font-semibold">
                    {coin.market_cap_rank || index + 1}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/prices/${coin.id}`}
                      className="flex items-center gap-3 group"
                    >
                      {coin.image && (
                        <img
                          src={coin.image}
                          alt={`${coin.name} cryptocurrency icon`}
                          className="w-8 h-8 rounded-full flex-shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <div className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                          {coin.name}
                        </div>
                        <div className="text-xs text-[var(--color-text-secondary)] uppercase">
                          {coin.symbol}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-[var(--color-text)] hidden md:table-cell">
                    {formatPrice(coin.current_price)}
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-medium text-sm hidden sm:table-cell ${
                      isPositive1h ? "text-[#22c55e]" : "text-[#ef4444]"
                    }`}
                  >
                    {isPositive1h ? "▲" : "▼"} {Math.abs(change1h).toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-medium text-sm ${
                      isPositive24h ? "text-[#22c55e]" : "text-[#ef4444]"
                    }`}
                  >
                    {isPositive24h ? "▲" : "▼"} {Math.abs(change24h).toFixed(2)}%
                  </td>
                  <td
                    className={`px-4 py-3 text-right font-medium text-sm hidden md:table-cell ${
                      isPositive7d ? "text-[#22c55e]" : "text-[#ef4444]"
                    }`}
                  >
                    {isPositive7d ? "▲" : "▼"} {Math.abs(change7d).toFixed(2)}%
                  </td>
                  <td className="px-4 py-3 text-right text-[var(--color-text-secondary)] hidden lg:table-cell">
                    {formatMarketCap(coin.market_cap)}
                  </td>
                  <td className="px-4 py-3 text-right text-[var(--color-text-secondary)] hidden lg:table-cell">
                    {formatVolume(coin.total_volume)}
                  </td>
                  <td className="px-4 py-3 text-center hidden md:table-cell">
                    <SparklineChart data={coin.sparkline_in_7d?.price} positive={change7d >= 0} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer with update info */}
      <div
        className="px-4 py-3 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)] flex items-center justify-between"
        style={{ backgroundColor: "var(--glass-bg)" }}
      >
        <span>
          {lastUpdated
            ? `Last updated: ${lastUpdated.toLocaleTimeString()}`
            : "Fetching live data..."}
        </span>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: "var(--color-primary)" }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: "var(--color-primary)" }}
            ></span>
          </span>
          Live
        </span>
      </div>
    </div>
  );
};

export default LivePriceTable;
