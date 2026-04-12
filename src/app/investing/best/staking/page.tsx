'use client';

import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR } from "@/lib/constants";
import { FAQ } from "@/lib/types";
import Link from "next/link";


interface StakingPlatform {
  rank: number;
  name: string;
  type: string;
  apyRange: string;
  supportedAssets: string[];
  minStake: string;
  lockPeriod: string;
  riskLevel: "Low" | "Medium" | "High";
  ourRating: number;
  description: string;
  pros: string[];
  cons: string[];
  affiliateUrl: string;
  liquidStakingToken?: string;
}

const stakingPlatforms: StakingPlatform[] = [
  // CEX Staking
  {
    rank: 1,
    name: "Coinbase Staking",
    type: "CEX Staking",
    apyRange: "2.0% - 7.0%",
    supportedAssets: ["ETH", "SOL", "ATOM", "ADA", "AVAX"],
    minStake: "None",
    lockPeriod: "None (flexible)",
    riskLevel: "Low",
    ourRating: 4.3,
    description: "Industry-leading centralized exchange with institutional-grade security. Easiest onboarding for beginners with zero minimum staking requirements.",
    pros: [
      "Extremely user-friendly interface",
      "No minimum staking amount",
      "Backed by publicly-traded company (COIN)",
      "cbETH liquid staking token for DeFi use",
      "Multi-asset staking support",
      "FDIC insurance on cash balances"
    ],
    cons: [
      "Highest fees in CEX space (25-35% commission)",
      "Staking unavailable in certain US states",
      "Custodial - Coinbase holds your keys",
      "Limited DeFi integrations for cbETH"
    ],
    affiliateUrl: "https://degen0x.com/go/coinbase",
    liquidStakingToken: "cbETH"
  },
  {
    rank: 2,
    name: "Kraken Staking",
    type: "CEX Staking",
    apyRange: "1.0% - 12.0%",
    supportedAssets: ["ETH", "SOL", "DOT", "ATOM", "AVAX", "NEAR"],
    minStake: "Varies by asset",
    lockPeriod: "Flexible (with bonded options)",
    riskLevel: "Low",
    ourRating: 4.1,
    description: "Veteran exchange with strong security record and support for 20+ stakeable assets. Excellent rates for non-US users.",
    pros: [
      "Support for 20+ different tokens",
      "Competitive APY rates (15-25% commission)",
      "Instant staking/unstaking for many assets",
      "Strong security track record",
      "Advanced staking options (flexible, bonded)",
      "Professional platform for experienced traders"
    ],
    cons: [
      "No longer available for US customers (SEC settlement)",
      "Custodial staking model",
      "No liquid staking derivatives",
      "Commission rates vary and not always transparent"
    ],
    affiliateUrl: "https://degen0x.com/go/kraken"
  },
  {
    rank: 3,
    name: "Binance Staking",
    type: "CEX Staking",
    apyRange: "0.5% - 15.0%",
    supportedAssets: ["ETH", "SOL", "ADA", "DOT", "BNB", "NEAR"],
    minStake: "None for most assets",
    lockPeriod: "Flexible or 30/60/90 day locks",
    riskLevel: "Medium",
    ourRating: 4.0,
    description: "World's largest crypto exchange with extensive staking offerings across multiple chains and lock periods.",
    pros: [
      "Largest platform by volume and users",
      "Wide array of staking options",
      "Flexible and locked staking available",
      "Very low minimum stakes",
      "High APY options for locked terms",
      "Lowest fees among major CEX"
    ],
    cons: [
      "Regulatory uncertainty in many jurisdictions",
      "Custodial staking",
      "Limited liquid staking token integrations",
      "Platform complexity can overwhelm beginners"
    ],
    affiliateUrl: "https://degen0x.com/go/binance"
  },
  {
    rank: 4,
    name: "Crypto.com Staking",
    type: "CEX Staking",
    apyRange: "0.5% - 10.0%",
    supportedAssets: ["ETH", "SOL", "ATOM", "ADA", "AVAX"],
    minStake: "None",
    lockPeriod: "Flexible or 30/60/90 day locks",
    riskLevel: "Low",
    ourRating: 3.9,
    description: "Feature-rich platform with excellent UI, CRO rewards, and flexible staking options for multiple assets.",
    pros: [
      "Clean, intuitive user interface",
      "No minimum staking requirement",
      "CRO token rewards boost overall returns",
      "Multiple lock period options",
      "Excellent customer support",
      "Mobile app integration"
    ],
    cons: [
      "Lower APY rates on some assets",
      "Custodial model",
      "Not available in all jurisdictions",
      "Limited DeFi composability"
    ],
    affiliateUrl: "https://degen0x.com/go/crypto.com"
  },

  // Liquid Staking - Ethereum
  {
    rank: 5,
    name: "Lido",
    type: "Liquid Staking",
    apyRange: "3.0% - 3.5%",
    supportedAssets: ["ETH", "stETH", "wstETH"],
    minStake: "None (any amount)",
    lockPeriod: "None (immediately liquid)",
    riskLevel: "Medium",
    ourRating: 4.7,
    description: "The largest liquid staking protocol with $14B+ TVL. Allows you to stake ETH while keeping your capital liquid for DeFi opportunities.",
    pros: [
      "Largest and most battle-tested liquid staking",
      "Exceptional DeFi composability (100+ integrations)",
      "No minimum stake amount",
      "Decentralized validator set",
      "Auto-compounding rewards through rebasing",
      "Highest liquidity of any LST"
    ],
    cons: [
      "10% fee on rewards (industry standard)",
      "Market dominance raises centralization concerns",
      "stETH can trade at small discount during volatility",
      "Governance by LDO token holders"
    ],
    affiliateUrl: "https://degen0x.com/go/lido",
    liquidStakingToken: "stETH"
  },
  {
    rank: 6,
    name: "Rocket Pool",
    type: "Liquid Staking",
    apyRange: "2.8% - 3.2%",
    supportedAssets: ["ETH", "rETH"],
    minStake: "0.01 ETH (staker); 8 ETH (node operator)",
    lockPeriod: "None (immediately liquid)",
    riskLevel: "Medium",
    ourRating: 4.5,
    description: "Decentralized Ethereum staking with permissionless node operation. Perfect for users prioritizing decentralization over maximum yield.",
    pros: [
      "Most decentralized liquid staking protocol",
      "Permissionless node operation (8 ETH minimum)",
      "rETH appreciates rather than rebase",
      "No single point of failure",
      "Strong community governance",
      "Lower fees than some competitors"
    ],
    cons: [
      "Smaller TVL and fewer DeFi integrations",
      "14% commission on rewards",
      "Node operators must stake RPL collateral",
      "Lower rETH liquidity compared to stETH"
    ],
    affiliateUrl: "https://degen0x.com/go/rocket-pool",
    liquidStakingToken: "rETH"
  },
  {
    rank: 7,
    name: "StakeWise",
    type: "Liquid Staking",
    apyRange: "3.0% - 3.5%",
    supportedAssets: ["ETH", "osETH"],
    minStake: "None",
    lockPeriod: "None (immediately liquid)",
    riskLevel: "Medium",
    ourRating: 4.0,
    description: "Innovative vault-based architecture allowing customized staking setups. Overcollateralized osETH provides an extra safety layer.",
    pros: [
      "Unique vault-based architecture",
      "Permissionless vault creation",
      "osETH is overcollateralized for safety",
      "Solo stakers can tokenize positions",
      "Lower protocol fees",
      "Growing DeFi integrations"
    ],
    cons: [
      "Smaller market share than Lido/Rocket Pool",
      "Limited DeFi integrations",
      "More complex user experience",
      "Newer protocol (less battle-tested)"
    ],
    affiliateUrl: "https://degen0x.com/go/stakewise",
    liquidStakingToken: "osETH"
  },

  // Solana Liquid Staking
  {
    rank: 8,
    name: "Jito",
    type: "Liquid Staking (Solana)",
    apyRange: "6.5% - 8.0%",
    supportedAssets: ["SOL", "JitoSOL"],
    minStake: "None",
    lockPeriod: "None (immediately liquid)",
    riskLevel: "Medium",
    ourRating: 4.3,
    description: "Leading Solana liquid staking with MEV rewards integration. Achieves highest SOL staking yields through MEV-aware validator client.",
    pros: [
      "Highest Solana staking yields via MEV rewards",
      "Excellent Solana DeFi ecosystem integration",
      "MEV-aware validator client improves efficiency",
      "No minimum stake",
      "Community governance through JTO",
      "Growing validator set"
    ],
    cons: [
      "MEV extraction may face regulatory scrutiny",
      "Solana-only (no multi-chain support)",
      "Curated validator set (not fully permissionless)",
      "JitoSOL liquidity can thin during network stress"
    ],
    affiliateUrl: "https://degen0x.com/go/jito",
    liquidStakingToken: "JitoSOL"
  },
  {
    rank: 9,
    name: "Marinade Finance",
    type: "Liquid Staking (Solana)",
    apyRange: "6.0% - 7.5%",
    supportedAssets: ["SOL", "mSOL"],
    minStake: "None",
    lockPeriod: "None (liquid) or variable (native)",
    riskLevel: "Low",
    ourRating: 4.2,
    description: "Solana's most decentralized liquid staking with 400+ validator distribution. Offers both liquid (mSOL) and native staking options.",
    pros: [
      "Excellent decentralization (400+ validators)",
      "Both liquid and native staking options",
      "Native staking = zero fees and full rewards",
      "mSOL widely integrated in Solana DeFi",
      "Community governance via MNDE",
      "Transparent validator scoring"
    ],
    cons: [
      "Lower yields than Jito (no MEV sharing)",
      "Solana-only network",
      "Lower mSOL liquidity in some venues",
      "Native staking has longer unstaking periods"
    ],
    affiliateUrl: "https://degen0x.com/go/marinade",
    liquidStakingToken: "mSOL"
  },

  // Restaking
  {
    rank: 10,
    name: "EigenLayer",
    type: "Restaking",
    apyRange: "Base APY + 1% - 5% (AVS rewards)",
    supportedAssets: ["ETH", "stETH", "rETH", "cbETH"],
    minStake: "None for LST restaking",
    lockPeriod: "Varies by AVS (typically 7-30 days)",
    riskLevel: "High",
    ourRating: 4.4,
    description: "Revolutionary restaking protocol allowing Ethereum stakers to earn additional yield by securing services. Highest risk but highest potential rewards.",
    pros: [
      "Pioneering restaking technology",
      "Additional yield on existing staked capital",
      "Works with all major liquid staking tokens",
      "Extends Ethereum security to new protocols",
      "Major VC backing and strong development",
      "New revenue streams for stakers"
    ],
    cons: [
      "Additional slashing risks from AVS",
      "Complex system for beginners",
      "Smart contract risk layered on base staking",
      "Reward structures still evolving",
      "Emerging risks not fully understood"
    ],
    affiliateUrl: "https://degen0x.com/go/eigenlayer"
  },
  {
    rank: 11,
    name: "EtherFi",
    type: "Restaking",
    apyRange: "Base APY + 1% - 3%",
    supportedAssets: ["ETH", "eETH"],
    minStake: "None",
    lockPeriod: "None (immediately liquid)",
    riskLevel: "High",
    ourRating: 4.0,
    description: "EigenLayer integrated liquid restaking. Combines liquid staking with restaking in a single token (eETH).",
    pros: [
      "Seamless liquid restaking combination",
      "eETH composable across DeFi",
      "No minimum stake",
      "Insurance fund for validator slashing",
      "Growing AVS ecosystem",
      "Community governance"
    ],
    cons: [
      "Higher slashing risks",
      "Newer protocol with less proven track record",
      "Limited DeFi integrations compared to stETH",
      "Smart contract complexity risks"
    ],
    affiliateUrl: "https://degen0x.com/go/etherfi",
    liquidStakingToken: "eETH"
  },
  {
    rank: 12,
    name: "Renzo",
    type: "Restaking",
    apyRange: "Base APY + 1% - 4%",
    supportedAssets: ["ETH", "ezETH"],
    minStake: "None",
    lockPeriod: "None (flexible)",
    riskLevel: "High",
    ourRating: 3.9,
    description: "Liquid restaking protocol optimizing capital efficiency. ezETH token enables restaking participation with maximum composability.",
    pros: [
      "Capital-efficient restaking design",
      "ezETH available across major DeFi venues",
      "Professional team and strong funding",
      "Curated AVS selection for risk management",
      "Lower minimum slashing thresholds",
      "Growing ecosystem"
    ],
    cons: [
      "Restaking risks inherent to protocol",
      "Newer with less historical data",
      "ezETH still building liquidity",
      "Complex reward mechanisms"
    ],
    affiliateUrl: "https://degen0x.com/go/renzo",
    liquidStakingToken: "ezETH"
  },
];

