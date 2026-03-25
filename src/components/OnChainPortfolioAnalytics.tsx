'use client';

import { useState } from 'react';

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4", indigo: "#6366f1",
  red: "#f85149",
};

const CHAINS = [
  { id: "all", label: "All Chains", emoji: "🌐" },
  { id: "ethereum", label: "Ethereum", emoji: "Ξ" },
  { id: "arbitrum", label: "Arbitrum", emoji: "⚡" },
  { id: "base", label: "Base", emoji: "🔵" },
  { id: "polygon", label: "Polygon", emoji: "🟣" },
  { id: "optimism", label: "Optimism", emoji: "🔴" },
];

const HOLDINGS = [
  { symbol: "ETH", name: "Ethereum", chain: "ethereum", balance: 4.82, price: 3241.50, value: 15624.03, change24h: 2.1, allocation: 38.2, color: S.blue },
  { symbol: "USDC", name: "USD Coin", chain: "base", balance: 8420.00, price: 1.00, value: 8420.00, change24h: 0.0, allocation: 20.6, color: S.green },
  { symbol: "ARB", name: "Arbitrum", chain: "arbitrum", balance: 1840.0, price: 1.82, value: 3348.80, change24h: -1.4, allocation: 8.2, color: S.cyan },
  { symbol: "WBTC", name: "Wrapped Bitcoin", chain: "ethereum", balance: 0.042, price: 68420.00, value: 2873.64, change24h: 1.8, allocation: 7.0, color: S.orange },
  { symbol: "stETH", name: "Lido Staked ETH", chain: "ethereum", balance: 0.74, price: 3238.20, value: 2396.27, change24h: 2.0, allocation: 5.9, color: S.blue },
  { symbol: "MATIC", name: "Polygon", chain: "polygon", balance: 3200.0, price: 0.621, value: 1987.20, change24h: -0.8, allocation: 4.9, color: S.purple },
  { symbol: "GMX", name: "GMX", chain: "arbitrum", balance: 22.5, price: 62.40, value: 1404.00, change24h: 3.2, allocation: 3.4, color: S.orange },
  { symbol: "OP", name: "Optimism", chain: "optimism", balance: 820.0, price: 1.34, value: 1098.80, change24h: 1.1, allocation: 2.7, color: S.red },
  { symbol: "AAVE", name: "Aave", chain: "ethereum", balance: 8.2, price: 124.30, value: 1019.26, change24h: 0.9, allocation: 2.5, color: S.purple },
  { symbol: "UNI", name: "Uniswap", chain: "ethereum", balance: 120.0, price: 7.84, value: 940.80, change24h: -2.1, allocation: 2.3, color: S.pink || "#ff007a" },
  { symbol: "LINK", name: "Chainlink", chain: "ethereum", balance: 55.0, price: 13.42, value: 738.10, change24h: 1.5, allocation: 1.8, color: S.blue },
  { symbol: "PENDLE", name: "Pendle", chain: "arbitrum", balance: 480.0, price: 1.83, value: 878.40, change24h: 4.1, allocation: 2.1, color: S.cyan },
];

const DEFI_POSITIONS = [
  {
    protocol: "Aave V3", emoji: "👻", chain: "Ethereum",
    type: "Supply", asset: "USDC",
    deposited: 5000, currentValue: 5142.30, apy: 4.8,
    pnl: 142.30, color: S.purple,
  },
  {
    protocol: "Uniswap V4", emoji: "🦄", chain: "Ethereum",
    type: "LP Position", asset: "ETH/USDC (0.05%)",
    deposited: 3200, currentValue: 3384.20, apy: 18.2,
    pnl: 184.20, color: "#ff007a",
  },
  {
    protocol: "Lido V2", emoji: "🌊", chain: "Ethereum",
    type: "Liquid Staking", asset: "stETH",
    deposited: 2300, currentValue: 2396.27, apy: 3.6,
    pnl: 96.27, color: S.blue,
  },
  {
    protocol: "GMX V2", emoji: "🔵", chain: "Arbitrum",
    type: "GLP Position", asset: "GM ETH/USDC",
    deposited: 1200, currentValue: 1289.40, apy: 24.1,
    pnl: 89.40, color: S.cyan,
  },
  {
    protocol: "Pendle", emoji: "📐", chain: "Arbitrum",
    type: "Yield Token", asset: "PT-stETH MAR26",
    deposited: 800, currentValue: 878.40, apy: 8.4,
    pnl: 78.40, color: S.cyan,
  },
  {
    protocol: "Compound V3", emoji: "🏦", chain: "Ethereum",
    type: "Borrow", asset: "USDC (borrowed)",
    deposited: -2000, currentValue: -2048.00, apy: -6.2,
    pnl: -48.00, color: S.red,
  },
];

