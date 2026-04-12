'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", mint: "#85e89d", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function LiquidswapGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Liquidswap</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.mint}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.mint}40` }}>💧</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.mint}20`, color: S.mint, border: `1px solid ${S.mint}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>Aptos</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>AMM</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Liquidswap: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Aptos' premier AMM DEX by Pontem Network · +130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$36M", S.mint],
            ["Daily Volume", "$4.2M", S.blue],
            ["Token", "$LQUID", S.purple],
            ["Chains", "Aptos", S.green],
            ["Pool Types", "Standard + Stable", S.orange],
            ["Rating", "⭐ 4.4", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.mint }}>What is Liquidswap?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Liquidswap is an <strong style={{ color: S.text }}>automated market maker (AMM) DEX</strong> built by <strong style={{ color: S.text }}>Pontem Network</strong> on the Aptos blockchain. It enables users to swap tokens with minimal slippage using capital-efficient liquidity pools, while liquidity providers earn trading fees by staking their assets. Liquidswap represents Pontem's core DeFi infrastructure on Aptos.
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
            With support for both standard AMM pairs and stable-pair pools, Liquidswap serves diverse trading needs across Aptos' growing token ecosystem. The platform emphasizes composability with other Aptos DeFi protocols and native Move language integration.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.mint }}>Key Features</h2>
          {[
            ["Dual Pool Types", "Standard volatile pair pools + stable-pair pools optimized for stablecoin trading"],
            ["Capital Efficiency", "Concentrated LP incentives and yield farming mechanisms maximize returns"],
            ["Aptos Native", "Built with Move language; leverages Aptos' parallel execution for fast swaps"],
            ["Low Gas Costs", "Aptos transactions cost ~$0.001-0.01; Liquidswap swaps are nearly free"],
            ["LQUID Governance", "Token holders vote on pool creation, fee switches, and incentive programs"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.mint, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.mint }}>How to Use Liquidswap</h2>
          {[
            ["1. Prepare APT", "Obtain APT tokens on exchanges or via Aptos testnet faucet"],
            ["2. Connect Wallet", "Set up Aptos wallet (Petra, Aptos Wallet, or Martian) on Aptos mainnet"],
            ["3. Visit Liquidswap", "Navigate to liquidswap.com → Connect your Aptos wallet"],
            ["4. Select Pool Type", "Choose from standard pairs (volatile) or stable pairs for stablecoin swaps"],
            ["5. Execute Swap or LP", "Swap tokens or deposit liquidity to earn fees + LQUID rewards"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.mint, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.mint }}>LQUID Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$LQUID</strong> is Liquidswap's governance token. Token holders vote on protocol upgrades, fee adjustments, and new pool approvals. LQUID stakers earn a portion of protocol fees and can participate in governance decisions affecting the Liquidswap protocol's evolution.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~1.5B LQUID"],
              ["Circulating", "~0.25B LQUID"],
              ["Governance", "Pool & fee voting"],
              ["Rewards", "Trading fees + LQUID"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.mint }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Aptos Ecosystem Risk:</strong> Aptos is relatively new; exercise caution and verify contract audits before large deposits.<br/><br/>
              <strong style={{ color: S.orange }}>Lower Liquidity:</strong> Smaller DeFi ecosystem compared to Ethereum; expect slippage on large trades.<br/><br/>
              <strong style={{ color: S.orange }}>Impermanent Loss:</strong> LP yields must account for IL in volatile markets; use stable-pair pools when appropriate.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.mint}15, ${S.purple}10)`, border: `1px solid ${S.mint}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Trade on Liquidswap</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Liquidswap quiz and earn +130 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://liquidswap.com" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.mint, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open Liquidswap ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +130 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Thala", "Aptos' DeFi hub with stablecoin", "/ecosystem/thala"],
              ["Cetus", "Sui's concentrated liquidity DEX", "/ecosystem/cetus"],
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.mint, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
