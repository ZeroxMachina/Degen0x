'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#e11d48", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function VelodromeGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Velodrome</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🏎️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>ve(3,3) DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Optimism</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>AMM</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Velodrome: Optimism's Liquidity Backbone</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>ve(3,3) model AMM · +130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$320M", S.accent],
            ["Daily Volume", "$85M", S.blue],
            ["Token", "$VELO", S.purple],
            ["Chain", "Optimism", S.green],
            ["Pools", "600+", S.orange],
            ["Rating", "⭐ 4.5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Velodrome?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Velodrome is the central liquidity layer for the Optimism ecosystem, built on the <strong style={{ color: S.text }}>ve(3,3) tokenomic model</strong> pioneered by Andre Cronje. It combines an AMM (for swaps) with a governance system where <strong style={{ color: S.text }}>veVELO</strong> holders vote weekly to direct VELO emissions to pools — incentivizing deep liquidity for any protocol willing to bribe voters.
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
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>ve(3,3) Explained</h2>
          {[
            ["Lock VELO → veVELO", "Lock VELO tokens for up to 4 years to receive veVELO (vote-escrow VELO). Longer lock = more voting power."],
            ["Vote on Pool Emissions", "Weekly, veVELO holders vote on which liquidity pools receive VELO emissions. Pools with more votes attract more liquidity."],
            ["Earn Bribes + Fees", "Protocols wanting liquidity in their pools 'bribe' veVELO voters with tokens. Voters also earn 100% of swap fees from voted pools."],
            ["Game Theory: (3,3)", "The model rewards locking and voting (cooperative behavior) while penalizing selling, creating a self-reinforcing flywheel."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $VELO</h2>
          <TradingViewChart symbol="BINANCE:VELOUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Explore Velodrome on Optimism</p>
          <a href="https://velodrome.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Velodrome →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/crypto-rug-pull-how-to-avoid" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Rug Pull How To Avoid</a></li>
            <li><a href="/learn/crypto-yield-aggregators-vaults-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Yield Aggregators Vaults Guide 2026</a></li>
            <li><a href="/learn/decentralized-identity-did-verifiable-credentials-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Decentralized Identity Did Verifiable Credentials Guide 2026</a></li>
            <li><a href="/learn/defi-insurance-risk-protection-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Insurance Risk Protection Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/hop" style={{ color: "#fb923c", marginRight: "1rem" }}>Hop</a>
        
          <a href="/spending/reviews/crypto-com-pay" style={{ color: "#fb923c", marginRight: "1rem" }}>Crypto Com Pay</a>
        </nav>
    </main>
  );
}
