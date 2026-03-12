'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
type Frequency = "daily" | "weekly" | "bi-weekly" | "monthly";

interface DCAEntry {
  date: Date;
  price: number;
  amount: number;
  coins: number;
}

interface CryptoAsset {
  name: string;
  symbol: string;
  currentPrice: number;
  color: string;
}

// ── Crypto Assets ────────────────────────────────────────────────────────────
const CRYPTO_ASSETS: Record<string, CryptoAsset> = {
  BTC: { name: "Bitcoin", symbol: "BTC", currentPrice: 67450, color: "#F7931A" },
  ETH: { name: "Ethereum", symbol: "ETH", currentPrice: 3680, color: "#627EEA" },
  SOL: { name: "Solana", symbol: "SOL", currentPrice: 198, color: "#9945FF" },
  BNB: { name: "BNB", symbol: "BNB", currentPrice: 612, color: "#F0B90B" },
  XRP: { name: "XRP", symbol: "XRP", currentPrice: 2.85, color: "#23292F" },
  DOGE: { name: "Dogecoin", symbol: "DOGE", currentPrice: 0.48, color: "#BA9F33" },
  AVAX: { name: "Avalanche", symbol: "AVAX", currentPrice: 45.20, color: "#E84142" },
  LINK: { name: "Chainlink", symbol: "LINK", currentPrice: 28.40, color: "#375BD2" },
  ADA: { name: "Cardano", symbol: "ADA", currentPrice: 1.18, color: "#0033AD" },
  DOT: { name: "Polkadot", symbol: "DOT", currentPrice: 9.15, color: "#E6007A" },
  MATIC: { name: "Polygon", symbol: "MATIC", currentPrice: 0.92, color: "#8247E5" },
};

