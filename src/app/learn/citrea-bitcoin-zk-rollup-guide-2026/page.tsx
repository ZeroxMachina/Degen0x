import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Citrea Guide 2026: Bitcoin's First ZK Rollup Explained | degen0x",
  description:
    "What is Citrea? Learn how Bitcoin's first ZK rollup works — cBTC, ctUSD, BitVM bridge, and 30+ dApps. ~$96M TVL. Complete 2026 guide with risks.",
  keywords: [
    "Citrea",
    "Bitcoin ZK rollup",
    "cBTC",
    "ctUSD",
    "Bitcoin Layer 2",
    "Citrea Bitcoin",
    "zkEVM",
    "Streaming zkEVM",
    "BitVM",
    "Clementine bridge",
    "Bitcoin DeFi 2026",
  ],
  openGraph: {
    title: "Citrea Guide 2026: Bitcoin's First ZK Rollup with 30+ dApps",
    description:
      "Bitcoin's first ZK rollup launched mainnet January 27, 2026. Learn how Citrea works, cBTC pegging, ctUSD stablecoin, and the $96M+ ecosystem.",
    url: `${SITE_URL}/learn/citrea-bitcoin-zk-rollup-guide-2026`,
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    modifiedTime: "2026-03-28T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-citrea-guide.svg`,
        width: 1200,
        height: 630,
        alt: "Citrea Guide 2026 — Bitcoin's First ZK Rollup with cBTC, ctUSD, 30+ dApps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Citrea 2026: Bitcoin's First ZK Rollup Explained",
    description:
      "Citrea mainnet is live with $96M TVL and 30+ dApps. Here's how Bitcoin's first ZK rollup actually works.",
  },
  alternates: {
    canonical: `${SITE_URL}/learn/citrea-bitcoin-zk-rollup-guide-2026`,
  },
};

