'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const FLUID_COLOR = "#4facfe";

export default function FluidGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Fluid</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${FLUID_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${FLUID_COLOR}40` }}>💧</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${FLUID_COLOR}20`, color: FLUID_COLOR, border: `1px solid ${FLUID_COLOR}40` }}>DeFi Lending</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green }}>Efficient</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Fluid: Next-Gen Liquidity Protocol Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>By Instadapp Team · +150 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$1.8B", FLUID_COLOR], ["Token", "$FLUID", S.purple], ["Category", "Lending + DEX", S.blue], ["Chain", "Ethereum", S.orange], ["Pools", "Multi-token", S.green], ["Rating", "⭐ 4.6", S.yellow]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: FLUID_COLOR }}>What is Fluid?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Fluid is a next-generation unified liquidity protocol built by the Instadapp team. It merges lending and DEX functionality into a single, capital-efficient pool. Instead of fragmenting liquidity across separate lending pools and AMMs, Fluid uses the same pool for both borrowing/lending and trading — maximizing capital efficiency and minimizing slippage.
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
            The key innovation: <strong style={{ color: S.text }}>unified liquidity layer</strong>. Lenders and traders share the same pool, creating a dynamic ecosystem where lending rates respond to trading demand, and traders benefit from deep, stable liquidity provided by lenders earning yield.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: FLUID_COLOR }}>Key Features</h2>
          {[
            ["Unified Liquidity Layer", "One pool serves lenders and traders. Lenders earn trading fees + lending interest. Traders get deep liquidity with minimal slippage."],
            ["Fluid DEX", "Integrated AMM built on the same liquidity. Swap tokens directly using the unified pool without fragmenting liquidity."],
            ["Smart Collateral", "Earn yield while borrowing. Your collateral works for you — idle collateral is deployed to earn yield from other Fluid positions."],
            ["Vaults", "Managed yield strategies that automatically optimize deposits across Fluid and integrated protocols. Fire-and-forget yields."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: FLUID_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: FLUID_COLOR }}>How to Use Fluid</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 1: Connect Wallet</strong><br/>
            Visit fluid.instadapp.com and connect your Web3 wallet (MetaMask, Ledger, etc.). Approve the necessary permissions.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 2: Choose Lend or Borrow</strong><br/>
            Decide if you're depositing to earn yield (Lend) or posting collateral to borrow (Borrow). Each has its own dashboard.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 3: Select Your Asset</strong><br/>
            Choose which token to supply (USDC, ETH, stETH, etc.). Fluid supports major tokens. Check APY for each asset.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong style={{ color: S.text }}>Step 4: Supply/Borrow at Best Rates</strong><br/>
            Enter the amount, review the rates and fees, and confirm the transaction. Your position updates instantly on the dashboard.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: FLUID_COLOR }}>Risk Management</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "14px 18px" }}>
            <div style={{ fontWeight: 700, color: S.orange, marginBottom: 6, fontSize: 13 }}>⚠️ Key Risks</div>
            <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.8 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Unified pools are complex; audits reduce but don't eliminate risk.<br/>
              <strong style={{ color: S.text }}>Liquidation Risk:</strong> Borrowers must maintain collateral ratios or face liquidation.<br/>
              <strong style={{ color: S.text }}>Liquidity Risk:</strong> In extreme market conditions, withdrawal queues may apply.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${FLUID_COLOR}15, ${S.purple}10)`, border: `1px solid ${FLUID_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Start using Fluid today</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Fluid quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://fluid.instadapp.com" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: FLUID_COLOR, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Fluid ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:FLUIDUSDT" height={420} />
        </section>

      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/raydium" style={{ color: "#fb923c", marginRight: "1rem" }}>Raydium</a>
        
          <a href="/spending/reviews/flexa" style={{ color: "#fb923c", marginRight: "1rem" }}>Flexa</a>
        </nav>
    </main>
  );
}
