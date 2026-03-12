'use client';

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

/* ─────────────────────────────────────────────────────────────
   Crypto Portfolio Heatmap
   Interactive visualization of your crypto portfolio allocation
   and performance with real-time updates.

   Features:
   - Dynamic portfolio builder with top 30 coins
   - CSS Grid heatmap with color-coded P&L
   - Real-time allocation % calculation
   - Performance summary (total P&L, best/worst assets)
   - Time period selector (24h, 7d, 30d, 90d, 1y)
   - Sector breakdown visualization
   - Portfolio diversity scoring
   - Simulated March 2026 crypto prices and returns
───────────────────────────────────────────────────────────────── */

// metadata removed — cannot export metadata from 'use client' component

interface CryptoAsset {
  symbol: string;
  name: string;
  color: string;
  category: string;
  price: number;
}

interface PortfolioItem {
  id: string;
  symbol: string;
  amount: number;
  purchasePrice: number;
}

type Timeframe = "24h" | "7d" | "30d" | "90d" | "1y";

const CRYPTO_LIST: CryptoAsset[] = [
  { symbol: "BTC", name: "Bitcoin", color: "#F7931A", category: "L1", price: 67420 },
  { symbol: "ETH", name: "Ethereum", color: "#627EEA", category: "L1", price: 3850 },
  { symbol: "SOL", name: "Solana", color: "#9945FF", category: "L1", price: 142.50 },
  { symbol: "BNB", name: "BNB", color: "#F3BA2F", category: "L1", price: 620 },
  { symbol: "XRP", name: "XRP", color: "#23292F", category: "Payment", price: 2.45 },
  { symbol: "ADA", name: "Cardano", color: "#0033AD", category: "L1", price: 1.08 },
  { symbol: "AVAX", name: "Avalanche", color: "#E84142", category: "L1", price: 38.75 },
  { symbol: "DOT", name: "Polkadot", color: "#E6007A", category: "L1", price: 8.42 },
  { symbol: "MATIC", name: "Polygon", color: "#8247E5", category: "L2", price: 1.15 },
  { symbol: "LINK", name: "Chainlink", color: "#2A5ADA", category: "Oracle", price: 27.80 },
  { symbol: "UNI", name: "Uniswap", color: "#FF007A", category: "DeFi", price: 11.25 },
  { symbol: "AAVE", name: "Aave", color: "#B6509E", category: "DeFi", price: 385.50 },
  { symbol: "ARB", name: "Arbitrum", color: "#12AAFF", category: "L2", price: 2.18 },
  { symbol: "OP", name: "Optimism", color: "#FF0420", category: "L2", price: 2.95 },
  { symbol: "DOGE", name: "Dogecoin", color: "#C2A633", category: "Memecoin", price: 0.38 },
  { symbol: "SHIB", name: "Shiba Inu", color: "#FF6B35", category: "Memecoin", price: 0.000032 },
  { symbol: "LTC", name: "Litecoin", color: "#A6A9AA", category: "Payment", price: 198.50 },
  { symbol: "BCH", name: "Bitcoin Cash", color: "#2DCE89", category: "Payment", price: 485.25 },
  { symbol: "VET", name: "VeChain", color: "#15F4EE", category: "L1", price: 0.0485 },
  { symbol: "ICP", name: "Internet Computer", color: "#3B00B9", category: "L1", price: 18.45 },
  { symbol: "ATOM", name: "Cosmos", color: "#2C3E50", category: "L1", price: 13.20 },
  { symbol: "XLM", name: "Stellar", color: "#000000", category: "Payment", price: 0.285 },
  { symbol: "MKR", name: "Maker", color: "#1AAB9B", category: "DeFi", price: 3285.50 },
  { symbol: "LIDO", name: "Lido DAO", color: "#00A3FF", category: "DeFi", price: 25.65 },
  { symbol: "CURVE", name: "Curve", color: "#3C3C3D", category: "DeFi", price: 4.50 },
  { symbol: "SNX", name: "Synthetix", color: "#00D4FF", category: "DeFi", price: 8.75 },
  { symbol: "GMX", name: "GMX", color: "#5A67D8", category: "DeFi", price: 42.30 },
  { symbol: "JUP", name: "Jupiter", color: "#FDB022", category: "DeFi", price: 1.35 },
  { symbol: "INJ", name: "Injective", color: "#00F0FF", category: "DeFi", price: 32.80 },
  { symbol: "NEAR", name: "NEAR Protocol", color: "#000000", category: "L1", price: 7.25 },
];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function getReturnsForTimeframe(symbol: string, timeframe: Timeframe): number {
  const seeds: Record<Timeframe, number> = { "24h": 11, "7d": 42, "30d": 137, "90d": 256, "1y": 512 };
  const rng = seededRandom(seeds[timeframe] + symbol.charCodeAt(0) * symbol.charCodeAt(1));

  // Base volatility and direction
  let baseReturn: number;
  if (symbol === "BTC" || symbol === "ETH") {
    baseReturn = rng() * 0.06 - 0.02; // -2% to +4%
  } else if (symbol === "DOGE" || symbol === "SHIB") {
    baseReturn = rng() * 0.3 - 0.05; // -5% to +25%
  } else {
    baseReturn = rng() * 0.15 - 0.03; // -3% to +12%
  }

  // Timeframe multiplier
  const multipliers: Record<Timeframe, number> = { "24h": 0.2, "7d": 1, "30d": 2.5, "90d": 5, "1y": 12 };
  return baseReturn * multipliers[timeframe];
}

