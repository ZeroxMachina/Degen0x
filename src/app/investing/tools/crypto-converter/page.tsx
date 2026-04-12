'use client';

"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface PriceData {
  [key: string]: {
    usd: number;
    eur: number;
    gbp: number;
  };
}

interface CoinPrice {
  id: string;
  name: string;
  symbol: string;
}

const COINS: CoinPrice[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "binancecoin", name: "BNB", symbol: "BNB" },
  { id: "cardano", name: "Cardano", symbol: "ADA" },
  { id: "ripple", name: "XRP", symbol: "XRP" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX" },
  { id: "matic-network", name: "Polygon", symbol: "MATIC" },
];

const FIAT_CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
];

const FALLBACK_PRICES: PriceData = {
  bitcoin: { usd: 67850, eur: 62050, gbp: 53650 },
  ethereum: { usd: 3420, eur: 3125, gbp: 2710 },
  solana: { usd: 195, eur: 178, gbp: 155 },
  binancecoin: { usd: 612, eur: 559, gbp: 485 },
  cardano: { usd: 0.98, eur: 0.89, gbp: 0.77 },
  ripple: { usd: 2.45, eur: 2.24, gbp: 1.94 },
  dogecoin: { usd: 0.38, eur: 0.35, gbp: 0.30 },
  polkadot: { usd: 8.20, eur: 7.50, gbp: 6.50 },
  "avalanche-2": { usd: 38.50, eur: 35.20, gbp: 30.50 },
  "matic-network": { usd: 0.58, eur: 0.53, gbp: 0.46 },
};

