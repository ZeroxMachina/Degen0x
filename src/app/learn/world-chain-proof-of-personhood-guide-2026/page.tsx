'use client';

import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import StructuredData from '@/components/StructuredData';
import { generateArticleSchema, generateFAQSchema, combineSchemas } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/constants';

const S = {
  bg: "var(--color-bg, #0d1117)",
  border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)",
  text2: "var(--color-text-secondary, #8b949e)",
  primary: "#6366f1",
  blue: "#58a6ff",
  green: "#3fb950",
  purple: "#bc8cff",
  yellow: "#d29922",
  red: "#f85149",
  orange: "#F6851B",
  teal: "#06b6d4",
};

const articleSchema = generateArticleSchema({
  headline: 'World Chain & Proof of Personhood Guide 2026: World ID, AgentKit & WLD',
  description: 'Complete guide to World Chain, proof of personhood verification, and World ID biometric technology. Learn how the OP Stack L2 verifies humans, enables AI agent identity with AgentKit, and powers sybil-resistant applications.',
  url: `${SITE_URL}/learn/world-chain-proof-of-personhood-guide-2026`,
  datePublished: '2026-03-25',
  author: { name: 'degen0x', url: SITE_URL },
});

const faqSchema = generateFAQSchema([
  {
    question: 'What is World Chain?',
    answer: 'World Chain is an OP Stack Layer 2 blockchain built specifically for humans verified through World ID. Launched in 2024 and becoming mainstream in 2026, it provides priority blockspace and gas allowances for World ID-verified users while filtering out bot traffic. World Chain is designed to create truly human-centric blockchain applications and solve sybil resistance problems.',
  },
  {
    question: 'How does World ID verify humans?',
    answer: 'World ID uses iris biometric scanning via Orb devices (physical kiosks operated by World). Users visit an Orb location, submit to iris scanning, and receive a cryptographic proof of personhood stored on their device. This proof can then be used on-chain to prove they are a unique human without revealing their identity. As of March 2026, over 18 million people globally have completed World ID verification.',
  },
  {
    question: 'What is AgentKit and how does it relate to World ID?',
    answer: 'AgentKit is Coinbase\'s toolkit launched in March 2026 that enables AI agents to carry cryptographic proof of being backed by unique humans via World ID integration. Through the x402 protocol partnership, AI agents can prove they\'re not autonomous bots but rather operated or verified by humans, enabling more trustworthy AI-human collaboration in blockchain applications.',
  },
  {
    question: 'Is World ID safe and what are the privacy concerns?',
    answer: 'World ID\'s biometric data is processed through World\'s proprietary Orb system with claims of privacy-first design. However, legitimate concerns exist: centralization of iris scanning hardware, data breach risks with biometric information, and regulatory uncertainty around biometric processing. The system is designed so iris data is never stored, only cryptographic proofs, but users must evaluate their own risk tolerance with biometric systems.',
  },
  {
    question: 'What is WLD token and what are its use cases?',
    answer: 'WLD is World\'s governance and economic token. It was distributed through a controversial airdrop to World ID verified users. Beyond governance, WLD serves utility purposes including incentivizing verification participation, protocol development funding, and ecosystem incentives. The token initially faced skepticism but has become core to World\'s economic model and governance participation.',
  },
  {
    question: 'How does World Chain compare to other sybil resistance solutions?',
    answer: 'World Chain uses biometric verification (iris scanning) for sybil resistance, while competitors like Gitcoin Passport use credential aggregation, BrightID uses social graphs, and Proof of Humanity uses staking and social verification. World\'s approach is the most thorough in establishing 1-human = 1-identity, but also the most centralized and privacy-invasive. The best choice depends on your use case\'s privacy and security requirements.',
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function WorldChainProofOfPersonhoodGuidePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'World Chain & Proof of Personhood Guide 2026', href: '/learn/world-chain-proof-of-personhood-guide-2026' },
  ];

  const tableOfContents = [
    { id: 'what-is-world-chain', label: 'What Is World Chain?' },
    { id: 'proof-of-personhood', label: 'How Proof of Personhood Works' },
    { id: 'world-chain-architecture', label: 'World Chain Architecture' },
    { id: 'world-id-agentkit', label: 'World ID & AI Agent Verification' },
    { id: 'world-ecosystem', label: 'The World Ecosystem' },
    { id: 'wld-tokenomics', label: 'WLD Tokenomics & Economics' },
    { id: 'comparison', label: 'World Chain vs Other Identity Solutions' },
    { id: 'risks-controversies', label: 'Risks & Controversies' },
    { id: 'getting-started', label: 'How to Get Started with World Chain' },
    { id: 'faq', label: 'Frequently Asked Questions' },
  ];

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, minHeight: '100vh' }}>
      <StructuredData schema={combinedSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '4px 12px',
                backgroundColor: S.primary,
                color: S.text,
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              Layer 2
            </span>
            <span
              style={{
                padding: '4px 12px',
                backgroundColor: '#1e40af',
                color: S.text,
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              Intermediate
            </span>
          </div>

          <h1
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '20px',
              background: `linear-gradient(135deg, ${S.teal} 0%, ${S.blue} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            World Chain & Proof of Personhood Guide 2026
          </h1>

          <p style={{ fontSize: '18px', color: S.text2, marginBottom: '20px', lineHeight: '1.6' }}>
            World Chain is an OP Stack Layer 2 specifically built for humans verified through World ID biometric technology. This comprehensive guide covers World ID's iris scanning verification, AgentKit's AI agent identity integration with Coinbase, and how proof of personhood is reshaping sybil-resistant DeFi and governance in 2026.
          </p>

          <p style={{ color: S.text2, fontSize: '14px' }}>
            Updated March 2026 · 13 min read
          </p>
        </div>

        {/* Table of Contents */}
        <div
          aria-label="Table of Contents"
          style={{
            backgroundColor: '#161b22',
            border: `1px solid ${S.border}`,
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: S.text }}>
            Table of Contents
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {tableOfContents.map((item, index) => (
              <li key={item.id} style={{ marginBottom: '8px' }}>
                <a
                  href={`#${item.id}`}
                  style={{
                    color: S.blue,
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  onFocus={(e) => { e.currentTarget.style.outline = `2px solid ${S.primary}`; e.currentTarget.style.outlineOffset = '2px'; }}
                  onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
                >
                  <span style={{ color: S.text2 }}>{index + 1}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: What Is World Chain */}
        <section id="what-is-world-chain" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            1. What Is World Chain?
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World Chain is a Layer 2 blockchain built on the OP Stack and purpose-built for World ID-verified humans. Launched in 2024 and achieving mainstream adoption throughout 2026, World Chain represents a unique L2 thesis: blockspace reserved for humans, with sybil resistance and bot-filtering built into the protocol itself. Unlike other Layer 2s that are general-purpose chains open to anyone, World Chain actively restricts transaction priority and benefits to humans verified through iris biometric scanning.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Sam Altman (OpenAI CEO) co-founded World with the ambitious vision of creating a global human identity layer and basic income protocol. While controversial for its biometric data collection and centralized hardware, World Chain represents perhaps the most concrete attempt to solve sybil resistance at scale—currently serving 18+ million verified humans globally as of March 2026.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `2px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: S.text, margin: 0 }}>
              <strong>Key Fact:</strong> World Chain operates on the Optimism Superchain ecosystem, meaning it shares security with Ethereum and Optimism while maintaining its own community-driven sequencer and world-specific optimizations. It provides gas allowances and transaction credits for World ID-verified users, making casual transactions and micro-interactions economically viable.
            </p>
          </div>
        </section>

        {/* Section 2: Proof of Personhood */}
        <section id="proof-of-personhood" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            2. How Proof of Personhood Works
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            World ID: Biometric Verification via Iris Scanning
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            At the core of World's ecosystem is World ID, a decentralized identity standard using iris biometric verification. Unlike traditional identity systems, World ID doesn't store your actual iris data. Instead, it creates a cryptographic hash of your iris pattern—a unique mathematical fingerprint of your eye's structure—that proves you are a unique human without revealing who you are.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            The verification process happens at Orb locations—physical kiosks operated by World scattered globally. Users visit an Orb, scan their iris through a specialized camera, and receive a cryptographic credential on their device proving they completed verification. This credential is stored locally and can be used with smart contracts to prove personhood without ever exposing the original iris data.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Verification Levels
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World implements a multi-tiered verification approach:
          </p>

          <ul style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text, paddingLeft: '24px' }}>
            <li><strong>Proof of Personhood (Orb):</strong> Full iris biometric verification. Requires visiting a physical Orb location. Creates cryptographic proof of unique human identity. Used for sensitive applications like UBI distribution and voting.</li>
            <li><strong>Proof of Personhood (Phone):</strong> Lighter verification using liveness detection (selfie-based). Faster but less rigorous than Orb verification. Suitable for general application usage and spam prevention.</li>
            <li><strong>Anonymous Verification:</strong> Cryptographic proof of being verified without linking to any on-chain identity. Enables privacy-preserving applications while still preventing sybil attacks.</li>
          </ul>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            How It Works On-Chain
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            When you want to prove personhood on-chain, you provide a cryptographic proof to a smart contract. The contract validates this proof against World's verification registry without learning any identifying information about you. The smart contract can then implement human-only logic—allowing only one transaction per verified human, distributing UBI only to unique individuals, or enabling voting where each human gets exactly one vote regardless of wallet address.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: S.text, margin: 0 }}>
              <strong>Privacy Guarantee:</strong> The iris data itself is never stored in World's systems. Only cryptographic hashes and proofs are retained. Users can revoke their verification at any time, and the iris scan is deleted from the Orb camera after processing. However, the cryptographic proof of personhood remains on-chain permanently.
            </p>
          </div>
        </section>

        {/* Section 3: World Chain Architecture */}
        <section id="world-chain-architecture" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            3. World Chain Architecture
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            OP Stack Foundation
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World Chain is built on the OP Stack, the same framework powering Optimism and other chains in the Optimism Superchain ecosystem. This means it inherits battle-tested optimistic rollup technology: transactions are processed off-chain and periodically submitted to Ethereum for settlement, providing Ethereum-equivalent security while dramatically reducing transaction costs.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Priority Blockspace for Humans
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World Chain's innovation is in its sequencer design. For transactions submitted by World ID-verified users, the sequencer reserves priority blockspace and provides gas credits. This means verified users get faster inclusion, lower costs, and better UX compared to unverified accounts. Non-verified transactions still work but with standard fees and ordering—effectively creating a two-tier system that incentivizes human verification.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginbottom: '12px', color: S.blue, marginTop: '24px' }}>
            Gas Allowances & Micro-Transactions
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World Chain provides verified users with regular gas allowances—credits usable for transactions on the chain. This mechanism powers one of World's flagship applications: enabling micro-interactions and frequent transactions that would be uneconomical on other chains. A World ID-verified user might send dozens of small transactions daily while barely touching their gas budget.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Integration with Optimism Superchain
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            As part of the Optimism Superchain, World Chain can interoperate with other OP Stack chains like Base, Optimism, and Arbitrum (through bridges). This allows composability—apps can verify users on World Chain and interact with DeFi protocols on Base, or provide World ID proofs to applications across the entire Superchain ecosystem.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
              marginTop: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.teal, marginTop: 0 }}>
              Technical Specifications
            </h3>
            <ul style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, paddingLeft: '20px', color: S.text }}>
              <li>Block Time: ~2–4 seconds</li>
              <li>Rollup Type: Optimistic (OP Stack)</li>
              <li>Gas Cost Reduction: ~99% vs Ethereum L1</li>
              <li>TVL (March 2026): ~$2B–$3B</li>
              <li>Daily Verified Users: 500K+ active</li>
            </ul>
          </div>
        </section>

        {/* Section 4: World ID & AI Agent Verification */}
        <section id="world-id-agentkit" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            4. World ID & AI Agent Verification
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            AgentKit: Proof of Human Behind AI Agents
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            In March 2026, Coinbase launched AgentKit, a comprehensive toolkit enabling AI agents to interact with cryptocurrency and smart contracts. AgentKit integrates with World ID to solve a critical problem: how do you know an AI agent is actually backed by a real human rather than being a fully autonomous bot?
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            AgentKit allows AI agents to carry cryptographic proof of being operated or verified by World ID-verified humans. An AI agent running on an autonomous framework can verify that its operator was human-checked, creating a trust foundation for AI-human collaboration in blockchain applications. This is critical for use cases like AI-powered DeFi managers, autonomous trading agents, and AI governance participants.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            x402 Protocol: Human-Backed Agents
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            The x402 protocol (partnered with World and Coinbase) establishes a standard for AI agents to prove human backing. Through x402, an AI agent can assert: "I have cryptographic proof that my operator completed World ID verification." This moves trust from "am I talking to a human?" to "am I talking to an agent operated by a verified human?" enabling safer AI-human interaction in trustless environments.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Use cases include:
          </p>

          <ul style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text, paddingLeft: '24px' }}>
            <li><strong>AI DeFi Managers:</strong> Autonomous agents managing portfolios with proof their operator is a real human, making them eligible for higher leverage or governance rights</li>
            <li><strong>AI Governance:</strong> Agents participating in DAOs, able to vote if their human operator is verified, preventing sybil voting</li>
            <li><strong>AI Commerce:</strong> Agents conducting transactions with built-in anti-fraud through human verification</li>
            <li><strong>AI Reputation:</strong> Agent accounts carrying reputation scores based on their human operator's verification status</li>
          </ul>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `2px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: S.text, margin: 0 }}>
              <strong>AgentKit Impact:</strong> AgentKit's March 2026 launch marks the beginning of trustworthy AI in crypto. For the first time, AI agents can prove they're not unsupervised bots but rather tools operated by verified humans. This is foundational for scaling AI in DeFi, governance, and financial protocols where sybil resistance matters critically.
            </p>
          </div>
        </section>

        {/* Section 5: The World Ecosystem */}
        <section id="world-ecosystem" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            5. The World Ecosystem
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            World App: The Gateway to World ID
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            The World App is the primary user interface for World Chain and World ID. It's a self-custodial wallet that manages World ID verification status, World Chain assets, and integrations with dApps. The app shows which services you've verified with, manages your privacy settings, and handles World Chain transactions with built-in sybil protection.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Mini Apps & Native Integration
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            The World App supports "Mini Apps"—lightweight applications built for World ID-verified users. These range from simple games rewarding human players (not bots) to DeFi protocols using World ID for sybil resistance to social features enabling human-to-human connections. Mini Apps benefit from native World ID integration, gas allowances, and the verification-first UX.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginmarginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Developer Tools & World SDK
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            World provides comprehensive developer tooling including smart contract libraries for verifying personhood, an SDK for integrating World ID into dApps, and infrastructure for checking on-chain whether an address is verified. This enables developers to build human-exclusive features—airdrops only for humans, governance weighted by personhood, and fraud-resistant protocols.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Ecosystem DApps (March 2026)
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Notable applications using World ID and World Chain include:
          </p>

          <ul style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text, paddingLeft: '24px' }}>
            <li><strong>Worldcoin Foundation UBI:</strong> Early experiments in distributing universal basic income to World ID-verified users</li>
            <li><strong>World Marketplace:</strong> Commerce platform where verified sellers and buyers have verified status</li>
            <li><strong>World Games:</strong> Games and social interactions where human-only lobbies prevent bot farming</li>
            <li><strong>DAO Governance Integration:</strong> DAOs using World ID for voting, ensuring one-human = one-vote</li>
            <li><strong>NFT Communities:</strong> Drops reserved for World ID-verified users, preventing sybil farming</li>
          </ul>
        </section>

        {/* Section 6: WLD Tokenomics */}
        <section id="wld-tokenomics" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            6. WLD Tokenomics & Economics
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            Token Overview
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            WLD is the governance and utility token of the World ecosystem. Launched via airdrop to verified World ID users, WLD serves multiple functions: governance participation in World protocols, incentivizing network participation, paying for infrastructure, and economic mechanisms within the ecosystem.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Supply & Distribution
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            <strong>Total Supply:</strong> 10 billion WLD tokens. This large supply was designed to make WLD available to all 18+ million verified users through the airdrop and ongoing incentive programs.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            <strong>Distribution (2024–2026):</strong>
          </p>

          <ul style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text, paddingLeft: '24px' }}>
            <li>40% to Worldcoin Foundation and ecosystem development</li>
            <li>30% to team members and investors (with vesting schedules)</li>
            <li>20% to verified users through airdrop and grants</li>
            <li>10% community and ecosystem incentives</li>
          </ul>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Token Economics
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            As of March 2026, WLD trades between $1.20–$2.50 depending on market conditions and sentiment. The token was initially controversial—many saw the large airdrop to verified users as overhyped and speculative. However, WLD has stabilized as it becomes increasingly integrated into World Chain governance and economic incentives.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Key economic mechanisms include:
          </p>

          <ul style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text, paddingLeft: '24px' }}>
            <li><strong>Governance Staking:</strong> Users stake WLD to participate in World Chain governance decisions</li>
            <li><strong>Protocol Rewards:</strong> Verified users earn WLD for participation in protocol development and validation</li>
            <li><strong>Verification Incentives:</strong> New users receive WLD for completing World ID verification</li>
            <li><strong>Fee Distribution:</strong> A percentage of World Chain transaction fees go to WLD holders</li>
          </ul>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.orange, marginTop: 0 }}>
              WLD Controversy: The Initial Airdrop Skepticism
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              WLD's initial launch faced criticism for being overhyped and speculative. Critics argued the airdrop valued WLD too optimistically given World's early stage and unproven utility. However, by March 2026, WLD has matured into a legitimate governance token with real use cases in World Chain operations and ecosystem development.
            </p>
          </div>
        </section>

        {/* Section 7: Comparison Table */}
        <section id="comparison" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            7. World Chain vs Other Identity Solutions
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', color: S.text }}>
            Multiple sybil resistance and identity solutions compete in the crypto space. Each takes a different approach to solving the human verification problem:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: '600' }}>
                    Aspect
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: '600' }}>
                    World Chain
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: '600' }}>
                    Gitcoin Passport
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: '600' }}>
                    BrightID
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: '600' }}>
                    Proof of Humanity
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Verification Method</td>
                  <td style={{ padding: '12px', color: S.text }}>Iris biometric scanning</td>
                  <td style={{ padding: '12px', color: S.text }}>Credential aggregation</td>
                  <td style={{ padding: '12px', color: S.text }}>Social graph verification</td>
                  <td style={{ padding: '12px', color: S.text }}>Staking + social review</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Centralization</td>
                  <td style={{ padding: '12px', color: S.text }}>Hardware (Orb) centralized</td>
                  <td style={{ padding: '12px', color: S.text }}>Decentralized credential mixing</td>
                  <td style={{ padding: '12px', color: S.text }}>Decentralized social graph</td>
                  <td style={{ padding: '12px', color: S.text }}>Decentralized (DAO-governed)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Privacy Level</td>
                  <td style={{ padding: '12px', color: S.text }}>High (iris not stored)</td>
                  <td style={{ padding: '12px', color: S.text }}>Medium (aggregates identity sources)</td>
                  <td style={{ padding: '12px', color: S.text }}>Medium (social connections)</td>
                  <td style={{ padding: '12px', color: S.text }}>Medium (public staking)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Sybil Resistance</td>
                  <td style={{ padding: '12px', color: S.text }}>Strongest (1 human = 1 iris)</td>
                  <td style={{ padding: '12px', color: S.text }}>Good (weighted scores)</td>
                  <td style={{ padding: '12px', color: S.text }}>Moderate (exploitable)</td>
                  <td style={{ padding: '12px', color: S.text }}>Good (staking + review)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Accessibility</td>
                  <td style={{ padding: '12px', color: S.text }}>Limited by Orb locations</td>
                  <td style={{ padding: '12px', color: S.text }}>Global (online)</td>
                  <td style={{ padding: '12px', color: S.text }}>Global (app-based)</td>
                  <td style={{ padding: '12px', color: S.text }}>Global (online)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Cost to Verify</td>
                  <td style={{ padding: '12px', color: S.text }}>Free (public Orbs)</td>
                  <td style={{ padding: '12px', color: S.text }}>Free</td>
                  <td style={{ padding: '12px', color: S.text }}>Free</td>
                  <td style={{ padding: '12px', color: S.text }}>$10–$100 deposit</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: S.text2 }}>Verification Time</td>
                  <td style={{ padding: '12px', color: S.text }}>~5 min (in-person)</td>
                  <td style={{ padding: '12px', color: S.text }}>Instant to days</td>
                  <td style={{ padding: '12px', color: S.text }}>Hours to weeks</td>
                  <td style={{ padding: '12px', color: S.text }}>Days to months</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', color: S.text2 }}>Best For</td>
                  <td style={{ padding: '12px', color: S.text }}>Maximum sybil resistance</td>
                  <td style={{ padding: '12px', color: S.text }}>Flexible identity scoring</td>
                  <td style={{ padding: '12px', color: S.text }}>Community-based verification</td>
                  <td style={{ padding: '12px', color: S.text }}>Governance + compliance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: S.text2, fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
            <span style={{ opacity: 0.6 }}>← scroll to see all columns →</span>
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Which Should You Use?
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            <strong>Choose World Chain if:</strong> You need the strongest possible sybil resistance, are building financial protocols where bot attacks are critical risks, or are operating in jurisdictions with regulatory requirements for human verification.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            <strong>Choose Gitcoin Passport if:</strong> You want flexible identity scoring that combines multiple verification sources, need to support diverse verification methods, or want a solution that works globally without physical infrastructure.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            <strong>Choose BrightID if:</strong> You're building social applications where peer verification is natural, want maximum decentralization, or have a user base that's already engaged in the Bright ecosystem.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', color: S.text }}>
            <strong>Choose Proof of Humanity if:</strong> You're building governance or compliance applications where formal registration and higher financial barriers to sybil attacks are acceptable, and you have a DAO-native user base.
          </p>
        </section>

        {/* Section 8: Risks & Controversies */}
        <section id="risks-controversies" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            8. Risks & Controversies
          </h2>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              Biometric Data Privacy Concerns
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World's core mechanism—iris scanning—is inherently sensitive. While World claims iris data is never stored (only cryptographic hashes), the risk profile differs fundamentally from social-graph solutions. A breach of Orb databases could theoretically expose iris hash data. Additionally, requiring iris scanning in a global system raises questions about consent, coercion, and surveillance in authoritarian regimes.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              Orb Hardware Centralization
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              Iris scanning requires specialized hardware. World operates Orb devices globally, but coverage remains concentrated in developed countries. A user in rural areas or developing nations may have no local Orb access, creating a geographic bias in who can easily obtain World ID. Additionally, World controls all Orbs, meaning they could theoretically deny verification to users—a form of censorship risk.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              Regulatory Uncertainty
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              Governments worldwide are still developing regulations around biometric data collection and blockchain-based identity. World operates in a regulatory gray zone. Privacy regulations like GDPR could restrict how Worldcoin processes iris data. AML/KYC regulations might require World to implement financial controls at odds with the protocol's decentralization goals.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              Sam Altman & OpenAI Controversy
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World was co-founded by Sam Altman (OpenAI CEO), making it a controversial project in crypto circles. Critics worry about conflicts of interest, questions about whether OpenAI resources subsidized World development, and concerns about Altman's broader vision. His involvement brings both credibility and skepticism.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              Smart Contract & Technical Risks
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World Chain is relatively new as of 2026. While OP Stack is battle-tested, World's specific customizations and integrations with Orb hardware haven't been through years of production use. Bugs in smart contracts integrating World ID with DeFi protocols could create sybil vulnerabilities or lock user funds.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.red, marginTop: 0 }}>
              WLD Token Volatility
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              As with any cryptocurrency, WLD is highly volatile. The large airdrop created a flood of token supply, and early sellers drove prices down. WLD's utility is still emerging, making it speculative. Users shouldn't assume WLD airdrops represent meaningful economic value.
            </p>
          </div>
        </section>

        {/* Section 9: Getting Started */}
        <section id="getting-started" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            9. How to Get Started with World Chain
          </h2>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue }}>
            Step 1: Download World App
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Visit the official World website (worldcoin.org) or app stores (iOS/Android) and download the World App. Create a new account by setting up a pin and backing up your recovery phrase. Ensure you're downloading from the official source—scams exist.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Step 2: Verify Your Identity at an Orb
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Find a nearby Orb location using the World App's location finder. Visit the Orb and complete the iris scanning process. You'll need your passport or ID document. The process takes about 5–10 minutes. You'll receive a World ID credential stored on your device.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Step 3: Claim WLD Airdrop (if eligible)
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            If you verified before a certain date, you may be eligible for WLD airdrop. The app will display your allocation. Claim it directly in the World App. Note: WLD eligibility is based on verification timestamp and varies globally.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Step 4: Fund Your Account & Bridge Assets
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            You can bridge assets from Ethereum or other chains to World Chain using the official bridge or third-party bridges like Stargate. Alternatively, buy WLD or ETH directly on World Chain using on-ramps integrated into the World App.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Step 5: Explore World Chain DApps
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Visit Mini Apps in the World App ecosystem. Try World Games (play-to-earn), Worldcoin Marketplace, or DeFi protocols like Aave or Uniswap (if deployed on World Chain). As a verified human, you'll access special features, gas allowances, and priority features unavailable to unverified users.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: '24px' }}>
            Step 6: Participate in Governance
          </h3>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: S.text }}>
            Stake your WLD in governance to vote on World Chain protocol proposals. As of March 2026, governance decisions include resource allocation, protocol upgrades, and ecosystem fund distribution. Each verified human gets voting power proportional to their staked WLD.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `2px solid ${S.green}`,
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: S.text, margin: 0 }}>
              <strong>Pro Tip:</strong> If you're hesitant about iris scanning, start by learning about World ID through read-only research. World Chain itself works without verification, just with lower priority and standard gas fees. You can participate at any level of engagement.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: S.text }}>
            Frequently Asked Questions
          </h2>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              Is World ID mandatory to use World Chain?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              No. You can use World Chain without World ID verification. Unverified users can send transactions, hold assets, and interact with dApps. However, verified users enjoy gas allowances, faster transaction inclusion, and access to human-exclusive features. World Chain incentivizes but doesn't require verification.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              Can you cheat World ID by using fake biometrics?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World ID uses advanced liveness detection and biometric matching against government IDs to prevent fraud. It's theoretically possible but extremely difficult and expensive to forge iris patterns at scale. Specialized Orb hardware makes casual fraud unlikely. However, sophisticated attacks by well-funded actors might be possible—World has bug bounty programs to find such vulnerabilities.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              What happens if I lose access to my World ID proof?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              Your World ID proof is stored locally on your device. If you lose your phone, you'll need to re-verify at an Orb. However, the Orb will recognize you as already verified (biometric records are linked), and you can re-issue your proof without re-scanning. The process is typically fast, though policies may vary by region.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              Is World available in my country?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World has expanded to 150+ countries as of March 2026, with Orb locations in major cities globally. However, coverage varies significantly. You can check the World App to see if Orbs are near you. Some countries (including parts of Asia and Europe) have restricted Worldcoin operations due to regulatory concerns, so availability depends on your jurisdiction.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              How does World ID work with DeFi protocols?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              DeFi protocols can integrate World ID to implement human-only features. For example, a lending protocol might offer better rates exclusively to World ID-verified users. A DAO might enforce 1-human-1-vote governance using World ID proofs. Developers use World's SDK to check if an address is verified and implement conditional logic in smart contracts.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: `1px solid ${S.border}`,
              borderRadius: '8px',
              padding: '24px',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: S.blue, marginTop: 0 }}>
              What's the difference between World ID and World Chain?
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: S.text }}>
              World ID is a verification credential proving you're a unique human. World Chain is a blockchain optimized for World ID-verified users. Think of it this way: World ID is the proof, World Chain is the infrastructure that benefits from that proof. You can have World ID without using World Chain, but World Chain's benefits require World ID verification.
            </p>
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '20px', color: S.text }}>
            Related Learning Resources
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', color: S.text }}>
            Expand your understanding of identity, sybil resistance, and AI agents in crypto:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <Link href="/learn/onchain-identity-reputation-guide-2026">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  On-Chain Identity & Reputation Guide
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Explore how identity and reputation systems work on-chain, comparing World ID with other approaches to building trust in crypto.
                </p>
              </div>
            </Link>

            <Link href="/learn/chain-abstraction-guide-2026">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  Chain Abstraction Guide 2026
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Learn how chain abstraction enables seamless interaction across blockchains like World Chain, Base, and Arbitrum.
                </p>
              </div>
            </Link>

            <Link href="/learn/eip-7702-smart-accounts-guide-2026">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  EIP-7702 Smart Accounts Guide
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Discover how smart accounts enable humans to interact with World Chain and other protocols more intuitively.
                </p>
              </div>
            </Link>

            <Link href="/learn/ai-agent-wallets-autonomous-payments-guide-2026">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  AI Agent Wallets & Autonomous Payments Guide
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Learn how AI agents like those powered by AgentKit manage autonomous transactions and maintain human backing.
                </p>
              </div>
            </Link>

            <Link href="/learn/ai-agent-identity-nhi-guide">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  AI Agent Identity (NHI) Guide
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Understand how AI agents obtain and prove unique human identity through integration with World ID and x402 protocol.
                </p>
              </div>
            </Link>

            <Link href="/learn/sybil-resistance-guide-2026">
              <div
                style={{
                  backgroundColor: '#161b22',
                  border: `1px solid ${S.border}`,
                  borderRadius: '8px',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = S.blue;
                  e.currentTarget.style.backgroundColor = '#0d1117';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = S.border;
                  e.currentTarget.style.backgroundColor = '#161b22';
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: S.blue }}>
                  Sybil Resistance Solutions Guide
                </h3>
                <p style={{ fontSize: '14px', color: S.text2, margin: 0 }}>
                  Compare all approaches to sybil resistance, including World ID, Gitcoin Passport, BrightID, and Proof of Humanity.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Closing CTA */}
        <div
          style={{
            backgroundColor: '#161b22',
            border: `2px solid ${S.primary}`,
            borderRadius: '8px',
            padding: '32px',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: S.text }}>
            Ready to Explore World Chain?
          </h2>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px', color: S.text }}>
            Start your journey into proof of personhood and human-centric blockchain technology. Visit worldcoin.org to download the World App and begin your World ID verification.
          </p>
          <p style={{ fontSize: '14px', color: S.text2 }}>
            Remember: sybil resistance is essential for fair crypto. Whether through World ID, Gitcoin, or another solution, human verification is becoming fundamental to DeFi, governance, and identity in 2026.
          </p>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
