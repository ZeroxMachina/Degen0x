'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#2563eb", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function RaydiumGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Raydium</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>⚡</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>AMM</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Solana</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Launchpad</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Raydium: Solana's Core AMM & Launchpad</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Memecoin launchpad powerhouse · +130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$1.2B", S.accent],
            ["Daily Volume", "$900M", S.blue],
            ["Token", "$RAY", S.purple],
            ["Chain", "Solana", S.green],
            ["Pools", "5,000+", S.orange],
            ["Rating", "⭐ 4.6", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Raydium?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Raydium is the dominant AMM and liquidity hub on Solana. Unlike standard AMMs, Raydium's pools share liquidity with Solana's OpenBook (formerly Serum) central limit order book, enabling tighter spreads and better execution. Raydium powers the majority of memecoin launches on Solana through its <strong style={{ color: S.text }}>LaunchLab</strong> integration with pump.fun.
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
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Pool Types</h2>
          {[
            ["Standard AMM (AMM v4)", "Classic x*y=k constant-product pools. Liquidity is spread across all price ranges. Best for long-tail tokens."],
            ["Concentrated Liquidity (CLMM)", "Raydium's answer to Uniswap V3. LPs concentrate capital in specific price ranges for 10–100× capital efficiency. Earns higher fees but requires active management."],
            ["CPMM (Constant Product Market Maker)", "Simplified pool format used for new token launches — no OpenBook integration needed. Used by pump.fun to graduate memecoins onto Raydium."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $RAY</h2>
          <TradingViewChart symbol="BINANCE:RAYUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Trade and provide liquidity on Raydium</p>
          <a href="https://raydium.io" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Raydium →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/crypto-options-onchain-derivatives-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Options Onchain Derivatives Guide 2026</a></li>
            <li><a href="/learn/crypto-portfolio-construction-position-sizing-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Portfolio Construction Position Sizing Guide 2026</a></li>
            <li><a href="/learn/crypto-staking-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Staking Guide 2026</a></li>
            <li><a href="/learn/dao-governance-onchain-voting-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Dao Governance Onchain Voting Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
