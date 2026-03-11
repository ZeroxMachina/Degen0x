import { Product, ComparisonItem } from "@/lib/types";

export const nftMarketplaces: Product[] = [
  {
    name: "OpenSea",
    slug: "opensea",
    rating: 4.7,
    description:
      "OpenSea is the largest and most established NFT marketplace, supporting Ethereum, Polygon, Solana, Arbitrum, Avalanche, BNB Chain, and more. It offers the widest selection of NFT collections with an intuitive interface suitable for both creators and collectors.",
    pros: [
      "Largest NFT marketplace by volume and collection count",
      "Multi-chain support across Ethereum, Polygon, Solana, and more",
      "User-friendly interface suitable for beginners",
      "Powerful search and filtering tools for discovery",
      "Free NFT minting with lazy minting feature",
    ],
    cons: [
      "2.5% marketplace fee is higher than some competitors",
      "Has experienced phishing attacks targeting users",
      "Customer support response times can be slow",
      "Occasional issues with counterfeit or stolen NFT listings",
    ],
    fees: "2.5% marketplace fee",
    bestFor: "General NFT collecting & beginners",
    affiliateUrl: "https://cryptodegen.com/go/opensea",
    category: "nfts",
    featured: true,
  },
  {
    name: "Blur",
    slug: "blur",
    rating: 4.6,
    description:
      "Blur is a professional NFT marketplace built for serious traders, offering zero marketplace fees, real-time floor price tracking, and advanced portfolio analytics. It has rapidly become the leading platform by Ethereum trading volume thanks to its speed and trader-focused tools.",
    pros: [
      "Zero marketplace fees for buyers and sellers",
      "Lightning-fast interface optimized for rapid trading",
      "Real-time floor tracking and portfolio analytics",
      "Blend lending protocol for NFT-backed loans",
      "BLUR token rewards for active traders",
    ],
    cons: [
      "Steep learning curve for NFT newcomers",
      "Ethereum-only with no multi-chain support",
      "Limited discovery tools for browsing new collections",
      "Interface prioritizes speed over aesthetics",
    ],
    fees: "0% marketplace fee (optional creator royalties)",
    bestFor: "Professional NFT traders",
    affiliateUrl: "https://cryptodegen.com/go/blur",
    category: "nfts",
    featured: true,
  },
  {
    name: "Magic Eden",
    slug: "magic-eden",
    rating: 4.5,
    description:
      "Magic Eden is the dominant multi-chain NFT marketplace, originally built on Solana and now supporting Ethereum, Bitcoin Ordinals, Polygon, and Base. It is the go-to platform for Solana NFTs and has become the leading marketplace for Bitcoin Ordinals trading.",
    pros: [
      "Leading marketplace for Solana and Bitcoin Ordinals",
      "Multi-chain support including Ethereum, Polygon, and Base",
      "Low fees compared to OpenSea",
      "Launchpad for new NFT collection mints",
      "Strong mobile experience and wallet integration",
    ],
    cons: [
      "Smaller Ethereum collection selection compared to OpenSea",
      "Interface can feel cluttered with multi-chain options",
      "Some advanced trading features still in development",
      "Occasional lag during high-volume mint events",
    ],
    fees: "2% marketplace fee (Solana); varies by chain",
    bestFor: "Solana & Bitcoin Ordinals collectors",
    affiliateUrl: "https://cryptodegen.com/go/magic-eden",
    category: "nfts",
    featured: true,
  },
  {
    name: "LooksRare",
    slug: "looksrare",
    rating: 4.1,
    description:
      "LooksRare is a community-first Ethereum NFT marketplace that rewards users with LOOKS tokens for trading activity. It focuses on competitive fees and token incentives to attract active traders away from larger platforms.",
    pros: [
      "LOOKS token rewards for trading activity",
      "2% marketplace fee undercuts OpenSea",
      "Community governance through token voting",
      "Staking rewards for LOOKS token holders",
      "Clean and straightforward trading interface",
    ],
    cons: [
      "Significantly lower trading volume than OpenSea or Blur",
      "History of wash trading to earn token rewards",
      "Ethereum-only with no multi-chain support",
      "Smaller community and fewer listed collections",
    ],
    fees: "2% marketplace fee",
    bestFor: "Reward-seeking NFT traders",
    affiliateUrl: "https://cryptodegen.com/go/looksrare",
    category: "nfts",
  },
  {
    name: "X2Y2",
    slug: "x2y2",
    rating: 3.9,
    description:
      "X2Y2 is an Ethereum NFT marketplace focused on low fees and decentralized governance. It offers bulk listing tools, real-time order tracking, and competitive marketplace fees designed to attract cost-conscious NFT traders.",
    pros: [
      "Very low marketplace fee of 0.5%",
      "Bulk listing and purchasing tools",
      "X2Y2 token rewards and staking",
      "Real-time order notifications",
      "NFT loan feature for instant liquidity",
    ],
    cons: [
      "Much lower volume and liquidity than top marketplaces",
      "Ethereum-only with no multi-chain support",
      "Limited collection discovery features",
      "Smaller development team and slower feature updates",
    ],
    fees: "0.5% marketplace fee",
    bestFor: "Budget-conscious NFT traders",
    affiliateUrl: "https://cryptodegen.com/go/x2y2",
    category: "nfts",
  },
  {
    name: "Rarible",
    slug: "rarible",
    rating: 4.2,
    description:
      "Rarible is a multi-chain NFT marketplace that supports Ethereum, Polygon, Tezos, and other chains. It stands out with its creator-friendly tools, community governance via the RARI token, and support for multiple NFT standards.",
    pros: [
      "Multi-chain support across Ethereum, Polygon, and Tezos",
      "Strong creator tools including custom storefronts",
      "RARI governance token for community voting",
      "Royalty enforcement support for creators",
      "Easy-to-use minting interface for all skill levels",
    ],
    cons: [
      "Lower liquidity compared to OpenSea and Blur",
      "Higher combined fees with creator royalties",
      "Interface can feel slower than competitors",
      "Smaller user base limits collection visibility",
    ],
    fees: "1% marketplace fee per side (buyer + seller)",
    bestFor: "Multi-chain creators & collectors",
    affiliateUrl: "https://cryptodegen.com/go/rarible",
    category: "nfts",
  },
  {
    name: "Foundation",
    slug: "foundation",
    rating: 4.3,
    description:
      "Foundation is a curated NFT marketplace that has built its reputation as the premier destination for digital art. The platform features an invite-based artist onboarding system and hosts some of the most celebrated NFT art collections in the space.",
    pros: [
      "Curated, high-quality art-focused collections",
      "Strong reputation among digital artists and collectors",
      "Beautiful gallery-style presentation of artwork",
      "Built-in auction system for premium art sales",
      "Active community of serious art collectors",
    ],
    cons: [
      "5% marketplace fee is the highest among major platforms",
      "Previously invite-only model limited artist access",
      "Ethereum-only with no multi-chain support",
      "Not suitable for gaming or utility NFTs",
    ],
    fees: "5% marketplace fee",
    bestFor: "Digital art collectors & artists",
    affiliateUrl: "https://cryptodegen.com/go/foundation",
    category: "nfts",
    featured: true,
  },
  {
    name: "SuperRare",
    slug: "superrare",
    rating: 4.4,
    description:
      "SuperRare is an ultra-premium NFT art marketplace that positions itself as the digital equivalent of a high-end gallery. Each artwork is unique (1-of-1), hand-curated, and backed by a community of serious collectors and world-class digital artists.",
    pros: [
      "Highest quality curation of any NFT marketplace",
      "Exclusive 1-of-1 artworks from vetted artists",
      "Strong secondary market for premium digital art",
      "RARE governance token for community curation",
      "Gallery-like presentation enhances artwork value",
    ],
    cons: [
      "Very high entry point for collectors (premium pricing)",
      "3% buyer fee plus 15% commission on primary sales",
      "Extremely selective artist approval process",
      "Limited to single-edition art NFTs only",
    ],
    fees: "3% buyer fee; 15% primary sale commission",
    bestFor: "Premium 1-of-1 art collecting",
    affiliateUrl: "https://cryptodegen.com/go/superrare",
    category: "nfts",
    featured: true,
  },
  {
    name: "Zora",
    slug: "zora",
    rating: 4.2,
    description:
      "Zora is a decentralized NFT protocol and marketplace focused on empowering creators with permissionless minting, customizable smart contracts, and zero marketplace fees. It has gained a strong following among crypto-native artists and builders.",
    pros: [
      "Zero marketplace fees for all transactions",
      "Fully decentralized and permissionless minting",
      "Custom smart contract deployment for creators",
      "Strong developer community and open-source tools",
      "Zora Network L2 for low-cost minting and trading",
    ],
    cons: [
      "Steeper learning curve than centralized marketplaces",
      "Lower liquidity and trading volume overall",
      "Discovery and browsing experience is limited",
      "Less mainstream adoption than OpenSea or Blur",
    ],
    fees: "0% marketplace fee",
    bestFor: "Crypto-native creators & builders",
    affiliateUrl: "https://cryptodegen.com/go/zora",
    category: "nfts",
  },
  {
    name: "Tensor",
    slug: "tensor",
    rating: 4.3,
    description:
      "Tensor is the leading professional NFT trading platform on Solana, offering real-time analytics, advanced order types, and compressed NFT support. It brings the speed and sophistication of DeFi trading tools to the Solana NFT ecosystem.",
    pros: [
      "Best-in-class Solana NFT trading experience",
      "Real-time analytics and floor price tracking",
      "Advanced order types including limit and collection bids",
      "Compressed NFT (cNFT) support for low-cost minting",
      "TNSR token rewards for active traders",
    ],
    cons: [
      "Solana-only with no multi-chain support",
      "Complex interface not ideal for beginners",
      "Smaller overall market compared to Ethereum platforms",
      "Token reward sustainability uncertain long-term",
    ],
    fees: "1.5% marketplace fee (reduced with TNSR)",
    bestFor: "Professional Solana NFT traders",
    affiliateUrl: "https://cryptodegen.com/go/tensor",
    category: "nfts",
    featured: true,
  },
];

