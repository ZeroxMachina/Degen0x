'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

const primaryColor = "#1E1E5F";

export default function BalancerGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Balancer</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>⚖️</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["AMM", "Ethereum", "Multi-chain"].map((tag) => (
              <span key={tag} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: S.text2 }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12, color: S.text }}>Balancer: The Programmable Liquidity Protocol</h1>
          <p style={{ fontSize: "1.1rem", color: S.text2, lineHeight: 1.6 }}>
            Learn how Balancer enables LPs to create custom multi-token pools with arbitrary weights, and how V3 with hooks unlocks limitless AMM innovation.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48, padding: "28px 24px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12 }}>
          {[
            { label: "TVL", value: "$1.1B" },
            { label: "Weekly Volume", value: "$400M" },
            { label: "Token", value: "$BAL" },
            { label: "Active Pools", value: "1000+" },
            { label: "veBAL", value: "Live" },
            { label: "Rating", value: "⭐ 4.6" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: S.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* What is Balancer */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>What is Balancer?</h2>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            Balancer is a generalized Automated Market Maker (AMM) enabling LPs to create pools with custom token combinations and weights. While Uniswap limits you to 50/50 pools (e.g., 50% ETH / 50% USDC), Balancer allows 80/20, 60/30/10, or any custom weights across up to 8 tokens in a single pool.
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
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            In 2026, Balancer V3 introduces "Hooks"—similar to Uniswap V4—enabling developers to inject custom logic into pools. Swap hooks, fee structures, liquidity mechanisms, and even entirely new AMM curves can be programmed. This transforms Balancer into a platform for any liquidity mechanism.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8 }}>
            With $1.1B TVL and veBAL governance, Balancer has emerged as the best AMM for sustainable LP returns. The "Balancer Wars" (voting for gauge weights) incentivizes deep liquidity for emerging tokens. It's become essential infrastructure for DAOs, blue-chip tokens, and new projects.
          </p>
        </section>

        {/* How it Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How Balancer Works</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "24px", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Create Custom Weighted Pools</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>LPs create pools with any token combination and weights. E.g., 80% ETH / 20% BAL means 80% of pool value is ETH, 20% is BAL. The pool rebalances itself as traders swap.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Traders Swap Across Pools</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Traders swap tokens, and Balancer's router optimizes across multiple pools to find the best price. Balancer's vault architecture makes multi-hop trades atomic and efficient.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>LPs Earn Trading Fees</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Every swap incurs a fee (typically 0.3-0.5%) paid to LPs. Balancer's 80/20 structure means LPs hold less of volatile assets, reducing impermanent loss versus traditional 50/50 pools.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>4</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Govern with veBAL</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Lock BAL tokens for veBAL to vote on gauge weights and incentive allocation. This controls liquidity reward distribution—the "Balancer Wars."</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How to Use Balancer</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "1", title: "Go to app.balancer.fi", desc: "Connect your wallet to Balancer's interface. Choose your network (Ethereum, Polygon, Arbitrum, Optimism, etc.)." },
              { num: "2", title: "Browse and Filter Pools", desc: "Sort pools by TVL, APR, or token. Look for pools that match your strategy. Check APY before committing—it varies by liquidity depth and fees." },
              { num: "3", title: "Provide Liquidity", desc: "Select a pool and deposit tokens in the required weights. E.g., for an 80/20 pool, deposit 80% of one token and 20% of another. You get LP tokens in return." },
              { num: "4", title: "Earn Trading Fees", desc: "Your LP tokens earn a share of every swap fee. Claim rewards anytime. For 80/20 pools, impermanent loss is reduced compared to 50/50 pools." },
              { num: "5", title: "Lock BAL for veBAL & Vote", desc: "If you hold BAL, lock it for veBAL (Balancer voting escrow). Vote on gauge weights to boost APYs for your favorite pools. Participate in the Balancer Wars." },
            ].map((step) => (
              <div key={step.num} style={{ display: "flex", gap: 16, padding: "20px", background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10 }}>
                <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, minWidth: 32 }}>{step.num}</div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: S.text, marginBottom: 6 }}>{step.title}</h4>
                  <p style={{ fontSize: "0.95rem", color: S.text2 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risks */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Key Risks to Understand</h2>
          <ul style={{ fontSize: "0.95rem", color: S.text2, lineHeight: 1.8, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Impermanent Loss:</strong> Even in 80/20 pools, if one token's price diverges significantly, you experience IL. It's reduced but not eliminated. Always understand IL before providing liquidity.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Balancer's vault is battle-tested, but V3 with hooks is newer. Hooks can introduce risks if not audited properly. Use caution with new hook implementations.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Token Risk:</strong> If you're in a multi-token pool, every token carries its own risk. A rug pull on one token could bankrupt the entire pool. Research all tokens before providing liquidity.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Flash Loan Risk:</strong> Balancer's vault enables flash loans. Pools can theoretically be exploited by flash loan attacks, though mitigations exist. Understand the risks.
            </li>
            <li>
              <strong style={{ color: S.text }}>APR Volatility:</strong> Gauge votes can change weekly. APRs are not guaranteed and depend on trading volume and governance incentives. Sustainable APRs are lower than advertised.
            </li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: "28px 32px", textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>Test Your Balancer Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +130 XP and unlock your Balancer Expert badge</p>
          <Link href="/courses" style={{ display: "inline-block", background: primaryColor, color: "#fff", padding: "12px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Take Quiz →
          </Link>
        </div>

        {/* Learn More */}
        <section style={{ borderTop: `1px solid ${S.border}`, paddingTop: 32 }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 16, color: S.text }}>Learn More</h3>
          <ul style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: "0.95rem" }}>
            <li>
              <Link href="/ecosystem" style={{ color: S.blue, textDecoration: "none" }}>← Back to Ecosystem</Link>
            </li>
            <li>
              <Link href="/guides" style={{ color: S.blue, textDecoration: "none" }}>View All Protocol Guides</Link>
            </li>
            <li>
              <a href="https://balancer.fi" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Official Balancer Website →
              </a>
            </li>
            <li>
              <a href="https://docs.balancer.fi" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Balancer V3 Documentation →
              </a>
            </li>
            <li>
              <a href="https://app.balancer.fi" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Launch Balancer App →
              </a>
            </li>
          </ul>
        </section>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:BALUSD" height={420} />
        </section>

      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/kamino" style={{ color: "#fb923c", marginRight: "1rem" }}>Kamino</a>
        </nav>
    </main>
  );
}
