'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1",
  green: "#3fb950", blue: "#58a6ff", purple: "#bc8cff",
};

export default function BalancerV3GuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Balancer V3</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#6366f120`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #6366f140` }}>⚖️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#6366f120`, color: S.accent, border: `1px solid #6366f140` }}>AMM</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: S.blue, border: `1px solid #58a6ff40` }}>Multi-Chain</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#bc8cff20`, color: S.purple, border: `1px solid #bc8cff40` }}>DeFi</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Balancer V3: The Programmable Liquidity Network</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+140 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$1.8B", "#6366f1"],
            ["Pools", "500+", "#3fb950"],
            ["Token", "$BAL", "#58a6ff"],
            ["Chains", "10+", "#bc8cff"],
            ["Avg APY", "4–18%", "#d29922"],
            ["Rating", "⭐ 4.6", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Balancer V3?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Balancer V3 is the most flexible AMM infrastructure in DeFi, launched in late 2024. Unlike Uniswap's fixed-curve model, Balancer lets anyone create custom weighted pools with up to 8 tokens in arbitrary ratios — enabling index-like portfolios that auto-rebalance via arbitrage. V3 introduced a revamped vault architecture with <strong style={{ color: S.text }}>hooks</strong> (programmable logic that fires on swaps), <strong style={{ color: S.text }}>boosted pools</strong> (idle capital earns yield from Aave/Morpho), and <strong style={{ color: S.text }}>ERC-4626 support</strong> natively.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Ecosystem strength is the best leading indicator of L1/L2 value. We track developer activity, unique addresses, and TVL growth — not just token price.
          </p>
        </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>V3 Key Innovations</h2>
          {[
            { title: "Hooks Architecture", desc: "Attach custom logic before/after swaps, joins, and exits. Build dynamic fees, MEV capture, KYC pools, or yield strategies directly into pool logic." },
            { title: "Boosted Pools", desc: "Idle liquidity is automatically deposited into yield venues (Aave, Morpho). LPs earn swap fees AND lending yield simultaneously — capital efficiency maximized." },
            { title: "ERC-4626 Native", desc: "Pools can natively wrap yield-bearing tokens. Deposit wstETH, sDAI, or any vault token and the pool handles conversions automatically." },
            { title: "Transient Accounting", desc: "Uses EIP-1153 transient storage for flash loan settlements — gas savings of up to 40% vs V2 on complex multi-hop swaps." },
          ].map((item) => (
            <div key={item.title} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: S.text, marginBottom: 6 }}>{item.title}</div>
              <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{item.desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Balancer V3</h2>
          {[
            { n: 1, title: "Swap Tokens", desc: "Go to app.balancer.fi and connect your wallet. Select input/output tokens. Balancer's Smart Order Router finds the best path across all pools, including multi-hop routes." },
            { n: 2, title: "Add Liquidity", desc: "Choose a pool or create your own. Deposit proportional amounts of each asset. You receive a Balancer Pool Token (BPT) representing your share. Boosted pools start earning yield immediately." },
            { n: 3, title: "Stake for Gauge Rewards", desc: "Deposit BPT into gauges via Aura Finance or Balancer's native staking to earn $BAL emissions + protocol fees. Vote with veBAL to direct more emissions to your pool." },
            { n: 4, title: "Build a Custom Hook Pool", desc: "Developers can deploy a pool with custom hooks. The V3 SDK provides scaffolding for common hook types. Permissionless deployment on all supported chains." },
          ].map((step) => (
            <div key={step.n} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#6366f120`, border: `1px solid #6366f140`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: S.accent, flexShrink: 0 }}>{step.n}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{step.title}</div>
                <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          {[
            ["Smart Contract Risk", "V3 vaults are new. Audited by Certora + Trail of Bits but hook code written by third parties is not audited by Balancer."],
            ["Impermanent Loss", "Multi-asset pools with volatile tokens can suffer significant IL during large market moves."],
            ["Complexity", "Custom pools with hooks add complexity. Non-standard pools may have liquidity fragmentation."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: `#f8514910`, border: `1px solid #f8514930`, borderRadius: 10, padding: 14, marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: "#f85149", marginBottom: 4, fontSize: 14 }}>⚠️ {String(title)}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{String(desc)}</div>
            </div>
          ))}
        </section>

        {/* Live Chart */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>$BAL Live Chart</h2>
          <TradingViewChart symbol="COINBASE:BALUSD" height={380} interval="D" />
        </section>

        <div style={{ background: `linear-gradient(135deg, #6366f115, #06b6d410)`, border: `1px solid #6366f130`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Ready to provide liquidity on Balancer V3?</div>
          <a href="https://app.balancer.fi" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Balancer App →</a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/monad-parallel-evm-layer-1-blockchain-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Monad Parallel Evm Layer 1 Blockchain Guide 2026</a></li>
            <li><a href="/learn/onchain-analytics-blockchain-data-intelligence-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Onchain Analytics Blockchain Data Intelligence Guide 2026</a></li>
            <li><a href="/learn/payfi-crypto-payments-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Payfi Crypto Payments Guide 2026</a></li>
            <li><a href="/learn/polymarket-vs-kalshi-prediction-markets-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Polymarket Vs Kalshi Prediction Markets Guide 2026</a></li>
                      <li><a href="/ecosystem/1inch" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>1inch</a></li>
            <li><a href="/ecosystem/babylon-protocol" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Babylon Protocol</a></li>
                      <li><a href="/ecosystem/balancer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Balancer</a></li>
            <li><a href="/ecosystem/berachain-dex" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Berachain Dex</a></li>
                      <li><a href="/ecosystem/best-projects-on-sei" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Sei</a></li>
            <li><a href="/ecosystem/best-projects-on-sui" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Sui</a></li>
          </ul>
        </nav>
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/socket" style={{ color: "#fb923c", marginRight: "1rem" }}>Socket</a>
        
          <a href="/spending/best/cashback" style={{ color: "#fb923c", marginRight: "1rem" }}>Cashback</a>
        </nav>
    </main>
  );
}
