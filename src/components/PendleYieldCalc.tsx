"use client";

import { useState, useMemo } from "react";

// ── Interfaces ────────────────────────────────────────────────────────────────
interface CalcResult {
  fixedApy: number;
  grossReturn: number;
  principalReturn: number;
  profit: number;
  daysToMaturity: number;
}

// ── Constants ─────────────────────────────────────────────────────────────────
const PRESET_ASSETS = [
  { label: "stETH (Lido)", symbol: "stETH", typicalDiscount: 0.97 },
  { label: "sUSDS (Sky)", symbol: "sUSDS", typicalDiscount: 0.96 },
  { label: "eETH (EtherFi)", symbol: "eETH", typicalDiscount: 0.965 },
  { label: "Custom", symbol: "custom", typicalDiscount: null },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function calcApy(ptPrice: number, daysToMaturity: number): number {
  if (ptPrice <= 0 || ptPrice >= 1 || daysToMaturity <= 0) return 0;
  // APY = (1 / ptPrice) ^ (365 / days) - 1
  return (Math.pow(1 / ptPrice, 365 / daysToMaturity) - 1) * 100;
}

function fmtPct(n: number, decimals = 2): string {
  return `${n.toFixed(decimals)}%`;
}

function fmtUSD(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

function addDays(d: Date, days: number): Date {
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
}

function toDateInputValue(d: Date): string {
  return d.toISOString().split("T")[0];
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function PendleYieldCalc() {
  const minDate = toDateInputValue(addDays(new Date(), 1));
  const defaultMaturity = toDateInputValue(addDays(new Date(), 180));

  const [amount, setAmount] = useState<string>("1000");
  const [ptPrice, setPtPrice] = useState<string>("0.96");
  const [maturityDate, setMaturityDate] = useState<string>(defaultMaturity);
  const [selectedAsset, setSelectedAsset] = useState(PRESET_ASSETS[0]);
  const [assetPrice, setAssetPrice] = useState<string>("3400"); // price of underlying in USD

  // Apply preset discount when switching asset
  function handleAssetChange(idx: number) {
    const asset = PRESET_ASSETS[idx];
    setSelectedAsset(asset);
    if (asset.typicalDiscount !== null) {
      setPtPrice(asset.typicalDiscount.toString());
    }
  }

  const result = useMemo<CalcResult | null>(() => {
    const amtNum = parseFloat(amount);
    const ptNum = parseFloat(ptPrice);
    const assetPriceNum = parseFloat(assetPrice);

    if (
      isNaN(amtNum) ||
      isNaN(ptNum) ||
      isNaN(assetPriceNum) ||
      amtNum <= 0 ||
      ptNum <= 0 ||
      ptNum >= 1 ||
      assetPriceNum <= 0 ||
      !maturityDate
    ) {
      return null;
    }

    const today = new Date();
    const maturity = new Date(maturityDate);
    const daysToMaturity = Math.round(
      (maturity.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysToMaturity <= 0) return null;

    // How many PT tokens can you buy with amtNum USD?
    // Each PT costs ptNum * assetPriceNum USD
    const ptCostEach = ptNum * assetPriceNum;
    const ptTokensBought = amtNum / ptCostEach;

    // At maturity, each PT redeems for 1 underlying (= assetPriceNum USD)
    const principalReturn = ptTokensBought * assetPriceNum;
    const profit = principalReturn - amtNum;
    const grossReturn = profit / amtNum;

    const fixedApy = calcApy(ptNum, daysToMaturity);

    return { fixedApy, grossReturn: grossReturn * 100, principalReturn, profit, daysToMaturity };
  }, [amount, ptPrice, maturityDate, assetPrice]);

  const apyColor =
    result && result.fixedApy >= 8
      ? "#3fb950"
      : result && result.fixedApy >= 4
      ? "#ffa657"
      : "#58a6ff";

  return (
    <div
      style={{
        background: "#0d1117",
        border: "1px solid #30363d",
        borderRadius: 16,
        overflow: "hidden",
        marginTop: 8,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: "1px solid #21262d",
          background: "linear-gradient(135deg, rgba(88,166,255,0.08), rgba(163,113,247,0.08))",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span style={{ fontSize: 18 }}>🔒</span>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>
            PT Fixed Yield Calculator
          </div>
          <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>
            Model your fixed APY before buying Principal Tokens on Pendle
          </div>
        </div>
      </div>

      <div style={{ padding: "20px", display: "grid", gap: 20 }}>
        {/* Asset Presets */}
        <div>
          <label style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", display: "block", marginBottom: 8 }}>
            UNDERLYING ASSET
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {PRESET_ASSETS.map((asset, idx) => (
              <button
                key={asset.symbol}
                onClick={() => handleAssetChange(idx)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: selectedAsset.symbol === asset.symbol
                    ? "1px solid #58a6ff"
                    : "1px solid #30363d",
                  background: selectedAsset.symbol === asset.symbol
                    ? "rgba(88,166,255,0.12)"
                    : "#161b22",
                  color: selectedAsset.symbol === asset.symbol ? "#58a6ff" : "#8b949e",
                  transition: "all 0.15s",
                }}
              >
                {asset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 14,
          }}
        >
          {/* Investment Amount */}
          <div>
            <label
              style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", display: "block", marginBottom: 6 }}
            >
              INVESTMENT (USD)
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#58a6ff",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                $
              </span>
              <input
                type="number"
                value={amount}
                min={1}
                onChange={(e) => setAmount(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 28px",
                  background: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  color: "#e6edf3",
                  fontSize: 15,
                  fontWeight: 600,
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#30363d")}
                aria-label="Investment amount in USD"
              />
            </div>
          </div>

          {/* PT Price */}
          <div>
            <label
              style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", display: "block", marginBottom: 6 }}
            >
              PT PRICE (per 1 underlying)
            </label>
            <input
              type="number"
              value={ptPrice}
              step="0.001"
              min={0.01}
              max={0.9999}
              onChange={(e) => setPtPrice(e.target.value)}
              aria-label="PT price per 1 underlying asset"
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: 8,
                color: "#e6edf3",
                fontSize: 15,
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.target.style.borderColor = "#30363d")}
            />
            <div style={{ fontSize: 11, color: "#8b949e", marginTop: 4 }}>
              {ptPrice && parseFloat(ptPrice) > 0 && parseFloat(ptPrice) < 1
                ? `${((1 - parseFloat(ptPrice)) * 100).toFixed(2)}% discount`
                : "e.g. 0.96 = 4% discount"}
            </div>
          </div>

          {/* Asset Price */}
          <div>
            <label
              style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", display: "block", marginBottom: 6 }}
            >
              UNDERLYING PRICE (USD)
            </label>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#8b949e",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                $
              </span>
              <input
                type="number"
                value={assetPrice}
                min={0.01}
                onChange={(e) => setAssetPrice(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 28px",
                  background: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: 8,
                  color: "#e6edf3",
                  fontSize: 15,
                  fontWeight: 600,
                  outline: "none",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                onBlur={(e) => (e.target.style.borderColor = "#30363d")}
                aria-label="Underlying asset price in USD"
              />
            </div>
          </div>

          {/* Maturity Date */}
          <div>
            <label
              style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", display: "block", marginBottom: 6 }}
            >
              MATURITY DATE
            </label>
            <input
              type="date"
              value={maturityDate}
              min={minDate}
              onChange={(e) => setMaturityDate(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                background: "#161b22",
                border: "1px solid #30363d",
                borderRadius: 8,
                color: "#e6edf3",
                fontSize: 14,
                fontWeight: 600,
                outline: "none",
                boxSizing: "border-box",
                colorScheme: "dark",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
              onBlur={(e) => (e.target.style.borderColor = "#30363d")}
              aria-label="Maturity date"
            />
          </div>
        </div>

        {/* Results */}
        {result ? (
          <div
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            {/* Primary stat */}
            <div style={{ textAlign: "center", paddingBottom: 16, borderBottom: "1px solid #21262d", marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: "#8b949e", marginBottom: 4, fontWeight: 600 }}>
                FIXED APY
              </div>
              <div style={{ fontSize: 44, fontWeight: 900, color: apyColor, letterSpacing: "-0.02em" }}>
                {fmtPct(result.fixedApy)}
              </div>
              <div style={{ fontSize: 12, color: "#8b949e", marginTop: 4 }}>
                Locked in for {result.daysToMaturity} days — regardless of market conditions
              </div>
            </div>

            {/* Secondary stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                gap: 12,
              }}
            >
              {[
                {
                  label: "You Invest",
                  value: fmtUSD(parseFloat(amount || "0")),
                  color: "#e6edf3",
                },
                {
                  label: "Return at Maturity",
                  value: fmtUSD(result.principalReturn),
                  color: "#e6edf3",
                },
                {
                  label: "Profit",
                  value: `+${fmtUSD(result.profit)}`,
                  color: "#3fb950",
                },
                {
                  label: "Total Return",
                  value: `+${fmtPct(result.grossReturn)}`,
                  color: "#3fb950",
                },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  style={{
                    background: "#0d1117",
                    border: "1px solid #21262d",
                    borderRadius: 8,
                    padding: "10px 12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4, fontWeight: 600 }}>
                    {label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color }}>{value}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 11, color: "#8b949e", marginTop: 14, lineHeight: 1.6 }}>
              ⚠️ This calculator models ideal conditions. Actual returns depend on PT market
              liquidity, gas costs, and whether you hold to maturity. This is not financial advice.
            </p>
          </div>
        ) : (
          <div
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 12,
              padding: 20,
              textAlign: "center",
              color: "#8b949e",
              fontSize: 14,
            }}
          >
            Enter valid values above to see your fixed yield calculation
          </div>
        )}

        {/* Presets row */}
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#8b949e", marginBottom: 8 }}>
            QUICK SCENARIOS
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[
              { label: "Conservative ($1K, 3mo)", amount: "1000", ptPrice: "0.98", days: 90, assetPrice: "3400" },
              { label: "Balanced ($5K, 6mo)", amount: "5000", ptPrice: "0.96", days: 180, assetPrice: "3400" },
              { label: "Aggressive ($10K, 1yr)", amount: "10000", ptPrice: "0.92", days: 365, assetPrice: "3400" },
            ].map(({ label, amount: a, ptPrice: p, days, assetPrice: ap }) => (
              <button
                key={label}
                onClick={() => {
                  setAmount(a);
                  setPtPrice(p);
                  setMaturityDate(toDateInputValue(addDays(new Date(), days)));
                  setAssetPrice(ap);
                  setSelectedAsset(PRESET_ASSETS[3]); // custom
                }}
                style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid #30363d",
                  background: "#161b22",
                  color: "#8b949e",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#58a6ff";
                  (e.target as HTMLButtonElement).style.color = "#58a6ff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#30363d";
                  (e.target as HTMLButtonElement).style.color = "#8b949e";
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
