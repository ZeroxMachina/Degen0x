'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import { ToolStructuredData } from "@/components/StructuredData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Holding {
  id: string;
  coin: string;
  symbol: string;
  amount: number;
  purchasePrice: number;
  color: string;
  emoji: string;
}

interface SimulatedPrice {
  [key: string]: number;
}

const SIMULATED_PRICES: SimulatedPrice = {
  BTC: 42850,
  ETH: 2450,
  SOL: 115,
  ADA: 1.02,
  XRP: 2.85,
  DOGE: 0.38,
  MATIC: 0.98,
  AVAX: 42.5,
  OP: 3.2,
  ARB: 2.1,
};

const COIN_DATA: Record<string, { emoji: string; color: string }> = {
  BTC: { emoji: "₿", color: "#F7931A" },
  ETH: { emoji: "Ξ", color: "#627EEA" },
  SOL: { emoji: "◎", color: "#9945FF" },
  ADA: { emoji: "₳", color: "#0033AD" },
  XRP: { emoji: "✕", color: "#23292F" },
  DOGE: { emoji: "Ð", color: "#BA9F33" },
  MATIC: { emoji: "ⵑ", color: "#8247E5" },
  AVAX: { emoji: "A", color: "#E84142" },
  OP: { emoji: "Ⓞ", color: "#FF0420" },
  ARB: { emoji: "◉", color: "#28A0F0" },
};

interface PieChartProps {
  holdings: Holding[];
}

function PieChart({ holdings }: PieChartProps) {
  const total = holdings.reduce((sum, h) => sum + h.amount * (SIMULATED_PRICES[h.symbol] || 0), 0);

  if (total === 0) {
    return (
      <div style={{ textAlign: "center", padding: "2rem", color: "#8b949e" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
        <p>Add holdings to see allocation chart</p>
      </div>
    );
  };

  const segments = holdings.map((h) => {
    const value = h.amount * (SIMULATED_PRICES[h.symbol] || 0);
    const percentage = (value / total) * 100;
    return { ...h, value, percentage };
  });

  let cumulativeAngle = 0;
  const paths = segments
    .filter((s) => s.percentage > 0)
    .map((segment, index) => {
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + (segment.percentage / 100) * 360;
      cumulativeAngle = endAngle;

      const startRad = (startAngle - 90) * (Math.PI / 180);
      const endRad = (endAngle - 90) * (Math.PI / 180);

      const x1 = 50 + 45 * Math.cos(startRad);
      const y1 = 50 + 45 * Math.sin(startRad);
      const x2 = 50 + 45 * Math.cos(endRad);
      const y2 = 50 + 45 * Math.sin(endRad);

      const largeArc = endAngle - startAngle > 180 ? 1 : 0;

      const pathData = `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArc} 1 ${x2} ${y2} Z`;

      return (
        <path key={index} d={pathData} fill={segment.color} style={{ opacity: 0.85 }} />
      );
    });

  const legend = segments
    .filter((s) => s.percentage > 0.5)
    .map((segment) => ({
      symbol: segment.symbol,
      color: segment.color,
      percentage: segment.percentage.toFixed(1),
    }));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <svg
          width="250"
          height="250"
          viewBox="0 0 100 100"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          {paths}
          <circle cx="50" cy="50" r="20" fill="#0d1117" />
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "14px", fontWeight: "700", fill: "#e6edf3" }}
          >
            {holdings.length}
          </text>
          <text
            y="58"
            style={{ fontSize: "10px", fill: "#8b949e" }}
          >
            assets
          </text>
        </svg>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
        }}
      >
        {legend.map((item) => (
          <div
            key={item.symbol}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "2px",
                backgroundColor: item.color,
              }}
            />
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: "600", color: "#e6edf3" }}>
                {item.symbol}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#8b949e" }}>{item.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface HoldingFormProps {
  onAdd: (holding: Omit<Holding, "id">) => void;
}

