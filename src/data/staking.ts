import { Product, ComparisonItem } from "@/lib/types";

export const stakingPlatforms: Product[] = [
  {
    name: "Lido",
    slug: "lido",
    rating: 4.7,
    description:
      "Lido is the largest liquid staking protocol, allowing users to stake ETH and receive stETH tokens that remain liquid and usable across DeFi. With over $14 billion in TVL, Lido dominates the Ethereum staking landscape and has expanded to support multiple chains.",
    pros: [
      "Largest and most battle-tested liquid staking protocol",
      "stETH is widely integrated across DeFi for composability",
      "No minimum staking requirement (any amount of ETH)",
      "Decentralized validator set managed by Lido DAO",
      "Automatic reward compounding through stETH rebasing",
    ],
    cons: [
      "10% fee on staking rewards (split between node operators and treasury)",
      "Centralization concerns due to large market share",
      "stETH can trade at a slight discount to ETH during volatility",
      "Governance controlled by LDO token holders",
    ],
    fees: "10% of staking rewards",
    bestFor: "Liquid ETH staking with maximum DeFi composability",
    affiliateUrl: "https://cryptodegen.com/go/lido",
    category: "staking",
    featured: true,
  },
  {
    name: "Rocket Pool",
    slug: "rocket-pool",
    rating: 4.5,
    description:
      "Rocket Pool is a decentralized Ethereum staking protocol that enables permissionless node operation with just 8 ETH (instead of the standard 32 ETH). It offers rETH as its liquid staking token, emphasizing decentralization and trustlessness above all else.",
    pros: [
      "Most decentralized liquid staking protocol with permissionless nodes",
      "Lower barrier to run a node (8 ETH minimum vs 32 ETH solo)",
      "rETH appreciates in value rather than rebasing",
      "No single point of failure in validator operations",
      "Strong community governance and open-source development",
    ],
    cons: [
      "Smaller TVL and DeFi integrations compared to Lido",
      "14% commission on staking rewards",
      "Node operators must stake RPL tokens as collateral",
      "Lower liquidity for rETH compared to stETH",
    ],
    fees: "14% of staking rewards",
    bestFor: "Decentralization-focused ETH staking",
    affiliateUrl: "https://cryptodegen.com/go/rocket-pool",
    category: "staking",
    featured: true,
  },
  {
    name: "Coinbase Staking",
    slug: "coinbase-staking",
    rating: 4.3,
    description:
      "Coinbase Staking allows users to earn rewards on proof-of-stake assets directly through the Coinbase platform. It offers cbETH as its liquid staking token for Ethereum and supports staking for multiple assets including SOL, ATOM, and ADA with no technical setup required.",
    pros: [
      "Extremely easy setup through existing Coinbase accounts",
      "cbETH liquid staking token for DeFi use",
      "Supports multiple proof-of-stake assets",
      "Backed by a publicly traded, regulated company",
      "No minimum staking requirement for most assets",
    ],
    cons: [
      "25-35% commission on staking rewards is among the highest",
      "Staking restricted in certain US states",
      "Limited DeFi integrations compared to native DeFi protocols",
      "Custodial solution means Coinbase controls validator keys",
    ],
    fees: "25-35% of staking rewards",
    bestFor: "Beginners wanting easy, regulated staking",
    affiliateUrl: "https://cryptodegen.com/go/coinbase",
    category: "staking",
    featured: true,
  },
  {
    name: "Kraken Staking",
    slug: "kraken-staking",
    rating: 4.1,
    description:
      "Kraken Staking provides on-chain and off-chain staking services for a variety of proof-of-stake cryptocurrencies. While the platform faced regulatory challenges with the SEC in 2023, it continues to offer staking services outside the US with competitive rates and flexible unstaking options.",
    pros: [
      "Supports 20+ stakeable assets with competitive APYs",
      "Flexible and bonded staking options available",
      "Easy to use within the Kraken trading interface",
      "Instant staking and unstaking for select assets",
      "Strong security track record with no major breaches",
    ],
    cons: [
      "Staking no longer available for US customers due to SEC settlement",
      "Custodial staking means Kraken holds your keys",
      "No liquid staking token like stETH or rETH",
      "Commission rates not fully transparent on all assets",
    ],
    fees: "15-25% of staking rewards (varies by asset)",
    bestFor: "Non-US users seeking multi-asset staking on a trusted exchange",
    affiliateUrl: "https://cryptodegen.com/go/kraken",
    category: "staking",
    featured: true,
  },
  {
    name: "EigenLayer",
    slug: "eigenlayer",
    rating: 4.4,
    description:
      "EigenLayer is a restaking protocol built on Ethereum that allows stakers to opt-in to securing additional services (Actively Validated Services) beyond the Ethereum base layer. By restaking ETH or liquid staking tokens, users can earn additional rewards while extending Ethereum's security to new protocols.",
    pros: [
      "Pioneering restaking technology for additional yield on staked ETH",
      "Extends Ethereum security to new protocols and services",
      "Supports native ETH and multiple liquid staking tokens",
      "Backed by major VC firms with strong development team",
      "Creates new revenue streams for existing ETH stakers",
    ],
    cons: [
      "Additional slashing risks from Actively Validated Services",
      "Complex system that may be difficult for beginners to understand",
      "Protocol is still maturing with evolving reward structures",
      "Smart contract risk layered on top of base staking risk",
    ],
    fees: "Varies by AVS (protocol takes 10% of AVS rewards)",
    bestFor: "Advanced users seeking additional yield through restaking",
    affiliateUrl: "https://cryptodegen.com/go/eigenlayer",
    category: "staking",
    featured: true,
  },
  {
    name: "Jito",
    slug: "jito",
    rating: 4.3,
    description:
      "Jito is the leading liquid staking protocol on Solana, offering JitoSOL as its liquid staking derivative. What sets Jito apart is its integration of MEV (Maximum Extractable Value) rewards into staking yields, providing higher returns than standard Solana staking through its MEV-aware validator client.",
    pros: [
      "Highest Solana staking yields through MEV reward sharing",
      "JitoSOL is widely integrated across Solana DeFi ecosystem",
      "MEV-aware validator client improves network efficiency",
      "No minimum staking requirement",
      "Strong governance through JTO token",
    ],
    cons: [
      "MEV extraction is controversial and may face regulatory scrutiny",
      "Solana-specific with no multi-chain support",
      "Validator set is curated rather than fully permissionless",
      "JitoSOL liquidity can thin during Solana network stress events",
    ],
    fees: "4% of staking rewards",
    bestFor: "Maximum yield Solana staking with MEV rewards",
    affiliateUrl: "https://cryptodegen.com/go/jito",
    category: "staking",
    featured: true,
  },
  {
    name: "Marinade",
    slug: "marinade",
    rating: 4.2,
    description:
      "Marinade Finance is a liquid staking protocol on Solana focused on decentralization. It offers both liquid staking (mSOL) and native staking options, distributing stake across hundreds of validators to strengthen the Solana network while providing competitive staking yields.",
    pros: [
      "Distributes stake across 400+ validators for decentralization",
      "Both liquid (mSOL) and native staking options available",
      "Native staking earns full rewards without liquid staking token risks",
      "mSOL is widely used across Solana DeFi protocols",
      "Transparent and community-governed through MNDE token",
    ],
    cons: [
      "Lower yields than Jito due to lack of MEV sharing",
      "Solana-only with no multi-chain support",
      "mSOL liquidity is lower than JitoSOL in some DeFi venues",
      "Native staking requires longer unstaking periods",
    ],
    fees: "6% of staking rewards (liquid); 0% (native)",
    bestFor: "Decentralized Solana staking with flexible options",
    affiliateUrl: "https://cryptodegen.com/go/marinade",
    category: "staking",
    featured: false,
  },
  {
    name: "StakeWise",
    slug: "stakewise",
    rating: 4.0,
    description:
      "StakeWise is an Ethereum liquid staking protocol that offers a unique vault-based architecture. Users can stake through curated vaults operated by professional node operators, or even create their own vaults. The protocol issues osETH as its overcollateralized liquid staking token, providing an extra layer of safety.",
    pros: [
      "Vault-based architecture allows customized staking setups",
      "osETH is overcollateralized for added safety",
      "Permissionless vault creation for node operators",
      "Lower protocol fees compared to some competitors",
      "Solo stakers can tokenize their position with osETH",
    ],
    cons: [
      "Smaller market share and TVL compared to Lido or Rocket Pool",
      "osETH has limited DeFi integrations compared to stETH",
      "More complex user experience due to vault selection",
      "Newer protocol with less battle-testing",
    ],
    fees: "5% of staking rewards",
    bestFor: "Customizable vault-based ETH staking",
    affiliateUrl: "https://cryptodegen.com/go/stakewise",
    category: "staking",
    featured: false,
  },
];

