import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Paradex Guide 2026: Zero-Fee ZK Perpetual Trading on Starknet Explained | degen0x",
  description:
    "Paradex explained: zero-fee ZK perpetuals DEX on Starknet, DIME tokenomics, ZK privacy encryption, market position vs Hyperliquid, and how to get started in 2026.",
  keywords: [
    "paradex crypto guide 2026",
    "what is paradex",
    "ZK perpetuals DEX",
    "paradex starknet",
    "zero fee perpetuals trading",
    "DIME token",
    "ZK encrypted trading",
    "paradex vs hyperliquid",
    "starknet appchain",
    "paradex volume open interest",
  ],
  openGraph: {
    title: "Paradex Guide 2026: Zero-Fee ZK Perpetual Trading on Starknet",
    description:
      "The Paradigm-backed ZK perpetuals DEX with zero fees, encrypted positions, and $244B+ cumulative volume. Full guide to trading privately on Starknet.",
    url: `${SITE_URL}/learn/paradex-zk-perpetuals-guide-2026`,
    type: "article",
    publishedTime: "2026-03-27T00:00:00Z",
    modifiedTime: "2026-03-27T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-paradex-zk-perpetuals-guide.svg`,
        width: 1200,
        height: 630,
        alt: "Paradex Guide 2026 — Zero-fee ZK perpetuals DEX on Starknet with $244B volume, $553M OI, and encrypted positions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paradex Guide 2026: Zero-Fee ZK Perpetual Trading",
    description:
      "The Paradigm-backed ZK perps DEX — $244B volume, $553M OI, zero fees, encrypted positions. Full guide →",
    images: [`${SITE_URL}/og-paradex-zk-perpetuals-guide.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/paradex-zk-perpetuals-guide-2026`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Paradex Guide 2026: Zero-Fee ZK Perpetual Trading on Starknet",
  description:
    "Complete guide to Paradex — Paradigm-backed ZK perpetuals DEX on Starknet, zero-fee model with RPI, ZK-encrypted positions, DIME tokenomics, market metrics, and competitive landscape.",
  url: `${SITE_URL}/learn/paradex-zk-perpetuals-guide-2026`,
  datePublished: "2026-03-27T00:00:00Z",
  dateModified: "2026-03-27T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/og-paradex-zk-perpetuals-guide.svg`,
  wordCount: 2600,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Paradex?",
    answer:
      "Paradex is a zero-fee perpetuals DEX built as a Starknet appchain by Paradigm. It uses zero-knowledge encryption to hide trader positions, entries, exits, and liquidation levels from everyone — even validators. Trades never touch public mempools, providing complete privacy.",
  },
  {
    question: "How does Paradex charge zero fees?",
    answer:
      "Paradex uses a Retail Price Improvement (RPI) model where market makers earn 0.5 basis points (0.005%) on retail fills. This model allows zero maker/taker fees for traders while still incentivizing market maker liquidity. The platform profits from market making volume rather than charging direct trading fees.",
  },
  {
    question: "What is the DIME token?",
    answer:
      "DIME is Paradex's native token launching in early 2026. 25% of its fully diluted value is being airdropped to XP holders (community participants), and all tokens are fully unlocked at TGE with no vesting. This contrasts sharply with most other crypto token launches that have long vesting schedules.",
  },
  {
    question: "How does ZK encryption work on Paradex?",
    answer:
      "Paradex uses zero-knowledge proofs to encrypt trader positions and order data at the account level. This means positions, entry prices, exit prices, liquidation levels, and all account activity are hidden from validators, other traders, and the public blockchain. Only the account owner holds the decryption key.",
  },
  {
    question: "Is Paradex safe compared to other perps DEXs?",
    answer:
      "Paradex has strong technical backing from Paradigm and built-in privacy through ZK encryption. However, risks include Starknet dependency (if the L2 faces issues), smart contract risk, and liquidity depth vs. centralized exchanges. Always use risk management and never risk capital you can't afford to lose.",
  },
  {
    question: "How does Paradex compare to Hyperliquid?",
    answer:
      "Hyperliquid is the dominant perps DEX with $9.57B open interest, built as a sovereign blockchain. Paradex ($553M OI) is smaller but offers ZK privacy encryption and zero fees, whereas Hyperliquid shows positions on-chain. Paradex appeals to traders valuing privacy; Hyperliquid offers scale and brand recognition. Both are strong platforms with different tradeoffs.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ParadexZKPerpetualsGuide() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <StructuredData data={combinedSchema} />

      <article style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Learn", href: "/learn" },
            { label: "Paradex ZK Perpetuals Guide" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: 24, marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#a855f720", color: "#d946ef", border: "1px solid #a855f740",
            }}>
              DeFi
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#3b82f620", color: "#60a5fa", border: "1px solid #3b82f640",
            }}>
              Intermediate
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2,
            marginBottom: 14,
            background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Paradex Guide 2026: Zero-Fee ZK Perpetual Trading on Starknet
          </h1>
          <p style={{ color: "#8b949e", fontSize: 16, lineHeight: 1.7, marginBottom: 10 }}>
            Paradex is a Paradigm-incubated perpetuals DEX that reimagines trading privacy. With zero fees, zero-knowledge encrypted positions, and $244B+ cumulative volume, it&apos;s reshaping the perp landscape on Starknet. Here&apos;s how it works.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 14 min read</div>
        </div>

        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 40 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#58a6ff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#what-is-paradex" style={{ color: "#58a6ff", textDecoration: "none" }}>What Is Paradex?</a></li>
            <li><a href="#how-works" style={{ color: "#58a6ff", textDecoration: "none" }}>How Paradex Works: Zero Fees + ZK Privacy</a></li>
            <li><a href="#starknet-appchain" style={{ color: "#58a6ff", textDecoration: "none" }}>The Starknet Appchain Architecture</a></li>
            <li><a href="#dime-tokenomics" style={{ color: "#58a6ff", textDecoration: "none" }}>DIME Tokenomics</a></li>
            <li><a href="#metrics-position" style={{ color: "#58a6ff", textDecoration: "none" }}>Key Metrics and Market Position</a></li>
            <li><a href="#getting-started" style={{ color: "#58a6ff", textDecoration: "none" }}>Getting Started on Paradex</a></li>
            <li><a href="#competitive" style={{ color: "#58a6ff", textDecoration: "none" }}>Competitive Landscape</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks and Considerations</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1: What Is Paradex */}
        <section id="what-is-paradex" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            1. What Is Paradex?
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex is a <strong style={{ color: "#e6edf3" }}>zero-fee perpetuals DEX</strong> built as a Starknet appchain and backed by <strong style={{ color: "#e6edf3" }}>Paradigm</strong>, one of crypto&apos;s leading venture funds. Unlike centralized exchanges or traditional on-chain DEXs, Paradex achieves something fundamentally different: <strong style={{ color: "#e6edf3" }}>complete position privacy through zero-knowledge encryption</strong>.
          </p>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Launched in 2024, Paradex has grown to <strong style={{ color: "#e6edf3" }}>$244 billion in cumulative trading volume</strong>, with <strong style={{ color: "#e6edf3" }}>$553 million open interest</strong> and <strong style={{ color: "#e6edf3" }}>$158 million total value locked</strong>. It competes directly with Hyperliquid (the dominant perpetuals DEX with $9.57B OI), Aster, Lighter, and traditional centralized derivatives platforms.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>The Core Innovation</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Traditional perpetuals DEXs face a fundamental tradeoff: either show positions on-chain (public but verifiable) or hide them off-chain (private but risky). Paradex solves this with <strong style={{ color: "#e6edf3" }}>ZK-encrypted accounts</strong> — positions are mathematically proven valid without revealing them. Traders get privacy AND on-chain security.
            </p>
          </div>
        </section>

        {/* Section 2: How Paradex Works */}
        <section id="how-works" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            2. How Paradex Works: Zero Fees + ZK Privacy
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex operates on two core mechanics: a novel fee structure (Retail Price Improvement) and zero-knowledge encryption at the account level.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Zero-Fee Model with Retail Price Improvement</h3>

          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex charges <strong style={{ color: "#e6edf3" }}>zero maker/taker fees</strong> to retail traders. Instead, the platform uses a <strong style={{ color: "#e6edf3" }}>Retail Price Improvement (RPI) model</strong>: market makers earn <strong style={{ color: "#e6edf3" }}>0.5 basis points (0.005%)</strong> on fills with retail traders. This allows Paradex to:
          </p>

          <ul style={{ paddingLeft: 24, color: "#c9d1d9", lineHeight: 2, fontSize: 15, marginBottom: 20 }}>
            <li>Attract retail traders with zero trading fees</li>
            <li>Incentivize market maker liquidity without passing costs to users</li>
            <li>Generate sustainable revenue from market making volume</li>
            <li>Compete directly with centralized exchanges on fee structure</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>ZK-Encrypted Accounts</h3>

          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Every trader&apos;s account on Paradex is protected by zero-knowledge cryptography. This means:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { feature: "Position Encryption", desc: "Your position size, leverage, and collateral are hidden from validators, market makers, and the public blockchain." },
              { feature: "Entry/Exit Privacy", desc: "Entry and exit prices are encrypted. Other traders cannot see your order flow or entry points." },
              { feature: "Liquidation Concealment", desc: "Your liquidation level is hidden. Liquidators cannot front-run or manipulate your positions." },
              { feature: "No Mempool Exposure", desc: "Trades never touch public mempools. This eliminates MEV (Miner Extractable Value) attacks and sandwich attacks." },
            ].map((item) => (
              <div key={item.feature} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{item.feature}</h4>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#161b22", border: "1px solid #d2992240", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 8 }}>How ZK Proofs Enable Privacy</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Paradex uses <strong style={{ color: "#e6edf3" }}>zero-knowledge proofs</strong> to prove to the network that account states are valid without revealing the encrypted data. Only the account owner holds the decryption key. This is mathematically proven — no trusted intermediary needed.
            </p>
          </div>
        </section>

        {/* Section 3: Starknet Appchain */}
        <section id="starknet-appchain" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            3. The Starknet Appchain Architecture
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex isn&apos;t just a smart contract on Starknet — it&apos;s a <strong style={{ color: "#e6edf3" }}>Starknet appchain</strong>, meaning it has its own sequencer and execution layer built on top of Starknet&apos;s settlement layer.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Why Build an Appchain?</h3>

          <ul style={{ paddingLeft: 24, color: "#c9d1d9", lineHeight: 2, fontSize: 15, marginBottom: 20 }}>
            <li><strong style={{ color: "#e6edf3" }}>Custom execution layer.</strong> Paradex can customize transaction ordering and include encrypted transactions without exposing them to validators.</li>
            <li><strong style={{ color: "#e6edf3" }}>Cairo VM compatibility.</strong> Built on Starknet&apos;s Cairo VM, which natively supports zero-knowledge proofs — essential for ZK-encrypted positions.</li>
            <li><strong style={{ color: "#e6edf3" }}>Economic alignment.</strong> As an appchain, Paradex captures sequencing fees and maintains control over transaction inclusion order (preventing MEV).</li>
            <li><strong style={{ color: "#e6edf3" }}>Settlement guarantees.</strong> While Paradex has its own sequencer, it settles to Starknet L2, which ultimately settles to Ethereum L1.</li>
          </ul>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>The Starknet Ecosystem</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Paradex is part of a growing ecosystem of Starknet-based platforms. Extended (options) and EdgeX (another perps DEX) also run as Starknet appchains. Together, <strong style={{ color: "#e6edf3" }}>Starknet-based platforms represent ~16% of perpetuals trading volume</strong>, making them a significant force in the perp market.
            </p>
          </div>
        </section>

        {/* Section 4: DIME Tokenomics */}
        <section id="dime-tokenomics" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            4. DIME Tokenomics
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            <code style={{ color: "#79c0ff", background: "#161b22", padding: "1px 6px", borderRadius: 4, fontSize: 14 }}>DIME</code> is Paradex&apos;s native token, launching in early 2026. It stands out for one critical feature: <strong style={{ color: "#e6edf3" }}>25% of fully diluted value is being airdropped to XP holders, with zero vesting</strong> — fully unlocked at token generation event (TGE).
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #30363d" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Category</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Allocation</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Vesting / Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>XP Airdrop</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>25% FDV</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Fully unlocked at TGE — rewards early platform participants</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Community & Ecosystem</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>20% FDV</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Emissions over time for liquidity, rewards, governance</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Team & Advisors</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>15% FDV</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>4-year vest with 1-year cliff</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Investors</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>25% FDV</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Strategic investors and seed rounds, tiered vesting</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Treasury</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>15% FDV</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>DAO-controlled, used for operations and development</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#161b22", border: "1px solid #22c55e40", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#4ade80", marginBottom: 8 }}>The Airdrop Signal</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              The 25% XP airdrop with zero vesting is a strong signal of confidence. Unlike most token launches where teams and investors are locked up, Paradex is giving early users an immediate, vesting-free claim. This contrasts sharply with launches like Hyperliquid (which had 10-year vesting for early participants) and signals Paradigm&apos;s belief in sustainable token economics.
            </p>
          </div>
        </section>

        {/* Section 5: Key Metrics and Market Position */}
        <section id="metrics-position" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            5. Key Metrics and Market Position
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 20 }}>
            Paradex has achieved meaningful scale despite being younger than Hyperliquid. Here&apos;s how it stacks up:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #30363d" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Platform</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Open Interest</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>TVL</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Key Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Hyperliquid</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>$9.57B</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>(Sovereign chain)</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Dominant perps DEX, 50% fee share</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Aster</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>$2.738B</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>~$480M</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Cross-chain perps, Avalanche base</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Lighter</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>$1.428B</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>~$350M</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Hybrid order book, Arbitrum base</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #21262d" }}>
                  <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>Paradex</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>$553M</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>$158M</td>
                  <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>Zero-fee ZK encrypted, Starknet appchain</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { metric: "$244B", label: "Cumulative Trading Volume", desc: "Total volume since launch" },
              { metric: "$553M", label: "Current Open Interest", desc: "Active leveraged positions" },
              { metric: "$158M", label: "Total Value Locked", desc: "Collateral held on-chain" },
              { metric: "~16%", label: "Starknet Perp Market Share", desc: "Paradex + Extended + EdgeX combined" },
            ].map((item) => (
              <div key={item.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "#58a6ff" }}>{item.metric}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{item.label}</h4>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Getting Started */}
        <section id="getting-started" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            6. Getting Started on Paradex
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Trading on Paradex is straightforward. Here&apos;s the step-by-step process:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { step: "1", title: "Set up a Starknet wallet", desc: "Use Argent or Braavos (the primary Starknet wallets). These are Web3 wallets designed for Starknet, with built-in account abstraction." },
              { step: "2", title: "Bridge funds to Starknet", desc: "Bridge ETH or USDC from Ethereum or other chains to Starknet using bridges like Stargate or the official Starknet bridge. This becomes your trading collateral." },
              { step: "3", title: "Connect to Paradex", desc: "Visit paradex.trade, connect your Starknet wallet, and go through the KYC process (if required). You can then deposit collateral into your trading account." },
              { step: "4", title: "Place your first trade", desc: "Select a perpetual (Bitcoin, Ethereum, altcoins). Set your position size, leverage (up to 20x in most cases), and place a market or limit order. Your position is encrypted immediately." },
              { step: "5", title: "Manage your position", desc: "Monitor your P&L on the dashboard. Close positions or adjust leverage through the interface. All transactions remain encrypted to the network." },
            ].map((item) => (
              <div key={item.step} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ padding: "2px 10px", background: "#22c55e20", color: "#4ade80", borderRadius: 6, fontSize: 13, fontWeight: 700, border: "1px solid #22c55e40" }}>Step {item.step}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{item.title}</h4>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Competitive Landscape */}
        <section id="competitive" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            7. Competitive Landscape
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex operates in a competitive perpetuals market. The question isn&apos;t whether it can survive — it clearly has strong backing and product-market fit — but where it fits in a crowded landscape.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Hyperliquid: The 800-Pound Gorilla</h3>

          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Hyperliquid dominates on-chain perpetuals with <strong style={{ color: "#e6edf3" }}>$9.57B in open interest</strong> — roughly 17x larger than Paradex. It built brand recognition, depth, and a strong crypto-native user base. However, Hyperliquid shows positions on-chain (no privacy) and charges trading fees. Paradex appeals to users who prioritize privacy and prefer zero fees.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Aster &amp; Lighter: Cross-Chain Competitors</h3>

          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Aster (Avalanche-based) and Lighter (Arbitrum-based) are smaller but well-funded perps DEXs. They offer deeper integrations with their respective ecosystems but lack Paradigm&apos;s brand and Paradex&apos;s privacy features.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Centralized Exchanges: Still the Bulk</h3>

          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Binance, Bybit, and other CEXs still dominate perpetuals trading by volume. DEXs like Paradex are attracting traders who value self-custody and on-chain transparency, but CEXs maintain advantages in regulatory clarity, customer support, and mobile apps.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #a855f740", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#d946ef", marginBottom: 8 }}>Why Paradex Could Win</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Paradigm backing provides credibility and capital. Zero fees + ZK privacy is a compelling narrative that resonates with crypto-native traders. As Starknet scales and the ecosystem matures, Paradex is positioned to capture a meaningful share of privacy-conscious and fee-conscious traders.
            </p>
          </div>
        </section>

        {/* Section 8: Risks and Considerations */}
        <section id="risks" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            8. Risks and Considerations
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Paradex is a compelling platform, but real risks exist. We don&apos;t sugarcoat risks at degen0x. Here&apos;s what you need to know:
          </p>
          <ul style={{ paddingLeft: 24, color: "#c9d1d9", lineHeight: 2, fontSize: 15 }}>
            <li><strong style={{ color: "#e6edf3" }}>Starknet dependency.</strong> Paradex&apos;s security and performance depend on Starknet. If Starknet faces downtime, reorganizations, or consensus issues, Paradex is affected. Starknet is battle-tested but still younger than Ethereum or Arbitrum.</li>
            <li><strong style={{ color: "#e6edf3" }}>Liquidity depth.</strong> With $553M OI, Paradex is smaller than Hyperliquid. During high volatility, slippage can be worse. Large traders may prefer the deeper order books on Hyperliquid or CEXs.</li>
            <li><strong style={{ color: "#e6edf3" }}>Smart contract risk.</strong> ZK-encrypted accounts are novel. The Cairo smart contracts powering Paradex have been audited, but ZK systems are complex. A critical bug could compromise security or freeze user funds.</li>
            <li><strong style={{ color: "#e6edf3" }}>Privacy tradeoffs.</strong> While Paradex encrypts positions, on-chain data like deposit/withdrawal transactions and funding payments are still visible. Perfect privacy is impossible in on-chain systems.</li>
            <li><strong style={{ color: "#e6edf3" }}>Adoption risk.</strong> Paradex needs sustained user growth to build network effects. If adoption slows, liquidity could dry up and the platform could become less useful.</li>
            <li><strong style={{ color: "#e6edf3" }}>Regulatory uncertainty.</strong> Decentralized perpetuals exchanges face ambiguous regulatory status in many jurisdictions. Regulators could clamp down, forcing changes to the platform.</li>
          </ul>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            FAQ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { q: "What is Paradex?", a: "Paradex is a zero-fee perpetuals DEX on Starknet, backed by Paradigm. It uses zero-knowledge encryption to hide trader positions, entries, exits, and liquidation levels from everyone — even validators. Trades never touch public mempools, eliminating MEV attacks." },
              { q: "How does Paradex charge zero fees?", a: "Paradex uses a Retail Price Improvement (RPI) model where market makers earn 0.5 bps (0.005%) on retail fills. This allows traders to pay zero maker/taker fees while the platform profits from market making volume." },
              { q: "What is the DIME token?", a: "DIME is Paradex's native token launching in early 2026. 25% of fully diluted value is being airdropped to XP holders with zero vesting — fully unlocked at TGE. This contrasts sharply with most token launches that have long vesting schedules." },
              { q: "How does ZK encryption work on Paradex?", a: "Paradex uses zero-knowledge proofs to encrypt trader accounts at the smart contract level. Positions, order data, and liquidation levels are mathematically proven valid without being revealed. Only the account owner holds the decryption key." },
              { q: "Is Paradex safe?", a: "Paradex is backed by Paradigm and has strong technical fundamentals. However, risks include Starknet dependency, smart contract risk, and smaller liquidity vs. Hyperliquid. Always use risk management and never trade with capital you can't afford to lose." },
              { q: "How does Paradex compare to Hyperliquid?", a: "Hyperliquid dominates on-chain perps ($9.57B OI vs. Paradex's $553M) with higher brand recognition. Paradex offers zero fees, ZK privacy, and Paradigm backing. Hyperliquid shows positions on-chain and charges fees. Choose based on your priorities: scale vs. privacy." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{item.q}</h3>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            Related Guides
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { label: "Perp DEX Wars Comparison 2026", href: "/learn/perp-dex-wars-comparison-2026" },
              { label: "Hyperliquid Guide", href: "/learn/hyperliquid-guide" },
              { label: "Zero-Knowledge Proofs Guide", href: "/learn/zero-knowledge-proofs-guide" },
              { label: "Funding Rates Guide", href: "/tools/funding-rates" },
              { label: "DeFi Safety Guide 2026", href: "/learn/defi-safety-guide-2026" },
              { label: "Crypto Wallet Security Guide 2026", href: "/learn/crypto-wallet-security-guide-2026" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  display: "inline-block", padding: "8px 16px", background: "#161b22",
                  border: "1px solid #30363d", borderRadius: 8, color: "#58a6ff",
                  fontSize: 13, textDecoration: "none", fontWeight: 600,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>

        <BackToTop />
      </article>
    </div>
  );
}
