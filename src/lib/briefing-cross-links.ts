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
  // ── 2026-05-01 briefing-09 anchors (BTC $76,200 floor + 64% odds
  //    Kalshi reclaim LEAD-1, GENIUS Act June 2026 comment-window
  //    LEAD-2, JPMorgan $90K→$77K bitcoin production-cost cut LEAD-3,
  //    Standard Chartered SOL $250 / 2030 $2,000 payments pivot
  //    LEAD-4, Galaxy $216M Q1 loss + Novogratz AI-data-center
  //    pivot LEAD-5). Cost-basis collision at $77K (LEAD-1 spot ↔
  //    LEAD-3 marginal cost) is the headline pattern; cluster
  //    half-life 2-4 cycles (anchor decays once BTC moves >5% off
  //    the $76K floor). ────────────────────────────────────────
  {
    kind: "exactSlug",
    slug: "btc-clings-76k-prediction-markets-64-pct",
    link: {
      href: "/learn/crypto-liquidations-defi-leverage-guide-2026",
      label: "Crypto liquidations — DeFi leverage guide",
      blurb:
        "Why BTC pinned the 23.6% Fib retracement at $76,200 with $110M+ in longs liquidated — how cascade mechanics, funding-rate flips and Kalshi reclaim odds interact at key technical support.",
    },
  },
  {
    kind: "exactSlug",
    slug: "genius-act-stablecoin-rules-june-deadline",
    link: {
      href: "/learn/genius-act-stablecoin-guide",
      label: "GENIUS Act — stablecoin charter playbook",
      blurb:
        "What the June 2026 FDIC, Treasury and FinCEN comment windows actually move: the GENIUS Act framework, the SEC-CFTC token taxonomy, and how a fragmented rollout reshapes who can issue stablecoins onshore.",
    },
  },
  {
    kind: "exactSlug",
    slug: "jpmorgan-bitcoin-production-cost-77k",
    link: {
      href: "/learn/bitcoin-mining-guide-2026",
      label: "Bitcoin mining — economics and cost-basis guide",
      blurb:
        "Why JPMorgan's $90K → $77K marginal-cost cut matters: production-cost models are the most-watched floor for miner viability, and a $77K floor a hair above the $76,200 spot leaves thin margin for higher-cost rigs.",
    },
  },
  {
    kind: "exactSlug",
    slug: "stanchart-solana-2026-target-250",
    link: {
      href: "/learn/jupiter-solana-guide",
      label: "Solana ecosystem — DeFi & payments deep-dive",
      blurb:
        "How Standard Chartered's near-term SOL cut to $250 frames against the long-run $2,000 payments thesis — memecoin volume erosion, the $1.75B May altcoin-unlock window, and the stablecoin-rails reframing for Solana through 2030.",
    },
  },
  {
    kind: "exactSlug",
    slug: "galaxy-q1-216m-loss-data-centers",
    link: {
      href: "/learn/decentralized-gpu-compute-networks-render-akash-guide-2026",
      label: "Decentralized GPU compute — Render & Akash guide",
      blurb:
        "Why crypto-native firms like Galaxy are bridging into AI data-center expansion to ride compute demand and backstop slowing trading revenue — and how Render, Akash and DePIN compute networks fit alongside hyperscaler capex.",
    },
  },

  // ── 2026-05-01 briefing-09 token-match fallbacks (forward-value
  //    overlay so the BTC-76K-floor / $77K-mining-cost / SOL-$250 /
  //    Galaxy-AI-data-center anchors keep resolving as briefings
  //    roll over and the cluster compounds across the 2-4 cycle
  //    half-life window) ──────────────────────────────────────
  {
    kind: "tokenMatch",
    tokens: ["bitcoin", "76,200", "support"],
    link: {
      href: "/learn/crypto-liquidations-defi-leverage-guide-2026",
      label: "Crypto liquidations — DeFi leverage guide",
      blurb:
        "How the $76,200 23.6% Fib floor reads against cascade mechanics, funding-rate flips and Kalshi reclaim odds — a leverage-and-liquidation primer for the BTC support-floor regime.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["bitcoin", "production", "cost"],
    link: {
      href: "/learn/bitcoin-mining-guide-2026",
      label: "Bitcoin mining — economics and cost-basis guide",
      blurb:
        "Why bitcoin's marginal production cost is the most-watched miner-viability floor — how hash-rate, energy mix and ASIC efficiency price into the $77K cost-basis read.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["jpmorgan", "bitcoin"],
    link: {
      href: "/learn/bitcoin-mining-guide-2026",
      label: "Bitcoin mining — economics and cost-basis guide",
      blurb:
        "How JPMorgan's bitcoin production-cost estimate frames the miner-margin floor and why a downward revision tightens stress for higher-cost rigs.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["standard", "chartered", "solana"],
    link: {
      href: "/learn/jupiter-solana-guide",
      label: "Solana ecosystem — DeFi & payments deep-dive",
      blurb:
        "When a top-tier bank revises its SOL target, what's actually moving: memecoin volume, May altcoin unlocks, and the long-run stablecoin / micropayments reframing for Solana.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["galaxy", "data", "centers"],
    link: {
      href: "/learn/decentralized-gpu-compute-networks-render-akash-guide-2026",
      label: "Decentralized GPU compute — Render & Akash guide",
      blurb:
        "How crypto-native firms pivoting to AI data centers stack against Render, Akash and DePIN compute networks — the compute-demand thesis behind the Galaxy / Novogratz reframe.",
    },
  },

  // ── 2026-04-30 briefing-18 anchors (post-FOMC pivot — RWA + Japan
  //    payments + April-hack-month consolidation: SEC-CFTC joint
  //    guidance recur-evolved 5+ cycles [DEFERRED — anchor exhaustion],
  //    BTC defensive April close post-FOMC, April $620M hack-month
  //    monthly summary, Aave Horizon RWA $550M tokenized Treasuries,
  //    XRP Rakuten Pay [DEFERRED — no canonical target]) ─────────
  {
    kind: "exactSlug",
    slug: "bitcoin-april-close-defensive-yields",
    link: {
      href: "/learn/fomc-fed-rate-crypto-guide",
      label: "FOMC & Fed-rate impact on crypto — full guide",
      blurb:
        "How the post-FOMC tape — 30-year yield at 5%, ETH tagged $2,220 support, $149.7M in liquidations — sets up May seasonality and the June rate-path window.",
    },
  },
  {
    kind: "exactSlug",
    slug: "april-2026-worst-crypto-hack-month",
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "Drift + Kelp DAO — April-2026 hack-cluster post-mortem",
      blurb:
        "Inside the $620M April hack-month consolidation — Drift's $285M April-1 drain plus Kelp DAO's $292M April-19 exploit account for the vast majority of the haul, with Wasabi, CoW Swap, Dango and Silo rounding out the bridge + admin-key failure mode.",
    },
  },
  {
    kind: "exactSlug",
    slug: "aave-horizon-rwa-550m-deposits",
    link: {
      href: "/learn/aave-v4-guide",
      label: "Aave v4 — protocol architecture and Horizon market",
      blurb:
        "How Aave's institutional-only Horizon market hit $550M in tokenized-Treasury collateral against a $6B TVL drawdown — and how the v4 architecture and the April-27 Solana deploy via Sunrise extend the multi-chain footprint.",
    },
  },

  // ── 2026-04-30 briefing-17 anchors (security-exploit cluster pivot:
  //    Wasabi admin-key drain, Lazarus April $577M, banks-vs-GENIUS-Act,
  //    BTC volume freefall, 100+ firms push CLARITY Act) ─────────
  {
    kind: "exactSlug",
    slug: "wasabi-protocol-admin-key-hack-4-5m",
    link: {
      href: "/learn/multisig-wallets-shared-crypto-security-guide-2026",
      label: "Multisig wallets — shared-key security guide",
      blurb:
        "Why a single deployer key drained Wasabi for $4.5M — and how multisig deployers, timelocks and shared-signer setups close this exact attack path on perp DEX vaults.",
    },
  },
  {
    kind: "exactSlug",
    slug: "lazarus-april-2026-577m-trm-labs",
    link: {
      href: "/learn/north-korea-lazarus-crypto-hacks-guide-2026",
      label: "North Korea / Lazarus crypto hacks — full guide",
      blurb:
        "Inside Lazarus's $577M April run across KelpDAO and Drift — TTPs, OFAC reach, and how 76% of 2026 crypto theft now traces back to one DPRK crew.",
    },
  },
  {
    kind: "exactSlug",
    slug: "banks-genius-act-delay-agora-charter",
    link: {
      href: "/learn/genius-act-stablecoin-guide",
      label: "GENIUS Act — stablecoin charter playbook",
      blurb:
        "Why bank lobbyists are pushing a 60-day delay while Agora sprints for a federal stablecoin charter — the OCC framework, dual-track rules and what changes if rollout slips.",
    },
  },
  {
    kind: "exactSlug",
    slug: "bitcoin-trading-volume-collapse-warning",
    link: {
      href: "/learn/bitcoin-safe-haven-guide-2026",
      label: "Bitcoin as a safe-haven — 2026 guide",
      blurb:
        "Why BTC trading-volume freefalls historically resolve into defensive regimes, and how the safe-haven framing reads when participation is thinning into FOMC.",
    },
  },
  {
    kind: "exactSlug",
    slug: "crypto-firms-senate-clarity-act-markup",
    link: {
      href: "/learn/clarity-act-crypto-guide",
      label: "CLARITY Act — crypto market-structure deep-dive",
      blurb:
        "What the 100+ firm-signed letter is asking for: a Senate markup that codifies the SEC/CFTC split and gives commodity-side issuers a clear path under CLARITY.",
    },
  },

  // ── 2026-04-30 briefing-16 anchors (Iran-strike crypto sell-off,
  //    BTC ETF 3rd-consec outflow, WU USDPT, Solana Alpenglow,
  //    AllUnity EURAU MiCA stablecoin) ─────────────────────────
  {
    kind: "exactSlug",
    slug: "iran-strike-fears-hammer-crypto-btc-eth-week-lows",
    link: {
      href: "/learn/bitcoin-safe-haven-guide-2026",
      label: "Bitcoin as a safe-haven — 2026 guide",
      blurb:
        "How geopolitical shocks like Iran-strike risk and Brent crude spikes interact with the BTC safe-haven thesis at week-low prints.",
    },
  },
  {
    kind: "exactSlug",
    slug: "bitcoin-etfs-third-straight-outflow-day-138m",
    link: {
      href: "/learn/bitcoin-etf-institutional-guide-2026",
      label: "Bitcoin ETFs — institutional adoption guide",
      blurb:
        "Why three straight outflow days led by IBIT and FBTC undercut the April-absorbed-$1.7B framing and what it signals about institutional positioning into May macro.",
    },
  },
  {
    kind: "exactSlug",
    slug: "western-union-usdpt-solana-may-launch",
    link: {
      href: "/learn/stablecoin-payments-infrastructure-guide-2026",
      label: "Stablecoin payments infrastructure — 2026 guide",
      blurb:
        "Why a 170-year remittance incumbent picked Solana for USDPT, and where the chain sits versus Tron-USDT in the cross-border settlement stack.",
    },
  },
  {
    kind: "exactSlug",
    slug: "solana-alpenglow-upgrade-finality-150ms",
    link: {
      href: "/learn/solana-alpenglow-consensus-upgrade-guide-2026",
      label: "Solana Alpenglow — consensus-upgrade guide",
      blurb:
        "How Alpenglow compresses Solana finality from ~12s to 150ms, the Votor/Rotor architecture, and the implications for MEV and DEX UX.",
    },
  },
  {
    kind: "exactSlug",
    slug: "allunity-eurau-euro-stablecoin-solana",
    link: {
      href: "/learn/mica-regulation-eu-crypto-compliance-guide-2026",
      label: "MiCA — EU crypto compliance guide",
      blurb:
        "How MiCA's EMT classification and reserve rules shape euro-pegged stablecoins like EURAU, and what a Solana port adds to EU on-chain payments.",
    },
  },

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

  // ── briefing-16 generalised fallbacks ──────────────────────
  {
    kind: "tokenMatch",
    tokens: ["iran", "strike"],
    link: {
      href: "/learn/bitcoin-safe-haven-guide-2026",
      label: "Bitcoin as a safe-haven — 2026 guide",
      blurb:
        "How Middle-East geopolitical shocks transmit through oil prices into BTC's safe-haven framing.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["etf", "outflow"],
    link: {
      href: "/learn/bitcoin-etf-institutional-guide-2026",
      label: "Bitcoin ETFs — institutional adoption guide",
      blurb:
        "How spot BTC ETF outflows reshape the IBIT-led flow regime and what they signal about institutional positioning.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["eurau"],
    link: {
      href: "/learn/mica-regulation-eu-crypto-compliance-guide-2026",
      label: "MiCA — EU crypto compliance guide",
      blurb:
        "How MiCA's EMT classification governs euro-pegged stablecoins like EURAU and what a multi-chain port unlocks.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["allunity"],
    link: {
      href: "/learn/mica-regulation-eu-crypto-compliance-guide-2026",
      label: "MiCA — EU crypto compliance guide",
      blurb:
        "AllUnity, EURAU and the MiCA EMT track for licensed euro stablecoins on multi-chain rails.",
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

  // ── briefing-17 generalised fallbacks (security-exploit cluster) ──
  {
    kind: "tokenMatch",
    tokens: ["wasabi"],
    link: {
      href: "/learn/multisig-wallets-shared-crypto-security-guide-2026",
      label: "Multisig wallets — shared-key security guide",
      blurb:
        "How shared-signer / timelocked deployer setups close the admin-key compromise path that drained Wasabi.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["admin", "key"],
    link: {
      href: "/learn/multisig-wallets-shared-crypto-security-guide-2026",
      label: "Multisig wallets — shared-key security guide",
      blurb:
        "Why single-EOA admin keys keep beating audits, and how multisig deployers and timelocks change the threat model.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["lazarus"],
    link: {
      href: "/learn/north-korea-lazarus-crypto-hacks-guide-2026",
      label: "North Korea / Lazarus crypto hacks — full guide",
      blurb:
        "TTPs, laundering paths and OFAC reach behind the DPRK crew responsible for ~76% of 2026 crypto theft.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["trm", "labs"],
    link: {
      href: "/learn/north-korea-lazarus-crypto-hacks-guide-2026",
      label: "North Korea / Lazarus crypto hacks — full guide",
      blurb:
        "How TRM Labs attributes hack flows to Lazarus and why state-actor concentration reshapes the DeFi defense problem.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["genius", "act"],
    link: {
      href: "/learn/genius-act-stablecoin-guide",
      label: "GENIUS Act — stablecoin charter playbook",
      blurb:
        "What the federal-stablecoin-charter regime actually requires of issuers and how the OCC framework lines up against state-track rules.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["stablecoin", "charter"],
    link: {
      href: "/learn/genius-act-stablecoin-guide",
      label: "GENIUS Act — stablecoin charter playbook",
      blurb:
        "Why an issuer like Agora pushes for federal status under GENIUS, and what the dual-track rules mean for USDC, USDP and bank-issued tokens.",
    },
  },

  // ── briefing-18 generalised fallbacks (post-FOMC pivot — RWA +
  //    Japan payments + April-hack-month consolidation). These
  //    catch future briefings that re-anchor on the same themes
  //    without us touching this file. ──────────────────────────
  {
    kind: "tokenMatch",
    tokens: ["aave", "horizon"],
    link: {
      href: "/learn/aave-v4-guide",
      label: "Aave v4 — protocol architecture and Horizon market",
      blurb:
        "How Aave's institutional-only Horizon market opens tokenized-Treasury collateral to qualified entities and where it sits in the v4 architecture.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["horizon", "rwa"],
    link: {
      href: "/learn/rwa-tokenization-real-world-assets-guide-2026",
      label: "RWA tokenization — real-world-asset guide",
      blurb:
        "Why tokenized US Treasuries are the cleanest TradFi-to-DeFi bridge yet, and how Aave Horizon's $550M deposits change the institutional-RWA flow regime.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["tokenized", "treasuries"],
    link: {
      href: "/learn/rwa-tokenization-real-world-assets-guide-2026",
      label: "RWA tokenization — real-world-asset guide",
      blurb:
        "How tokenized US Treasuries serve as on-chain collateral for stablecoin loans without forcing institutions to sell the underlying.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["hack", "month"],
    link: {
      href: "/learn/north-korea-lazarus-crypto-hacks-guide-2026",
      label: "North Korea / Lazarus crypto hacks — full guide",
      blurb:
        "Why April finished the worst hack month in over a year — Drift + Kelp DAO drains alone account for the bulk, with Lazarus attribution driving 76% of 2026 theft.",
    },
  },
  {
    kind: "tokenMatch",
    tokens: ["bridge", "failures"],
    link: {
      href: "/learn/drift-protocol-285m-hack-analysis-2026",
      label: "Drift + Kelp DAO — April-2026 hack-cluster post-mortem",
      blurb:
        "Why bridge plumbing and admin-key compromises — not smart-contract math — drove the largest losses in the April-2026 hack month.",
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