// ── Historical Price Data (2 years back from March 2026) ────────────────────
function generateHistoricalPrices(symbol: string, startDate: Date, currentDate: Date): Map<string, number> {
  const prices = new Map<string, number>();
  const assetData: Record<string, { start: number; end: number; volatility: number }> = {
    BTC: { start: 26800, end: 67450, volatility: 0.08 },
    ETH: { start: 1200, end: 3680, volatility: 0.10 },
    SOL: { start: 45, end: 198, volatility: 0.15 },
    BNB: { start: 280, end: 612, volatility: 0.12 },
    XRP: { start: 0.58, end: 2.85, volatility: 0.18 },
    DOGE: { start: 0.09, end: 0.48, volatility: 0.16 },
    AVAX: { start: 15.40, end: 45.20, volatility: 0.14 },
    LINK: { start: 8.20, end: 28.40, volatility: 0.13 },
    ADA: { start: 0.35, end: 1.18, volatility: 0.14 },
    DOT: { start: 2.50, end: 9.15, volatility: 0.16 },
    MATIC: { start: 0.28, end: 0.92, volatility: 0.17 },
  };

  const data = assetData[symbol] || { start: 100, end: 100, volatility: 0.10 };
  const days = Math.floor((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

  let price = data.start;
  for (let i = 0; i <= days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dateStr = date.toISOString().split("T")[0];

    const trend = (data.end - data.start) / days * (i + Math.sin(i / 50) * days * 0.15);
    const noise = (Math.random() - 0.5) * data.volatility * price * 2;
    price = Math.max(data.start * 0.5, data.start + trend + noise);

    prices.set(dateStr, price);
  }

  return prices;
}

function getFrequencyLabel(freq: Frequency): string {
  const labels: Record<Frequency, string> = {
    daily: "Daily",
    weekly: "Every 7 days",
    "bi-weekly": "Every 14 days",
    monthly: "Every 30 days",
  };
  return labels[freq];
}

function getDaysInterval(freq: Frequency): number {
  const intervals: Record<Frequency, number> = {
    daily: 1,
    weekly: 7,
    "bi-weekly": 14,
    monthly: 30,
  };
  return intervals[freq];
}

function formatCurrency(num: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(num);
}

function formatPrice(num: number): string {
  if (num < 0.01) return `$${num.toFixed(8)}`;
  if (num < 1) return `$${num.toFixed(4)}`;
  return `$${num.toFixed(2)}`;
}

export default function DCACalculatorPage() {
  const [selectedAsset, setSelectedAsset] = useState<string>("BTC");
  const [investmentAmount, setInvestmentAmount] = useState<number>(100);
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [startMonth, setStartMonth] = useState<number>(3); // March
  const [startYear, setStartYear] = useState<number>(2024); // 2 years ago
  const [currentPrice, setCurrentPrice] = useState<number>(CRYPTO_ASSETS[selectedAsset].currentPrice);
  const [useOverride, setUseOverride] = useState<boolean>(false);
  const [overridePrice, setOverridePrice] = useState<number>(CRYPTO_ASSETS[selectedAsset].currentPrice);

  const asset = CRYPTO_ASSETS[selectedAsset];
  const today = new Date(2026, 2, 10); // March 10, 2026
  const startDate = new Date(startYear, startMonth - 1, 1);

  // Generate historical prices
  const historicalPrices = useMemo(() => {
    return generateHistoricalPrices(selectedAsset, startDate, today);
  }, [selectedAsset, startDate]);

  // Calculate DCA purchases
  const { purchases, stats } = useMemo(() => {
    const dcaPurchases: DCAEntry[] = [];
    let current = new Date(startDate);
    const interval = getDaysInterval(frequency);

    while (current <= today) {
      const dateStr = current.toISOString().split("T")[0];
      const price = historicalPrices.get(dateStr) || CRYPTO_ASSETS[selectedAsset].currentPrice;
      const coins = investmentAmount / price;

      dcaPurchases.push({
        date: new Date(current),
        price,
        amount: investmentAmount,
        coins,
      });

      current = new Date(current);
      current.setDate(current.getDate() + interval);
    }

    const totalInvested = dcaPurchases.reduce((s, p) => s + p.amount, 0);
    const totalCoins = dcaPurchases.reduce((s, p) => s + p.coins, 0);
    const finalPrice = useOverride ? overridePrice : currentPrice;
    const currentValue = totalCoins * finalPrice;
    const pnl = currentValue - totalInvested;
    const pnlPercent = totalInvested > 0 ? (pnl / totalInvested) * 100 : 0;
    const avgCostBasis = totalCoins > 0 ? totalInvested / totalCoins : 0;

    // Best purchase (lowest price)
    const bestPurchase = dcaPurchases.reduce((a, b) => a.price < b.price ? a : b);

    // Lump sum comparison
    const lumpSumCoins = totalInvested / (historicalPrices.get(startDate.toISOString().split("T")[0]) || CRYPTO_ASSETS[selectedAsset].currentPrice);
    const lumpSumValue = lumpSumCoins * finalPrice;

    return {
      purchases: dcaPurchases,
      stats: {
        totalInvested,
        totalCoins,
        currentValue,
        pnl,
        pnlPercent,
        avgCostBasis,
        bestPurchase,
        numPurchases: dcaPurchases.length,
        lumpSumCoins,
        lumpSumValue,
        lumpSumPnl: lumpSumValue - totalInvested,
        lumpSumPnlPercent: totalInvested > 0 ? ((lumpSumValue - totalInvested) / totalInvested) * 100 : 0,
      },
    };
  }, [selectedAsset, investmentAmount, frequency, startDate, currentPrice, useOverride, overridePrice, historicalPrices]);

  // Monthly breakdown (last 12)
  const monthlyBreakdown = useMemo(() => {
    return purchases.slice(-12);
  }, [purchases]);

  // Growth visualization data (every 6th month)
  const growthData = useMemo(() => {
    const data = [];
    for (let i = 0; i < purchases.length; i += Math.max(1, Math.floor(purchases.length / 12))) {
      const p = purchases[i];
      const totalCoinsAtPoint = purchases.slice(0, i + 1).reduce((s, x) => s + x.coins, 0);
      const finalPrice = useOverride ? overridePrice : currentPrice;
      const valueAtPoint = totalCoinsAtPoint * finalPrice;
      const investedAtPoint = purchases.slice(0, i + 1).reduce((s, x) => s + x.amount, 0);

      data.push({
        date: p.date,
        invested: investedAtPoint,
        value: valueAtPoint,
        coins: totalCoinsAtPoint,
      });
    }
    return data;
  }, [purchases, useOverride, overridePrice, currentPrice]);

  const years = Array.from({ length: 6 }, (_, i) => new Date().getFullYear() - 5 + i);
  const months = Array.from({ length: 12 }, (_, i) => ({ num: i + 1, name: new Date(2026, i).toLocaleString("default", { month: "short" }) }));

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "DCA Calculator", href: "/tools/dca-calculator" }]} />

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
            Dollar Cost Averaging Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15, lineHeight: 1.6 }}>
            See how consistent investments in crypto would have performed over time. Compare DCA to lump sum strategies.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
          {/* ── Input Panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Asset selection */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Select Asset
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                {Object.entries(CRYPTO_ASSETS).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedAsset(key);
                      setCurrentPrice(value.currentPrice);
                      setOverridePrice(value.currentPrice);
                    }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 10,
                      border: `2px solid ${selectedAsset === key ? value.color : "var(--color-border)"}`,
                      background: selectedAsset === key ? `${value.color}15` : "var(--color-surface)",
                      color: selectedAsset === key ? value.color : "var(--color-text)",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: 13,
                      transition: "all 0.2s",
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>

            {/* Investment amount */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Investment per Period
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Math.max(1, parseFloat(e.target.value) || 0))}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 28px",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Purchase Frequency
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {(["daily", "weekly", "bi-weekly", "monthly"] as const).map((freq) => (
                  <button
                    key={freq}
                    onClick={() => setFrequency(freq)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      border: `1px solid ${frequency === freq ? "var(--color-primary)" : "var(--color-border)"}`,
                      background: frequency === freq ? "var(--color-primary)20" : "var(--color-surface)",
                      color: frequency === freq ? "var(--color-primary)" : "var(--color-text)",
                      fontWeight: 600,
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    {getFrequencyLabel(freq).split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Start date */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Start Date
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <select
                  value={startMonth}
                  onChange={(e) => setStartMonth(parseInt(e.target.value))}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  {months.map((m) => (
                    <option key={m.num} value={m.num}>
                      {m.name}
                    </option>
                  ))}
                </select>
                <select
                  value={startYear}
                  onChange={(e) => setStartYear(parseInt(e.target.value))}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontWeight: 600,
                    fontSize: 13,
                    cursor: "pointer",
                  }}
                >
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Current price */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Current Price ({asset.symbol})
              </label>
              <div style={{ position: "relative" }}>
                <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-secondary)" }}>$</span>
                <input
                  type="number"
                  value={useOverride ? overridePrice : currentPrice}
                  onChange={(e) => {
                    setUseOverride(true);
                    setOverridePrice(parseFloat(e.target.value) || asset.currentPrice);
                  }}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 28px",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
              </div>
              {useOverride && (
                <button
                  onClick={() => {
                    setUseOverride(false);
                    setCurrentPrice(asset.currentPrice);
                  }}
                  style={{
                    marginTop: 8,
                    fontSize: 11,
                    color: "var(--color-text-secondary)",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Reset to market price
                </button>
              )}
            </div>
          </div>

          {/* ── Results Panel ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>
                Your DCA Results
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Total Invested</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>
                    {formatCurrency(stats.totalInvested)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{asset.symbol} Accumulated</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: asset.color, marginTop: 4 }}>
                    {stats.totalCoins.toFixed(asset.symbol === "BTC" ? 4 : 2)} {asset.symbol}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Portfolio Value</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginTop: 4 }}>
                    {formatCurrency(stats.currentValue)}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Total Return</div>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 800,
                    marginTop: 4,
                    color: stats.pnl >= 0 ? "#22c55e" : "#f85149"
                  }}>
                    {formatCurrency(stats.pnl)}
                  </div>
                  <div style={{
                    fontSize: 12,
                    fontWeight: 700,
                    marginTop: 2,
                    color: stats.pnl >= 0 ? "#22c55e" : "#f85149"
                  }}>
                    {stats.pnl >= 0 ? "+" : ""}{stats.pnlPercent.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div style={{ borderTop: "1px solid var(--color-border)", paddingTop: 12, marginTop: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
                  <div>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>Cost Basis</div>
                    <div style={{ fontWeight: 700, color: "var(--color-text)" }}>{formatPrice(stats.avgCostBasis)}</div>
                  </div>
                  <div>
                    <div style={{ color: "var(--color-text-secondary)", marginBottom: 4 }}>Purchases Made</div>
                    <div style={{ fontWeight: 700, color: "var(--color-text)" }}>{stats.numPurchases}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border)" }}>
                <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4 }}>Best Single Purchase</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: asset.color }}>
                  {formatPrice(stats.bestPurchase.price)} on {stats.bestPurchase.date.toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* ── Lump Sum Comparison ── */}
            <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 16 }}>
              <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                DCA vs Lump Sum
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
                <div>
                  <div style={{ color: "var(--color-text-secondary)", fontSize: 11, marginBottom: 4 }}>DCA Portfolio Value</div>
                  <div style={{ fontWeight: 700, color: "#22c55e" }}>{formatCurrency(stats.currentValue)}</div>
                </div>
                <div>
                  <div style={{ color: "var(--color-text-secondary)", fontSize: 11, marginBottom: 4 }}>Lump Sum Value</div>
                  <div style={{ fontWeight: 700, color: "#f85149" }}>{formatCurrency(stats.lumpSumValue)}</div>
                </div>
              </div>
              <div style={{ marginTop: 8, padding: "8px 12px", background: "var(--color-bg)", borderRadius: 8, fontSize: 12 }}>
                <div style={{
                  color: stats.currentValue >= stats.lumpSumValue ? "#22c55e" : "#f85149",
                  fontWeight: 700
                }}>
                  {stats.currentValue >= stats.lumpSumValue ? "✓ DCA outperformed" : "✗ Lump sum was better"}
                </div>
                <div style={{ color: "var(--color-text-secondary)", fontSize: 11, marginTop: 2 }}>
                  Difference: {formatCurrency(Math.abs(stats.currentValue - stats.lumpSumValue))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Growth Chart (CSS-based) ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 20 }}>Portfolio Growth Over Time</h2>

          {growthData.length > 0 && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${growthData.length}, 1fr)`, gap: 4, height: 200, alignItems: "flex-end", marginBottom: 12 }}>
                {growthData.map((point, i) => {
                  const maxValue = Math.max(...growthData.map(d => d.value), 1);
                  const height = (point.value / maxValue) * 100;
                  const investedHeight = (point.invested / maxValue) * 100;
                  const gainHeight = height - investedHeight;

                  return (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: `${investedHeight}%`,
                          background: asset.color,
                          borderRadius: 3,
                          opacity: 0.6,
                          marginBottom: gainHeight > 0 ? 1 : 0,
                        }}
                      />
                      {gainHeight > 0 && (
                        <div
                          style={{
                            width: "100%",
                            height: `${gainHeight}%`,
                            background: "#22c55e",
                            borderRadius: 3,
                          }}
                        />
                      )}
                      {gainHeight < 0 && investedHeight > 0 && (
                        <div
                          style={{
                            width: "100%",
                            height: `${Math.abs(gainHeight)}%`,
                            background: "#f85149",
                            borderRadius: 3,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--color-text-secondary)" }}>
                <span>{growthData[0]?.date.toLocaleDateString()}</span>
                <span>{growthData[growthData.length - 1]?.date.toLocaleDateString()}</span>
              </div>

              <div style={{ display: "flex", gap: 16, marginTop: 16, fontSize: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 12, height: 12, background: asset.color, borderRadius: 2 }} />
                  <span style={{ color: "var(--color-text-secondary)" }}>Amount Invested</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 12, height: 12, background: "#22c55e", borderRadius: 2 }} />
                  <span style={{ color: "var(--color-text-secondary)" }}>Gains</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Monthly Breakdown Table ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
            Recent Purchases (Last {Math.min(12, monthlyBreakdown.length)} Periods)
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <th style={{ textAlign: "left", padding: "10px 12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Date</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Price</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Amount</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Coins</th>
                  <th style={{ textAlign: "right", padding: "10px 12px", fontWeight: 700, color: "var(--color-text-secondary)", fontSize: 11, textTransform: "uppercase" }}>Running Total</th>
                </tr>
              </thead>
              <tbody>
                {monthlyBreakdown.map((entry, i) => {
                  const totalCoins = purchases.slice(0, purchases.indexOf(entry) + 1).reduce((s, p) => s + p.coins, 0);
                  return (
                    <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                      <td style={{ padding: "12px", color: "var(--color-text)" }}>{entry.date.toLocaleDateString()}</td>
                      <td style={{ padding: "12px", textAlign: "right", color: asset.color, fontWeight: 600 }}>{formatPrice(entry.price)}</td>
                      <td style={{ padding: "12px", textAlign: "right", color: "var(--color-text)" }}>{formatCurrency(entry.amount)}</td>
                      <td style={{ padding: "12px", textAlign: "right", color: "var(--color-text)", fontWeight: 600 }}>
                        {entry.coins.toFixed(asset.symbol === "BTC" ? 4 : 2)}
                      </td>
                      <td style={{ padding: "12px", textAlign: "right", color: asset.color, fontWeight: 700 }}>
                        {totalCoins.toFixed(asset.symbol === "BTC" ? 4 : 2)} {asset.symbol}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Education Section ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
          {[
            {
              title: "What is Dollar Cost Averaging?",
              icon: "📊",
              content: "DCA is an investment strategy where you invest a fixed amount at regular intervals, regardless of the asset's price. This reduces the impact of volatility and removes the need to time the market perfectly."
            },
            {
              title: "Removes Timing Risk",
              icon: "⏰",
              content: "With DCA, you don't need to worry about buying at the peak. By spreading purchases over time, you average out the price volatility and reduce the risk of making a large investment at the worst possible time."
            },
            {
              title: "Emotionally Discipline",
              icon: "💪",
              content: "Automatic recurring purchases create a disciplined investment approach. You stay committed through market cycles without being swayed by short-term price movements or FOMO."
            },
            {
              title: "Lower Average Cost",
              icon: "🎯",
              content: "DCA often results in a lower average cost per coin than a single large purchase, especially in volatile markets. You buy more coins when prices are low and fewer when prices are high."
            },
            {
              title: "Compound Growth",
              icon: "📈",
              content: "By continuously accumulating crypto, you benefit from compound growth as your portfolio grows over time. More coins mean more exposure to future price appreciation."
            },
            {
              title: "Works in Both Markets",
              icon: "🔄",
              content: "DCA performs well in bull markets (you capture the gains) and bear markets (you accumulate at lower prices). The strategy is agnostic to market direction when you have a long-term horizon."
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 20 }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item.content}</p>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ padding: 16, background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          <strong>⚠️ Disclaimer:</strong> This calculator uses simulated historical price data for educational purposes. Past performance is not indicative of future results. DCA does not guarantee profits or protect against losses in declining markets. This is not financial advice. Always do your own research and consult with a financial advisor before making investment decisions.
        </div>
      </div>
    </div>
  );
}
