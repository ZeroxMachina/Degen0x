"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema } from "@/lib/structured-data";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Onchain Privacy Infrastructure Guide 2026", href: "/learn/onchain-privacy-infrastructure-guide-2026" },
];

export default function OnchainPrivacyInfrastructureGuidePage() {
  const S = {
    bg: "var(--color-bg, #0d1117)",
    surface: "var(--color-surface, #161b22)",
    surface2: "#1c2330",
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
    title: "Onchain Privacy Infrastructure Guide 2026: Railgun, Aztec & Privacy Pools",
    description: "Complete guide to onchain privacy protocols and pragmatic privacy in DeFi.",
    author: "degen0x",
    publishedDate: "2026-03-25",
    modifiedDate: "2026-03-25",
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Is onchain privacy the same as privacy coins like Monero?",
      answer:
        "No. Privacy coins like Monero obscure transactions at the protocol level, which is why they're often associated with illegal activity and face regulatory restrictions. Onchain privacy infrastructure like Railgun and Aztec enables privacy while maintaining regulatory compliance through 'proof of innocence' — you can prove you're not a bad actor without revealing your transaction details.",
    },
    {
      question: "Can I use Railgun on Ethereum right now?",
      answer:
        "Yes. Railgun is live on Ethereum, BSC, Polygon, and Arbitrum. You can use it today through the Railgun UI (app.railgun.org) to privately swap tokens, farm yields, or shield your wallet. There is a 0.125% relayer fee for private transactions.",
    },
    {
      question: "Is Aztec Network mainnet live?",
      answer:
        "Yes. Aztec Network launched Ignition Chain mainnet in November 2025. It's the first fully decentralized privacy L2 on Ethereum. You can deploy contracts and transfer assets now, though the ecosystem is still early and growing.",
    },
    {
      question: "Do I need to use Aztec's Noir language to deploy on Aztec?",
      answer:
        "Not necessarily. Aztec supports both Noir (for zero-knowledge circuits) and Solidity (via the Noir compatibility layer). Solidity developers can deploy with minimal changes. However, for advanced privacy features, Noir enables encrypted smart contract execution that's not possible in Solidity.",
    },
    {
      question: "Are Privacy Pools compliant with regulations?",
      answer:
        "Privacy Pools are designed to be compliant. They use association lists to exclude addresses associated with illegal activity, and they support 'proof of innocence' so users can prove they're not connected to bad actors. This balances privacy with regulatory requirements.",
    },
    {
      question: "What are the main risks of using privacy protocols?",
      answer:
        "Main risks include: smart contract vulnerabilities (always audit), relayer trust (you trust nodes to relay transactions), regulatory uncertainty (privacy is new), and operational complexity (hardware requirements for private transactions). Do thorough research before deploying significant capital.",
    },
  ]);

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData schema={articleSchema} />
      <StructuredData schema={faqSchema} />

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
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 20,
                background: `${S.green}20`,
                color: S.green,
                border: `1px solid ${S.green}40`,
              }}
            >
              🔐 Privacy & Security
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 20,
                background: `${S.blue}20`,
                color: S.blue,
                border: `1px solid ${S.blue}40`,
              }}
            >
              Intermediate
            </span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 25, 2026 · 14 min read</span>
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: 20,
              background: `linear-gradient(135deg, ${S.primary}, ${S.teal})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Onchain Privacy Infrastructure Guide 2026: Railgun, Aztec & Privacy Pools
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Privacy is becoming core infrastructure in DeFi. After years of Tornado Cash's blunt anonymity tool, we now have sophisticated "pragmatic privacy" protocols that balance secrecy with compliance. Railgun, Aztec Network, and Privacy Pools represent Ethereum's HTTPS moment — privacy built in by default, not bolted on. This guide covers all three, their technologies, and how to use them.
          </p>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#what-is-onchain-privacy", "What Is Onchain Privacy Infrastructure?"],
              ["#why-privacy-matters", "Why Privacy Matters in DeFi"],
              ["#how-privacy-works", "How Privacy Protocols Work"],
              ["#railgun-deep-dive", "Railgun Deep Dive"],
              ["#aztec-deep-dive", "Aztec Network Deep Dive"],
              ["#privacy-pools", "Privacy Pools Explained"],
              ["#protocol-comparison", "Protocol Comparison Table"],
              ["#risks-limitations", "Privacy Infrastructure Risks & Limitations"],
              ["#getting-started", "Getting Started with Privacy Protocols"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <div key={href}>
                <a
                  style={{
                    display: "block",
                    color: S.primary,
                    fontSize: 13,
                    textDecoration: "none",
                    padding: "4px 0",
                    lineHeight: 1.6,
                  }}
                >
                  → {label}
                </a>
              </div>
            ))}
          </div>
        </header>

        {/* Section 1: What Is Onchain Privacy Infrastructure */}
        <section id="what-is-onchain-privacy" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            What Is Onchain Privacy Infrastructure?
          </h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Onchain privacy infrastructure is a layer of protocols that enables users to conduct transactions on blockchains while keeping the transaction details (sender, recipient, amounts, token types) private from the public ledger. Unlike privacy coins (Monero, Zcash), which obscure transactions at the protocol level, onchain privacy infrastructure works <em>on top</em> of transparent blockchains like Ethereum.
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

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The key innovation is <strong>pragmatic privacy</strong> — balancing user confidentiality with regulatory compliance. Instead of blanket anonymity (which attracts money laundering and sanctions evasion), these protocols use zero-knowledge proofs and association lists to let users prove they're not bad actors without revealing their transaction history.
          </p>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: S.primary, marginBottom: 12 }}>
              🔐 The Core Innovation
            </h3>
            <p style={{ fontSize: 14, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              Zero-knowledge proofs allow you to prove you own funds and can spend them without revealing which wallet actually owns them. Simultaneously, you can prove you're not associated with stolen funds or sanctioned addresses using "proof of innocence." Privacy + compliance in one elegant protocol.
            </p>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            This shift is critical. Privacy coins face regulatory hostility because exchanges can't list them, and law enforcement can't track illicit use. Onchain privacy protocols navigate this by design. The first exchange to offer Railgun shielding received zero government pushback because users could prove compliance if needed.
          </p>
        </section>

        {/* Section 2: Why Privacy Matters */}
        <section id="why-privacy-matters" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Why Privacy Matters in DeFi
          </h2>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Surveillance Risk</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Your Ethereum wallet is a permanent public ledger. Anyone can see every transaction you've ever made, how much you hold, and where you send funds. This enables address harvesting, targeted hacking, and privacy invasion. If you're a trader or yield farmer, competitors can track your strategies in real time. If you're a high-net-worth individual, you're broadcasting your wealth to thieves.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>MEV (Maximal Extractable Value)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            When you broadcast a swap or loan transaction to the mempool, block builders and validators can see it. They can frontrun you (execute the trade before you, moving the price), sandwich you (frontrun + backrun), or simply extract value from your transaction. Privacy protocols hide your intent until the transaction is finalized, eliminating MEV attacks on that transaction.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Regulatory Compliance</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            DeFi protocols face increasing regulatory scrutiny. Privacy Pools and Railgun's "proof of innocence" allow protocols to offer privacy while maintaining compliance. Instead of banning privacy, regulators accept it if users can prove they're not sanctioned or linked to crime. This enables sustainable, legal privacy in DeFi.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Competitive Advantage</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Traders using Railgun can execute strategies without competitors front-running them. Yield farmers can optimize returns without broadcasting their moves. Searchers can test strategies in private before deploying them. Privacy = competitive advantage.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            {[
              { title: "Surveillance Risk", stat: "100%", desc: "of Ethereum TXs are public" },
              { title: "MEV Losses", stat: "$15B+", desc: "annually in DeFi attacks" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 12, color: S.text2, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 20, fontWeight: 900, color: S.primary, marginBottom: 4 }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: 12, color: S.text2 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: How Privacy Protocols Work */}
        <section id="how-privacy-works" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            How Privacy Protocols Work
          </h2>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Zero-Knowledge Proofs (ZK-SNARKs)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A zero-knowledge proof allows you to prove something is true without revealing the underlying information. Railgun and Aztec both use ZK-SNARKs (Succinct Non-Interactive Argument of Knowledge) to prove:
          </p>

          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>You own funds (without revealing which wallet owns them)</li>
            <li style={{ marginBottom: 8 }}>You haven't double-spent</li>
            <li style={{ marginBottom: 8 }}>The transaction is valid (correct amounts, recipient, etc.)</li>
            <li style={{ marginBottom: 8 }}>You're not a sanctioned or blacklisted address ("proof of innocence")</li>
          </ul>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The proof itself is cryptographically binding but reveals zero information about the actual transaction. A verifier can check the proof in milliseconds without learning anything about the sender, recipient, or amounts.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Shielded Pools & Relayers</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Private transactions are executed by <strong>relayers</strong> — third-party services that submit your ZK proof to the blockchain on your behalf. You send the proof to the relayer via private channels (never the mempool), the relayer executes the transaction, and the blockchain verifies the proof. Crucially, the relayer never sees your actual transaction details, only the cryptographic proof.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Association Lists & Compliance</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy Pools introduce <strong>association lists</strong> — publicly maintained lists of addresses known to be associated with specific entities or activities (stolen funds, sanctions, etc.). When you create a private transaction, you optionally provide an "exclusion proof" proving your input addresses are NOT on the association list. This enables privacy while filtering out bad actors.
          </p>
        </section>

        {/* Section 4: Railgun Deep Dive */}
        <section id="railgun-deep-dive" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Railgun Deep Dive
          </h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Railgun</strong> is a private wallet layer for Ethereum and L2s. It lets you shield tokens into a private pool, swap/farm privately, and then unshield them when ready. It's the most mature privacy protocol, with $4.49B in cumulative transaction volume and endorsement from Vitalik Buterin.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How Railgun Works</h3>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <strong>Deposit:</strong> Send your tokens to Railgun's smart contract. Your balance is shielded into a private balance.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Privacy Transaction:</strong> Use your shielded balance to swap, provide liquidity, farm yields, or transfer. Each transaction is a ZK proof that the transaction is valid without revealing sender, recipient, or amounts.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Relayer Submission:</strong> A relayer submits your ZK proof to the blockchain. The contract verifies the proof in-chain and updates balances.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Withdraw:</strong> Unshield your remaining balance back to your wallet. The unshielding transaction is visible on-chain, but the history of transactions inside Railgun is permanently private.
              </li>
            </ol>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Key Features</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              {
                title: "Proof of Innocence",
                body: "Railgun uses ZK-SNARKs to prove you're not associated with stolen funds or sanctions. Regulators can accept this as a compliance mechanism.",
              },
              {
                title: "$4.49B Cumulative Volume",
                body: "Railgun has processed over $4.49 billion in private transactions since launch. It's the most battle-tested privacy protocol in DeFi.",
              },
              {
                title: "Multi-Chain Support",
                body: "Available on Ethereum, Binance Smart Chain, Polygon, and Arbitrum. Use the same Railgun account across all chains.",
              },
              {
                title: "0.125% Relayer Fee",
                body: "Relayers charge approximately 0.125% to submit your private transactions. This is included in your swap/transaction cost.",
              },
              {
                title: "Vitalik Buterin Endorsed",
                body: "Vitalik publicly endorsed Railgun as a pragmatic approach to privacy. This adds credibility and regulatory comfort.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  display: "flex",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 20, flexShrink: 0 }}>→</span>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Use Cases</h3>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>
              <strong>Private Swaps:</strong> Swap tokens without competitors frontrunning you or seeing your strategy.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Privacy Yield Farming:</strong> Provide liquidity and farm rewards without broadcasting your positions.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Wealth Privacy:</strong> Hold assets in shielded balance without public surveillance.
            </li>
            <li style={{ marginBottom: 8 }}>
              <strong>Compliance-Friendly Trading:</strong> Prove you're not a bad actor when required, while maintaining privacy day-to-day.
            </li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Getting Started with Railgun</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 10 }}>
              Visit{" "}
              <Link href="https://app.railgun.org" style={{ color: S.primary, textDecoration: "underline" }}>
                app.railgun.org
              </Link>{" "}
              and connect your wallet.
            </li>
            <li style={{ marginBottom: 10 }}>
              Choose your network (Ethereum, BSC, Polygon, or Arbitrum).
            </li>
            <li style={{ marginBottom: 10 }}>
              Approve your token and deposit into Railgun's smart contract to shield your balance.
            </li>
            <li style={{ marginBottom: 10 }}>
              Use your shielded balance to swap, provide liquidity, or farm. Each transaction generates and submits a ZK proof.
            </li>
            <li style={{ marginBottom: 10 }}>
              Withdraw (unshield) your funds back to your wallet when ready.
            </li>
          </ol>
        </section>

        {/* Section 5: Aztec Network Deep Dive */}
        <section id="aztec-deep-dive" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Aztec Network Deep Dive
          </h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Aztec Network</strong> is the first fully decentralized privacy L2 (Layer 2) built on Ethereum. Unlike Railgun, which is a private wallet layer on top of transparent networks, Aztec is an entire blockchain where privacy is native — all transactions are encrypted by default. Aztec launched Ignition Chain mainnet in November 2025.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Key Innovations</h3>

          <div style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}30`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: S.primary, marginBottom: 12 }}>
              🔐 Dual-State Model (Public + Private)
            </h4>
            <p style={{ fontSize: 14, color: S.text2, marginBottom: 10, lineHeight: 1.7 }}>
              Aztec supports both public and private transactions. Users can choose whether a transaction is encrypted (private) or public on a per-transaction basis. This flexibility is crucial for DeFi where some operations need public visibility (price feeds, oracle calls) while others need privacy.
            </p>
          </div>

          <div style={{ background: `${S.teal}10`, border: `1px solid ${S.teal}30`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: S.teal, marginBottom: 12 }}>
              🔒 Noir Language for Encrypted Smart Contracts
            </h4>
            <p style={{ fontSize: 14, color: S.text2, marginBottom: 10, lineHeight: 1.7 }}>
              Aztec's Noir programming language enables developers to write smart contracts that execute with encrypted state. Unlike Solidity, where all state is public, Noir contracts can operate on encrypted data without revealing it. This is a fundamental shift — you can build DeFi primitives that are private by default.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How Aztec Works</h3>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <strong>User submits transaction:</strong> A user creates a private or public transaction and sends it to an Aztec sequencer (not the mempool).
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Sequencer orders:</strong> The sequencer orders transactions and creates a block.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>ZK proof generation:</strong> Aztec generates a ZK proof that all transactions in the block are valid (including private transactions with encrypted data).
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Proof verification on Ethereum:</strong> The ZK proof is submitted to Ethereum L1 as a rollup. Ethereum verifies the proof in a single on-chain transaction.
              </li>
              <li style={{ marginBottom: 10 }}>
                <strong>Settlement:</strong> Once verified, the L2 block is final and settled on Ethereum.
              </li>
            </ol>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Ignition Chain Mainnet (Nov 2025)</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Aztec Network's Ignition Chain mainnet is now live. Users can:
          </p>

          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>
              Deploy contracts on Aztec using Noir or Solidity (via compatibility layer)
            </li>
            <li style={{ marginBottom: 8 }}>
              Transfer assets across Aztec privately
            </li>
            <li style={{ marginBottom: 8 }}>
              Stake testnet tokens to become a prover and earn rewards
            </li>
            <li style={{ marginBottom: 8 }}>
              Use Aztec's bridge to send funds from Ethereum to Aztec and vice versa
            </li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Fully Homomorphic Encryption (FHE) Integration</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Aztec is integrating Fully Homomorphic Encryption (FHE), which allows computation on encrypted data without decrypting it. This would enable smart contracts to execute logic on private inputs without ever exposing the data. FHE is computationally expensive today but improving rapidly. By 2026-2027, Aztec could support native FHE operations.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Advantages Over Railgun</h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            {[
              {
                feature: "Full L2 Privacy",
                desc: "All transactions are encrypted by default. Railgun only shields individual transactions.",
              },
              {
                feature: "Native Smart Contracts",
                desc: "Deploy contracts that are private-first. Solidity on Ethereum is public-first.",
              },
              {
                feature: "Encrypted Smart Contract State",
                desc: "Using Noir, contract state can remain encrypted. Enables new DeFi primitives.",
              },
              {
                feature: "No Relayers Needed",
                desc: "Sequencers are decentralized. No trust in relayers like Railgun.",
              },
            ].map((item) => (
              <div
                key={item.feature}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 8, color: S.primary }}>
                  {item.feature}
                </div>
                <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Current State & Roadmap</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Now (Q1 2026):</strong> Ignition Chain is live. Core functionality (transfers, contract deployment) is available. Fee levels are higher than Ethereum due to proof generation overhead.
          </p>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>2026 Roadmap:</strong> Aztec is scaling proof generation, adding FHE integration, expanding the Noir developer toolkit, and building DeFi composability layers. By late 2026, expect lower fees and more sophisticated private DeFi primitives.
          </p>
        </section>

        {/* Section 6: Privacy Pools Explained */}
        <section id="privacy-pools" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Privacy Pools Explained
          </h2>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Privacy Pools</strong> is a framework developed by Vitalik Buterin and others that enables privacy while maintaining compliance. Unlike Railgun and Aztec, which aim for blanket privacy, Privacy Pools gives users the option to prove their transaction is compliant (e.g., not tied to stolen funds).
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>The Core Innovation: Association Lists</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy Pools introduces <strong>association lists</strong> — publicly maintained lists of addresses known to be associated with specific activities or entities. Examples might include:
          </p>

          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>Addresses linked to the 2022 Ronin hack (known stolen funds)</li>
            <li style={{ marginBottom: 8 }}>Addresses on the OFAC sanctions list</li>
            <li style={{ marginBottom: 8 }}>Addresses associated with known money laundering rings</li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Proof of Innocence</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            When you create a private transaction in a Privacy Pool, you optionally prove that none of your input addresses are on the association list. This is done via ZK proof — you prove you're NOT on the bad list without revealing which good list you're on.
          </p>

          <div style={{ background: `${S.green}10`, border: `1px solid ${S.green}30`, borderRadius: 10, padding: 20, marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 800, color: S.green, marginBottom: 12 }}>
              ✓ Compliance-Friendly Privacy
            </h4>
            <p style={{ fontSize: 14, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              Privacy Pools allow exchanges and regulated entities to accept private transactions because the sender can prove they're not a sanctions risk. This makes Privacy Pools the most "regulation-friendly" privacy solution.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How Privacy Pools Work</h3>

          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Deposit into pool:</strong> You deposit tokens into a Privacy Pool smart contract.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Create transaction:</strong> You create a private transaction and optionally include an exclusion proof proving none of your inputs are on an association list.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>ZK proof generation:</strong> You generate a ZK proof that the transaction is valid and (if included) that you're not on the bad list.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Submit and verify:</strong> The proof is submitted to the smart contract. The contract verifies the proof and executes the transaction.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Withdraw:</strong> You can withdraw your remaining balance. The public sees deposits and withdrawals, but the private transactions inside the pool are hidden.
            </li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Comparison to Tornado Cash</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Tornado Cash was a blunt tool — it provided privacy but no way to prove you're not using it for illicit purposes. This made it attractive to money launderers and led to its shutdown by the U.S. government in 2022.
          </p>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy Pools flip this: you CAN optionally prove you're not on an association list. This enables legitimate users to use privacy without enabling crime. This is the "pragmatic privacy" philosophy — privacy for everyone, but with a pressure valve for compliance.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Status in 2026</h3>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy Pools is still in development. Multiple teams are building implementations (including Balancer and others). By 2026, expect to see Privacy Pools deployed on Ethereum and major L2s, with integration into DeFi primitives. It will likely become the default privacy mechanism for regulated DeFi platforms.
          </p>
        </section>

        {/* Section 7: Protocol Comparison Table */}
        <section id="protocol-comparison" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Protocol Comparison Table
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: 20,
                fontSize: 13,
              }}
            >
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 800, color: S.text }}>
                    Feature
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 800, color: S.text }}>
                    Railgun
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 800, color: S.text }}>
                    Aztec Network
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 800, color: S.text }}>
                    Privacy Pools
                  </th>
                  <th style={{ textAlign: "left", padding: "12px", fontWeight: 800, color: S.text }}>
                    Tornado Cash
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Type",
                    railgun: "Wallet Layer",
                    aztec: "L2 Blockchain",
                    pools: "Protocol",
                    tornado: "Mixing",
                  },
                  {
                    feature: "Status",
                    railgun: "Live (Multi-chain)",
                    aztec: "Live (Nov 2025)",
                    pools: "In Development",
                    tornado: "Shut Down (2022)",
                  },
                  {
                    feature: "Privacy Type",
                    railgun: "Opt-in (transaction level)",
                    aztec: "Default (L2 level)",
                    pools: "Opt-in + Compliance",
                    tornado: "Blanket Anonymity",
                  },
                  {
                    feature: "Compliance",
                    railgun: "Proof of Innocence",
                    aztec: "Private-first",
                    pools: "Association Lists",
                    tornado: "None",
                  },
                  {
                    feature: "Cumulative Volume",
                    railgun: "$4.49B",
                    aztec: "Low (Early)",
                    pools: "N/A",
                    tornado: "$7.5B+ (Shutdown)",
                  },
                  {
                    feature: "Regulatory Status",
                    railgun: "Accepted (Proof of Innocence)",
                    aztec: "Neutral (No enforcement yet)",
                    pools: "Expected Acceptance",
                    tornado: "Banned (OFAC Sanctioned)",
                  },
                  {
                    feature: "Fee Model",
                    railgun: "0.125% Relayer Fee",
                    aztec: "Gas + Proof Overhead",
                    pools: "TBD",
                    tornado: "Fixed + Gas",
                  },
                  {
                    feature: "UX",
                    railgun: "Simple (Wallet UI)",
                    aztec: "Complex (New L2)",
                    pools: "Complex (Exclusion Proofs)",
                    tornado: "Simple (Mixing)",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ borderBottom: `1px solid ${S.border}` }}
                  >
                    <td style={{ padding: "12px", fontWeight: 700, color: S.text }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "12px", color: S.text2 }}>{row.railgun}</td>
                    <td style={{ padding: "12px", color: S.text2 }}>{row.aztec}</td>
                    <td style={{ padding: "12px", color: S.text2 }}>{row.pools}</td>
                    <td style={{ padding: "12px", color: S.text2 }}>{row.tornado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: `${S.yellow}15`, border: `1px solid ${S.yellow}40`, borderRadius: 10, padding: 16 }}>
            <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.7 }}>
              <strong>Key Takeaway:</strong> Railgun is the most mature and proven. Aztec offers the most ambitious vision (full L2 privacy). Privacy Pools offers the most regulation-friendly approach. Use Railgun today for production privacy; explore Aztec if you're interested in encrypted smart contracts; watch Privacy Pools for future compliance-friendly privacy.
            </p>
          </div>
        </section>

        {/* Section 8: Risks & Limitations */}
        <section id="risks-limitations" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Privacy Infrastructure Risks & Limitations
          </h2>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Smart Contract Risk</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy protocols are complex and have large attack surfaces. Railgun has been audited multiple times, but like any smart contract, vulnerabilities are possible. Always assume there's a 0.1-1% risk of a critical bug. Never deploy all your capital on a new privacy protocol.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Relayer Risk (Railgun)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Railgun transactions are submitted by relayers. While relayers don't see your transaction details, they do coordinate the execution. A relayer could theoretically censor your transaction or charge excessive fees. Railgun mitigates this by supporting multiple relayers, but relayer-level attacks are theoretically possible.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Regulatory Uncertainty</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy in crypto is new, and regulation is evolving. "Pragmatic privacy" (Railgun, Privacy Pools) is designed to be compliant, but regulators could still move against these protocols. Privacy Pools is explicitly designed for this transition. Monitor regulatory developments in your jurisdiction before deploying significant capital.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Operational Complexity</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy protocols are harder to use than transparent DeFi. You need to manage shielded balances, generate ZK proofs, and coordinate with relayers. UX is improving, but mistakes are possible. Always test with small amounts first.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Liquidity & Fee Risk</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Privacy pools have less liquidity than transparent pools. You may face slippage when swapping private assets. Relayer fees (0.125% for Railgun) also add up. On a 10,000 USDC swap with relayer fee, you lose $12.50 to privacy.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Proof Generation Overhead (Aztec)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Aztec transactions require ZK proof generation, which is computationally expensive. Aztec fees are higher than Ethereum currently. As proof technology improves, this will decrease, but expect 5-10x gas overhead in 2026.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
            {[
              {
                risk: "Smart Contract Bugs",
                severity: "High",
                desc: "Always audit extensively. Railgun has been audited, but Aztec and Privacy Pools are newer.",
              },
              {
                risk: "Regulatory Shutdown",
                severity: "Medium",
                desc: "Unlikely if protocols maintain compliance. Monitor regulatory developments.",
              },
              {
                risk: "Relayer Censorship",
                severity: "Low",
                desc: "Distributed relayer networks reduce censorship risk.",
              },
              {
                risk: "UX Mistakes",
                severity: "Medium",
                desc: "Always test with small amounts. Double-check addresses and proofs.",
              },
            ].map((item) => (
              <div
                key={item.risk}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  display: "flex",
                  gap: 14,
                }}
              >
                <div style={{ flexShrink: 0, fontWeight: 800 }}>
                  {item.severity === "High" && <span style={{ color: S.red }}>🔴</span>}
                  {item.severity === "Medium" && <span style={{ color: S.yellow }}>🟡</span>}
                  {item.severity === "Low" && <span style={{ color: S.green }}>🟢</span>}
                </div>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>
                    {item.risk} ({item.severity})
                  </h4>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Getting Started */}
        <section id="getting-started" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>
            Getting Started with Privacy Protocols
          </h2>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 1: Start with Railgun (Safest)</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 10 }}>
              Go to{" "}
              <Link href="https://app.railgun.org" style={{ color: S.primary, textDecoration: "underline" }}>
                app.railgun.org
              </Link>
              . Connect your wallet (MetaMask, WalletConnect, etc.).
            </li>
            <li style={{ marginBottom: 10 }}>
              Choose your network (start with Ethereum for highest security).
            </li>
            <li style={{ marginBottom: 10 }}>
              Approve a small amount of a stable coin (e.g., $100 USDC or $100 USDT).
            </li>
            <li style={{ marginBottom: 10 }}>
              Deposit the stablecoin into Railgun to shield it.
            </li>
            <li style={{ marginBottom: 10 }}>
              Make a private swap or farm operation with your shielded balance. Monitor gas costs and relayer fees.
            </li>
            <li style={{ marginBottom: 10 }}>
              Withdraw (unshield) a small amount back to your main wallet to test the full flow.
            </li>
            <li style={{ marginBottom: 10 }}>
              Once comfortable, increase amounts gradually.
            </li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 2: Explore Aztec (Advanced)</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 10 }}>
              Visit the{" "}
              <Link href="https://aztec.network" style={{ color: S.primary, textDecoration: "underline" }}>
                Aztec website
              </Link>{" "}
              and read the documentation.
            </li>
            <li style={{ marginBottom: 10 }}>
              Set up an Aztec account and bridge a small amount of testnet ETH from Ethereum.
            </li>
            <li style={{ marginBottom: 10 }}>
              Make private transfers on Aztec to familiarize yourself with the L2 UX.
            </li>
            <li style={{ marginBottom: 10 }}>
              If you're a developer, explore deploying a contract in Noir or Solidity.
            </li>
            <li style={{ marginBottom: 10 }}>
              Monitor Aztec's roadmap for DeFi integrations. Early 2026 may see first major DeFi protocols launching.
            </li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 3: Watch Privacy Pools (Future)</h3>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li style={{ marginBottom: 8 }}>
              Follow Privacy Pools research and implementations (Balancer and others).
            </li>
            <li style={{ marginBottom: 8 }}>
              When mainnet deployments launch, test with small amounts.
            </li>
            <li style={{ marginBottom: 8 }}>
              Privacy Pools will be the most compliant privacy option. Exchanges may prioritize integrating it.
            </li>
          </ul>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Best Practices</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              {
                title: "Start Small",
                body: "Test with $100 before deploying significant capital. Understand the UX and fee structures first.",
              },
              {
                title: "Verify Addresses Carefully",
                body: "Private transactions make it harder to verify endpoints. Always double-check contract addresses and recipient addresses before approving.",
              },
              {
                title: "Understand Gas Costs",
                body: "Privacy transactions cost more gas (generating proofs, relayer overhead). Budget 2-3x normal gas costs.",
              },
              {
                title: "Keep Keys Safe",
                body: "Even with privacy protocols, your private keys are still the ultimate security boundary. Use hardware wallets.",
              },
              {
                title: "Monitor Regulatory News",
                body: "Privacy regulation is evolving. Monitor regulatory announcements in your jurisdiction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  display: "flex",
                  gap: 14,
                }}
              >
                <span style={{ fontSize: 18, flexShrink: 0 }}>✓</span>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 800, marginBottom: 4 }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: FAQ */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24, paddingTop: 8 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                q: "Is onchain privacy the same as privacy coins like Monero?",
                a: "No. Privacy coins like Monero obscure transactions at the protocol level, which is why they're often associated with illegal activity and face regulatory restrictions. Onchain privacy infrastructure like Railgun and Aztec enables privacy while maintaining regulatory compliance through 'proof of innocence' — you can prove you're not a bad actor without revealing your transaction details.",
              },
              {
                q: "Can I use Railgun on Ethereum right now?",
                a: "Yes. Railgun is live on Ethereum, BSC, Polygon, and Arbitrum. You can use it today through the Railgun UI (app.railgun.org) to privately swap tokens, farm yields, or shield your wallet. There is a 0.125% relayer fee for private transactions.",
              },
              {
                q: "Is Aztec Network mainnet live?",
                a: "Yes. Aztec Network launched Ignition Chain mainnet in November 2025. It's the first fully decentralized privacy L2 on Ethereum. You can deploy contracts and transfer assets now, though the ecosystem is still early and growing.",
              },
              {
                q: "Do I need to use Aztec's Noir language to deploy on Aztec?",
                a: "Not necessarily. Aztec supports both Noir (for zero-knowledge circuits) and Solidity (via the Noir compatibility layer). Solidity developers can deploy with minimal changes. However, for advanced privacy features, Noir enables encrypted smart contract execution that's not possible in Solidity.",
              },
              {
                q: "Are Privacy Pools compliant with regulations?",
                a: "Privacy Pools are designed to be compliant. They use association lists to exclude addresses associated with illegal activity, and they support 'proof of innocence' so users can prove they're not connected to bad actors. This balances privacy with regulatory requirements.",
              },
              {
                q: "What are the main risks of using privacy protocols?",
                a: "Main risks include: smart contract vulnerabilities (always audit), relayer trust (you trust nodes to relay transactions), regulatory uncertainty (privacy is new), and operational complexity (hardware requirements for private transactions). Do thorough research before deploying significant capital.",
              },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: `1px solid ${S.border}`, paddingBottom: 20 }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    marginBottom: 12,
                    color: S.primary,
                  }}
                >
                  Q: {faq.q}
                </h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, margin: 0 }}>
                  <strong style={{ color: S.text }}>A:</strong> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 24, paddingTop: 8 }}>
            Related Articles
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              {
                title: "Zero-Knowledge Proofs",
                href: "/learn/zero-knowledge-proofs",
                desc: "Understand the cryptographic foundation of privacy protocols.",
              },
              {
                title: "MEV Protection Guide",
                href: "/learn/mev-protection-guide",
                desc: "Learn how privacy stops frontrunning and sandwich attacks.",
              },
              {
                title: "DeFi Safety Guide 2026",
                href: "/learn/defi-safety-guide-2026",
                desc: "Comprehensive security practices for DeFi trading.",
              },
              {
                title: "Smart Contract Security Guide",
                href: "/learn/smart-contract-security-guide",
                desc: "Audit practices and vulnerability detection.",
              },
              {
                title: "FHE Crypto Guide 2026",
                href: "/learn/fhe-crypto-guide-2026",
                desc: "Fully Homomorphic Encryption and encrypted computation.",
              },
              {
                title: "Crypto Security Masterclass",
                href: "/learn/crypto-security-masterclass-2026",
                desc: "Wallet security, seed phrases, and key management.",
              },
            ].map((article) => (
              <Link href={href}
                key={article.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: 10,
                    padding: 16,
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = S.primary;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = S.border;
                  }}
                >
                  <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 8, color: S.primary }}>
                    {article.title}
                  </h3>
                  <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>
                    {article.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div style={{ background: `${S.primary}15`, border: `1px solid ${S.primary}30`, borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>
            Ready to Protect Your Privacy?
          </h3>
          <p style={{ fontSize: 14, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Start with Railgun on Ethereum. Test with small amounts. Understand the mechanics. Then explore Aztec for the future of encrypted DeFi. Privacy is now core infrastructure, not an option.
          </p>
          <Link href="https://app.railgun.org" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: S.primary,
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: 8,
                fontWeight: 800,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              Launch Railgun →
            </button>
          </Link>
        </div>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/bitcoin-rainbow-chart" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Bitcoin Rainbow Chart</a></li>
            <li><a href="/tools/crypto-heatmap-live" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Heatmap Live</a></li>
            <li><a href="/tools/defi-portfolio-dashboard" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Portfolio Dashboard</a></li>
            <li><a href="/tools/impermanent-loss-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Impermanent Loss Calculator</a></li>
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
              "headline": "Onchain Privacy Infrastructure Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/onchain-privacy-infrastructure-guide-2026"
            })
          }}
        />
      </article>
    </main>
  );
}
