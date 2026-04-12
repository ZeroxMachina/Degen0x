import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { stakingPlatforms } from "@/data/staking";
import ReviewPage from "@/components/ReviewPage";

const product = stakingPlatforms.find((p) => p.slug === "lido")!;

export const metadata: Metadata = {
  title: "Lido Review 2026: Fees, Yields, Pros & Cons",
  description:
    "Our in-depth Lido review covers staking yields, fees, stETH mechanics, DeFi integrations, and whether it's the right liquid staking protocol for you. Updated March 2026.",
  alternates: { canonical: "/investing/staking/reviews/lido" }};

export default function LidoReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Staking"
      categorySlug="investing/staking"
      overview="Lido was launched in December 2020 to solve one of Ethereum's biggest barriers to staking adoption: the 32 ETH minimum requirement and the inability to use staked assets elsewhere. By pooling user deposits and distributing them across a curated set of professional node operators, Lido enables anyone to stake any amount of ETH while receiving stETH, a liquid staking token that represents their staked position plus accumulated rewards.

Since its launch, Lido has grown to become the largest staking protocol in the entire crypto ecosystem, with over $14 billion in total value locked. stETH has become a foundational DeFi primitive, accepted as collateral on Aave, Compound, MakerDAO, and integrated across hundreds of other protocols. The protocol is governed by the Lido DAO through the LDO governance token, which votes on key decisions including node operator selection, fee structures, and protocol upgrades.