const stakingFaqs: FAQ[] = [
  {
    question: "What is cryptocurrency staking?",
    answer: "Staking is the process of locking your cryptocurrency into a blockchain network to validate transactions and earn rewards. Instead of the traditional Proof of Work mining (which requires expensive hardware), Proof of Stake networks like Ethereum 2.0 reward users who stake their coins. The rewards come from newly minted tokens and transaction fees. Staking has become one of the most popular ways to earn passive income in crypto, with annual yields ranging from 1-15% depending on the asset and platform."
  },
  {
    question: "What's the difference between CEX staking and liquid staking?",
    answer: "CEX (Centralized Exchange) staking is offered by platforms like Coinbase and Kraken. You send your coins to the exchange, they handle all staking operations, and you receive rewards. It's simple but custodial - the exchange controls your private keys. Liquid staking (Lido, Rocket Pool) is decentralized. You stake through a protocol and receive a liquid staking token (like stETH) that represents your staked position. This token is yours to use in DeFi while your coins generate staking rewards. Liquid staking offers more flexibility but typically has modest fees (5-14%)."
  },
  {
    question: "Is staking safe? What are the risks?",
    answer: "Staking risks vary by platform type. CEX staking carries counterparty risk - if the exchange fails, you could lose funds (though major exchanges carry insurance). Liquid staking protocols carry smart contract risks and validator slashing risk (though rare). Restaking adds additional slashing risks from Actively Validated Services. To minimize risk: diversify across platforms, use established protocols with significant TVL and audit history, never stake more than you can afford to lose, and consider starting with lower-risk options like major CEX platforms before exploring DeFi protocols."
  },
  {
    question: "What's the minimum amount needed to start staking?",
    answer: "Minimum stakes vary significantly. Most CEX platforms (Coinbase, Kraken, Crypto.com) have no minimum or very low minimums (often under $1). Liquid staking protocols like Lido and Rocket Pool have no minimum - you can stake tiny amounts. Solo staking on Ethereum requires 32 ETH (~$130,000+), which is why liquid staking was invented. Some platforms like Binance and crypto.com offer 30/60/90-day locked staking with bonus APY for larger amounts, but the minimums are still reasonable (often $10-50)."
  },
  {
    question: "How are staking rewards calculated?",
    answer: "Staking rewards come from two sources: (1) Protocol inflation - newly issued tokens paid to validators, and (2) Transaction fees - a portion of network fees distributed to validators. The total APY you see depends on network conditions. For example, Ethereum's APY changes based on how many validators are staking (higher participation = lower APY due to more competition). Most platforms compound rewards automatically (except CEX custodial staking which you must manually restake). Always check fees - some platforms charge 10-35% of rewards."
  },
  {
    question: "Can I unstake my coins whenever I want?",
    answer: "It depends on the type. Liquid staking tokens (stETH, rETH) are immediately liquid and tradeable on DEXs - you can swap them back to the underlying asset instantly (though may incur slippage). Some liquid staking protocols allow direct unstaking within 1-3 days. CEX staking varies - most allow instant unstaking, though some offer higher APY for locked periods. Solo staking and restaking have longer unstaking times (typically 7-30 days). Always check the specific platform's unstaking terms before committing."
  },
  {
    question: "What is slashing and how likely is it?",
    answer: "Slashing is a penalty for validators who violate consensus rules (being offline, signing conflicting blocks, etc.). It results in loss of a percentage of staked tokens. On Ethereum, slashing is rare - it requires explicitly dishonest behavior, not just going offline. Going offline costs you staking rewards but doesn't result in slashing. For liquid staking, the platform/validators bear the slashing risk, so your exposure is reduced. Restaking protocols have additional slashing conditions from Actively Validated Services - this is the primary risk with EigenLayer, EtherFi, and Renzo."
  },
  {
    question: "Should I stake directly or use a liquid staking protocol?",
    answer: "Direct staking (solo 32 ETH or through Lido/Rocket Pool) gives you full control and maximum rewards. However, it requires technical knowledge and significant capital. Liquid staking tokens provide flexibility - your capital stays productive in DeFi while staking. The trade-off is a 5-14% fee. For beginners or small amounts, CEX staking (Coinbase) is simplest despite higher fees. For experienced users, liquid staking protocols offer the best balance of simplicity, flexibility, and rewards. Restaking adds complexity - only suitable for advanced users seeking additional yield."
  },
  {
    question: "What is restaking and should I do it?",
    answer: "Restaking (EigenLayer, EtherFi, Renzo) means taking your staked ETH or liquid staking tokens and re-staking them to validate additional services beyond Ethereum. This earns extra rewards but introduces additional slashing risks. The extra yield (1-5% annually) doesn't always compensate for the additional risk, especially given the emerging nature of the services. Restaking is best for sophisticated users who've deeply researched specific AVS (Actively Validated Services) and understand the additional risks. Most users are better served by simple liquid staking."
  },
  {
    question: "How do taxes work for staking rewards?",
    answer: "Staking rewards are typically taxed as ordinary income in most jurisdictions when you receive them. The USD value at time of receipt is your taxable income. When you later sell the staked tokens or liquid staking derivatives, that's a separate taxable event (capital gain/loss). Keep detailed records of: (1) staking rewards received and USD value on that date, (2) cost basis of staked tokens, (3) date and value when you unstake or sell. Consult a tax professional for your jurisdiction - crypto tax treatment is evolving and varies significantly by country."
  },
  {
    question: "Which platform offers the best APY?",
    answer: "APY varies significantly by token and platform. For Ethereum: Lido/Rocket Pool/StakeWise offer 3.0-3.5%. Restaking (EigenLayer, EtherFi) adds 1-5% on top. For Solana: Jito offers 6.5-8.0% while Marinade offers 6.0-7.5%. CEX platforms vary widely (Coinbase 2.0-2.5%, Kraken/Binance can be higher for locked periods). Higher APY often means higher risk or fees. Instead of chasing highest APY, prioritize: (1) platform safety and track record, (2) fees and net APY, (3) liquidity and flexibility, (4) your risk tolerance."
  },
];