export default function CitreaGuidePage() {
  const articleSchema = generateArticleSchema({
    title: "Citrea Guide 2026: Bitcoin's First ZK Rollup Explained",
    description:
      "What is Citrea? Learn how Bitcoin's first ZK rollup works — cBTC, ctUSD, BitVM bridge, and the 30+ dApps ecosystem. Complete 2026 guide.",
    url: `${SITE_URL}/learn/citrea-bitcoin-zk-rollup-guide-2026`,
    datePublished: "2026-03-28T00:00:00Z",
    dateModified: "2026-03-28T00:00:00Z",
    author: "degen0x Team",
    image: `${SITE_URL}/og-citrea-guide.svg`,
    wordCount: 2800,
  });

  const faqSchema = generateFAQSchema([
    {
      question: "What is Citrea?",
      answer:
        "Citrea is Bitcoin's first production-grade ZK rollup, launched on mainnet January 27, 2026. It uses Streaming zkEVM technology to batch thousands of transactions off-chain, generate zero-knowledge proofs, and inscribe them on the Bitcoin blockchain for verification. Citrea enables DeFi applications (lending, trading, settlement) that are secured by Bitcoin itself.",
    },
    {
      question: "How does Citrea achieve validity proofs on Bitcoin?",
      answer:
        "Citrea batches transactions, processes them in a zkVM, and generates ZK validity proofs. These proofs are inscribed and natively verified within the Bitcoin blockchain—a historic first. The Citrea bridge uses BitVM-based verification (called 'Clementine') with a 1-of-N honest assumption, meaning only one honest participant is needed to catch invalid transitions. Bitcoin is used for both settlement and data availability.",
    },
    {
      question: "What is cBTC and how is it different from other wrapped Bitcoin?",
      answer:
        "cBTC (Citrea Bitcoin) is the first trust-minimized Bitcoin on a fully programmable platform. It's pegged 1:1 to BTC via SPV proofs and uses ZK proofs plus BitVM-based verification to minimize custodian reliance. Unlike WBTC (which relies on BitGo custody) or cbBTC (Coinbase), cBTC uses cryptographic verification and BitVM to reduce trust requirements.",
    },
    {
      question: "What is ctUSD?",
      answer:
        "ctUSD is Citrea's native stablecoin, fully backed by short-term U.S. Treasury bills and cash. It's designed to align with regulatory stablecoin frameworks like the GENIUS Act. ctUSD provides a native, Bitcoin-secured dollar denomination for the Citrea ecosystem without relying on external stablecoin protocols.",
    },
    {
      question: "How many dApps launched with Citrea?",
      answer:
        "Citrea mainnet launched with 30+ Bitcoin-secured applications across lending, trading, and settlement. All applications inherit Bitcoin's security through Citrea's ZK rollup mechanism.",
    },
    {
      question: "Is Citrea safe?",
      answer:
        "Citrea has been audited and is one of the more security-conservative Bitcoin L2s given its reliance on time-tested cryptography (ZK proofs) and Bitcoin L1 as settlement. That said, it's a novel protocol combining Streaming zkEVM, BitVM, and Bitcoin inscription verification. Always start small and check for the latest audit reports before deploying significant capital.",
    },
  ]);

  const combinedSchemas = combineSchemas([articleSchema, faqSchema]);

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <StructuredData data={combinedSchemas} />

      {/* Breadcrumb */}
      <nav className="text-sm mb-8" aria-label="Breadcrumb">
        <Link href="/learn" className="text-[#58a6ff] hover:underline">
          Learn
        </Link>
        <span className="mx-2" aria-hidden="true" style={{ color: "var(--color-text-secondary)" }}>/</span>
        <span style={{ color: "var(--color-text)" }}>Citrea: Bitcoin ZK Rollup Guide 2026</span>
      </nav>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className="text-xs px-3 py-1 rounded-full font-bold"
          style={{ background: "#f5970b20", color: "#f97316" }}
        >
          Bitcoin
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full font-bold"
          style={{ background: "#3b82f620", color: "#3b82f6" }}
        >
          Intermediate
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full font-bold"
          style={{ background: "#22c55e20", color: "#22c55e" }}
        >
          Updated March 2026
        </span>
      </div>

      {/* Title */}
      <h1
        className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#f97316] to-[#facc15] bg-clip-text text-transparent"
        style={{ lineHeight: "1.2" }}
      >
        Citrea: Bitcoin's First ZK Rollup
      </h1>

      {/* Subtitle */}
      <p
        className="text-lg mb-2"
        style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}
      >
        Bitcoin's <strong style={{ color: "var(--color-text)" }}>first ZK rollup went live</strong> on
        January 27, 2026. Citrea combines zero-knowledge proofs, BitVM, and Bitcoin's security to enable
        a fully programmable DeFi layer secured by the Bitcoin blockchain itself. With <strong style={{ color: "var(--color-text)" }}>$96M+ TVL and 30+ dApps</strong> at
        launch, Citrea represents a massive leap in Bitcoin's ability to host complex financial applications
        while maintaining native BTC as settlement.
      </p>

      <p className="text-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
        March 2026 · 14 min read
      </p>

      {/* Key Stats */}
      <div
        className="glass rounded-xl p-5 mb-8"
        style={{ borderLeft: "4px solid #f97316" }}
      >
        <h2
          className="text-sm font-extrabold mb-3 uppercase tracking-wide"
          style={{ color: "#f97316" }}
        >
          ₿ Citrea Mainnet Stats (March 2026)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { label: "TVL", value: "~$96M" },
            { label: "Mainnet Launch", value: "Jan 27, 2026" },
            { label: "dApps at Launch", value: "30+" },
            { label: "Bridge", value: "Clementine (BitVM)" },
            { label: "Settlement", value: "Bitcoin L1" },
            { label: "Proof System", value: "zkEVM" },
          ].map((s) => (
            <div
              key={s.label}
              className="p-3 rounded-lg"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
              <div className="text-sm font-bold" style={{ color: "var(--color-text)" }}>{s.value}</div>
            </div>
          ))}
        </div>
        <p className="text-xs mt-3" style={{ color: "var(--color-text-secondary)" }}>
          Data approximate as of March 2026. Sources: Citrea official, DefiLlama, blockchain explorers.
        </p>
      </div>

      {/* Table of Contents */}
      <div
        className="glass rounded-xl p-5 mb-8"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <h2
          className="text-sm font-extrabold mb-3 uppercase tracking-wide"
          style={{ color: "var(--color-text-secondary)" }}
        >
          📋 Table of Contents
        </h2>
        <ol className="space-y-1 text-sm">
          {[
            ["#what-is-citrea", "1. What is Citrea?"],
            ["#how-citrea-works", "2. How Citrea Works: The ZK Rollup Architecture"],
            ["#cbtc", "3. cBTC: Trust-Minimized Bitcoin"],
            ["#ctusd", "4. ctUSD: Bitcoin's Native Stablecoin"],
            ["#ecosystem", "5. The Citrea Ecosystem (30+ dApps)"],
            ["#vs-other-l2s", "6. Citrea vs Other Bitcoin L2s"],
            ["#risks", "7. Risks and Considerations"],
            ["#faq", "8. FAQ"],
          ].map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[#58a6ff] hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-is-citrea" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          1. What is Citrea?
        </h2>
        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          <strong style={{ color: "var(--color-text)" }}>Citrea</strong> is the world's first production-grade
          ZK (zero-knowledge) rollup natively secured by Bitcoin. Launched on mainnet January 27, 2026,
          Citrea was developed by a team backed by Paradigm and other major VCs. It represents a historic
          milestone: the first time Bitcoin's settlement layer has directly hosted zero-knowledge proof
          verification and execution of off-chain smart contract transactions.
        </p>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          For most of Bitcoin's history, scaling solutions either sacrificed security (via sidechains like
          Rootstock, which rely on federation or merge-mining) or sacrificed Bitcoin's direct involvement
          (via wrapped tokens on Ethereum). Citrea does something different: it uses cryptographic proofs
          <strong style={{ color: "var(--color-text)" }}> inscribed directly on Bitcoin</strong> to verify
          the correctness of all off-chain transactions. Bitcoin is the settlement layer <em>and</em> the
          source of security.
        </p>

        <div
          className="rounded-xl p-5 my-6"
          style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "12px" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#f97316" }}>
            ₿ Why Citrea Matters for Bitcoin
          </h3>
          <p className="text-sm mb-3" style={{ color: "#8b949e" }}>
            Citrea solves Bitcoin's deepest scaling problem: how to enable complex, high-frequency smart
            contract execution while keeping Bitcoin as the security anchor. Previous approaches:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[420px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  <th className="text-left py-2 pr-4" style={{ color: "#8b949e" }}>Approach</th>
                  <th className="text-left py-2 pr-4" style={{ color: "#8b949e" }}>Security Model</th>
                  <th className="text-left py-2" style={{ color: "#8b949e" }}>Trade-off</th>
                </tr>
              </thead>
              <tbody style={{ color: "#c9d1d9" }}>
                {[
                  ["Sidechains (RSK, Liquid)", "Merge-mined / federated", "Less direct Bitcoin security"],
                  ["Wrapped BTC on Ethereum", "Ethereum smart contracts", "Loses Bitcoin settlement"],
                  ["State channels (Lightning)", "Channels + fraud proofs", "Limited DeFi complexity"],
                  ["Citrea ZK Rollup", "Bitcoin L1 + ZK proofs", "Full Bitcoin settlement + verification"],
                ].map(([a, s, t]) => (
                  <tr key={a} style={{ borderBottom: "1px solid #21262d" }}>
                    <td className="py-2 pr-4 font-medium" style={{ color: "#e6edf3" }}>{a}</td>
                    <td className="py-2 pr-4">{s}</td>
                    <td className="py-2">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Citrea launched with <strong style={{ color: "var(--color-text)" }}>30+ DeFi applications</strong> including
          lending, trading, settlement, and synthetic asset protocols — all secured by Bitcoin mainnet.
          With ~$96M TVL within weeks of mainnet, Citrea is attracting serious capital and ecosystem builders.
        </p>
      </section>

      {/* Section 2 */}
      <section id="how-citrea-works" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          2. How Citrea Works: The ZK Rollup Architecture
        </h2>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Citrea's architecture is built on three core pillars: Streaming zkEVM, Bitcoin-based settlement,
          and the BitVM-based "Clementine" bridge. Here's how they fit together:
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              title: "Streaming zkEVM",
              color: "#f97316",
              desc: "Citrea batches thousands of transactions off-chain and executes them in a zkVM (zero-knowledge virtual machine). The batch processor generates a ZK validity proof that proves all transactions were processed correctly according to the Citrea state machine, without revealing the transactions themselves.",
            },
            {
              title: "Bitcoin Inscriptions & Proofs",
              color: "#facc15",
              desc: "ZK validity proofs are inscribed directly onto the Bitcoin blockchain via the Ordinals protocol. Bitcoin miners and full nodes verify these proofs as part of the Bitcoin consensus mechanism. This is a historic first: Bitcoin's consensus directly verifies non-trivial off-chain computation.",
            },
            {
              title: "Clementine: BitVM-Based Bridge",
              color: "#3b82f6",
              desc: "The Clementine bridge handles Bitcoin ↔ Citrea token parity using BitVM (Bitcoin Virtual Machine). It uses a 1-of-N honest assumption: only one honest participant is needed to challenge and slash fraudulent bridge operators. This dramatically reduces custodian risk compared to traditional multisig bridges.",
            },
            {
              title: "Bitcoin as Settlement & Data Availability",
              color: "#22c55e",
              desc: "Bitcoin L1 serves dual purposes: (1) settlement — final state roots are published to Bitcoin, making Citrea transactions final once confirmed by Bitcoin miners, (2) data availability — transaction data is inscribed on-chain, so the network can always reconstruct the full state even if Citrea nodes go offline.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="glass rounded-xl p-5"
              style={{ border: `1px solid ${pillar.color}40`, borderLeft: `4px solid ${pillar.color}` }}
            >
              <h3 className="font-bold text-base mb-2" style={{ color: pillar.color }}>
                {pillar.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          <strong style={{ color: "var(--color-text)" }}>Censorship resistance:</strong> Citrea implements
          a forced transaction mechanism that forces the sequencer to include pending transactions within
          a certain timeframe. If the sequencer fails to include a transaction, it gets slashed. This
          ensures that even if the Citrea team tries to censor you, Bitcoin miners can force inclusion.
        </p>
      </section>

      {/* Section 3 */}
      <section id="cbtc" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          3. cBTC: Trust-Minimized Bitcoin
        </h2>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          <strong style={{ color: "var(--color-text)" }}>cBTC (Citrea Bitcoin)</strong> is the first
          trust-minimized Bitcoin asset on a fully programmable platform. It's pegged 1:1 to native BTC
          via a combination of:
        </p>

        <ul className="space-y-2 mb-6 ml-4" style={{ color: "var(--color-text-secondary)" }}>
          <li className="text-sm">
            <strong style={{ color: "var(--color-text)" }}>SPV Proofs:</strong> Simplified Payment Verification
            cryptographically proves that Bitcoin transactions occurred on Bitcoin L1 without trusting
            bridge operators.
          </li>
          <li className="text-sm">
            <strong style={{ color: "var(--color-text)" }}>ZK Proofs:</strong> Zero-knowledge proofs verify
            bridge invariants (e.g., conservation of assets) without revealing the underlying data.
          </li>
          <li className="text-sm">
            <strong style={{ color: "var(--color-text)" }}>BitVM Verification:</strong> The Clementine bridge's
            1-of-N honest assumption means any participant can cryptographically challenge invalid bridge
            operations and get rewarded.
          </li>
        </ul>

        <div
          className="rounded-xl p-5 my-6"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#f97316" }}>
            cBTC vs Wrapped BTC Alternatives
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #30363d" }}>
                  <th className="text-left py-2 pr-4" style={{ color: "#8b949e" }}>Asset</th>
                  <th className="text-left py-2 pr-4" style={{ color: "#8b949e" }}>Issuer Model</th>
                  <th className="text-left py-2 pr-4" style={{ color: "#8b949e" }}>Security</th>
                  <th className="text-left py-2" style={{ color: "#8b949e" }}>Trust Requirement</th>
                </tr>
              </thead>
              <tbody style={{ color: "#c9d1d9" }}>
                {[
                  ["WBTC", "Centralized (BitGo)", "Ethereum smart contracts", "High (custody risk)"],
                  ["cbBTC", "Centralized (Coinbase)", "Ethereum + Coinbase custody", "High"],
                  ["tBTC", "Threshold Network", "Threshold threshold crypto", "Medium"],
                  ["cBTC", "Citrea ZK + BitVM", "Bitcoin L1 + ZK proofs", "Low"],
                ].map(([a, i, s, t]) => (
                  <tr key={a} style={{ borderBottom: "1px solid #21262d" }}>
                    <td className="py-2 pr-4 font-medium" style={{ color: "#e6edf3" }}>{a}</td>
                    <td className="py-2 pr-4">{i}</td>
                    <td className="py-2 pr-4">{s}</td>
                    <td className="py-2">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          cBTC is EVM-compatible and can be used across Citrea's DeFi ecosystem. You deposit native BTC
          into the Clementine bridge, receive cBTC on Citrea, and can use it in lending protocols, trading
          pairs, settlement layers, and other applications — all while maintaining a cryptographic link
          back to native Bitcoin.
        </p>
      </section>

      {/* Section 4 */}
      <section id="ctusd" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          4. ctUSD: Bitcoin's Native Stablecoin
        </h2>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          <strong style={{ color: "var(--color-text)" }}>ctUSD</strong> is Citrea's native stablecoin,
          designed to provide a dollar-denominated unit of account within the Bitcoin-secured ecosystem.
          Unlike algorithmic stablecoins (which rely on incentive mechanisms) or multi-collateral stablecoins
          (which carry composability risk), ctUSD is fully backed by:
        </p>

        <ul className="space-y-2 mb-6 ml-4" style={{ color: "var(--color-text-secondary)" }}>
          <li className="text-sm">
            <strong style={{ color: "var(--color-text)" }}>Short-term U.S. Treasury bills</strong>
          </li>
          <li className="text-sm">
            <strong style={{ color: "var(--color-text)" }}>Cash in reserve</strong>
          </li>
        </ul>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          This backing structure aligns ctUSD with emerging regulatory frameworks like the GENIUS Act (U.S.
          stablecoin regulation). By holding Treasury bills and cash, ctUSD minimizes counterparty risk and
          appeal to institutions that need stablecoin rails but can't accept collateral-dependent
          stablecoins.
        </p>

        <div
          className="rounded-xl p-5 my-6"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#22c55e" }}>
            📊 ctUSD Use Cases
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#8b949e" }}>
            <li>• <strong style={{ color: "#c9d1d9" }}>Stablecoin settlement:</strong> Pair with cBTC in trading and DeFi</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Lending protocols:</strong> Borrow ctUSD against cBTC collateral</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Derivatives:</strong> Settle Bitcoin perpetuals and options in USD</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Reserve asset:</strong> Hold ctUSD as a treasury alternative to USDC/USDT</li>
          </ul>
        </div>
      </section>

      {/* Section 5 */}
      <section id="ecosystem" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          5. The Citrea Ecosystem (30+ dApps)
        </h2>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Citrea mainnet launched with 30+ Bitcoin-secured decentralized applications, covering the full
          spectrum of DeFi use cases. Here's a breakdown by category:
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              category: "Lending & Borrowing",
              color: "#f97316",
              examples: "Credit protocols allowing cBTC deposits as collateral and ctUSD borrowing. Interest rates determined by on-chain supply/demand.",
            },
            {
              category: "Trading & DEXs",
              color: "#3b82f6",
              examples: "Decentralized exchanges for cBTC/ctUSD pairs, BTC perpetuals, and synthetic assets. Liquidity from LPs incentivized with trading fees and emission rewards.",
            },
            {
              category: "Settlement & Payments",
              color: "#22c55e",
              examples: "Protocols for atomic settlement of OTC trades, institutional payments, and cross-chain bridging. Uses cBTC as final settlement layer.",
            },
            {
              category: "Derivatives & Synthetics",
              color: "#facc15",
              examples: "Platforms for Bitcoin perpetuals, options, leveraged positions, and synthetic assets. All collateralized by cBTC.",
            },
            {
              category: "Yield & Liquidity",
              color: "#a78bfa",
              examples: "Liquidity pools, yield farming, concentrated liquidity mechanisms. Earn yield on cBTC without leaving Bitcoin security.",
            },
          ].map((segment) => (
            <div
              key={segment.category}
              className="glass rounded-xl p-5"
              style={{ border: `1px solid ${segment.color}40`, borderLeft: `4px solid ${segment.color}` }}
            >
              <h3 className="font-bold text-base mb-2" style={{ color: segment.color }}>
                {segment.category}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                {segment.examples}
              </p>
            </div>
          ))}
        </div>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          All 30+ dApps inherit Citrea's Bitcoin settlement security. This means users can take on smart
          contract risk specific to each protocol, but their final settlement is guaranteed by Bitcoin
          mainnet consensus — a major step forward for Bitcoin DeFi.
        </p>
      </section>

      {/* Section 6 */}
      <section id="vs-other-l2s" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          6. Citrea vs Other Bitcoin L2s
        </h2>

        <p className="mb-6" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Bitcoin has several Layer 2 and scaling solutions. Here's how Citrea compares:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm min-w-[600px]" style={{ color: "var(--color-text)" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                <th className="text-left py-3 px-2 font-bold" style={{ color: "var(--color-text-secondary)" }}>Feature</th>
                <th className="text-left py-3 px-2 font-bold" style={{ color: "var(--color-text-secondary)" }}>Citrea</th>
                <th className="text-left py-3 px-2 font-bold" style={{ color: "var(--color-text-secondary)" }}>Stacks</th>
                <th className="text-left py-3 px-2 font-bold" style={{ color: "var(--color-text-secondary)" }}>Rootstock</th>
                <th className="text-left py-3 px-2 font-bold" style={{ color: "var(--color-text-secondary)" }}>Lightning</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--color-text-secondary)" }}>
              {[
                ["Settlement Layer", "Bitcoin", "Bitcoin", "Sidechain", "Payment channels"],
                ["Smart Contracts", "EVM-compatible", "Clarity", "EVM", "Limited"],
                ["TVL", "~$96M", "$208M", "$160M+", "N/A"],
                ["Proof Type", "ZK proofs", "Proof of Transfer", "Merge-mined", "Multisig"],
                ["Trust Model", "Low (crypto secured)", "Medium (multisig)", "High (miners)", "Medium"],
                ["DeFi Maturity", "New (launching)", "Established", "Established", "Payments only"],
                ["cBTC/sBTC?", "cBTC (new)", "sBTC", "RBTC", "N/A"],
              ].map(([f, c, s, r, l]) => (
                <tr key={f} style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <td className="py-2 px-2 font-medium" style={{ color: "var(--color-text)" }}>{f}</td>
                  <td className="py-2 px-2">{c}</td>
                  <td className="py-2 px-2">{s}</td>
                  <td className="py-2 px-2">{r}</td>
                  <td className="py-2 px-2">{l}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className="rounded-xl p-5 my-6"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#f97316" }}>
            📌 Key Differences
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#8b949e" }}>
            <li>• <strong style={{ color: "#c9d1d9" }}>Citrea's ZK advantage:</strong> Proofs are verified on Bitcoin L1, making Citrea maximally Bitcoin-native. Stacks and Rootstock use different verification mechanisms.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Trust vs. security:</strong> Citrea's cryptographic ZK approach requires less trust in operators than Stacks' multisig or Rootstock's miner consensus.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Ecosystem stage:</strong> Citrea is new and pre-integrated. Stacks and Rootstock are established with mature DeFi. Lightning is for payments, not DeFi.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Scaling trade-offs:</strong> Citrea prioritizes Bitcoin security over throughput. Rootstock and Stacks may have higher throughput but weaker Bitcoin coupling.</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section id="risks" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          7. Risks and Considerations
        </h2>

        <p className="mb-4" style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}>
          Citrea is a novel protocol combining multiple advanced technologies (Streaming zkEVM, BitVM,
          Bitcoin inscription verification). While the architecture is sound, there are real risks to
          understand before deploying capital:
        </p>

        <div className="space-y-4 mb-6">
          {[
            {
              title: "Unproven Technology Risk",
              severity: "High",
              desc: "ZK rollups are battle-tested on Ethereum (Starknet, Arbitrum), but Bitcoin's version is brand new. There could be undiscovered bugs in the Streaming zkEVM or BitVM bridge.",
            },
            {
              title: "Sequencer Risk",
              severity: "Medium",
              desc: "The sequencer that batches transactions could go offline or censor transactions. Citrea has a forced inclusion mechanism, but reliance on a single sequencer for liveness is a centralization vector.",
            },
            {
              title: "Bitcoin Blockchain Risk",
              severity: "Low",
              desc: "While Bitcoin itself is secure, Citrea's operation depends on Bitcoin block space being available and affordable. If Bitcoin fees spike, Citrea settlement costs could become prohibitive.",
            },
            {
              title: "Bridge Risk (Clementine)",
              severity: "Medium",
              desc: "The BitVM-based Clementine bridge is secure in theory, but BitVM itself is new. Bugs in the bridge could lead to loss of bridged assets. Use the bridge for amounts you can afford to lose initially.",
            },
            {
              title: "Smart Contract Risk (30+ dApps)",
              severity: "High",
              desc: "The 30+ dApps on Citrea are unaudited or early-stage. Lending protocols, DEXs, and derivatives could have exploitable bugs. Treat Citrea dApps as experimental.",
            },
            {
              title: "Liquidity Fragmentation",
              severity: "Medium",
              desc: "With 30+ protocols competing for liquidity, some may have thin order books. You might face slippage or liquidity crunches during volatility.",
            },
          ].map((risk) => (
            <div
              key={risk.title}
              className="glass rounded-xl p-5"
              style={{
                border: "1px solid var(--color-border)",
                borderLeft: risk.severity === "High" ? "4px solid #ef4444" : risk.severity === "Medium" ? "4px solid #f97316" : "4px solid #22c55e",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--color-text)" }}>
                    {risk.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                    {risk.desc}
                  </p>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded font-bold whitespace-nowrap"
                  style={{
                    background: risk.severity === "High" ? "#ef444420" : risk.severity === "Medium" ? "#f9731620" : "#22c55e20",
                    color: risk.severity === "High" ? "#ef4444" : risk.severity === "Medium" ? "#f97316" : "#22c55e",
                  }}
                >
                  {risk.severity}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-5 mb-6"
          style={{ background: "#161b22", border: "1px solid #30363d" }}
        >
          <h3 className="text-sm font-bold mb-2" style={{ color: "#f97316" }}>
            ⚠️ Best Practices for Citrea
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: "#8b949e" }}>
            <li>• <strong style={{ color: "#c9d1d9" }}>Start small:</strong> Deploy tiny amounts ($100–$500) before committing serious capital.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Check audits:</strong> Only use dApps that have published security audit reports.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Monitor governance:</strong> Follow Citrea's governance channels. Critical bugs or bridge issues will be announced there first.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Bridge gradually:</strong> Don't bridge your entire BTC stack at once. Use the bridge to test with dust amounts first.</li>
            <li>• <strong style={{ color: "#c9d1d9" }}>Diversify protocols:</strong> If you do use Citrea dApps, spread risk across multiple protocols rather than concentrating in one.</li>
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="mb-10">
        <h2 className="text-2xl font-extrabold mb-6" style={{ color: "var(--color-text)" }}>
          8. FAQ
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "What is Citrea?",
              a: "Citrea is Bitcoin's first production-grade ZK rollup, launched January 27, 2026. It uses Streaming zkEVM to batch and verify transactions off-chain, then inscribes ZK proofs directly on Bitcoin for verification. All transactions settle on Bitcoin L1, making Citrea maximally Bitcoin-native.",
            },
            {
              q: "How does Citrea achieve validity proofs on Bitcoin?",
              a: "Citrea batches transactions, executes them in a zkVM, and generates zero-knowledge proofs. These proofs are inscribed via Bitcoin's Ordinals protocol and verified by Bitcoin miners as part of the consensus mechanism. This is the first time Bitcoin's consensus layer directly verifies non-trivial off-chain computation.",
            },
            {
              q: "What is the difference between cBTC and WBTC?",
              a: "WBTC is issued by BitGo and relies on centralized custody. cBTC is Citrea's Bitcoin-pegged asset using SPV proofs, ZK proofs, and BitVM verification — a cryptographic approach that minimizes custodian reliance. cBTC is more trustless but newer and less tested than WBTC.",
            },
            {
              q: "Is Citrea safe to use?",
              a: "Citrea uses solid cryptographic foundations (ZK proofs, BitVM) and Bitcoin L1 for settlement, making it conceptually safer than many L2s. However, it's a new protocol and the 30+ dApps are unaudited or early-stage. Always start with small amounts and check audit reports before using any dApp.",
            },
            {
              q: "How much does it cost to bridge BTC to Citrea?",
              a: "Citrea bridge costs depend on Bitcoin L1 fee rates. Since proofs and data are inscribed on Bitcoin, bridge transactions can be expensive during peak Bitcoin congestion. Use the bridge during low-fee periods (e.g., weekends) to minimize costs.",
            },
            {
              q: "Can I use Citrea without Ethereum or Solana?",
              a: "Yes. Citrea is a Bitcoin L2, not a sidechain or cross-chain bridge to another blockchain. You interact directly with Bitcoin and Citrea. No need for Ethereum or Solana.",
            },
          ].map(({ q, a }) => (
            <div
              key={q}
              className="glass rounded-xl p-5"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-bold text-sm mb-2" style={{ color: "var(--color-text)" }}>
                {q}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-secondary)", lineHeight: "1.7" }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-10 rounded-xl p-5" style={{ background: "#161b22", border: "1px solid #30363d" }}>
        <p className="text-sm" style={{ color: "#8b949e", lineHeight: "1.8" }}>
          <strong style={{ color: "#facc15" }}>⚠️ Disclaimer:</strong> This guide is for informational
          purposes only. It is not financial advice. Always do your own research before making investment
          decisions. Citrea is a new protocol and carries elevated risk. Only invest amounts you can afford
          to lose.
        </p>
      </section>

      {/* Related Articles */}
      <section className="mb-10">
        <h2 className="text-lg font-extrabold mb-4" style={{ color: "var(--color-text)" }}>
          📚 Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              href: "/learn/btcfi-bitcoin-defi-guide-2026",
              title: "BTCFi Guide 2026",
              desc: "Bitcoin DeFi ecosystem overview, including Stacks, Rootstock, and Babylon staking.",
            },
            {
              href: "/learn/bitcoin-layer-2-guide",
              title: "Bitcoin Layer 2 Guide",
              desc: "Comprehensive coverage of Bitcoin L2s, scaling solutions, and settlement mechanics.",
            },
            {
              href: "/tools/bridge-aggregator",
              title: "Bridge Aggregator Tool",
              desc: "Compare Bitcoin bridge fees and rates across Citrea, Stacks, Rootstock, and more.",
            },
            {
              href: "/learn",
              title: "Back to Learn Center",
              desc: "Browse all degen0x guides and educational content.",
            },
          ].map((rel) => (
            <Link
              key={rel.href}
              href={rel.href}
              className="glass rounded-xl p-4 block hover:border-[#f97316] transition-colors"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <div className="font-bold text-sm mb-1" style={{ color: "var(--color-text)" }}>
                {rel.title}
              </div>
              <div className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {rel.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        className="glass rounded-xl p-6 text-center"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <p className="text-base font-bold mb-2" style={{ color: "var(--color-text)" }}>
          Monitor Bitcoin L2 Activity & Yields
        </p>
        <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
          Track Citrea TVL, dApp activity, and Bitcoin DeFi yields on degen0x in real time.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/defi-yields"
            className="affiliate-cta px-5 py-2 rounded-lg text-white font-semibold text-sm"
          >
            DeFi Yields
          </Link>
          <Link
            href="/tools/bridge-aggregator"
            className="glass px-5 py-2 rounded-lg font-semibold text-sm"
            style={{ color: "var(--color-text)", border: "1px solid var(--color-border)" }}
          >
            Bridge Aggregator
          </Link>
          <Link
            href="/prices"
            className="glass px-5 py-2 rounded-lg font-semibold text-sm"
            style={{ color: "var(--color-text)", border: "1px solid var(--color-border)" }}
          >
            Live Prices
          </Link>
        </div>
      </div>
      <BackToTop />
    </article>
  );
}
