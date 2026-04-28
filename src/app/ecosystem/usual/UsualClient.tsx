'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#ca8a04", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function UsualClient() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <nav aria-label="Breadcrumb" style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }} aria-current="page">Usual Money</span>
      </nav>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }} role="img" aria-label="Usual Money">💰</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>Stablecoin</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>RWA-Backed</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Yield</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Usual Money: USD0 — Revenue-Sharing Stablecoin</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>The stablecoin that shares RWA revenue · +130 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["USD0 Supply", "$1.4B", S.accent],
            ["USD0++ APY", "~12%", S.green],
            ["Token", "$USUAL", S.purple],
            ["Chain", "Ethereum", S.blue],
            ["Backing", "T-Bills/RWA", S.orange],
            ["Rating", "⭐ 4.4", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Usual Money?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Usual is a decentralized stablecoin protocol issuing <strong style={{ color: S.text }}>USD0</strong> — backed 1:1 by Real-World Assets (primarily US Treasury bills). Unlike Tether (USDT) where Tether Corp keeps all T-bill interest, <strong style={{ color: S.text }}>Usual redistributes 100% of RWA revenue to protocol token holders</strong>.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            The key innovation: staking USD0 gives <strong style={{ color: S.text }}>USD0++</strong> — a 4-year locked bond that earns the treasury yield PLUS $USUAL governance token emissions. USUAL holders effectively own a share of the protocol&apos;s balance sheet.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>The Usual Flywheel</h2>
          {[
            ["Mint USD0", "Deposit RWA (T-bills, USYC, M0) to mint USD0 stablecoin at 1:1 parity."],
            ["Stake → USD0++", "Lock USD0 for 4 years to receive USD0++ bond. Earn T-bill yield + USUAL emissions (~12% APY total)."],
            ["USUAL Governance", "$USUAL token represents ownership of protocol revenue. Stake USUAL → USUALx to earn protocol fees."],
            ["Revenue Loop", "More USD0 minted → more T-bill yield → more revenue to distribute → higher USUAL value → more minting incentive."],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $USUAL</h2>
          <TradingViewChart symbol="BINANCE:USUALUSDT" height={420} />
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Frequently Asked Questions</h2>
          {[
            { q: "What backs USD0?", a: "USD0 is backed 1:1 by Real-World Assets — primarily short-duration US Treasury bills. Unlike algorithmic stablecoins, USD0 has hard collateral backing every token in circulation." },
            { q: "What's the difference between USD0 and USD0++?", a: "USD0 is the liquid stablecoin (pegged to $1). USD0++ is a 4-year locked bond that earns both T-bill yield and USUAL token emissions, offering ~12% combined APY." },
            { q: "How does Usual differ from USDT or USDC?", a: "The key difference is revenue sharing. Tether and Circle keep all interest earned on reserves. Usual redistributes 100% of RWA revenue to $USUAL token holders." },
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

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center", marginBottom: 40 }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Earn T-bill yield while owning protocol revenue</p>
          <a href="https://app.usual.money" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Usual →
          </a>
        </div>

        {/* Related Pages */}
        <div style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 16 }}>Related Protocols</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { href: "/ecosystem/frax", label: "Frax Finance", desc: "Algorithmic stablecoin" },
              { href: "/ecosystem/pendle", label: "Pendle Finance", desc: "Yield tokenization" },
              { href: "/ecosystem/morpho", label: "Morpho", desc: "Lending optimizer" },
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
