"use client";

import { useEffect, useState, useRef } from "react";

interface CoinPrice {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

const COINS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum" },
  { id: "solana", symbol: "SOL", name: "Solana" },
  { id: "binancecoin", symbol: "BNB", name: "BNB" },
  { id: "ripple", symbol: "XRP", name: "XRP" },
  { id: "cardano", symbol: "ADA", name: "Cardano" },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche" },
  { id: "polkadot", symbol: "DOT", name: "Polkadot" },
  { id: "chainlink", symbol: "LINK", name: "Chainlink" },
  { id: "matic-network", symbol: "MATIC", name: "Polygon" },
];

const FALLBACK_PRICES: CoinPrice[] = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", price: 87420, change24h: 2.4 },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", price: 3891, change24h: 1.8 },
  { id: "solana", symbol: "SOL", name: "Solana", price: 184, change24h: -0.9 },
  { id: "binancecoin", symbol: "BNB", name: "BNB", price: 612, change24h: 0.5 },
  { id: "ripple", symbol: "XRP", name: "XRP", price: 0.98, change24h: 3.2 },
  { id: "cardano", symbol: "ADA", name: "Cardano", price: 0.74, change24h: -1.1 },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche", price: 38.4, change24h: 1.6 },
  { id: "polkadot", symbol: "DOT", name: "Polkadot", price: 9.82, change24h: -0.4 },
  { id: "chainlink", symbol: "LINK", name: "Chainlink", price: 17.2, change24h: 2.1 },
  { id: "matic-network", symbol: "MATIC", name: "Polygon", price: 0.61, change24h: -2.3 },
];

function formatPrice(price: number): string {
  if (price >= 10000) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
  if (price >= 100) return `$${price.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  if (price >= 1) return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
  return `$${price.toFixed(4)}`;
}

export default function PriceTicker() {
  const [prices, setPrices] = useState<CoinPrice[]>(FALLBACK_PRICES);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPrices = async () => {
    try {
      const ids = COINS.map((c) => c.id).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`,
        { next: { revalidate: 0 } }
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const updated: CoinPrice[] = COINS.map((coin) => ({
        ...coin,
        price: data[coin.id]?.usd ?? 0,
        change24h: data[coin.id]?.usd_24h_change ?? 0,
      })).filter((c) => c.price > 0);
      if (updated.length > 0) {
        setPrices(updated);
        setIsLive(true);
        setLastUpdated(new Date());
      }
    } catch {
      // keep fallback
    }
  };

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 60000); // refresh every 60s
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const tickerItems = [...prices, ...prices]; // duplicate for seamless loop

  return (
    <div className="price-ticker-bar" role="marquee" aria-label="Live crypto prices">
      <div className="ticker-live-badge">
        <span className={`ticker-dot ${isLive ? "ticker-dot--live" : "ticker-dot--static"}`} />
        {isLive ? "LIVE" : "PRICES"}
      </div>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {tickerItems.map((coin, i) => (
            <span key={`${coin.id}-${i}`} className="ticker-item">
              <span className="ticker-symbol">{coin.symbol}</span>
              <span className="ticker-price">{formatPrice(coin.price)}</span>
              <span className={`ticker-change ${coin.change24h >= 0 ? "ticker-up" : "ticker-down"}`}>
                {coin.change24h >= 0 ? "▲" : "▼"} {Math.abs(coin.change24h).toFixed(2)}%
              </span>
            </span>
          ))}
        </div>
      </div>
      {lastUpdated && (
        <div className="ticker-timestamp" title={`Updated: ${lastUpdated.toLocaleTimeString()}`}>
          ⟳
        </div>
      )}
      <style>{`
        .price-ticker-bar {
          background: var(--surface, #161b22);
          border-bottom: 1px solid var(--color-border, #30363d);
          display: flex;
          align-items: center;
          height: 32px;
          overflow: hidden;
          position: relative;
        }
        .ticker-live-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 0 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--color-text-secondary, #8b949e);
          white-space: nowrap;
          border-right: 1px solid var(--color-border, #30363d);
          height: 100%;
          background: var(--surface, #161b22);
          z-index: 2;
        }
        .ticker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .ticker-dot--live {
          background: #3fb950;
          box-shadow: 0 0 6px #3fb95080;
          animation: pulse-dot 1.5s infinite;
        }
        .ticker-dot--static {
          background: #8b949e;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .ticker-track-wrapper {
          flex: 1;
          overflow: hidden;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .ticker-track {
          display: flex;
          gap: 0;
          animation: ticker-scroll 60s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0 20px;
          border-right: 1px solid var(--color-border, #30363d30);
          white-space: nowrap;
          font-size: 12px;
        }
        .ticker-symbol {
          font-weight: 700;
          color: var(--color-text, #e6edf3);
        }
        .ticker-price {
          color: var(--color-text, #e6edf3);
        }
        .ticker-change {
          font-size: 11px;
          font-weight: 600;
        }
        .ticker-up { color: #3fb950; }
        .ticker-down { color: #f85149; }
        .ticker-timestamp {
          padding: 0 8px;
          font-size: 11px;
          color: var(--color-text-secondary, #8b949e);
          cursor: default;
          opacity: 0.6;
          border-left: 1px solid var(--color-border, #30363d);
          height: 100%;
          display: flex;
          align-items: center;
          background: var(--surface, #161b22);
        }
      `}</style>
    </div>
  );
}