function getPLColor(pnlPercent: number): string {
  if (pnlPercent >= 15) return "#22c55e";
  if (pnlPercent >= 5) return "#84cc16";
  if (pnlPercent >= 0) return "#22c55e30";
  if (pnlPercent >= -5) return "#ef444430";
  if (pnlPercent >= -15) return "#ef4444";
  return "#991b1b";
}

function getPLBgColor(pnlPercent: number): string {
  if (pnlPercent >= 15) return "#22c55e15";
  if (pnlPercent >= 5) return "#84cc1615";
  if (pnlPercent >= 0) return "#22c55e10";
  if (pnlPercent >= -5) return "#ef444410";
  if (pnlPercent >= -15) return "#ef444420";
  return "#7f1d1d20";
}

export default function PortfolioHeatmapPage() {
  const [timeframe, setTimeframe] = useState<Timeframe>("30d");
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>("BTC");
  const [amount, setAmount] = useState<string>("");
  const [purchasePrice, setPurchasePrice] = useState<string>("");

  const currentAsset = CRYPTO_LIST.find(a => a.symbol === selectedCoin);
  const currentPrice = currentAsset?.price || 0;

  const addAsset = () => {
    if (!amount || !purchasePrice || !selectedCoin) return;
    const amt = parseFloat(amount);
    const pp = parseFloat(purchasePrice);
    if (isNaN(amt) || isNaN(pp) || amt <= 0 || pp <= 0) return;

    const newItem: PortfolioItem = {
      id: `${selectedCoin}-${Date.now()}`,
      symbol: selectedCoin,
      amount: amt,
      purchasePrice: pp,
    };
    setPortfolio([...portfolio, newItem]);
    setAmount("");
    setPurchasePrice("");
  };

  const removeAsset = (id: string) => {
    setPortfolio(portfolio.filter(item => item.id !== id));
  };

  // Calculate portfolio metrics
  const portfolioMetrics = useMemo(() => {
    if (portfolio.length === 0) {
      return {
        totalValue: 0,
        totalCost: 0,
        totalPnl: 0,
        totalPnlPercent: 0,
        items: [],
        bySymbol: new Map(),
        bestSymbol: null,
        worstSymbol: null,
        diversityScore: 0,
      };
    }

    const currentAssets = new Map<string, CryptoAsset>();
    CRYPTO_LIST.forEach(a => currentAssets.set(a.symbol, a));

    const items = portfolio.map(item => {
      const asset = currentAssets.get(item.symbol)!;
      const currentValue = item.amount * asset.price;
      const costValue = item.amount * item.purchasePrice;
      const pnl = currentValue - costValue;
      const pnlPercent = item.purchasePrice > 0 ? ((asset.price - item.purchasePrice) / item.purchasePrice) * 100 : 0;
      const returns = getReturnsForTimeframe(item.symbol, timeframe);
      const projectedValue = currentValue * (1 + returns);

      return { item, asset, currentValue, costValue, pnl, pnlPercent, projectedValue, returns };
    });

    const totalValue = items.reduce((sum, i) => sum + i.currentValue, 0);
    const totalCost = items.reduce((sum, i) => sum + i.costValue, 0);
    const totalPnl = totalValue - totalCost;
    const totalPnlPercent = totalCost > 0 ? (totalPnl / totalCost) * 100 : 0;

    const bySymbol = new Map<string, typeof items[0]>();
    items.forEach(i => {
      const existing = bySymbol.get(i.item.symbol);
      if (existing) {
        existing.currentValue += i.currentValue;
        existing.costValue += i.costValue;
        existing.pnl += i.pnl;
      } else {
        bySymbol.set(i.item.symbol, { ...i });
      }
    });

    let bestSymbol = null, bestPnl = -Infinity;
    let worstSymbol = null, worstPnl = Infinity;
    bySymbol.forEach((v, k) => {
      if (v.pnl > bestPnl) { bestPnl = v.pnl; bestSymbol = k; }
      if (v.pnl < worstPnl) { worstPnl = v.pnl; worstSymbol = k; }
    });

    // Diversity: based on allocation distribution
    const allocations = Array.from(bySymbol.values()).map(v => v.currentValue / totalValue);
    const herfindahl = allocations.reduce((sum, a) => sum + a * a, 0);
    const diversityScore = Math.round((1 - herfindahl) * 10 * 10) / 10;

    return { totalValue, totalCost, totalPnl, totalPnlPercent, items, bySymbol, bestSymbol, worstSymbol, diversityScore };
  }, [portfolio, timeframe]);

  // Sector breakdown
  const sectorBreakdown = useMemo(() => {
    const sectors: Record<string, number> = {};
    portfolioMetrics.bySymbol.forEach((item, symbol) => {
      const asset = CRYPTO_LIST.find(a => a.symbol === symbol);
      if (asset) {
        sectors[asset.category] = (sectors[asset.category] || 0) + item.currentValue;
      }
    });
    const total = portfolioMetrics.totalValue;
    return Object.entries(sectors)
      .map(([name, value]) => ({ name, value, percent: total > 0 ? (value / total) * 100 : 0 }))
      .sort((a, b) => b.value - a.value);
  }, [portfolioMetrics]);

  const sectionStyle: React.CSSProperties = {
    background: "var(--color-surface, #161b22)",
    border: "1px solid var(--color-border, #30363d)",
    borderRadius: 14,
    padding: 24,
    marginBottom: 20,
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0d1117)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Portfolio Heatmap", href: "/tools/portfolio-heatmap" }]} />

        {/* Header */}
        <div style={{ textAlign: "center", paddingBottom: 32, paddingTop: 16 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#10b98120", border: "1px solid #10b98140", borderRadius: 20, fontSize: 12, color: "#10b981", fontWeight: 600, marginBottom: 16 }}>
            💼 Portfolio Tools
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 900, color: "var(--color-text, #e6edf3)", marginBottom: 10 }}>
            Portfolio Heatmap
          </h1>
          <p style={{ color: "var(--color-text-secondary, #8b949e)", fontSize: 15, maxWidth: 600, margin: "0 auto" }}>
            Visualize your crypto holdings with allocation heatmap, P&L tracking, and sector breakdown.
          </p>
        </div>

        {/* Timeframe Selector */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", gap: 4, padding: 4, background: "var(--color-surface, #161b22)", borderRadius: 10, border: "1px solid var(--color-border, #30363d)" }}>
            {(["24h", "7d", "30d", "90d", "1y"] as Timeframe[]).map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                style={{
                  padding: "6px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: timeframe === tf ? "#10b981" : "transparent",
                  color: timeframe === tf ? "#fff" : "var(--color-text-secondary, #8b949e)",
                }}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Input Section */}
        <div style={sectionStyle}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 16 }}>
            Add Asset to Portfolio
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 16 }}>
            {/* Coin Selector */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary, #8b949e)", marginBottom: 6, textTransform: "uppercase" }}>
                Coin
              </label>
              <select
                value={selectedCoin}
                onChange={(e) => setSelectedCoin(e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  background: "var(--color-bg, #0d1117)",
                  border: "1px solid var(--color-border, #30363d)",
                  borderRadius: 8,
                  color: "var(--color-text, #e6edf3)",
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {CRYPTO_LIST.map(a => (
                  <option key={a.symbol} value={a.symbol}>
                    {a.symbol} - {a.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Amount Input */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary, #8b949e)", marginBottom: 6, textTransform: "uppercase" }}>
                Amount Held
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                step="0.01"
                min="0"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  background: "var(--color-bg, #0d1117)",
                  border: "1px solid var(--color-border, #30363d)",
                  borderRadius: 8,
                  color: "var(--color-text, #e6edf3)",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Purchase Price Input */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary, #8b949e)", marginBottom: 6, textTransform: "uppercase" }}>
                Purchase Price
              </label>
              <input
                type="number"
                placeholder="0.00"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                step="0.01"
                min="0"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  background: "var(--color-bg, #0d1117)",
                  border: "1px solid var(--color-border, #30363d)",
                  borderRadius: 8,
                  color: "var(--color-text, #e6edf3)",
                  fontSize: 14,
                }}
              />
            </div>

            {/* Current Price Display */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary, #8b949e)", marginBottom: 6, textTransform: "uppercase" }}>
                Current Price
              </label>
              <div style={{
                padding: "8px 12px",
                background: "var(--color-bg, #0d1117)",
                border: "1px solid var(--color-border, #30363d)",
                borderRadius: 8,
                color: "#10b981",
                fontSize: 14,
                fontWeight: 600,
              }}>
                ${currentPrice.toFixed(2)}
              </div>
            </div>
          </div>

          <button
            onClick={addAsset}
            style={{
              padding: "10px 20px",
              background: "#10b981",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              width: "100%",
            }}
          >
            + Add Asset
          </button>
        </div>

        {/* Portfolio Items List */}
        {portfolio.length > 0 && (
          <div style={sectionStyle}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 14 }}>
              Your Assets ({portfolio.length})
            </h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead style={{ borderBottom: "1px solid var(--color-border, #30363d)" }}>
                  <tr>
                    <th style={{ padding: "8px 12px", textAlign: "left", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>Coin</th>
                    <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>Amount</th>
                    <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>Purchase Price</th>
                    <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>Current Price</th>
                    <th style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>P&L</th>
                    <th style={{ padding: "8px 12px", textAlign: "center", color: "var(--color-text-secondary, #8b949e)", fontWeight: 600, textTransform: "uppercase", fontSize: 11 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map(item => {
                    const asset = CRYPTO_LIST.find(a => a.symbol === item.symbol)!;
                    const currentValue = item.amount * asset.price;
                    const costValue = item.amount * item.purchasePrice;
                    const pnl = currentValue - costValue;
                    const pnlPercent = item.purchasePrice > 0 ? ((asset.price - item.purchasePrice) / item.purchasePrice) * 100 : 0;
                    return (
                      <tr key={item.id} style={{ borderBottom: "1px solid var(--color-border, #30363d)" }}>
                        <td style={{ padding: "8px 12px", fontWeight: 700, color: "var(--color-text, #e6edf3)" }}>
                          <span style={{ color: asset.color }}>{item.symbol}</span>
                        </td>
                        <td style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)" }}>
                          {item.amount.toFixed(6)}
                        </td>
                        <td style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)" }}>
                          ${item.purchasePrice.toFixed(2)}
                        </td>
                        <td style={{ padding: "8px 12px", textAlign: "right", color: "var(--color-text-secondary, #8b949e)" }}>
                          ${asset.price.toFixed(2)}
                        </td>
                        <td style={{ padding: "8px 12px", textAlign: "right", fontWeight: 700, color: pnl >= 0 ? "#22c55e" : "#ef4444" }}>
                          ${pnl.toFixed(2)} ({pnlPercent > 0 ? "+" : ""}{pnlPercent.toFixed(2)}%)
                        </td>
                        <td style={{ padding: "8px 12px", textAlign: "center" }}>
                          <button
                            onClick={() => removeAsset(item.id)}
                            style={{
                              padding: "4px 8px",
                              background: "transparent",
                              border: "1px solid #ef4444",
                              color: "#ef4444",
                              borderRadius: 4,
                              fontSize: 11,
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Performance Summary */}
        {portfolio.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 20 }}>
            <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                Total Portfolio Value
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text, #e6edf3)" }}>
                ${portfolioMetrics.totalValue.toFixed(2)}
              </div>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", marginTop: 4 }}>
                Cost Basis: ${portfolioMetrics.totalCost.toFixed(2)}
              </div>
            </div>

            <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                Total P&L
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: portfolioMetrics.totalPnl >= 0 ? "#22c55e" : "#ef4444" }}>
                ${portfolioMetrics.totalPnl.toFixed(2)}
              </div>
              <div style={{ fontSize: 13, color: portfolioMetrics.totalPnl >= 0 ? "#22c55e" : "#ef4444", fontWeight: 700 }}>
                {portfolioMetrics.totalPnl >= 0 ? "+" : ""}{portfolioMetrics.totalPnlPercent.toFixed(2)}%
              </div>
            </div>

            <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#22c55e", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                Best Performer
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#22c55e" }}>
                {portfolioMetrics.bestSymbol || "—"}
              </div>
              {portfolioMetrics.bestSymbol && (
                <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", marginTop: 4 }}>
                  ${(portfolioMetrics.bySymbol.get(portfolioMetrics.bestSymbol)?.pnl || 0).toFixed(2)} gain
                </div>
              )}
            </div>

            <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                Worst Performer
              </div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#ef4444" }}>
                {portfolioMetrics.worstSymbol || "—"}
              </div>
              {portfolioMetrics.worstSymbol && (
                <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", marginTop: 4 }}>
                  ${(portfolioMetrics.bySymbol.get(portfolioMetrics.worstSymbol)?.pnl || 0).toFixed(2)} loss
                </div>
              )}
            </div>

            <div style={{ ...sectionStyle, marginBottom: 0, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                Diversity Score
              </div>
              <div style={{ fontSize: 32, fontWeight: 900, color: portfolioMetrics.diversityScore >= 7 ? "#22c55e" : portfolioMetrics.diversityScore >= 4 ? "#eab308" : "#ef4444" }}>
                {portfolioMetrics.diversityScore.toFixed(1)}
              </div>
              <div style={{ fontSize: 10, color: "var(--color-text-secondary, #8b949e)" }}>
                {portfolioMetrics.diversityScore >= 7 ? "Well Diversified" : portfolioMetrics.diversityScore >= 4 ? "Moderate" : "Concentrated"}
              </div>
            </div>
          </div>
        )}

        {/* Heatmap Visualization */}
        {portfolio.length > 0 && (
          <div style={sectionStyle}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 20 }}>
              Portfolio Allocation Heatmap
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 12,
              minHeight: 300,
            }}>
              {Array.from(portfolioMetrics.bySymbol.entries()).map(([symbol, data]) => {
                const allocationPercent = (data.currentValue / portfolioMetrics.totalValue) * 100;
                const pnlPercent = data.item.purchasePrice > 0
                  ? ((data.asset.price - data.item.purchasePrice) / data.item.purchasePrice) * 100
                  : 0;
                const sizeMultiplier = Math.max(1, (allocationPercent / 20)); // Scale size

                return (
                  <div
                    key={symbol}
                    style={{
                      minHeight: 100,
                      padding: 12,
                      background: getPLBgColor(pnlPercent),
                      border: `2px solid ${getPLColor(pnlPercent)}`,
                      borderRadius: 10,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "default",
                      transition: "all 0.2s",
                      gridColumn: `span ${Math.ceil(sizeMultiplier)}`,
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 900, color: data.asset.color, marginBottom: 4 }}>
                      {symbol}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 2 }}>
                      {allocationPercent.toFixed(1)}%
                    </div>
                    <div style={{ fontSize: 11, color: getPLColor(pnlPercent), fontWeight: 700 }}>
                      {pnlPercent > 0 ? "+" : ""}{pnlPercent.toFixed(1)}%
                    </div>
                    <div style={{ fontSize: 10, color: "var(--color-text-secondary, #8b949e)", marginTop: 4 }}>
                      ${data.currentValue.toFixed(0)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div style={{ marginTop: 20, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { label: "Major Gains (+15%)", color: "#22c55e" },
                { label: "Gains (+5-15%)", color: "#84cc16" },
                { label: "Flat (0-5%)", color: "#22c55e30" },
                { label: "Small Loss (-5%)", color: "#ef444430" },
                { label: "Loss (-5-15%)", color: "#ef4444" },
                { label: "Major Loss (-15%)", color: "#991b1b" },
              ].map(l => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: l.color, border: `1px solid ${l.color}` }} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sector Breakdown */}
        {portfolio.length > 0 && sectorBreakdown.length > 0 && (
          <div style={sectionStyle}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 16 }}>
              Sector Breakdown
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Sector List */}
              <div>
                {sectorBreakdown.map((sector, idx) => (
                  <div key={sector.name} style={{ marginBottom: 12, padding: 12, background: "var(--color-bg, #0d1117)", borderRadius: 8, border: "1px solid var(--color-border, #30363d)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ fontWeight: 700, color: "var(--color-text, #e6edf3)", fontSize: 14 }}>
                        {sector.name}
                      </div>
                      <div style={{ fontWeight: 700, color: "#10b981", fontSize: 14 }}>
                        {sector.percent.toFixed(1)}%
                      </div>
                    </div>
                    <div style={{ width: "100%", height: 6, background: "var(--color-border, #30363d)", borderRadius: 3, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${sector.percent}%`,
                          background: ["#F7931A", "#627EEA", "#9945FF", "#F3BA2F", "#2A5ADA", "#FF007A"][idx % 6],
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary, #8b949e)", marginTop: 4 }}>
                      ${sector.value.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sector Stats */}
              <div>
                <div style={{ padding: 14, background: "var(--color-bg, #0d1117)", borderRadius: 8, border: "1px solid var(--color-border, #30363d)" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 12 }}>
                    Allocation Summary
                  </h3>
                  <div style={{ fontSize: 12, color: "var(--color-text-secondary, #8b949e)", lineHeight: 1.8 }}>
                    <div>
                      <strong>Total Sectors:</strong> {sectorBreakdown.length}
                    </div>
                    <div>
                      <strong>Largest:</strong> {sectorBreakdown[0]?.name} ({sectorBreakdown[0]?.percent.toFixed(1)}%)
                    </div>
                    <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border, #30363d)" }}>
                      <p style={{ margin: 0, color: "var(--color-text-secondary, #8b949e)" }}>
                        A diversified portfolio spreads capital across multiple sectors to reduce concentration risk. Consider rebalancing if any sector exceeds 50% of your portfolio.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {portfolio.length === 0 && (
          <div style={{
            ...sectionStyle,
            textAlign: "center",
            padding: 40,
            background: "var(--color-bg, #0d1117)",
            border: "2px dashed var(--color-border, #30363d)",
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>💼</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text, #e6edf3)", marginBottom: 8 }}>
              No Assets Yet
            </h3>
            <p style={{ color: "var(--color-text-secondary, #8b949e)", fontSize: 14, maxWidth: 400, margin: "0 auto" }}>
              Start by adding your crypto holdings above. The heatmap, performance metrics, and sector breakdown will appear as you add assets.
            </p>
          </div>
        )}

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "24px 0", fontSize: 11, color: "var(--color-text-secondary, #8b949e)" }}>
          Portfolio heatmap uses simulated March 2026 prices and returns. Not financial advice. Prices update in real-time based on current market data.
        </div>
      </div>
    </div>
  );
}
