/**
 * Blog / News CMS Library
 * ─────────────────────────────────────────────────────────────────
 * Lightweight content management for degen0x blog posts.
 * Posts are defined as TypeScript objects (no external CMS needed).
 * Supports categories, tags, author info, and reading time estimation.
 *
 * Sprint 11 — Content Agent
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown content
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string; // ISO date
  updatedAt?: string;
  featured: boolean;
  coverImage?: string;
  readingTime?: number; // minutes
}

export type BlogCategory =
  | "market-analysis"
  | "defi-updates"
  | "regulation"
  | "guides"
  | "project-reviews"
  | "opinion"
  | "news";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

const AUTHORS: Record<string, BlogAuthor> = {
  degen0x: {
    name: "degen0x Team",
    role: "Research & Analysis",
  },
  alex: {
    name: "Alex Chen",
    role: "DeFi Analyst",
  },
  maya: {
    name: "Maya Rodriguez",
    role: "Market Strategist",
  },
  kai: {
    name: "Kai Nakamura",
    role: "Regulation & Policy",
  },
};

function estimateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 250));
}

const CATEGORY_META: Record<BlogCategory, { label: string; color: string; icon: string }> = {
  "market-analysis": { label: "Market Analysis", color: "#6366f1", icon: "📊" },
  "defi-updates": { label: "DeFi Updates", color: "#8b5cf6", icon: "🏦" },
  regulation: { label: "Regulation", color: "#ef4444", icon: "⚖️" },
  guides: { label: "Guides", color: "#22c55e", icon: "📚" },
  "project-reviews": { label: "Project Reviews", color: "#06b6d4", icon: "🔍" },
  opinion: { label: "Opinion", color: "#f59e0b", icon: "💡" },
  news: { label: "News", color: "#ec4899", icon: "📰" },
};

export function getCategoryMeta(category: BlogCategory) {
  return CATEGORY_META[category];
}

/**
 * Seed blog posts — first 6 articles for launch
 */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bitcoin-dominance-2026-what-it-means",
    title: "Bitcoin Dominance in 2026: What It Means for Your Portfolio",
    excerpt:
      "Bitcoin dominance has shifted dramatically in early 2026. We break down what this means for altcoin allocation and how to position your portfolio.",
    content: `Bitcoin dominance — the percentage of total crypto market cap held by BTC — has become one of the most-watched metrics in 2026. After hovering around 48-52% throughout much of 2025, BTC dominance has begun a notable shift that carries implications for every crypto investor.

## What's Driving the Shift?

Several macro factors are converging. The approval of spot Ethereum ETFs in late 2025 created new institutional flows into ETH, while layer-2 ecosystems (particularly Base, Arbitrum, and zkSync) saw explosive growth in total value locked.

At the same time, Bitcoin's post-halving supply dynamics continue to play out. The April 2024 halving reduced miner rewards to 3.125 BTC per block, and the supply squeeze is now fully reflected in on-chain metrics.

## Portfolio Implications

For investors, the dominance cycle offers actionable signals. Historically, declining BTC dominance has correlated with "altcoin season" — periods where smaller-cap assets outperform Bitcoin on a risk-adjusted basis.

Our DCA Calculator and Portfolio Tracker tools can help you model different allocation scenarios based on dominance trends.

## Key Takeaways

The current environment suggests maintaining a balanced allocation. Our analysis recommends keeping 40-55% in BTC, 20-30% in large-cap alts (ETH, SOL), and the remainder in high-conviction smaller positions — always with proper risk management.`,
    category: "market-analysis",
    tags: ["bitcoin", "portfolio", "dominance", "2026", "altcoins"],
    author: AUTHORS.maya,
    publishedAt: "2026-03-12",
    featured: true,
  },
  {
    slug: "defi-lending-rates-march-2026",
    title: "DeFi Lending Rates: Where to Find the Best Yields in March 2026",
    excerpt:
      "A comprehensive breakdown of current DeFi lending rates across Aave, Compound, Morpho, and emerging protocols.",
    content: `The DeFi lending landscape has matured considerably heading into March 2026. With over $180B in total value locked across lending protocols, competition for depositors has driven yields to interesting levels.

## Top Rates This Month

Stablecoin yields have stabilized in the 4-8% APY range across major protocols, with higher rates available on newer platforms offering liquidity mining incentives. Our Lending Comparison tool tracks these rates in real-time.

## Aave v4 Impact

Aave's v4 upgrade introduced modular lending markets that allow for customized risk parameters. This has opened up higher-yield opportunities for users willing to engage with less liquid collateral types.

## Risk Considerations

Always evaluate protocol risk alongside yield. Our platform rates protocols based on audit history, TVL stability, governance structure, and insurance coverage availability.`,
    category: "defi-updates",
    tags: ["defi", "lending", "yields", "aave", "stablecoins"],
    author: AUTHORS.alex,
    publishedAt: "2026-03-11",
    featured: true,
  },
  {
    slug: "crypto-tax-reporting-2026-what-changed",
    title: "Crypto Tax Reporting in 2026: What Changed and How to Prepare",
    excerpt:
      "New IRS reporting requirements for crypto took effect in January 2026. Here is what you need to know and how to stay compliant.",
    content: `The IRS has implemented significant changes to cryptocurrency tax reporting for the 2025 tax year (filed in 2026). These changes affect virtually every crypto user in the United States.

## Key Changes

The most impactful change is the expanded Form 1099-DA, which centralized exchanges must now issue for all dispositions. This means the IRS will have a clearer picture of trading activity than ever before.

Additionally, the cost basis reporting rules now require exchanges to report on a per-wallet basis, creating potential complications for users who transferred assets between platforms.

## How to Prepare

Start by aggregating all your transaction history across exchanges and wallets. Our Tax Calculator tool can import data from major platforms and generate preliminary reports.

## Recommendations

We strongly recommend using dedicated crypto tax software for the 2025 filing year. Our comparison of the best crypto tax software covers the top options and their features.`,
    category: "regulation",
    tags: ["taxes", "IRS", "regulation", "compliance", "2026"],
    author: AUTHORS.kai,
    publishedAt: "2026-03-10",
    featured: false,
  },
  {
    slug: "layer-2-comparison-base-arbitrum-zksync",
    title: "Layer 2 Showdown: Base vs Arbitrum vs zkSync in 2026",
    excerpt:
      "An in-depth comparison of the three leading Ethereum L2 networks by transaction volume, fees, ecosystem, and developer activity.",
    content: `Ethereum layer-2 scaling solutions have evolved from experimental technology to essential infrastructure. In 2026, three networks dominate: Base (Coinbase), Arbitrum (Offchain Labs), and zkSync (Matter Labs).

## Transaction Volume & Fees

Base has emerged as the clear leader in transaction count, driven by its integration with Coinbase and growing social-fi ecosystem. Arbitrum maintains the highest TVL and the deepest DeFi ecosystem. zkSync leads in privacy-preserving use cases with its ZK-proof architecture.

## Developer Ecosystem

All three L2s support Solidity, making migration straightforward. However, each has unique tooling and incentive programs that affect builder decisions.

## Our Verdict

The "best" L2 depends entirely on your use case. For DeFi power users, Arbitrum's mature ecosystem is hard to beat. For mainstream adoption and ease of use, Base's Coinbase integration provides unmatched onboarding. For privacy and cutting-edge ZK tech, zkSync leads.

Use our Gas Tracker tool to compare real-time fees across all three networks.`,
    category: "project-reviews",
    tags: ["layer-2", "base", "arbitrum", "zksync", "ethereum", "scaling"],
    author: AUTHORS.alex,
    publishedAt: "2026-03-09",
    featured: false,
  },
  {
    slug: "5-mistakes-new-crypto-investors-make",
    title: "5 Costly Mistakes New Crypto Investors Still Make in 2026",
    excerpt:
      "Despite crypto going mainstream, these five errors continue to cost beginners thousands. Learn how to avoid them.",
    content: `Even as crypto adoption reaches new highs in 2026, newcomers continue to fall into the same traps that have plagued the space for years. Here are five mistakes we see most frequently — and how to avoid them.

## 1. Not Using a Hardware Wallet

With exchange hacks still occurring (albeit less frequently), self-custody remains essential for any holding above a few hundred dollars. Our wallet comparison tool can help you find the right hardware wallet.

## 2. Ignoring Tax Obligations

Many new investors assume crypto transactions are not taxable or too small to matter. This is incorrect. Every swap, sale, and even some transfers create taxable events.

## 3. FOMO Buying at Market Tops

The fear of missing out drives emotional buying decisions. Our DCA Calculator demonstrates how dollar-cost averaging consistently outperforms lump-sum buying at market peaks.

## 4. Neglecting Security Best Practices

Using the same password across exchanges, skipping 2FA, and clicking phishing links remain the top vectors for fund loss. Our security guide covers essential protection measures.

## 5. Not Diversifying

Concentrating an entire portfolio in a single token — especially a memecoin — has wiped out countless portfolios. Proper diversification across asset types and risk levels is fundamental.`,
    category: "guides",
    tags: ["beginners", "mistakes", "security", "investing", "guide"],
    author: AUTHORS.degen0x,
    publishedAt: "2026-03-08",
    featured: false,
  },
  {
    slug: "ethereum-pectra-upgrade-what-to-expect",
    title: "Ethereum Pectra Upgrade: What It Means for Stakers and Users",
    excerpt:
      "Ethereum's Pectra upgrade brings account abstraction and validator improvements. We break down the key changes and their impact on the ecosystem.",
    content: `Ethereum's Pectra upgrade — combining the Prague execution-layer and Electra consensus-layer forks — represents one of the most user-facing improvements since the Merge. Scheduled for early 2026, it introduces changes that every ETH holder should understand.

## Key EIPs in Pectra

The most impactful proposal is EIP-7702, which brings native account abstraction to Ethereum. This means externally owned accounts (regular wallets) can temporarily act as smart contract wallets during transactions, enabling features like gas sponsorship, batch transactions, and social recovery.

For validators, EIP-7251 raises the maximum effective balance from 32 ETH to 2,048 ETH. This allows large staking operations to consolidate validators, reducing network overhead while maintaining the same economic security.

## Impact on Gas Fees

EIP-7691 increases blob throughput, which directly benefits layer-2 rollups. More blob space means lower data availability costs for L2s, which translates to cheaper transactions for end users on Base, Arbitrum, zkSync, and others.

## What Stakers Should Do

If you are running validators, the consolidation opportunity means fewer maintenance overhead for the same rewards. Solo stakers can now compound rewards beyond 32 ETH without spinning up additional validators.

Use our Staking APY calculator to model your expected returns under the new parameters.`,
    category: "news",
    tags: ["ethereum", "pectra", "upgrade", "staking", "EIP", "account-abstraction"],
    author: AUTHORS.alex,
    publishedAt: "2026-03-12",
    featured: true,
  },
  {
    slug: "stablecoin-regulation-2026-global-overview",
    title: "Stablecoin Regulation in 2026: A Global Overview",
    excerpt:
      "From MiCA in Europe to new US frameworks, stablecoin regulation is reshaping the crypto landscape. Here is where things stand worldwide.",
    content: `Stablecoins have moved from the periphery to the center of crypto regulation in 2026. With over $200B in combined market cap, regulators worldwide have accelerated frameworks to govern these digital dollars.

## United States

The US stablecoin framework, signed into law in late 2025, establishes a dual licensing regime. Federally chartered banks can issue stablecoins under OCC supervision, while non-bank issuers must obtain state licenses with reserve requirements of at least 100% in cash and short-term Treasuries.

## European Union — MiCA in Full Effect

The Markets in Crypto-Assets regulation now fully applies across all 27 EU member states. Stablecoin issuers must maintain reserves in EU-based banks and undergo regular audits. This has consolidated the market around a handful of compliant issuers.

## Asia-Pacific

Singapore and Hong Kong have emerged as regulatory leaders, with clear frameworks that balance innovation and consumer protection. Japan's updated Payment Services Act now explicitly covers stablecoins backed by yen.

## Impact on DeFi

Regulated stablecoins are increasingly integrated into DeFi protocols, with some platforms offering differentiated rates for regulated vs. unregulated stablecoins. Our Lending Comparison tool now tracks regulatory status alongside yields.

## What This Means for You

For everyday users, regulated stablecoins offer stronger guarantees around reserve backing and redemption rights. For DeFi participants, the evolving landscape means paying attention to which stablecoins protocols accept.`,
    category: "regulation",
    tags: ["stablecoins", "regulation", "MiCA", "compliance", "2026"],
    author: AUTHORS.kai,
    publishedAt: "2026-03-11",
    featured: false,
  },
  {
    slug: "solana-vs-ethereum-2026-ecosystem-comparison",
    title: "Solana vs Ethereum in 2026: An Honest Ecosystem Comparison",
    excerpt:
      "The Solana-Ethereum rivalry has intensified. We compare both ecosystems across DeFi, NFTs, developer activity, and user experience.",
    content: `The Solana vs Ethereum debate has evolved well beyond simple TPS comparisons. In 2026, both ecosystems have matured into distinct platforms with different strengths, weaknesses, and user bases.

## Transaction Throughput & Cost

Solana continues to offer sub-cent transaction fees with near-instant finality. Ethereum L1 remains expensive for direct usage, but the combined L2 ecosystem now processes more transactions than Solana at comparable costs.

## DeFi Ecosystem

Ethereum (including L2s) holds roughly 60% of total DeFi TVL, with a deeper and more diverse protocol ecosystem. Solana's DeFi has grown rapidly, particularly in perpetual DEXs and liquid staking, but trails in lending market depth and composability.

## Developer Activity

Both ecosystems have thriving developer communities, though they differ in philosophy. Ethereum's developer base is larger overall, while Solana attracts builders focused on high-performance, consumer-facing applications.

## NFTs & Consumer Apps

Solana has become the preferred chain for NFT trading volume, driven by lower fees and faster minting. Ethereum retains the high-value collectible market and benefits from broader institutional interest.

## Our Assessment

Both chains serve different needs well. Ethereum plus L2s offers the deepest financial infrastructure and strongest security guarantees. Solana excels in consumer applications, trading, and use cases where speed and cost matter most.

Compare trading costs across both ecosystems with our Exchange Fees tool.`,
    category: "project-reviews",
    tags: ["solana", "ethereum", "comparison", "ecosystem", "defi", "2026"],
    author: AUTHORS.maya,
    publishedAt: "2026-03-10",
    featured: false,
  },
  {
    slug: "memecoins-are-they-worth-it-2026",
    title: "Memecoins in 2026: Speculation, Culture, or Legitimate Investment?",
    excerpt:
      "The memecoin market has evolved beyond DOGE and SHIB. We analyze whether the new generation of memecoins deserves a place in your portfolio.",
    content: `Memecoins have become an undeniable force in crypto. In 2026, the memecoin sector represents a significant portion of daily trading volume, with new launches happening constantly across Solana, Base, and other chains.

## The Evolution of Memecoins

What started with Dogecoin in 2013 has transformed into a complex ecosystem of community-driven tokens, each with its own culture, utility (or lack thereof), and market dynamics.

## The Case For (Small) Memecoin Allocation

Some portfolio strategists argue that a 1-5% memecoin allocation can add asymmetric upside potential to an otherwise conservative portfolio. The key is strict position sizing and acceptance of total loss.

## The Case Against

Critics correctly point out that the vast majority of memecoins go to zero. Survivorship bias makes the winners look more common than they are. For every 100x memecoin, thousands have lost investors everything.

## Our Take

Memecoins are best treated as entertainment with potential upside — not as investments. If you participate, use only money you can afford to lose completely, and use our Token Screener to check basic contract safety before buying.`,
    category: "opinion",
    tags: ["memecoins", "speculation", "investing", "risk", "opinion"],
    author: AUTHORS.degen0x,
    publishedAt: "2026-03-07",
    featured: false,
  },
  {
    slug: "crypto-wallet-security-guide-2026",
    title: "The Complete Crypto Wallet Security Guide for 2026",
    excerpt:
      "From seed phrase management to hardware wallets and phishing defense — a comprehensive guide to protecting your digital assets in 2026.",
    content: `Cryptocurrency theft surpassed $3.8 billion in 2025, a stark reminder that security in crypto is not optional. Whether you hold $100 or $100,000 in digital assets, the same fundamental security practices apply.

## The Foundation: Seed Phrase Security

Your seed phrase is the master key to your entire crypto portfolio. If someone gains access to it, they own your funds — permanently and irreversibly. The number one rule: never store your seed phrase digitally. No screenshots, no notes apps, no cloud storage, no email drafts.

Instead, write it on paper and store it in a secure location. For larger holdings, invest in a metal seed storage device that survives fire and flooding. Keep at least two copies in geographically separate locations.

## Hardware Wallets Are Non-Negotiable

For any holding you cannot afford to lose, a hardware wallet is essential. Devices like Ledger and Trezor keep your private keys in a secure element that never exposes them to your computer. This means even if your computer is compromised with malware, your keys remain safe.

Always purchase directly from the manufacturer — never from third-party resellers who could tamper with the device. Update firmware regularly and verify transaction details on the device screen before signing.

## Phishing: The Biggest Threat in 2026

The majority of crypto losses in 2026 come from social engineering and phishing, not technical exploits. Attackers create convincing fake websites, impersonate support staff in DMs, and run malicious ads on search engines that mimic legitimate DeFi protocols.

Protect yourself by bookmarking all DeFi sites you use and never clicking links from DMs, emails, or search results. Use our Wallet Security Audit tool to assess your current security posture and get personalized recommendations.

## Token Approvals: The Hidden Risk

When you interact with DeFi protocols, you grant token approvals that allow smart contracts to spend your tokens. Many users grant unlimited approvals without realizing it. If a protocol is compromised, attackers can drain your approved tokens even if you have not interacted with the protocol recently.

Regularly audit and revoke unused approvals using tools like revoke.cash. Our guide recommends checking approvals monthly as part of your security routine.

## Key Takeaways

Crypto security is a practice, not a one-time setup. The strongest technical security means nothing if you fall for a social engineering attack. Stay vigilant, use hardware wallets, protect your seed phrase, and regularly audit your security posture.`,
    category: "guides",
    tags: ["security", "wallets", "hardware-wallet", "phishing", "2026"],
    author: AUTHORS.degen0x,
    publishedAt: "2026-03-12",
    featured: true,
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.map((post) => ({
    ...post,
    readingTime: estimateReadingTime(post.content),
  })).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post) return [];

  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score:
        (p.category === post.category ? 3 : 0) +
        p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((p) => p.post);
}
