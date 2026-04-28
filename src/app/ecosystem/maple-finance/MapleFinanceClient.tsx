'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#10b981", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function MapleFinanceClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Maple Finance</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🍁</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>Institutional Lending</span>
              <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>DeFi Credit</span>
              <span style={{ fontSize: 12, fontWeight: 700, padding: "4px 10px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Yield</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Maple Finance: Institutional On-Chain Credit</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>DeFi lending for institutions · $3.2B TVL · ~4.7% syrupUSDC APY · Updated March 2026</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$3.2B", S.accent],
            ["Active Loans", "~$2.4B", S.green],
            ["Token", "$SYRUP", S.purple],
            ["syrupUSDC APY", "~4.7%", S.blue],
            ["Chains", "ETH · SOL · BNB", S.orange],
            ["Rating", "4.3 / 5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* What is Maple Finance */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Maple Finance?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Maple Finance is a <strong style={{ color: S.text }}>decentralized institutional credit marketplace</strong> that connects institutional borrowers with on-chain lenders. Unlike overcollateralized lending protocols like Aave or Compound, Maple specializes in <strong style={{ color: S.text }}>undercollateralized and credit-based loans</strong> — meaning borrowers can access capital based on their creditworthiness rather than locking up more collateral than they borrow.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Think of Maple as the on-chain equivalent of an institutional lending desk. Crypto-native firms — market makers, trading firms, and protocol treasuries — borrow through Maple, while lenders earn <strong style={{ color: S.text }}>real yield from real lending activity</strong>, not unsustainable token emissions. Outstanding loans grew 8x from $181M to $1.5B in 2025, making Maple one of the fastest-growing protocols in DeFi.
          </p>
        </section>

        {/* How Maple Works */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>How Maple Works</h2>
          {[
            ["1. Lending Pools", "Maple operates permissioned lending pools managed by Pool Delegates — experienced credit professionals who assess borrower risk and set loan terms. Each pool targets different risk/return profiles."],
            ["2. Borrowers Apply", "Institutional borrowers (market makers, trading firms, DAOs) apply for loans. Pool Delegates conduct credit analysis — reviewing financials, track records, and collateral where applicable."],
            ["3. Lenders Deposit", "Lenders deposit USDC into pools and receive pool tokens representing their share. Yield comes from the interest paid by borrowers, not from token inflation."],
            ["4. Syrup.fi (Retail Access)", "Syrup.fi is Maple's retail-facing product. Deposit USDC to receive syrupUSDC — a yield-bearing stablecoin earning ~4.7% APY from institutional lending activity. One-click access to institutional-grade yield."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        {/* SYRUP Token */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>The SYRUP Token</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            In late 2024, Maple migrated from the legacy <strong style={{ color: S.text }}>MPL</strong> token to <strong style={{ color: S.text }}>SYRUP</strong> at a 1:100 ratio (1 MPL = 100 SYRUP, no dilution). SYRUP governs both the Maple lending platform and Syrup.fi.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Feature", "Detail"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Token", "SYRUP (migrated from MPL)"],
                  ["Conversion", "1 MPL = 100 SYRUP"],
                  ["Current Price", "~$0.27 (March 2026)"],
                  ["Governance", "Protocol parameters, pool delegate approval"],
                  ["Staking", "Stake SYRUP to earn protocol fee revenue"],
                  ["Buyback", "Fee revenue used for SYRUP buybacks → staker rewards"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    <td style={{ padding: "10px 12px", color: S.text, fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: "10px 12px", color: S.text2 }}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Growth Metrics */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Growth Trajectory</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Period", "Outstanding Loans", "Key Milestone"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Early 2024", "$181M", "Post-bear rebuild, v2 pools live"],
                  ["Late 2024", "$600M", "Syrup.fi launch, SYRUP migration"],
                  ["Mid 2025", "$1.5B", "8x growth, Coinbase integration"],
                  ["Q1 2026", "$2.4B active", "Multi-chain expansion (SOL, BNB)"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 1 ? S.green : S.text2 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Risk Section */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>Risks to Understand</h2>
          <div style={{ background: "#f8514920", border: "1px solid #f8514940", borderRadius: 10, padding: "16px 18px", marginBottom: 14 }}>
            <p style={{ color: S.text2, lineHeight: 1.8, margin: 0, marginBottom: 10 }}>
              <strong style={{ color: "#f85149" }}>Credit Risk:</strong> Maple&apos;s core model involves undercollateralized lending. If a borrower defaults, lenders could lose some or all of their deposited capital. Maple experienced defaults during the 2022 bear market (Orthogonal Trading, Auros). Since then, Maple v2 introduced stricter credit standards and improved transparency.
            </p>
            <p style={{ color: S.text2, lineHeight: 1.8, margin: 0, marginBottom: 10 }}>
              <strong style={{ color: "#f85149" }}>Liquidity Risk:</strong> Loans have fixed terms (typically 30-90 days). Lenders may not be able to withdraw immediately if all capital is deployed. Syrup.fi has withdrawal queues to manage this.
            </p>
            <p style={{ color: S.text2, lineHeight: 1.8, margin: 0 }}>
              <strong style={{ color: "#f85149" }}>Concentration Risk:</strong> Maple&apos;s borrower base is primarily crypto-native firms. A broad crypto market downturn could stress multiple borrowers simultaneously.
            </p>
          </div>
        </section>

        {/* Competitive Landscape */}
        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Competitive Landscape</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Protocol", "Focus", "Loan Type", "Target Borrowers"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Maple Finance", "Institutional credit", "Under/uncollateralized", "Market makers, trading firms"],
                  ["Goldfinch", "Emerging market credit", "Undercollateralized", "Real-world businesses, credit funds"],
                  ["Centrifuge", "RWA infrastructure", "Asset-backed", "Asset originators, fintechs"],
                  ["Clearpool", "Permissioned pools", "Undercollateralized", "Institutions, market makers"],
                  ["Aave / Compound", "DeFi lending", "Overcollateralized", "Anyone (permissionless)"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 0 ? S.text : S.text2, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Live Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $SYRUP</h2>
          <TradingViewChart symbol="BYBIT:SYRUPUSDT" height={420} />
        </section>

        {/* CTA */}
        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center", marginBottom: 36 }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Start earning institutional yield with Maple</p>
          <a href="https://syrup.fi" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "12px 32px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Syrup.fi →
          </a>
        </div>

        {/* Related */}
        <section>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 14, color: S.text2 }}>Related Guides</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              ["/learn/onchain-institutional-credit-guide", "On-Chain Institutional Credit Markets Guide 2026"],
              ["/learn/stablecoin-yield-strategies-2026", "Stablecoin Yield Strategies 2026: Earn 4-20% APY"],
              ["/ecosystem/ethena", "Ethena: USDe — The Internet Bond"],
              ["/ecosystem/morpho", "Morpho: Optimized DeFi Lending"],
              ["/learn/defi-lending-guide", "DeFi Lending & Borrowing: Complete Guide"],
            ].map(([href, title]) => (
              <Link key={href} href={href} style={{ display: "block", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "12px 16px", color: S.blue, textDecoration: "none", fontSize: 14 }}>
                {title} →
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ marginTop: 40, padding: "14px 18px", background: "#d2992215", border: "1px solid #d2992240", borderRadius: 10, fontSize: 12, color: S.text2, lineHeight: 1.7 }}>
          This guide is for informational purposes only. It is not financial advice. Maple Finance involves credit risk — borrower defaults can result in loss of deposited capital. Always do your own research before making investment decisions.
        </div>
      </article>
    </main>
  );
}
