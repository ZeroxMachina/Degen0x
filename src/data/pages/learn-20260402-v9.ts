// ─── Learn Pages: April 2, 2026 (Build v9) ─────────────────────────────────
// Topics: Bitcoin Ordinals & Runes Guide, Yield Tokenization & Pendle Guide

import { PageData } from "@/lib/types";

export const bitcoinOrdinalsRunesBrc20Guide2026Page: PageData = {
  slug: "/learn/bitcoin-ordinals-runes-brc20-guide-2026",
  title: "Bitcoin Ordinals & Runes Guide 2026: NFTs & Tokens on BTC | degen0x",
  description:
    "Complete guide to Bitcoin Ordinals, BRC-20, and Runes in 2026. Learn how NFTs and fungible tokens work on Bitcoin, compare standards, and understand the risks.",
  category: "learn",
  subcategory: "bitcoin",
  tags: ["bitcoin-ordinals", "runes", "brc-20", "bitcoin-nfts", "inscriptions", "casey-rodarmor", "UTXO", "fungible-tokens", "bitcoin-tokens", "satoshis"],
  publishedAt: "2026-04-02T00:00:00Z",
  updatedAt: "2026-04-02T00:00:00Z",
  difficulty: "intermediate",
  readingTime: 13,
  wordCount: 2800,
  author: "degen0x",
  status: "queued",
  seo: {
    targetKeyword: "bitcoin ordinals runes guide 2026",
    secondaryKeywords: [
      "bitcoin ordinals explained",
      "runes protocol bitcoin",
      "brc-20 tokens",
      "bitcoin nfts",
      "ordinals vs runes",
      "bitcoin inscriptions",
    ],
    schemas: ["Article", "FAQPage"],
    internalLinks: [
      "/learn/bitcoin-layer-2-guide-2026",
      "/learn/btcfi-bitcoin-defi-guide-2026",
      "/learn/crypto-wallet-security-guide-2026",
      "/learn/tokenomics-crypto-token-economics-guide-2026",
    ],
  },
  toc: [
    "What Are Bitcoin Ordinals?",
    "How Ordinal Inscriptions Work",
    "BRC-20 Tokens Explained",
    "The Runes Protocol: Bitcoin's Native Token Standard",
    "Ordinals vs BRC-20 vs Runes Comparison",
    "The Bitcoin NFT & Token Ecosystem in 2026",
    "How to Trade Ordinals and Runes",
    "Risks and Challenges",
    "FAQ",
  ],
  faqs: [
    { q: "What are Bitcoin Ordinals?", a: "Bitcoin Ordinals are a system created by Casey Rodarmor in January 2023 that assigns a unique sequential number to every individual satoshi (the smallest unit of Bitcoin). This numbering system allows data — images, text, code — to be inscribed directly onto individual sats, creating Bitcoin-native NFTs without requiring a sidechain or separate token." },
    { q: "What is the difference between BRC-20 and Runes?", a: "BRC-20 tokens use Ordinals inscriptions to create fungible tokens on Bitcoin but rely on an off-chain indexer and create 'junk' UTXOs that bloat the network. Runes, launched in April 2024, use Bitcoin's native UTXO model via OP_RETURN, are more efficient, don't create UTXO bloat, and are natively compatible with Bitcoin's transaction structure." },
    { q: "How much does it cost to inscribe an Ordinal?", a: "The cost depends on Bitcoin network fees and the size of the inscription data. During low-fee periods, a small text inscription might cost $5-15. Image inscriptions (which use more block space) can cost $50-200+. During high-fee periods like the Runes launch, fees spiked significantly. Always check current mempool conditions before inscribing." },
    { q: "Are Bitcoin Ordinals and Runes a good investment?", a: "The Runes market has cooled significantly from its 2024 peak, with total market cap around $96.2M. DOG is the largest Runes token at ~$71M market cap. These are highly speculative, illiquid assets with immature tooling. Approach with extreme caution and never invest more than you can afford to lose. This is not financial advice." },
    { q: "What wallets support Bitcoin Ordinals and Runes?", a: "Specialized Bitcoin wallets are needed to manage Ordinals and Runes. Popular options include Xverse, Leather (formerly Hiro), Magic Eden's Bitcoin wallet, and Unisat. Standard Bitcoin wallets like Ledger can hold ordinals but may not display them properly. Always use a wallet that understands inscription data to avoid accidentally spending inscribed sats." },
    { q: "Will Bitcoin Ordinals survive long-term?", a: "Ordinals face an ongoing philosophical debate within the Bitcoin community between 'purists' who want Bitcoin used solely for payments/store-of-value and 'innovators' who see programmability as Bitcoin's next evolution. The technology is permanent — inscriptions are immutable on-chain — but the market and ecosystem around them remains uncertain. Long-term survival depends on sustained developer activity and user demand." },
  ],
};

