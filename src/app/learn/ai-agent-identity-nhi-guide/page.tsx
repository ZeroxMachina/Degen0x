import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import InteractiveTOC from "./InteractiveTOC";
import InteractiveCards from "./InteractiveCards";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// Export metadata for server-side rendering
export const metadata: Metadata = {
  title: "AI Agent Identity (NHI) Guide 2026: Non-Human Identities & Cryptographic Identity",
  description: "Master AI agent identity infrastructure. Learn about Non-Human Identities (NHI), Decentralized Identifiers, World AgentKit, Coinbase x402, and Know Your Agent (KYA) standards. 2026's essential guide to agent-backed identity, cryptographic credentials, and machine-to-machine payments.",
  keywords: "AI agents, non-human identities, NHI, cryptographic identity, DID, Decentralized Identifiers, World AgentKit, World ID, Coinbase x402, Know Your Agent, KYA, verifiable credentials, ZK proofs, agent economy, stablecoin payments, agent identity infrastructure",
  openGraph: {
    title: "AI Agent Identity (NHI) Guide 2026: Non-Human Identities & Cryptographic Identity",
    description: "Master AI agent identity infrastructure in 2026. Learn DIDs, World AgentKit, x402 protocol, and Know Your Agent standards.",
    type: "article",
    url: `${SITE_URL}/learn/ai-agent-identity-nhi-guide`,
    publishedTime: "2026-03-23T00:00:00Z",
    authors: ["degen0x"],
    images: [
      {
        url: "https://degen0x.com/og-ai-agent-identity-nhi-guide.svg",
        width: 1200,
        height: 630,
        alt: "AI Agent Identity (NHI) Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Identity (NHI) Guide 2026",
    description: "Master AI agent identity infrastructure, cryptographic identity, and the agent economy.",
    image: "https://degen0x.com/og-ai-agent-identity-nhi-guide.svg",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "AI Agent Identity (NHI) Guide", href: "/learn/ai-agent-identity-nhi-guide" },
];

// Generate structured data for SEO
const articleSchema = generateArticleSchema({
  title: "AI Agent Identity (NHI) Guide 2026: Non-Human Identities & Cryptographic Identity",
  description: "Comprehensive guide to AI agent identity infrastructure, Non-Human Identities, cryptographic credentials, and the agent economy.",
  url: `${SITE_URL}/learn/ai-agent-identity-nhi-guide`,
  datePublished: "2026-03-23T00:00:00Z",
  dateModified: "2026-03-23T00:00:00Z",
  author: "degen0x",
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: "What are Non-Human Identities (NHIs)?",
    answer: "Non-Human Identities (NHIs) are digital identities representing autonomous AI agents and smart contracts. In 2026, NHIs now outnumber human employees 96-to-1 in financial services. They require cryptographic identity infrastructure including DIDs, verifiable credentials, and zero-knowledge proofs to enable secure, autonomous operations.",
  },
  {
    question: "Why do AI agents need cryptographic identity?",
    answer: "AI agents need cryptographic identity to: (1) prove they are backed by a unique human (World AgentKit + World ID), (2) execute autonomous transactions with accountability, (3) access decentralized services without counterparty trust, (4) participate in cross-chain operations, and (5) enable machine-to-machine payments via stablecoins.",
  },
  {
    question: "What is the Coinbase x402 protocol?",
    answer: "x402 is Coinbase's open payment protocol embedding stablecoin payments directly into HTTP requests. It's backed by Cloudflare, Circle, AWS, and Stripe. x402 enables agents to pay for resources (API calls, compute, data) via micro-transactions, fundamentally changing how agents interact with services.",
  },
  {
    question: "What is Know Your Agent (KYA)?",
    answer: "Know Your Agent (KYA) is the emerging standard for digital passports of AI agents. It combines cryptographically signed credentials, DIDs, and verifiable proofs that the agent is backed by a unique human. KYA enables financial services, DAOs, and DeFi protocols to securely interact with agents.",
  },
  {
    question: "How does World AgentKit work?",
    answer: "World AgentKit (built with Coinbase) integrates World ID to cryptographically prove that each AI agent is backed by a unique verified human. This creates a 1:1 mapping between agents and humans, enabling agent-mediated transactions, autonomous treasury management, and cross-chain operations with human accountability.",
  },
  {
    question: "What are Decentralized Identifiers (DIDs)?",
    answer: "DIDs are decentralized identities following W3C standards. They enable self-sovereign identity without relying on central authorities. For AI agents, DIDs support verifiable credentials (credentials issued by trusted parties) and zero-knowledge proofs, creating a cryptographic foundation for agent identity infrastructure.",
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

export default function AIAgentIdentityPage() {
  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
    border: "var(--glass-border, #30363d)",
    text: "var(--color-text, #e6edf3)",
    text2: "var(--color-text-secondary, #8b949e)",
    primary: "var(--color-primary, #627EEA)",
    cyan: "#06b6d4",
    blue: "#3b82f6",
    green: "#22c55e",
    indigo: "#6366f1",
    orange: "#f0883e",
    red: "#f85149",
  };

  const tableOfContents = [
    { href: "#what-are-nhis", label: "What Are Non-Human Identities (NHIs)?" },
    { href: "#why-agents-need-identity", label: "Why AI Agents Need Identity Infrastructure" },
    { href: "#agent-economy", label: "The Agent Economy: From Intelligence to Identity" },
    { href: "#key-protocols", label: "Key Protocols Building Agent Identity" },
    { href: "#kya", label: "Know Your Agent (KYA): Digital Passports for AI" },
    { href: "#machine-payments", label: "Machine-to-Machine Payments and Stablecoins" },
    { href: "#security-risks", label: "Security Risks: The NHI Attack Surface" },
    { href: "#defi-impact", label: "How This Changes DeFi and Crypto" },
    { href: "#challenges", label: "Challenges and Open Questions" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData data={schemas} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.cyan}20`, color: S.cyan, border: `1px solid ${S.cyan}40` }}>🤖 AI & Identity</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Intermediate</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Updated March 2026</span>
            <span style={{ fontSize: 12, color: S.text2 }}>14 min read</span>
          </div>

          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            AI Agent Identity (NHI) Guide 2026: Non-Human Identities & Cryptographic Identity
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            In 2026, AI agents vastly outnumber humans in financial services—96 agents per human employee. But agents operating autonomously need cryptographic proof of identity. This comprehensive guide explores Non-Human Identities (NHIs), cryptographic infrastructure, World AgentKit, Coinbase x402 payments, and Know Your Agent standards. Learn how the agent economy is shifting from a bottleneck in intelligence to a bottleneck in identity infrastructure.
          </p>

          {/* Key Metrics Box */}
          <div style={{ background: S.surface, border: `4px solid ${S.cyan}`, borderRadius: 12, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 14, fontWeight: 800, color: S.cyan, marginBottom: 16 }}>📊 Key Metrics: The NHI Explosion</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "NHIs vs Humans", value: "96:1 ratio", desc: "in financial services" },
                { label: "Agent-Backed Identity", value: "World ID", desc: "1:1 human:agent mapping" },
                { label: "x402 Protocol", value: "Live", desc: "Coinbase, Circle, AWS, Stripe" },
                { label: "Agent Economy", value: "Identity-bound", desc: "bottleneck shifting to infrastructure" },
              ].map((m, i) => (
                <div key={i}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: S.text2, marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: S.cyan, marginBottom: 2 }}>{m.value}</div>
                  <div style={{ fontSize: 11, color: S.text2 }}>{m.desc}</div>
                </div>        ))}


        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-23"
          updatedDate="2026-04-12"
          readingTime={7}
          section="learn"
        />


            </div>
          </div>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderLeft: `4px solid ${S.indigo}`, borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
              <span>📋</span> Table of Contents
            </div>
            <InteractiveTOC items={tableOfContents} indigo={S.indigo} surface={S.surface} border={S.border} text2={S.text2} />
          </div>
        </header>

        {/* Section 1: What Are NHIs */}
        <section id="what-are-nhis" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>What Are Non-Human Identities (NHIs)?</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Non-Human Identities (NHIs) are digital identities representing autonomous AI agents, smart contracts, and bots that can execute transactions and interact with systems independently. Unlike traditional user accounts controlled by humans, NHIs operate autonomously, making decisions, transacting, and managing assets without real-time human supervision.
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

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            In 2026, the scale of NHIs has become staggering. Financial institutions report a 96-to-1 ratio of AI agents to human employees. These agents handle everything from algorithmic trading to portfolio rebalancing, risk assessment, and transaction settlement. However, autonomous operation creates a critical problem: how do you verify the agent is trustworthy? How do you hold it accountable? How do you know it's backed by a legitimate human or organization?
          </p>

          <div style={{ background: `${S.cyan}15`, border: `1px solid ${S.cyan}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: S.cyan, marginBottom: 12 }}>🔍 The NHI Problem</h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0, marginBottom: 12 }}>
              An autonomous agent can claim to represent anyone, execute any strategy, and interact with any system. Without cryptographic identity infrastructure, NHIs introduce massive counterparty and systemic risk:
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, margin: 0 }}>
              <li>How do you trust an agent you've never met, that acts autonomously 24/7?</li>
              <li>Who is liable if an agent's action causes losses?</li>
              <li>How can you audit or verify an agent's decisions?</li>
              <li>Can an agent be impersonated or spoofed?</li>
            </ul>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The answer is cryptographic identity: agents need cryptographic proof that they are legitimate, backed by verifiable humans or organizations, and operating within defined parameters. This is where Decentralized Identifiers (DIDs), Verifiable Credentials (VCs), and Zero-Knowledge proofs enter the picture.
          </p>
        </section>

        {/* Section 2: Why Agents Need Identity */}
        <section id="why-agents-need-identity" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Why AI Agents Need Identity Infrastructure</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The agent economy in 2026 has matured beyond toy applications. Agents now manage billions in assets, execute high-frequency trades, mediate complex smart contracts, and participate in autonomous DAOs. But none of this is possible without robust identity infrastructure.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              {
                title: "Autonomous Accountability",
                icon: "⚖️",
                desc: "If an agent executes a bad trade or exploits a contract, who is responsible? Cryptographic signatures tied to agents enable auditability and legal accountability.",
              },
              {
                title: "Decentralized Trust",
                icon: "🔐",
                desc: "DAOs and DeFi protocols need to verify agents before granting access. DIDs + verifiable credentials enable trust without centralized intermediaries.",
              },
              {
                title: "Unique Agent Binding",
                icon: "👤",
                desc: "World AgentKit + World ID ensures each agent is backed by a unique verified human, preventing Sybil attacks and impersonation.",
              },
              {
                title: "Cross-Chain Portability",
                icon: "🔄",
                desc: "DIDs are chain-agnostic. An agent's identity is portable across Ethereum, Solana, Bitcoin L2s, and any other blockchain.",
              },
              {
                title: "Machine-to-Machine Commerce",
                icon: "💳",
                desc: "Agents need to pay for resources: compute, data, API calls. x402 protocol enables direct stablecoin payments between agents via HTTP.",
              },
              {
                title: "Compliance & Regulation",
                icon: "📋",
                desc: "Regulators increasingly demand identity verification for market participants. Know Your Agent (KYA) enables regulatory compliance for autonomous systems.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            In essence, agent identity infrastructure solves a fundamental market failure: the inability to verify the legitimacy and trustworthiness of autonomous actors. As agents scale, this infrastructure becomes non-negotiable.
          </p>
        </section>

        {/* Section 3: Agent Economy Shift */}
        <section id="agent-economy" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>The Agent Economy: From Intelligence to Identity</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            For years, the bottleneck in the agent economy was intelligence: creating AI systems that could reason, learn, and make good decisions. We've essentially solved that. Models like GPT-4, Claude, and open-source alternatives are now accessible, capable, and deployed at scale.
          </p>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            In 2026, the bottleneck has shifted dramatically. The limiting factor is no longer "can the agent think well?" but "can we trust the agent's identity and actions?" This is the identity bottleneck.
          </p>

          <div style={{ background: `${S.orange}15`, border: `1px solid ${S.orange}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: S.orange, marginBottom: 12 }}>🚀 The Identity Bottleneck</h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              The agent economy cannot scale without solving three identity problems: (1) proving an agent is legitimate and backed by verified humans, (2) enabling agents to transact autonomously with cryptographic authorization, and (3) allowing agents to pay for resources directly without human intermediation. Solving these unlocks trillion-dollar markets in agent-mediated finance, autonomous trading, and decentralized autonomous organizations (DAOs).
            </p>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The emerging solutions—World AgentKit, Coinbase x402, and Know Your Agent standards—are the infrastructure that will unlock this transition. They're not solving "how to make agents smarter" but "how to make agent identity verifiable, portable, and secure."
          </p>
        </section>

        {/* Section 4: Key Protocols */}
        <section id="key-protocols" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Key Protocols Building Agent Identity</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 24 }}>
            Several protocols are emerging as foundational infrastructure for NHI identity. Each solves a different piece of the puzzle.
          </p>

          {/* World AgentKit */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span>🌍</span> World AgentKit + World ID
            </h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
              Developed by World in collaboration with Coinbase, World AgentKit integrates Coinbase's CDP with World ID to cryptographically prove each AI agent is backed by a unique verified human. This creates a 1:1 mapping: one agent per verified human account.
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 12 }}>
              <li><strong>Unique binding:</strong> Each agent maps to exactly one verified human via World ID</li>
              <li><strong>Sybil resistance:</strong> Impossible to create fake agents or sybil-attack a protocol</li>
              <li><strong>Autonomous transactions:</strong> Agents can execute transactions autonomously with human accountability</li>
              <li><strong>Cross-chain capable:</strong> Works across Ethereum, Polygon, Solana, and other EVM chains</li>
              <li><strong>Privacy:</strong> Uses cryptographic zero-knowledge proofs (no personal data exposed on-chain)</li>
            </ul>
            <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 8, padding: 12, fontSize: 13, color: S.text2 }}>
              Use case: A DAO grants voting rights only to agents backed by World ID. This ensures 1 agent = 1 verified human, eliminating Sybil attacks on governance.
            </div>
          </div>

          {/* Coinbase x402 */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span>💳</span> Coinbase x402 Protocol
            </h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
              x402 is Coinbase's open payment protocol that embeds stablecoin payments directly into HTTP requests. Rather than agents asking for access and humans authorizing payments, x402 enables agents to automatically pay for resources via micro-transactions. It's backed by major infrastructure providers: Cloudflare, Circle, AWS, and Stripe.
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 12 }}>
              <li><strong>HTTP-native:</strong> Payments happen at the HTTP protocol level, not on-chain</li>
              <li><strong>Stablecoin-based:</strong> Uses USDC or similar stablecoins for value transfer</li>
              <li><strong>Micro-transaction friendly:</strong> Enables fractions of a penny payments without gas overhead</li>
              <li><strong>Agent-to-service:</strong> Allows agents to pay cloud providers, APIs, and data providers directly</li>
              <li><strong>Open standard:</strong> Anyone can implement x402 payment receivers</li>
            </ul>
            <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 8, padding: 12, fontSize: 13, color: S.text2 }}>
              Use case: An agent queries a data provider's API. Instead of free access or subscription, the agent pays $0.0001 per request via x402. The data provider receives USDC instantly. Both parties benefit from flexible, pay-per-use economics.
            </div>
          </div>

          {/* DIDs and Verifiable Credentials */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span>🔑</span> DIDs & Verifiable Credentials
            </h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
              Decentralized Identifiers (DIDs) follow W3C standards and enable self-sovereign identity without relying on centralized authorities. For agents, DIDs are combined with Verifiable Credentials (VCs): cryptographically signed claims about the agent issued by trusted parties.
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 12 }}>
              <li><strong>W3C standard:</strong> Chain-agnostic and widely adopted</li>
              <li><strong>Self-sovereign:</strong> Agents control their own identity, not reliant on any single provider</li>
              <li><strong>Cryptographically signed:</strong> Credentials are signed by issuers and can be verified by anyone</li>
              <li><strong>Zero-knowledge proofs:</strong> Agents can prove facts (e.g., "is a registered trader") without revealing personal data</li>
              <li><strong>Composable:</strong> Multiple VCs can be combined (e.g., "verified human" + "audited code" + "insured transactions")</li>
            </ul>
            <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 8, padding: 12, fontSize: 13, color: S.text2 }}>
              Use case: An agent holds a VC issued by a code audit firm stating "this agent's code was audited on date X." A DeFi protocol checks this VC before allowing the agent to interact with sensitive smart contracts.
            </div>
          </div>

          {/* ENS for Agents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
              <span>📛</span> ENS & Domain-Based Agent Names
            </h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
              The Ethereum Name Service (ENS) is evolving to support agent identity. An agent might be registered as "myagent.eth" with DNS records pointing to its DIDs, API endpoints, and governance parameters. This creates a human-readable namespace for agents.
            </p>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 12 }}>
              <li><strong>Human-readable:</strong> "trading-bot.eth" is more intuitive than a hex wallet address</li>
              <li><strong>Discoverable:</strong> Agent registries can index ENS names to make agents discoverable</li>
              <li><strong>Updateable:</strong> DNS records can point to updated agent endpoints or identities</li>
              <li><strong>Monetizable:</strong> Agents can create sub-domains (e.g., "strategy-1.trading-bot.eth")</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Know Your Agent */}
        <section id="kya" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Know Your Agent (KYA): Digital Passports for AI</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Know Your Agent (KYA) is an emerging standard for digital passports of AI agents. Just as KYC (Know Your Customer) enables financial institutions to verify humans, KYA enables protocols and services to verify agents. A KYA "passport" for an agent typically includes:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              { icon: "👤", label: "Human Backing", desc: "World ID proof the agent is backed by a unique verified human" },
              { icon: "🔐", label: "DID", desc: "The agent's decentralized identifier" },
              { icon: "✅", label: "Verifiable Credentials", desc: "Signed attestations (audited code, insurance, permissions)" },
              { icon: "🔬", label: "ZK Proofs", desc: "Privacy-preserving proofs of agent properties" },
              { icon: "⏰", label: "Time-locked Credentials", desc: "Credentials that expire or update on schedule" },
              { icon: "📊", label: "Performance History", desc: "Audited track record and historical metrics" },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 20, marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            A KYA passport is not a single credential but a portfolio of cryptographically signed claims. A DeFi protocol reviewing an agent might check: (1) is the agent backed by a verified human? (2) has the agent's code been audited? (3) does the agent have cyber insurance? (4) what is the agent's historical success rate? By combining these signals, protocols can make informed trust decisions about agents.
          </p>

          <div style={{ background: `${S.green}15`, border: `1px solid ${S.green}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: S.green, marginBottom: 12 }}>💡 KYA in Practice: A Lending Example</h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              An agent approaches a DeFi lending protocol requesting $10M in capital. The protocol checks the agent's KYA:
              <br />
              <br />
              <strong>✓ Human Backing:</strong> World ID confirms the agent is backed by a verified human (no Sybil attack)<br />
              <strong>✓ Code Audit:</strong> VC from Trail of Bits confirms the agent's code was audited 30 days ago<br />
              <strong>✓ Insurance:</strong> VC from Nexus Mutual proves the agent has $50M parametric insurance<br />
              <strong>✓ Track Record:</strong> Historical data shows 2-year performance with 18% annualized returns, 0 exploits<br />
              <br />
              The lending protocol approves the loan. Without KYA, this decision would be impossible.
            </p>
          </div>
        </section>

        {/* Section 6: Machine-to-Machine Payments */}
        <section id="machine-payments" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Machine-to-Machine Payments and Stablecoins</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            As agents become autonomous and ubiquitous, they need to pay for resources: compute, data, API calls, and services. Traditional payment methods (credit cards, bank transfers) are too slow and expensive. Machine-to-machine payments are migrating to stablecoins, with x402 protocol as the primary enabler.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How x402 Enables Agent Payments</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2.1, fontSize: 14, margin: 0 }}>
              <li><strong>Agent requests resource:</strong> Agent makes HTTP request to API/service</li>
              <li><strong>Server responds with x402:</strong> Server responds with 402 Payment Required header, specifying cost and payment details</li>
              <li><strong>Agent authorizes payment:</strong> Agent signs stablecoin transaction (USDC) to cover the cost</li>
              <li><strong>Payment settlement:</strong> Stablecoin transfer happens instantly (or near-instantly via layer 2)</li>
              <li><strong>Resource access granted:</strong> Server verifies payment and provides resource</li>
            </ol>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            This model fundamentally changes the economics of agent-to-service interactions:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              {
                title: "Granular Billing",
                icon: "💰",
                desc: "Services charge per-request or per-unit rather than flat subscriptions. Agents only pay for what they use.",
              },
              {
                title: "No Intermediaries",
                icon: "🔗",
                desc: "Direct agent-to-service payments via stablecoins. No payment processors, banks, or credit card companies.",
              },
              {
                title: "Instant Settlement",
                icon: "⚡",
                desc: "Stablecoin payments settle in seconds/minutes, not days. Agents and services get paid immediately.",
              },
              {
                title: "Programmable",
                icon: "🔄",
                desc: "Agents can set spending limits, budgets, and rate limits. Conditional payments via smart contracts.",
              },
              {
                title: "Low Friction",
                icon: "🚀",
                desc: "No signup, no credit checks, no KYC. Agents can pay any service globally with their stablecoin balance.",
              },
              {
                title: "New Business Models",
                icon: "🏢",
                desc: "Services can offer pay-per-use, freemium models, and dynamic pricing. Agents can share revenue.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 20, marginBottom: 8 }}>{item.icon}</div>
                <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The x402 protocol, combined with stablecoins, is enabling a new economic layer: the agent economy. Where humans trade via stock markets and exchange platforms, agents will trade via stablecoin payments embedded in protocols.
          </p>
        </section>

        {/* Section 7: Security Risks */}
        <section id="security-risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Security Risks: The NHI Attack Surface</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            As NHIs scale, they introduce new attack surfaces. Securing agent identity infrastructure is critical.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
            {[
              {
                title: "Credential Forgery",
                icon: "🔓",
                risk: "Attacker forges a Verifiable Credential claiming an agent is audited or insured",
                mitigation: "Verify all credentials are cryptographically signed by trusted issuers. Use timestamp proofs."
              },
              {
                title: "Agent Impersonation",
                icon: "👥",
                risk: "Attacker creates a fake agent with a similar name/DID to trick users and protocols",
                mitigation: "Use verified registries, ENS lookups, and human-in-the-loop verification for high-value interactions"
              },
              {
                title: "Sybil Attacks",
                icon: "🐝",
                risk: "Attacker creates many fake agents to gain voting power, access, or liquidity in protocols",
                mitigation: "Integrate World ID + AgentKit. Require 1-agent-per-verified-human binding."
              },
              {
                title: "Key Compromise",
                icon: "🔑",
                risk: "Attacker steals an agent's private key, gaining control over the agent and its assets",
                mitigation: "Use hardware wallets, multi-sig, threshold encryption. Implement kill-switch mechanisms."
              },
              {
                title: "Credential Expiry Bypass",
                icon: "⏰",
                risk: "Attacker uses an expired credential that a protocol failed to validate",
                mitigation: "Always check credential timestamps. Use time-locked credentials with automatic revocation."
              },
              {
                title: "DID Resolution Attacks",
                icon: "🌐",
                risk: "Attacker intercepts or spoofs a DID resolution, returning false credentials",
                mitigation: "Use trusted DID resolution services. Implement DNSSEC and HTTPS pinning."
              },
            ].map((item, i) => (
              <div key={i} style={{ background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 10, padding: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <h3 style={{ fontSize: 14, fontWeight: 800, margin: 0 }}>{item.title}</h3>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: S.red, marginBottom: 4 }}>Risk:</div>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.risk}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: S.green, marginBottom: 4 }}>Mitigation:</div>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.mitigation}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.orange}15`, border: `1px solid ${S.orange}40`, borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: S.orange, marginBottom: 12 }}>⚠️ 2026 Security Imperative</h3>
            <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              Security teams must treat AI agents as first-class identities. This means: (1) agent key management, (2) credential validation workflows, (3) agent-specific threat detection, (4) anomaly detection for agent behavior, and (5) insurance/bonding for high-risk agents.
            </p>
          </div>
        </section>

        {/* Section 8: DeFi Impact */}
        <section id="defi-impact" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>How This Changes DeFi and Crypto</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Agent identity infrastructure reshapes DeFi fundamentally:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginBottom: 24 }}>
            {[
              {
                title: "Agent-Mediated Trading",
                desc: "Agents can trade on behalf of humans with cryptographic authorization. Eliminates front-running via orderbook opacity; enables true algorithmic markets.",
              },
              {
                title: "Autonomous Treasury Management",
                desc: "DAOs no longer need multisigs or voting delays. Agents manage treasury autonomously with pre-approved spending policies, audited code, and insurance.",
              },
              {
                title: "Cross-Chain Agent Operations",
                desc: "Agents operate seamlessly across Ethereum, Solana, Cosmos, and Bitcoin L2s. DIDs are chain-agnostic. Enables multi-chain liquidity pools and atomic swaps.",
              },
              {
                title: "Agent-to-Agent Collateral",
                desc: "Agents can collateralize positions with other agents. Enables complex derivatives and synthetic asset issuance without requiring human approvals.",
              },
              {
                title: "Decentralized Insurance Pools",
                desc: "Insurance providers can create parametric insurance for agents. If an agent exploits, insurance automatically pays out based on ZK proofs.",
              },
              {
                title: "Agent-Backed Stablecoins",
                desc: "Stablecoins backed by agent-managed collateral. Agents prove collateral adequacy via ZK proofs, enabling dynamic collateral ratios.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            The cumulative effect: DeFi becomes agent-native. Rather than human traders executing strategies, agents execute them autonomously, 24/7, with cryptographic accountability and insurance backing their actions.
          </p>
        </section>

        {/* Section 9: Challenges */}
        <section id="challenges" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Challenges and Open Questions</h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            Despite rapid progress, several critical challenges remain unsolved:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              {
                q: "How do we verify the integrity of agent code?",
                a: "Code audits are static; agent code can be updated. We need real-time monitoring, formal verification, and on-chain code attestation.",
              },
              {
                q: "What happens if an agent's backing human is compromised?",
                a: "If the human behind World ID is hacked or coerced, the agent loses its legitimacy. We need revocation mechanisms and identity recovery procedures.",
              },
              {
                q: "How do we attribute liability for agent actions?",
                a: "If an agent exploits a contract, who is liable? The human? The agent creator? The protocol? Legal frameworks are still developing.",
              },
              {
                q: "How do we scale DID resolution and credential validation?",
                a: "Current systems don't support thousands of agents querying credentials per second. We need high-performance credential infrastructure.",
              },
              {
                q: "How do we prevent agent collusion?",
                a: "Multiple agents controlled by the same human could collude to attack a protocol. We need detection mechanisms and collateral bonding.",
              },
              {
                q: "What is the regulatory framework for NHI commerce?",
                a: "Regulators haven't decided: are agents financial entities? Market participants? Derivatives? The framework will take years to clarify.",
              },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{item.q}</div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Frequently Asked Questions</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                q: "What are Non-Human Identities (NHIs)?",
                a: "Non-Human Identities are cryptographically verifiable identities for autonomous AI agents and smart contracts. They enable agents to operate independently while maintaining accountability and trustworthiness.",
              },
              {
                q: "Why do AI agents need cryptographic identity?",
                a: "Without cryptographic identity, there's no way to verify an agent is legitimate, backed by a human, or operating within safe parameters. It's the foundation for autonomous, trustworthy agent operations.",
              },
              {
                q: "What is the Coinbase x402 protocol, and how does it work?",
                a: "x402 is an HTTP-native payment protocol that enables agents to pay for services directly via stablecoins. When an agent requests a resource, the server responds with a 402 Payment Required header. The agent signs a stablecoin transaction, and access is granted.",
              },
              {
                q: "How does World AgentKit ensure agent legitimacy?",
                a: "World AgentKit integrates World ID (human identity verification) with agent creation. Each agent is cryptographically bound to exactly one verified human, preventing Sybil attacks and ensuring human accountability.",
              },
              {
                q: "What is Know Your Agent (KYA)?",
                a: "KYA is an emerging standard for verifying AI agents. A KYA 'passport' includes World ID backing, DIDs, verifiable credentials (audits, insurance), zero-knowledge proofs, and historical performance. It's the agent equivalent of KYC for humans.",
              },
              {
                q: "Are DIDs the same as blockchain addresses?",
                a: "No. DIDs are W3C standards for decentralized identity that are chain-agnostic. A DID can be resolved to reveal an agent's public key, endpoints, and credentials without relying on any single blockchain.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  cursor: "pointer",
                }}
              >
                <summary style={{ fontWeight: 700, fontSize: 14, userSelect: "none", color: S.text }}>
                  {item.q}
                </summary>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, marginTop: 12, marginBottom: 0 }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: 20, marginTop: 8 }}>Related Learn Guides</h2>
          <InteractiveCards
            items={[
              { title: "AI Crypto Agents Guide", href: "/learn/ai-crypto-agents-guide", desc: "Introduction to AI agents in crypto" },
              { title: "AI Agent Payments & x402", href: "/learn/ai-agent-payments-x402-guide", desc: "Machine-to-machine payments via x402" },
              { title: "On-Chain Identity Guide", href: "/learn/onchain-identity-guide", desc: "DIDs, verifiable credentials, and on-chain identity" },
              { title: "Stablecoin Payments 2026", href: "/learn/stablecoin-payments-guide-2026", desc: "Stablecoins as payment infrastructure" },
              { title: "FHE Crypto Guide 2026", href: "/learn/fhe-crypto-guide-2026", desc: "Fully Homomorphic Encryption for agent privacy" },
              { title: "AI Trading Signals Tool", href: "/tools/ai-trading-signals", desc: "Agent-powered trading analysis" },
            ]}
            surface={S.surface}
            border={S.border}
            cyan={S.cyan}
          />
        </section>

        {/* Disclaimer */}
        <section style={{ marginBottom: 48 }}>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}30`, borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: S.orange, marginBottom: 12 }}>⚠️ Disclaimer</h3>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              This guide is for educational purposes only and does not constitute financial, legal, or investment advice. The agent identity infrastructure described herein is rapidly evolving, and standards are not yet finalized. Interacting with AI agents, especially those managing assets autonomously, carries significant risk. Always verify agent credentials independently, use insurance and bonding, and consult with legal and compliance experts before deploying agents in production systems. degen0x does not endorse any specific agent, protocol, or service provider mentioned in this guide.
            </p>
          </div>
        </section>

      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/best-solana-ecosystem-tokens" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Solana Ecosystem Tokens</a></li>
            <li><a href="/investing/crypto-momentum-trading-strategy" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Momentum Trading Strategy</a></li>
            <li><a href="/investing/crypto-whale-watching-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Whale Watching Guide</a></li>
            <li><a href="/tools/bitcoin-mempool-visualizer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Bitcoin Mempool Visualizer</a></li>
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
              "headline": "Ai Agent Identity Nhi Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/ai-agent-identity-nhi-guide"
            })
          }}
        />
      </article>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
}
