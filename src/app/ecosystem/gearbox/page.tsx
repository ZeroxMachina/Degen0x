'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const GEAR_COLOR = "#00d4aa";

export default function GearboxGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Gearbox</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${GEAR_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${GEAR_COLOR}40` }}>⚙️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${GEAR_COLOR}20`, color: GEAR_COLOR, border: `1px solid ${GEAR_COLOR}40` }}>Leverage</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>Credit</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple }}>Composable</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Gearbox: Composable Leverage Protocol Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Credit & Leverage Layer · +150 XP · 13 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$520M", GEAR_COLOR], ["Token", "$GEAR", S.purple], ["Max Leverage", "10x", S.orange], ["Category", "Leverage", S.blue], ["Chains", "ETH + L2s", S.green], ["Rating", "⭐ 4.7", S.yellow]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: GEAR_COLOR }}>What is Gearbox?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Gearbox Protocol is the leading composable leverage protocol. It lets you open a Credit Account (an isolated margin account) with up to 10x leverage, then deploy that leverage across any integrated DeFi protocol — Curve, Uniswap, Convex, Yearn, and more.
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
            The key insight: <strong style={{ color: S.text }}>isolated leverage accounts</strong>. Instead of fragmented margin across protocols, Gearbox provides a single Credit Account that you can use to access leverage from Gearbox's lending pools, then invest it anywhere in DeFi. Lenders earn yield on the borrowed assets; borrowers pay interest but get exponential upside.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: GEAR_COLOR }}>Key Features</h2>
          {[
            ["Credit Accounts", "Personal isolated margin accounts. Only you control your CA; positions are private and not liquidated by others."],
            ["Up to 10x Leverage", "Borrow up to 10x your collateral to amplify returns. Higher leverage = higher risk but massive upside potential."],
            ["Composable", "Use your Credit Account to invest in Curve, Uniswap, Convex, Yearn, and other protocols — all in one account."],
            ["Passive Lending", "Deposit to Gearbox pools and earn lending APY from borrower interest. Lower risk than borrowing."],
            ["GEAR Governance", "GEAR token holders vote on risk parameters, new assets, and protocol upgrades."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: GEAR_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: GEAR_COLOR }}>How to Use Gearbox</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 1: Connect Wallet</strong><br/>
            Visit app.gearbox.fi and connect your wallet. Fund it with ETH or stablecoins (USDC, DAI, USDT).
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 2: Open Credit Account</strong><br/>
            Click "Open Account" and choose your collateral (e.g., USDC). This is your isolated margin account.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 3: Borrow Leverage</strong><br/>
            Select how much leverage you want (up to 10x). Gearbox borrows from lending pools and deposits to your account.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 4: Deploy Into Strategies</strong><br/>
            Use your CA to farm yields in Curve, provide liquidity on Uniswap, stake in Convex, or other DeFi strategies.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: GEAR_COLOR }}>Risk Management</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: S.orange, marginBottom: 6, fontSize: 13 }}>⚠️ Key Risks</div>
            <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.8 }}>
              <strong style={{ color: S.text }}>Leverage Risk:</strong> 10x leverage means a 10% downside wipes out collateral. Monitor health factor closely.<br/>
              <strong style={{ color: S.text }}>Liquidation Risk:</strong> If health factor drops below 1, your CA is liquidated — you lose your position.<br/>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Despite audits, protocol bugs are possible.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${GEAR_COLOR}15, ${S.purple}10)`, border: `1px solid ${GEAR_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Start leveraging with Gearbox</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Gearbox quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.gearbox.fi" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: GEAR_COLOR, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Gearbox ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:GEARUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
