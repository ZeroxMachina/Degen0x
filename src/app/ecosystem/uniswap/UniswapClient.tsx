'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";
import Breadcrumb from "@/components/Breadcrumb";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function UniswapClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ padding: "16px 24px" }}>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Ecosystem", href: "/ecosystem" }, { label: "Uniswap" }]} />
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 64, height: 64, background: `${S.pink}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.pink}40` }}>🦄</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.pink}20`, color: S.pink, border: `1px solid ${S.pink}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Ethereum</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Multi-chain</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Uniswap: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>The world's largest DEX · +150 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$6.2B", S.pink],
            ["Daily Volume", "$1.4B", S.blue],
            ["Token", "$UNI", S.purple],
            ["Chains", "12+", S.green],
            ["V4 Hooks", "Live", S.orange],
            ["Rating", "⭐ 4.8", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.pink }}>What is Uniswap?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Uniswap is the world's largest decentralized exchange (DEX), allowing anyone to swap ERC-20 tokens without a centralized intermediary. Launched in 2018 by Hayden Adams, it pioneered the <strong style={{ color: S.text }}>Automated Market Maker (AMM)</strong> model — replacing traditional order books with liquidity pools governed by a simple constant-product formula: <code style={{ background: S.surface2, padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>x × y = k</code>.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            In 2026, Uniswap V4 is the dominant version, introducing <strong style={{ color: S.text }}>hooks</strong> — custom smart contract callbacks that fire before/after swaps, allowing developers to build MEV protection, limit orders, dynamic fees, and custom oracles directly into liquidity pools.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.pink }}>Version History</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Version", "Year", "Key Innovation", "Status"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["V1", "2018", "First AMM on Ethereum, ETH-token pairs only", "Legacy"],
                  ["V2", "2020", "ERC-20/ERC-20 pairs, flash swaps, TWAP oracle", "Active"],
                  ["V3", "2021", "Concentrated liquidity, multiple fee tiers (0.05%/0.3%/1%)", "Primary"],
                  ["V4", "2024", "Hooks, singleton architecture, native ETH pairs, gas -99%", "Latest ✅"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 3 && cell.includes("✅") ? S.green : S.text2, fontWeight: j === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.pink }}>How to Use Uniswap</h2>
          {[
            ["1. Connect Wallet", "Go to app.uniswap.org → click Connect → choose MetaMask, WalletConnect, or Coinbase Wallet."],
            ["2. Select Network", "Choose Ethereum, Arbitrum, Base, Optimism, Polygon, or BNB Chain from the top-right dropdown."],
            ["3. Pick Tokens", "Select the token you're selling (From) and the token you want (To). Uniswap auto-routes through the best path."],
            ["4. Review & Swap", "Check the price impact, slippage tolerance, and gas estimate. Click Swap, then confirm in your wallet."],
            ["5. Provide Liquidity", "Switch to the Pool tab to provide liquidity. In V3/V4, set a custom price range for concentrated liquidity."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.pink, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.pink }}>UNI Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            The <strong style={{ color: S.text }}>$UNI</strong> token governs the Uniswap Protocol. Token holders vote on protocol upgrades, fee switch activation, treasury allocation, and grant distributions. As of 2026, the "fee switch" — directing a portion of swap fees to $UNI stakers — has been activated on select pools, making UNI a yield-bearing governance token.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "1,000,000,000 UNI"],
              ["Circulating", "~758M UNI"],
              ["Treasury", "~43% (Uniswap DAO)"],
              ["Fee Model", "0.05% / 0.3% / 1%"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.pink }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Impermanent Loss (IL):</strong> When you provide liquidity, price divergence between the two tokens can result in lower value vs. just holding. IL is more severe in concentrated V3/V4 ranges.<br/><br/>
              <strong style={{ color: S.orange }}>MEV / Sandwich Attacks:</strong> Bots can front-run your trades. Use slippage protection and consider private mempools (Flashbots Protect).<br/><br/>
              <strong style={{ color: S.orange }}>Smart Contract Risk:</strong> Despite audits, smart contract bugs are possible. Use only official app.uniswap.org and verify contract addresses.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.pink}15, ${S.purple}10)`, border: `1px solid ${S.pink}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Ready to try Uniswap?</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Uniswap quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.uniswap.org" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.pink, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open Uniswap ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +150 XP
            </Link>
          </div>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:UNIUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
