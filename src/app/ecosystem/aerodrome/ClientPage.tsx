'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#2563eb", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function AerodromeGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Aerodrome</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>✈️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>ve(3,3) DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Base</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>AMM</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Aerodrome: Base Chain's Liquidity Hub</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>ve(3,3) DEX powering Base ecosystem · +130 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$760M", S.accent],
            ["Daily Volume", "$140M", S.blue],
            ["Token", "$AERO", S.purple],
            ["Chain", "Base", S.green],
            ["Pools", "800+", S.orange],
            ["Rating", "⭐ 4.7", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Aerodrome?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Aerodrome is a fork of Velodrome V2, deployed on <strong style={{ color: S.text }}>Base</strong> (Coinbase's L2). It quickly became Base's #1 DEX by TVL and volume, serving as the primary liquidity layer for the exploding Base ecosystem. Aerodrome uses the same <strong style={{ color: S.text }}>ve(3,3) tokenomic model</strong> — lock AERO for veAERO, vote on emissions, earn trading fees and bribes.
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
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            As Base became the home of Coinbase's onchain activity (cbBTC, cbETH, USDC) and the memecoin supercycle (BRETT, DEGEN, TOSHI), Aerodrome's volumes surged — at peak exceeding $1B daily and generating millions in weekly fees for veAERO holders.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Aerodrome vs Velodrome</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Metric", "Aerodrome (Base)", "Velodrome (Optimism)"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["TVL", "$760M", "$320M"],
                  ["Daily Volume", "$140M", "$85M"],
                  ["Chain", "Base", "Optimism"],
                  ["Ecosystem Focus", "Coinbase users, cbBTC", "OP Stack native"],
                  ["Token", "AERO", "VELO"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 0 ? S.text : S.text2 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $AERO</h2>
          <TradingViewChart symbol="BINANCE:AEROUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Provide liquidity or earn yield on Base</p>
          <a href="https://aerodrome.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Aerodrome →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/fhe-fully-homomorphic-encryption-crypto-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Fhe Fully Homomorphic Encryption Crypto Guide 2026</a></li>
            <li><a href="/learn/grass-protocol-depin-ai-data-network-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Grass Protocol Depin Ai Data Network Guide 2026</a></li>
            <li><a href="/learn/how-to-stake-ethereum-complete-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>How To Stake Ethereum Complete Guide</a></li>
            <li><a href="/learn/initia-interwoven-rollups-modular-ecosystem-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Initia Interwoven Rollups Modular Ecosystem Guide 2026</a></li>
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
          <a href="/ecosystem/morpho" style={{ color: "#fb923c", marginRight: "1rem" }}>Morpho</a>
        
          <a href="/spending/reviews/bitpay-app" style={{ color: "#fb923c", marginRight: "1rem" }}>Bitpay App</a>
        </nav>
    </main>
  );
}
