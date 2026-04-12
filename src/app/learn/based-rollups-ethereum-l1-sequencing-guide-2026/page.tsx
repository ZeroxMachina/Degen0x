import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Based Rollups & Ethereum L1 Sequencing Guide 2026 | Degen0x",
  description:
    "Master based rollups with L1 sequencing, preconfirmations, and synchronous composability. Learn about Taiko, Gwyneth, Surge, and the future of Ethereum scaling.",
  keywords: [
    "based rollups",
    "ethereum L1 sequencing",
    "preconfirmations",
    "Taiko",
    "Gwyneth",
    "synchronous composability",
    "layer 2",
    "rollups",
    "sequencing",
  ],
  openGraph: {
    title: "Based Rollups & Ethereum L1 Sequencing Guide 2026",
    description:
      "Master based rollups with L1 sequencing, preconfirmations, and synchronous composability.",
    url: "https://degen0x.com/learn/based-rollups-ethereum-l1-sequencing-guide-2026",
    type: "article",
    images: [
      {
        url: "https://degen0x.com/og-based-rollups-l1-sequencing.svg",
        width: 1200,
        height: 630,
        alt: "Based Rollups & Ethereum L1 Sequencing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Based Rollups & Ethereum L1 Sequencing Guide 2026",
    description:
      "Master based rollups with L1 sequencing, preconfirmations, and synchronous composability.",
    images: ["https://degen0x.com/og-based-rollups-l1-sequencing.svg"],
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/based-rollups-ethereum-l1-sequencing-guide-2026',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Article", "FAQPage"],
  headline: "Based Rollups & Ethereum L1 Sequencing Guide 2026",
  description:
    "Comprehensive guide to based rollups, L1 sequencing, preconfirmations, and synchronous composability in Ethereum scaling.",
  image: "https://degen0x.com/og-based-rollups-l1-sequencing.svg",
  datePublished: "2026-04-03",
  author: {
    "@type": "Organization",
    name: "Degen0x",
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a based rollup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A based rollup is a type of rollup that uses Ethereum L1 validators as its sequencers. Rather than relying on a centralized sequencer or a separate sequencer set, based rollups leverage the existing L1 validator network for transaction ordering and sequencing, providing stronger liveness guarantees and censorship resistance.",
        },
      },
      {
        "@type": "Question",
        name: "How are based rollups different from optimistic rollups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based rollups use L1 validators for sequencing, while optimistic rollups use separate sequencer operators. Based rollups inherit L1 liveness and offer synchronous composability, but are bounded by L1 throughput. Optimistic rollups can decouple from L1 constraints but introduce sequencer centralization risks.",
        },
      },
      {
        "@type": "Question",
        name: "What are preconfirmations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Preconfirmations are soft guarantees that a transaction will be included in the next L1 block or a near-future block. Backed by validator economic security through restaking, they provide near-instant finality (~100ms) while waiting for formal L1 confirmation.",
        },
      },
      {
        "@type": "Question",
        name: "Do based rollups sacrifice performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based rollups inherit the L1 block time (~12 seconds) and throughput constraints. However, they gain credible neutrality, censorship resistance, and synchronous composability with L1. Performance gains come from batching transactions, not from increasing per-block throughput.",
        },
      },
      {
        "@type": "Question",
        name: "Who controls sequencing in a based rollup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sequencing is controlled by Ethereum L1 validators. Anyone who stakes ETH and participates in L1 consensus can help sequence L2 transactions, eliminating the need for a centralized sequencer operator.",
        },
      },
      {
        "@type": "Question",
        name: "Can based rollups capture MEV?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MEV in based rollups flows to L1 validators and proposers, not to a separate L2 sequencer. This simplifies the MEV economics but means based rollups don't capture sequencer MEV revenue to fund operations. The MEV remains visible at the L1 level.",
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function BasedRollupsGuide() {
  const tableOfContents = [
    { id: "what-are-based-rollups", title: "What Are Based Rollups?" },
    { id: "how-based-sequencing-works", title: "How Based Sequencing Works" },
    { id: "preconfirmations-fast-finality", title: "Preconfirmations & Fast Finality" },
    { id: "synchronous-composability", title: "Synchronous Composability" },
    { id: "based-rollup-projects", title: "Based Rollup Projects" },
    { id: "based-vs-traditional-rollups", title: "Based vs Traditional Rollups" },
    { id: "mev-economics", title: "MEV & Economics" },
    { id: "risks-tradeoffs", title: "Risks and Tradeoffs" },
    { id: "faq", title: "FAQ" },
  ];

  const infoBoxStyle = {
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: "linear-gradient(135deg, #6366f1, #06b6d4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: "#e6edf3",
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const layerBadgeStyle = {
    ...badgeStyle,
    background: "#1a1a2e",
    color: "#818cf8",
  };

  const difficultyBadgeStyle = {
    ...badgeStyle,
    background: "#1a2e1a",
    color: "#4ade80",
  };

  const linkStyle = { color: "#58a6ff", textDecoration: "none" };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const tableCellStyle = {
    padding: "12px",
    textAlign: "left" as const,
    borderBottom: "1px solid #30363d",
    color: "#c9d1d9",
  };

  const tableHeaderStyle = {
    ...tableCellStyle,
    background: "#0d1117",
    fontWeight: 700,
    color: "#58a6ff",
  };

  const containerStyle = {
    maxWidth: 800,
    margin: "0 auto",
    padding: "40px 20px",
  };

  return (
    <article id="top" aria-label="Guide: Based Rollups & Ethereum L1 Sequencing" style={{ background: "#0d1117", color: "#c9d1d9", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `a.learn-link:hover { color: #6366f1 !important; text-decoration: underline !important; }` }} />

      <div style={containerStyle}>
        {/* Header and Metadata */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
            <div style={layerBadgeStyle}>Layer 2</div>
            <div style={difficultyBadgeStyle}>Intermediate</div>
          </div>

          <h1 style={h1Style}>Based Rollups & Ethereum L1 Sequencing</h1>

          <p style={{ fontSize: 16, color: "#8b949e", marginBottom: 8 }}>
            Published on April 3, 2026
          </p>

          <p style={{ fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
            Based rollups represent a fundamental shift in Ethereum scaling architecture. By
            leveraging Ethereum L1 validators as sequencers, based rollups achieve unprecedented
            credible neutrality, censorship resistance, and synchronous composability. This guide
            explores how based sequencing works, the role of preconfirmations, real-world
            implementations like Taiko and Gwyneth, and the tradeoffs that define this emerging
            rollup category.
          </p>
        </div>

        {/* Table of Contents */}
        <div style={infoBoxStyle}>
          <h3 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff", fontSize: 16 }}>
            Table of Contents
          </h3>
          <ul style={{ margin: 0, paddingLeft: 24, listStyle: "disc" }}>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1: What Are Based Rollups? */}
        <section id="what-are-based-rollups">
          <h2 style={h2Style}>What Are Based Rollups?</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            A based rollup is a rollup where Ethereum Layer 1 validators act as sequencers. Instead
            of delegating transaction ordering to a centralized sequencer operator or a separate
            sequencer network, based rollups use the existing L1 validator set to sequence L2
            transactions. This approach was formalized by Justin Drake and represents a fundamental
            departure from traditional rollup sequencing models.
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

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Key Insight:</strong> The term "based" comes from
            the idea that the rollup is "based on" the L1 consensus layer, inheriting its security
            and liveness properties directly.
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Traditional rollups (optimistic and ZK) separate sequencing from L1 consensus. A
            sequencer receives transactions, orders them, and publishes a batch to L1. This
            architecture provides flexibility but introduces new trust assumptions: What if the
            sequencer censors transactions? What if the sequencer goes offline? Based rollups
            eliminate these concerns by making sequencing a property of L1 consensus itself.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Key characteristics of based rollups include:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>L1 Validators Are Sequencers:</strong> Any L1 validator can propose L2
              transactions by including them in their block.
            </li>
            <li>
              <strong>Inherited Liveness:</strong> L2 liveness depends only on L1 liveness. No
              separate sequencer infrastructure is required.
            </li>
            <li>
              <strong>Censorship Resistance:</strong> Censoring an L2 transaction requires censoring
              the L1 itself, which is economically impractical.
            </li>
            <li>
              <strong>Credible Neutrality:</strong> No entity controls or operates the sequencer
              network. Sequencing follows L1 consensus rules.
            </li>
            <li>
              <strong>Synchronous Composability:</strong> L1 and L2 can read each other&apos;s state
              within the same block, enabling powerful composability patterns.
            </li>
          </ul>

          <p style={{ lineHeight: 1.8 }}>
            The tradeoff is that based rollups inherit L1&apos;s throughput constraints. They cannot
            exceed the L1 block gas limit or escape the 12-second block time of Ethereum. For
            applications requiring maximum throughput, this may be a limitation. For applications
            requiring credible neutrality and composability, it is a significant advantage.
          </p>
        </section>

        {/* Section 2: How Based Sequencing Works */}
        <section id="how-based-sequencing-works">
          <h2 style={h2Style}>How Based Sequencing Works</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Understanding based sequencing requires examining the complete flow from L2 user to L1
            finality. Unlike traditional rollups where a centralized sequencer batches transactions,
            based rollups integrate L2 transaction ordering directly into L1 block construction.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            The Based Sequencing Flow
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Step 1: Transaction Submission</strong>
            <br />
            Users submit L2 transactions to the L2 mempool. These transactions are broadcast to all
            L2 nodes, similar to how L1 transactions propagate through the Ethereum network.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Step 2: Block Proposal</strong>
            <br />
            When an L1 validator is chosen to propose a block, they construct both the L1 block and
            the L2 block simultaneously. They select transactions from the L2 mempool, order them
            according to protocol rules (or MEV-based rules), and include both L1 and L2 data in
            the proposed block.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Step 3: L1 Consensus</strong>
            <br />
            The L1 block containing L2 transactions is proposed and attested to by other validators.
            Once the block is finalized by L1 consensus (typically 2 epochs or ~13 minutes), the L2
            block is also finalized.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Step 4: L2 State Execution</strong>
            <br />
            L2 nodes execute the sequenced transactions in order, updating the L2 state. This
            execution is deterministic and follows the L2 virtual machine rules (e.g., EVM for an
            Ethereum-compatible based rollup).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Critical Difference:</strong> In a traditional
            rollup, the sequencer is an off-chain entity that batches L2 transactions and posts a
            commitment to L1. In a based rollup, sequencing happens at the L1 layer, making it
            cryptographically part of the L1 block structure itself.
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Sequencing Policy and MEV
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Based rollups must define how L1 validators order L2 transactions. This can be done in
            several ways:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>FIFO Ordering:</strong> L2 transactions are included in the order they arrive,
              similar to L1 mempool behavior.
            </li>
            <li>
              <strong>MEV-Aware Sequencing:</strong> Validators order transactions to optimize MEV
              extraction, subject to protocol constraints.
            </li>
            <li>
              <strong>Encrypted Sequencing:</strong> Transactions are encrypted until inclusion,
              protecting against front-running (requires advanced cryptography).
            </li>
          </ul>

          <p style={{ lineHeight: 1.8 }}>
            The choice of sequencing policy affects both user experience and MEV distribution. Unlike
            traditional rollups where a single sequencer controls MEV, based rollups distribute MEV
            across the entire L1 validator set.
          </p>
        </section>

        {/* Section 3: Preconfirmations & Fast Finality */}
        <section id="preconfirmations-fast-finality">
          <h2 style={h2Style}>Preconfirmations & Fast Finality</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            One of the most exciting developments in based rollups is the emergence of
            preconfirmations. While based rollups inherit L1 finality (~13 minutes), preconfirmations
            provide near-instant soft guarantees that a transaction will be included in an upcoming
            block.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            What Are Preconfirmations?
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            A preconfirmation is a cryptographic commitment from a validator that a specific
            transaction will be included in the validator&apos;s next block (or within a small window of
            future blocks). The validator backs this commitment with economic security—if they fail
            to include the transaction, they forfeit a portion of their staked ETH.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Timeline:</strong>
            <br />
            Preconfirmation received: ~100ms
            <br />
            Transaction included in L1 block: ~12 seconds
            <br />
            L1 block reaches soft finality: ~1-2 minutes
            <br />
            L1 block reaches full finality: ~13 minutes
          </div>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Preconfirmations are particularly powerful because they provide asymmetric security:
            users get near-instant finality for small-value transactions, while the economic cost of
            attacking is borne by validators who must slash their stake to break the commitment.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Preconfirmations and Restaking
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Modern preconfirmation designs leverage restaking protocols like EigenLayer. Validators
            can opt into providing preconfirmations by restaking their ETH with an AVS (Actively
            Validated Service). If they fail to honor a preconfirmation, the AVS slashes their
            restaked balance, creating economic incentives for honest behavior.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            The security model works as follows:
          </p>

          <ol
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "decimal",
              lineHeight: 2,
            }}
    >
            <li>
              A validator restakes 32 ETH into an EigenLayer AVS designed for preconfirmations.
            </li>
            <li>
              The validator commits to including a user&apos;s transaction in their next block
              (preconfirmation).
            </li>
            <li>
              If the validator includes the transaction, both parties are satisfied. No slashing
              occurs.
            </li>
            <li>
              If the validator fails to include the transaction, the AVS slash mechanism triggers,
              removing a portion of the validator&apos;s restaked ETH.
            </li>
          </ol>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            TEE-Based Preconfirmations
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Another approach to preconfirmations uses Trusted Execution Environments (TEEs) like
            Intel SGX. A TEE-backed preconfirmation service runs inside a secure enclave and
            cryptographically commits to transaction inclusion. Because the code runs in hardware,
            the commitment is extremely difficult to break without the validator&apos;s private key.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            TEE-based preconfirmations can provide sub-second latency and high throughput, making
            them suitable for high-frequency trading and other latency-sensitive applications. The
            security model differs from restaking: rather than economic penalties, the security comes
            from hardware attestation and cryptographic proofs.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Note:</strong> Both restaking-based and
            TEE-based preconfirmations are active areas of research. Production systems will likely
            combine both approaches, using TEEs for performance and restaking for additional economic
            security.
          </div>
        </section>

        {/* Section 4: Synchronous Composability */}
        <section id="synchronous-composability">
          <h2 style={h2Style}>Synchronous Composability</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            One of the most powerful benefits of based rollups is synchronous composability between
            L1 and L2. Because L2 transactions are sequenced at the L1 layer, L1 and L2 can read each
            other&apos;s state within the same block, enabling atomic cross-layer transactions.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            What Is Synchronous Composability?
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            In traditional rollups, L1 and L2 are decoupled. L1 can observe L2 state only through
            posted commitments, and L2 can observe L1 state only through explicit message passing.
            This creates latency and requires complex bridge protocols.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            In based rollups, because L1 and L2 share the same sequencer (the L1 validator), they
            can atomically interact within a single block:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              An L1 smart contract can call an L2 smart contract and read the result, all within a
              single transaction.
            </li>
            <li>
              An L2 transaction can be conditioned on L1 state, with the condition checked at the
              same L1 block height.
            </li>
            <li>
              Cross-layer MEV is eliminated because both layers are sequenced together.
            </li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Use Cases for Synchronous Composability
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Unified Liquidity Pools:</strong> A DEX can maintain liquidity pools across L1
            and L2 with atomic rebalancing. When prices diverge, the DEX can instantly rebalance
            without bridge delays.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Atomic Swaps:</strong> Users can swap assets between L1 and L2 atomically,
            without intermediaries or bridge fees.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Shared Collateral:</strong> Lending protocols can accept collateral on both L1
            and L2 and count it toward a unified borrow limit, with collateral status checked
            synchronously.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Conditional Execution:</strong> L2 transactions can be made conditional on L1
            oracle prices, governance votes, or state changes, checked at L1 finality.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Implication:</strong> Synchronous composability
            fundamentally changes the economics of multi-layer applications. The cost of composing
            across layers drops from potentially millions of dollars (in bridge fees and MEV costs)
            to near-zero.
          </div>
        </section>

        {/* Section 5: Based Rollup Projects */}
        <section id="based-rollup-projects">
          <h2 style={h2Style}>Based Rollup Projects</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Several projects are actively building and deploying based rollups. Here&apos;s an overview
            of the key players and their approaches.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Taiko
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Taiko is the first based rollup to reach mainnet deployment. Launched in early 2025,
            Taiko Alethia serves as the proving ground for based rollup technology. Taiko is
            designed as an Ethereum-compatible rollup that uses Ethereum L1 validators as sequencers.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Key Features:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Full EVM Compatibility:</strong> Taiko runs the EVM natively, enabling any
              Ethereum contract to deploy with minimal modifications.
            </li>
            <li>
              <strong>Native Preconfirmations:</strong> Taiko implements TEE-based preconfirmations
              for near-instant finality.
            </li>
            <li>
              <strong>Decentralized Proposers:</strong> Anyone can run a proposer to include
              transactions in L2 blocks.
            </li>
            <li>
              <strong>TVL Growth:</strong> As of April 2026, Taiko has accumulated over $200M in
              total locked value, demonstrating strong market validation.
            </li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Significance:</strong> Taiko&apos;s successful launch
            proved that based rollup technology works at scale. The project serves as a reference
            implementation for other based rollup builders.
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Gwyneth
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Gwyneth is a network of identical based rollups, all sequenced by Ethereum L1 validators.
            The innovation lies in Gwyneth&apos;s approach to cross-rollup composability: rather than
            bridging between separate rollups, Gwyneth enables synchronous composability across all
            rollups in the network.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Architecture:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Identical Rollups:</strong> Each Gwyneth rollup is functionally identical,
              simplifying routing and composability logic.
            </li>
            <li>
              <strong>TEE-Based Cross-Rollup Messaging:</strong> Rollups communicate via TEE
              attestations, providing instant finality for cross-rollup transactions.
            </li>
            <li>
              <strong>AVS Provers:</strong> EigenLayer AVS operators verify cross-rollup state
              transitions, adding economic security.
            </li>
          </ul>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Gwyneth&apos;s vision is to create a modular scaling layer where applications can spin up
            isolated execution environments while maintaining composability with the broader
            ecosystem.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Surge (Nethermind)
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Surge, developed by Nethermind, is a based rollup template built on the Taiko stack.
            Launched in April 2025, Surge provides a modular framework for teams to deploy their own
            based rollups without building infrastructure from scratch.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Features:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Taiko Stack Integration:</strong> Surge reuses Taiko&apos;s proven sequencing,
              proving, and preconfirmation infrastructure.
            </li>
            <li>
              <strong>Customizable Parameters:</strong> Teams can adjust gas limits, fee structures,
              and preconfirmation settings.
            </li>
            <li>
              <strong>Quick Deployment:</strong> Rolling out a new based rollup takes weeks instead
              of months.
            </li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Fabric Initiative
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            The Fabric initiative is a community-driven effort to standardize based rollup
            infrastructure. Rather than a single organization, Fabric is stewarded by researchers,
            developers, and organizations across the Ethereum ecosystem.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Fabric&apos;s goals include:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Open Specifications:</strong> Define standard interfaces for based rollup
              sequencing, proving, and preconfirmations.
            </li>
            <li>
              <strong>Cross-Implementation Compatibility:</strong> Ensure that rollups built by
              different teams can interoperate seamlessly.
            </li>
            <li>
              <strong>Research Contribution:</strong> Advance the state of based rollup research
              through collaborative projects.
            </li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Ecosystem Effect:</strong> The proliferation of
            based rollup implementations (Taiko, Gwyneth, Surge, Fabric) indicates strong
            ecosystem momentum. Like Ethereum itself, based rollups are becoming a coordination
            point for scaling research.
          </div>
        </section>

        {/* Section 6: Based vs Traditional Rollups */}
        <section id="based-vs-traditional-rollups">
          <h2 style={h2Style}>Based vs Traditional Rollups</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 24 }}>
            To understand the significance of based rollups, it&apos;s helpful to compare them against
            optimistic and ZK rollups. The following table summarizes the key differences:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 32 }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ background: "#0d1117" }}>
                  <th style={tableHeaderStyle}>Dimension</th>
                  <th style={tableHeaderStyle}>Based</th>
                  <th style={tableHeaderStyle}>Optimistic</th>
                  <th style={tableHeaderStyle}>ZK</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Sequencer</strong>
                  </td>
                  <td style={tableCellStyle}>L1 Validators</td>
                  <td style={tableCellStyle}>Centralized Operator</td>
                  <td style={tableCellStyle}>Centralized Operator</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Block Time</strong>
                  </td>
                  <td style={tableCellStyle}>~12 seconds (L1-bound)</td>
                  <td style={tableCellStyle}>1-10 seconds</td>
                  <td style={tableCellStyle}>1-10 seconds</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Finality</strong>
                  </td>
                  <td style={tableCellStyle}>~13 minutes (L1)</td>
                  <td style={tableCellStyle}>~7 days (fraud proofs)</td>
                  <td style={tableCellStyle}>~1 hour (proof generation)</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Preconfirmations</strong>
                  </td>
                  <td style={tableCellStyle}>Native (~100ms)</td>
                  <td style={tableCellStyle}>Not native</td>
                  <td style={tableCellStyle}>Not native</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Synchronous Composability</strong>
                  </td>
                  <td style={tableCellStyle}>Yes</td>
                  <td style={tableCellStyle}>No</td>
                  <td style={tableCellStyle}>No</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>MEV Distribution</strong>
                  </td>
                  <td style={tableCellStyle}>L1 Validators</td>
                  <td style={tableCellStyle}>Sequencer</td>
                  <td style={tableCellStyle}>Sequencer</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Liveness Dependency</strong>
                  </td>
                  <td style={tableCellStyle}>L1 Only</td>
                  <td style={tableCellStyle}>Sequencer</td>
                  <td style={tableCellStyle}>Sequencer</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Censorship Resistance</strong>
                  </td>
                  <td style={tableCellStyle}>Very High</td>
                  <td style={tableCellStyle}>Medium</td>
                  <td style={tableCellStyle}>Medium</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Throughput</strong>
                  </td>
                  <td style={tableCellStyle}>~20k tx/s</td>
                  <td style={tableCellStyle}>~4k tx/s</td>
                  <td style={tableCellStyle}>~2k tx/s</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>
                    <strong>Operational Complexity</strong>
                  </td>
                  <td style={tableCellStyle}>Low</td>
                  <td style={tableCellStyle}>High</td>
                  <td style={tableCellStyle}>Very High</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            When to Choose Based vs Other Rollups
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Choose Based Rollups If:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              Your application requires composability with L1 or other L2s (DeFi, oracles, liquidity
              pools).
            </li>
            <li>Censorship resistance and credible neutrality are critical requirements.</li>
            <li>
              You value simplicity over maximum throughput. A based rollup is simpler to operate
              than optimistic or ZK.
            </li>
            <li>You want to leverage preconfirmations for near-instant UX.</li>
          </ul>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Choose Optimistic Rollups If:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>Maximum throughput is paramount (trading, gaming).</li>
            <li>You have mature fraud-proof infrastructure (Optimism, Arbitrum).</li>
            <li>You&apos;re willing to tolerate 7-day finality.</li>
          </ul>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Choose ZK Rollups If:</strong>
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>Faster finality (~1 hour) is necessary.</li>
            <li>You want zero-knowledge proving infrastructure (Starknet, Scroll).</li>
            <li>Proof generation latency is acceptable.</li>
          </ul>
        </section>

        {/* Section 7: MEV & Economics */}
        <section id="mev-economics">
          <h2 style={h2Style}>MEV & Economics</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            MEV (Maximal Extractable Value) plays a critical role in based rollup economics. Because
            L1 validators are the sequencers, MEV flows to the validator set rather than to a
            separate sequencer entity.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            How MEV Flows in Based Rollups
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            In a traditional rollup, the sequencer is a separate entity that controls transaction
            ordering. The sequencer can extract MEV by:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>Front-running user transactions with their own orders</li>
            <li>Reordering transactions to exploit price changes</li>
            <li>Censoring transactions to influence market outcomes</li>
          </ul>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            The sequencer&apos;s MEV revenue is part of the rollup&apos;s economic model. Some rollups burn
            MEV (Optimism), some distribute it to governance (Arbitrum), and some keep it (various
            private sequencers).
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            In a based rollup, MEV extraction is pushed to the L1 layer. The L1 proposer sees all L1
            and L2 transactions in the block they propose, so they can extract MEV across both
            layers. This MEV goes to the L1 validator set, not to an L2-specific sequencer.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Economics for Based Rollup Operators
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            A key difference in based rollup economics is that the rollup itself does not capture
            sequencer MEV. Instead, the rollup operator must fund operations through:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Transaction Fees:</strong> Base layer fees paid by users for transactions.
              Unlike traditional rollups, these fees are lower because the operator doesn&apos;t capture
              MEV.
            </li>
            <li>
              <strong>Data Availability Fees:</strong> Costs for publishing batch data to L1 (Blobs,
              Calldata, etc.).
            </li>
            <li>
              <strong>Preconfirmation Fees:</strong> Users pay a small fee for preconfirmation
              services, which goes to validator-operators.
            </li>
            <li>
              <strong>Governance Revenue:</strong> Rollup tokens that capture future protocol value
              (if the rollup has a token).
            </li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Trade-off:</strong> Based rollups lose MEV revenue
            but gain simplicity and censorship resistance. The loss of MEV revenue is offset by
            reduced operational complexity and potentially higher user volume due to composability
            benefits.
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            MEV Minimization Strategies
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            To protect users from MEV exploitation, based rollups can implement:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Encrypted Mempools:</strong> Transactions are encrypted until inclusion,
              preventing front-runners from seeing orders.
            </li>
            <li>
              <strong>MEV-Share:</strong> Validators share extracted MEV with affected users,
              reducing net extraction.
            </li>
            <li>
              <strong>Fair Ordering Services:</strong> Third-party services order transactions
              fairly, independent of MEV incentives.
            </li>
          </ul>
        </section>

        {/* Section 8: Risks and Tradeoffs */}
        <section id="risks-tradeoffs">
          <h2 style={h2Style}>Risks and Tradeoffs</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            While based rollups offer compelling benefits, they come with distinct tradeoffs and
            risks that users and developers should understand.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Throughput Constraints
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Based rollups are bounded by L1 throughput. Ethereum&apos;s 12-second block time and 30M gas
            limit mean that based rollups can process roughly 20,000 transactions per second—far
            higher than L1 but lower than optimistic rollups (4k-10k) or ZK rollups (2k-5k).
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            For applications requiring maximum throughput (high-frequency trading, certain gaming
            scenarios), this may be insufficient. In such cases, a traditional rollup or sidechain
            might be more appropriate.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            L1 Finality Latency
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Based rollups inherit L1 finality latency (~13 minutes). While preconfirmations provide
            near-instant soft finality, applications requiring absolute finality must wait for L1
            confirmation.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            For most DeFi applications, preconfirmations are sufficient. But for applications where
            cryptographic finality is essential (atomic swaps, cross-chain bridges), the 13-minute
            latency may be problematic.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Preconfirmation Risks
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Preconfirmations introduce new attack vectors:
          </p>

          <ul
            style={{
              marginBottom: 24,
              paddingLeft: 24,
              listStyle: "disc",
              lineHeight: 2,
            }}
    >
            <li>
              <strong>Slashing Attacks:</strong> If an attacker controls enough validators, they
              might trigger preconfirmation failures to slash restaked capital.
            </li>
            <li>
              <strong>Validator Centralization:</strong> If a few validators provide all
              preconfirmations, they become a centralization point.
            </li>
            <li>
              <strong>Economic Incentive Failures:</strong> If preconfirmation fees are too low,
              validators may not care about slashing penalties and fail to honor commitments.
            </li>
          </ul>

          <div style={infoBoxStyle}>
            <strong style={{ color: "#58a6ff" }}>Mitigation:</strong> Robust preconfirmation
            economics require careful fee design. Fees must be high enough that slashing penalties
            exceed the fee, creating a negative-sum attack cost.
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Loss of Sequencer MEV Revenue
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            As noted earlier, based rollups don&apos;t capture sequencer MEV. This simplifies the
            architecture but removes a potential revenue source. For some rollup operators, this may
            make the business model challenging.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            However, the loss of MEV revenue is often offset by reduced operational complexity and
            higher user adoption (due to composability benefits).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            Cross-Layer MEV
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            While synchronous composability is powerful, it also exposes applications to cross-layer
            MEV. An MEV bot can now atomically manipulate prices across L1 and L2 in a single
            transaction, creating new exploitation opportunities.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Mitigation requires careful smart contract design and possibly MEV-minimization services
            (encrypted mempools, threshold encryption, etc.).
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginTop: 24, marginBottom: 12 }}>
            L1 Congestion Impact
          </h3>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            If Ethereum L1 becomes congested, based rollups inherit that congestion directly. Unlike
            traditional rollups that can batch transactions, based rollups must fit L2 transactions
            into the same block space as L1 transactions.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            This means that L1 network activity directly impacts L2 fees and throughput. In practice,
            this is mitigated by Ethereum&apos;s block space expansion (proto-danksharding, full danksharding)
            but remains a consideration.
          </p>
        </section>

        {/* Section 9: FAQ */}
        <section id="faq">
          <h2 style={h2Style}>Frequently Asked Questions</h2>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              What is a based rollup?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              A based rollup is a rollup that uses Ethereum L1 validators as sequencers. Instead of
              a centralized sequencer operator, the L1 validator set orders transactions. This
              approach provides stronger censorship resistance, credible neutrality, and synchronous
              composability with L1.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              How are based rollups different from optimistic rollups?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Optimistic rollups use a separate sequencer operator who is economically incentivized
              to behave honestly (via fraud proofs and slashing). Based rollups use L1 validators
              directly, inheriting their security and liveness guarantees. Based rollups also offer
              synchronous composability and preconfirmations, which optimistic rollups do not natively
              support.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              What are preconfirmations?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Preconfirmations are soft guarantees from validators that a transaction will be included
              in an upcoming block. Backed by economic security (slashing) or cryptographic proofs
              (TEEs), preconfirmations provide near-instant finality (~100ms) while formal L1
              finality takes ~13 minutes. Users pay a fee for preconfirmation services.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              Do based rollups sacrifice performance?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Based rollups inherit L1&apos;s 12-second block time and ~30M gas limit, resulting in ~20k
              tx/s throughput. This is lower than some optimistic rollups (4k-10k tx/s) but higher
              than ZK rollups (2k-5k tx/s). For most DeFi applications, this throughput is sufficient.
              For extreme high-frequency scenarios, other rollups may be better suited.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              Who controls sequencing in a based rollup?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Sequencing is controlled by Ethereum L1 validators. Anyone who stakes 32 ETH and
              participates in L1 consensus can act as a sequencer for the L2. This eliminates the
              need for a centralized sequencer operator and distributes sequencing authority across
              the entire validator set.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              Can based rollups capture MEV?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              MEV in based rollups flows to L1 validators and proposers, not to a separate L2
              sequencer. This simplifies the architecture and prevents the rollup operator from
              capturing sequencer MEV. However, it means based rollups don&apos;t have a dedicated MEV
              revenue stream for funding operations. Revenue comes from transaction fees and
              preconfirmation fees instead.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              What projects are building based rollups?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Key based rollup projects include Taiko (first mainnet-deployed based rollup, ~$200M
              TVL), Gwyneth (network of synchronously composable based rollups), Surge (Nethermind&apos;s
              based rollup template), and Fabric (community standardization initiative). Each takes a
              different approach to preconfirmations, composability, and decentralization.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h4 style={{ marginTop: 0, marginBottom: 12, color: "#58a6ff" }}>
              How do preconfirmations increase security?
            </h4>
            <p style={{ margin: 0, lineHeight: 1.8 }}>
              Preconfirmations leverage restaking (via EigenLayer) or TEE attestations. Validators
              who provide preconfirmations stake additional capital, which can be slashed if they
              fail to honor the commitment. The slashing penalty makes attacking preconfirmations
              economically prohibitive. TEE-based preconfirmations add hardware-level security.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section style={{ marginTop: 48, marginBottom: 48 }}>
          <h2 style={h2Style}>Conclusion</h2>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Based rollups represent a paradigm shift in Ethereum scaling. By using L1 validators as
            sequencers, they achieve a rare combination of properties: credible neutrality,
            censorship resistance, synchronous composability, and simplified architecture. While they
            inherit L1 throughput constraints and lose sequencer MEV revenue, these tradeoffs are
            increasingly acceptable as Ethereum&apos;s roadmap enables expanded block space and users
            demand composability and credible neutrality.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            Projects like Taiko, Gwyneth, Surge, and Fabric are actively proving the viability of
            based rollups at scale. As the ecosystem matures, expect to see based rollups become a
            primary scaling solution for DeFi, liquidity provision, and applications requiring
            cross-layer atomicity.
          </p>

          <p style={{ lineHeight: 1.8, marginBottom: 16 }}>
            For developers considering a scaling solution, based rollups offer a compelling choice
            for applications where composability and neutrality outweigh maximum throughput. For users,
            based rollups provide access to Ethereum-native scaling with stronger guarantees than
            traditional sequencer-based rollups.
          </p>

          <p style={{ lineHeight: 1.8 }}>
            The future of Ethereum scaling is likely to be modular and multi-layered, with based
            rollups, optimistic rollups, ZK rollups, and sidechains coexisting and specializing for
            different use cases. Understanding based rollups is essential for anyone working in the
            Ethereum ecosystem today.
          </p>
        </section>

        {/* Related Links */}
        <section style={{ marginTop: 48, marginBottom: 48 }}>
          <h2 style={h2Style}>Related Reading</h2>

          <div style={infoBoxStyle}>
            <p style={{ margin: 0, lineHeight: 2 }}>
              <Link href="/learn/ethereum-layer-2-ecosystem-guide-2026" style={linkStyle}>
                The Complete Ethereum Layer 2 Ecosystem Guide 2026
              </Link>
              <br />
              <Link href="/learn/restaking-eigenlayer-guide-2026" style={linkStyle}>
                Restaking & EigenLayer Guide
              </Link>
              <br />
              <Link href="/learn/mev-protection-fair-trading-guide-2026" style={linkStyle}>
                MEV Protection & Fair Trading Guide
              </Link>
              <br />
              <Link href="/learn/zk-rollups-guide-2026" style={linkStyle}>
                ZK-Rollups Comprehensive Guide
              </Link>
              <br />
              <Link href="/learn/data-availability-modular-blockchains-guide-2026" style={linkStyle}>
                Data Availability & Modular Blockchains
              </Link>
            </p>
          </div>
        </section>

        {/* Back to Top */}
        <div style={{ textAlign: 'center' as const, marginTop: 48, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <a
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: 'none',
            }}
    >
            Back to Top
          </a>
        </div>
      </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={14}
          section="learn"
        />

    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
  );
}