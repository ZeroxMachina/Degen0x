/**
 * Briefing → canonical learn-page cross-links.
 *
 * The briefing renderer (src/app/news/briefing/[slug]/page.tsx) reads
 * src/data/news-briefing.json (owned by the news-briefing scheduled task).
 * The JSON cannot be edited by build-cycle runners, so this map provides
 * a code-side overlay: when a briefing story matches one of the rules
 * below, the renderer surfaces an inline "Read the deep-dive guide" CTA
 * pointing to the canonical learn page.
 *
 * Two match strategies, evaluated in order:
 *   1. exactSlug — story.slug equals the key
 *   2. tokenMatch — every token in `tokens` (case-insensitive) appears in
 *      story.headline OR story.tldr OR story.slug
 *
 * Tokens are matched as substrings (not whole words) — keep them
 * specific enough that they don't false-positive on unrelated stories.
 */
export interface CrossLink {
  /** Path under SITE_URL, e.g. "/learn/fomc-fed-rate-crypto-guide". */
  href: string;
  /** Short label rendered in the CTA card. */
  label: string;
  /** One-liner shown under the label. */
  blurb: string;
}

interface SlugRule {
  kind: "exactSlug";
  slug: string;
  link: CrossLink;
}

interface TokenRule {
  kind: "tokenMatch";
  /** Every token must appear in the story's headline / tldr / slug. */
  tokens: string[];
  link: CrossLink;
}

type Rule = SlugRule | TokenRule;

