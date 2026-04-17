'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const INST_COLOR = "#5b7aff";

export default function InstadappGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Instadapp</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${INST_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${INST_COLOR}40` }}>🏛️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${INST_COLOR}20`, color: INST_COLOR, border: `1px solid ${INST_COLOR}40` }}>Aggregator</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>Management</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green }}>Automation</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Instadapp: DeFi Smart Layer Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>All-in-one DeFi management · +150 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$2.1B", INST_COLOR], ["Token", "$INST", S.purple], ["Category", "Aggregator", S.blue], ["Chain", "Multi-chain", S.orange], ["Products", "DSA + Fluid", S.green], ["Rating", "⭐ 4.8", S.yellow]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: INST_COLOR }}>What is Instadapp?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Instadapp is the DeFi Smart Layer — a unified management platform for all your crypto positions. Instead of juggling separate wallets for Aave, Compound, MakerDAO, and others, Instadapp lets you manage everything in one account with automation and one-click refinancing.
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
            Core technology: <strong style={{ color: S.text }}>DeFi Smart Accounts (DSA)</strong>. A DSA is a programmable account that can interact with multiple DeFi protocols simultaneously. You can automate repayments, optimize borrowing rates, and rebalance positions without manual intervention.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: INST_COLOR }}>Key Features</h2>
          {[
            ["DeFi Smart Accounts", "Programmable accounts that interact with Aave, Compound, MakerDAO, Curve, and 50+ other protocols. One account. All protocols."],
            ["1-Click Refinancing", "Switch your debt from Aave to Compound at better rates — in one transaction. Saves gas, saves rates."],
            ["Automated Positions", "Set up automations: auto-repay loans, auto-rebalance collateral, auto-stake rewards. Run DeFi on autopilot."],
            ["Lite & Fluid", "Lite: simplified UI for beginners. Fluid: new next-gen liquidity protocol built by Instadapp."],
            ["INST Governance", "Token holders vote on platform direction, new integrations, and fee structures."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: INST_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: INST_COLOR }}>How to Use Instadapp</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 1: Connect Wallet</strong><br/>
            Visit app.instadapp.io and connect your wallet. No signup needed — just Web3 auth.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 2: Create Smart Account</strong><br/>
            Deploy a DSA (one-time, covered by Instadapp). This becomes your master DeFi account.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 3: Import Existing Positions</strong><br/>
            Move your existing Aave deposits, Compound borrows, or MakerDAO CDPs into your DSA. One-click migration.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 4: Use Refinance or Automation</strong><br/>
            Refinance to better rates. Enable automations. Monitor dashboard. Sit back and let Instadapp optimize.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: INST_COLOR }}>Risk Management</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: S.orange, marginBottom: 6, fontSize: 13 }}>⚠️ Key Risks</div>
            <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.8 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> DSA and automation code audited, but risks remain.<br/>
              <strong style={{ color: S.text }}>Automation Risk:</strong> Automations execute based on on-chain logic; unexpected market moves may trigger undesired actions.<br/>
              <strong style={{ color: S.text }}>Underlying Protocol Risk:</strong> Your positions are still subject to risks of Aave, Compound, MakerDAO, etc.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${INST_COLOR}15, ${S.purple}10)`, border: `1px solid ${INST_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Manage DeFi with Instadapp</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Instadapp quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.instadapp.io" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: INST_COLOR, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Instadapp ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:INSTUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
