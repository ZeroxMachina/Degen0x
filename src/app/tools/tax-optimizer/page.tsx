'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface Holding {
  id: string;
  symbol: string;
  buyDate: string;
  buyPrice: number;
  amount: number;
  currentPrice: number;
}

interface CostBasisMethod {
  method: "FIFO" | "LIFO" | "HIFO" | "Specific ID";
}

// ── Sample Data ───────────────────────────────────────────────────────────────
const SAMPLE_HOLDINGS: Holding[] = [
  { id: "1", symbol: "BTC", buyDate: "2022-01-15", buyPrice: 41000, amount: 0.5, currentPrice: 65000 },
  { id: "2", symbol: "BTC", buyDate: "2023-06-20", buyPrice: 30000, amount: 1.2, currentPrice: 65000 },
  { id: "3", symbol: "ETH", buyDate: "2022-03-10", buyPrice: 2800, amount: 5, currentPrice: 3500 },
  { id: "4", symbol: "ETH", buyDate: "2023-09-01", buyPrice: 1500, amount: 3, currentPrice: 3500 },
  { id: "5", symbol: "SOL", buyDate: "2022-08-22", buyPrice: 35, amount: 50, currentPrice: 140 },
  { id: "6", symbol: "SOL", buyDate: "2024-01-10", buyPrice: 100, amount: 20, currentPrice: 140 },
  { id: "7", symbol: "DOGE", buyDate: "2021-12-28", buyPrice: 0.20, amount: 5000, currentPrice: 0.18 },
  { id: "8", symbol: "ADA", buyDate: "2022-05-05", buyPrice: 0.55, amount: 3000, currentPrice: 0.98 },
  { id: "9", symbol: "ADA", buyDate: "2023-12-15", buyPrice: 0.72, amount: 1500, currentPrice: 0.98 },
  { id: "10", symbol: "XRP", buyDate: "2022-09-12", buyPrice: 0.62, amount: 2000, currentPrice: 0.51 },
  { id: "11", symbol: "MATIC", buyDate: "2023-02-14", buyPrice: 0.95, amount: 1000, currentPrice: 0.85 },
  { id: "12", symbol: "AVAX", buyDate: "2022-11-20", buyPrice: 15, amount: 100, currentPrice: 36 },
  { id: "13", symbol: "LINK", buyDate: "2023-07-08", buyPrice: 7, amount: 200, currentPrice: 18 },
  { id: "14", symbol: "UNI", buyDate: "2022-06-10", buyPrice: 6.5, amount: 500, currentPrice: 9 },
  { id: "15", symbol: "AAVE", buyDate: "2023-04-22", buyPrice: 90, amount: 50, currentPrice: 180 },
];

// ── Utility Functions ────────────────────────────────────────────────────────
function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function isLongTermGain(buyDate: string): boolean {
  const buy = new Date(buyDate);
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return buy <= oneYearAgo;
}

function calculateDaysSincePurchase(buyDate: string): number {
  const buy = new Date(buyDate);
  const today = new Date();
  return Math.floor((today.getTime() - buy.getTime()) / (1000 * 60 * 60 * 24));
}

