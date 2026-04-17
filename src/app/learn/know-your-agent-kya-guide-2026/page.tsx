import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Know Your Agent (KYA): AI Agent Identity & Verification Guide 2026 | degen0x",
  description: "Learn how Know Your Agent (KYA) frameworks verify AI agent identity on-chain. Covers Digital Agent Passports, agent wallets, KYA vs KYC, key protocols, and what it means for DeFi in 2026.",
  keywords: ["Know Your Agent", "KYA", "AI agent identity", "Digital Agent Passport", "agent wallets", "AI DeFi", "agentic commerce", "KYA vs KYC", "ERC-8004", "AI crypto 2026"],
  openGraph: {
    title: "Know Your Agent (KYA): AI Agent Identity & Verification Guide 2026 | degen0x",
    description: "Learn how Know Your Agent (KYA) frameworks verify AI agent identity on-chain. Covers Digital Agent Passports, agent wallets, KYA vs KYC, key protocols, and what it means for DeFi in 2026.",
    url: "https://degen0x.com/learn/know-your-agent-kya-guide-2026",
    type: "article",
    publishedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/og-know-your-agent-kya-guide-2026.svg",
        width: 1200,
        height: 630,
        alt: "Know Your Agent (KYA) Guide 2026 - AI Agent Identity & Verification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Know Your Agent (KYA) Guide 2026 | degen0x",
    description: "Verify AI agent identity on-chain with KYA frameworks, Digital Agent Passports, and trusted identity standards for autonomous agents.",
  },
};

// ─── Structured Data ──────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Know Your Agent (KYA): AI Agent Identity & Verification Guide 2026",
  description: "Learn how Know Your Agent (KYA) frameworks verify AI agent identity on-chain. Covers Digital Agent Passports, agent wallets, KYA vs KYC, key protocols, and what it means for DeFi in 2026.",
  url: "https://degen0x.com/learn/know-your-agent-kya-guide-2026",
  datePublished: "2026-04-01T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-know-your-agent-kya-guide-2026.svg",
  wordCount: 3800,
});

const faqs = [
  {
    question: "What is Know Your Agent (KYA) in crypto?",
    answer: "Know Your Agent (KYA) is an identity verification framework for AI agents operating on-chain. Just as KYC verifies human identity for financial services, KYA verifies an AI agent's identity, authority, operational boundaries, and the human principal behind it using cryptographic proofs, Digital Agent Passports, and soulbound tokens."
  },
  {
    question: "How is KYA different from KYC?",
    answer: "KYC verifies a human's identity using documents. KYA verifies an AI agent using cryptographic signatures and on-chain attestations. KYA must verify both the agent AND the human behind it, requires continuous monitoring since agents operate 24/7, and must define capability boundaries. KYC is a one-time check; KYA is ongoing verification."
  },
  {
    question: "What is a Digital Agent Passport (DAP)?",
    answer: "A Digital Agent Passport is a tamper-proof, soulbound credential containing an AI agent's identity: who built it, who it represents, what permissions it holds, and its operational constraints. DAPs are non-transferable NFTs that any smart contract can query to verify an agent's authority before executing transactions."
  },
  {
    question: "Can AI agents legally hold crypto?",
    answer: "In 2026, AI agents can technically hold crypto in wallets they control. However, liability flows to the human principal or organization. KYA frameworks establish this accountability chain, which is why regulators are increasingly interested in KYA as the compliance bridge between autonomous AI and financial regulations."
  },
  {
    question: "Which companies are building KYA infrastructure?",
    answer: "Key players include Crossmint (agent payment cards), Coinbase (agent wallet SDK), Sumsub (enterprise KYA verification), AgentFacts and KnowYourAgent.network (trust scoring), Visa and Mastercard (agent payment rails), and Skyfire (agent-to-agent payments). a16z crypto coined the term in their 2026 Big Ideas report."
  }
];

const faqSchema = generateFAQSchema(faqs);
const structuredData = combineSchemas(articleSchema, faqSchema);

