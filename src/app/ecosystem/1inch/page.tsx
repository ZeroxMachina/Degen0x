'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

const primaryColor = "#1B314F";

export default function OneInchGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>1inch</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>🔀</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["Aggregator", "Multi-chain", "DEX"].map((tag) => (
              <span key={tag} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: S.text2 }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12, color: S.text }}>1inch: The DEX Aggregator & MEV Protection</h1>
          <p style={{ fontSize: "1.1rem", color: S.text2, lineHeight: 1.6 }}>
            Learn how 1inch routes swaps across 300+ DEXes to guarantee the best prices, and how 1inch Fusion+ eliminates MEV and front-running with professional resolvers.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48, padding: "28px 24px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12 }}>
          {[
            { label: "Supported DEXes", value: "300+" },
            { label: "Blockchains", value: "20+" },
            { label: "Token", value: "$1INCH" },
            { label: "Avg. Savings", value: "3-5%" },
            { label: "Fusion+ Status", value: "Active" },
            { label: "Rating", value: "⭐ 4.7" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: S.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* What is 1inch */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>What is 1inch?</h2>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            1inch is the leading DEX aggregator, routing swaps intelligently across 300+ decentralized exchanges and liquidity sources to guarantee users get the best price and lowest slippage. A single swap might split across Uniswap, Curve, Balancer, and 50+ other sources simultaneously.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            In 2026, 1inch Fusion+ is live in production. This revolutionary mode uses professional "resolvers" who compete in real-time to fill swaps with MEV protection. Users submit intents (swap requests) without specifying the exact execution, and resolvers execute them at the best possible price without front-running or sandwich attacks.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8 }}>
            With support for 20+ blockchains (Ethereum, Arbitrum, Polygon, Optimism, Base, Blast, etc.), 1inch has become the go-to swap interface for serious traders. On average, 1inch saves users 3-5% compared to direct swaps on single DEXes.
          </p>
        </section>

        {/* How it Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How 1inch Works</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "24px", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Pathfinder Algorithm Analyzes Liquidity</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>1inch's Pathfinder algorithm scans all liquidity sources, building a graph of possible swap routes. It identifies the path that minimizes price impact and gas costs.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Route Optimization</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>1inch may split your order across multiple DEXes. E.g., swap 30% via Uniswap V3, 40% via Curve, 30% via Balancer—whatever gets the best overall price.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Fusion+ Intent-Based Execution</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>With Fusion+, you submit an intent (swap amount + slippage), and professional resolvers compete to execute it. No front-running, no sandwich attacks—pure price competition.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>4</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Settlement & Execution</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Your swap is executed atomically on-chain. You receive output tokens in your wallet. With Fusion+, the resolver covers MEV costs—you get the best execution guaranteed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How to Use 1inch</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "1", title: "Go to app.1inch.io", desc: "Navigate to the 1inch app. Choose your blockchain (Ethereum, Arbitrum, Polygon, etc.) from the network dropdown." },
              { num: "2", title: "Connect Your Wallet", desc: "Click 'Connect Wallet' and sign with MetaMask, WalletConnect, or your preferred wallet. Approve necessary contract interactions." },
              { num: "3", title: "Select Swap Pair", desc: "Enter the token you're swapping FROM and TO. 1inch automatically shows the best route and estimated output." },
              { num: "4", title: "Enable Fusion+ Mode", desc: "Toggle 'Fusion+ Mode' in settings to enable MEV protection and intent-based execution. This gives you the best price with no risk of front-running." },
              { num: "5", title: "Review & Confirm Swap", desc: "Check the route breakdown, slippage tolerance, and gas estimate. Click 'Swap' to execute. Your trade is routed optimally across multiple DEXes." },
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
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> While 1inch has been audited extensively, routing through 300+ DEXes means exposure to each contract's risks. One vulnerable DEX could drain the route. Always audit before using novel routes.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Slippage:</strong> In volatile markets, prices can change between quote and execution. Set your slippage tolerance carefully—too low will fail, too high costs you money.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Gas Costs:</strong> Multi-hop routes incur higher gas. Sometimes direct swaps are cheaper. Compare gas cost vs. price savings.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Resolver Risk (Fusion+):</strong> Fusion+ relies on professional resolvers competing to fill intents. A resolver could potentially fail to execute or delay settlement. Use time limits to protect yourself.
            </li>
            <li>
              <strong style={{ color: S.text }}>Token Risk:</strong> When swapping via multiple DEXes, each intermediate token carries risk. Scams can hide in small liquidity sources. Use only reputable tokens.
            </li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: "28px 32px", textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>Test Your 1inch Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +120 XP and unlock your 1inch Expert badge</p>
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
              <a href="https://1inch.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Official 1inch Website →
              </a>
            </li>
            <li>
              <a href="https://docs.1inch.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                1inch Developer Docs →
              </a>
            </li>
            <li>
              <a href="https://app.1inch.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Launch 1inch App →
              </a>
            </li>
            <li>
              <a href="https://help.1inch.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                1inch Help Center →
              </a>
            </li>
          </ul>
        </section>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:1INCHUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