export function getNftMarketplace(slug: string): Product | undefined {
  return nftMarketplaces.find((m) => m.slug === slug);
}

export function getNftMarketplacesByBestFor(filter: string[]): Product[] {
  return nftMarketplaces.filter((m) =>
    filter.some(
      (f) =>
        m.bestFor.toLowerCase().includes(f.toLowerCase()) ||
        m.description.toLowerCase().includes(f.toLowerCase())
    )
  );
}

export function getTopNftMarketplaces(count: number = 5): Product[] {
  return [...nftMarketplaces].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getNftMarketplaceComparison(slugs: string[]): ComparisonItem[] {
  return nftMarketplaces
    .filter((m) => slugs.includes(m.slug))
    .map((m) => ({
      name: m.name,
      slug: m.slug,
      features: {
        "Marketplace Fee": m.fees || "N/A",
        "Best For": m.bestFor,
        "Rating": m.rating.toFixed(1) + "/5.0",
      },
      rating: m.rating,
      affiliateUrl: m.affiliateUrl,
    }));
}

export const nftComparisonFeatures = [
  "Marketplace Fee",
  "Supported Chains",
  "Collection Count",
  "Creator Royalties",
  "Trading Volume",
  "Minting Tools",
  "Token Rewards",
  "Auction Support",
  "Mobile App",
  "Unique Features",
];

export const nftDetailedComparisons: Record<string, ComparisonItem> = {
  opensea: {
    name: "OpenSea",
    slug: "opensea",
    rating: 4.7,
    affiliateUrl: "https://cryptodegen.com/go/opensea",
    features: {
      "Marketplace Fee": "2.5%",
      "Supported Chains": "Ethereum, Polygon, Solana, Arbitrum, Avalanche, BNB",
      "Collection Count": "2M+ collections",
      "Creator Royalties": "Optional (creator-set)",
      "Trading Volume": "Highest overall",
      "Minting Tools": "Lazy minting, collection creation",
      "Token Rewards": "No",
      "Auction Support": "English & Dutch auctions",
      "Mobile App": "Yes (iOS & Android)",
      "Unique Features": "OpenSea Pro, bulk tools, cross-chain",
    },
  },
  blur: {
    name: "Blur",
    slug: "blur",
    rating: 4.6,
    affiliateUrl: "https://cryptodegen.com/go/blur",
    features: {
      "Marketplace Fee": "0%",
      "Supported Chains": "Ethereum only",
      "Collection Count": "All Ethereum NFTs",
      "Creator Royalties": "Optional",
      "Trading Volume": "Highest on Ethereum",
      "Minting Tools": "No",
      "Token Rewards": "BLUR token airdrops",
      "Auction Support": "No (instant sales only)",
      "Mobile App": "No",
      "Unique Features": "Blend lending, real-time analytics, sweep tools",
    },
  },
  "magic-eden": {
    name: "Magic Eden",
    slug: "magic-eden",
    rating: 4.5,
    affiliateUrl: "https://cryptodegen.com/go/magic-eden",
    features: {
      "Marketplace Fee": "2% (Solana)",
      "Supported Chains": "Solana, Ethereum, Bitcoin, Polygon, Base",
      "Collection Count": "500K+ collections",
      "Creator Royalties": "Enforced on Solana",
      "Trading Volume": "Highest on Solana & Bitcoin",
      "Minting Tools": "Launchpad for new collections",
      "Token Rewards": "ME token rewards",
      "Auction Support": "Yes",
      "Mobile App": "Yes (iOS & Android)",
      "Unique Features": "Bitcoin Ordinals, Launchpad, Runes support",
    },
  },
  looksrare: {
    name: "LooksRare",
    slug: "looksrare",
    rating: 4.1,
    affiliateUrl: "https://cryptodegen.com/go/looksrare",
    features: {
      "Marketplace Fee": "2%",
      "Supported Chains": "Ethereum only",
      "Collection Count": "All Ethereum NFTs",
      "Creator Royalties": "Optional",
      "Trading Volume": "Moderate",
      "Minting Tools": "No",
      "Token Rewards": "LOOKS token rewards",
      "Auction Support": "No",
      "Mobile App": "No",
      "Unique Features": "Trading rewards, LOOKS staking, community governance",
    },
  },
  x2y2: {
    name: "X2Y2",
    slug: "x2y2",
    rating: 3.9,
    affiliateUrl: "https://cryptodegen.com/go/x2y2",
    features: {
      "Marketplace Fee": "0.5%",
      "Supported Chains": "Ethereum only",
      "Collection Count": "All Ethereum NFTs",
      "Creator Royalties": "Optional",
      "Trading Volume": "Low",
      "Minting Tools": "No",
      "Token Rewards": "X2Y2 token rewards",
      "Auction Support": "No",
      "Mobile App": "No",
      "Unique Features": "NFT loans, bulk tools, lowest fee on Ethereum",
    },
  },
  rarible: {
    name: "Rarible",
    slug: "rarible",
    rating: 4.2,
    affiliateUrl: "https://cryptodegen.com/go/rarible",
    features: {
      "Marketplace Fee": "1% per side",
      "Supported Chains": "Ethereum, Polygon, Tezos",
      "Collection Count": "Moderate",
      "Creator Royalties": "Enforced",
      "Trading Volume": "Moderate",
      "Minting Tools": "Full creation suite, custom storefronts",
      "Token Rewards": "RARI governance token",
      "Auction Support": "Yes",
      "Mobile App": "No",
      "Unique Features": "Custom storefronts, multi-chain, royalty enforcement",
    },
  },
  foundation: {
    name: "Foundation",
    slug: "foundation",
    rating: 4.3,
    affiliateUrl: "https://cryptodegen.com/go/foundation",
    features: {
      "Marketplace Fee": "5%",
      "Supported Chains": "Ethereum only",
      "Collection Count": "Curated art collections",
      "Creator Royalties": "Enforced (10%)",
      "Trading Volume": "Moderate (art-focused)",
      "Minting Tools": "Art minting and editions",
      "Token Rewards": "No",
      "Auction Support": "24-hour reserve auctions",
      "Mobile App": "No",
      "Unique Features": "Curated art focus, reserve auctions, gallery presentation",
    },
  },
  superrare: {
    name: "SuperRare",
    slug: "superrare",
    rating: 4.4,
    affiliateUrl: "https://cryptodegen.com/go/superrare",
    features: {
      "Marketplace Fee": "3% buyer + 15% primary",
      "Supported Chains": "Ethereum only",
      "Collection Count": "Curated 1-of-1 artworks",
      "Creator Royalties": "10% on secondary sales",
      "Trading Volume": "Premium art segment",
      "Minting Tools": "Vetted artist minting only",
      "Token Rewards": "RARE governance token",
      "Auction Support": "Yes (reserve auctions)",
      "Mobile App": "No",
      "Unique Features": "Ultra-premium curation, 1-of-1 focus, RARE governance",
    },
  },
  zora: {
    name: "Zora",
    slug: "zora",
    rating: 4.2,
    affiliateUrl: "https://cryptodegen.com/go/zora",
    features: {
      "Marketplace Fee": "0%",
      "Supported Chains": "Ethereum, Zora Network L2",
      "Collection Count": "Permissionless",
      "Creator Royalties": "Creator-defined",
      "Trading Volume": "Growing",
      "Minting Tools": "Full smart contract deployment",
      "Token Rewards": "No (protocol rewards)",
      "Auction Support": "Yes (custom auctions)",
      "Mobile App": "No",
      "Unique Features": "Decentralized protocol, Zora L2, custom contracts",
    },
  },
  tensor: {
    name: "Tensor",
    slug: "tensor",
    rating: 4.3,
    affiliateUrl: "https://cryptodegen.com/go/tensor",
    features: {
      "Marketplace Fee": "1.5% (reduced with TNSR)",
      "Supported Chains": "Solana only",
      "Collection Count": "All Solana NFTs",
      "Creator Royalties": "Optional",
      "Trading Volume": "High on Solana",
      "Minting Tools": "cNFT support",
      "Token Rewards": "TNSR token rewards",
      "Auction Support": "No",
      "Mobile App": "No",
      "Unique Features": "DeFi-style trading, cNFT support, advanced analytics",
    },
  },
};