export const yieldTokenizationPendleGuide2026Page: PageData = {
  slug: "/learn/yield-tokenization-pendle-guide-2026",
  title: "Yield Tokenization & Pendle Guide 2026: Fixed DeFi Yield | degen0x",
  description:
    "Master yield tokenization with Pendle Finance in 2026. Learn how PT/YT tokens work, lock in fixed DeFi yields, and explore the Ethena-Pendle-Aave flywheel.",
  category: "learn",
  subcategory: "defi",
  tags: ["yield-tokenization", "pendle", "principal-token", "yield-token", "fixed-yield", "DeFi", "structured-products", "ethena", "USDe", "vaults"],
  publishedAt: "2026-04-02T00:00:00Z",
  updatedAt: "2026-04-02T00:00:00Z",
  difficulty: "advanced",
  readingTime: 15,
  wordCount: 3800,
  author: "degen0x",
  status: "queued",
  seo: {
    targetKeyword: "yield tokenization pendle guide 2026",
    secondaryKeywords: [
      "pendle finance how it works",
      "principal token yield token",
      "fixed yield DeFi",
      "yield tokenization explained",
      "DeFi structured products",
      "ethena pendle aave",
    ],
    schemas: ["Article", "FAQPage"],
    internalLinks: [
      "/learn/restaking-eigenlayer-guide-2026",
      "/learn/yield-farming-defi-strategies-guide-2026",
      "/learn/stablecoins-explained-guide-2026",
      "/learn/liquid-staking-tokens-guide-2026",
      "/learn/crypto-lending-borrowing-defi-guide-2026",
    ],
  },
  toc: [
    "What Is Yield Tokenization?",
    "How Pendle Finance Works",
    "Understanding PT and YT Tokens",
    "The DeFi Yield Flywheel: Ethena → Pendle → Aave",
    "Yield Tokenization Protocols Compared",
    "Strategies for Using Yield Tokenization",
    "DeFi Vaults and Structured Products in 2026",
    "Risks and Challenges",
    "FAQ",
  ],
  faqs: [
    { q: "What is yield tokenization?", a: "Yield tokenization is the process of splitting a yield-bearing asset into two separate tokens: a Principal Token (PT) that represents the underlying value, and a Yield Token (YT) that represents all future yield until a maturity date. This allows traders to buy fixed-rate yield (via PT) or speculate on variable rates (via YT), similar to how bonds work in traditional finance." },
    { q: "How does Pendle Finance work?", a: "Pendle works in three steps: First, it wraps yield-bearing tokens (like stETH or USDe) into Standardized Yield (SY) tokens via EIP-5115. Then it splits SY into Principal Tokens (PT) and Yield Tokens (YT). Finally, these are traded on Pendle's specialized AMM. At maturity, PT holders redeem their principal 1:1, while YT holders collect accumulated yield." },
    { q: "What is the difference between PT and YT?", a: "PT (Principal Token) represents the right to redeem the underlying asset at maturity — it trades at a discount and increases in value as maturity approaches, like a zero-coupon bond. YT (Yield Token) represents the right to all yield generated until maturity — its value decreases toward zero as maturity nears. Buying PT = locking in a fixed rate; buying YT = betting yields will be higher than the implied rate." },
    { q: "How much TVL does Pendle have?", a: "As of early 2026, Pendle's TVL is approximately $3.5-4.1 billion across 11 supported chains, down from a peak of $6.2 billion in Q2 2025. The protocol has settled over $69.8 billion cumulatively. Ethena's USDe accounts for roughly 60% of total protocol TVL through popular yield looping strategies." },
    { q: "Is yield tokenization risky?", a: "Key risks include: smart contract vulnerabilities across multiple protocol layers, impermanent loss from Pendle's AMM, maturity timing risk (YT value drops to zero at expiry), oracle/price feed inaccuracies, and underlying yield compression. The composability that makes yield tokenization powerful also stacks risk — a failure in Ethena, for example, would cascade through Pendle and Aave positions." },
    { q: "Can I earn fixed yields in DeFi?", a: "Yes — buying Pendle PT tokens is the primary way to lock in a fixed DeFi yield. When you buy PT at a discount (e.g., $0.95 per $1 of underlying) with a 6-month maturity, you're locking in roughly 10% annualized. At maturity, you redeem PT for the full underlying value. This is analogous to buying a Treasury bill in traditional finance, but entirely on-chain." },
  ],
};
