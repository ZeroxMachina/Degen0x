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
    tokens: ["kelp", "rseth"],
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "April-2026 hack run — post-mortem cluster",
      blurb:
        "Drift, Kelp DAO, and the broader $620M April exploit cluster — attack paths and lessons.",
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
