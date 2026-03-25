'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
import Breadcrumb from "@/components/Breadcrumb";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", teal: "#b6509e", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};
const AAVE_COLOR = "#b6509e";

export default function AaveClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ padding: "16px 24px" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Ecosystem", href: "/ecosystem" }, { label: "Aave" }]} />
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${AAVE_COLOR}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${AAVE_COLOR}40` }}>👻</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${AAVE_COLOR}20`, color: AAVE_COLOR, border: `1px solid ${AAVE_COLOR}40` }}>Lending</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue }}>DeFi</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green }}>Multi-chain</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Aave: Complete Lending & Borrowing Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>The #1 DeFi lending protocol · +150 XP · 14 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL", "$12.8B", AAVE_COLOR], ["Markets", "20+ chains", S.blue], ["Token", "$AAVE", S.purple], ["Flash Loans", "✅ Live", S.green], ["GHO", "Stablecoin", S.yellow], ["Rating", "⭐ 4.9", S.orange]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: AAVE_COLOR }}>What is Aave?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Aave (pronounced "ah-veh," Finnish for "ghost") is the largest decentralized lending and borrowing protocol in DeFi. Users deposit crypto assets to earn interest, or post collateral to borrow other assets at variable or stable interest rates — all governed by smart contracts, no credit checks required.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            In 2026, <strong style={{ color: S.text }}>Aave V3</strong> dominates with E-Mode (efficiency mode for correlated assets like stablecoins), isolation mode for new assets, and cross-chain portals for moving liquidity between L1/L2s. Aave also launched <strong style={{ color: S.text }}>GHO</strong> — its native overcollateralized stablecoin.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: AAVE_COLOR }}>How Lending Works</h2>
          {[
            ["Deposit & Earn", "Deposit ETH, USDC, WBTC, etc. into Aave pools. You receive aTokens (e.g. aUSDC) that automatically accrue interest — 1 aUSDC always = 1 USDC + earned interest."],
            ["Borrow Against Collateral", "Post collateral (e.g. ETH) and borrow other assets up to your Loan-to-Value limit. LTV varies by asset quality."],
            ["Health Factor", "Your Health Factor (HF) must stay above 1.0. HF = Collateral × Liquidation Threshold ÷ Total Borrowed. If HF drops below 1, up to 50% of your position gets liquidated."],
            ["Flash Loans", "Uncollateralized loans that must be borrowed AND repaid within a single transaction block. Used for arbitrage, liquidations, and collateral swaps."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: AAVE_COLOR, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: AAVE_COLOR }}>Current Rates (Example)</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Asset", "Supply APY", "Borrow APY (Variable)", "Max LTV"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[["USDC", "4.2%", "5.8%", "77%"], ["ETH", "1.8%", "2.9%", "80%"], ["WBTC", "0.6%", "1.4%", "70%"], ["DAI", "3.9%", "5.5%", "77%"], ["USDT", "4.4%", "6.1%", "77%"]].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 1 ? S.green : j === 2 ? S.orange : S.text2, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ fontSize: 11, color: S.text2, marginTop: 8 }}>* Rates are dynamic and change based on pool utilization. Check app.aave.com for live rates.</div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: AAVE_COLOR }}>GHO Stablecoin</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            GHO is Aave's native decentralized stablecoin, pegged to USD. Unlike borrowing USDC, minting GHO generates interest income for the Aave DAO — not external lenders. $AAVE stakers get a discount on GHO borrow rates. GHO is used in Aave's liquidity strategies and earns sGHO yield when staked.
          </p>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${AAVE_COLOR}15, ${S.purple}10)`, border: `1px solid ${AAVE_COLOR}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Start earning with Aave</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Aave quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.aave.com" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: AAVE_COLOR, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Open Aave ↗</a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>Take Quiz +150 XP</Link>
          </div>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:AAVEUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
