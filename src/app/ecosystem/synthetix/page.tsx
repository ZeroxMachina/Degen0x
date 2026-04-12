'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

const primaryColor = "#5FCDF9";

export default function SynthetixGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Synthetix</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>⚗️</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["Derivatives", "Optimism", "Ethereum"].map((tag) => (
              <span key={tag} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: S.text2 }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12, color: S.text }}>Synthetix: The Derivatives Liquidity Protocol</h1>
          <p style={{ fontSize: "1.1rem", color: S.text2, lineHeight: 1.6 }}>
            Learn how Synthetix V3 revolutionized derivatives trading by pooling liquidity and enabling developers to build custom perpetual futures, options, and synthetic asset markets on top.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48, padding: "28px 24px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12 }}>
          {[
            { label: "TVL", value: "$650M" },
            { label: "SNX Stakers", value: "30K+" },
            { label: "Token", value: "$SNX" },
            { label: "V3 Pools", value: "Live" },
            { label: "Supported Chains", value: "3" },
            { label: "Rating", value: "⭐ 4.5" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: S.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* What is Synthetix */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>What is Synthetix?</h2>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            Synthetix is the derivatives liquidity protocol for blockchain. Instead of order books, Synthetix uses pooled liquidity—SNX stakers deposit capital as collateral, and traders trade against the pool. In 2026, Synthetix V3 is a completely rewritten protocol that separates liquidity from market mechanics.
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
            V3's innovation: liquidity pools are generic and modular. On top, different "markets" can be built—perpetual futures, options, spot synthetic assets—all renting liquidity from the same pool. This enables rapid innovation in derivatives with shared, efficient liquidity.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8 }}>
            With $650M in TVL and 30K+ SNX stakers, Synthetix powers one of the most liquid on-chain derivatives ecosystems. Perps V3 (perpetual futures) runs live on Optimism, Ethereum, and Base, offering leverage up to 50x with oracle-based pricing.
          </p>
        </section>

        {/* How it Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How Synthetix V3 Works</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "24px", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Stakers Deposit Collateral</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>SNX stakers deposit SNX tokens or other collateral (sUSD, USDC) into liquidity pools. This capital becomes the backing for all derivatives trades.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Traders Use Markets</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Traders open positions on derivatives markets (Perps V3, future options markets) by posting margin. They trade against the pool—long/short crypto, forex, commodities, or stocks.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Liquidity Providers Earn Fees</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Stakers earn protocol fees (trading fees, liquidation bonuses) proportional to the liquidity they provided. The more traders use the pool, the more rewards stakers earn.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>4</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Modular Markets Stack</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Developers can build custom market implementations (perpetuals, options, leveraged spot) that rent liquidity from the core pool. This unlocks unlimited innovation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How to Use Synthetix</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "1", title: "Go to Synthetix.io", desc: "Navigate to synthetix.io and connect your wallet. You'll see the main dashboard for Perps V3 trading." },
              { num: "2", title: "Deposit Margin", desc: "Fund your trading account with sUSD, USDC, or other accepted collateral. This is your margin for opening positions." },
              { num: "3", title: "Open Perpetual Positions", desc: "Click on any market (BTC, ETH, EUR, etc.) and open a long or short position with leverage up to 50x. Set your entry price, stop loss, and take profit." },
              { num: "4", title: "Monitor & Close Positions", desc: "Watch your position in real-time. Prices update via Chainlink oracles. Close any position anytime to lock in profits or cut losses." },
              { num: "5", title: "Stake SNX (Optional)", desc: "If you're a LP, go to governance page and stake SNX into pools. Earn protocol fees from traders." },
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
              <strong style={{ color: S.text }}>Liquidation Risk:</strong> Using leverage (10x, 50x) means small price moves can liquidate your entire margin. A 2% move against you at 50x leverage liquidates you completely.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Oracle Risk:</strong> Prices come from Chainlink oracles. If oracles are manipulated or delayed, prices may not reflect reality. Use leverage cautiously.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Funding Rates:</strong> Perpetual futures charge funding rates (interest) between long and short positions. High funding rates mean you pay to stay in position. Check before opening trades.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>LP Impermanent Loss:</strong> If you stake SNX to provide liquidity, you may experience losses if the pools take large trader losses. SNX stakers bear trader loss risk.
            </li>
            <li>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> V3 is new code. Always assume smart contract bugs are possible. Start small and test with testnet.</li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: "28px 32px", textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>Test Your Synthetix Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +150 XP and unlock your Synthetix Expert badge</p>
          <Link href="/courses" style={{ display: "inline-block", background: primaryColor, color: "#000", padding: "12px 28px", borderRadius: 10, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
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
              <a href="https://synthetix.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Official Synthetix Website →
              </a>
            </li>
            <li>
              <a href="https://docs.synthetix.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Synthetix V3 Documentation →
              </a>
            </li>
            <li>
              <a href="https://stats.synthetix.io" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Synthetix Protocol Stats →
              </a>
            </li>
          </ul>
        </section>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:SNXUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
