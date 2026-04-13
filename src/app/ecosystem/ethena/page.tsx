'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#7c3aed", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function EthenaGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Ethena</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🌀</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>Stablecoin</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Yield</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>DeFi</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Ethena: USDe — The Internet Bond</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Synthetic dollar yielding 15–30% APY · +150 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["USDe Supply", "$5.4B", S.accent],
            ["sUSDe APY", "~18%", S.green],
            ["Token", "$ENA", S.purple],
            ["Backing", "Delta-Neutral", S.blue],
            ["Chains", "Multi-EVM", S.orange],
            ["Rating", "⭐ 4.5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Ethena?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Ethena is a synthetic dollar protocol that creates <strong style={{ color: S.text }}>USDe</strong> — a dollar-pegged stablecoin backed by a delta-neutral strategy using staked ETH and perpetual futures short positions. Unlike USDC (centralized) or DAI (overcollateralized), USDe uses derivatives to remain dollar-pegged while capturing the funding rate yield paid by long traders.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We maintain relationships with builders across ecosystems. Our coverage reflects boots-on-the-ground knowledge from governance forums and developer Discord channels.
          </p>
        </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Users who stake USDe receive <strong style={{ color: S.text }}>sUSDe</strong> — an interest-bearing token earning 15–30% APY sourced from perpetual futures funding rates and ETH staking rewards. Ethena calls this yield the <strong style={{ color: S.text }}>"Internet Bond."</strong>
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>How the Delta-Neutral Mechanism Works</h2>
          {[
            ["Step 1: User deposits ETH/stETH", "User deposits ETH or staked ETH (stETH, mETH, etc.) as collateral to mint USDe."],
            ["Step 2: Short perp opened", "Ethena opens a short ETH perpetual position on centralized exchanges (Binance, Bybit, OKX) to hedge the ETH price exposure. Net delta = 0."],
            ["Step 3: Yield sources combine", "stETH staking yield (~3–4%) + perpetual funding rates (~12–25% when bullish) = total USDe backing yield."],
            ["Step 4: Stake for sUSDe", "Users stake USDe to receive sUSDe. The exchange rate of sUSDe/USDe increases daily as yield accrues."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>Risk: Negative Funding Rates</h2>
          <div style={{ background: "#f8514920", border: "1px solid #f8514940", borderRadius: 10, padding: "16px 18px" }}>
            <p style={{ color: S.text2, lineHeight: 1.8, margin: 0 }}>
              When crypto markets are bearish, <strong style={{ color: "#f85149" }}>funding rates can go negative</strong> — meaning short positions pay long positions. In this scenario, USDe yield drops or turns negative. Ethena holds a reserve fund to buffer against prolonged negative funding periods. Historically, negative funding lasts weeks, not months. But during a severe bear market, sUSDe APY could drop to near 0%.
            </p>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>sUSDe APY History</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Period", "Avg sUSDe APY", "Market Context"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Q1 2024 (launch)", "27%", "Bull market — high funding rates"],
                  ["Q3 2024", "8%", "Ranging market — moderate rates"],
                  ["Q4 2024", "22%", "Post-election bull rally"],
                  ["Q1 2025", "15%", "Stable bull continuation"],
                  ["2026 YTD", "18%", "Sustained institutional adoption"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 1 ? S.green : S.text2 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $ENA</h2>
          <TradingViewChart symbol="BINANCE:ENAUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Explore Ethena's Internet Bond</p>
          <a href="https://app.ethena.fi" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Ethena App →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/morpho-protocol-defi-lending-innovation-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Morpho Protocol Defi Lending Innovation Guide 2026</a></li>
            <li><a href="/learn/onchain-order-books-clob-dex-trading-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Onchain Order Books Clob Dex Trading Guide 2026</a></li>
            <li><a href="/learn/perpetual-dex-onchain-perps-trading-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Perpetual Dex Onchain Perps Trading Guide 2026</a></li>
            <li><a href="/learn/post-quantum-cryptography-quantum-resistant-crypto-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Post Quantum Cryptography Quantum Resistant Crypto Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/stonfi" style={{ color: "#fb923c", marginRight: "1rem" }}>Stonfi</a>
        
          <a href="/spending/compare/bitpay-vs-coingate" style={{ color: "#fb923c", marginRight: "1rem" }}>Bitpay Vs Coingate</a>
        </nav>
    </main>
  );
}