const PNL_DATA = [
  { date: "Mar 8", value: 38420, pnl: -840 },
  { date: "Mar 9", value: 39200, pnl: 780 },
  { date: "Mar 10", value: 38900, pnl: -300 },
  { date: "Mar 11", value: 40100, pnl: 1200 },
  { date: "Mar 12", value: 40800, pnl: 700 },
  { date: "Mar 13", value: 40350, pnl: -450 },
  { date: "Mar 14", value: 40729, pnl: 379 },
];

type TabType = "holdings" | "defi" | "pnl" | "risk";

export default function OnChainPortfolioAnalytics() {
  const [chain, setChain] = useState("all");
  const [tab, setTab] = useState<TabType>("holdings");

  const filteredHoldings = chain === "all" ? HOLDINGS : HOLDINGS.filter(h => h.chain === chain);
  const totalValue = HOLDINGS.reduce((a, h) => a + h.value, 0);
  const defiValue = DEFI_POSITIONS.reduce((a, p) => a + p.currentValue, 0);
  const totalPortfolio = totalValue + defiValue;
  const totalDefiPnl = DEFI_POSITIONS.reduce((a, p) => a + p.pnl, 0);
  const totalChange24h = HOLDINGS.reduce((a, h) => a + h.value * h.change24h / 100, 0);

  const barMax = Math.max(...PNL_DATA.map(d => Math.abs(d.pnl)));

  return (
    <div style={{ color: S.text, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Portfolio Summary */}
      <div style={{ background: `linear-gradient(135deg, ${S.indigo}15, ${S.cyan}08)`, border: `1px solid ${S.indigo}30`, borderRadius: 20, padding: "28px", marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: S.text2, marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Total Portfolio Value</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-0.02em" }}>
            ${totalPortfolio.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div style={{ paddingBottom: 6 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: totalChange24h >= 0 ? S.green : S.red }}>
              {totalChange24h >= 0 ? "↑" : "↓"} ${Math.abs(totalChange24h).toFixed(2)} (24h)
            </span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginTop: 20 }}>
          {[
            { label: "Wallet Holdings", value: `$${totalValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}`, color: S.blue },
            { label: "DeFi Positions", value: `$${Math.abs(defiValue).toLocaleString("en-US", { maximumFractionDigits: 0 })}`, color: S.purple },
            { label: "DeFi P&L", value: `+$${totalDefiPnl.toFixed(2)}`, color: S.green },
            { label: "Best Asset (24h)", value: "PENDLE +4.1%", color: S.cyan },
            { label: "Chains", value: "5 active", color: S.orange },
            { label: "dApps Used", value: "6 protocols", color: S.yellow },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ background: S.surface2, borderRadius: 12, padding: "12px 14px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color, marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chain Filter */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {CHAINS.map((c) => (
          <button key={c.id} onClick={() => setChain(c.id)} style={{
            padding: "6px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
            background: chain === c.id ? `${S.indigo}25` : S.surface,
            border: `1px solid ${chain === c.id ? S.indigo : S.border}`,
            color: chain === c.id ? S.indigo : S.text2, transition: "all 0.2s",
          }}>
            {c.emoji} {c.label}
          </button>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, borderBottom: `1px solid ${S.border}`, marginBottom: 20 }}>
        {(["holdings", "defi", "pnl", "risk"] as const).map((t) => {
          const labels: Record<TabType, string> = { holdings: "💰 Holdings", defi: "🌊 DeFi Positions", pnl: "📊 P&L History", risk: "⚠️ Risk Score" };
          return (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "10px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer",
              background: "none", border: "none", color: tab === t ? S.text : S.text2,
              borderBottom: `2px solid ${tab === t ? S.indigo : "transparent"}`,
              transition: "all 0.2s",
            }}>
              {labels[t]}
            </button>
          );
        })}
      </div>

      {/* Holdings Tab */}
      {tab === "holdings" && (
        <div>
          {/* Allocation bar */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", gap: 1 }}>
              {filteredHoldings.map((h) => (
                <div key={h.symbol} title={`${h.symbol}: ${h.allocation}%`} style={{ width: `${h.allocation}%`, background: h.color, minWidth: h.allocation > 2 ? undefined : 2 }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              {filteredHoldings.slice(0, 6).map((h) => (
                <div key={h.symbol} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: h.color }} />
                  <span style={{ color: S.text2 }}>{h.symbol} {h.allocation}%</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "10px 16px", borderBottom: `1px solid ${S.border}`, fontSize: 11, fontWeight: 700, color: S.text2, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              <span>Asset</span>
              <span style={{ textAlign: "right" }}>Price</span>
              <span style={{ textAlign: "right" }}>Balance</span>
              <span style={{ textAlign: "right" }}>Value</span>
              <span style={{ textAlign: "right" }}>24h</span>
            </div>
            {filteredHoldings.map((h) => (
              <div key={h.symbol} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "14px 16px", borderBottom: `1px solid ${S.border}10`, alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${h.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: h.color }}>
                    {h.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{h.symbol}</div>
                    <div style={{ fontSize: 11, color: S.text2 }}>{h.chain}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right", fontSize: 13, color: S.text }}>
                  ${h.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                </div>
                <div style={{ textAlign: "right", fontSize: 13, color: S.text2 }}>
                  {h.balance.toLocaleString("en-US", { maximumFractionDigits: 4 })}
                </div>
                <div style={{ textAlign: "right", fontSize: 13, fontWeight: 700 }}>
                  ${h.value.toLocaleString("en-US", { maximumFractionDigits: 2 })}
                </div>
                <div style={{ textAlign: "right", fontSize: 13, fontWeight: 700, color: h.change24h >= 0 ? S.green : S.red }}>
                  {h.change24h >= 0 ? "+" : ""}{h.change24h}%
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* DeFi Positions Tab */}
      {tab === "defi" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {DEFI_POSITIONS.map((pos, i) => (
            <div key={i} style={{ background: S.surface, border: `1px solid ${pos.pnl >= 0 ? S.border : S.red + "30"}`, borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, background: `${pos.color}15`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, border: `1px solid ${pos.color}30` }}>
                    {pos.emoji}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>{pos.protocol}</div>
                    <div style={{ fontSize: 12, color: S.text2 }}>{pos.type} · {pos.asset} · {pos.chain}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontWeight: 800, fontSize: 16 }}>
                    ${Math.abs(pos.currentValue).toLocaleString("en-US", { maximumFractionDigits: 2 })}
                  </div>
                  <div style={{ fontSize: 13, color: pos.pnl >= 0 ? S.green : S.red, fontWeight: 700 }}>
                    {pos.pnl >= 0 ? "+" : ""}${pos.pnl.toFixed(2)} P&L
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 12 }}>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase" }}>Deposited</div>
                  <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>${Math.abs(pos.deposited).toLocaleString()}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase" }}>APY</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: pos.apy >= 0 ? S.green : S.red, marginTop: 2 }}>{pos.apy}%</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: S.text2, textTransform: "uppercase" }}>Return</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: pos.pnl >= 0 ? S.green : S.red, marginTop: 2 }}>
                    {((pos.pnl / Math.abs(pos.deposited)) * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontWeight: 700, color: S.green, marginBottom: 4 }}>📊 DeFi Summary</div>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap", fontSize: 13, color: S.text2 }}>
              <span>Total Deployed: <strong style={{ color: S.text }}>${(12700).toLocaleString()}</strong></span>
              <span>Total P&L: <strong style={{ color: S.green }}>+${totalDefiPnl.toFixed(2)}</strong></span>
              <span>Blended APY: <strong style={{ color: S.cyan }}>12.4%</strong></span>
              <span>Health Factor: <strong style={{ color: S.green }}>2.84 ✅</strong></span>
            </div>
          </div>
        </div>
      )}

      {/* P&L History Tab */}
      {tab === "pnl" && (
        <div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "20px", marginBottom: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 20 }}>Daily P&L — Last 7 Days</div>
            <div style={{ display: "flex", align: "flex-end", gap: 10, height: 120, alignItems: "flex-end" }}>
              {PNL_DATA.map((d) => {
                const h = Math.abs(d.pnl) / barMax;
                const isPos = d.pnl >= 0;
                return (
                  <div key={d.date} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: isPos ? S.green : S.red }}>
                      {isPos ? "+" : ""}{d.pnl}
                    </div>
                    <div style={{
                      width: "100%", height: `${Math.max(h * 80, 4)}px`,
                      background: isPos ? `linear-gradient(180deg, ${S.green}, ${S.green}80)` : `linear-gradient(180deg, ${S.red}80, ${S.red})`,
                      borderRadius: 4,
                    }} />
                    <div style={{ fontSize: 10, color: S.text2 }}>{d.date}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
            {[
              { label: "7-Day P&L", value: "+$1,467", color: S.green },
              { label: "7-Day Return", value: "+3.7%", color: S.green },
              { label: "Best Day", value: "+$1,200 (Mar 11)", color: S.green },
              { label: "Worst Day", value: "-$840 (Mar 8)", color: S.red },
              { label: "Win Rate", value: "57% (4/7)", color: S.cyan },
              { label: "Sharpe Ratio", value: "1.84", color: S.blue },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color, marginTop: 6 }}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Risk Score Tab */}
      {tab === "risk" && (
        <div>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: "24px", marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Portfolio Risk Score</div>
                <div style={{ fontSize: 12, color: S.text2 }}>Based on concentration, volatility, and DeFi exposure</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 42, fontWeight: 900, color: S.orange }}>64</div>
                <div style={{ fontSize: 13, color: S.orange, fontWeight: 700 }}>Moderate-High</div>
              </div>
            </div>
            <div style={{ background: S.surface2, borderRadius: 999, height: 8, overflow: "hidden" }}>
              <div style={{ width: "64%", height: "100%", background: `linear-gradient(90deg, ${S.green}, ${S.yellow}, ${S.orange})`, borderRadius: 999 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: S.text2, marginTop: 4 }}>
              <span>0 (Safe)</span>
              <span>100 (Degen)</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { label: "Concentration Risk", score: 72, desc: "38% ETH allocation is above recommended 25%", status: "⚠️ High" },
              { label: "DeFi Smart Contract Risk", score: 55, desc: "6 protocols, all audited. Lending leverage 1.4x.", status: "🟡 Moderate" },
              { label: "Stablecoin Coverage", score: 42, desc: "20.6% USDC allocation. Good for market downturns.", status: "✅ Good" },
              { label: "Chain Diversification", score: 35, desc: "5 chains — well diversified across L1/L2.", status: "✅ Good" },
              { label: "Liquidity Risk", score: 28, desc: "88% of holdings are in highly liquid assets.", status: "✅ Good" },
              { label: "Borrow Health Factor", score: 20, desc: "Compound V3 health factor 2.84 — safe zone.", status: "✅ Safe" },
            ].map((item) => (
              <div key={item.label} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{item.label}</div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{item.status}</div>
                </div>
                <div style={{ background: S.surface2, borderRadius: 999, height: 4, overflow: "hidden", marginBottom: 8 }}>
                  <div style={{
                    width: `${item.score}%`, height: "100%", borderRadius: 999,
                    background: item.score > 60 ? S.orange : item.score > 40 ? S.yellow : S.green,
                  }} />
                </div>
                <div style={{ fontSize: 12, color: S.text2 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
