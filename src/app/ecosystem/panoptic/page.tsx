'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const PNTK_COLOR = "#ff6b35";

export default function PanopticGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Panoptic</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${PNTK_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${PNTK_COLOR}40` }}>📊</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${PNTK_COLOR}20`, color: PNTK_COLOR, border: `1px solid ${PNTK_COLOR}40` }}>Options</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>Derivatives</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.orange}20`, color: S.orange }}>On-chain</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Panoptic: Perpetual Options Protocol Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>First on-chain perpetual options · +150 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$45M", PNTK_COLOR], ["Token", "$PNTK", S.purple], ["Category", "Options", S.blue], ["Type", "Perpetual", S.orange], ["Basis", "Uniswap V3", S.green], ["Rating", "⭐ 4.5", S.yellow]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: PNTK_COLOR }}>What is Panoptic?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Panoptic is the first perpetual options protocol built directly on top of Uniswap V3. It enables truly decentralized, oracle-free options trading with no expiry dates and no counterparties. Options are synthetic and backed by the underlying Uniswap V3 liquidity.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Key innovation: <strong style={{ color: S.text }}>LP positions as options</strong>. Instead of traditional options desks, Panoptic lets you convert Uniswap V3 LP positions into panoptions (perpetual put/call options). No oracle manipulation, no counterparty risk — just pure on-chain mechanics.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: PNTK_COLOR }}>Key Features</h2>
          {[
            ["Perpetual (No Expiry)", "Options never expire. Hold as long as needed. No need to roll positions every month like traditional options."],
            ["Oracle-Free Pricing", "Prices derived from Uniswap V3's concentrated liquidity, not external oracles. Eliminates oracle manipulation attacks."],
            ["Panoptions", "Synthetic options created from LP positions. Buy puts/calls backed by Uniswap V3 liquidity pools."],
            ["Capital Efficiency", "Use up to 5x leverage on options. Better capital efficiency than traditional options markets."],
            ["Multi-pool Support", "Trade options on any Uniswap V3 pair. Start with major pairs: ETH/USDC, USDC/USDT, etc."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: PNTK_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: PNTK_COLOR }}>How to Trade on Panoptic</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 1: Connect Wallet</strong><br/>
            Visit panoptic.xyz and connect your wallet. Fund it with capital and approve token contracts.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 2: Select Pool</strong><br/>
            Choose a Uniswap V3 pool (e.g., ETH/USDC). Panoptic creates options on real V3 liquidity.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 3: Choose Option Type</strong><br/>
            Decide between put (bearish) or call (bullish) options. Set your strike price and range.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 4: Buy & Monitor</strong><br/>
            Execute the trade, monitor Greeks (delta, gamma, theta), adjust position if needed. No expiry — hold indefinitely.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: PNTK_COLOR }}>Risk Management</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: S.orange, marginBottom: 6, fontSize: 13 }}>⚠️ Key Risks</div>
            <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.8 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> New protocol; even audited code carries risk.<br/>
              <strong style={{ color: S.text }}>Leverage Risk:</strong> Up to 5x leverage can amplify losses. Liquidations possible.<br/>
              <strong style={{ color: S.text }}>Liquidity Risk:</strong> Underlying Uniswap pools may face slippage in extreme volatility.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${PNTK_COLOR}15, ${S.purple}10)`, border: `1px solid ${PNTK_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Trade options on Panoptic</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Panoptic quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://panoptic.xyz" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: PNTK_COLOR, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Panoptic ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:ETHUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
