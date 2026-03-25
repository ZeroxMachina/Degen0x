'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#16a34a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function JitoClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Jito</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🟩</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>Liquid Staking</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>MEV</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Solana</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Jito: MEV-Boosted SOL Liquid Staking</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>jitoSOL — Solana staking + MEV tips · +130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["SOL Staked", "14.8M SOL", S.accent],
            ["jitoSOL APY", "~8.2%", S.green],
            ["Token", "$JTO", S.purple],
            ["MEV Tips", "~4% boost", S.blue],
            ["Validators", "200+", S.orange],
            ["Rating", "⭐ 4.7", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Jito?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Jito is Solana's leading MEV infrastructure protocol and liquid staking provider. <strong style={{ color: S.text }}>jitoSOL</strong> is a liquid staking token that earns standard SOL staking rewards <em>plus</em> MEV (Maximum Extractable Value) tip revenue — collected by Jito's validator client which over 60% of Solana validators run.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Jito processes <strong style={{ color: S.text }}>tip transactions</strong> — users pay searchers to include their bundles in blocks, and Jito redistributes 3% of those tips to jitoSOL holders. This makes jitoSOL consistently yield 1–4% more than standard SOL staking.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>How jitoSOL Works</h2>
          {[
            ["Stake SOL → Receive jitoSOL", "Deposit SOL and receive jitoSOL at the current exchange rate. 1 jitoSOL starts at ~1 SOL and increases over time as rewards accrue."],
            ["MEV Tips Redistributed", "Jito's block engine runs a Solana validator client. Searchers pay tips to have their transactions bundled atomically. 3% of tips flow to jitoSOL stakers."],
            ["Use in DeFi", "jitoSOL is accepted as collateral in Kamino, Marginfi, and Drift — letting you earn staking yield while also borrowing against your position."],
            ["Unstake Anytime", "Unstake jitoSOL for a small fee (Jito charges 0.1%) or wait 2–3 epochs (4–6 days) for native unstaking."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $JTO</h2>
          <TradingViewChart symbol="BINANCE:JTOUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Stake SOL and earn MEV-boosted rewards</p>
          <a href="https://jito.network" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Stake on Jito →
          </a>
        </div>
      </article>
    </main>
  );
}
