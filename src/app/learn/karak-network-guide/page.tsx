import type { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import KarakYieldEstimator from "@/components/KarakYieldEstimator";
import BackToTop from "@/components/BackToTop";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Karak Network Guide 2026 — Universal Restaking Explained | degen0x",
  description:
    "Karak is the second-largest restaking protocol with $1B+ TVL. Learn how multi-chain, multi-asset restaking works, compare Karak vs EigenLayer, and how to earn.",
  keywords: [
    "karak network guide",
    "karak restaking",
    "karak vs eigenlayer",
    "what is karak",
    "karak network 2026",
    "universal restaking",
    "multi-chain restaking",
  ],
  openGraph: {
    title: "Karak Network 2026: Universal Restaking for Any Asset, Any Chain",
    description:
      "Second-largest restaking protocol with $1B+ TVL. Supports BTC, stablecoins, LP tokens, and ETH across 5+ chains. Full guide inside.",
    url: "https://degen0x.com/learn/karak-network-guide",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/api/og?title=Karak+Network:+Universal+Restaking+Guide+2026&category=Learn&type=learn",
        width: 1200,
        height: 630,
        alt: "Karak Network Restaking Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karak Network Guide 2026 — Universal Restaking Explained",
    description:
      "$1B+ TVL restaking protocol supporting BTC, stablecoins, and LP tokens across 5+ chains. See how it stacks up against EigenLayer.",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Karak Network Guide 2026 — Universal Restaking Explained",
  description:
    "Karak is the second-largest restaking protocol with $1B+ TVL. Learn how multi-chain, multi-asset restaking works, compare Karak vs EigenLayer, and how to earn.",
  url: "https://degen0x.com/learn/karak-network-guide",
  datePublished: "2026-03-17T00:00:00Z",
  dateModified: "2026-03-17T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/api/og?title=Karak+Network:+Universal+Restaking+Guide+2026&category=Learn&type=learn",
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  {
    question: "Is Karak only for Ethereum users?",
    answer:
      "No — that's one of Karak's biggest differentiators. It supports multi-chain deposits and accepts Bitcoin (WBTC, cbBTC), stablecoins, LP tokens, and yield-bearing assets across Ethereum, Arbitrum, Optimism, Mantle, and BNB Chain.",
  },
  {
    question: "Does Karak have its own token?",
    answer:
      "As of March 2026, Karak does not have a native token. The team has not publicly confirmed tokenomics or a launch date. Some users are participating for anticipated airdrop eligibility — but nothing is guaranteed.",
  },
  {
    question: "How does Karak compare to EigenLayer?",
    answer:
      "EigenLayer is larger ($18–20B TVL) with more live AVSs. Karak ($1B+ TVL) differentiates on multi-chain and multi-asset support, particularly for Bitcoin and stablecoin holders who have no option with EigenLayer.",
  },
  {
    question: "Can I lose my entire deposit on Karak?",
    answer:
      "In theory, yes — if an operator is slashed on a DSS you're delegated to and the slash is 100%. In practice, slashing conditions are designed to be narrow. But smart contract bugs could also result in partial or total loss.",
  },
  {
    question: "What yields can I expect from Karak?",
    answer:
      "Yields vary significantly by asset, operator, and DSS. Stablecoin restaking has yielded 4–8% APY ranges while riskier positions vary widely. Yields are not guaranteed and depend on DSS reward distributions.",
  },
  {
    question: "How is Karak different from just staking on Ethereum?",
    answer:
      "Native Ethereum staking secures only Ethereum and earns ~3–4% APY. Karak restaking lets your same capital secure additional services on top, potentially earning additional rewards — but with additional slashing conditions layered on.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Style constants ──────────────────────────────────────────────────────────
const S = {
  bg: "#0d1117",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  primary: "#58a6ff",
  purple: "#bc8cff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
  red: "#f85149",
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Karak Network Guide", href: "/learn/karak-network-guide" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KarakNetworkGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData data={combinedSchema} />

      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* ── Header ── */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>
              🔒 Restaking
            </span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>
              Intermediate
            </span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 2026 · 14 min read</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Karak Network Guide 2026: Universal Restaking for Any Asset, Any Chain
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Karak is the second-largest restaking protocol with over $1 billion in TVL — and it&apos;s challenging EigenLayer
            by doing something neither EigenLayer nor Symbiotic can: letting you restake virtually any asset across any
            blockchain. Bitcoin, stablecoins, LP tokens, yield-bearing positions — all of it can secure the next generation
            of decentralized services on Karak.
          </p>
        </header>

        {/* ── Table of Contents ── */}
        <nav style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: "20px 24px", marginBottom: 48 }}>
          <p style={{ fontWeight: 700, marginBottom: 12, fontSize: 13, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Table of Contents
          </p>
          {[
            ["#what-is-karak", "1. What is Karak Network?"],
            ["#how-it-works", "2. How Karak Restaking Works"],
            ["#supported-assets", "3. Supported Assets & Chains"],
            ["#dss-ecosystem", "4. Decentralized Security Services (DSS)"],
            ["#karak-vs-competitors", "5. Karak vs EigenLayer vs Symbiotic"],
            ["#how-to-participate", "6. How to Participate"],
            ["#risks", "7. Risks to Understand"],
            ["#faq", "8. FAQ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ display: "block", color: S.primary, fontSize: 14, padding: "4px 0", textDecoration: "none" }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* ── Section 1 ── */}
        <section id="what-is-karak" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            1. What is Karak Network?
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Karak Network is a multi-chain restaking protocol that lets you use almost any crypto asset to secure new
            decentralized services — and earn yield in return. Launched and backed by Andalusia Labs, Karak quickly reached
            a $1 billion valuation and surpassed $1B in total value locked (TVL), making it the{" "}
            <strong style={{ color: S.text }}>second-largest restaking protocol</strong> after EigenLayer.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The core mission: democratize cryptoeconomic security. Every new protocol that wants to be trustworthy needs
            economic security — validators who stake real value and lose it if they cheat. Bootstrapping that from scratch
            is brutally hard. Karak creates a marketplace where new protocols can rent security from existing capital —
            and that capital can be yours.
          </p>
          <div style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: "20px 24px", marginBottom: 16 }}>
            <p style={{ color: S.primary, fontWeight: 700, marginBottom: 8 }}>💡 The Key Idea</p>
            <p style={{ color: S.text2, lineHeight: 1.7 }}>
              Traditional staking: stake ETH → secure Ethereum → earn ETH rewards.<br />
              Karak: stake almost anything → secure multiple networks simultaneously → earn multi-source rewards.<br />
              <strong style={{ color: S.text }}>Same capital. More yield. More utility.</strong>
            </p>
          </div>
        </section>

        {/* ── Section 2 ── */}
        <section id="how-it-works" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            2. How Karak Restaking Works
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The architecture is elegant. Here&apos;s the flow from your wallet to securing a new decentralized service:
          </p>
          {[
            {
              step: "Step 1: Deposit into Karak Vaults",
              body: "You deposit supported assets — ETH, WBTC, stablecoins, LP tokens, etc. — into Karak vaults. These vaults hold your collateral and issue vault receipt tokens representing your deposit. Think of them as the entry point to the Karak security layer.",
            },
            {
              step: "Step 2: Delegate to Operators",
              body: "Like EigenLayer, Karak separates depositors from operators. You deposit and delegate your vault position to an operator — a professional node runner who runs the actual software for Decentralized Security Services (DSS). This means you don't need to run infrastructure yourself.",
            },
            {
              step: "Step 3: Operators Register for DSS",
              body: "Operators opt into specific Decentralized Security Services (DSS) — Karak's version of EigenLayer's AVSs. Each DSS has its own slashing conditions and reward structure. When the operator behaves honestly, everyone earns. If they cheat, collateral gets slashed.",
            },
            {
              step: "Step 4: Earn Rewards",
              body: "DSS protocols pay operators for providing security, and operators pass a portion through to depositors. You earn yield on capital that may already be generating yield elsewhere — a powerful compounding layer.",
            },
          ].map(({ step, body }) => (
            <div key={step} style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: S.text, marginBottom: 8 }}>{step}</h3>
              <p style={{ color: S.text2, lineHeight: 1.8 }}>{body}</p>
            </div>
          ))}
          <div style={{ background: "#161b22", border: `1px solid ${S.orange}40`, borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ color: S.orange, fontWeight: 700, marginBottom: 8 }}>⚠️ Slashing Risk is Real</p>
            <p style={{ color: S.text2, lineHeight: 1.7 }}>
              If an operator misbehaves or runs into bugs in a DSS, your deposited collateral can be slashed (partially or
              fully burned). Choose operators with proven track records. Diversify across multiple operators if possible.
            </p>
          </div>
        </section>

        {/* ── Section 3 ── */}
        <section id="supported-assets" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            3. Supported Assets &amp; Chains
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            This is where Karak truly differentiates. While EigenLayer restricts restaking to ETH and Ethereum-based
            liquid staking tokens, Karak accepts the broadest collateral set in the restaking landscape:
          </p>
          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Asset Category", "Examples", "Why It Matters"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ETH & LSTs", "stETH, rETH, weETH", "Core Ethereum staking assets"],
                  ["Bitcoin", "WBTC, cbBTC, lBTC", "First restaking protocol to meaningfully support BTC"],
                  ["Stablecoins", "USDC, USDT, DAI, USDe", "Low-risk collateral option for conservative restakers"],
                  ["LP Tokens", "Uniswap V3 positions, Curve LPs", "Earn trading fees + restaking rewards simultaneously"],
                  ["Yield-bearing", "Pendle PT tokens, sDai, aUSDC", "Stack yield on already-yielding assets"],
                  ["Protocol tokens", "Operator-specific assets", "DAOs can use their own tokens for security"],
                ].map(([cat, ex, why], i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}20` }}>
                    <td style={{ padding: "12px 14px", color: S.text, fontWeight: 600 }}>{cat}</td>
                    <td style={{ padding: "12px 14px", color: S.text2, fontFamily: "monospace", fontSize: 13 }}>{ex}</td>
                    <td style={{ padding: "12px 14px", color: S.text2 }}>{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: S.text, marginBottom: 10 }}>
            Supported Chains (March 2026)
          </h3>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Karak&apos;s cross-chain architecture is live across:{" "}
            <strong style={{ color: S.text }}>Ethereum, Arbitrum, Optimism, Mantle, BNB Chain</strong>, and{" "}
            <strong style={{ color: S.text }}>K2</strong> — Karak&apos;s own purpose-built chain for high-frequency DSS
            activity. This multi-chain approach means Bitcoin DeFi users on Arbitrum, stablecoin holders on BNB Chain,
            and ETH restakers on mainnet all have access to the same security marketplace without bridging to Ethereum first.
          </p>
        </section>

        {/* ── Section 4 ── */}
        <section id="dss-ecosystem" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            4. Decentralized Security Services (DSS)
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            DSS is Karak&apos;s term for the services that consume security from the restaking pool. If EigenLayer calls
            them AVSs (Actively Validated Services), Karak calls them DSS — and the concept is similar: applications
            that need honest, economically-incentivized validation.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            DSS can include oracle networks, cross-chain bridges, data availability layers, keeper networks, AI inference
            verification, and more. Any service that needs &quot;we&apos;ll lose real money if we lie&quot; as a security model
            can become a DSS on Karak.
          </p>
          <div style={{ background: "#161b22", border: `1px solid ${S.green}40`, borderRadius: 12, padding: "20px 24px" }}>
            <p style={{ color: S.green, fontWeight: 700, marginBottom: 8 }}>✅ For DSS Builders</p>
            <p style={{ color: S.text2, lineHeight: 1.7 }}>
              Building a new DSS on Karak is straightforward via the Karak SDK. Your service inherits the full TVL of
              Karak&apos;s security pool without requiring users to stake a new token — dramatically reducing the time to
              bootstrap secure infrastructure.
            </p>
          </div>
        </section>

        {/* ── Section 5 ── */}
        <section id="karak-vs-competitors" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            5. Karak vs EigenLayer vs Symbiotic
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The restaking wars are heating up in 2026. Here&apos;s how the three major players compare:
          </p>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Feature", "Karak", "EigenLayer", "Symbiotic"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["TVL (Mar 2026)", "~$1B+", "~$18–20B", "~$2–3B"],
                  ["Collateral", "Any asset ✅", "ETH + LSTs only", "Any ERC-20"],
                  ["Chain support", "Multi-chain ✅", "Ethereum only", "EVM only"],
                  ["Services (AVS/DSS)", "Growing", "50+ AVSs live", "Growing"],
                  ["Bitcoin support", "✅ WBTC, cbBTC", "❌", "❌"],
                  ["Stablecoin restaking", "✅", "❌", "Limited"],
                  ["Native token", "None yet", "EIGEN", "None yet"],
                  ["Backers", "Andalusia Labs", "a16z, Coinbase", "Paradigm, Lido"],
                ].map(([feat, karak, eigen, sym], i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}20` }}>
                    <td style={{ padding: "12px 14px", color: S.text2, fontWeight: 600 }}>{feat}</td>
                    <td style={{ padding: "12px 14px", color: S.primary, fontWeight: 600 }}>{karak}</td>
                    <td style={{ padding: "12px 14px", color: S.text2 }}>{eigen}</td>
                    <td style={{ padding: "12px 14px", color: S.text2 }}>{sym}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            EigenLayer is the market leader by a wide margin — its network effects and established AVS ecosystem are
            formidable. But Karak&apos;s multi-chain, multi-asset approach targets a different and complementary market.
            If you hold Bitcoin, stablecoins, or LP tokens and want restaking exposure, Karak is currently your best
            option. Explore our full{" "}
            <a href="/learn/restaking-eigenlayer-guide" style={{ color: S.primary }}>EigenLayer guide</a> and{" "}
            <a href="/learn/symbiotic-restaking" style={{ color: S.primary }}>Symbiotic guide</a> to compare firsthand.
          </p>
        </section>

        {/* ── Section 6 ── */}
        <section id="how-to-participate" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            6. How to Participate in Karak Restaking
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Getting started with Karak is accessible — you don&apos;t need to run a node. Here&apos;s the path from
            zero to restaking:
          </p>
          {[
            {
              n: 1,
              title: "Acquire a Supported Asset",
              body: "Get any Karak-supported asset: stETH, WBTC, USDC, weETH, or an LP token from a DeFi protocol you already use.",
            },
            {
              n: 2,
              title: "Visit app.karak.network",
              body: "Connect your wallet and navigate to the Vaults section. Each vault shows the current TVL, operator selection, and estimated APY.",
            },
            {
              n: 3,
              title: "Deposit into a Vault",
              body: "Approve the token and deposit. You'll receive vault receipt tokens representing your position — standard ERC-20 tokens you can track in your wallet.",
            },
            {
              n: 4,
              title: "Delegate to an Operator",
              body: "Select an operator to delegate your vault position to. Review their DSS participation, track record, and commission rate. Delegation activates earning — and slashing risk.",
            },
            {
              n: 5,
              title: "Monitor & Manage",
              body: "Use the Karak dashboard to track your restaking yield, check DSS status, and manage your operator delegation. You can un-delegate and withdraw after an un-bonding period.",
            },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${S.primary}20`, border: `1px solid ${S.primary}40`, display: "flex", alignItems: "center", justifyContent: "center", color: S.primary, fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                {n}
              </div>
              <div>
                <p style={{ color: S.text, fontWeight: 700, marginBottom: 6 }}>{title}</p>
                <p style={{ color: S.text2, lineHeight: 1.7 }}>{body}</p>
              </div>
            </div>
          ))}
          <p style={{ color: S.text2, lineHeight: 1.8, marginTop: 8 }}>
            Track your DeFi yields and restaking positions in our{" "}
            <a href="/tools/defi-yields" style={{ color: S.primary }}>DeFi Yields tool</a>.
          </p>
          <KarakYieldEstimator />
        </section>

        {/* ── Section 7 ── */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>
            7. Risks to Understand Before You Restake
          </h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Restaking is a powerful but complex strategy. The same features that make Karak attractive — broad asset
            support, cross-chain reach, multi-DSS composability — also layer on additional risks:
          </p>
          {[
            { color: S.red, icon: "⚡", title: "Smart Contract Risk", body: "Karak's contracts have been audited, but no audit guarantees safety. Cross-chain architecture adds additional surface area. Only restake what you can afford to lose in an exploit scenario." },
            { color: S.orange, icon: "✂️", title: "Slashing Risk", body: "If your operator misbehaves or a DSS has a bug triggering false slashing, your collateral can be partially or fully slashed. Operator choice matters enormously." },
            { color: S.yellow, icon: "🔒", title: "Un-bonding Period", body: "Withdrawals are subject to an un-bonding period — typically several days to weeks depending on the DSS. Your capital isn't instantly liquid." },
            { color: S.primary, icon: "📊", title: "No Native Token Yet", body: "As of March 2026, Karak has no native token. Some TVL is driven by airdrop farming speculation. If a token launches and farming stops, TVL — and potentially yields — could drop." },
            { color: S.green, icon: "🌐", title: "Cross-Chain Bridge Risk", body: "Depositing from chains other than Ethereum involves cross-chain messaging and bridge contracts. Bridge exploits, while rare, are a real risk in multi-chain DeFi." },
          ].map(({ color, icon, title, body }) => (
            <div key={title} style={{ background: "#161b22", border: `1px solid ${color}40`, borderRadius: 12, padding: "16px 20px", marginBottom: 12 }}>
              <p style={{ color, fontWeight: 700, marginBottom: 6 }}>{icon} {title}</p>
              <p style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{body}</p>
            </div>
          ))}
          <div style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 20px", marginTop: 8 }}>
            <p style={{ color: S.text2, fontSize: 13, lineHeight: 1.7 }}>
              ⚠️ <strong style={{ color: S.text }}>This guide is for informational purposes only. It is not financial advice.</strong>{" "}
              Always do your own research before making investment decisions. Use our{" "}
              <a href="/tools/defi-risk-scanner" style={{ color: S.primary }}>DeFi Risk Scanner</a> before depositing significant capital.
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24, color: S.primary }}>
            8. Frequently Asked Questions
          </h2>
          {[
            ["Is Karak only for Ethereum users?", "No — Karak supports multi-chain deposits and accepts Bitcoin (WBTC, cbBTC), stablecoins, LP tokens, and yield-bearing assets across Ethereum, Arbitrum, Optimism, Mantle, and BNB Chain."],
            ["Does Karak have its own token?", "As of March 2026, Karak does not have a native token. The team has not publicly confirmed tokenomics or a launch date. Some users participate for anticipated airdrop eligibility — but nothing is guaranteed."],
            ["How does Karak compare to EigenLayer?", "EigenLayer is larger ($18–20B TVL) with more live AVSs. Karak ($1B+ TVL) differentiates on multi-chain and multi-asset support, particularly for Bitcoin and stablecoin holders who have no option with EigenLayer."],
            ["Can I lose my entire deposit on Karak?", "In theory, yes — if an operator is slashed on a DSS you're delegated to with a 100% slash. In practice, slashing conditions are designed to be narrow. But smart contract bugs could also result in partial or total loss."],
            ["What yields can I expect from Karak?", "Yields vary significantly by asset, operator, and DSS. Stablecoin restaking has seen 4–8% APY ranges while riskier positions vary widely. Yields are not guaranteed and depend on DSS reward distributions."],
            ["How is Karak different from just staking on Ethereum?", "Native Ethereum staking secures only Ethereum and earns ~3–4% APY. Karak restaking lets your same capital secure additional services on top, potentially earning additional rewards — but with additional slashing conditions layered on."],
          ].map(([q, a], i) => (
            <div key={i} style={{ borderBottom: `1px solid ${S.border}`, paddingBottom: 20, marginBottom: 20 }}>
              <p style={{ color: S.text, fontWeight: 700, marginBottom: 8 }}>{q}</p>
              <p style={{ color: S.text2, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </section>

        {/* ── Related ── */}
        <section>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related Guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["/learn/restaking-eigenlayer-guide", "Restaking & EigenLayer Guide"],
              ["/learn/symbiotic-restaking", "Symbiotic Restaking Guide"],
              ["/tools/defi-yields", "DeFi Yields Tool"],
              ["/tools/defi-risk-scanner", "DeFi Risk Scanner"],
              ["/learn/fluid-protocol-guide", "Fluid Protocol Guide"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                style={{ display: "block", background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", color: S.primary, fontSize: 14, textDecoration: "none" }}
              >
                {label} →
              </a>
            ))}
          </div>
        </section>
      </article>
      <BackToTop />
    </main>
  );
}