export default function BestStakingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Staking Platforms", href: "/investing/best/staking" },
      ]} />

      <AffiliateDisclosure />

      {/* Hero Section */}
      <header className="mb-12">
        <h1 className="text-5xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Staking Platforms {CURRENT_YEAR}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          Compare 15+ cryptocurrency staking platforms across centralized exchanges, liquid staking protocols, and innovative restaking services. Find the best platform for your staking strategy.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <div className="text-sm text-[var(--color-text-secondary)]">Average APY Range</div>
            <div className="text-2xl font-bold text-[var(--color-text)] mt-1">1% - 15%</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-2">Varies by asset and platform</div>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <div className="text-sm text-[var(--color-text-secondary)]">Minimum Stake</div>
            <div className="text-2xl font-bold text-[var(--color-text)] mt-1">$0 - $50</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-2">Most platforms have no minimum</div>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
            <div className="text-sm text-[var(--color-text-secondary)]">Risk Levels</div>
            <div className="text-2xl font-bold text-[var(--color-text)] mt-1">Low - High</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-2">Choose based on your profile</div>
          </div>
        </div>
      </header>

      {/* Comprehensive Comparison Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">Staking Platforms Comparison</h2>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-card)]">
                <th className="px-6 py-4 text-left text-[var(--color-text)] font-semibold">Platform</th>
                <th className="px-6 py-4 text-left text-[var(--color-text)] font-semibold">Type</th>
                <th className="px-6 py-4 text-left text-[var(--color-text)] font-semibold">APY</th>
                <th className="px-6 py-4 text-left text-[var(--color-text)] font-semibold">Min Stake</th>
                <th className="px-6 py-4 text-left text-[var(--color-text)] font-semibold">Risk</th>
                <th className="px-6 py-4 text-center text-[var(--color-text)] font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody>
              {stakingPlatforms.map((platform, idx) => (
                <tr key={idx} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-hover)] transition-colors">
                  <td className="px-6 py-4 text-[var(--color-text)] font-semibold">{platform.name}</td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">{platform.type}</td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">{platform.apyRange}</td>
                  <td className="px-6 py-4 text-[var(--color-text-secondary)]">{platform.minStake}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      platform.riskLevel === 'Low' ? 'bg-green-500/20 text-green-400' :
                      platform.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {platform.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-[var(--color-text)] font-semibold">{platform.ourRating}/5.0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Platform Cards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">Detailed Platform Reviews</h2>

        <div className="space-y-8">
          {/* CEX Staking Section */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-blue-500 rounded"></span>
              Centralized Exchange (CEX) Staking
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {stakingPlatforms.slice(0, 4).map((platform, idx) => (
                <div key={idx} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-text)]">{platform.name}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">{platform.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{platform.ourRating}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">/5.0</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{platform.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">APY Range</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.apyRange}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Min Stake</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.minStake}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-[var(--color-text-secondary)] mb-2">Supported Assets</div>
                    <div className="flex flex-wrap gap-2">
                      {platform.supportedAssets.slice(0, 4).map((asset, i) => (
                        <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded font-semibold">
                          {asset}
                        </span>
                      ))}
                      {platform.supportedAssets.length > 4 && (
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                          +{platform.supportedAssets.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div>
                      <h5 className="text-xs font-bold text-green-400 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {platform.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-red-400 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {platform.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-red-400 mt-1">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={platform.affiliateUrl} target="_blank" className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-[var(--color-text)] font-semibold py-2 rounded-lg transition-colors">
                    Visit Platform
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Liquid Staking Section */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-purple-500 rounded"></span>
              Liquid Staking Protocols
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {stakingPlatforms.slice(4, 9).map((platform, idx) => (
                <div key={idx} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 hover:border-purple-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-text)]">{platform.name}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">{platform.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{platform.ourRating}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">/5.0</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{platform.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">APY Range</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.apyRange}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Min Stake</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.minStake}</div>
                    </div>
                  </div>

                  {platform.liquidStakingToken && (
                    <div className="mb-4">
                      <div className="text-xs text-[var(--color-text-secondary)] mb-2">Liquid Token</div>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full font-semibold">
                        {platform.liquidStakingToken}
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 mb-4">
                    <div>
                      <h5 className="text-xs font-bold text-green-400 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {platform.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-red-400 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {platform.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-red-400 mt-1">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={platform.affiliateUrl} target="_blank" className="w-full block text-center bg-purple-600 hover:bg-purple-700 text-[var(--color-text)] font-semibold py-2 rounded-lg transition-colors">
                    Visit Protocol
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Restaking Section */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-orange-500 rounded"></span>
              Restaking Protocols (Advanced)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {stakingPlatforms.slice(9, 12).map((platform, idx) => (
                <div key={idx} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 hover:border-orange-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-text)]">{platform.name}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">{platform.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-400">{platform.ourRating}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">/5.0</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-4">{platform.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">APY Range</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.apyRange}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">Lock Period</div>
                      <div className="font-semibold text-[var(--color-text)]">{platform.lockPeriod}</div>
                    </div>
                  </div>

                  {platform.liquidStakingToken && (
                    <div className="mb-4">
                      <div className="text-xs text-[var(--color-text-secondary)] mb-2">Liquid Token</div>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-sm rounded-full font-semibold">
                        {platform.liquidStakingToken}
                      </span>
                    </div>
                  )}

                  <div className="space-y-3 mb-4">
                    <div>
                      <h5 className="text-xs font-bold text-green-400 mb-2">Pros</h5>
                      <ul className="space-y-1">
                        {platform.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-red-400 mb-2">Cons</h5>
                      <ul className="space-y-1">
                        {platform.cons.slice(0, 2).map((con, i) => (
                          <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-2">
                            <span className="text-red-400 mt-1">✗</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={platform.affiliateUrl} target="_blank" className="w-full block text-center bg-orange-600 hover:bg-orange-700 text-[var(--color-text)] font-semibold py-2 rounded-lg transition-colors">
                    Visit Protocol
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Staking Works Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">How Cryptocurrency Staking Works</h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">1</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">Deposit Cryptocurrency</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Send your crypto to a staking platform (CEX, liquid staking protocol, or restaking service)</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-400">2</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">Become a Validator</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Your coins are locked to validate transactions and secure the network</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">Earn Rewards</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Receive newly issued tokens and transaction fees as validator rewards</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-orange-400">4</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)] mb-2">Withdraw Anytime</h4>
                <p className="text-sm text-[var(--color-text-secondary)]">Unstake your coins (instant on liquid protocols, days on others)</p>
              </div>
            </div>
          </div>

          <p className="text-[var(--color-text-secondary)]">
            Traditional Proof of Work blockchains like Bitcoin require miners to spend enormous amounts on electricity and hardware. Proof of Stake is far more energy-efficient and accessible. Instead of solving computational puzzles, validators lock up their own cryptocurrency as a "stake" to have the right to validate transactions. If a validator acts dishonestly or goes offline excessively, they lose part of their stake (slashing). This creates economic incentives for honest behavior.
          </p>

          <p className="text-[var(--color-text-secondary)]">
            The key innovation enabling staking for everyone is liquid staking. Instead of running validator infrastructure yourself or locking coins with a custodian, you can use a liquid staking protocol to receive a tokenized version of your stake (like stETH on Ethereum). This token can be traded, used in DeFi, or held while earning staking rewards - your capital remains liquid and productive rather than locked away.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">Staking vs Yield Farming vs Lending</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Staking</h3>
            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <p><span className="font-semibold text-[var(--color-text)]">APY:</span> 1-15% (varies by asset)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Risk:</span> Low to Medium (depends on platform)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Process:</span> Lock coins to validate network transactions</p>
              <p><span className="font-semibold text-[var(--color-text)]">Lock:</span> None to 30 days (flexible on liquid protocols)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Best For:</span> Long-term holders wanting passive income</p>
              <p className="text-xs border-t border-[var(--color-border)] pt-3 mt-3">
                Safest passive crypto income. Your coins help secure the network. Minimal lock-up with liquid staking.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Yield Farming</h3>
            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <p><span className="font-semibold text-[var(--color-text)]">APY:</span> 5-100%+ (highly variable)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Risk:</span> Medium to High (smart contract risk)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Process:</span> Provide liquidity to DEX pools or lend to protocols</p>
              <p><span className="font-semibold text-[var(--color-text)]">Lock:</span> None (but impermanent loss exposure)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Best For:</span> Active traders with high risk tolerance</p>
              <p className="text-xs border-t border-[var(--color-border)] pt-3 mt-3">
                Higher yields but volatile. Exposed to smart contract risk and impermanent loss if prices move.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">Lending</h3>
            <div className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              <p><span className="font-semibold text-[var(--color-text)]">APY:</span> 2-20% (varies by token/platform)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Risk:</span> Medium (lending/liquidation risks)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Process:</span> Deposit coins to lending protocol, earn interest</p>
              <p><span className="font-semibold text-[var(--color-text)]">Lock:</span> None (can withdraw anytime)</p>
              <p><span className="font-semibold text-[var(--color-text)]">Best For:</span> Conservative income-seekers</p>
              <p className="text-xs border-t border-[var(--color-border)] pt-3 mt-3">
                Middle ground between staking and yield farming. Flexible but less risk-adjusted returns than staking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Considerations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">Risk Considerations When Staking</h2>

        <div className="space-y-6">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8">
            <h3 className="text-lg font-bold text-red-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> Smart Contract Risk
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Liquid staking protocols and restaking platforms are code. Bugs, vulnerabilities, or design flaws could result in loss of funds. All modern protocols are audited, but audits don't guarantee safety. Start with largest protocols (Lido, Rocket Pool) which have billions in TVL and longest track records. Be extra cautious with new protocols and restaking services.
            </p>
          </div>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-8">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> Validator/Slashing Risk
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Validators who misbehave or go offline can face slashing (loss of staked coins). However, on Ethereum, slashing requires deliberate dishonesty - just going offline doesn't result in slashing, only loss of rewards. Liquid staking platforms absorb this risk for you. Restaking adds additional slashing conditions - be careful and understand what AVS (services) you're restaking for.
            </p>
          </div>

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-8">
            <h3 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> Regulatory Risk
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Staking rewards might be subject to specific tax treatment. Some jurisdictions are unclear on whether staking is income or capital appreciation. Some platforms (like Kraken) have been forced to cease staking operations in the US due to SEC scrutiny. Regulations are evolving - always check your local laws and consult a tax professional.
            </p>
          </div>

          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-8">
            <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> Counterparty Risk (CEX)
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Centralized exchange staking means the platform controls your private keys. If the exchange fails, you could lose your funds. However, major exchanges like Coinbase have insurance and regulatory oversight. Always use well-capitalized, regulated exchanges. Consider using liquid staking protocols instead for reduced counterparty risk.
            </p>
          </div>

          <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-8">
            <h3 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span>⚠️</span> Liquidity & Market Risk
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-3">
              Liquid staking tokens trade separately from underlying assets. During extreme market stress, stETH can trade at a discount to ETH. While uncommon, this can amplify losses if you're forced to sell during a crash. Unstaking periods of days/weeks mean you can't immediately exit if you need liquidity.
            </p>
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-8">
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
              <span>✓</span> How to Minimize Risk
            </h3>
            <ul className="text-[var(--color-text-secondary)] space-y-2">
              <li>• Start small - only stake what you can afford to lose completely</li>
              <li>• Diversify - don't put all capital in one platform or token</li>
              <li>• Choose battle-tested platforms - Lido, Rocket Pool, Coinbase have longest track records</li>
              <li>• Understand what you're staking in - avoid complex restaking until comfortable</li>
              <li>• Keep detailed records - for tax and risk management purposes</li>
              <li>• Never stake on unrecommended platforms just for higher APY</li>
              <li>• Consider ladder unstaking - don't unstake everything at once</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <FAQSection faqs={stakingFaqs} title="Crypto Staking FAQ" />
      </section>
    </div>
  );
}
