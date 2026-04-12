'use client';
import Breadcrumb from "@/components/Breadcrumb";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#06b6d4", blue: "#58a6ff", green: "#3fb950", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Intent-Based Trading", href: "/learn/intent-based-trading" },
];

export default function IntentBasedTradingPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🎯 Intents</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>DeFi 3.0</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 19 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Intent-Based Trading Guide 2026: The Future of DeFi UX
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Intent-based trading is replacing traditional DEX interactions. Instead of specifying exact execution paths, users declare their desired outcome ("I want the best price for 1 ETH in USDC") and a competitive network of "solvers" competes to fill the order optimally. UniswapX, CoW Protocol, 1inch Fusion, and dYdX v5 have all adopted intents. This guide explains the architecture, benefits, and risks.
          </p>
        </header>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>What Are Intents?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            In traditional DeFi, you specify exactly HOW a trade executes: "swap on Uniswap v3 via the ETH/USDC 0.05% pool with max 0.5% slippage." This is brittle — it's MEV-attackable, may not route optimally, and requires deep technical knowledge. Intents flip this: you specify WHAT you want ("get me at least 3,250 USDC for my 1 ETH") and let competitive solvers figure out the best path.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                title: "Traditional Order", icon: "🔧",
                items: ["You choose: pool, router, path", "Vulnerable to sandwich attacks", "You pay gas directly", "Single execution path"],
                color: S.orange,
              },
              {
                title: "Intent-Based Order", icon: "🎯",
                items: ["You declare: desired outcome only", "MEV-protected by solver competition", "Solver pays gas (or gas-free)", "Optimal across all sources"],
                color: S.primary,
              },
            ].map((c) => (
              <div key={c.title} style={{ background: `${c.color}08`, border: `1px solid ${c.color}25`, borderRadius: 14, padding: 18 }}>
                <div style={{ fontWeight: 800, color: c.color, marginBottom: 12, fontSize: 15 }}>{c.icon} {c.title}</div>
                {c.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                    <span style={{ color: c.color, fontWeight: 800, marginTop: 2 }}>•</span>
                    <span style={{ color: S.text2, fontSize: 13 }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>How the Solver Network Works</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            When you submit an intent, it goes to a mempool of intents (not Ethereum's mempool). Solvers — sophisticated actors with capital, DEX connections, and off-chain order books — compete to fill your order. The best solver wins the right to fill the order and collects any spread or MEV. For the user: better prices and MEV protection.
          </p>
          <div style={{ background: `${S.primary}08`, border: `1px solid ${S.primary}25`, borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: 13 }}>
            <div style={{ color: S.primary, fontWeight: 700, marginBottom: 12 }}>Intent Lifecycle:</div>
            {[
              "User signs an intent: {sell: 1 ETH, buyMin: 3250 USDC, deadline: 5min}",
              "Intent broadcast to solver network (off-chain)",
              "Solvers compute optimal fill: AMM routes, private MM, CEX arb, etc.",
              "Best solver submits fill on-chain (pays gas)",
              "User receives ≥3250 USDC; solver keeps any extra",
            ].map((s, i) => (
              <div key={i} style={{ color: S.text2, marginBottom: 6, paddingLeft: 8 }}>{s}</div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Leading Intent Protocols</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { name: "UniswapX", desc: "Uniswap's off-chain RFQ + on-chain settlement. Gasless swaps, MEV-protected, best-price routing.", tvl: "$4B+ volume/day", color: S.orange },
              { name: "CoW Protocol", desc: "Coincidence of Wants: batch auctions where users' orders cancel each other out first, then routes remainder.", tvl: "$2B+ volume/day", color: S.yellow },
              { name: "1inch Fusion+", desc: "Intent-based mode for 1inch: competitive solvers, gasless, supports Ethereum + all major L2s.", tvl: "$1.5B+ volume/day", color: S.primary },
              { name: "dYdX v5", desc: "Full perpetuals DEX rebuilt around intents — off-chain matching, on-chain settlement via Cosmos.", tvl: "$500M+ OI", color: S.purple },
              { name: "Across Protocol", desc: "Intent-based cross-chain bridging — you sign intent, relayers compete to fulfill fastest.", tvl: "$300M+ TVL", color: S.blue },
            ].map((p) => (
              <div key={p.name} style={{ background: `${p.color}08`, border: `1px solid ${p.color}25`, borderRadius: 12, padding: 16, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: p.color, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontSize: 13, color: S.text2 }}>{p.desc}</div>
                </div>
                <div style={{ shrink: 0, fontSize: 12, fontWeight: 600, color: p.color, whiteSpace: "nowrap" }}>{p.tvl}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Risks & Limitations</h2>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { risk: "Solver Centralization", desc: "A small number of sophisticated solvers dominate order flow — potential for collusion" },
              { risk: "Liveness Risk", desc: "If no solver fills your intent before deadline, you need to resubmit" },
              { risk: "Private Order Flow", desc: "Solvers can front-run intents in their off-chain mempool" },
              { risk: "Complexity", desc: "Cross-chain intents require trusted relayers and complex settlement logic" },
            ].map((r) => (
              <div key={r.risk} style={{ display: "flex", gap: 12, padding: "12px 16px", background: "rgba(248,81,73,0.05)", border: "1px solid rgba(248,81,73,0.2)", borderRadius: 8 }}>
                <span style={{ color: "#f85149", fontWeight: 700, minWidth: 180, fontSize: 13 }}>{r.risk}</span>
                <span style={{ color: S.text2, fontSize: 13 }}>{r.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🎯 Key Takeaways</h2>
          {[
            "Intents let users declare desired outcomes; competitive solvers compete to fill orders optimally.",
            "Key benefits: MEV protection, gasless swaps, cross-chain routing, better prices than traditional AMMs.",
            "Major protocols: UniswapX, CoW Protocol, 1inch Fusion, Across, dYdX v5 — all using intent architecture.",
            "Solvers are sophisticated actors (market makers, arbitrageurs) who compete for order flow.",
            "Risks: solver centralization, liveness dependency, potential off-chain frontrunning by solvers.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/crypto-airdrop-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Airdrop Tracker</a></li>
            <li><a href="/tools/crypto-portfolio-tracker-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Portfolio Tracker Free</a></li>
            <li><a href="/tools/dollar-cost-average-backtest-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Dollar Cost Average Backtest Tool</a></li>
            <li><a href="/tools/rug-pull-detector-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Rug Pull Detector Tool</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Intent Based Trading",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/intent-based-trading"
            })
          }}
        />
      </article>
    </main>
  );
}