export function getStakingPlatform(slug: string): Product | undefined {
  return stakingPlatforms.find((p) => p.slug === slug);
}

export function getStakingPlatformsByBestFor(filter: string[]): Product[] {
  return stakingPlatforms.filter((p) =>
    filter.some(
      (f) =>
        p.bestFor.toLowerCase().includes(f.toLowerCase()) ||
        p.description.toLowerCase().includes(f.toLowerCase())
    )
  );
}

export function getTopStakingPlatforms(count: number = 5): Product[] {
  return [...stakingPlatforms].sort((a, b) => b.rating - a.rating).slice(0, count);
}

export function getStakingComparison(slugs: string[]): ComparisonItem[] {
  return stakingPlatforms
    .filter((p) => slugs.includes(p.slug))
    .map((p) => ({
      name: p.name,
      slug: p.slug,
      features: {
        "Fees": p.fees || "N/A",
        "Best For": p.bestFor,
        "Rating": p.rating.toFixed(1) + "/5.0",
      },
      rating: p.rating,
      affiliateUrl: p.affiliateUrl,
    }));
}

export const stakingComparisonFeatures = [
  "Protocol Type",
  "Staking Fee",
  "Liquid Staking Token",
  "Supported Chains",
  "Minimum Stake",
  "APY Range",
  "DeFi Integrations",
  "Decentralization",
  "Slashing Protection",
  "Governance",
];

