'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#3fb950",
};

export default function HopGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>Hop Protocol</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#3fb95020`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #3fb95040` }}>🐇</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["L2 Bridge","#3fb95020","#3fb950","#3fb95040"],["Rollup-Native","#58a6ff20","#58a6ff","#58a6ff40"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Hop Protocol: Rollup-to-Rollup Bridge</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+110 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Volume (all)","$3B+","#3fb950"],["Networks","7","#58a6ff"],["Token","$HOP","#bc8cff"],["Bonders","AMMs","#d29922"],["Speed","~1 min","#06b6d4"],["Rating","⭐ 4.4","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Hop Protocol?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Hop Protocol is one of the original rollup-to-rollup bridges, built specifically for the Ethereum L2 ecosystem. It uses a novel <strong style={{ color: S.text }}>hToken (hop token)</strong> system: instead of waiting for Ethereum settlement, Hop uses intermediate AMMs and "bonders" who front liquidity. Users bridge ETH → Arbitrum and immediately receive ETH on Arbitrum — the bonder is reimbursed later when the canonical bridge settles. Hop is optimized for ETH and stablecoins across Optimism, Arbitrum, Polygon, Base, and Gnosis.
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
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>The hToken Model</h2>
          <div style={{ background: S.surface2, border: `1px solid #3fb95030`, borderRadius: 12, padding: 20 }}>
            <p style={{ color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>Every bridged token has a corresponding <strong style={{ color: S.text }}>hToken</strong> on each chain (e.g., hETH, hUSDC). These hTokens are backed 1:1 by canonical assets and trade in Hop's native AMM pools.</p>
            <p style={{ color: S.text2, lineHeight: 1.7 }}>When you bridge ETH from Arbitrum to Optimism: your ETH becomes hETH on Arbitrum → is swapped through the hETH/ETH AMM on Optimism → you receive native ETH. The whole flow takes ~1 minute and costs just a small AMM fee.</p>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Hop</h2>
          {[
            { n: 1, title: "Visit app.hop.exchange", desc: "Select source and destination networks. Hop supports Ethereum, Arbitrum, Optimism, Polygon, Base, Gnosis Chain." },
            { n: 2, title: "Choose token and amount", desc: "ETH, USDC, USDT, DAI, and MATIC are the core supported tokens with deepest liquidity." },
            { n: 3, title: "Bridge in one transaction", desc: "Approve + send in one step. Typical transfer time is 1–3 minutes on L2-to-L2 routes." },
            { n: 4, title: "Provide LP (earn fees)", desc: "Add ETH or stablecoins to Hop AMM pools to earn swap fees from bridging traffic. Staked HOP boosts your rewards." },
          ].map((step) => (
            <div key={step.n} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#3fb95020`, border: `1px solid #3fb95040`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: S.accent, flexShrink: 0 }}>{step.n}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{step.title}</div>
                <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </section>

        <div style={{ background: `linear-gradient(135deg, #3fb95015, #06b6d410)`, border: `1px solid #3fb95030`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge between rollups on Hop Protocol</div>
          <a href="https://app.hop.exchange" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Hop Bridge →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:HOPUSDT" height={420} />
        </section>

      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/privacy-coins-zero-knowledge-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Privacy Coins Zero Knowledge Guide 2026</a></li>
            <li><a href="/learn/real-yield-defi-protocol-revenue-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Real Yield Defi Protocol Revenue Guide 2026</a></li>
            <li><a href="/learn/rwa-real-world-assets-tokenization" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Rwa Real World Assets Tokenization</a></li>
            <li><a href="/learn/sky-protocol-usds-makerdao-rebrand-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Sky Protocol Usds Makerdao Rebrand Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/insurance/reviews/sherlock" style={{ color: "#fb923c", marginRight: "1rem" }}>Sherlock</a>
        </nav>
    </main>
  );
}
