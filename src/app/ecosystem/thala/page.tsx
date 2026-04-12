'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", teal: "#56d4d4", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function ThalaGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Thala</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.teal}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.teal}40` }}>🌊</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.teal}20`, color: S.teal, border: `1px solid ${S.teal}40` }}>DeFi Hub</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>Aptos</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Stablecoin</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Thala: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Aptos' comprehensive DeFi hub with stablecoin · +135 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$42M", S.teal],
            ["Daily Volume", "$5.8M", S.blue],
            ["Token", "$THALA", S.purple],
            ["Chains", "Aptos", S.green],
            ["Stablecoin", "thUSD", S.orange],
            ["Rating", "⭐ 4.5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.teal }}>What is Thala?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Thala is <strong style={{ color: S.text }}>Aptos' premier DeFi hub</strong> — a comprehensive protocol offering decentralized trading, staking, and the <strong style={{ color: S.text }}>thUSD stablecoin</strong>. Built natively on Aptos' Move VM, Thala combines the efficiency of parallel execution with advanced DeFi primitives to provide fast, cheap, and composable financial services.
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
            Thala's ecosystem includes an AMM DEX, a stablecoin protocol, and various yield farming mechanisms. It serves as the central hub for Aptos DeFi, much like Uniswap does for Ethereum or Thale does for other chains.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.teal }}>Key Features</h2>
          {[
            ["thUSD Stablecoin", "Over-collateralized stablecoin enabling stable trading and lending without centralized intermediaries"],
            ["Composable AMM", "Trade tokens with MEV-resistant routing and concentrate liquidity options"],
            ["Parallel Execution", "Aptos' parallel VM processes transactions concurrently; near-zero confirmation time"],
            ["Governance via THALA", "Token holders vote on protocol upgrades, fee switches, and collateral parameters"],
            ["Yield Farming", "Earn THALA rewards + trading fees by providing liquidity or staking"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.teal, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.teal }}>How to Use Thala</h2>
          {[
            ["1. Get APT Tokens", "Obtain APT on exchanges or via the Aptos faucet; bridge from other chains if needed"],
            ["2. Set Up Aptos Wallet", "Use Petra, Aptos Wallet, or Martian → configure Aptos mainnet"],
            ["3. Visit Thala Protocol", "Navigate to thala.fi → Connect your Aptos wallet"],
            ["4. Swap or Trade", "Trade tokens on Thala's AMM with minimal gas costs (~$0.001-0.01)"],
            ["5. Mint thUSD (Optional)", "Deposit APT as collateral to mint thUSD stablecoin for stable trading"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.teal, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.teal }}>THALA Token & thUSD Stablecoin</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$THALA</strong> is the governance token enabling holders to vote on protocol updates and fee distribution. <strong style={{ color: S.text }}>thUSD</strong> is the over-collateralized stablecoin minted by depositing APT (or other approved collateral). Stakers and LPs earn THALA rewards and protocol fees.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["THALA Supply", "~1B THALA"],
              ["thUSD Collateral", "APT + others"],
              ["Collateral Ratio", "120%+ min"],
              ["Staking Rewards", "THALA + fees"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.teal }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Aptos Ecosystem Risk:</strong> Aptos is newer than Ethereum; remain cautious with large amounts despite move language safety.<br/><br/>
              <strong style={{ color: S.orange }}>Collateral Risk for thUSD:</strong> Stablecoin minting requires APT collateral; price drops could trigger liquidations.<br/><br/>
              <strong style={{ color: S.orange }}>Lower Liquidity:</strong> Aptos ecosystem has lower TVL; large trades may face slippage.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.teal}15, ${S.purple}10)`, border: `1px solid ${S.teal}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Explore Thala on Aptos</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Thala quiz and earn +135 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://thala.fi" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.teal, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open Thala ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +135 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Liquidswap", "Aptos AMM by Pontem", "/ecosystem/liquidswap"],
              ["Cetus", "Sui's concentrated liquidity DEX", "/ecosystem/cetus"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.teal, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
