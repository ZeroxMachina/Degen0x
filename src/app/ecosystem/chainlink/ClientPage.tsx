'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", pink: "#ff007a", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

const primaryColor = "#375BD2";

export default function ChainlinkGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Chainlink</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>🔗</div>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["Oracle", "Ethereum", "Multi-chain"].map((tag) => (
              <span key={tag} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 6, padding: "4px 12px", fontSize: 12, fontWeight: 600, color: S.text2 }}>
                {tag}
              </span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: 12, color: S.text }}>Chainlink: The Decentralized Oracle Network</h1>
          <p style={{ fontSize: "1.1rem", color: S.text2, lineHeight: 1.6 }}>
            Learn how Chainlink secures billions in smart contract value by connecting blockchain applications to real-world data and external systems with cryptographic certainty.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 48, padding: "28px 24px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12 }}>
          {[
            { label: "TVL Secured", value: "$20B+" },
            { label: "Node Operators", value: "700+" },
            { label: "Price Feeds", value: "1,000+" },
            { label: "Token", value: "$LINK" },
            { label: "CCIP Status", value: "Live" },
            { label: "Rating", value: "⭐ 4.9" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{stat.label}</div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: S.text }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* What is Chainlink */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>What is Chainlink?</h2>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            Chainlink is the largest decentralized oracle network, solving blockchain's biggest problem: how to access trustworthy real-world data. Smart contracts are deterministic—they can't directly fetch external APIs or fetch data from the internet. Chainlink bridges this gap by connecting blockchain to the real world.
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
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8, marginBottom: 12 }}>
            In 2026, Chainlink powers data feeds for DeFi, insurance, gaming, and enterprise blockchains. The Cross-Chain Interoperability Protocol (CCIP) is live in production, enabling secure message and token transfers across different blockchains without bridges.
          </p>
          <p style={{ fontSize: "1rem", color: S.text2, lineHeight: 1.8 }}>
            Over $20 billion in smart contract value depends on Chainlink data feeds. Developers trust Chainlink because data is sourced from 700+ independent node operators, cryptographically signed, and verified through consensus before delivery.
          </p>
        </section>

        {/* How it Works */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How Chainlink Works</h2>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "24px", marginBottom: 12 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>1</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Node Operators Fetch Data</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Independent node operators monitor APIs and external data sources. They pull current market prices, sports scores, weather data, or any external information.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>2</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Cryptographic Signing</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Each node cryptographically signs the data with its private key. This proves the data came from that specific operator and hasn't been tampered with.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>3</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Consensus & Aggregation</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>Multiple nodes report data independently. Chainlink's smart contract aggregates signatures, removes outliers, and computes a median price to eliminate any single point of failure.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: primaryColor, width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>4</div>
              <div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: S.text, marginBottom: 4 }}>Deliver to Smart Contracts</h4>
                <p style={{ fontSize: "0.95rem", color: S.text2 }}>The final data is written on-chain. Smart contracts can now read verified, multi-signed data with confidence. Data updates trigger contract functions automatically.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: 16, color: S.text }}>How to Use Chainlink</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "1", title: "View Price Feeds", desc: "Visit data.chain.link to explore 1,000+ price feeds across all blockchain networks. Check the latest ETH/USD, BTC/USD, and hundreds of other asset pairs in real-time." },
              { num: "2", title: "Use Chainlink VRF", desc: "Integrate Chainlink VRF (Verifiable Randomness Function) for provably fair randomness. Perfect for lotteries, gaming, NFT minting, and randomized selection mechanisms." },
              { num: "3", title: "Build with CCIP", desc: "Use CCIP to build cross-chain applications that seamlessly send messages and tokens across Ethereum, Optimism, Arbitrum, Polygon, and 15+ other blockchains." },
              { num: "4", title: "Stake LINK Tokens", desc: "Become an oracle operator by staking LINK. Earn rewards by helping secure the network and providing accurate data to thousands of smart contracts." },
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
              <strong style={{ color: S.text }}>Oracle Collusion:</strong> If multiple node operators collude, they could sign false data. Chainlink mitigates this with large operator networks and on-chain reputation.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Data Source Risk:</strong> If the underlying APIs or data sources are hacked or go offline, Chainlink can only report what it receives.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong style={{ color: S.text }}>Smart Contract Risk:</strong> Even with perfect data, bugs in your smart contract logic could cause fund loss. Always audit contracts.
            </li>
            <li>
              <strong style={{ color: S.text }}>Price Feed Delays:</strong> Data updates happen on a schedule (e.g., every hour). For fast-moving markets, delays could cause slippage.
            </li>
          </ul>
        </section>

        {/* Quiz CTA */}
        <div style={{ background: `linear-gradient(135deg, ${S.surface}, ${S.surface2})`, border: `1px solid ${primaryColor}40`, borderRadius: 16, padding: "28px 32px", textAlign: "center", marginBottom: 32 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🧠</div>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 8 }}>Test Your Chainlink Knowledge</h3>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 20 }}>Complete the quiz to earn +130 XP and unlock your Chainlink Expert badge</p>
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
              <a href="https://chain.link" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Official Chainlink Website →
              </a>
            </li>
            <li>
              <a href="https://docs.chain.link" target="_blank" rel="noopener noreferrer" style={{ color: S.blue, textDecoration: "none" }}>
                Chainlink Developer Docs →
              </a>
            </li>
          </ul>
        </section>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:LINKUSD" height={420} />
        </section>

      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/cosmos-ecosystem-map" style={{ color: "#fb923c", marginRight: "1rem" }}>Cosmos Ecosystem Map</a>
        
          <a href="/spending/reviews/lolli" style={{ color: "#fb923c", marginRight: "1rem" }}>Lolli</a>
        </nav>
    </main>
  );
}
