'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#16a34a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function JupiterGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Jupiter</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🪐</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>DEX Aggregator</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Solana</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Perps</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Jupiter: Solana's #1 DEX Aggregator</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Best-price swaps on Solana · +140 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Daily Volume", "$2.1B", S.accent],
            ["Routes", "40+ DEXes", S.blue],
            ["Token", "$JUP", S.purple],
            ["Chain", "Solana", S.green],
            ["Perps TVL", "$180M", S.orange],
            ["Rating", "⭐ 4.8", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Jupiter?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Jupiter is the leading DEX aggregator on Solana, routing swaps across 40+ liquidity sources to guarantee the best possible price. Rather than trading on a single AMM, Jupiter splits orders across Raydium, Orca, Phoenix, and dozens of other venues simultaneously — giving users optimal execution with minimal slippage.
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
            Beyond swaps, Jupiter has expanded into a full DeFi suite: <strong style={{ color: S.text }}>Jupiter Perps</strong> (decentralized perpetual futures), <strong style={{ color: S.text }}>JLP</strong> (liquidity pool for perps traders), <strong style={{ color: S.text }}>DCA</strong> (dollar-cost averaging automation), and <strong style={{ color: S.text }}>Limit Orders</strong>.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Core Products</h2>
          {[
            ["Swap Aggregator", "Routes across 40+ Solana DEXes. Smart Order Routing splits trades across multiple pools to minimize price impact. Zero extra fees — only native DEX fees apply."],
            ["Jupiter Perps", "Up to 100× leverage on SOL, BTC, ETH, and more. Backed by the JLP pool, which earns 70% of all perps fees. No order book — oracle-based pricing."],
            ["DCA (Dollar-Cost Averaging)", "Automate recurring purchases of any SPL token on a custom schedule. Perfect for accumulating SOL or memecoins over time without market-timing."],
            ["Limit Orders", "Set target prices for token swaps. Orders execute automatically when on-chain price hits your target — no centralized infrastructure required."],
            ["Jupiter Start (Launchpad)", "Token launches and LFG (Looking For Governance) votes allow the community to greenlight new projects. $JUP holders govern protocol direction."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>$JUP Tokenomics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Total Supply", "10B JUP", S.blue],
              ["Circulating", "~1.35B", S.green],
              ["Team + Investors", "50% (vesting)", S.orange],
              ["Community / Airdrops", "40%", S.accent],
              ["Buyback Program", "Active", S.purple],
              ["Governance", "DAO Votes", S.yellow],
            ].map(([k, v, c]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "12px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{k}</div>
                <div style={{ fontWeight: 700, color: String(c), marginTop: 3 }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>How to Swap on Jupiter</h2>
          <ol style={{ paddingLeft: 20, color: S.text2, lineHeight: 2 }}>
            <li>Go to <strong style={{ color: S.text }}>jup.ag</strong> and connect your Solana wallet (Phantom, Backpack, Solflare).</li>
            <li>Select your input token (e.g. SOL) and output token (e.g. USDC).</li>
            <li>Jupiter shows the best route and estimated output across all DEXes.</li>
            <li>Set slippage tolerance (0.1–1% for stable pairs, higher for low-liquidity tokens).</li>
            <li>Click <strong style={{ color: S.text }}>Swap</strong>. Sign the transaction — settlement takes ~400ms on Solana.</li>
          </ol>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Jupiter vs Competitors</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Protocol", "Chain", "Type", "Volume (Daily)", "Key Edge"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jupiter", "Solana", "Aggregator + Perps", "$2.1B", "Best routes + full suite"],
                  ["1inch", "EVM", "Aggregator", "$800M", "Multi-chain EVM leader"],
                  ["Orca", "Solana", "AMM", "$400M", "Best for LPs on Solana"],
                  ["Paraswap", "EVM", "Aggregator", "$200M", "Gasless swaps via PSP"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}`, background: i % 2 === 0 ? S.surface : "transparent" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 0 ? S.accent : S.text2 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $JUP</h2>
          <TradingViewChart symbol="BINANCE:JUPUSDT" height={420} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>Risk Factors</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              ["Smart Contract Risk", "Jupiter's router contract could contain bugs. All code is audited but not immune."],
              ["JLP Liquidity Risk", "Perps LPs can lose if traders are net profitable. JLP APY fluctuates with perps demand."],
              ["Solana Network Risk", "Historical outages on Solana could affect swap execution during peak load."],
              ["Token Unlock Risk", "50% of JUP supply vests to team/investors over 2+ years — potential sell pressure."],
            ].map(([risk, desc]) => (
              <div key={String(risk)} style={{ display: "flex", gap: 12, padding: "12px 14px", background: "#f8514920", border: "1px solid #f8514940", borderRadius: 8 }}>
                <span style={{ color: "#f85149", fontWeight: 700, fontSize: 13, minWidth: 140 }}>{risk}</span>
                <span style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Ready to explore Jupiter?</p>
          <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Launch Jupiter →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/mica-regulation-eu-crypto-compliance-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Mica Regulation Eu Crypto Compliance Guide 2026</a></li>
            <li><a href="/learn/nft-lending-nftfi-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Nft Lending Nftfi Guide 2026</a></li>
            <li><a href="/learn/parallel-evm-monad-megaeth-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Parallel Evm Monad Megaeth Guide 2026</a></li>
            <li><a href="/learn/polkadot-jam-protocol-coretime-supercomputer-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Polkadot Jam Protocol Coretime Supercomputer Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