function HoldingForm({ onAdd }: HoldingFormProps) {
  const [coin, setCoin] = useState("BTC");
  const [amount, setAmount] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && purchasePrice && coin) {
      const data = COIN_DATA[coin];
      onAdd({
        coin: coin,
        symbol: coin,
        amount: parseFloat(amount),
        purchasePrice: parseFloat(purchasePrice),
        color: data.color,
        emoji: data.emoji,
      });
      setCoin("BTC");
      setAmount("");
      setPurchasePrice("");
      setShowForm(false);
    }
  };

  if (!showForm) {
    return (
      <button
        onClick={() => setShowForm(true)}
        style={{
          width: "100%",
          padding: "1rem",
          background: "linear-gradient(135deg, #3fb950, #2ea043)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontWeight: "600",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.opacity = "1";
        }}
      >
        + Add Holding
      </button>
    );
  }

  return (
    <div
      style={{
        background: "rgba(22,27,34,0.7)",
        border: "1px solid #30363d",
        borderRadius: "8px",
        padding: "1.5rem",
        marginBottom: "1.5rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: "700",
          color: "#e6edf3",
          marginBottom: "1rem",
        }}
      >
        Add New Holding
      </h3>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={{ display: "block", color: "#8b949e", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: "600" }}>
              Coin
            </label>
            <select
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid #30363d",
                borderRadius: "6px",
                color: "#e6edf3",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              {Object.keys(COIN_DATA).map((symbol) => (
                <option key={symbol} value={symbol}>
                  {symbol}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", color: "#8b949e", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: "600" }}>
              Amount
            </label>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              step="0.00000001"
              style={{
                width: "100%",
                padding: "0.75rem",
                background: "rgba(0,0,0,0.3)",
                border: "1px solid #30363d",
                borderRadius: "6px",
                color: "#e6edf3",
                fontSize: "0.9rem",
              }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", color: "#8b949e", fontSize: "0.85rem", marginBottom: "0.5rem", fontWeight: "600" }}>
            Purchase Price (USD)
          </label>
          <input
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            step="0.01"
            style={{
              width: "100%",
              padding: "0.75rem",
              background: "rgba(0,0,0,0.3)",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#e6edf3",
              fontSize: "0.9rem",
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <button
            type="submit"
            style={{
              padding: "0.75rem",
              background: "rgba(63,185,80,0.2)",
              color: "#3fb950",
              border: "1px solid #3fb950",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(63,185,80,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(63,185,80,0.2)";
            }}
          >
            Add Holding
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            style={{
              padding: "0.75rem",
              background: "rgba(139,148,158,0.2)",
              color: "#8b949e",
              border: "1px solid #8b949e",
              borderRadius: "6px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.2)";
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

interface EmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioId: string;
}

function EmbedModal({ isOpen, onClose, portfolioId }: EmbedModalProps) {
  if (!isOpen) return null;

  const embedCode = `<iframe
  src="https://degen0x.com/tools/portfolio-widget?embed=${portfolioId}"
  width="100%"
  height="600"
  style="border: 1px solid #30363d; border-radius: 8px; background: #0d1117;"
  allowTransparency="true"
></iframe>`;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "600px",
          width: "90%",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ color: "#e6edf3", fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>
          Export Embed Code
        </h2>

        <p style={{ color: "#8b949e", marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Copy this code to embed your portfolio widget on any website or blog:
        </p>

        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            border: "1px solid #30363d",
            borderRadius: "8px",
            padding: "1rem",
            marginBottom: "1.5rem",
            position: "relative",
          }}
        >
          <pre
            style={{
              color: "#e6edf3",
              fontSize: "0.85rem",
              overflowX: "auto",
              margin: 0,
              fontFamily: '"Monaco", "Courier New", monospace',
            }}
          >
            {embedCode}
          </pre>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={() => {
              navigator.clipboard.writeText(embedCode);
              alert("Embed code copied to clipboard!");
            }}
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              background: "linear-gradient(135deg, #3fb950, #2ea043)",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            }}
          >
            Copy Code
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "0.75rem 1rem",
              background: "rgba(139,148,158,0.2)",
              color: "#8b949e",
              border: "1px solid #8b949e",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(139,148,158,0.2)";
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioWidgetPage() {
  const [holdings, setHoldings] = useState<Holding[]>([
    {
      id: "1",
      coin: "BTC",
      symbol: "BTC",
      amount: 0.5,
      purchasePrice: 28500,
      color: "#F7931A",
      emoji: "₿",
    },
    {
      id: "2",
      coin: "ETH",
      symbol: "ETH",
      amount: 2,
      purchasePrice: 1800,
      color: "#627EEA",
      emoji: "Ξ",
    },
  ]);

  const [showEmbedModal, setShowEmbedModal] = useState(false);

  const addHolding = (holding: Omit<Holding, "id">) => {
    setHoldings([
      ...holdings,
      {
        ...holding,
        id: Date.now().toString(),
      },
    ]);
  };

  const removeHolding = (id: string) => {
    setHoldings(holdings.filter((h) => h.id !== id));
  };

  const stats = useMemo(() => {
    const totalValue = holdings.reduce((sum, h) => sum + h.amount * (SIMULATED_PRICES[h.symbol] || 0), 0);
    const totalInvested = holdings.reduce((sum, h) => sum + h.amount * h.purchasePrice, 0);
    const totalProfit = totalValue - totalInvested;
    const totalProfitPercent = totalInvested > 0 ? ((totalProfit / totalInvested) * 100).toFixed(2) : "0.00";

    return {
      totalValue: totalValue.toFixed(2),
      totalInvested: totalInvested.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
      totalProfitPercent,
      profitColor: totalProfit >= 0 ? "#3fb950" : "#f85149",
    };
  }, [holdings]);

  const cardStyle = {
    background: "rgba(22,27,34,0.7)",
    border: "1px solid #30363d",
    borderRadius: "12px",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      <Header />

      <ToolStructuredData
        title="Crypto Portfolio Widget"
        description="Track your crypto holdings in real-time with allocation charts and profit/loss analysis"
        slug="tools/portfolio-widget"
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Portfolio Widget" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#e6edf3",
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            💼 Crypto Portfolio Widget
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem", maxWidth: "900px", lineHeight: "1.6" }}>
            Add your crypto holdings and track your portfolio performance in real-time. See allocation charts, profit/loss analysis, and export embeddable
            widgets for your website.
          </p>
        </div>

        {/* Summary Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Portfolio Value", value: `$${stats.totalValue}`, color: "#58a6ff" },
            { label: "Total Invested", value: `$${stats.totalInvested}`, color: "#8b949e" },
            { label: "Profit/Loss", value: `$${stats.totalProfit}`, color: stats.profitColor },
            { label: "Return %", value: `${stats.totalProfitPercent}%`, color: stats.profitColor },
          ].map((stat) => (
            <div key={stat.label} style={{ ...cardStyle, padding: "1.5rem" }}>
              <div
                style={{
                  color: "#8b949e",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div style={{ color: stat.color, fontSize: "1.75rem", fontWeight: "700" }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Left Column - Form & Holdings */}
          <div>
            <HoldingForm onAdd={addHolding} />

            {/* Holdings List */}
            <div>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>
                Your Holdings
              </h2>

              {holdings.length === 0 ? (
                <div style={{ ...cardStyle, padding: "2rem", textAlign: "center", color: "#8b949e" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>📭</div>
                  <p>No holdings yet. Add your first coin to get started!</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {holdings.map((holding) => {
                    const currentValue = holding.amount * (SIMULATED_PRICES[holding.symbol] || 0);
                    const investedValue = holding.amount * holding.purchasePrice;
                    const profit = currentValue - investedValue;
                    const profitPercent = ((profit / investedValue) * 100).toFixed(2);

                    return (
                      <div
                        key={holding.id}
                        style={{
                          ...cardStyle,
                          padding: "1.25rem",
                          borderLeft: `4px solid ${holding.color}`,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                            <span style={{ fontSize: "1.5rem" }}>{holding.emoji}</span>
                            <div>
                              <h3 style={{ margin: 0, color: "#e6edf3", fontWeight: "700" }}>{holding.symbol}</h3>
                              <p style={{ margin: "0.25rem 0 0 0", color: "#8b949e", fontSize: "0.85rem" }}>
                                {holding.amount} {holding.symbol}
                              </p>
                            </div>
                          </div>

                          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "0.75rem" }}>
                            <div>
                              <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Current Value
                              </div>
                              <div style={{ color: holding.color, fontWeight: "700", fontSize: "1rem" }}>
                                ${currentValue.toFixed(2)}
                              </div>
                            </div>

                            <div>
                              <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Profit/Loss
                              </div>
                              <div style={{ color: profit >= 0 ? "#3fb950" : "#f85149", fontWeight: "700", fontSize: "1rem" }}>
                                ${profit.toFixed(2)} ({profitPercent}%)
                              </div>
                            </div>
                          </div>

                          <div style={{ marginTop: "0.75rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                            <div>
                              <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Avg Buy Price
                              </div>
                              <div style={{ color: "#8b949e", fontSize: "0.9rem" }}>
                                ${holding.purchasePrice.toFixed(2)}
                              </div>
                            </div>

                            <div>
                              <div style={{ color: "#6e7681", fontSize: "0.75rem", marginBottom: "0.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                                Current Price
                              </div>
                              <div style={{ color: "#8b949e", fontSize: "0.9rem" }}>
                                ${(SIMULATED_PRICES[holding.symbol] || 0).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => removeHolding(holding.id)}
                          style={{
                            marginLeft: "1rem",
                            padding: "0.5rem 0.75rem",
                            background: "rgba(248,81,73,0.2)",
                            color: "#f85149",
                            border: "1px solid #f85149",
                            borderRadius: "6px",
                            fontWeight: "600",
                            fontSize: "0.85rem",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,81,73,0.3)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,81,73,0.2)";
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Charts & Export */}
          <div>
            <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.5rem" }}>
                Asset Allocation
              </h2>
              <PieChart holdings={holdings} />
            </div>

            <button
              onClick={() => setShowEmbedModal(true)}
              style={{
                width: "100%",
                padding: "1rem",
                background: "linear-gradient(135deg, #58a6ff, #4a9aea)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "all 0.3s",
                marginBottom: "1rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              📤 Export Embed Code
            </button>

            {/* Information Cards */}
            <div style={{ ...cardStyle, padding: "1.5rem" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>
                💡 How It Works
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "➕", title: "Add Holdings", desc: "Enter your coins, amounts, and purchase prices" },
                  { icon: "📊", title: "Track Value", desc: "See real-time portfolio value with simulated prices" },
                  { icon: "🎯", title: "Monitor P&L", desc: "Track profit/loss and percentage gains per holding" },
                  { icon: "📤", title: "Share Widget", desc: "Export embed code to share your portfolio publicly" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                      paddingTop: idx > 0 ? "1rem" : "0",
                      borderTop: idx > 0 ? "1px solid #30363d" : "none",
                    }}
                  >
                    <span style={{ fontSize: "1.25rem", minWidth: "24px", lineHeight: "1.4" }}>{item.icon}</span>
                    <div>
                      <div style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.9rem" }}>{item.title}</div>
                      <div style={{ color: "#8b949e", fontSize: "0.8rem", marginTop: "0.25rem" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ ...cardStyle, padding: "2rem", marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1.5rem" }}>
            ✨ Key Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "🪙",
                title: "Multi-Asset Tracking",
                desc: "Add and track multiple cryptocurrencies in one portfolio",
              },
              {
                icon: "💹",
                title: "Real-Time Prices",
                desc: "Simulated market prices update to reflect current market conditions",
              },
              {
                icon: "📈",
                title: "Profit/Loss Analysis",
                desc: "See detailed P&L for each holding and total portfolio performance",
              },
              {
                icon: "🥧",
                title: "Allocation Chart",
                desc: "Visual pie chart showing your asset allocation by value",
              },
              {
                icon: "🎨",
                title: "Dark Theme Design",
                desc: "Beautiful responsive dark UI that works on all devices",
              },
              {
                icon: "⚙️",
                title: "Easy Embedding",
                desc: "Export embeddable widgets to share on websites and blogs",
              },
            ].map((feature, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{feature.icon}</div>
                <h3 style={{ color: "#e6edf3", fontWeight: "600", marginBottom: "0.5rem" }}>{feature.title}</h3>
                <p style={{ color: "#8b949e", fontSize: "0.9rem", lineHeight: "1.5", margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ ...cardStyle, padding: "1.25rem", fontSize: "0.85rem", color: "#8b949e", lineHeight: "1.6" }}>
          <strong style={{ color: "#e6edf3" }}>Disclaimer:</strong> This portfolio widget uses simulated prices for demonstration purposes only. Actual
          portfolio performance will depend on real market prices. This is not financial advice. Always do your own research (DYOR) before making investment
          decisions. Past performance does not guarantee future results. Cryptocurrency is highly volatile and involves significant risk.
        </div>
      </div>

      <Footer />

      <EmbedModal isOpen={showEmbedModal} onClose={() => setShowEmbedModal(false)} portfolioId="portfolio-widget-1" />

      <style>{`
        input, select { font-family: inherit; }
        input::placeholder { color: #6e7681; }
        select option { background: #161b22; color: #e6edf3; }
        button:hover { opacity: 0.95; }
      `}</style>
    </div>
  );
}
