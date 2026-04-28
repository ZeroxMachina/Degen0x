"use client";

import { useState, useEffect, useCallback, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface PriceData {
  [id: string]: { usd: number; eur: number; gbp: number };
}

interface Asset {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  type: "crypto" | "fiat";
}

// ─── Constants ───────────────────────────────────────────────────────────────
const CRYPTOS: Asset[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", icon: "₿", type: "crypto" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", icon: "Ξ", type: "crypto" },
  { id: "solana", name: "Solana", symbol: "SOL", icon: "◎", type: "crypto" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", icon: "B", type: "crypto" },
  { id: "ripple", name: "XRP", symbol: "XRP", icon: "✕", type: "crypto" },
  { id: "cardano", name: "Cardano", symbol: "ADA", icon: "₳", type: "crypto" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX", icon: "A", type: "crypto" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT", icon: "●", type: "crypto" },
  { id: "matic-network", name: "Polygon", symbol: "MATIC", icon: "P", type: "crypto" },
  { id: "chainlink", name: "Chainlink", symbol: "LINK", icon: "⬡", type: "crypto" },
  { id: "uniswap", name: "Uniswap", symbol: "UNI", icon: "🦄", type: "crypto" },
  { id: "cosmos", name: "Cosmos", symbol: "ATOM", icon: "⚛", type: "crypto" },
  { id: "fantom", name: "Fantom", symbol: "FTM", icon: "F", type: "crypto" },
  { id: "near", name: "NEAR", symbol: "NEAR", icon: "N", type: "crypto" },
  { id: "arbitrum", name: "Arbitrum", symbol: "ARB", icon: "Ⱥ", type: "crypto" },
  { id: "optimism", name: "Optimism", symbol: "OP", icon: "O", type: "crypto" },
  { id: "aptos", name: "Aptos", symbol: "APT", icon: "A", type: "crypto" },
  { id: "sui", name: "Sui", symbol: "SUI", icon: "S", type: "crypto" },
  { id: "sei", name: "Sei", symbol: "SEI", icon: "≈", type: "crypto" },
  { id: "celestia", name: "Celestia", symbol: "TIA", icon: "⭐", type: "crypto" },
];

const FIATS: Asset[] = [
  { id: "usd", name: "US Dollar", symbol: "USD", icon: "$", type: "fiat" },
  { id: "eur", name: "Euro", symbol: "EUR", icon: "€", type: "fiat" },
  { id: "gbp", name: "British Pound", symbol: "GBP", icon: "£", type: "fiat" },
];

const ALL_ASSETS = [...CRYPTOS, ...FIATS];

const FALLBACK_PRICES: PriceData = {
  bitcoin: { usd: 87420, eur: 80350, gbp: 69750 },
  ethereum: { usd: 3891, eur: 3572, gbp: 3101 },
  solana: { usd: 184, eur: 169, gbp: 147 },
  binancecoin: { usd: 612, eur: 562, gbp: 488 },
  ripple: { usd: 2.62, eur: 2.41, gbp: 2.09 },
  cardano: { usd: 0.95, eur: 0.87, gbp: 0.76 },
  "avalanche-2": { usd: 38.4, eur: 35.3, gbp: 30.6 },
  polkadot: { usd: 9.82, eur: 9.02, gbp: 7.82 },
  "matic-network": { usd: 0.52, eur: 0.48, gbp: 0.41 },
  chainlink: { usd: 18.4, eur: 16.9, gbp: 14.7 },
  uniswap: { usd: 11.8, eur: 10.9, gbp: 9.42 },
  cosmos: { usd: 12.5, eur: 11.5, gbp: 10.0 },
  fantom: { usd: 0.92, eur: 0.85, gbp: 0.73 },
  near: { usd: 6.78, eur: 6.22, gbp: 5.41 },
  arbitrum: { usd: 1.28, eur: 1.17, gbp: 1.02 },
  optimism: { usd: 2.45, eur: 2.25, gbp: 1.95 },
  aptos: { usd: 12.3, eur: 11.3, gbp: 9.8 },
  sui: { usd: 3.45, eur: 3.17, gbp: 2.75 },
  sei: { usd: 0.55, eur: 0.50, gbp: 0.44 },
  celestia: { usd: 8.92, eur: 8.19, gbp: 7.11 },
};

const FIAT_RATES: Record<string, number> = {
  usd: 1,
  eur: 1.087,
  gbp: 1.253,
};

// ─── Utilities ───────────────────────────────────────────────────────────────
function formatNumber(val: number, maxDecimals: number = 4): string {
  if (!isFinite(val) || isNaN(val)) return "0";
  if (val === 0) return "0";
  if (val >= 1_000_000) return val.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (val >= 1000) return val.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (val >= 1) return val.toFixed(Math.min(maxDecimals, 4)).replace(/\.?0+$/, "");
  if (val >= 0.0001) return val.toFixed(8).replace(/\.?0+$/, "");
  return val.toExponential(3);
}

function getUsdValue(asset: Asset, amount: number, prices: PriceData): number {
  if (asset.type === "fiat") {
    return amount * (FIAT_RATES[asset.id] ?? 1);
  }
  return amount * (prices[asset.id]?.usd ?? 0);
}

// ─── Component ───────────────────────────────────────────────────────────────
interface CryptoConverterProps {
  initialFrom?: string;
  initialTo?: string;
  compact?: boolean;
}

export default function CryptoConverter({
  initialFrom = "bitcoin",
  initialTo = "usd",
  compact = false,
}: CryptoConverterProps) {
  const [fromAsset, setFromAsset] = useState<Asset>(
    ALL_ASSETS.find((a) => a.id === initialFrom) || CRYPTOS[0]
  );
  const [toAsset, setToAsset] = useState<Asset>(
    ALL_ASSETS.find((a) => a.id === initialTo) || FIATS[0]
  );
  const [fromAmount, setFromAmount] = useState(1);
  const [prices, setPrices] = useState<PriceData>(FALLBACK_PRICES);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // ── Fetch prices from CoinGecko ────────────────────────────────────────────
  const fetchPrices = useCallback(async () => {
    try {
      const ids = CRYPTOS.map((c) => c.id).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd,eur,gbp`,
        { next: { revalidate: 60 } }
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setPrices(data);
      setIsLive(true);
      setLastUpdated(new Date());
    } catch (err) {
      setIsLive(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // refresh every 60s
    return () => clearInterval(interval);
  }, [fetchPrices]);

  // ── Calculate conversion ───────────────────────────────────────────────────
  const toAmount = (() => {
    const usdValue = getUsdValue(fromAsset, fromAmount, prices);
    if (toAsset.type === "fiat") {
      const rate = FIAT_RATES[toAsset.id] ?? 1;
      return usdValue / rate;
    }
    return usdValue / (prices[toAsset.id]?.usd ?? 1);
  })();

  const exchangeRate = (() => {
    const usdValue = getUsdValue(fromAsset, 1, prices);
    if (toAsset.type === "fiat") {
      const rate = FIAT_RATES[toAsset.id] ?? 1;
      return usdValue / rate;
    }
    return usdValue / (prices[toAsset.id]?.usd ?? 1);
  })();

  const handleSwap = () => {
    setFromAsset(toAsset);
    setToAsset(fromAsset);
    setFromAmount(parseFloat(formatNumber(toAmount)) || 1);
  };

  const handleAssetChange = (newAsset: Asset, field: "from" | "to") => {
    if (field === "from") {
      setFromAsset(newAsset);
    } else {
      setToAsset(newAsset);
    }
  };

  const handleAmountChange = (newAmount: number) => {
    setFromAmount(newAmount);
    // Debounce would be for external effects if needed
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
  };

  // Responsive layout
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;

  return (
    <div className="crypto-converter">
      <style>{`
        .crypto-converter {
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .converter-card {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
          -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
          border: 1px solid var(--glass-border);
          border-radius: var(--glass-radius);
          padding: 1.5rem;
          box-shadow: var(--glass-shadow), var(--glass-inner-highlight);
          transition: all var(--duration-glass) var(--ease-glass);
        }

        .converter-layout {
          display: grid;
          grid-template-columns: 1fr 56px 1fr;
          gap: 1rem;
          align-items: flex-end;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .converter-layout {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }
        }

        .converter-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .converter-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .converter-select {
          width: 100%;
          padding: 0.65rem 0.75rem;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-text);
          font-size: 0.875rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .converter-select:hover {
          background: var(--color-bg-card-hover);
          border-color: var(--color-primary);
        }

        .converter-select:focus {
          outline: none;
          background: var(--color-bg-card-hover);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .converter-input {
          width: 100%;
          padding: 0.75rem;
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          color: var(--color-text);
          font-size: 1.25rem;
          font-weight: 700;
          font-family: inherit;
          transition: all 0.2s ease;
          margin-top: 0.5rem;
        }

        .converter-input:hover {
          background: var(--color-bg-card-hover);
          border-color: var(--color-primary);
        }

        .converter-input:focus {
          outline: none;
          background: var(--color-bg-card-hover);
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .converter-input::placeholder {
          color: var(--color-text-secondary);
        }

        .converter-result {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 56px;
          padding: 0.75rem;
          background: var(--color-bg-card);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--color-primary);
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin-top: 0.5rem;
          transition: all 0.3s ease;
          animation: slideInValue 0.3s ease-out;
        }

        @keyframes slideInValue {
          from {
            opacity: 0.7;
            transform: translateY(-2px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .converter-result.loading {
          color: var(--color-text-secondary);
          font-size: 0.875rem;
        }

        .swap-button {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--color-primary);
          cursor: pointer;
          font-size: 1.25rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          align-self: center;
        }

        @media (max-width: 640px) {
          .swap-button {
            width: 100%;
            height: 44px;
            font-size: 1rem;
            align-self: auto;
          }
        }

        .swap-button:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: rgba(99, 102, 241, 0.5);
          transform: scale(1.05);
        }

        .swap-button:active {
          transform: scale(0.95);
        }

        .converter-rate {
          padding: 0.75rem 1rem;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }

        .converter-rate-text {
          color: var(--color-text);
          font-weight: 600;
        }

        .converter-rate-status {
          color: var(--color-text-secondary);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 2px 8px;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-success);
          letter-spacing: 0.05em;
        }

        .live-badge.offline {
          background: rgba(241, 65, 108, 0.1);
          border-color: rgba(241, 65, 108, 0.3);
          color: var(--color-danger);
        }

        .live-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-success);
          animation: pulseDot 1.5s ease-in-out infinite;
        }

        .live-dot.offline {
          background: var(--color-danger);
          animation: none;
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        .quick-amounts {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }

        .quick-amount-btn {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          background: rgba(99, 102, 241, 0.08);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: var(--color-primary);
          transition: all 0.15s ease;
        }

        .quick-amount-btn:hover {
          background: rgba(99, 102, 241, 0.15);
          border-color: rgba(99, 102, 241, 0.4);
          transform: translateY(-1px);
        }

        .quick-amount-btn:active {
          transform: translateY(0);
        }

        .quick-amount-btn.active {
          background: rgba(99, 102, 241, 0.25);
          border-color: rgba(99, 102, 241, 0.6);
          color: var(--color-primary);
        }

        .converter-currency-icon {
          font-size: 1.25rem;
          margin-right: 0.5rem;
        }

        /* Compact mode */
        .crypto-converter.compact .converter-card {
          padding: 1rem;
        }

        .crypto-converter.compact .converter-layout {
          grid-template-columns: 1fr 44px 1fr;
          gap: 0.75rem;
        }

        .crypto-converter.compact .swap-button {
          width: 44px;
          height: 44px;
          font-size: 1rem;
        }

        .crypto-converter.compact .converter-input,
        .crypto-converter.compact .converter-result {
          font-size: 1rem;
          min-height: 44px;
          padding: 0.5rem;
        }

        /* Dark theme adjustments (already handled by CSS variables) */
      `}</style>

      <div className={`converter-card ${compact ? "compact" : ""}`}>
        {/* Exchange Rate Info */}
        <div className="converter-rate">
          <span className="converter-rate-text">
            1 {fromAsset.symbol} = {formatNumber(exchangeRate)} {toAsset.symbol}
          </span>
          <span className="converter-rate-status">
            <span className={`live-badge ${isLive ? "" : "offline"}`}>
              <span className={`live-dot ${isLive ? "" : "offline"}`} />
              {isLive ? "LIVE" : "CACHED"}
            </span>
            {lastUpdated && (
              <span title={lastUpdated.toLocaleTimeString()}>
                {lastUpdated.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </span>
        </div>

        {/* Main Converter Layout */}
        <div className="converter-layout">
          {/* FROM Field */}
          <div className="converter-field">
            <label className="converter-label">From</label>
            <select
              value={fromAsset.id}
              onChange={(e) => {
                const asset = ALL_ASSETS.find((a) => a.id === e.target.value);
                if (asset) handleAssetChange(asset, "from");
              }}
              className="converter-select"
            >
              <optgroup label="Cryptocurrencies">
                {CRYPTOS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.symbol} – {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Fiat">
                {FIATS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.symbol} – {f.name}
                  </option>
                ))}
              </optgroup>
            </select>
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => handleAmountChange(parseFloat(e.target.value) || 0)}
              min="0"
              step="any"
              className="converter-input"
              placeholder="0"
            />
            {!compact && (
              <div className="quick-amounts">
                {[0.01, 0.1, 0.5, 1, 5, 10, 100].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => handleAmountChange(amt)}
                    className={`quick-amount-btn ${fromAmount === amt ? "active" : ""}`}
                  >
                    {amt}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* SWAP Button */}
          <button
            onClick={handleSwap}
            title="Swap currencies"
            className="swap-button"
            aria-label="Swap currencies"
          >
            ⇄
          </button>

          {/* TO Field */}
          <div className="converter-field">
            <label className="converter-label">To</label>
            <select
              value={toAsset.id}
              onChange={(e) => {
                const asset = ALL_ASSETS.find((a) => a.id === e.target.value);
                if (asset) handleAssetChange(asset, "to");
              }}
              className="converter-select"
            >
              <optgroup label="Cryptocurrencies">
                {CRYPTOS.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.symbol} – {c.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Fiat">
                {FIATS.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.symbol} – {f.name}
                  </option>
                ))}
              </optgroup>
            </select>
            <div
              className={`converter-result ${loading ? "loading" : ""}`}
            >
              {loading ? "Loading…" : formatNumber(toAmount)}
            </div>
            {!compact && (
              <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", marginTop: "0.5rem" }}>
                {toAsset.symbol}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
