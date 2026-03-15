'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#0891b2", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function OndoGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Ondo Finance</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🏛️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>RWA</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Tokenized T-Bills</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Institutional</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Ondo Finance: Bringing T-Bills On-Chain</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Real-World Assets meet DeFi · +140 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["AUM", "$2.8B", S.accent],
            ["OUSG Yield", "~4.7%", S.green],
            ["Token", "$ONDO", S.purple],
            ["Chain", "Multi-chain", S.blue],
            ["Backing", "US T-Bills", S.orange],
            ["Rating", "⭐ 4.6", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Ondo Finance?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Ondo Finance is the leading <strong style={{ color: S.text }}>Real-World Asset (RWA)</strong> protocol, tokenizing US Treasury bills and money market funds on blockchain. This allows crypto-native investors and DAOs to hold yield-bearing, dollar-denominated assets without leaving on-chain rails.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Ondo's flagship products — <strong style={{ color: S.text }}>OUSG</strong> (short-term US Treasuries) and <strong style={{ color: S.text }}>USDY</strong> (yield-bearing stablecoin) — have attracted over $2.8B in AUM, making Ondo the largest tokenized Treasury protocol. BlackRock's BUIDL fund is a core backing asset.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Products</h2>
          {[
            ["OUSG — Ondo US Government Bond Fund", "Tokenized short-term US Treasuries. KYC-required. Yield ~4.7% APY. Minimum $100K. Primarily institutional. Backed by BlackRock's BUIDL."],
            ["USDY — US Dollar Yield", "Permissionless yield-bearing stablecoin. Backed by US Treasuries. Available without KYC for non-US users. ~4.5% APY built into token appreciation."],
            ["ONDO Chain (upcoming)", "A dedicated L1 blockchain purpose-built for RWA settlement, with built-in compliance tools, KYC oracle integration, and institutional custody bridges."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>Why RWAs Matter</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              ["Risk-Free Yield", "T-Bill rates (~4.5%) now available on-chain without stablecoin depeg risk."],
              ["DAO Treasuries", "DAOs can hold productive assets (OUSG) instead of idle USDC, improving treasury efficiency."],
              ["Capital Efficiency", "USDY can be used as DeFi collateral while earning Treasury yield simultaneously."],
              ["Institutional Bridge", "Tokenized RWAs bring TradFi capital into DeFi infrastructure for the first time at scale."],
            ].map(([title, desc]) => (
              <div key={String(title)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontWeight: 700, color: S.accent, fontSize: 12, marginBottom: 4 }}>{title}</div>
                <div style={{ color: S.text2, fontSize: 12, lineHeight: 1.5 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $ONDO</h2>
          <TradingViewChart symbol="BINANCE:ONDOUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Start earning T-Bill yields on-chain</p>
          <a href="https://ondo.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Explore Ondo →
          </a>
        </div>
      </article>
    </main>
  );
}
