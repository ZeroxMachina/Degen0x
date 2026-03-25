"use client";

import { useState } from "react";

export default function PredictionMarketCalculator() {
  const [buyPrice, setBuyPrice] = useState<number>(0.5);
  const [shares, setShares] = useState<number>(100);
  const [outcome, setOutcome] = useState<"yes" | "no">("yes");

  const totalCost = Number((buyPrice * shares).toFixed(2));
  const payout = outcome === "yes" ? shares : 0;
  const profit = Number((payout - totalCost).toFixed(2));
  const roi = totalCost > 0 ? Number(((profit / totalCost) * 100).toFixed(2)) : 0;

  const impliedProbability = (buyPrice * 100).toFixed(1);
  const isProfit = profit > 0;
  const profitColor = isProfit ? "#4ade80" : "#f87171";

  const handleSharesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : parseInt(e.target.value, 10);
    setShares(isNaN(value) ? 0 : Math.max(0, value));
  };

  const handleBuyPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setBuyPrice(isNaN(value) ? 0.01 : Math.min(0.99, Math.max(0.01, value)));
  };

  return (
    <div
      style={{
        background: "#161b22",
        border: "1px solid #30363d",
        borderRadius: 12,
        padding: 24,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#e6edf3",
      }}
    >
      {/* Title */}
      <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 28 }}>
        Prediction Market Calculator
      </div>

      {/* Buy Price Input with Slider */}
      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            display: "block",
            fontSize: 13,
            color: "#c9d1d9",
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          Entry Price (Yes Share): ${buyPrice.toFixed(2)}
        </label>
        <input
          type="range"
          min="0.01"
          max="0.99"
          step="0.01"
          value={buyPrice}
          onChange={handleBuyPriceChange}
          aria-label={`Entry price slider: $${buyPrice.toFixed(2)}`}
          aria-valuemin={0.01}
          aria-valuemax={0.99}
          aria-valuenow={buyPrice}
          style={{
            width: "100%",
            height: 6,
            borderRadius: 3,
            background: "#21262d",
            outline: "none",
            WebkitAppearance: "none",
            appearance: "none",
            cursor: "pointer",
          }}
        />
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 22px;
            height: 22px;
            borderRadius: 50%;
            background: #58a6ff;
            cursor: pointer;
            border: none;
          }
          input[type="range"]::-moz-range-thumb {
            width: 22px;
            height: 22px;
            borderRadius: 50%;
            background: #58a6ff;
            cursor: pointer;
            border: none;
          }
        `}</style>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 8,
            fontSize: 12,
            color: "#8b949e",
          }}
        >
          <span>0.01 (1%)</span>
          <span>0.99 (99%)</span>
        </div>
      </div>

      {/* Probability Bar */}
      <div style={{ marginBottom: 28 }}>
        <div
          style={{
            height: 32,
            background: "#21262d",
            borderRadius: 6,
            overflow: "hidden",
            position: "relative",
            border: "1px solid #30363d",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${buyPrice * 100}%`,
              background: "#58a6ff",
              transition: "width 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent:
                buyPrice > 0.15 ? "flex-end" : "flex-start",
              paddingRight: buyPrice > 0.15 ? 8 : 0,
              paddingLeft: buyPrice <= 0.15 ? 8 : 0,
            }}
          >
            {buyPrice > 0.08 && (
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#161b22",
                }}
              >
                {impliedProbability}%
              </span>
            )}
          </div>
          {buyPrice <= 0.08 && (
            <div
              style={{
                position: "absolute",
                left: 8,
                top: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "#58a6ff",
              }}
            >
              {impliedProbability}%
            </div>
          )}
        </div>
      </div>

      {/* Number of Shares Input */}
      <div style={{ marginBottom: 24 }}>
        <label
          style={{
            display: "block",
            fontSize: 13,
            color: "#c9d1d9",
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          Number of Shares
        </label>
        <input
          type="number"
          min="0"
          value={shares}
          onChange={handleSharesChange}
          style={{
            width: "100%",
            padding: "8px 12px",
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 6,
            color: "#e6edf3",
            fontSize: 14,
            boxSizing: "border-box",
            transition: "border-color 0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#58a6ff";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "#30363d";
          }}
        />
      </div>

      {/* Outcome Toggle */}
      <div style={{ marginBottom: 28 }}>
        <label
          style={{
            display: "block",
            fontSize: 13,
            color: "#c9d1d9",
            marginBottom: 10,
            fontWeight: 500,
          }}
        >
          Market Outcome
        </label>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => setOutcome("yes")}
            style={{
              flex: 1,
              padding: "10px 16px",
              background: outcome === "yes" ? "#58a6ff" : "#21262d",
              border: `1px solid ${outcome === "yes" ? "#58a6ff" : "#30363d"}`,
              borderRadius: 6,
              color: outcome === "yes" ? "#0d1117" : "#c9d1d9",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (outcome !== "yes") {
                e.currentTarget.style.borderColor = "#58a6ff";
              }
            }}
            onMouseLeave={(e) => {
              if (outcome !== "yes") {
                e.currentTarget.style.borderColor = "#30363d";
              }
            }}
          >
            Yes Wins
          </button>
          <button
            onClick={() => setOutcome("no")}
            style={{
              flex: 1,
              padding: "10px 16px",
              background: outcome === "no" ? "#58a6ff" : "#21262d",
              border: `1px solid ${outcome === "no" ? "#58a6ff" : "#30363d"}`,
              borderRadius: 6,
              color: outcome === "no" ? "#0d1117" : "#c9d1d9",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              if (outcome !== "no") {
                e.currentTarget.style.borderColor = "#58a6ff";
              }
            }}
            onMouseLeave={(e) => {
              if (outcome !== "no") {
                e.currentTarget.style.borderColor = "#30363d";
              }
            }}
          >
            No Wins
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 24,
        }}
      >
        {/* Total Cost */}
        <div
          style={{
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#8b949e",
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            Total Cost
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#e6edf3",
            }}
          >
            ${totalCost.toFixed(2)}
          </div>
        </div>

        {/* Payout if Correct */}
        <div
          style={{
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#8b949e",
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            Payout if Correct
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#e6edf3",
            }}
          >
            ${payout.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Profit/Loss Prominent Display */}
      <div
        style={{
          background: "#0d1117",
          border: `1px solid ${isProfit ? "#4ade80" : "#f87171"}`,
          borderRadius: 8,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            fontSize: 13,
            color: "#8b949e",
            marginBottom: 12,
            fontWeight: 500,
          }}
        >
          Profit / Loss
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: profitColor,
            }}
          >
            {profit >= 0 ? "+" : ""}${profit.toFixed(2)}
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: profitColor,
            }}
          >
            {roi >= 0 ? "+" : ""}
            {roi.toFixed(2)}%
          </div>
        </div>
        <div
          style={{
            fontSize: 12,
            color: "#8b949e",
          }}
        >
          ROI on ${totalCost.toFixed(2)} investment
        </div>
      </div>

      {/* Info Text */}
      <div
        style={{
          fontSize: 12,
          color: "#8b949e",
          lineHeight: 1.6,
          background: "#0d1117",
          border: "1px solid #30363d",
          borderRadius: 6,
          padding: 12,
        }}
      >
        Buy at the displayed price. If your outcome wins, each share pays $1.00.
        Maximum profit occurs when buying near 0.01 and outcome is correct.
      </div>
    </div>
  );
}