const kyaPlayers = [
  {
    company: "Crossmint",
    focusArea: "Agent Payment Cards",
    whatTheydDo: "Virtual payment cards for AI agents with KYA controls on spending, merchant categories, and transaction frequency"
  },
  {
    company: "Coinbase",
    focusArea: "Agent Wallet SDK",
    whatTheydDo: "Developer SDK for creating agent wallets integrated with identity infrastructure and on-chain reputation tracking"
  },
  {
    company: "Sumsub",
    focusArea: "Enterprise KYA Verification",
    whatTheydDo: "Comprehensive KYA framework extending KYC infrastructure to handle AI agent identity verification"
  },
  {
    company: "AgentFacts",
    focusArea: "Agent Identity & Trust Scoring",
    whatTheydDo: "Agent identity verification standards and trust scoring based on transaction history and behavior"
  },
  {
    company: "Skyfire",
    focusArea: "Agent-to-Agent Payments",
    whatTheydDo: "Specialized payment protocols enabling autonomous commerce between verified agents"
  },
  {
    company: "Visa/Mastercard",
    focusArea: "Payment Rails for Agents",
    whatTheydDo: "Extending traditional card networks to support AI agents with compliance and settlement infrastructure"
  }
];

export default function KYAGuide() {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StructuredData data={structuredData} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Know Your Agent (KYA) Guide 2026" },
        ]} />

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: '#6366f1', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>AI & DeFi</span>
            <span style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Intermediate</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Know Your Agent (KYA): AI Agent Identity & Verification on Chain
          </h1>
          <p style={{ color: '#8b949e', fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>
            AI agents are no longer just chatbots — they hold wallets, execute trades, manage DeFi positions, and transact autonomously across protocols. But when an AI agent moves $50K through a lending pool, who's accountable? Know Your Agent (KYA) is the emerging identity standard that answers this question. Think of it as KYC for machines: a cryptographic framework that links every autonomous agent to its human principal, defines its operational boundaries, and creates a tamper-proof audit trail.
          </p>
          <div style={{ marginTop: '12px', fontSize: '13px', color: '#8b949e' }}>Updated April 2026 · 14 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-01"
          updatedDate="2026-04-12"
          readingTime={12}
          section="learn"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: '#58a6ff' }}>Table of Contents</h2>
          <ol style={{ paddingLeft: '20px', color: '#8b949e', fontSize: '14px', lineHeight: 2.2 }}>
            <li><a href="#what-is-know-your-agent" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>What Is Know Your Agent (KYA)?</a></li>
            <li><a href="#why-kya-matters-now" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>Why KYA Matters in 2026</a></li>
            <li><a href="#how-kya-works" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>How KYA Works: Architecture & Components</a></li>
            <li><a href="#digital-agent-passport" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>The Digital Agent Passport (DAP)</a></li>
            <li><a href="#kya-vs-kyc" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>KYA vs KYC: Key Differences</a></li>
            <li><a href="#agent-wallets-and-identity" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>Agent Wallets & On-Chain Identity</a></li>
            <li><a href="#key-protocols-building-kya" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>Key Protocols & Companies Building KYA</a></li>
            <li><a href="#kya-in-defi" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>KYA in DeFi: Practical Use Cases</a></li>
            <li><a href="#risks-and-challenges" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>Risks & Challenges</a></li>
            <li><a href="#what-kya-means-for-you" className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366f1]" style={{ color: '#58a6ff', textDecoration: 'none' }}>What KYA Means for Crypto Users</a></li>
          </ol>
        </nav>

        {/* Section 1: What Is KYA */}
        <section id="what-is-know-your-agent" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>What Is Know Your Agent (KYA)?</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Know Your Agent (KYA) is an identity, verification, and governance framework designed specifically for AI agents that operate autonomously on blockchain networks. If you've interacted with any DeFi protocol, you're familiar with KYC — the process where an exchange verifies your identity before you can trade. KYA applies the same concept to AI agents, but the challenge is fundamentally different: you're not verifying a person with a passport, you're verifying a piece of software that can spawn copies of itself, operate across multiple chains simultaneously, and execute thousands of transactions per hour.
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
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The framework was first articulated by a16z crypto in their 2026 Big Ideas report, where they predicted that the bottleneck for the agentic economy would shift from intelligence to identity. The logic is straightforward: AI models are already good enough to manage DeFi positions, execute arbitrage, and handle portfolio rebalancing. What's missing is a standardized way for protocols, regulators, and other agents to verify who they're dealing with and hold someone accountable when things go wrong.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            At its core, KYA answers four questions about every AI agent: <strong>Who built it?</strong> (the developer or organization), <strong>Who does it represent?</strong> (the human principal whose assets and authority the agent exercises), <strong>What can it do?</strong> (its operational boundaries and permitted actions), and <strong>What has it done?</strong> (a tamper-evident audit trail of all on-chain activity). These four pillars — identity, authority, capability, and auditability — form the foundation of every KYA implementation.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The formal definition: KYA = Agent Identity + Authority Binding + Runtime Controls + Tamper-Evident Audit. Each component is backed by cryptographic primitives — digital signatures, soulbound tokens, verifiable credentials, and on-chain attestations — that make it impossible to forge or transfer agent identities.
          </p>
        </section>

        {/* Section 2: Why KYA Matters */}
        <section id="why-kya-matters-now" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>Why KYA Matters in 2026</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The urgency behind KYA comes from a simple reality: AI agents are already moving real money on-chain, and the existing identity infrastructure was built for humans. When an AI agent manages a $2M DeFi portfolio, interacts with lending protocols, and executes hundreds of trades daily, every counterparty in that chain needs to know whether the agent is authorized to act and who's liable if something breaks.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Gartner projects that 40% of enterprise applications will embed task-specific AI agents by the end of 2026. In crypto specifically, AI agents are already active across yield optimization (scanning and rebalancing positions across Aave, Compound, and Pendle), MEV extraction (executing arbitrage and liquidation strategies), portfolio management (automated DCA, rebalancing, and risk hedging), and cross-chain bridging (finding optimal routes and executing transfers). Each of these activities involves real value transfer and requires trust between the agent and the protocols it interacts with.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The regulatory pressure is equally real. When an AI agent commits fraud or causes market manipulation, regulators will ask: who is responsible? Without KYA, there's no clear accountability chain from agent action to human principal. This ambiguity creates legal risk for everyone involved — the agent deployer, the protocol that processed the transaction, and the users whose funds were affected. KYA provides the accountability layer that autonomous commerce requires to function within existing legal frameworks.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Companies racing to build this infrastructure include some of the biggest names in crypto and payments: Crossmint, Coinbase, Stripe, Visa, Mastercard, and Skyfire are all building agent payment and identity rails. The market is moving from "should we verify agents?" to "how fast can we deploy verification?" — and that shift happened in Q1 2026.
          </p>
        </section>

        {/* Section 3: How KYA Works */}
        <section id="how-kya-works" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>How KYA Works: Architecture & Components</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            KYA isn't a single protocol or smart contract — it's a multi-layered framework with distinct components that work together. Understanding the architecture helps you evaluate which KYA solutions are robust and which are marketing fluff.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Layer 1: Agent Registration</strong> — Before an agent can operate, it must be registered on-chain with a verifiable identity. This typically involves deploying a smart contract or minting a soulbound token (SBT) that contains the agent's metadata: who created it, what model it runs, what chains it operates on, and its initial capability set. The registration creates a permanent, immutable record of the agent's existence and its original configuration.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Layer 2: Principal Binding</strong> — This links the AI agent to its human principal (the person or organization that controls it). Principal binding uses cryptographic attestations — the human signs a message linking their wallet address to the agent's on-chain identity. This creates a verifiable chain: Agent → Principal → Human Identity. If the agent does something malicious, the accountability chain leads back to a real person or legal entity.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Layer 3: Capability Definition</strong> — What is this agent allowed to do? Capability definitions are encoded as on-chain policies that specify which protocols the agent can interact with, maximum transaction values, permitted token types, time-based restrictions, and any other operational boundaries. Smart contracts can check these capabilities before executing an agent's transaction — if the agent tries to exceed its permissions, the transaction reverts.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Layer 4: Runtime Monitoring</strong> — Unlike KYC, which is a one-time check, KYA requires continuous verification. Agents operate 24/7 and their behavior can drift or be compromised. Runtime monitoring tracks the agent's actions against its defined capabilities, flagging anomalies like unusual transaction patterns, interactions with blacklisted addresses, or attempts to exceed spending limits. This layer often uses both on-chain event monitoring and off-chain oracle systems.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Layer 5: Audit Trail</strong> — Every action the agent takes is logged in a tamper-evident format. This isn't just blockchain transaction logs — it includes the agent's decision-making context, the data inputs it used, and any external API calls it made. The audit trail serves both compliance purposes (showing regulators exactly what happened) and dispute resolution (proving whether an agent acted within its authorized boundaries).
          </p>

          {/* KYA Architecture Table */}
          <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '700px' }} aria-label="KYA Architecture Layers">
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>Layer</th>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>Purpose</th>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>Mechanism</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { layer: "Registration", purpose: "Establish agent identity on-chain", mechanism: "Smart contract deployment, soulbound token minting" },
                  { layer: "Principal Binding", purpose: "Link agent to human principal", mechanism: "Cryptographic attestations, wallet signature proofs" },
                  { layer: "Capability Definition", purpose: "Define operational boundaries", mechanism: "On-chain policies, smart contract permission checks" },
                  { layer: "Runtime Monitoring", purpose: "Continuous behavior verification", mechanism: "Event monitoring, anomaly detection, oracle systems" },
                  { layer: "Audit Trail", purpose: "Tamper-evident action logging", mechanism: "Cryptographic hashing, on-chain event logs, compliance records" },
                ].map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '10px 12px', color: '#e6edf3', fontWeight: 600 }}>{item.layer}</td>
                    <td style={{ padding: '10px 12px', color: '#c9d1d9' }}>{item.purpose}</td>
                    <td style={{ padding: '10px 12px', color: '#8b949e' }}>{item.mechanism}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Digital Agent Passport */}
        <section id="digital-agent-passport" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>The Digital Agent Passport (DAP)</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The Digital Agent Passport is the credential that ties KYA together. Think of it as a machine-readable ID card for AI agents — a single on-chain document that any protocol can query to verify an agent's identity, authority, and operational history.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            A DAP typically contains: the agent's unique identifier (derived from a cryptographic key pair), the principal's identity attestation (linking to a human or organization), a capability manifest (what the agent is authorized to do), deployment metadata (when it was created, what version it runs, which chains it operates on), a trust score (based on transaction history, age, and behavior patterns), and an audit hash (a cryptographic fingerprint of the agent's activity log).
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            DAPs are implemented as soulbound tokens — non-transferable NFTs that are permanently bound to the agent's wallet address. This prevents identity theft: you can't steal an agent's credential and use it for a different agent, because the token literally cannot be transferred. If an agent is decommissioned, the DAP can be revoked by the issuing authority, instantly invalidating the agent's credentials across all protocols that check for it.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The practical impact is significant. Imagine a DeFi lending protocol that wants to offer higher borrowing limits to verified agents. The protocol's smart contract checks the agent's DAP: Is the principal a verified entity? Has the agent operated for more than 90 days without incidents? Is its trust score above the threshold? If all checks pass, the agent gets preferential terms. This creates a positive incentive loop — agents with strong KYA credentials get better access, encouraging more adoption of the standard.
          </p>
        </section>

        {/* Section 5: KYA vs KYC */}
        <section id="kya-vs-kyc" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>KYA vs KYC: Key Differences</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            While KYA borrows conceptually from KYC, the two frameworks differ in fundamental ways. Understanding these differences matters because solutions that simply bolt KYC onto agents will fail — the requirements are structurally different.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Subject of verification:</strong> KYC verifies a human using government-issued documents (passport, driver's license, utility bills). KYA verifies a software agent using cryptographic proofs, code attestations, and behavioral analysis. There's no "passport" for an AI agent — identity must be established through technical mechanisms.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Dual verification requirement:</strong> KYC verifies one entity (the human). KYA must verify two: the agent itself AND the human principal behind it. This dual requirement is unique to KYA and creates a more complex verification chain. The agent's identity must be independently verifiable, and its link to the human principal must be cryptographically provable.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Temporal scope:</strong> KYC is largely a point-in-time check — verify identity at onboarding, with periodic re-verification. KYA requires continuous monitoring because agents operate autonomously 24/7. An agent's behavior today must be continuously validated against its authorized capabilities. A compromised agent doesn't wait for the next quarterly review to cause damage.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Capability boundaries:</strong> KYC doesn't define what a human can do with their account (beyond basic AML restrictions). KYA must explicitly define the agent's operational boundaries — which protocols, which tokens, which transaction sizes, which time windows. These capability definitions are enforced programmatically, not by human judgment.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Scale:</strong> KYC handles millions of human identities. KYA will need to handle billions of agent identities, because a single organization might deploy thousands of specialized agents. The infrastructure must scale by orders of magnitude beyond what KYC systems handle today.
          </p>
        </section>

        {/* Section 6: Agent Wallets & Identity */}
        <section id="agent-wallets-and-identity" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>Agent Wallets & On-Chain Identity</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            For an AI agent to operate on-chain, it needs a wallet — and the design of that wallet is deeply intertwined with KYA. Agent wallets aren't like the MetaMask wallet on your laptop. They're programmatic wallets controlled by software, often using account abstraction (ERC-4337) or multi-party computation (MPC) to manage keys securely.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The key innovation is how agent wallets inherit human credentials. When you deploy an AI agent with a KYA-compliant wallet, the agent's wallet is cryptographically linked to your wallet (the principal's wallet). The agent can transact on your behalf, but its capabilities are bounded by the permissions you've granted. If the agent tries to send funds to an unauthorized address or exceed its transaction limit, the wallet's smart contract rejects the transaction before it executes.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Coinbase's agent wallet SDK exemplifies this approach. It allows developers to create wallets for their AI agents that integrate with existing identity infrastructure. The wallet tracks the agent's on-chain history, building a reputation over time that other protocols can use to assess trustworthiness. An agent wallet that's been active for 6 months with a clean transaction history earns higher trust scores than a freshly deployed wallet.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Crossmint has taken a different but complementary approach: issuing virtual credit cards to AI agents. This lets agents transact in both crypto and traditional payment systems, with KYA-style controls governing spending limits, merchant categories, and transaction frequency. The card's authorization system acts as a real-time capability enforcement layer — essentially KYA applied to payment card rails.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The self-sovereign identity (SSI) model from the broader Web3 ecosystem maps naturally onto agent identity. Just as humans don't need a centralized authority to prove wallet ownership, agents can establish trust through cryptographic proofs rather than corporate gatekeepers. This decentralized approach aligns with crypto's ethos while still satisfying regulatory requirements through the principal binding mechanism.
          </p>
        </section>

        {/* Section 7: Key Protocols */}
        <section id="key-protocols-building-kya" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>Key Protocols & Companies Building KYA</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The KYA ecosystem is still early but growing rapidly. Here are the major players across different parts of the stack:
          </p>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Identity & Verification Layer:</strong> Sumsub has published a comprehensive KYA framework for enterprise AI agent verification, extending their existing KYC infrastructure to handle agent identity. AgentFacts (agentfacts.org) provides agent identity verification standards and trust scoring. KnowYourAgent.network offers a dedicated platform for verifying autonomous AI agents with on-chain attestations.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Agent Wallet Infrastructure:</strong> Coinbase provides an agent wallet SDK that integrates with their existing identity and compliance systems. Crossmint offers agent payment cards and wallet infrastructure, enabling agents to hold and spend both crypto and fiat. Para (formerly Capsule) specializes in how agent wallets inherit credentials from their human principals.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Payment & Commerce Rails:</strong> Skyfire is building agent-to-agent payment protocols specifically for autonomous commerce. Visa and Mastercard are developing agent payment rails that extend traditional card networks to AI agents. Stripe has entered the space by enabling agent-initiated payments through their existing merchant infrastructure.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Standards & Frameworks:</strong> a16z crypto articulated the KYA concept and published the initial framework. Trulioo has released a white paper on KYA as an identity framework for agentic commerce. ERC-8004 is an emerging standard for on-chain agent verification that several of these projects are converging around.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>DeFi Integration:</strong> Several DeFi protocols are beginning to integrate KYA checks into their smart contracts. Protocols that allow agents to manage positions (lending, staking, yield farming) are the first adopters, as they have the most direct exposure to agent risk. Expect major DeFi protocols to add optional KYA verification tiers by late 2026, offering preferential rates to verified agents.
          </p>

          {/* KYA Players Table */}
          <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '700px' }} aria-label="Key Companies Building KYA Infrastructure">
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>Company</th>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>Focus Area</th>
                  <th scope="col" style={{ padding: '10px 12px', textAlign: 'left', color: '#58a6ff', fontWeight: 600 }}>What They Do</th>
                </tr>
              </thead>
              <tbody>
                {kyaPlayers.map((item, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '10px 12px', color: '#e6edf3', fontWeight: 600 }}>{item.company}</td>
                    <td style={{ padding: '10px 12px', color: '#6366f1' }}>{item.focusArea}</td>
                    <td style={{ padding: '10px 12px', color: '#c9d1d9' }}>{item.whatTheydDo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: KYA in DeFi */}
        <section id="kya-in-defi" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>KYA in DeFi: Practical Use Cases</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            KYA isn't just a compliance checkbox — it unlocks new DeFi functionality that's impossible without verified agent identity. Here are the most impactful use cases emerging in 2026.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Institutional DeFi Access:</strong> Traditional financial institutions want DeFi yield but can't interact with anonymous counterparties. KYA-verified agents act as compliant intermediaries — the institution deploys an agent with a verified identity, and DeFi protocols can confirm the agent's principal is a regulated entity. This bridges the gap between institutional compliance requirements and DeFi's permissionless architecture.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Agent-Managed Vaults:</strong> DeFi vaults managed by AI agents can use KYA to provide depositors with transparency and accountability. Before you deposit into an AI-managed yield vault, you can check the agent's DAP: who built it, how long it's been operating, what's its track record, and what are its risk parameters. This transforms agent-managed DeFi from a black box into an auditable, trustworthy service.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Cross-Protocol Agent Reputation:</strong> An agent that has operated reliably on Aave for 6 months should carry that reputation when it interacts with Morpho or Pendle. KYA enables portable agent reputation — a trust score that follows the agent across protocols and chains. Protocols can offer better terms (higher leverage, lower collateral requirements) to agents with strong on-chain histories.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Autonomous Agent Markets:</strong> KYA enables marketplaces where verified agents offer services to users — yield optimization, portfolio rebalancing, tax-loss harvesting, cross-chain arbitrage. Users can evaluate agents based on their verified credentials, historical performance, and trust scores before delegating authority. Think of it as a verified contractor marketplace for DeFi automation.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Regulatory Compliance:</strong> As regulators develop frameworks for autonomous AI in finance, KYA provides the compliance infrastructure. An exchange or protocol can demonstrate to regulators that every AI agent interacting with their platform is verified, bounded, and auditable — satisfying regulatory requirements without sacrificing the permissionless nature of DeFi for human users.
          </p>
        </section>

        {/* Section 9: Risks & Challenges */}
        <section id="risks-and-challenges" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>Risks & Challenges</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            KYA is promising but far from a solved problem. Several fundamental challenges could slow adoption or undermine the framework's effectiveness.
          </p>

          <div style={{ background: '#161b22', border: '1px solid #f8514940', borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                { title: 'Centralization Risk', desc: 'If KYA verification is controlled by a handful of providers (similar to how three credit agencies dominate human credit scoring), the framework becomes a centralization bottleneck in an ecosystem that values decentralization. An agent that can\'t get verified by the dominant KYA provider effectively can\'t operate. The challenge is building decentralized verification without sacrificing the trust guarantees that make KYA valuable.' },
                { title: 'Identity Spoofing', desc: 'Sophisticated attackers could create agents that pass KYA verification initially but then change behavior after receiving credentials. While runtime monitoring addresses this partially, the arms race between attackers and verification systems is ongoing. No identity system is immune to social engineering at the principal level — a verified human can still deploy a malicious agent.' },
                { title: 'Standards Fragmentation', desc: 'Multiple competing KYA standards could fragment the ecosystem. If Coinbase\'s agent wallets use one identity format and Crossmint uses another, agents would need multiple credentials to operate across the ecosystem. Interoperability between KYA providers is critical but not yet guaranteed.' },
                { title: 'Privacy Concerns', desc: 'KYA requires linking AI agents to human principals, which creates privacy implications. If your DeFi agent is publicly linked to your identity, your financial activity becomes traceable. Balancing accountability with privacy is a core design challenge — zero-knowledge proofs offer a potential solution (proving you\'re a verified principal without revealing who you are) but add complexity.' },
                { title: 'Regulatory Uncertainty', desc: 'Regulators haven\'t yet defined clear requirements for AI agent identity in financial services. Building KYA infrastructure without regulatory clarity means the standards may need to change significantly as regulations crystallize. Early adopters face the risk of building to a moving target.' },
              ].map((item, i) => (
                <div key={i}>
                  <h4 style={{ color: '#f85149', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>⚠️ {item.title}</h4>
                  <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 10: What KYA Means */}
        <section id="what-kya-means-for-you" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: '#e6edf3' }}>What KYA Means for Crypto Users</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            If you're using AI agents in your crypto strategy — or planning to — KYA directly impacts your experience. Here's the practical takeaway for different user types.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>If you're deploying AI agents:</strong> Start thinking about KYA compliance now. Choose agent wallet providers that support identity attestation and capability definition. As protocols add KYA verification tiers, compliant agents will get better access and terms. The early movers who establish strong agent reputations will have a competitive advantage.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>If you're depositing into AI-managed protocols:</strong> KYA gives you a new tool for evaluating risk. Before depositing into an AI-managed vault or strategy, check whether the managing agent has a Digital Agent Passport, who the principal is, and what the agent's trust score looks like. Protocols that integrate KYA verification offer meaningfully better transparency than those that don't.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>If you're building in DeFi:</strong> Consider adding optional KYA checks to your protocol's smart contracts. This positions your protocol for institutional adoption (institutions will require KYA-verified counterparties) and gives your users more confidence when interacting with AI agents on your platform. ERC-8004 provides a starting point for on-chain agent verification integration.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>If you're just watching:</strong> KYA is worth tracking because it signals the maturation of AI agents from experimental tools to institutional infrastructure. When major DeFi protocols start offering different terms for KYA-verified agents vs. anonymous agent, it will reshape how value flows through the ecosystem. The agentic economy is coming — KYA determines whether it arrives as a regulated financial system or a Wild West.
          </p>

          <div style={{ background: '#161b22', border: '1px solid #d2992240', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#d29922', marginBottom: '10px' }}>⚠️ Disclaimer</h3>
            <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>
              This guide is for informational purposes only. It is not financial advice. Always do your own research before making investment decisions or deploying AI agents with access to your funds.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '24px', color: '#e6edf3' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '16px', cursor: 'pointer' }}>
                <summary style={{ color: '#58a6ff', fontWeight: 600, fontSize: '15px', outline: 'none' }}>
                  {faq.question}
                </summary>
                <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7, marginTop: '12px' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '24px', color: '#e6edf3' }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { title: "AI Crypto Agents Guide", href: "/learn/ai-crypto-agents" },
              { title: "AI Agent Wallets Guide 2026", href: "/learn/ai-agent-wallets-guide-2026" },
              { title: "AI Agent Payments (X402) Guide 2026", href: "/learn/ai-agent-payments-x402-guide-2026" },
              { title: "ERC-8183 Agentic Commerce Guide 2026", href: "/learn/erc-8183-agentic-commerce-guide-2026" },
              { title: "Account Abstraction Guide", href: "/learn/account-abstraction" },
            ].map((article, i) => (
              <Link key={i} href={article.href} style={{ textDecoration: 'none' }}>
                <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '12px', padding: '20px', cursor: 'pointer', transition: 'all 0.2s ease', height: '100%' }}>
                  <h3 style={{ color: '#58a6ff', fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>{article.title}</h3>
                  <p style={{ color: '#8b949e', fontSize: '13px' }}>Learn more about this topic →</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <BackToTop />
      </div>
      <RelatedContent category="learn" currentSlug="/learn/know-your-agent-kya-guide-2026" />
    </div>
  );
}