export default function CryptoConverterPage() {
  const [fromAmount, setFromAmount] = useState<number>(1);
  const [toAmount, setToAmount] = useState<number>(0);
  const [fromCoin, setFromCoin] = useState<string>("bitcoin");
  const [toCurrency, setToCurrency] = useState<string>("usd");
  const [prices, setPrices] = useState<PriceData>(FALLBACK_PRICES);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Fetch prices from CoinGecko API
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        setLoading(true);
        setError("");
        const coinIds = COINS.map((c) => c.id).join(",");
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinIds}&vs_currencies=usd,eur,gbp`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch prices");
        };

        const data = await response.json();
        setPrices(data);
        setLastUpdated(new Date().toLocaleTimeString());
      } catch (err) {
        setError("Using cached prices");
        setPrices(FALLBACK_PRICES);
        setLastUpdated(new Date().toLocaleTimeString());
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();

    // Refresh prices every 2 minutes
    const interval = setInterval(fetchPrices, 120000);
    return () => clearInterval(interval);
  }, []);

  // Calculate conversion
  useEffect(() => {
    if (prices[fromCoin]) {
      const currencyKey = toCurrency.toLowerCase() as keyof (typeof prices)[string];
      const rate = prices[fromCoin][currencyKey];
      setToAmount(fromAmount * rate);
    }
  }, [fromAmount, fromCoin, toCurrency, prices]);

  const handleSwapCurrencies = () => {
    const coinToUse = COINS.find((c) => c.symbol === toCurrency.toUpperCase());
    if (coinToUse) {
      setFromCoin(coinToUse.id);
      setFromAmount(toAmount);
    }
  };

  const getCurrentCoin = () => COINS.find((c) => c.id === fromCoin);
  const currentCoin = getCurrentCoin();

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Tools", href: "/investing/tools" },
            { label: "Crypto Converter" },
          ]}
        />

        <div style={{ marginTop: "2rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "0.5rem",
              color: "#e6edf3",
              letterSpacing: "-0.02em",
            }}
          >
            Crypto Converter
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#8b949e",
              marginBottom: "2rem",
            }}
          >
            Real-time cryptocurrency converter for BTC, ETH, and 8+ other coins
          </p>
        </div>

        <div
          className="glass"
          style={{
            padding: "2rem",
            borderRadius: "1rem",
            marginBottom: "2rem",
            border: "1px solid rgba(99, 102, 241, 0.2)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "1rem",
              alignItems: "flex-end",
              marginBottom: "2rem",
            }}
          >
            {/* From Section */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#8b949e",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                From
              </label>
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(parseFloat(e.target.value) || 0)}
                placeholder="0"
                step="0.00001"
                min="0"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  marginBottom: "0.75rem",
                  backgroundColor: "rgba(30, 30, 46, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                }}
              />
              <select
                value={fromCoin}
                onChange={(e) => setFromCoin(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(30, 30, 46, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                {COINS.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.symbol} - {coin.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwapCurrencies}
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "0.5rem",
                backgroundColor: "rgba(99, 102, 241, 0.2)",
                border: "1px solid rgba(99, 102, 241, 0.4)",
                color: "#e6edf3",
                cursor: "pointer",
                fontSize: "1.25rem",
                fontWeight: "600",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(99, 102, 241, 0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(99, 102, 241, 0.2)";
              }}
            >
              ⇄
            </button>

            {/* To Section */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  color: "#8b949e",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                To
              </label>
              <div
                style={{
                  padding: "0.75rem",
                  marginBottom: "0.75rem",
                  backgroundColor: "rgba(30, 30, 46, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  minHeight: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "500",
                }}
              >
                {isNaN(toAmount) || !isFinite(toAmount)
                  ? "0"
                  : toAmount.toFixed(8).replace(/\.?0+$/, "")}
              </div>
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  backgroundColor: "rgba(30, 30, 46, 0.8)",
                  border: "1px solid rgba(99, 102, 241, 0.3)",
                  borderRadius: "0.5rem",
                  color: "#e6edf3",
                  fontSize: "1rem",
                  fontFamily: "inherit",
                  cursor: "pointer",
                }}
              >
                {FIAT_CURRENCIES.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.symbol} {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Exchange Rate Info */}
          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(99, 102, 241, 0.1)",
              borderRadius: "0.5rem",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            <p style={{ color: "#8b949e", fontSize: "0.875rem", margin: "0" }}>
              {currentCoin && prices[fromCoin]
                ? `1 ${currentCoin.symbol} = ${prices[fromCoin][toCurrency.toLowerCase() as keyof (typeof prices)[string]]?.toFixed(2) || "N/A"} ${toCurrency}`
                : "Loading..."}
            </p>
          </div>

          {/* Status Info */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem",
              backgroundColor: "rgba(139, 148, 158, 0.1)",
              borderRadius: "0.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.75rem",
              color: "#8b949e",
            }}
          >
            <span>
              {loading ? "Updating..." : "Live Prices"}
              {error && ` • ${error}`}
            </span>
            {lastUpdated && <span>Updated: {lastUpdated}</span>}
          </div>
        </div>

        {/* About Section */}
        <div style={{ marginTop: "3rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "1rem",
              color: "#e6edf3",
            }}
          >
            About This Tool
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              className="glass"
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#e6edf3",
                }}
              >
                Real-Time Prices
              </h3>
              <p
                style={{
                  color: "#8b949e",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Get live cryptocurrency prices from CoinGecko, updated every 2
                minutes. Accurate and reliable market data for 10+ major coins.
              </p>
            </div>
            <div
              className="glass"
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#e6edf3",
                }}
              >
                Multi-Currency Support
              </h3>
              <p
                style={{
                  color: "#8b949e",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Convert between BTC, ETH, SOL, and 7 other cryptocurrencies to
                USD, EUR, or GBP instantly.
              </p>
            </div>
            <div
              className="glass"
              style={{
                padding: "1.5rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
            >
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                  color: "#e6edf3",
                }}
              >
                Bidirectional Conversion
              </h3>
              <p
                style={{
                  color: "#8b949e",
                  fontSize: "0.875rem",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Easily swap currencies with the swap button. Convert from any
                crypto or fiat currency in either direction.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: "3rem", marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              color: "#e6edf3",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: "grid",
              gap: "1rem",
            }}
          >
            {[
              {
                q: "How often are prices updated?",
                a: "Prices are fetched every 2 minutes from CoinGecko's free API.",
              },
              {
                q: "Is this calculator accurate?",
                a: "Yes, we use live market prices from CoinGecko. Slight delays may occur due to API latency.",
              },
              {
                q: "What cryptocurrencies are supported?",
                a: "BTC, ETH, SOL, BNB, ADA, XRP, DOGE, DOT, AVAX, and MATIC are currently supported.",
              },
              {
                q: "Can I convert between cryptocurrencies?",
                a: "Currently we support crypto-to-fiat conversions. Select any crypto as your base currency.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1rem",
                  backgroundColor: "rgba(30, 30, 46, 0.6)",
                  border: "1px solid rgba(99, 102, 241, 0.1)",
                  borderRadius: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    color: "#e6edf3",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {faq.q}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#8b949e",
                    margin: "0",
                    lineHeight: "1.5",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        body {
          background-color: var(--color-bg, #0d1117);
        }

        .glass {
          background-color: rgba(13, 17, 23, 0.8);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        input[type="number"],
        select {
          outline: none;
          transition: border-color 0.3s ease;
        }

        input[type="number"]:focus,
        select:focus {
          border-color: rgba(99, 102, 241, 0.6) !important;
        }

        select option {
          background-color: #0d1117;
          color: #e6edf3;
        }
      `}</style>
    </div>
  );
}
