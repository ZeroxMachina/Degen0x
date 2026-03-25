'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#06b6d4",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function OdosClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <nav aria-label="Breadcrumb" style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }} aria-current="page">Odos</span>
      </nav>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 64, height: 64, background: `#06b6d420`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #06b6d440` }} role="img" aria-label="Odos">🌀</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#06b6d420`, color: "#06b6d4", border: `1px solid #06b6d440` }}>DEX Aggregator</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#3fb95020`, color: "#3fb950", border: `1px solid #3fb95040` }}>Multi-chain</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#bc8cff20`, color: "#bc8cff", border: `1px solid #bc8cff40` }}>DeFi</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Odos: Multi-Input DEX Aggregator</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+100 XP · 8 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Volume", "$30B+", "#06b6d4"],
            ["Chains", "16", "#3fb950"],
            ["Inputs", "Multi-token", "#58a6ff"],
            ["Fee", "None", "#bc8cff"],
            ["Routes", "1000+/trade", "#d29922"],
            ["Rating", "⭐ 4.7", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Odos?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Odos is the first DEX aggregator to support multi-input, multi-output token swaps. Instead of making three separate swaps to rebalance a portfolio, Odos lets you swap [USDC + WETH + ARB] → [ETH + USDT] in a single transaction, saving gas and getting better rates through its Smart Order Router (SOR) that evaluates 1000+ routing paths.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Odos</h2>
          <ol style={{ listStyle: "none", padding: 0, margin: 0 }} aria-label="Steps to use Odos">
            {[
              { num: 1, title: "Single Token Swaps", desc: "Like any DEX aggregator — enter a token pair and Odos routes across all DEXes on the selected chain for the best rate." },
              { num: 2, title: "Multi-Input Swaps", desc: "The killer feature: input up to 6 tokens simultaneously in one transaction. Ideal for portfolio rebalancing without chaining swaps." },
              { num: 3, title: "Smart Order Router", desc: "Odos evaluates 1000+ possible routing combinations simultaneously using integer linear programming, maximizing output." },
              { num: 4, title: "Referral System", desc: "Integrate Odos into your dApp via the Odos API and earn a referral fee from positive slippage on every swap you route." },
            ].map(step => (
              <li key={step.num} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div aria-hidden="true" style={{ width: 32, height: 32, borderRadius: "50%", background: `#06b6d420`, border: `1px solid #06b6d440`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#06b6d4", flexShrink: 0 }}>{step.num}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>Step {step.num}: {step.title}</div>
                  <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>{step.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16, margin: 0 }}>
              <li style={{ marginBottom: 8, paddingLeft: 8 }}>Newer protocol — less battle-tested than 1inch</li>
              <li style={{ marginBottom: 8, paddingLeft: 8 }}>Smart contract risk from novel multi-path routing</li>
              <li style={{ marginBottom: 8, paddingLeft: 8 }}>Token not launched yet (as of 2026)</li>
              <li style={{ paddingLeft: 8 }}>MEV risk on large swaps</li>
            </ul>
          </div>
        </section>

        {/* Chart moved BEFORE footer nav */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:ODOSUSDT" height={420} />
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Frequently Asked Questions</h2>
          {[
            { q: "What makes Odos different from 1inch or Paraswap?", a: "Odos is the only aggregator supporting multi-input, multi-output swaps in a single transaction. This saves gas and gets better rates when rebalancing across multiple tokens." },
            { q: "Does Odos charge fees?", a: "Odos charges zero protocol fees. Revenue comes from positive slippage sharing and API referral partnerships with integrated dApps." },
            { q: "Which chains does Odos support?", a: "Odos supports 16+ chains including Ethereum, Arbitrum, Optimism, Base, Polygon, Avalanche, BNB Chain, and more." },
          ].map((faq, idx) => (
            <details key={idx} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 20px", marginBottom: 12, cursor: "pointer" }}>
              <summary style={{ fontWeight: 700, fontSize: "0.95rem", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {faq.q}
                <span style={{ color: S.text2, fontSize: 18, marginLeft: 12 }}>+</span>
              </summary>
              <p style={{ color: S.text2, fontSize: "0.9rem", lineHeight: 1.7, marginTop: 12 }}>{faq.a}</p>
            </details>
          ))}
        </section>

        <div style={{ background: `#06b6d410`, border: `1px solid #06b6d430`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn +100 XP for reading this guide</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Take the quiz to test your knowledge and unlock your XP reward.</div>
          </div>
          <Link href="/courses" style={{ background: S.accent, color: "#fff", padding: "10px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Take Quiz →</Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: `1px solid ${S.border}`, flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
          <Link href="/ecosystem" style={{ color: S.text2, fontSize: 13, textDecoration: "none" }}>← Back to Ecosystem</Link>
          <Link href="/courses" style={{ color: S.accent, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Take the full crypto course →</Link>
        </div>

        {/* Related Pages */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 16 }}>Related Protocols</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { href: "/ecosystem/uniswap", label: "Uniswap", desc: "Leading DEX" },
              { href: "/ecosystem/balancer-v3", label: "Balancer V3", desc: "Weighted pool DEX" },
              { href: "/ecosystem/stargate", label: "Stargate", desc: "Cross-chain bridge" },
            ].map(item => (
              <Link key={item.href} href={item.href} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 20px", textDecoration: "none", color: S.text, display: "block" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: S.text2, fontSize: 13 }}>{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
