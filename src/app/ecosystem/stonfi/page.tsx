'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", indigo: "#a371f7", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function StonfiGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>STON.fi</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.indigo}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.indigo}40` }}>💎</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.indigo}20`, color: S.indigo, border: `1px solid ${S.indigo}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>TON</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Blockchain</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>STON.fi: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>TON blockchain's primary DEX · +125 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$280M", S.indigo],
            ["Daily Volume", "$65M", S.blue],
            ["Token", "$STON", S.purple],
            ["Chains", "TON", S.green],
            ["Pools", "250+", S.orange],
            ["Rating", "⭐ 4.8", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>What is STON.fi?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            STON.fi is the <strong style={{ color: S.text }}>largest decentralized exchange on the TON blockchain</strong>, a Layer 1 chain optimized for instant peer-to-peer transactions. STON.fi combines a traditional AMM model with TON's unique transaction finality and messaging architecture to provide traders with ultra-fast, low-cost swaps and deep liquidity across 250+ trading pairs.
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
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Built by the STON.fi team, the protocol powers TON's DeFi ecosystem and attracts significant trading volume from millions of TON users. The native <strong style={{ color: S.text }}>$STON</strong> token governs the protocol.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.indigo }}>Key Features</h2>
          {[
            ["Deep Liquidity Pools", "250+ trading pairs with robust liquidity pools ensure minimal slippage"],
            ["TON Integration", "Native TON blockchain integration with instant 5-second finality"],
            ["Rocket Pool System", "Innovative farming mechanisms incentivize early LPs with STON rewards"],
            ["Low Transaction Costs", "TON's efficiency results in near-zero swap costs (~$0.002)"],
            ["Cross-chain Potential", "Native TON L1 with future bridge integrations to other blockchains"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.indigo, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>How to Use STON.fi</h2>
          {[
            ["1. Get TON Tokens", "Obtain TON on major exchanges or use the TON Bridge to transfer from Ethereum"],
            ["2. Set Up Wallet", "Use TonKeeper, TonHub, or Ledger Live → configure TON mainnet"],
            ["3. Visit STON.fi", "Go to app.ston.fi → Connect your TON wallet → approve interactions"],
            ["4. Execute Swap", "Select token pair from 250+ pools, enter swap amount, confirm transaction"],
            ["5. Earn Yield (Optional)", "Provide liquidity to pools and earn STON rewards + trading fees via Rocket Pool"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.indigo, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>STON Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$STON</strong> is STON.fi's governance token. STON holders vote on protocol upgrades, fee distribution, and new LP incentive programs. The protocol's Rocket Pool system distributes governance rewards to active liquidity providers, making STON both a governance and yield-bearing asset.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~6B STON"],
              ["Circulating", "~1.2B STON"],
              ["Governance", "Protocol upgrade voting"],
              ["LP Incentives", "Rocket Pool STON rewards"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>TON Chain Risk:</strong> While established, TON is less widely audited than Ethereum; exercise caution with large amounts.<br/><br/>
              <strong style={{ color: S.orange }}>Liquidity Volatility:</strong> Smaller overall DeFi ecosystem; liquidity can shift quickly between pools.<br/><br/>
              <strong style={{ color: S.orange }}>Smart Contract Risk:</strong> Always verify contract addresses and review audit reports before interacting with new pools.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.indigo}15, ${S.purple}10)`, border: `1px solid ${S.indigo}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Swap on STON.fi</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the STON.fi quiz and earn +125 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.ston.fi" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.indigo, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open STON.fi ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +125 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["DeDust", "TON's second major DEX", "/ecosystem/dedust"],
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.indigo, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