const RULES: Rule[] = [
  // ── 2026-04-30 briefing-13 anchors (post-FOMC tape, BTC ETF
  //    inflows, DeFi exploit run, market-structure bill slip,
  //    Solana Alpenglow upgrade) ──────────────────────────────
  {
    kind: "exactSlug",
    slug: "spot-btc-etfs-april-inflows-strategy-accumulation",
    link: {
      href: "/learn/bitcoin-etf-institutional-guide-2026",
      label: "Bitcoin ETFs — institutional adoption guide",
      blurb:
        "How $128B+ AUM, IBIT-led inflows, and Strategy's accumulation thesis are reshaping BTC market structure.",
    },
  },
  {
    kind: "exactSlug",
    slug: "defi-606m-april-exploits-kelp-dao-contagion",
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "April-2026 hack run — Drift + Kelp DAO post-mortem",
      blurb:
        "Inside the $606M April exploit cluster — attack paths on Drift and Kelp DAO, and lessons for DeFi risk.",
    },
  },
  {
    kind: "exactSlug",
    slug: "btc-april-close-defensive-76k-yields",
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "Why a 5% 30-year yield and oil-led risk-off are pressuring BTC into the May rate-path window.",
    },
  },
  {
    kind: "exactSlug",
    slug: "senate-market-structure-bill-may-slip",
    link: {
      href: "/learn/clarity-act-crypto-guide",
      label: "CLARITY Act — crypto market-structure deep-dive",
      blurb:
        "What the Senate market-structure markup actually covers, the CLARITY Act framework, and how a May slip changes the path to law.",
    },
  },
  {
    kind: "exactSlug",
    slug: "solana-alpenglow-simd-0326-150ms-finality",
    link: {
      href: "/learn/solana-alpenglow-consensus-upgrade-guide-2026",
      label: "Solana Alpenglow — consensus-upgrade guide",
      blurb:
        "What SIMD-0326 actually changes, how 150ms finality is achieved by moving validator votes off-chain, and the implications for MEV and DEX UX.",
    },
  },

  // ── 2026-04-30 briefing-11 anchors (post-FOMC + SEC-CFTC) ──
  {
    kind: "exactSlug",
    slug: "fed-holds-3-75-four-dissents-powell-exit",
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "Post-decision read-through: how a 4-dissent hold and the Powell-exit handover reprice BTC, ETH and the front of the curve.",
    },
  },
  {
    kind: "exactSlug",
    slug: "sec-cftc-token-taxonomy-commodities",
    link: {
      href: "/learn/sec-cftc-digital-commodity-classification-guide-2026",
      label: "SEC × CFTC digital-commodity classification — 2026 guide",
      blurb:
        "Inside the joint guidance that brands BTC, ETH, SOL, XRP and LINK as digital commodities — what it unlocks for spot ETFs, futures listings and bank custody.",
    },
  },
  {
    kind: "exactSlug",
    slug: "megaeth-mega-tge-coinbase-prelisting",
    link: {
      href: "/learn/megaeth-real-time-blockchain-layer-2-guide-2026",
      label: "MegaETH — real-time L2 deep-dive",
      blurb:
        "The KPI-gated TGE template, the real-time-block thesis and how the MEGA listing reshapes Coinbase's fast-L2 lineup.",
    },
  },
  {
    kind: "exactSlug",
    slug: "meta-usdc-creator-payouts-solana-polygon",
    link: {
      href: "/learn/stablecoin-payments-infrastructure-guide-2026",
      label: "Stablecoin payments infrastructure — 2026 guide",
      blurb:
        "Why Meta picked Solana and Polygon for USDC creator payouts in Colombia and the Philippines, and where it sits in the broader on-chain payments stack.",
    },
  },
  {
    // Closes the briefing-11 LEAD-5 honest-miss noted in the H11
    // build-cycle log (Cycle-12 H11). Routes to the blockchain-gaming
    // canonical, which has the deepest Ronin / Sky Mavis section and
    // an Axie Infinity case study.
    kind: "exactSlug",
    slug: "coinbase-wron-usd-spot-listing",
    link: {
      href: "/learn/blockchain-gaming-gamefi-guide-2026",
      label: "Blockchain gaming & GameFi — 2026 guide",
      blurb:
        "Why Ronin is purpose-built for gaming, the Sky Mavis backstory, and where WRON's tier-one US fiat pair fits in the on-chain gaming stack.",
    },
  },

  // ── 2026-04-30 briefing-00 anchors ─────────────────────────
  {
    kind: "exactSlug",
    slug: "macro-pile-on-april-30-2026-fomc-ecb-boe-gdp-pce",
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "How rate decisions transmit into BTC, ETH and the broader risk curve, with playbooks for decision-day positioning.",
    },
  },
  {
    kind: "exactSlug",
    slug: "megaeth-tge-april-30-2026",
    link: {
      href: "/learn/megaeth-real-time-blockchain-layer-2-guide-2026",
      label: "MegaETH — real-time L2 deep-dive",
      blurb:
        "What MegaETH actually ships, the real-time-block thesis, performance trade-offs, and how it compares to existing L2s.",
    },
  },
  {
    kind: "exactSlug",
    slug: "april-2026-crypto-hacks-620m-kelp-drift",
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "Drift Protocol $285M hack — post-mortem",
      blurb:
        "Inside the Drift drain that headlined April's $620M hack run — attack path, on-chain trace, and lessons for perp DEX risk.",
    },
  },
  {
    kind: "exactSlug",
    slug: "meta-stablecoin-creator-payouts-visa-7b-run-rate",
    link: {
      href: "/learn/stablecoin-payments-infrastructure-guide-2026",
      label: "Stablecoin payments infrastructure — 2026 guide",
      blurb:
        "How Stripe, Visa, and the new payment rails route stablecoins to creators and merchants — and what it means for issuers.",
    },
  },
  {
    kind: "exactSlug",
    slug: "western-union-usdpt-solana-may-2026",
    link: {
      href: "/learn/stablecoin-payments-infrastructure-guide-2026",
      label: "Stablecoin payments infrastructure — 2026 guide",
      blurb:
        "Why settlement-rail incumbents are launching their own stablecoins, and how Solana fits into the cross-border remittance stack.",
    },
  },

  // ── Token-match fallbacks (catch future briefings that re-anchor
  //    on the same topics without us touching this file). ───────
  {
    kind: "tokenMatch",
    tokens: ["fomc"],
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "How rate decisions transmit into crypto markets, with decision-day playbooks.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["megaeth"],
    link: {
      href: "/learn/megaeth-real-time-blockchain-layer-2-guide-2026",
      label: "MegaETH — real-time L2 deep-dive",
      blurb:
        "Real-time blocks, the L2 thesis, and how MegaETH stacks against existing rollups.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["sec", "cftc"],
    link: {
      href: "/learn/sec-cftc-digital-commodity-classification-guide-2026",
      label: "SEC × CFTC digital-commodity classification — 2026 guide",
      blurb:
        "The 5-asset taxonomy, what counts as a digital commodity, and how it reshapes US market structure.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["digital", "commodities"],
    link: {
      href: "/learn/sec-cftc-digital-commodity-classification-guide-2026",
      label: "SEC × CFTC digital-commodity classification — 2026 guide",
      blurb:
        "The 5-asset taxonomy that brands BTC, ETH, SOL, XRP and LINK as digital commodities — and what changes for listings.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["powell", "exit"],
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "What the Powell handover means for the Fed-path narrative and the crypto risk curve into late 2026.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["kelp", "rseth"],
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "April-2026 hack run — post-mortem cluster",
      blurb:
        "Drift, Kelp DAO, and the broader $620M April exploit cluster — attack paths and lessons.",
    },
  },
  {
    // Generalised WRON / Ronin fallback so future briefings that
    // re-anchor on the Coinbase listing or any Ronin-gaming story
    // still resolve without us touching this file.
    kind: "tokenMatch",
    tokens: ["wron", "ronin"],
    link: {
      href: "/learn/blockchain-gaming-gamefi-guide-2026",
      label: "Blockchain gaming & GameFi — 2026 guide",
      blurb:
        "Ronin's gaming-first L2 design, RON/WRON token mechanics, and the Sky Mavis ecosystem behind Axie Infinity.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["coinbase", "wron"],
    link: {
      href: "/learn/blockchain-gaming-gamefi-guide-2026",
      label: "Blockchain gaming & GameFi — 2026 guide",
      blurb:
        "What a tier-one US fiat pair means for Ronin, gaming-token liquidity, and the broader on-chain gaming stack.",
    },
  },

  // ── briefing-13 generalised fallbacks ──────────────────────
  {
    kind: "tokenMatch",
    tokens: ["alpenglow"],
    link: {
      href: "/learn/solana-alpenglow-consensus-upgrade-guide-2026",
      label: "Solana Alpenglow — consensus-upgrade guide",
      blurb:
        "How Alpenglow rewires Solana consensus for ~150ms finality and what it changes for MEV and DEX execution.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["clarity", "act"],
    link: {
      href: "/learn/clarity-act-crypto-guide",
      label: "CLARITY Act — crypto market-structure deep-dive",
      blurb:
        "The bill that decides if a token is a commodity or security — what it codifies and the path to law.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["market", "structure"],
    link: {
      href: "/learn/clarity-act-crypto-guide",
      label: "CLARITY Act — crypto market-structure deep-dive",
      blurb:
        "Why every market-structure markup is really a CLARITY-Act jurisdictional fight between the SEC and CFTC.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["spot", "btc", "etfs"],
    link: {
      href: "/learn/bitcoin-etf-institutional-guide-2026",
      label: "Bitcoin ETFs — institutional adoption guide",
      blurb:
        "How spot BTC ETF inflows, IBIT dominance and corporate accumulation are reshaping the BTC market.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["strategy", "btc"],
    link: {
      href: "/learn/bitcoin-etf-institutional-guide-2026",
      label: "Bitcoin ETFs — institutional adoption guide",
      blurb:
        "Strategy's playbook in context: how corporate BTC stacking interacts with the spot-ETF flow regime.",
    },
  },
];

/**
 * Find the first canonical-page CTA that applies to a given briefing
 * story. Returns null if no rule matches.
 */
export function findBriefingCrossLink(story: {
  slug: string;
  headline: string;
  tldr: string;
}): CrossLink | null {
  // Pass 1: exact-slug rules (highest precision).
  for (const rule of RULES) {
    if (rule.kind === "exactSlug" && rule.slug === story.slug) {
      return rule.link;
    }
  }
  // Pass 2: token-match rules (fallback, lower precision).
  const haystack = `${story.headline} ${story.tldr} ${story.slug}`.toLowerCase();
  for (const rule of RULES) {
    if (rule.kind !== "tokenMatch") continue;
    if (rule.tokens.every((t) => haystack.includes(t.toLowerCase()))) {
      return rule.link;
    }
  }
  return null;
}
