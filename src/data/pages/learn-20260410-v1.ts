// ─── Learn Pages: April 10, 2026 (Build v1) ─────────────────────────────────
// Topic: Sanctum — Solana Liquid Staking Infinity Pool Guide 2026

import { PageData } from "@/lib/types";

export const sanctumSolanaLstInfinityGuidePage: PageData = {
  slug: "/learn/sanctum-solana-liquid-staking-infinity-guide-2026",
  title: "Sanctum Guide 2026 — Solana Liquid Staking, Infinity Pool & CLOUD",
  description:
    "Complete guide to Sanctum, the universal liquid staking layer on Solana. Learn how the Infinity pool unifies LST liquidity, how the Router and Reserve work, and what CLOUD tokenomics mean in 2026.",
  category: "learn",
  subcategory: "liquid-staking",
  tags: [
    "Sanctum",
    "CLOUD",
    "INF",
    "Solana",
    "liquid-staking",
    "LST",
    "Infinity",
    "Router",
    "Reserve",
    "JitoSOL",
  ],
  publishedAt: "2026-04-10T00:00:00Z",
  updatedAt: "2026-04-10T00:00:00Z",
  difficulty: "intermediate",
  readingTime: 10,
  wordCount: 1600,
  author: "degen0x",
  status: "published",
  seo: {
    targetKeyword: "Sanctum Solana liquid staking guide 2026",
    secondaryKeywords: [
      "Sanctum Infinity explained",
      "CLOUD token utility",
      "INF LST Solana",
      "Sanctum Reserve instant unstake",
      "Solana LST aggregator",
      "universal liquid staking Solana",
    ],
    schemas: ["Article", "FAQPage"],
    internalLinks: [
      "/learn/jito-solana-mev-liquid-staking-guide-2026",
      "/learn/kamino-finance-solana-lending-liquidity-guide-2026",
      "/learn/drift-protocol-solana-perps-dex-guide-2026",
      "/learn/restaking-wars-eigenlayer-symbiotic-karak-guide-2026",
    ],
  },
  toc: [
    "What Is Sanctum?",
    "The Infinity Pool & INF",
    "Sanctum Router",
    "Sanctum Reserve",
    "CLOUD Tokenomics",
    "Sanctum vs Jito vs Marinade",
    "Risks & Considerations",
    "FAQ",
  ],
  faqs: [
    { q: "What is Sanctum?", a: "Sanctum is a universal liquid staking layer on Solana that provides shared infrastructure — Infinity, Router, and Reserve — so any validator or project can launch its own LST with instant liquidity from day one." },
    { q: "What is the Infinity pool?", a: "Infinity is a multi-LST pool that holds a basket of whitelisted Solana LSTs and issues the INF token, giving holders diversified validator exposure and deep swap liquidity between LSTs." },
    { q: "What does CLOUD do?", a: "CLOUD is Sanctum's governance and incentives token, used to vote on Infinity composition, fee parameters, and LST whitelisting, and to direct incentive emissions across the Sanctum LST ecosystem." },
    { q: "How is Sanctum different from Jito?", a: "Jito issues a single flagship LST (JitoSOL) with its own validator set. Sanctum is horizontal infrastructure that powers hundreds of LSTs — including JitoSOL — and unifies their liquidity through Infinity and the Reserve." },
  ],
};
