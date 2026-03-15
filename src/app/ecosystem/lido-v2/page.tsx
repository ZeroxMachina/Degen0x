'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#00a3ff",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function LidoV2GuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Lido V2</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#00a3ff20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #00a3ff40` }}>🌊</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#00a3ff20`, color: "#00a3ff", border: `1px solid #00a3ff40` }}>Liquid Staking</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: "#58a6ff", border: `1px solid #58a6ff40` }}>Ethereum</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#bc8cff20`, color: "#bc8cff", border: `1px solid #bc8cff40` }}>DeFi</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Lido V2: Native Unstaking for stETH</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+110 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$28B", "#00a3ff"],
            ["APY", "~3.5%", "#3fb950"],
            ["Token", "$stETH", "#58a6ff"],
            ["Chains", "Multi", "#bc8cff"],
            ["Share", "32% ETH staked", "#d29922"],
            ["Rating", "⭐ 4.8", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Lido V2?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Lido V2 upgraded Ethereum's largest liquid staking protocol with a critical feature: native stETH-to-ETH withdrawals. V1 required selling stETH on DEXes to exit (with slippage). V2 introduced a withdrawal queue that processes redemptions directly from the Ethereum beacon chain, achieving true 1:1 parity between stETH and ETH." }} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Lido V2</h2>
          <div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#00a3ff20`, border: `1px solid #00a3ff40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#00a3ff", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Stake ETH → stETH</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Deposit any amount of ETH and receive stETH. Unlike V1, V2 has a modular node operator registry (NOR) improving decentralization.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#00a3ff20`, border: `1px solid #00a3ff40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#00a3ff", flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>stETH Rebases Daily</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Your stETH balance increases every 24 hours as Ethereum validator rewards are distributed. No claiming required.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#00a3ff20`, border: `1px solid #00a3ff40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#00a3ff", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Withdraw via Queue</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Submit a withdrawal request to convert stETH → NFT withdrawal voucher. When processed (1-3 days), claim your ETH 1:1.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#00a3ff20`, border: `1px solid #00a3ff40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#00a3ff", flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Use stETH in DeFi</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Deploy stETH as collateral in Aave, curve stETH-ETH pool, or as wstETH in cross-chain DeFi for compounded yield.</div>
            </div>
          </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16 }}>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Centralization concerns — Lido controls 32%+ of staked ETH</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Smart contract risk in complex upgrade</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Withdrawal queue can be slow during high demand</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Regulatory risk from concentrated staking</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>stETH/ETH depeg risk during market stress</li>
            </ul>
          </div>
        </section>

        <div style={{ background: `#00a3ff10`, border: `1px solid #00a3ff30`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn +110 XP for reading this guide</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Take the quiz to test your knowledge and unlock your XP reward.</div>
          </div>
          <Link href="/courses" style={{ background: S.accent, color: "#fff", padding: "10px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Take Quiz →</Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: `1px solid ${S.border}`, flexWrap: "wrap", gap: 12 }}>
          <Link href="/ecosystem" style={{ color: S.text2, fontSize: 13, textDecoration: "none" }}>← Back to Ecosystem</Link>
          <Link href="/courses" style={{ color: S.accent, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Take the full crypto course →</Link>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:LDOUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
