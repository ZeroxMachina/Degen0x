'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", cyan: "#79c0ff", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function DeDustGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>DeDust</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.cyan}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.cyan}40` }}>✨</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.cyan}20`, color: S.cyan, border: `1px solid ${S.cyan}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>TON</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Alternative</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>DeDust: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>TON's second major DEX with advanced features · +120 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$95M", S.cyan],
            ["Daily Volume", "$28M", S.blue],
            ["Token", "None (Fair Launch)", S.purple],
            ["Chains", "TON", S.green],
            ["Pools", "180+", S.orange],
            ["Rating", "⭐ 4.5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>What is DeDust?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            DeDust is the <strong style={{ color: S.text }}>second-largest DEX on the TON blockchain</strong>, created with a focus on advanced trading features and community governance. While STON.fi dominates by volume, DeDust differentiates itself through lower fees, sophisticated liquidity mechanisms, and a fair-launched token model that prioritizes community participation over insider allocations.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Built entirely on TON's native architecture, DeDust provides an alternative trading venue with 180+ liquidity pools. It appeals to traders seeking lower fees and LPs seeking yield optimization beyond STON.fi's offerings.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.cyan }}>Key Features</h2>
          {[
            ["Lower Swap Fees", "Competitive fee structure (0.15%-0.3%) compared to STON.fi alternatives"],
            ["Advanced Pool Types", "Standard pools + weighted pools for custom token ratios and skewed liquidity"],
            ["Community Fair Launch", "No pre-allocations; governance rewards distributed directly to community"],
            ["High Capital Efficiency", "Optimized routing and smart pool aggregation reduce slippage"],
            ["Mobile-Friendly Interface", "Designed for TON's mobile-first user base via Telegram"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.cyan, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>How to Use DeDust</h2>
          {[
            ["1. Get TON Assets", "Obtain TON or other supported tokens; bridge or trade on major exchanges"],
            ["2. Connect Wallet", "Use TonKeeper, TonHub, or Ledger Live wallets → visit dedust.io"],
            ["3. Browse Pools", "Explore 180+ trading pairs with real-time pricing and liquidity depth"],
            ["4. Execute Swap", "Select from/to tokens, set slippage tolerance, and execute swap (nearly instant)"],
            ["5. Add Liquidity", "Deposit equal values of token pairs to earn 0.25%-0.3% on trading fees"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.cyan, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>Governance & Community Rewards</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            DeDust operates as a fully community-governed protocol with no central token. Instead, governance rights and rewards accrue to liquidity providers and active participants. The protocol distributes fee-sharing benefits directly to LPs, creating a fair-launched, decentralized governance model similar to early DeFi protocols.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Governance", "Community DAO voting"],
              ["Rewards", "LP fee distribution"],
              ["Fee Structure", "0.15%-0.3% swap fees"],
              ["Fair Launch", "No pre-allocations or insider grants"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>TON Chain Risk:</strong> As a newer L1, TON carries execution risk; only use audited, well-tested contracts.<br/><br/>
              <strong style={{ color: S.orange }}>Lower Volume:</strong> DeDust has lower trading volume than STON.fi; larger trades may face higher slippage.<br/><br/>
              <strong style={{ color: S.orange }}>Governance Risk:</strong> Fair-launched protocols can suffer from low governance participation; stay informed on voting.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.cyan}15, ${S.purple}10)`, border: `1px solid ${S.cyan}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Trade on DeDust</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the DeDust quiz and earn +120 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://dedust.io" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.cyan, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open DeDust ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +120 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["STON.fi", "TON's primary DEX", "/ecosystem/stonfi"],
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["JediSwap", "Starknet's AMM DEX", "/ecosystem/jediswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.cyan, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