export const stakingDetailedComparisons: Record<string, ComparisonItem> = {
  lido: {
    name: "Lido",
    slug: "lido",
    rating: 4.7,
    affiliateUrl: "https://cryptodegen.com/go/lido",
    features: {
      "Protocol Type": "Liquid Staking",
      "Staking Fee": "10% of rewards",
      "Liquid Staking Token": "stETH (rebasing)",
      "Supported Chains": "Ethereum",
      "Minimum Stake": "No minimum",
      "APY Range": "3.0%–3.5%",
      "DeFi Integrations": "Excellent (100+ protocols)",
      "Decentralization": "Moderate (curated operator set)",
      "Slashing Protection": "Insurance fund from protocol fees",
      "Governance": "LDO token holders",
    },
  },
  "rocket-pool": {
    name: "Rocket Pool",
    slug: "rocket-pool",
    rating: 4.5,
    affiliateUrl: "https://cryptodegen.com/go/rocket-pool",
    features: {
      "Protocol Type": "Liquid Staking",
      "Staking Fee": "14% of rewards",
      "Liquid Staking Token": "rETH (value-accruing)",
      "Supported Chains": "Ethereum",
      "Minimum Stake": "0.01 ETH (staker); 8 ETH (node operator)",
      "APY Range": "2.8%–3.2%",
      "DeFi Integrations": "Good (50+ protocols)",
      "Decentralization": "High (permissionless nodes)",
      "Slashing Protection": "RPL collateral from node operators",
      "Governance": "RPL token + pDAO",
    },
  },
  "coinbase-staking": {
    name: "Coinbase Staking",
    slug: "coinbase-staking",
    rating: 4.3,
    affiliateUrl: "https://cryptodegen.com/go/coinbase",
    features: {
      "Protocol Type": "Centralized Staking",
      "Staking Fee": "25-35% of rewards",
      "Liquid Staking Token": "cbETH",
      "Supported Chains": "Ethereum, Solana, Cosmos, Cardano, Tezos",
      "Minimum Stake": "No minimum",
      "APY Range": "2.0%–7.0% (varies by asset)",
      "DeFi Integrations": "Moderate (cbETH on major DEXs)",
      "Decentralization": "Low (Coinbase-operated validators)",
      "Slashing Protection": "Coinbase absorbs slashing losses",
      "Governance": "Coinbase corporate",
    },
  },
  "kraken-staking": {
    name: "Kraken Staking",
    slug: "kraken-staking",
    rating: 4.1,
    affiliateUrl: "https://cryptodegen.com/go/kraken",
    features: {
      "Protocol Type": "Centralized Staking",
      "Staking Fee": "15-25% of rewards",
      "Liquid Staking Token": "None",
      "Supported Chains": "20+ networks",
      "Minimum Stake": "Varies by asset",
      "APY Range": "1.0%–12.0% (varies by asset)",
      "DeFi Integrations": "None (custodial only)",
      "Decentralization": "Low (Kraken-operated validators)",
      "Slashing Protection": "Kraken covers slashing events",
      "Governance": "Kraken corporate",
    },
  },
  eigenlayer: {
    name: "EigenLayer",
    slug: "eigenlayer",
    rating: 4.4,
    affiliateUrl: "https://cryptodegen.com/go/eigenlayer",
    features: {
      "Protocol Type": "Restaking",
      "Staking Fee": "10% of AVS rewards",
      "Liquid Staking Token": "Supports LSTs (stETH, rETH, etc.)",
      "Supported Chains": "Ethereum",
      "Minimum Stake": "No minimum for LST restaking",
      "APY Range": "Base staking APY + 1%–5% AVS rewards",
      "DeFi Integrations": "Growing (via LRT ecosystem)",
      "Decentralization": "Moderate (operator selection)",
      "Slashing Protection": "Slashing conditions per AVS",
      "Governance": "EIGEN token holders",
    },
  },
  jito: {
    name: "Jito",
    slug: "jito",
    rating: 4.3,
    affiliateUrl: "https://cryptodegen.com/go/jito",
    features: {
      "Protocol Type": "Liquid Staking + MEV",
      "Staking Fee": "4% of rewards",
      "Liquid Staking Token": "JitoSOL",
      "Supported Chains": "Solana",
      "Minimum Stake": "No minimum",
      "APY Range": "6.5%–8.0% (including MEV)",
      "DeFi Integrations": "Excellent (Solana DeFi)",
      "Decentralization": "Moderate (curated validators)",
      "Slashing Protection": "Validator performance monitoring",
      "Governance": "JTO token holders",
    },
  },
  marinade: {
    name: "Marinade",
    slug: "marinade",
    rating: 4.2,
    affiliateUrl: "https://cryptodegen.com/go/marinade",
    features: {
      "Protocol Type": "Liquid Staking",
      "Staking Fee": "6% liquid / 0% native",
      "Liquid Staking Token": "mSOL",
      "Supported Chains": "Solana",
      "Minimum Stake": "No minimum",
      "APY Range": "6.0%–7.5%",
      "DeFi Integrations": "Good (Solana DeFi)",
      "Decentralization": "High (400+ validators)",
      "Slashing Protection": "Validator scoring algorithm",
      "Governance": "MNDE token holders",
    },
  },
  stakewise: {
    name: "StakeWise",
    slug: "stakewise",
    rating: 4.0,
    affiliateUrl: "https://cryptodegen.com/go/stakewise",
    features: {
      "Protocol Type": "Liquid Staking (Vault-based)",
      "Staking Fee": "5% of rewards",
      "Liquid Staking Token": "osETH (overcollateralized)",
      "Supported Chains": "Ethereum",
      "Minimum Stake": "No minimum",
      "APY Range": "3.0%–3.5%",
      "DeFi Integrations": "Growing",
      "Decentralization": "High (permissionless vaults)",
      "Slashing Protection": "Overcollateralization of osETH",
      "Governance": "SWISE token holders",
    },
  },
};
