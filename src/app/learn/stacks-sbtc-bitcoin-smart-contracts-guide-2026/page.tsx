import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Stacks & sBTC Guide 2026: Bitcoin Smart Contracts, DeFi & the Satoshi Upgrades | degen0x",
  description: "Master Stacks and sBTC in 2026. Learn how Stacks brings smart contracts to Bitcoin, how 1:1 sBTC works, Clarity language, Satoshi Upgrades (ZK minting, Dual Stacking), PoX consensus, and the competitive landscape. Comprehensive guide with metrics, dApps, and risks.",
  keywords: "Stacks, sBTC, Bitcoin smart contracts, Bitcoin L2, Clarity language, Bitcoin DeFi, PoX consensus, STX token, Bitcoin scaling, Satoshi Upgrades",
  openGraph: {
    title: "Stacks & sBTC Guide 2026: Bitcoin Smart Contracts & the Satoshi Upgrades",
    description: "Everything you need to know about Stacks, sBTC, and Bitcoin smart contracts. PoX consensus, Clarity, DeFi ecosystem, and upcoming upgrades.",
    url: "https://degen0x.com/learn/stacks-sbtc-bitcoin-smart-contracts-guide-2026",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/api/og?title=Stacks+%26+sBTC+Guide&category=Learn&type=learn",
        width: 1200,
        height: 630,
        alt: "Stacks & sBTC Bitcoin Smart Contracts Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stacks & sBTC Guide 2026: Bitcoin Smart Contracts & Satoshi Upgrades",
    description: "Learn Stacks, sBTC, Clarity language, PoX consensus, and the Satoshi Upgrades. Comprehensive Bitcoin DeFi guide.",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Stacks & sBTC Guide 2026", href: "/learn/stacks-sbtc-bitcoin-smart-contracts-guide-2026" },
];

const FAQ_DATA = [
  {
    q: "What is Stacks and how does it relate to Bitcoin?",
    a: "Stacks is a Bitcoin Layer 2 that enables smart contracts and programmable applications on Bitcoin. Unlike sidechains or separate blockchains, Stacks settles to Bitcoin's base layer and uses Bitcoin's security. You write smart contracts in Clarity (a functional language) that execute on Stacks but inherit Bitcoin's finality.",
  },
  {
    q: "Is sBTC safe? How does the peg work?",
    a: "sBTC is 1:1 backed by BTC held in a federated peg. Users deposit BTC and receive sBTC minted on Stacks. Currently, the peg is maintained by a federation (will decentralize in 2026+ via Satoshi Upgrades using ZK proofs). As a wrapped token, sBTC carries the smart contract risk of the peg mechanism — it's not as secure as native BTC but safer than a centralized custodian like WBTC.",
  },
  {
    q: "What is Proof of Transfer (PoX)?",
    a: "PoX is Stacks' consensus mechanism. Miners compete to produce blocks by transferring STX to Bitcoin addresses operated by stackers. Stackers (token holders who lock STX) earn the miner's BTC transfers as a reward. This ties STX incentives directly to Bitcoin — miners must spend real BTC to mine, and stackers earn BTC. It's a unique way to create Bitcoin scarcity within a Bitcoin L2.",
  },
  {
    q: "How is Stacks different from other Bitcoin L2s?",
    a: "Stacks uses PoX consensus and Clarity language, both unique to Stacks. Most Bitcoin L2s (Lightning, Rollups) focus on scaling payments or simple swaps. Stacks uniquely enables full smart contract programmability — like Ethereum — while anchored to Bitcoin. Competitors like Babylon focus on staking, while WBTC is custodian-based, not a full L2.",
  },
  {
    q: "Can I earn yield on my BTC using Stacks?",
    a: "Yes, in two ways: (1) Stack STX and earn BTC rewards through PoX. Users lock STX for ~3 months and earn 7-14% APY in BTC transfers from miners. (2) Supply sBTC to lending protocols (Arkadiko, etc.) and earn yield in STX or stablecoins. You can also provide liquidity on ALEX to earn fees on STX/sBTC pairs.",
  },
  {
    q: "What are the Satoshi Upgrades?",
    a: "The Satoshi Upgrades are major 2026+ releases for Stacks: (1) Self-custodial sBTC minting via ZK proofs — users mint sBTC without a federation. (2) Dual Stacking — stack both STX and BTC simultaneously on Bitcoin to earn STX and Bitcoin yields. (3) Programmable BTC Vaults — use BTC in smart contracts without wrapping. These fundamentally improve Stacks' capital efficiency and decentralization.",
  },
];

const RESOURCES = [
  { href: "/learn/bitcoin-fundamentals", label: "Bitcoin Fundamentals" },
  { href: "/learn/layer-1-vs-layer-2", label: "Layer 1 vs Layer 2" },
  { href: "/learn/defi-yield-strategies-2026", label: "DeFi Yield Strategies" },
  { href: "/tools/staking-apy", label: "Staking APY Calculator" },
  { href: "/learn/bitcoin-lightning-network", label: "Bitcoin Lightning Network" },
  { href: "/learn/consensus-mechanisms", label: "Consensus Mechanisms" },
];

