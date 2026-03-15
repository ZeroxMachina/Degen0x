'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const SOMM_COLOR = "#7c3aed";

export default function SommelierGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Sommelier</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${SOMM_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${SOMM_COLOR}40` }}>🍷</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${SOMM_COLOR}20`, color: SOMM_COLOR, border: `1px solid ${SOMM_COLOR}40` }}>Yield Vaults</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>Automation</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green }}>Real Yield</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Sommelier Finance: Automated DeFi Vaults Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Smart vaults for passive yields · +150 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$180M", SOMM_COLOR], ["Token", "$SOMM", S.purple], ["Category", "Yield Vaults", S.blue], ["Networks", "ETH + Arbitrum", S.orange], ["Vaults", "20+ Strategies", S.green], ["Rating", "⭐ 4.6", S.yellow]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: SOMM_COLOR }}>What is Sommelier?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Sommelier Finance is a vault platform where professional strategists run automated strategies that continuously optimize yields across DeFi. Instead of manually farming, trading, or rebalancing — you deposit once and let AI-driven Cellar contracts (vaults) compound your returns.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Core innovation: <strong style={{ color: S.text }}>strategist-managed vaults</strong>. Sommelier vaults are smart contracts that execute complex strategies automatically: multi-protocol yield farming, leverage management, rebalancing, and hedging — all designed to generate sustainable, real yields (not just inflated farming APYs).
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: SOMM_COLOR }}>Key Features</h2>
          {[
            ["Strategist-Managed", "Professional strategists continuously optimize vaults. They adjust positions, rebalance, and execute strategies based on market conditions."],
            ["Real Yield Vaults", "stETH/ETH, USDC, USDT and other vaults focus on sustainable yields, not token inflation. Earn real returns."],
            ["Cross-Chain", "Deploy on Ethereum and Arbitrum. Sommelier vaults can bridge liquidity and optimize across networks."],
            ["Cellar Contracts", "Each vault is a Cellar — a smart contract that encodes the strategy. Users deposit and let the Cellar rebalance automatically."],
            ["SOMM Governance", "Token holders vote on vault approvals, fee structures, and protocol upgrades."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: SOMM_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: SOMM_COLOR }}>How to Use Sommelier</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 1: Connect Wallet</strong><br/>
            Visit app.sommelier.finance and connect your wallet. Have ETH, USDC, or other vault assets ready.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 2: Browse Vaults by Strategy</strong><br/>
            Explore available Cellars: Real Yield ETH, stETH/ETH farming, USDC yield, etc. Each vault shows its strategy, current APY, and risk profile.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 3: Review APY + Risk</strong><br/>
            Check the vault's historical APY, AUM (assets under management), strategist track record, and smart contract audits.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 4: Deposit & Track</strong><br/>
            Deposit your assets. The Cellar automatically rebalances, compounds yields, and adjusts strategies. Monitor via the dashboard.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: SOMM_COLOR }}>Risk Management</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: S.orange, marginBottom: 6, fontSize: 13 }}>⚠️ Key Risks</div>
            <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.8 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Cellars are audited, but bugs in strategies or integrations are possible.<br/>
              <strong style={{ color: S.text }}>Strategist Risk:</strong> Strategies rely on strategist execution. Poor decisions or unexpected market moves can reduce returns.<br/>
              <strong style={{ color: S.text }}>Protocol Risk:</strong> Vaults integrate with multiple DeFi protocols (Uniswap, Aave, Yearn, etc.) — all carry underlying risks.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${SOMM_COLOR}15, ${S.purple}10)`, border: `1px solid ${SOMM_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn yield with Sommelier</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Sommelier quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.sommelier.finance" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: SOMM_COLOR, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Sommelier ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:ETHUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
