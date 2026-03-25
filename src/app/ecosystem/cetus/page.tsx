'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", sky: "#79c0ff", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function CetusGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Cetus</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.sky}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.sky}40` }}>🐟</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.sky}20`, color: S.sky, border: `1px solid ${S.sky}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>Sui</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Move</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Cetus: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Sui's concentrated liquidity DEX leader · +145 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$98M", S.sky],
            ["Daily Volume", "$22M", S.blue],
            ["Token", "$CETUS", S.purple],
            ["Chains", "Sui", S.green],
            ["Clmm Pools", "Live", S.orange],
            ["Rating", "⭐ 4.7", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.sky }}>What is Cetus?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Cetus is Sui's premier <strong style={{ color: S.text }}>concentrated liquidity market maker</strong> (CLMM) — a DEX powered by the Move programming language that leverages Sui's parallel execution and object-oriented architecture for superior capital efficiency. Cetus introduces concentrated liquidity to Sui users, letting them deploy capital in custom price ranges to maximize fee generation.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Built by Cetus Labs, the protocol combines proven DEX mechanics with Sui's unique design, offering fast settlement, nearly zero-cost swaps, and advanced LP strategies. The native <strong style={{ color: S.text }}>$CETUS</strong> token powers governance and incentives.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.sky }}>Key Features</h2>
          {[
            ["Concentrated Liquidity Market Maker", "CLMM pools allow LPs to set custom price ranges for capital-efficient trading"],
            ["Sui's Parallel Execution", "Move language enables safe parallelization; transaction finality in ~1 second"],
            ["Micro Gas Costs", "Typical Sui transaction: $0.001-0.003; trades on Cetus nearly free"],
            ["Multi-tier Fee Structure", "Flexible fee tiers (0.25%, 0.5%, 1%) optimized for volatile vs. stable pairs"],
            ["CETUS Governance Token", "Holders vote on fee switches, incentive pools, and protocol upgrades"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.sky, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.sky }}>How to Use Cetus</h2>
          {[
            ["1. Get SUI Tokens", "Obtain SUI on Ethereum or other chains, then bridge to Sui via official bridge or Orbiter"],
            ["2. Set Up Sui Wallet", "Use Sui Wallet, Martian, or Ethos → configure Sui mainnet (chainid 0)"],
            ["3. Visit Cetus", "Go to cetus.zone → Connect your Move wallet → approve interactions"],
            ["4. Swap Tokens", "Select token pair and fee tier (0.25%/0.5%/1%), enter amount, confirm swap (microsecond finality)"],
            ["5. Provide Concentrated Liquidity", "Set custom price range and deposit equal values to earn swap fees"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.sky, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.sky }}>CETUS Token & Incentives</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$CETUS</strong> powers Cetus' governance and ecosystem incentives. Token holders vote on protocol decisions like fee switches and reward distributions. Early liquidity providers earn CETUS rewards in addition to trading fees, making Cetus particularly attractive for LPs during bootstrap phases.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~4.2B CETUS"],
              ["Circulating", "~0.7B CETUS"],
              ["Governance", "Fee & reward voting"],
              ["LP Incentives", "CETUS emissions + fees"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.sky }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Sui Ecosystem Risk:</strong> Sui is newer; smart contract risks exist despite audits.<br/><br/>
              <strong style={{ color: S.orange }}>Concentrated Liquidity Risk:</strong> IL amplifies in volatile markets; manage price ranges carefully.<br/><br/>
              <strong style={{ color: S.orange }}>Lower Liquidity Pool:</strong> Sui ecosystem is smaller than Ethereum; slippage risk on large trades.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.sky}15, ${S.purple}10)`, border: `1px solid ${S.sky}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Try Cetus on Sui</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Cetus quiz and earn +145 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://cetus.zone" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.sky, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open Cetus ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +145 XP
            </Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live CETUS Price Chart</h2>
          <TradingViewChart symbol="COINBASE:CETUSUSD" height={420} />
        </section>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Turbos", "Sui DeFi platform", "/ecosystem/turbos"],
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.sky, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
