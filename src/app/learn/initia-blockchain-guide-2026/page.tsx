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
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Initia (INIT) Guide 2026: Modular Blockchain With Interwoven Rollups | degen0x",
  description:
    "Initia explained: how the Interwoven Stack, Minitias (L2 rollups), and Omnitia architecture unify modular blockchains. INIT tokenomics, ecosystem, and 2026 outlook.",
  keywords: [
    "initia blockchain guide 2026",
    "what is initia crypto",
    "INIT token explained",
    "initia minitias rollups",
    "interwoven stack blockchain",
    "initia omnitia architecture",
    "modular blockchain L1 L2",
    "initia cosmos rollups",
    "INIT tokenomics vesting",
    "initia ecosystem guide",
  ],
  openGraph: {
    title: "Initia (INIT) Guide 2026: Modular L1 + L2 Blockchain Explained",
    description:
      "How Initia unifies modular blockchains with Minitia rollups, multi-VM support, and the Interwoven Stack. Tokenomics, ecosystem, and risks.",
    url: `${SITE_URL}/learn/initia-blockchain-guide-2026`,
    type: "article",
    publishedTime: "2026-03-27T00:00:00Z",
    modifiedTime: "2026-03-27T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-initia-blockchain-guide-2026.svg`,
        width: 1200,
        height: 630,
        alt: "Initia Guide 2026 — Modular L1+L2 blockchain with Minitia rollups, EVM/MoveVM/WasmVM support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Initia (INIT) Guide 2026: Interwoven Rollups Explained",
    description:
      "The modular blockchain that connects L1 + L2 rollups with multi-VM support. Full guide →",
    images: [`${SITE_URL}/og-initia-blockchain-guide-2026.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/initia-blockchain-guide-2026`,
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Initia (INIT) Guide 2026: Modular Blockchain With Interwoven Rollups Explained",
  description:
    "Complete guide to Initia — how the Interwoven Stack and Minitia rollups unify modular blockchains, INIT tokenomics, ecosystem growth, and 2026 roadmap.",
  url: `${SITE_URL}/learn/initia-blockchain-guide-2026`,
  datePublished: "2026-03-27T00:00:00Z",
  dateModified: "2026-03-27T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/og-initia-blockchain-guide-2026.svg`,
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is Initia (INIT)?",
    answer:
      "Initia is a modular blockchain platform that combines a Cosmos-based Layer 1 orchestration chain with customizable Layer 2 rollups called Minitias. It supports EVM, MoveVM, and WasmVM, allowing developers to build app-specific chains while sharing security, liquidity, and interoperability through the Interwoven Stack.",
  },
  {
    question: "What are Minitias?",
    answer:
      "Minitias (short for 'mini Initias') are application-specific Layer 2 rollups built on Initia's L1. Each Minitia can choose its own virtual machine (EVM, MoveVM, or WasmVM), customize its execution environment, and achieve up to 10,000 TPS with 500ms block times — all while inheriting security from the Initia L1 validator set.",
  },
  {
    question: "How does the INIT token work?",
    answer:
      "INIT has a total supply of 1 billion tokens. It's used for gas fees, staking to secure the L1 network, governance voting, and liquidity provision. Key allocations include 25% for the Vested Interest Program (VIP) that rewards ecosystem participants, 25% for staking and enshrined liquidity, 15.25% for investors, and 15% for contributors.",
  },
  {
    question: "Who founded Initia?",
    answer:
      "Initia was co-founded by Ezaan Mangalji (Zon) and Stan Liu, both former Terra and Cosmos developers. The project is headquartered in Singapore with a team of about 20 people globally. It has raised $24M+ across pre-seed (Binance Labs), seed ($7.5M from Delphi Ventures and Hack VC), Series A ($14M led by Theory Ventures), and a community round ($2.5M via Echo).",
  },
  {
    question: "What is the Interwoven Stack?",
    answer:
      "The Interwoven Stack is Initia's framework for deploying L2 rollups. It combines elements from Optimism's OP Stack with Cosmos IBC (Inter-Blockchain Communication), creating a VM-agnostic optimistic rollup framework. Developers can spin up EVM, MoveVM, or WasmVM rollups that interoperate natively through IBC.",
  },
  {
    question: "Is Initia a good investment in 2026?",
    answer:
      "Initia has strong technical architecture and quality investors, but faces challenges including relatively low TVL (~$34M as of early 2026), significant token unlocks starting April 2026, and competition from established modular ecosystems like Celestia, Optimism, and Arbitrum. Always do your own research before investing.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InitiaBlockchainGuide() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <StructuredData data={combinedSchema} />

      <article aria-label="Initia Blockchain Guide 2026" style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px 80px" }}>
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Learn", href: "/learn" },
            { label: "Initia (INIT) Guide" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: 24, marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#a855f720", color: "#c084fc", border: "1px solid #a855f740",
            }}>
              Modular Blockchain
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140",
            }}>
              Layer 1 &amp; Layer 2
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#0ea5e920", color: "#38bdf8", border: "1px solid #0ea5e940",
            }}>
              Intermediate
            </span>
          </div>
          <h1 style={{
            fontSize: "clamp(1.9rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.2,
            marginBottom: 14,
            background: "linear-gradient(135deg, #a855f7, #06b6d4)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Initia (INIT) Guide 2026: The Modular Blockchain That Weaves L1 and L2 Together
          </h1>
          <p style={{ color: "#8b949e", fontSize: 16, lineHeight: 1.7, marginBottom: 10 }}>
            Initia is a Cosmos-based Layer 1 blockchain designed to orchestrate an ecosystem of customizable
            Layer 2 rollups called Minitias. With support for EVM, MoveVM, and WasmVM, it aims to solve the
            fragmentation problem that plagues multi-chain crypto. Here&apos;s what it is, how it works, and whether
            its architecture holds up in 2026.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 12 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-27"
          updatedDate="2026-03-27"
          readingTime={3}
          section="learn"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 40 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, marginBottom: 12, color: "#58a6ff", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#what-is-initia" style={{ color: "#58a6ff", textDecoration: "none" }}>What Is Initia?</a></li>
            <li><a href="#architecture" style={{ color: "#58a6ff", textDecoration: "none" }}>How the Interwoven Stack Works</a></li>
            <li><a href="#minitias" style={{ color: "#58a6ff", textDecoration: "none" }}>Minitias: App-Specific L2 Rollups</a></li>
            <li><a href="#tokenomics" style={{ color: "#58a6ff", textDecoration: "none" }}>INIT Tokenomics</a></li>
            <li><a href="#team-funding" style={{ color: "#58a6ff", textDecoration: "none" }}>Team &amp; Funding</a></li>
            <li><a href="#ecosystem" style={{ color: "#58a6ff", textDecoration: "none" }}>Ecosystem &amp; Adoption</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks &amp; Challenges</a></li>
            <li><a href="#outlook" style={{ color: "#58a6ff", textDecoration: "none" }}>2026 Outlook</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1: What Is Initia */}
        <section id="what-is-initia" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            1. What Is Initia?
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Initia is a <strong style={{ color: "#e6edf3" }}>modular blockchain platform</strong> that fuses a
            Cosmos SDK Layer 1 chain with application-specific Layer 2 rollups into a single, interoperable ecosystem
            called <strong style={{ color: "#e6edf3" }}>Omnitia</strong>. It launched its mainnet on April 24, 2025,
            after emerging from stealth in late 2023 with backing from Binance Labs.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            The core problem Initia solves is <strong style={{ color: "#e6edf3" }}>multi-chain fragmentation</strong>.
            Today, launching an app-specific chain (an &quot;appchain&quot;) means building in isolation — separate
            liquidity, separate bridges, separate user experiences. Initia&apos;s pitch: deploy your own rollup
            but stay connected to shared security, shared liquidity, and native cross-chain messaging from day one.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#a855f7", marginBottom: 10 }}>Key Metrics (March 2026)</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
              {[
                { label: "Mainnet Launch", value: "Apr 2025" },
                { label: "Minitias Deployed", value: "11+" },
                { label: "Total Funding", value: "$24M+" },
                { label: "Circulating Supply", value: "~18%" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 24, fontWeight: 800, color: "#c084fc" }}>{stat.value}</div>
                  <div style={{ fontSize: 12, color: "#8b949e", marginTop: 4 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Architecture */}
        <section id="architecture" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            2. How the Interwoven Stack Works
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            The <strong style={{ color: "#e6edf3" }}>Interwoven Stack</strong> is Initia&apos;s framework for deploying
            and connecting rollups. It merges two proven technologies: Optimism&apos;s OP Stack for optimistic rollup
            execution and Cosmos IBC (Inter-Blockchain Communication) for native cross-chain messaging. The result
            is a VM-agnostic rollup framework where every chain can talk to every other chain out of the box.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { layer: "Initia L1", title: "Orchestration Layer", desc: "The base Cosmos chain that coordinates network security, consensus, governance, liquidity routing, and cross-chain messaging for the entire ecosystem. Validators on L1 secure all Minitias through Omnitia Shared Security (OSS)." },
              { layer: "Minitias", title: "Application L2 Rollups", desc: "Customizable Layer 2 chains that developers deploy for specific applications. Each Minitia picks its own VM (EVM, MoveVM, or WasmVM), sets its own gas parameters, and can achieve 10,000 TPS with 500ms block times." },
              { layer: "IBC Bridge", title: "Native Interoperability", desc: "All Minitias communicate through Cosmos IBC — no third-party bridges needed. Assets, messages, and state can flow between any Minitia and the L1 natively, eliminating the fragmented bridging problem." },
              { layer: "OSS", title: "Shared Security", desc: "Omnitia Shared Security lets the L1 validator set protect L2 rollups. If a fraud challenge arises on any Minitia, L1 validators are summoned to resolve it — giving each rollup the security of the full network." },
            ].map((item) => (
              <div key={item.layer} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ padding: "2px 10px", background: "#a855f720", color: "#c084fc", borderRadius: 6, fontSize: 13, fontWeight: 700, border: "1px solid #a855f740" }}>{item.layer}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{item.title}</h4>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>Why Multi-VM Matters</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Most rollup platforms lock you into a single virtual machine. Initia lets developers choose <code style={{ color: "#79c0ff", background: "#161b22", padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>EVM</code> for
              Solidity compatibility, <code style={{ color: "#79c0ff", background: "#161b22", padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>MoveVM</code> for
              security-focused applications (the language behind Aptos and Sui), or <code style={{ color: "#79c0ff", background: "#161b22", padding: "1px 6px", borderRadius: 4, fontSize: 13 }}>WasmVM</code> for
              Rust-based smart contracts. All three VM types can interoperate natively through IBC.
            </p>
          </div>
        </section>

        {/* Section 3: Minitias */}
        <section id="minitias" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            3. Minitias: App-Specific L2 Rollups
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Minitias (a play on &quot;mini Initia&quot;) are the L2 rollups that live on top of the Initia L1. Each one
            is a sovereign execution environment that can be tuned for a specific use case — a DeFi protocol, a gaming
            platform, an NFT marketplace — while staying connected to the broader Omnitia ecosystem.
          </p>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            As of March 2026, over <strong style={{ color: "#e6edf3" }}>11 Minitias</strong> have been deployed, covering
            DeFi protocols, NFT platforms, and GameFi projects built on MoveVM. The pre-mainnet TVL across these rollups
            reached approximately $400M, though post-launch TVL has settled around $34M as incentive programs matured.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>What Makes Minitias Different</h3>
          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #30363d" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Feature</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Minitias (Initia)</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>OP Stack Chains</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Cosmos Appchains</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "VM Options", minitia: "EVM, MoveVM, WasmVM", op: "EVM only", cosmos: "WasmVM (CosmWasm)" },
                  { feature: "Cross-chain", minitia: "Native IBC", op: "Superchain bridge", cosmos: "IBC (requires own validators)" },
                  { feature: "Security", minitia: "Shared from L1 (OSS)", op: "Ethereum L1", cosmos: "Own validator set" },
                  { feature: "TPS", minitia: "~10,000", op: "~2,000–4,000", cosmos: "Varies by chain" },
                  { feature: "Block Time", minitia: "500ms", op: "2s", cosmos: "~6s" },
                  { feature: "Deploy Complexity", minitia: "Interwoven Stack CLI", op: "OP Stack + custom config", cosmos: "Full chain from scratch" },
                ].map((row) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.minitia}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.op}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.cosmos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Tokenomics */}
        <section id="tokenomics" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            4. INIT Tokenomics
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            <code style={{ color: "#79c0ff", background: "#161b22", padding: "1px 6px", borderRadius: 4, fontSize: 14 }}>INIT</code> has
            a total supply of <strong style={{ color: "#e6edf3" }}>1 billion tokens</strong>. It powers gas fees,
            staking, governance, and liquidity incentives across the Omnitia ecosystem.
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #30363d" }}>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Allocation</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Amount</th>
                  <th style={{ textAlign: "left", padding: "10px 14px", color: "#58a6ff", fontWeight: 700 }}>Vesting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { alloc: "Vested Interest Program (VIP)", amount: "250M (25%)", vesting: "Ongoing ecosystem rewards for Minitia participants" },
                  { alloc: "Staking & Enshrined Liquidity", amount: "250M (25%)", vesting: "Distributed to stakers and liquidity providers" },
                  { alloc: "Protocol Sales Investors", amount: "152.5M (15.25%)", vesting: "1-year cliff, 3-year linear release" },
                  { alloc: "Initia Contributors", amount: "150M (15%)", vesting: "1-year cliff, 3-year linear release" },
                  { alloc: "Foundation", amount: "52.5M (5.25%)", vesting: "Managed by Initia Foundation" },
                  { alloc: "Airdrop", amount: "50M (5%)", vesting: "Distributed at TGE (April 2025)" },
                  { alloc: "Binance Launchpool + Marketing", amount: "60M (6%)", vesting: "Launch events" },
                  { alloc: "Liquidity", amount: "25M (2.5%)", vesting: "DEX/CEX market-making" },
                  { alloc: "Echo Community Round", amount: "10M (1%)", vesting: "Community sale via Echo" },
                ].map((row) => (
                  <tr key={row.alloc} style={{ borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 600 }}>{row.alloc}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.amount}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{row.vesting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: "#161b22", border: "1px solid #d2992240", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#d29922", marginBottom: 8 }}>⚠️ Token Unlock Watch</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              As of March 2026, only about <strong style={{ color: "#e6edf3" }}>18.2% (~182M INIT)</strong> of the total
              supply is unlocked. The next major unlock is scheduled for <strong style={{ color: "#e6edf3" }}>April 24, 2026</strong> —
              the 1-year cliff date for investor and contributor allocations. This could introduce significant sell pressure.
              Track unlock schedules on our <a href="/tools/token-unlocks" style={{ color: "#58a6ff", textDecoration: "none" }}>Token Unlocks tracker</a>.
            </p>
          </div>
        </section>

        {/* Section 5: Team & Funding */}
        <section id="team-funding" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            5. Team &amp; Funding
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Initia was co-founded by <strong style={{ color: "#e6edf3" }}>Ezaan Mangalji (Zon)</strong> and <strong style={{ color: "#e6edf3" }}>Stan Liu</strong>,
            both former Terra and Cosmos developers. The team of about 20 is headquartered in Singapore. Their
            background in the Cosmos ecosystem gives them deep expertise in IBC, SDK-level chain architecture,
            and cross-chain protocol design.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { round: "Pre-Seed (Oct 2023)", amount: "Undisclosed", investors: "Binance Labs" },
              { round: "Seed (Feb 2024)", amount: "$7.5M", investors: "Delphi Ventures, Hack VC, Nascent, Figment Capital, Big Brain, A.Capital" },
              { round: "Series A (Sep 2024)", amount: "$14M", investors: "Theory Ventures (lead), Delphi Ventures, Hack VC + angels (Keone Hon, Bryan Pellegrino, Zaki Manian, Michael Egorov)" },
              { round: "Echo Community (Sep 2024)", amount: "$2.5M", investors: "Community sale via Cobie's Echo platform — sold out in under 2 hours at $250M token valuation" },
            ].map((item) => (
              <div key={item.round} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ padding: "2px 10px", background: "#a855f720", color: "#c084fc", borderRadius: 6, fontSize: 13, fontWeight: 700, border: "1px solid #a855f740" }}>{item.round}</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{item.amount}</h4>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.investors}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 10 }}>Notable Angel Investors</h4>
            <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>
              Initia&apos;s angel investor list reads like a Cosmos/DeFi all-star team: Keone Hon (Monad Labs),
              Bryan Pellegrino (LayerZero), Zaki Manian (Sommelier Finance), Jordi Alexander (Selini Capital),
              and Michael Egorov (Curve Finance). This signals strong confidence from people who understand
              cross-chain infrastructure deeply.
            </p>
          </div>
        </section>

        {/* Section 6: Ecosystem */}
        <section id="ecosystem" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            6. Ecosystem &amp; Adoption
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Initia&apos;s ecosystem is still early but growing. The 11+ deployed Minitias span DeFi, gaming,
            and NFT verticals. The <strong style={{ color: "#e6edf3" }}>Vested Interest Program (VIP)</strong> is the
            primary mechanism for bootstrapping adoption — it allocates 25% of the total token supply to
            reward users and developers who actively participate in Minitia ecosystems.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 28 }}>Ecosystem Categories</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 20 }}>
            {[
              { category: "DeFi", desc: "AMMs, lending protocols, and stablecoin projects building on EVM and MoveVM Minitias." },
              { category: "Gaming / GameFi", desc: "GameFi projects leveraging MoveVM's security properties for in-game asset management." },
              { category: "NFT Platforms", desc: "NFT marketplaces and creator tools utilizing the low-latency 500ms block times." },
              { category: "Infrastructure", desc: "Oracle providers, indexers, and bridge services supporting the Omnitia ecosystem." },
            ].map((item) => (
              <div key={item.category} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#c084fc", marginBottom: 8 }}>{item.category}</h4>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Risks */}
        <section id="risks" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            7. Risks &amp; Challenges
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            No project is without risk. Here&apos;s what to watch:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { risk: "Low TVL", desc: "With ~$34M in TVL as of early 2026, Initia is still far from the scale of Arbitrum ($15B+) or Optimism ($7B+). Ecosystem growth is the critical metric to watch." },
              { risk: "Token Unlock Pressure", desc: "The April 2026 cliff unlock will release investor and contributor tokens for the first time. With 81.8% of supply still locked, the schedule heavily front-loads future supply expansion." },
              { risk: "Competitive Landscape", desc: "Initia competes with Celestia (data availability), Optimism/Arbitrum (EVM rollups), Cosmos (IBC appchains), and newer modular stacks like AltLayer and Dymension. The moat is the multi-VM + IBC combo, but others are working on similar solutions." },
              { risk: "Terra Heritage Perception", desc: "The founding team's connection to the Terra ecosystem (which collapsed in 2022) may create trust concerns for some investors, even though the team built infrastructure tooling rather than algorithmic stablecoins." },
              { risk: "Exchange Delisting Risk", desc: "Some exchanges have delisted or restricted INIT trading, which can reduce liquidity and access for retail users." },
            ].map((item) => (
              <div key={item.risk} style={{ background: "#161b22", border: "1px solid #f8514940", borderRadius: 10, padding: "16px 20px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#f85149", marginBottom: 8 }}>{item.risk}</h4>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Outlook */}
        <section id="outlook" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
            8. 2026 Outlook
          </h2>
          <p style={{ color: "#c9d1d9", lineHeight: 1.8, marginBottom: 16 }}>
            Initia&apos;s trajectory in 2026 hinges on three things: growing Minitia adoption, surviving the
            April token unlock without a death spiral, and proving that the multi-VM approach attracts developers
            who wouldn&apos;t build on single-VM rollup stacks.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { catalyst: "More Minitias Launching", desc: "The 2026 roadmap focuses on onboarding new Minitia rollups, particularly EVM-compatible ones targeting DeFi protocols that want dedicated throughput." },
              { catalyst: "VIP Rewards Expansion", desc: "The Vested Interest Program is Initia's main user acquisition engine. Expanded VIP campaigns across more Minitias could drive meaningful TVL growth." },
              { catalyst: "MoveVM Differentiation", desc: "As MoveVM adoption grows (driven by Aptos and Sui), Initia is the only rollup platform offering Move alongside EVM and Wasm — a potential differentiator for developer acquisition." },
            ].map((item) => (
              <div key={item.catalyst} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ padding: "2px 10px", background: "#22c55e20", color: "#4ade80", borderRadius: 6, fontSize: 13, fontWeight: 700, border: "1px solid #22c55e40" }}>Catalyst</span>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{item.catalyst}</h4>
                </div>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 44 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, color: "#e6edf3", marginBottom: 20 }}>
            FAQ
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { q: "What is Initia (INIT)?", a: "Initia is a modular blockchain that combines a Cosmos-based L1 with customizable L2 rollups (Minitias). It supports EVM, MoveVM, and WasmVM, enabling developers to build app-specific chains that share security and liquidity." },
              { q: "What are Minitias?", a: "Minitias are application-specific Layer 2 rollups on Initia. Each one can choose its own virtual machine and achieve up to 10,000 TPS with 500ms block times while inheriting security from the Initia L1." },
              { q: "How does INIT token work?", a: "INIT (1B total supply) is used for gas fees, staking, governance, and liquidity incentives. 25% is reserved for the VIP rewards program that incentivizes ecosystem participation." },
              { q: "Who founded Initia?", a: "Ezaan Mangalji (Zon) and Stan Liu, both former Terra/Cosmos developers. The project raised $24M+ from Delphi Ventures, Hack VC, Theory Ventures, and Binance Labs." },
              { q: "What's the Interwoven Stack?", a: "Initia's deployment framework that combines Optimism's OP Stack with Cosmos IBC. It lets developers spin up EVM, MoveVM, or WasmVM rollups that interoperate natively." },
              { q: "Is Initia a good investment?", a: "Initia has strong architecture and investors but faces low TVL (~$34M), major token unlocks in April 2026, and competition from established modular ecosystems. Always DYOR." },
            ].map((item) => (
              <div key={item.q} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: "16px 20px" }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{item.q}</h4>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ background: "#161b22", border: "1px solid #d2992240", borderRadius: 12, padding: 20, marginBottom: 40 }}>
          <p style={{ color: "#d29922", fontSize: 14, lineHeight: 1.7 }}>
            ⚠️ This guide is for informational purposes only. It is not financial advice.
            Always do your own research before making investment decisions.
          </p>
        </div>

        {/* Related Articles */}
        <div style={{ borderTop: "1px solid #30363d", paddingTop: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>Related Guides</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Modular Blockchain Stack Guide 2026", href: "/learn/modular-blockchain-stack-guide-2026" },
              { label: "Appchains & App-Specific Rollups Guide", href: "/learn/appchains-app-specific-rollups-guide-2026" },
              { label: "Layer 2 Scaling Guide", href: "/learn/layer-2-scaling-guide" },
              { label: "Chain Abstraction Guide 2026", href: "/learn/chain-abstraction-guide-2026" },
              { label: "Cross-Chain Interoperability Guide", href: "/learn/cross-chain-interoperability-guide-2026" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{ color: "#58a6ff", textDecoration: "none", fontSize: 14, lineHeight: 1.8 }}>
                → {link.label}
              </a>
            ))}
          </div>
        </div>

        <BackToTop />
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/defi-safety-score-checker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Safety Score Checker</a></li>
            <li><a href="/tools/liquidity-pool-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Liquidity Pool Calculator</a></li>
            <li><a href="/tools/whale-wallet-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Whale Wallet Tracker</a></li>
            <li><a href="/compare/hot-wallet-vs-cold-wallet" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Hot Wallet Vs Cold Wallet</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      <RelatedContent category="learn" currentSlug="/learn/initia-blockchain-guide-2026" />
    </div>
  );
}
