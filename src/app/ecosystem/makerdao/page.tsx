'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

const primaryColor = "#1AAB9B";

export default function MakerDAOGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>MakerDAO / Sky</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>🏦</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["Stablecoin", "Ethereum", "DeFi"].map((tag) => (
              <span key={tag} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: S.text2 }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12, color: S.text }}>MakerDAO / Sky: The Decentralized Stablecoin Protocol</h1>
          <p style={{ fontSize: "1.1rem", color: S.text2, lineHeight: 1.6 }}>
            Learn how MakerDAO created DAI, the world's most battle-tested decentralized stablecoin, and how the Sky upgrade is introducing a new era of yield-bearing stability and governance.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48, padding: "28px 24px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12 }}>
          {[
            { label: "DAI Supply", value: "$5.2B" },
            { label: "DSR Rate", value: "5%" },
            { label: "Collateral Types", value: "40+" },
            { label: "Token", value: "$MKR / $SKY" },
            { label: "Network", value: "Ethereum" },
            { label: "Rating", value: "⭐ 4.7" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: S.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* What is MakerDAO */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>What is MakerDAO / Sky?</h2>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            MakerDAO created DAI, the first and most battle-tested decentralized stablecoin. Since 2015, DAI has maintained its $1 peg without a central authority holding cash reserves. Instead, it's backed by diversified crypto collateral (ETH, WBTC, staking tokens, real-world assets) and algorithmic incentives.
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
            In 2026, MakerDAO rebranded to Sky, introducing a major upgrade. The new $SKY governance token works alongside $MKR. The protocol now features the DAI Savings Rate (DSR) at 5%, allowing anyone to deposit DAI and earn yield without locking it up or taking smart contract risk.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8 }}>
            Sky's mission is to enable a world where anyone can access stable money and earn savings returns. With $5.2B DAI in circulation, it's become essential infrastructure for trading, lending, and building on Ethereum.
          </p>
        </section>

        {/* How it Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How MakerDAO / Sky Works</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "24px", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Deposit Collateral</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Users lock crypto collateral (ETH, WBTC, USDC, real-world assets) into a Vault. Each collateral type has a minimum collateralization ratio (e.g., 150% for ETH).</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Mint DAI Stablecoin</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Based on collateral value, users can mint DAI up to their LTV limit. Each DAI is algorithmically worth $1 and backed by the collateral pool.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Pay Stability Fees</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Users pay a stability fee (interest rate) on minted DAI. This fee incentivizes burning DAI, which removes it from circulation and helps maintain the $1 peg.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>4</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Earn DSR Yield</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Hold DAI in the protocol and earn the DAI Savings Rate (currently 5% APY). It's like a savings account—just keep DAI in your wallet connected to Sky.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How to Use Sky / MakerDAO</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "1", title: "Connect Your Wallet", desc: "Go to app.sky.money and connect your MetaMask, Ledger, or Trezor wallet. Make sure you have ETH for gas fees." },
              { num: "2", title: "Deposit Collateral", desc: "Navigate to 'Vaults' and deposit ETH, WBTC, staking tokens, or other approved collateral. Your collateral is locked in the smart contract." },
              { num: "3", title: "Mint DAI", desc: "Based on your collateral value and the collateral ratio, mint DAI up to your limit. You'll see your stability fee rate (varies by collateral type)." },
              { num: "4", title: "Use or Save DAI", desc: "Use minted DAI for trading, lending, or hold it. Or deposit DAI into the DSR (Savings Rate) to earn 5% yield automatically." },
              { num: "5", title: "Repay & Close Vault", desc: "Anytime, return your DAI + fees to unlock your collateral. You're in full control—no lockup period." },
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
              <strong style={{ color: S.text }}>Collateral Price Risk:</strong> If your collateral drops sharply, you could face liquidation. If ETH crashes 40%, your vault may be liquidated and collateral sold at loss.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Stability Fee Risk:</strong> If governance votes to raise stability fees, your borrowing cost increases. Watch governance proposals.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Sky is battle-tested over years, but smart contract bugs are always possible. Audits don't guarantee safety.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>DSR Yields:</strong> DSR yields (currently 5%) depend on system income. If stability fees drop, DSR may decrease. It's not a guaranteed rate.
            </li>
            <li>
              <strong style={{ color: S.text }}>Slippage on Liquidation:</strong> In volatile markets, liquidations may execute at worse-than-expected prices due to MEV and network congestion.
            </li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: "28px 32px", textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>Test Your Sky / MakerDAO Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +140 XP and unlock your Sky Expert badge</p>
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
              <a href="https://sky.money" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Official Sky Website →
              </a>
            </li>
            <li>
              <a href="https://docs.sky.money" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Sky Documentation →
              </a>
            </li>
            <li>
              <a href="https://daistats.com" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                DAI Statistics Dashboard →
              </a>
            </li>
          </ul>
        </section>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:MKRUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