const articleSchema = generateArticleSchema({
  title: "Stacks & sBTC Guide 2026: Bitcoin Smart Contracts, DeFi & the Satoshi Upgrades",
  description: "Complete guide to Stacks and sBTC — Bitcoin smart contracts, PoX consensus, Clarity language, Satoshi Upgrades, and the Bitcoin DeFi ecosystem.",
  url: "https://degen0x.com/learn/stacks-sbtc-bitcoin-smart-contracts-guide-2026",
  datePublished: "2026-03-17T00:00:00Z",
  dateModified: "2026-03-17T00:00:00Z",
  author: "degen0x Team",
  wordCount: 3500,
});

const faqSchema = generateFAQSchema(
  FAQ_DATA.map(({ q, a }) => ({ question: q, answer: a }))
);

const schemas = combineSchemas([articleSchema, faqSchema]);

export default function StacksSBTCGuidePage() {
  const S = {
    bg: "#0d1117",
    surface: "#161b22",
    surface2: "#1c2330",
    border: "#30363d",
    text: "#e6edf3",
    text2: "#8b949e",
    blue: "#58a6ff",
    orange: "#f0883e",
    green: "#3fb950",
    red: "#f85149",
    yellow: "#d29922",
    purple: "#bc8cff",
  };

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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>₿ Bitcoin L2</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.orange}20`, color: S.orange, border: `1px solid ${S.orange}40` }}>Smart Contracts</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 17, 2026 · 22 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Stacks & sBTC Guide 2026: Bitcoin Smart Contracts, DeFi & the Satoshi Upgrades
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Bitcoin is the world's largest blockchain, but it's intentionally limited for security. Stacks changes that. It's the leading Layer 2 that brings smart contracts, DeFi, and programmability to Bitcoin without compromising its security. sBTC is the 1:1 BTC-backed token that powers Stacks DeFi. This guide breaks down how Stacks works, the upcoming Satoshi Upgrades that will transform Bitcoin forever, and how to navigate the competing visions for Bitcoin DeFi.
          </p>

          {/* Quick Facts Box */}
          <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.blue, marginBottom: 16 }}>⚡ Quick Facts (March 2026)</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { label: "STX Price", val: "$0.26", color: S.blue },
                { label: "STX Market Cap", val: "~$477M", color: S.blue },
                { label: "STX Rank", val: "#101", color: S.blue },
                { label: "sBTC TVL", val: "~$308M", color: S.orange },
                { label: "sBTC Peak TVL", val: "$600M+ (Aug 2025)", color: S.orange },
                { label: "Consensus", val: "Proof of Transfer (PoX)", color: S.green },
              ].map((item) => (
                <div key={item.label} style={{ background: `${item.color}08`, border: `1px solid ${item.color}25`, borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 12, color: S.text2, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: item.color }}>{item.val}</div>
                </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-17"
          updatedDate="2026-03-17"
          readingTime={8}
          section="learn"
        />

              ))}
            </div>
          </div>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#what-is-stacks", "What Is Stacks? Bitcoin Layer 2 Overview"],
              ["#how-stacks-works", "How Stacks Works: PoX & Bitcoin Finality"],
              ["#understanding-sbtc", "Understanding sBTC: The 1:1 BTC Token"],
              ["#key-metrics", "Key Metrics & Market Position"],
              ["#satoshi-upgrades", "The Satoshi Upgrades: ZK Proofs & Dual Stacking"],
              ["#sbtc-vs-competitors", "sBTC vs Other Bitcoin DeFi Options"],
              ["#building-on-stacks", "Building on Stacks: Clarity Language & Developers"],
              ["#ecosystem", "Stacks DeFi Ecosystem: Key dApps"],
              ["#risks", "Risks & Considerations"],
              ["#getting-started", "How to Get Started with Stacks"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <div key={href as string}>
                <a href={href as string} style={{ display: "block", color: S.blue, fontSize: 13, textDecoration: "none", padding: "4px 0", lineHeight: 1.6 }}>→ {label as string}</a>
              </div>
            ))}
          </div>
        </header>

        {/* What Is Stacks Section */}
        <section id="what-is-stacks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>What Is Stacks? Bitcoin Layer 2 Overview</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Stacks (STX) is a Layer 2 blockchain that enables smart contracts and DeFi applications to run on Bitcoin. Launched in 2021, Stacks has grown to become the dominant platform for Bitcoin programmability. Unlike Ethereum or other smart contract chains, Stacks is <strong style={{ color: S.text }}>anchored to Bitcoin itself</strong> — meaning every Stacks block references and settles to Bitcoin, inheriting Bitcoin's security.
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

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The core insight: Bitcoin has intentionally limited functionality for security. Satoshi designed Bitcoin to be a simple value transfer network, not a programmable platform. Stacks unlocks Bitcoin's locked capital and enables complex smart contracts — loans, swaps, yield farming, NFTs — while anchoring all settlement to Bitcoin's immutable ledger.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginTop: 24, marginBottom: 24 }}>
            {[
              { icon: "₿", title: "Bitcoin Settlement", desc: "Every Stacks block commits to Bitcoin for final settlement" },
              { icon: "🔗", title: "Smart Contracts", desc: "Full programmability via Clarity language" },
              { icon: "🎁", title: "PoX Rewards", desc: "Stackers earn BTC directly for validation" },
              { icon: "🚀", title: "TVL Growth", desc: "$308M in sBTC liquidity driving DeFi" },
            ].map((item) => (
              <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: S.text2 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Why Stacks Matters for Bitcoin</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Bitcoin maximalists argue: "Bitcoin should do one thing well — store value." True. But they also argue DeFi shouldn't happen on Bitcoin because it adds complexity and risk. Stacks solves this paradox. It enables DeFi <strong style={{ color: S.text }}>separately</strong> from Bitcoin's base layer, while anchoring back to Bitcoin for settlement. Your smart contract logic runs on Stacks, but final settlement is Bitcoin-secured.
          </p>

          <div style={{ background: `${S.blue}08`, border: `1px solid ${S.blue}25`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: S.blue, marginBottom: 10 }}>Key Concept: Validity Through Bitcoin</div>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              Stacks transactions are invalid unless they can be settled to Bitcoin. This creates a cryptographic link: a malicious Stacks validator cannot reorg the chain without also reorging Bitcoin (impossible). Stacks borrowss Bitcoin's finality.
            </p>
          </div>
        </section>

        {/* How Stacks Works */}
        <section id="how-stacks-works" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How Stacks Works: PoX & Bitcoin Finality</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Stacks uses a unique consensus mechanism called <strong style={{ color: S.text }}>Proof of Transfer (PoX)</strong>. Instead of miners solving computational puzzles (Proof of Work) or validators staking coins (Proof of Stake), Stacks miners <strong style={{ color: S.text }}>spend real BTC</strong> to create blocks.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Proof of Transfer (PoX) Explained</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Miners compete</strong> — Miners publicly bid by transferring BTC to addresses owned by Stacks stackers. Whoever transfers the most BTC in a block cycle wins the right to produce the next block.</li>
            <li><strong>Stackers earn BTC</strong> — Stackers are STX holders who lock their tokens. They earn the BTC that miners transferred to their addresses — direct Bitcoin yields for stacking STX.</li>
            <li><strong>Blocks reference Bitcoin</strong> — Each Stacks block includes a hash of a recent Bitcoin block. This cryptographic link ensures Stacks can't reorg without Bitcoin reorging (consensus via Bitcoin).</li>
            <li><strong>Finality after 7 Bitcoin blocks</strong> — A Stacks transaction is final once 7 Bitcoin blocks have passed (confirmed on Bitcoin). This creates economically provable finality.</li>
          </ol>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Why is PoX brilliant? It creates <strong style={{ color: S.text }}>direct Bitcoin alignment</strong>. Miners can't just print their own coins — they must spend real BTC. This ties Stacks' security to Bitcoin's value. Stackers earn real BTC yield, creating a Bitcoin-to-Bitcoin capital loop.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Stacking Mechanics: Earning BTC Yield</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>How to Stack STX (Earn BTC)</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { step: "1. Lock STX", desc: "Hold ≥100 STX and lock them for a ~13-week cycle (currently ~7-14% of circulating supply stacks)" },
                { step: "2. Receive BTC Yields", desc: "Throughout the cycle, miners transfer BTC to your address. You earn BTC directly — not more STX" },
                { step: "3. Unlock & Repeat", desc: "After the cycle, withdraw your STX and choose to re-lock for the next cycle or claim rewards" },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: 12 }}>
                  <div style={{ fontWeight: 700, color: S.blue, minWidth: 90 }}>{item.step}</div>
                  <p style={{ color: S.text2, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: 12, background: `${S.green}08`, border: `1px solid ${S.green}25`, borderRadius: 8 }}>
              <div style={{ fontSize: 12, color: S.green, fontWeight: 700, marginBottom: 4 }}>Current APY (2026)</div>
              <div style={{ fontSize: 13, color: S.text2 }}>Stacking STX yields approximately <strong style={{ color: S.text }}>7-14% APY in BTC</strong>, depending on network participation and mining competition.</div>
            </div>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Clarity: Stacks' Smart Contract Language</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Stacks uses <strong style={{ color: S.text }}>Clarity</strong>, a functional programming language designed for clarity and auditability. Unlike Solidity (Ethereum), Clarity code is designed to be <strong style={{ color: S.text }}>statically analyzable</strong> — smart contracts are easier to audit and verify.
          </p>

          <div style={{ background: `${S.purple}08`, border: `1px solid ${S.purple}25`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: S.purple }}>Clarity vs Solidity:</strong> Solidity is imperative (like JavaScript). Clarity is functional and requires explicit typing. This makes Clarity slower to write but safer — fewer reentrancy bugs, fewer unexpected state changes. Developers write less code but more bulletproof code.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Bitcoin Finality & Security Model</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Stacks achieves finality through Bitcoin. A Stacks block containing your transaction is final when:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li>The Stacks block is created (instant for practical purposes)</li>
            <li>The block header is included in the next Bitcoin block (~10 minutes)</li>
            <li>7 more Bitcoin blocks confirm it (~70 minutes total)</li>
          </ul>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            After 7 Bitcoin blocks, your Stacks transaction is <strong style={{ color: S.text }}>100% final</strong> — a Stacks validator would need to reorg Bitcoin to undo it. This is more secure than most Ethereum rollups (which rely on fraud proofs or centralized sequencers).
          </p>
        </section>

        {/* Understanding sBTC */}
        <section id="understanding-sbtc" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Understanding sBTC: The 1:1 BTC-Backed Token</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            sBTC is Stacks' native Bitcoin-backed token. You deposit BTC and receive 1 sBTC on Stacks. You can then use sBTC in smart contracts — swap on ALEX, lend to Arkadiko, provide liquidity on pools. sBTC is <strong style={{ color: S.text }}>the key capital bridge</strong> that brings Bitcoin liquidity into Stacks DeFi.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>How sBTC Minting Works (Current & Future)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
            {[
              {
                title: "Current (Federated)",
                desc: "Users deposit BTC to a federated peg operated by a committee of validators. The federation mints 1 sBTC. Decentralized in behavior but not in infrastructure.",
                color: S.orange,
              },
              {
                title: "Future (Satoshi Upgrade)",
                desc: "Self-custodial minting via ZK proofs. Users prove they locked BTC without intermediaries. sBTC becomes trustless — no federation required.",
                color: S.green,
              },
            ].map((item) => (
              <div key={item.title} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: item.color, marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>sBTC Key Metrics</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
            {[
              { key: "Total TVL", val: "~$308M (DefiLlama, March 2026)" },
              { key: "Peak TVL", val: "$600M+ (August 2025)" },
              { key: "Token Standard", val: "SIP-010 (Stacks equivalent of ERC-20)" },
              { key: "Peg Ratio", val: "1:1 BTC (should always be 1 sBTC = 1 BTC)" },
              { key: "Peg Risk", val: "Federation or ZK proof attack (low probability)" },
            ].map((item) => (
              <div key={item.key} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: `${S.orange}05`, border: `1px solid ${S.orange}15`, borderRadius: 8 }}>
                <span style={{ color: S.text2, fontSize: 13, fontWeight: 700 }}>{item.key}</span>
                <span style={{ color: S.text, fontSize: 13, fontWeight: 600 }}>{item.val}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            sBTC has been volatile — TVL peaked at $600M+ in August 2025 but declined as macro conditions deteriorated. The Satoshi Upgrades in 2026+ are designed to <strong style={{ color: S.text }}>improve capital efficiency and reduce peg risk</strong>, likely driving adoption back up.
          </p>
        </section>

        {/* Key Metrics & Market Position */}
        <section id="key-metrics" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Key Metrics & Market Position</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Understanding Stacks' market position helps you gauge its trajectory in 2026 and beyond.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>STX Token Metrics</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 24 }}>
            {[
              { metric: "Current Price", val: "$0.26", sub: "As of March 2026" },
              { metric: "Market Cap", val: "~$477M", sub: "Rank #101 by market cap" },
              { metric: "Supply (Circulating)", val: "~1.8B STX", sub: "Of 1.4B max supply" },
              { metric: "Staking Participation", val: "~13% of supply", sub: "7-14% APY in BTC" },
              { metric: "52-Week Range", val: "$0.18 - $0.89", sub: "High volatility" },
              { metric: "Dev Activity", val: "Moderate", sub: "Active Clarity ecosystem" },
            ].map((item) => (
              <div key={item.metric} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 11, color: S.text2, marginBottom: 4, textTransform: "uppercase", fontWeight: 700, letterSpacing: "0.05em" }}>{item.metric}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: S.blue, marginBottom: 2 }}>{item.val}</div>
                <div style={{ fontSize: 11, color: S.text2 }}>{item.sub}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>What Happened in Late 2025?</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            STX underperformed in 2025 — a core challenge Stacks is addressing. While Bitcoin and Ethereum rallied, STX struggled due to:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Unclear value prop</strong> — Traders debated whether STX was needed in a Bitcoin L2 (it is: mining, governance, stacking rewards)</li>
            <li><strong>sBTC still federated</strong> — Without self-custodial minting, sBTC felt less trustless than native Bitcoin</li>
            <li><strong>Small Clarity ecosystem</strong> — Fewer dApps and developers compared to Ethereum or Solana ecosystems</li>
            <li><strong>Macro headwinds</strong> — 2025 saw crypto market corrections; smaller-cap tokens suffered most</li>
          </ul>

          <div style={{ background: `${S.red}08`, border: `1px solid ${S.red}25`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
              <strong style={{ color: S.red }}>Key Challenge (2026 Solution):</strong> Stacks Labs under interim CEO Alex Miller is executing aggressively on the Satoshi Upgrades and Fireblocks integration (Feb 2026). These should unlock institutional demand and increase STX utility.
            </div>
          </div>
        </section>

        {/* Satoshi Upgrades */}
        <section id="satoshi-upgrades" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>The Satoshi Upgrades: ZK Proofs & Dual Stacking</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The Satoshi Upgrades are a suite of upcoming improvements in 2026+ that will fundamentally transform Stacks and its relationship with Bitcoin. These are not minor tweaks — they're game-changing features.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>1. Self-Custodial sBTC Minting (ZK Proofs)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Currently, sBTC requires a federation to mint. With this upgrade, users will use <strong style={{ color: S.text }}>Zero-Knowledge proofs</strong> to prove they locked BTC on Bitcoin without intermediaries. Users directly mint sBTC.
          </p>
          <div style={{ background: `${S.purple}08`, border: `1px solid ${S.purple}25`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: S.purple }}>Why ZK Proofs?</strong> Bitcoin doesn't have smart contracts. So sBTC can't automate the peg like traditional rollups. Instead, users prove via ZK that they locked BTC (verifiable proof, no trust required). This moves sBTC from "federated" to "trustless" — a massive conceptual shift.
            </p>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>2. Dual Stacking (Stack Both STX & BTC)</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Currently, stackers lock STX and earn BTC. Dual Stacking lets users lock <strong style={{ color: S.text }}>both STX and BTC simultaneously</strong> to:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li>Earn STX rewards (from Stacks inflation)</li>
            <li>Earn BTC yields (from PoX)</li>
            <li>Support Bitcoin's security directly (your locked BTC helps secure Bitcoin through Proof of Stake-like participation)</li>
          </ul>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            This is revolutionary. You no longer need to choose between staking Bitcoin or STX — you do both. Capital efficiency increases dramatically.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>3. Programmable BTC Vaults</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Today, smart contracts can only operate on sBTC (wrapped). Programmable BTC Vaults let smart contracts use <strong style={{ color: S.text }}>native BTC directly</strong> without wrapping. This means:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li>Deposit native BTC into a vault</li>
            <li>Use it in a smart contract (loan, swap, yield farming)</li>
            <li>Withdraw native BTC at any time</li>
          </ul>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            This eliminates the "wrapping tax" — you're not bridging to sBTC, you're using BTC directly. Capital in vaults is more liquid and atomically swappable.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>4. sBTC Multichain via Wormhole</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            sBTC will be bridged to Solana, Ethereum, and other chains via Wormhole, creating a unified BTC-backed liquidity layer across chains. Imagine seamlessly swapping sBTC on Ethereum to native BTC on Stacks — all while maintaining the 1:1 peg.
          </p>

          <div style={{ background: `${S.green}08`, border: `1px solid ${S.green}25`, borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: S.green, marginBottom: 8 }}>✓ Impact of Satoshi Upgrades</div>
            <ul style={{ paddingLeft: 20, color: S.text2, lineHeight: 1.8, fontSize: 13, margin: 0 }}>
              <li>Capital efficiency increases 2-3x (no wrapping tax)</li>
              <li>sBTC becomes trustless (users don't depend on federation)</li>
              <li>Bitcoin becomes "programmable" without changing Bitcoin itself</li>
              <li>Stacks becomes DeFi hub for Bitcoin economy</li>
            </ul>
          </div>
        </section>

        {/* sBTC vs Competitors */}
        <section id="sbtc-vs-competitors" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>sBTC vs Other Bitcoin DeFi Options</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            sBTC competes with other Bitcoin DeFi solutions. Each has tradeoffs. Here's the landscape:
          </p>

          <div style={{ overflowX: "auto", marginBottom: 20 }}>
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${S.border}` }}>
                  <th style={{ padding: "12px 10px", textAlign: "left", fontWeight: 800, color: S.blue }}>Aspect</th>
                  <th style={{ padding: "12px 10px", textAlign: "left", fontWeight: 800, color: S.blue }}>sBTC (Stacks)</th>
                  <th style={{ padding: "12px 10px", textAlign: "left", fontWeight: 800, color: S.orange }}>WBTC (Ethereum)</th>
                  <th style={{ padding: "12px 10px", textAlign: "left", fontWeight: 800, color: S.purple }}>tBTC (Threshold)</th>
                  <th style={{ padding: "12px 10px", textAlign: "left", fontWeight: 800, color: S.green }}>Babylon (Bitcoin Native)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Type", sbtc: "Federated (→ ZK)", wbtc: "Custodial", tbig: "Trustless", babylon: "L1 Staking" },
                  { aspect: "Backing", sbtc: "1:1 BTC (peg)", wbtc: "1:1 BTC (Custodian)", tbig: "1:1 BTC (Threshold Network)", babylon: "Native BTC" },
                  { aspect: "Smart Contracts?", sbtc: "Yes (Clarity)", wbtc: "Yes (on Ethereum)", tbig: "Yes (Ethereum/NEAR)", babylon: "No (Bitcoin L1)" },
                  { aspect: "Bitcoin Settlement", sbtc: "Yes", wbtc: "No", tbig: "Yes", babylon: "Yes (is Bitcoin)" },
                  { aspect: "Programmability", sbtc: "Full", wbtc: "EVM", tbig: "EVM/NEAR", babylon: "Limited" },
                  { aspect: "TVL (Mar 2026)", sbtc: "$308M", wbtc: "$6.5B+", tbig: "$450M+", babylon: "$10B+ (staking)" },
                  { aspect: "Risk Profile", sbtc: "Medium (federation → trustless)", wbtc: "High (custodian)", tbig: "Low (economic", babylon: "Low (Bitcoin security)" },
                ].map((row, i) => (
                  <tr key={row.aspect} style={{ borderBottom: `1px solid ${S.border}30` }}>
                    <td style={{ padding: "10px", fontWeight: 700, color: S.text }}>{row.aspect}</td>
                    <td style={{ padding: "10px", color: S.text2 }}>{row.sbtc}</td>
                    <td style={{ padding: "10px", color: S.text2 }}>{row.wbtc}</td>
                    <td style={{ padding: "10px", color: S.text2 }}>{row.tbig}</td>
                    <td style={{ padding: "10px", color: S.text2 }}>{row.babylon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Quick Comparison</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              {
                name: "WBTC",
                pros: "Huge liquidity ($6.5B+), simple wrapped token, Ethereum ecosystem",
                cons: "Centralized custodian (Wrapped risk), not Bitcoin-native",
                verdict: "Gold standard for EVM DeFi, but NOT trustless",
              },
              {
                name: "tBTC",
                pros: "Trustless (economic guarantees, threshold cryptography), Ethereum + NEAR compatible",
                cons: "Lower liquidity, more complex to mint/redeem, smaller ecosystem",
                verdict: "Trustless WBTC alternative, growing momentum",
              },
              {
                name: "Babylon Staking",
                pros: "Stake BTC natively on Bitcoin, no wrapping, Bitcoin security",
                cons: "No smart contracts, no DeFi (yet), limited yield strategies",
                verdict: "Bitcoin staking, not DeFi — complementary to sBTC",
              },
              {
                name: "sBTC (Stacks)",
                pros: "Full smart contracts on Bitcoin, Bitcoin settlement, Dual Stacking coming",
                cons: "Currently federated (though ZK upgrade coming), smaller ecosystem than WBTC",
                verdict: "Best for full Bitcoin programmability, improving trustlessness",
              },
            ].map((comp) => (
              <div key={comp.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, color: S.blue, marginBottom: 10 }}>{comp.name}</h4>
                <div style={{ fontSize: 12, color: S.text2, marginBottom: 6 }}>
                  <strong style={{ color: S.green }}>✓ Pros:</strong> {comp.pros}
                </div>
                <div style={{ fontSize: 12, color: S.text2, marginBottom: 10 }}>
                  <strong style={{ color: S.red }}>✗ Cons:</strong> {comp.cons}
                </div>
                <div style={{ fontSize: 11, color: S.text, padding: 8, background: `${S.blue}10`, borderRadius: 6, fontWeight: 700 }}>
                  {comp.verdict}
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginTop: 20 }}>
            <strong style={{ color: S.text }}>Bottom line:</strong> There's room for all of these. WBTC dominates EVM DeFi. tBTC is the trustless alternative. Babylon is native Bitcoin staking. sBTC is the Bitcoin L2 for programmability. They complement each other in a multi-layer Bitcoin economy.
          </p>
        </section>

        {/* Building on Stacks */}
        <section id="building-on-stacks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Building on Stacks: Clarity Language & Developer Ecosystem</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            If you want to build on Stacks, you'll need Clarity. The developer ecosystem is smaller than Ethereum's, but growing quickly with institutional backing.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Clarity Language Deep Dive</h3>
          <div style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20, fontFamily: "monospace", fontSize: 12 }}>
            <div style={{ color: S.green, marginBottom: 8 }}>// Example: Simple counter in Clarity</div>
            <div style={{ color: S.text2, lineHeight: 1.8 }}>
              <div>(define-data-var counter uint u0)</div>
              <div style={{ marginTop: 8 }}>(define-public (increment)</div>
              <div style={{ paddingLeft: 16 }}>(ok (var-set counter (+ (var-get counter) u1))))</div>
              <div style={{ marginTop: 8 }}>(define-read-only (get-counter)</div>
              <div style={{ paddingLeft: 16 }}>(ok (var-get counter)))</div>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Clarity is <strong style={{ color: S.text }}>functional, not object-oriented</strong>. It's more like Lisp or Scheme. Every function is deterministic — no side effects, no hidden state. This makes contracts safer but requires a different mental model from Solidity.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Developer Resources</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              { resource: "Clarity Documentation", link: "clarity-lang.org" },
              { resource: "Stacks Academy", link: "stacks.education" },
              { resource: "Stacks Grants Program", link: "stacks.org/grants" },
              { resource: "Hiro Dev Tools", link: "hiro.so" },
            ].map((item) => (
              <div key={item.resource} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 4 }}>{item.resource}</div>
                <div style={{ fontSize: 12, color: S.blue }}>→ {item.link}</div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Developer Ecosystem Status</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { metric: "Active Developers", status: "~500-1000 (growing)", color: S.yellow },
              { metric: "GitHub Activity", status: "Moderate (mostly Stacks Labs)", color: S.yellow },
              { metric: "Clarity Community", status: "Small but engaged", color: S.orange },
              { metric: "Dev Grants/Funding", status: "$500M+ Stacks Endowment available", color: S.green },
            ].map((item) => (
              <div key={item.metric} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: `${item.color}05`, border: `1px solid ${item.color}15`, borderRadius: 8 }}>
                <span style={{ color: S.text2, fontWeight: 700 }}>{item.metric}</span>
                <span style={{ color: S.text, fontWeight: 600 }}>{item.status}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginTop: 20 }}>
            <strong style={{ color: S.text }}>TL;DR for developers:</strong> Clarity is safer and more auditable than Solidity, but smaller ecosystem. If you want to build Bitcoin DeFi without learning a new language, Stacks forces you to learn Clarity — it's different, but not harder.
          </p>
        </section>

        {/* Stacks DeFi Ecosystem */}
        <section id="ecosystem" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Stacks DeFi Ecosystem: Key dApps & Protocols</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The Stacks ecosystem has several mature DeFi protocols. Here are the key ones:
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginBottom: 20 }}>
            {[
              {
                name: "ALEX (AMM & Lending)",
                desc: "The leading DEX on Stacks. Swap STX, sBTC, USDA. Provides liquidity and earn fees. Emerging yield farming.",
                tvl: "~$50M",
                color: S.blue,
              },
              {
                name: "Arkadiko (Lending & CDP)",
                desc: "Stacks' largest lending protocol. Deposit sBTC or STX, borrow USDA stablecoin. Earn yield on collateral.",
                tvl: "~$120M",
                color: S.purple,
              },
              {
                name: "StackingDAO",
                desc: "Simplified stacking. Deposit STX, receive stSTX (liquid stacking token). Earn BTC yield without 13-week lockup. Composable in DeFi.",
                tvl: "~$80M",
                color: S.green,
              },
              {
                name: "Velar (Trading & Market)",
                desc: "Spot and perpetual trading. Trade STX, sBTC, with up to 10x leverage. More complex than simple swaps.",
                tvl: "~$20M",
                color: S.orange,
              },
            ].map((app) => (
              <div key={app.name} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 12 }}>
                  <div>
                    <h4 style={{ fontSize: 15, fontWeight: 800, color: app.color, margin: 0, marginBottom: 4 }}>{app.name}</h4>
                    <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
                  </div>
                  <div style={{ textAlign: "right", minWidth: 100 }}>
                    <div style={{ fontSize: 12, color: S.text2, marginBottom: 2 }}>TVL</div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: app.color }}>{app.tvl}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>2026 Ecosystem Outlook</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            In 2026, expect:
          </p>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Fireblocks integration</strong> (Feb 2026) — Institutional custody and trading infrastructure for Stacks assets</li>
            <li><strong>New lending protocols</strong> — More sophisticated DeFi primitives (futures, options, synthetics)</li>
            <li><strong>Bitcoin bridge improvements</strong> — sBTC bridges to more chains, improving cross-chain liquidity</li>
            <li><strong>Enterprise applications</strong> — Real-world asset (RWA) tokenization on Bitcoin via Stacks</li>
          </ul>
        </section>

        {/* Risks & Considerations */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Risks & Considerations</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Stacks is promising, but not risk-free. Here are the key risks to understand:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                risk: "STX Token Underperformance",
                desc: "STX has underperformed relative to Bitcoin and Ethereum in 2025. The market questions STX's value. If Satoshi Upgrades don't deliver adoption, STX could remain weak.",
                severity: "HIGH",
              },
              {
                risk: "sBTC Federation Risk (Current)",
                desc: "Today, sBTC is federated. If the federation commits fraud or is compromised, sBTC holders lose funds. The ZK upgrade mitigates this, but isn't live yet.",
                severity: "MEDIUM",
              },
              {
                risk: "Small Developer Ecosystem",
                desc: "Clarity is harder to learn than Solidity. The Stacks developer ecosystem is 100x smaller than Ethereum's. Building DeFi is harder when there's less talent.",
                severity: "MEDIUM",
              },
              {
                risk: "Bitcoin Maxi Skepticism",
                desc: "Bitcoin maximalists argue smart contracts shouldn't run on Bitcoin at all. This cultural resistance could slow adoption. If Bitcoin culture rejects DeFi, Stacks struggles.",
                severity: "MEDIUM",
              },
              {
                risk: "Liquidity Risk",
                desc: "sBTC TVL is volatile (~$308M now, peaked at $600M+). If DeFi yields collapse, liquidity dries up. Recursive leverage can amplify losses.",
                severity: "MEDIUM",
              },
              {
                risk: "Satoshi Upgrades Execution",
                desc: "The Satoshi Upgrades are ambitious (ZK proofs, Dual Stacking, Vaults). If they're delayed or buggy, Stacks' 2026+ narrative collapses.",
                severity: "HIGH",
              },
            ].map((item) => (
              <div key={item.risk} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                  <h4 style={{ fontSize: 14, fontWeight: 800, color: item.severity === "HIGH" ? S.red : S.orange, margin: 0 }}>{item.risk}</h4>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4, background: item.severity === "HIGH" ? `${S.red}20` : `${S.orange}20`, color: item.severity === "HIGH" ? S.red : S.orange }}>
                    {item.severity}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: `${S.red}10`, border: `1px solid ${S.red}30`, borderRadius: 12, padding: 16, marginTop: 20 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: S.red, marginBottom: 10 }}>⚠️ Risk Summary for Investors</h3>
            <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.7, margin: 0 }}>
              Stacks is a <strong style={{ color: S.text }}>high-risk, high-reward bet</strong> on Bitcoin DeFi adoption. If the Satoshi Upgrades succeed and Bitcoin culture embraces smart contracts, STX and sBTC could 10x. If they fail or face resistance, you could lose 50%+ of your investment. Only invest capital you can afford to lose, and do your own research before stacking or lending.
            </p>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>How to Get Started with Stacks</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Ready to explore Stacks? Here's your path forward:
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 1: Get a Stacks Wallet</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
            {[
              {
                wallet: "Hiro Wallet",
                desc: "Official Stacks wallet. Browser extension & mobile app. Free, easy to use.",
              },
              {
                wallet: "Leather Wallet",
                desc: "Community fork of Hiro. Same functionality, slightly different UX.",
              },
            ].map((item) => (
              <div key={item.wallet} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 14 }}>
                <h4 style={{ fontSize: 13, fontWeight: 800, color: S.blue, marginBottom: 6 }}>{item.wallet}</h4>
                <p style={{ fontSize: 12, color: S.text2, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 2: Get STX or sBTC</h3>
          <ol style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li><strong>Buy STX on an exchange</strong> — Binance, Coinbase, Kraken list STX. Buy $100-500 to experiment.</li>
            <li><strong>Bridge BTC to sBTC</strong> — Use the sBTC bridge (bridge.stacks.co). Deposit BTC, receive sBTC on Stacks.</li>
            <li><strong>Swap on DEX</strong> — Use ALEX to swap STX ↔ sBTC if you need both.</li>
          </ol>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 3: Explore DeFi</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {[
              { action: "Stack STX", desc: "Lock STX in a stacking pool (StackingDAO) to earn BTC yields (~7-14% APY)" },
              { action: "Provide Liquidity", desc: "Add sBTC + STX to ALEX pool, earn trading fees" },
              { action: "Lend to Arkadiko", desc: "Deposit sBTC or STX, earn yield; borrow USDA stablecoin" },
              { action: "Trade on Velar", desc: "Execute more complex trades (futures, margin) if experienced" },
            ].map((item) => (
              <div key={item.action} style={{ display: "flex", gap: 12, padding: "10px 14px", background: `${S.blue}05`, border: `1px solid ${S.blue}15`, borderRadius: 8 }}>
                <span style={{ color: S.blue, fontWeight: 700, minWidth: 100 }}>{item.action}</span>
                <span style={{ color: S.text2, fontSize: 13 }}>{item.desc}</span>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Step 4: Stay Updated</h3>
          <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 1.9, fontSize: 14, marginBottom: 20 }}>
            <li>Follow @stacks on Twitter for official updates</li>
            <li>Join Stacks Discord (40K+ members) for community discussion</li>
            <li>Watch Stacks Labs GitHub for technical developments</li>
            <li>Monitor DefiLlama for sBTC TVL and DeFi metrics</li>
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQ_DATA.map((faq) => (
              <div key={faq.q} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, color: S.blue, marginBottom: 10 }}>Q: {faq.q}</h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>Related Resources</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Dive deeper into Bitcoin, Layer 2s, DeFi, and staking with these related guides:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {RESOURCES.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                style={{
                  background: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: 10,
                  padding: 16,
                  textDecoration: "none",
                  color: S.text,
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 800, color: S.blue, marginBottom: 4 }}>{resource.label}</div>
                <div style={{ fontSize: 12, color: S.text2 }}>→ Learn more</div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #58a6ff15, #58a6ff05)", border: "1px solid #58a6ff30", borderRadius: 14, padding: 28, textAlign: "center" }}>
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Ready to Explore Bitcoin Smart Contracts?</h2>
          <p style={{ fontSize: 14, color: S.text2, marginBottom: 20, lineHeight: 1.7 }}>
            Use degen0x tools to track your STX & sBTC portfolio, calculate stacking yields, and monitor DeFi protocols.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/tools/portfolio-tracker" style={{ padding: "10px 22px", borderRadius: 10, background: "#58a6ff20", border: "1px solid #58a6ff40", color: S.blue, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              📊 Portfolio Tracker
            </Link>
            <Link href="/tools/staking-apy" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.green}20`, border: `1px solid ${S.green}40`, color: S.green, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              🌾 Staking APY Calculator
            </Link>
            <Link href="/learn/defi-yield-strategies-2026" style={{ padding: "10px 22px", borderRadius: 10, background: `${S.orange}20`, border: `1px solid ${S.orange}40`, color: S.orange, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              💡 DeFi Yield Strategies
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ background: "#d2992215", border: "1px solid #d2992240", borderRadius: 10, padding: 14, marginTop: 32, fontSize: 12, color: S.yellow, lineHeight: 1.7 }}>
          ⚠️ <strong>Disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice. Cryptocurrency investments are highly volatile and risky. You could lose all invested capital. Stacks and sBTC are emerging technologies with significant execution and market risks. Always DYOR (Do Your Own Research), consult a financial advisor before investing, and only invest what you can afford to lose. degen0x does not provide investment advice or guarantee returns on stacking, lending, or DeFi yield.
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      <BackToTop />
    </main>
  );
}