Lido's stETH uses a rebasing mechanism, meaning your stETH balance increases automatically each day as staking rewards are earned. This makes it simple to track rewards but has implications for tax reporting and some DeFi integrations. The protocol also offers wstETH (wrapped stETH), a non-rebasing version that is preferred for certain DeFi use cases."
      sections={[
        {
          id: "steth-mechanics",
          title: "stETH Mechanics & How It Works",
          content:
            "When you deposit ETH into Lido, you receive stETH at a 1:1 ratio. Your stETH balance then increases daily as the protocol earns staking rewards. For example, if you stake 10 ETH and the daily reward rate is 0.008%, your balance will show 10.0008 stETH the next day. This rebasing mechanism means rewards are automatically compounded without any action on your part. For DeFi protocols that do not support rebasing tokens, Lido offers wstETH (wrapped stETH), which maintains a constant balance while appreciating in value relative to ETH. Converting between stETH and wstETH is free and instant through the Lido interface.",
        },
        {
          id: "defi-integrations",
          title: "DeFi Integrations & Composability",
          content:
            "stETH's DeFi integration is unmatched in the liquid staking space. It is accepted as collateral on major lending protocols including Aave, Compound, and MakerDAO, allowing users to borrow stablecoins against their staked ETH. The Curve stETH-ETH pool is one of the deepest liquidity pools in DeFi, enabling efficient swaps between stETH and ETH. Additionally, stETH and wstETH are integrated into yield aggregators like Yearn, liquidity protocols like Balancer, and derivatives platforms. This deep composability means stETH holders can layer additional yield strategies on top of their base staking returns, though each additional layer adds smart contract risk.",
        },
        {
          id: "validator-set",
          title: "Validator Set & Decentralization",
          content:
            "Lido operates through a curated set of approximately 30 professional node operators, selected and monitored by the Lido DAO. These operators include well-known infrastructure providers and staking firms. While this approach ensures high-quality validator operations and consistent uptime, it has drawn criticism for centralization since Lido controls roughly 30% of all staked ETH. The protocol has taken steps to address these concerns through its DVT (Distributed Validator Technology) integration and Community Staking Module, which aims to enable permissionless validator participation. The Lido DAO has also committed to a self-limit of 22% of total Ethereum stake, though this is a governance commitment rather than a technical constraint.",
        },
        {
          id: "withdrawals",
          title: "Withdrawals & Unstaking",
          content:
            "Lido supports direct withdrawals through its protocol, where users can request to redeem stETH for ETH. The withdrawal process typically takes 1-5 days depending on the Ethereum withdrawal queue length. There is no fee for direct withdrawals. Alternatively, users can swap stETH for ETH instantly on decentralized exchanges like Curve or Uniswap, though this may involve a small price impact depending on the pool's liquidity depth and the trade size. During normal market conditions, the stETH-ETH exchange rate is extremely close to 1:1.",
        },
        {
          id: "governance",
          title: "Governance & DAO Structure",
          content:
            "The Lido protocol is governed by the Lido DAO, where LDO token holders vote on proposals affecting the protocol. Key governance decisions include adding or removing node operators, adjusting fee structures, managing the protocol treasury, and approving protocol upgrades. Governance participation has been active, with regular votes on important protocol changes. The DAO also manages grants for ecosystem development and research. While the governance structure is functional, some community members have raised concerns about the concentration of LDO tokens among early investors and team members, which could influence governance outcomes.",
        },
      ]}
      fees={{
        "Staking Fee": "10% of staking rewards",
        "Node Operators": "5% (half of protocol fee)",
        "Lido DAO Treasury": "5% (half of protocol fee)",
        "Withdrawal Fee": "None",
        "stETH to wstETH Wrap": "Free (gas only)",
        "Minimum Stake": "No minimum",
      }}
      security={[
        "Multiple independent security audits from firms including Quantstamp, MixBytes, and Sigma Prime",
        "Bug bounty program with rewards up to $250,000 for critical vulnerabilities",
        "Insurance fund accumulated from protocol fees to cover slashing events",
        "Timelocked governance actions with delay periods for critical changes",
        "Node operator diversification across multiple infrastructure providers and geographic regions",
        "Open-source codebase with continuous community review and monitoring",
        "Emergency governance mechanisms for rapid response to critical situations",
      ]}
      features={[
        "Liquid staking with stETH rebasing token for automatic reward compounding",
        "wstETH non-rebasing wrapper for DeFi compatibility",
        "Integration with 100+ DeFi protocols for lending, borrowing, and yield farming",
        "Direct withdrawal support with no fees and typical 1-5 day processing",
        "Ethereum-native staking with curated professional node operators",
        "Community Staking Module for expanding validator participation",
        "Governance through Lido DAO with active proposal and voting system",
      ]}
      faqs={[
        {
          question: "Is Lido safe to use?",
          answer:
            "Lido is the most battle-tested liquid staking protocol with over $14 billion in TVL and years of operation without a major security incident. The protocol has undergone multiple independent audits and runs a bug bounty program. However, like all DeFi protocols, it carries smart contract risk. Diversifying across multiple staking solutions is recommended for large positions.",
        },
        {
          question: "What is the difference between stETH and wstETH?",
          answer:
            "stETH is a rebasing token whose balance increases daily as staking rewards accrue. wstETH is a wrapped version with a fixed balance that appreciates in price. wstETH is preferred for DeFi protocols that do not support rebasing and can be simpler for tax accounting. Both represent the same underlying staked ETH.",
        },
        {
          question: "How does Lido's 10% fee compare to competitors?",
          answer:
            "Lido's 10% fee on staking rewards is competitive for Ethereum liquid staking. Rocket Pool charges 14%, Coinbase charges 25-35%, and StakeWise charges 5%. The fee is split equally between node operators (5%) and the Lido DAO treasury (5%). Despite the fee, Lido's deep DeFi integrations often allow users to earn more through composability than the fee costs.",
        },
        {
          question: "Can I use stETH in DeFi?",
          answer:
            "Yes, stETH and wstETH are among the most widely integrated DeFi assets. You can use them as collateral on Aave and Compound to borrow stablecoins, provide liquidity on Curve and Balancer, or use them in yield farming strategies. This composability is one of Lido's key advantages.",
        },
      ]}
      relatedReviews={[
        { name: "Rocket Pool", slug: "rocket-pool" },
        { name: "EigenLayer", slug: "eigenlayer" },
        { name: "StakeWise", slug: "stakewise" },
      ]}
      relatedGuides={[
        { title: "What Is Staking?", href: "/investing/staking/learn/what-is-staking" },
        { title: "Liquid Staking Explained", href: "/investing/staking/learn/liquid-staking-explained" },
      ]}
    />
  );
}
