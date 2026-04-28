// Author profile data — used by /about/authors/[slug]/page.tsx and AuthorAttribution.
// Ramp-to-8 Phase 1a: real bio pages with Person JSON-LD for E-E-A-T.

export interface AuthorProfile {
  slug: string;
  handle: string;
  role: string;
  philosophy: string;
  bio: string;
  expertise: string[];
  sections: string[];       // which site sections this author owns
  sameAs: string[];         // profile URLs for JSON-LD sameAs
  credentials: string[];    // disclosures / experience bullets
  avatarColor: string;      // hex, for JSON-LD image fallback
}

export const AUTHOR_PROFILES: readonly AuthorProfile[] = [
  {
    slug: '0xmachina',
    handle: '0xMachina',
    role: 'Founder & Architect',
    philosophy: '"Sound money or no money."',
    bio: 'Systems thinker obsessed with building permissionless infrastructure. Code is law. Austrian economics devotee. Running nodes since the Silk Road era. Doesn\'t trust — verifies.',
    expertise: [
      'Bitcoin protocol internals, UTXO model, script semantics',
      'DeFi protocol architecture and economic design',
      'Self-custody operational security',
      'Austrian monetary theory',
    ],
    sections: ['tools', 'ecosystem'],
    sameAs: [
      'https://github.com/ZeroxMachina',
      'https://x.com/degen0x',
    ],
    credentials: [
      'Building degen0x since 2024 — 1,800+ published pages',
      'Running a full Bitcoin node since 2014',
      'Reviewed every tool shipped on this site before release',
    ],
    avatarColor: '#1f6feb',
  },
  {
    slug: 'satoshighost',
    handle: 'SatoshiGhost',
    role: 'Lead Researcher',
    philosophy: '"If you can\'t read the contract, you don\'t own the asset."',
    bio: 'On-chain forensics and protocol analysis. Former TradFi quant. Has traced every major DeFi exploit in real-time. Can read smart contracts faster than most read English.',
    expertise: [
      'Smart contract auditing (Solidity, Vyper, Cairo)',
      'Cross-chain bridge risk analysis',
      'Liquidity flow and MEV forensics',
      'Tokenomics design review',
    ],
    sections: ['defi-lending', 'trading', 'investing'],
    sameAs: [
      'https://x.com/degen0x',
    ],
    credentials: [
      'Covered 120+ protocol post-mortems',
      'Former TradFi quantitative researcher',
      'Contributed research to on-chain investigation reports',
    ],
    avatarColor: '#a371f7',
  },
  {
    slug: 'degensensei',
    handle: 'DegenSensei',
    role: 'Content Lead',
    philosophy: '"Everyone\'s a genius in a bull market. We write for the bear."',
    bio: 'Translates complex DeFi mechanics into human language. Aped into 200+ protocols for research. Believes the best education comes from getting rekt at least once.',
    expertise: [
      'Educational crypto content for new users',
      'Protocol comparison methodology',
      'Reader-first explanations of technical topics',
      'Risk communication',
    ],
    sections: ['learn', 'courses', 'compare'],
    sameAs: [
      'https://x.com/degen0x',
    ],
    credentials: [
      'Authored 500+ guide and comparison articles',
      'Personally tested every protocol covered in /learn',
      'Every /compare page reviewed against our published methodology',
    ],
    avatarColor: '#d29922',
  },
  {
    slug: 'nullpointer',
    handle: 'NullPointer',
    role: 'Data Engineer',
    philosophy: '"Data delayed is data denied."',
    bio: 'Builds data pipelines that keep degen0x running in real-time. Obsessed with API uptime, caching, sub-second latency. Thinks decentralization will eventually make centralized APIs obsolete.',
    expertise: [
      'Crypto market-data pipeline design',
      'CoinGecko / DefiLlama / Dune integration patterns',
      'Exchange fee schedules, orderbook microstructure',
      'Cache invalidation and rate-limit engineering',
    ],
    sections: ['exchanges'],
    sameAs: [
      'https://x.com/degen0x',
    ],
    credentials: [
      'Owns every exchange review on degen0x',
      'Data pipelines handle 20M+ requests/month',
      'Cross-validates fees against live exchange APIs quarterly',
    ],
    avatarColor: '#238636',
  },
  {
    slug: 'cipherpunk-42',
    handle: 'CipherPunk_42',
    role: 'Security & QA',
    philosophy: '"Verify, then verify again."',
    bio: 'Audits every line of code before production. Paranoid about supply chain attacks, XSS, data leakage. Hardware wallet collector. Trust but verify, then trust no one.',
    expertise: [
      'Hardware wallet operational security',
      'Custody architecture and seed-phrase handling',
      'Supply-chain attack analysis',
      'Web application security (XSS, CSRF, token storage)',
    ],
    sections: ['wallets', 'insurance', 'crypto-cards'],
    sameAs: [
      'https://x.com/degen0x',
    ],
    credentials: [
      'Owns every wallet and crypto-card review on degen0x',
      'Tested 40+ hardware wallets with hands-on setup',
      'Runs the pre-publish security review on new pages',
    ],
    avatarColor: '#da3633',
  },
];

export function getAuthorProfile(slug: string): AuthorProfile | undefined {
  const norm = slug.toLowerCase();
  return AUTHOR_PROFILES.find((p) => p.slug === norm || p.handle.toLowerCase() === norm);
}

export function getAuthorProfileByHandle(handle: string): AuthorProfile | undefined {
  return AUTHOR_PROFILES.find((p) => p.handle.toLowerCase() === handle.toLowerCase());
}