function generateCSVReport(holdings: Holding[], taxBracket: number, costBasisMethod: string) {
  const headers = ["Symbol", "Buy Date", "Buy Price", "Amount", "Current Price", "Unrealized Gain/Loss", "Type"];
  let csv = headers.join(",") + "\n";

  holdings.forEach(h => {
    const costBasis = h.buyPrice * h.amount;
    const currentValue = h.currentPrice * h.amount;
    const gainLoss = currentValue - costBasis;
    const isLong = isLongTermGain(h.buyDate);

    csv += `${h.symbol},${h.buyDate},${h.buyPrice},${h.amount},${h.currentPrice},${gainLoss.toFixed(2)},${isLong ? "Long-Term" : "Short-Term"}\n`;
  });

  return csv;
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function TaxOptimizerPage() {
  const [holdings, setHoldings] = useState<Holding[]>(SAMPLE_HOLDINGS);
  const [newSymbol, setNewSymbol] = useState("");
  const [newBuyDate, setNewBuyDate] = useState("");
  const [newBuyPrice, setNewBuyPrice] = useState(0);
  const [newAmount, setNewAmount] = useState(0);
  const [newCurrentPrice, setNewCurrentPrice] = useState(0);
  const [taxBracket, setTaxBracket] = useState(22);
  const [costBasisMethod, setCostBasisMethod] = useState<"FIFO" | "LIFO" | "HIFO" | "Specific ID">("FIFO");
  const [selectedHarvestedIds, setSelectedHarvestedIds] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<"symbol" | "gain" | "date" | "days">("symbol");

  // Add new holding
  const addHolding = () => {
    if (!newSymbol || !newBuyDate || newBuyPrice <= 0 || newAmount <= 0 || newCurrentPrice <= 0) return;
    const newHolding: Holding = {
      id: Date.now().toString(),
      symbol: newSymbol.toUpperCase(),
      buyDate: newBuyDate,
      buyPrice: newBuyPrice,
      amount: newAmount,
      currentPrice: newCurrentPrice,
    };
    setHoldings([...holdings, newHolding]);
    setNewSymbol("");
    setNewBuyDate("");
    setNewBuyPrice(0);
    setNewAmount(0);
    setNewCurrentPrice(0);
  };

  // Remove holding
  const removeHolding = (id: string) => {
    setHoldings(holdings.filter(h => h.id !== id));
  };

  // Calculate tax metrics
  const taxMetrics = useMemo(() => {
    let totalUnrealizedGain = 0;
    let totalUnrealizedLoss = 0;
    let longTermGains = 0;
    let shortTermGains = 0;
    let longTermLosses = 0;
    let shortTermLosses = 0;
    const harvestedLosses: { id: string; symbol: string; loss: number; daysHeld: number }[] = [];

    holdings.forEach(h => {
      const costBasis = h.buyPrice * h.amount;
      const currentValue = h.currentPrice * h.amount;
      const gainLoss = currentValue - costBasis;
      const isLong = isLongTermGain(h.buyDate);
      const daysHeld = calculateDaysSincePurchase(h.buyDate);

      if (gainLoss >= 0) {
        totalUnrealizedGain += gainLoss;
        if (isLong) {
          longTermGains += gainLoss;
        } else {
          shortTermGains += gainLoss;
        }
      } else {
        totalUnrealizedLoss += Math.abs(gainLoss);
        if (isLong) {
          longTermLosses += Math.abs(gainLoss);
        } else {
          shortTermLosses += Math.abs(gainLoss);
        }
        if (daysHeld >= 30) {
          harvestedLosses.push({ id: h.id, symbol: h.symbol, loss: Math.abs(gainLoss), daysHeld });
        }
      }
    });

    const netCapitalGain = totalUnrealizedGain - totalUnrealizedLoss;
    const taxableGain = Math.max(0, netCapitalGain);
    const estimatedTax = taxableGain * (taxBracket / 100);

    // Calculate tax savings from harvesting
    let harvestingSavings = 0;
    selectedHarvestedIds.forEach(id => {
      const harvested = harvestedLosses.find(h => h.id === id);
      if (harvested) {
        harvestingSavings += harvested.loss * (taxBracket / 100);
      }
    });

    return {
      totalUnrealizedGain,
      totalUnrealizedLoss,
      longTermGains,
      shortTermGains,
      longTermLosses,
      shortTermLosses,
      netCapitalGain,
      taxableGain,
      estimatedTax,
      harvestedLosses,
      harvestingSavings,
    };
  }, [holdings, taxBracket, selectedHarvestedIds]);

  // Sort holdings
  const sortedHoldings = useMemo(() => {
    const sorted = [...holdings];
    sorted.sort((a, b) => {
      if (sortColumn === "symbol") return a.symbol.localeCompare(b.symbol);
      if (sortColumn === "date") return new Date(b.buyDate).getTime() - new Date(a.buyDate).getTime();
      if (sortColumn === "days") {
        const daysA = calculateDaysSincePurchase(a.buyDate);
        const daysB = calculateDaysSincePurchase(b.buyDate);
        return daysB - daysA;
      }
      if (sortColumn === "gain") {
        const gainA = (a.currentPrice - a.buyPrice) * a.amount;
        const gainB = (b.currentPrice - b.buyPrice) * b.amount;
        return gainB - gainA;
      }
      return 0;
    });
    return sorted;
  }, [holdings, sortColumn]);

  // Wash sale check
  const hasWashSaleRisk = holdings.some(h => {
    const daysSince = calculateDaysSincePurchase(h.buyDate);
    return daysSince < 30;
  });

  // Export CSV
  const handleExportCSV = () => {
    const csv = generateCSVReport(holdings, taxBracket, costBasisMethod);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tax-report.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Tax Optimizer", href: "/tools/tax-optimizer" }]} />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#e6edf3", marginBottom: 8 }}>
            🏛️ Crypto Tax Optimizer
          </h1>
          <p style={{ color: "#8b949e", fontSize: 15 }}>
            Optimize your crypto taxes with loss harvesting, capital gains tracking, and tax liability estimation.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: PORTFOLIO INPUT */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            📊 Add Holdings
          </h2>

          <div style={{
            background: "#0d1117",
            borderRadius: 12,
            border: "1px dashed #30363d",
            padding: 16,
            marginBottom: 20,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 12, marginBottom: 12 }}>
              <input
                type="text"
                placeholder="Symbol (BTC)"
                value={newSymbol}
                onChange={e => setNewSymbol(e.target.value)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#e6edf3",
                  fontSize: 13,
                }}
              />
              <input
                type="date"
                value={newBuyDate}
                onChange={e => setNewBuyDate(e.target.value)}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#e6edf3",
                  fontSize: 13,
                }}
              />
              <input
                type="number"
                placeholder="Buy Price ($)"
                value={newBuyPrice || ""}
                onChange={e => setNewBuyPrice(Number(e.target.value))}
                step="0.01"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#e6edf3",
                  fontSize: 13,
                }}
              />
              <input
                placeholder="Amount"
                value={newAmount || ""}
                onChange={e => setNewAmount(Number(e.target.value))}
                step="0.001"
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#e6edf3",
                  fontSize: 13,
                }}
              />
              <input
                placeholder="Current Price ($)"
                value={newCurrentPrice || ""}
                onChange={e => setNewCurrentPrice(Number(e.target.value))}
                style={{
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#e6edf3",
                  fontSize: 13,
                }}
              />
              <button
                onClick={addHolding}
                style={{
                  padding: "10px 16px",
                  borderRadius: 8,
                  border: "1px solid #6366f1",
                  background: "#6366f120",
                  color: "#818cf8",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                + Add
              </button>
            </div>
          </div>

          {/* Holdings Count */}
          <div style={{ fontSize: 13, color: "#8b949e" }}>
            {holdings.length} holding{holdings.length !== 1 ? "s" : ""} in portfolio
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: TAX SUMMARY DASHBOARD */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            💰 Tax Summary Dashboard
          </h2>

          {/* Key Metrics Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 24 }}>
            {[
              { label: "Total Gains", value: formatUSD(taxMetrics.totalUnrealizedGain), color: "#22c55e" },
              { label: "Total Losses", value: formatUSD(taxMetrics.totalUnrealizedLoss), color: "#ef4444" },
              { label: "Net Capital Gain", value: formatUSD(taxMetrics.netCapitalGain), color: taxMetrics.netCapitalGain >= 0 ? "#22c55e" : "#ef4444" },
              { label: "Taxable Gain", value: formatUSD(taxMetrics.taxableGain), color: "#f59e0b" },
              { label: "Est. Tax Owed", value: formatUSD(taxMetrics.estimatedTax), color: "#ef4444" },
              { label: "Tax Savings (Harvesting)", value: formatUSD(taxMetrics.harvestingSavings), color: "#22c55e" },
            ].map((m, i) => (
              <div key={i} style={{ background: "#0d1117", borderRadius: 10, padding: 16, border: "1px solid #30363d" }}>
                <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 18, fontWeight: 800, color: m.color }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Breakdown Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { label: "Long-Term Gains", value: formatUSD(taxMetrics.longTermGains), color: "#22c55e" },
              { label: "Short-Term Gains", value: formatUSD(taxMetrics.shortTermGains), color: "#f59e0b" },
              { label: "Long-Term Losses", value: formatUSD(taxMetrics.longTermLosses), color: "#ef4444" },
              { label: "Short-Term Losses", value: formatUSD(taxMetrics.shortTermLosses), color: "#ef4444" },
            ].map((m, i) => (
              <div key={i} style={{ background: "#0d1117", borderRadius: 10, padding: 12, border: "1px solid #30363d" }}>
                <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 14, fontWeight: 800, color: m.color }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: CONFIGURATION & WARNINGS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            ⚙️ Settings & Warnings
          </h2>

          {/* Settings Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginBottom: 24 }}>
            {/* Tax Bracket */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8b949e", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Tax Bracket (US Federal)
              </label>
              <select
                value={taxBracket}
                onChange={e => setTaxBracket(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#0d1117",
                  color: "#e6edf3",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <option value={10}>10% (Lowest)</option>
                <option value={12}>12%</option>
                <option value={22}>22% (Default)</option>
                <option value={24}>24%</option>
                <option value={32}>32%</option>
                <option value={35}>35%</option>
                <option value={37}>37% (Highest)</option>
              </select>
            </div>

            {/* Cost Basis Method */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#8b949e", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Cost Basis Method
              </label>
              <select
                value={costBasisMethod}
                onChange={e => setCostBasisMethod(e.target.value as any)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid #30363d",
                  background: "#0d1117",
                  color: "#e6edf3",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <option value="FIFO">FIFO (First In, First Out)</option>
                <option value="LIFO">LIFO (Last In, First Out)</option>
                <option value="HIFO">HIFO (Highest In, First Out)</option>
                <option value="Specific ID">Specific ID</option>
              </select>
            </div>
          </div>

          {/* Warnings */}
          {hasWashSaleRisk && (
            <div style={{
              background: "#f8514920",
              border: "1px solid #f8514960",
              borderRadius: 10,
              padding: 16,
              marginBottom: 16,
            }}>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ fontSize: 20 }}>⚠️</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#ef4444", marginBottom: 4 }}>Wash Sale Rule Warning</div>
                  <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
                    Some holdings were purchased less than 30 days ago. Be careful when selling to harvest losses within 30 days, as you may trigger the wash sale rule. You cannot repurchase substantially identical assets within 30 days before or after the sale.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div style={{
            background: "#6366f120",
            border: "1px solid #6366f160",
            borderRadius: 10,
            padding: 16,
          }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: 18 }}>ℹ️</div>
              <div>
                <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
                  <strong>Long-term gains:</strong> Assets held 1+ year. <strong>Short-term gains:</strong> Assets held less than 1 year.
                  Losses can offset gains dollar-for-dollar. Unused losses carry forward to future years.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 4: TAX-LOSS HARVESTING */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            🎯 Tax-Loss Harvesting Opportunities
          </h2>

          {taxMetrics.harvestedLosses.length > 0 ? (
            <div>
              {taxMetrics.harvestedLosses.map(loss => {
                const isSelected = selectedHarvestedIds.includes(loss.id);
                return (
                  <div
                    key={loss.id}
                    onClick={() => {
                      if (isSelected) {
                        setSelectedHarvestedIds(selectedHarvestedIds.filter(id => id !== loss.id));
                      } else {
                        setSelectedHarvestedIds([...selectedHarvestedIds, loss.id]);
                      }
                    }}
                    style={{
                      background: isSelected ? "#22c55e20" : "#0d1117",
                      border: `1px solid ${isSelected ? "#22c55e60" : "#30363d"}`,
                      borderRadius: 10,
                      padding: 14,
                      marginBottom: 10,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, color: "#e6edf3", fontSize: 14 }}>
                        {loss.symbol}
                      </div>
                      <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>
                        Unrealized loss • {loss.daysHeld} days held
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#ef4444" }}>
                        {formatUSD(loss.loss)}
                      </div>
                      <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>
                        Tax savings: {formatUSD(loss.loss * (taxBracket / 100))}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                      style={{
                        marginLeft: 16,
                        width: 18,
                        height: 18,
                        cursor: "pointer",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: 32, color: "#8b949e" }}>
              No unrealized losses available for tax harvesting
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 5: TRANSACTION HISTORY */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            📋 Holdings (Sortable)
          </h2>

          {/* Sort Controls */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[
              { key: "symbol", label: "By Symbol" },
              { key: "gain", label: "By Gain/Loss" },
              { key: "date", label: "By Date" },
              { key: "days", label: "By Days Held" },
            ].map(option => (
              <button
                key={option.key}
                onClick={() => setSortColumn(option.key as any)}
                style={{
                  padding: "8px 14px",
                  borderRadius: 8,
                  border: `1px solid ${sortColumn === option.key ? "#6366f1" : "#30363d"}`,
                  background: sortColumn === option.key ? "#6366f120" : "transparent",
                  color: sortColumn === option.key ? "#818cf8" : "#8b949e",
                  fontSize: 12,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Holdings Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 13,
            }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  {["Symbol", "Buy Date", "Buy Price", "Amount", "Current Price", "Current Value", "Gain/Loss", "Type", "Days Held", ""].map(header => (
                    <th
                      key={header}
                      style={{
                        padding: "12px 8px",
                        textAlign: header === "" ? "right" : "left",
                        fontWeight: 700,
                        color: "#8b949e",
                        textTransform: "uppercase",
                        fontSize: 10,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedHoldings.map(h => {
                  const costBasis = h.buyPrice * h.amount;
                  const currentValue = h.currentPrice * h.amount;
                  const gainLoss = currentValue - costBasis;
                  const gainLossPercent = (gainLoss / costBasis) * 100;
                  const isLong = isLongTermGain(h.buyDate);
                  const daysHeld = calculateDaysSincePurchase(h.buyDate);

                  return (
                    <tr key={h.id} style={{ borderBottom: "1px solid #30363d" }}>
                      <td style={{ padding: "12px 8px", color: "#e6edf3", fontWeight: 700 }}>{h.symbol}</td>
                      <td style={{ padding: "12px 8px", color: "#8b949e" }}>{h.buyDate}</td>
                      <td style={{ padding: "12px 8px", color: "#8b949e" }}>{formatUSD(h.buyPrice)}</td>
                      <td style={{ padding: "12px 8px", color: "#8b949e" }}>{h.amount.toLocaleString()}</td>
                      <td style={{ padding: "12px 8px", color: "#8b949e" }}>{formatUSD(h.currentPrice)}</td>
                      <td style={{ padding: "12px 8px", color: "#e6edf3", fontWeight: 600 }}>{formatUSD(currentValue)}</td>
                      <td style={{ padding: "12px 8px", color: gainLoss >= 0 ? "#22c55e" : "#ef4444", fontWeight: 700 }}>
                        {formatUSD(gainLoss)} ({gainLossPercent.toFixed(1)}%)
                      </td>
                      <td style={{ padding: "12px 8px", color: isLong ? "#22c55e" : "#f59e0b", fontWeight: 600 }}>
                        {isLong ? "Long" : "Short"}
                      </td>
                      <td style={{ padding: "12px 8px", color: "#8b949e" }}>{daysHeld}</td>
                      <td style={{ padding: "12px 8px", textAlign: "right" }}>
                        <button
                          onClick={() => removeHolding(h.id)}
                          style={{
                            padding: "4px 8px",
                            borderRadius: 6,
                            border: "1px solid #30363d",
                            background: "transparent",
                            color: "#ef4444",
                            fontSize: 11,
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

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 6: CHARTS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, marginBottom: 32 }}>
          {/* Gains vs Losses Bar Chart */}
          <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3", marginBottom: 20 }}>Gains vs Losses</h3>
            <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((val, i) => (
                <line
                  key={`grid-${i}`}
                  x1="40"
                  y1={150 - val * 100}
                  x2="280"
                  y2={150 - val * 100}
                  stroke="#30363d"
                  strokeWidth="1"
                />
              ))}

              {/* Y-axis */}
              <line x1="40" y1="50" x2="40" y2="150" stroke="#8b949e" strokeWidth="2" />
              {/* X-axis */}
              <line x1="40" y1="150" x2="280" y2="150" stroke="#8b949e" strokeWidth="2" />

              {/* Bars */}
              <rect
                x="80"
                y={150 - Math.min((taxMetrics.totalUnrealizedGain / Math.max(taxMetrics.totalUnrealizedGain, taxMetrics.totalUnrealizedLoss, 1)) * 100, 100)}
                width="50"
                height={Math.min((taxMetrics.totalUnrealizedGain / Math.max(taxMetrics.totalUnrealizedGain, taxMetrics.totalUnrealizedLoss, 1)) * 100, 100)}
                fill="#22c55e"
                opacity="0.8"
              />
              <rect
                x="180"
                y={150 - Math.min((taxMetrics.totalUnrealizedLoss / Math.max(taxMetrics.totalUnrealizedGain, taxMetrics.totalUnrealizedLoss, 1)) * 100, 100)}
                height={Math.min((taxMetrics.totalUnrealizedLoss / Math.max(taxMetrics.totalUnrealizedGain, taxMetrics.totalUnrealizedLoss, 1)) * 100, 100)}
                fill="#ef4444"
              />

              {/* Labels */}
              <text x="105" y="165" textAnchor="middle" fill="#8b949e" fontSize="12" fontWeight="600">
                Gains
              </text>
              <text x="205" y="165" textAnchor="middle" fill="#8b949e" fontSize="12" fontWeight="600">
                Losses
              </text>
            </svg>
            <div style={{ marginTop: 16, display: "flex", justifyContent: "space-around" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 4 }}>Gains</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#22c55e" }}>{formatUSD(taxMetrics.totalUnrealizedGain)}</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "#8b949e", marginBottom: 4 }}>Losses</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#ef4444" }}>{formatUSD(taxMetrics.totalUnrealizedLoss)}</div>
              </div>
            </div>
          </div>

          {/* Tax Savings Visualization */}
          <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, color: "#e6edf3", marginBottom: 20 }}>Tax Impact Analysis</h3>
            <svg viewBox="0 0 300 200" style={{ width: "100%", height: "auto" }}>
              {/* Background circle */}
              <circle cx="90" cy="100" r="40" fill="#30363d" opacity="0.2" />
              {/* Pie slices */}
              <circle cx="90" cy="100" r="40" fill="none" stroke="#22c55e" strokeWidth="8" strokeDasharray={`${(taxMetrics.harvestingSavings / Math.max(taxMetrics.estimatedTax, 1)) * 251} 251`} opacity="0.8" />
              {/* Center circle */}
              <circle cx="90" cy="100" r="25" fill="#161b22" />
              <text x="90" y="100" textAnchor="middle" dy="0.3em" fill="#e6edf3" fontSize="14" fontWeight="700">
                Tax
              </text>
              <text x="90" y="115" textAnchor="middle" dy="0.3em" fill="#8b949e" fontSize="11">
                Impact
              </text>

              {/* Legend */}
              <rect x="160" y="60" width="12" height="12" fill="#ef4444" opacity="0.8" />
              <text x="180" y="68" fill="#e6edf3" fontSize="12" fontWeight="600">
                Tax Owed
              </text>

              <rect x="160" y="85" width="12" height="12" fill="#22c55e" opacity="0.8" />
              <text x="180" y="93" fill="#e6edf3" fontSize="12" fontWeight="600">
                Potential Savings
              </text>
            </svg>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 8 }}>With Tax-Loss Harvesting</div>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <div style={{ fontSize: 11, color: "#8b949e" }}>Est. Tax</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#ef4444" }}>{formatUSD(taxMetrics.estimatedTax)}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#8b949e" }}>Potential Savings</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#22c55e" }}>{formatUSD(taxMetrics.harvestingSavings)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 7: EXPORT */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "#161b22", borderRadius: 16, border: "1px solid #30363d", padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#e6edf3", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            📥 Export & Reports
          </h2>

          <button
            onClick={handleExportCSV}
            style={{
              padding: "12px 20px",
              borderRadius: 8,
              border: "1px solid #22c55e",
              background: "#22c55e20",
              color: "#22c55e",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            📊 Export Tax Report (CSV)
          </button>

          <div style={{ marginTop: 16, fontSize: 12, color: "#8b949e", lineHeight: 1.6 }}>
            Download a comprehensive CSV report with all holdings, gains/losses, and holding periods for your tax filing or professional review.
          </div>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tax Optimizer",
              "url": "https://degen0x.com/tools/tax-optimizer",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
