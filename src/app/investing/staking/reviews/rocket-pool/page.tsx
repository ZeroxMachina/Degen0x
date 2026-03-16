import { Metadata } from "next";
import { stakingPlatforms } from "@/data/staking";
import ReviewPage from "@/components/ReviewPage";

const product = stakingPlatforms.find((p) => p.slug === "rocket-pool")!;

export const metadata: Metadata = {
  title: "Rocket Pool Review 2026: Fees, Yields, Pros & Cons",
  description:
    "Our in-depth Rocket Pool review covers rETH, decentralized node operation, fees, yields, and whether it's the right staking protocol for you. Updated March 2026.",
};

export default function RocketPoolReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Staking"
      categorySlug="investing/staking"
      overview="Rocket Pool launched in November 2021 as the first truly decentralized Ethereum liquid staking protocol. Unlike Lido's curated operator model, Rocket Pool allows anyone to run a node with just 8 ETH (plus RPL collateral), creating a permissionless and censorship-resistant validator network. The protocol issues rETH as its liquid staking token, which appreciates in value over time rather than rebasing like stETH.

Rocket Pool has established itself as the go-to choice for Ethereum purists who prioritize decentralization above all else. The protocol has attracted over $3 billion in TVL and operates thousands of individual node operators distributed across the globe. Its Atlas upgrade introduced 8-ETH minipools (reduced from 16 ETH), further lowering the barrier to node operation.

The protocol's dual-token system uses RPL as both a governance token and node operator insurance collateral. Node operators must stake RPL worth at least 10% of their borrowed ETH as a security bond, creating aligned incentives between operators and stakers. This mechanism provides an additional layer of protection against slashing events."
      sections={[
        {
          id: "reth-mechanics",
          title: "rETH Mechanics & How It Works",
          content:
            "rETH is a value-accruing liquid staking token, meaning your rETH balance stays the same while its exchange rate relative to ETH increases over time. When you deposit ETH into Rocket Pool, you receive rETH at the current exchange rate. As the protocol earns staking rewards, the rETH/ETH exchange rate gradually increases. For example, if 1 rETH equals 1.05 ETH today and the protocol earns rewards, it might equal 1.055 ETH next week. This model is often preferred for DeFi integrations and may have simpler tax implications compared to rebasing tokens, since there are no daily balance changes to track.",
        },
        {
          id: "node-operation",
          title: "Decentralized Node Operation",
          content:
            "Rocket Pool's permissionless node operation is its defining feature. Anyone with 8 ETH and sufficient RPL collateral can create a minipool and begin validating. The remaining ETH needed (24 ETH) comes from the rETH staker pool. This design means Rocket Pool's validator set is truly decentralized with thousands of independent operators worldwide. Node operators earn a higher effective APY than regular stakers because they earn commission on the pooled ETH they validate, plus RPL rewards. The protocol uses a smart contract-based system that handles validator lifecycle management, reward distribution, and slashing insurance automatically.",
        },
        {
          id: "security-model",
          title: "Security Model & RPL Collateral",
          content:
            "Rocket Pool's security model centers on RPL collateral requirements for node operators. Each node operator must stake RPL tokens worth at least 10% of their borrowed ETH value. This collateral serves as first-line insurance against slashing losses. If a node operator is slashed, their RPL collateral is sold to compensate the affected rETH stakers. This creates strong economic incentives for operators to maintain proper validator operations. Additionally, the protocol has undergone multiple security audits and operates a bug bounty program. The smart contract architecture is designed to isolate risk between individual minipools.",
        },
        {
          id: "defi-composability",
          title: "DeFi Composability",
          content:
            "rETH's DeFi integration has grown substantially, though it still trails stETH in total number of integrations. rETH is accepted as collateral on Aave, available in Balancer and Uniswap liquidity pools, and supported by several yield aggregators. The non-rebasing nature of rETH makes it simpler to integrate into DeFi protocols compared to stETH. Rocket Pool has actively pursued partnerships to expand rETH's utility across the DeFi ecosystem, and the token's availability on Layer 2 networks like Arbitrum and Optimism has improved accessibility and reduced gas costs for users.",
        },
        {
          id: "governance-community",
          title: "Governance & Community",
          content:
            "Rocket Pool operates a dual governance system with the Protocol DAO (pDAO) for on-chain governance and the Oracle DAO (oDAO) for oracle-dependent operations. The pDAO consists of RPL holders who vote on protocol parameters, treasury spending, and upgrade proposals. The community is notably engaged, with active forums, Discord, and regular governance discussions. Rocket Pool's community is often cited as one of the most passionate and technically sophisticated in the Ethereum staking ecosystem, driven by shared values of decentralization and protocol minimalism.",
        },
      ]}
      fees={{
        "Staking Fee": "14% of staking rewards",
        "Node Operators": "Variable commission (average 14%)",
        "Withdrawal Fee": "None",
        "Minimum Stake (Staker)": "0.01 ETH",
        "Minimum Stake (Node Operator)": "8 ETH + RPL collateral",
        "RPL Collateral Requirement": "10%–150% of borrowed ETH value",
      }}
      security={[
        "Multiple independent audits from Trail of Bits, Sigma Prime, and Consensys Diligence",
        "RPL collateral system provides first-line insurance against slashing losses",
        "Isolated minipool architecture prevents cross-contamination between validators",
        "Permissionless and censorship-resistant validator network with no single point of failure",
        "Bug bounty program through Immunefi with significant rewards",
        "Open-source codebase with active community review and development",
        "Oracle DAO provides trusted data feeds with multi-sig safety mechanisms",
      ]}
      features={[
        "rETH value-accruing liquid staking token for DeFi composability",
        "Permissionless node operation with 8 ETH minimum (plus RPL)",
        "Decentralized validator network with thousands of independent operators",
        "RPL tokenomics with staking rewards and governance utility",
        "Layer 2 support on Arbitrum and Optimism for reduced gas costs",
        "Smoothing pool for more consistent node operator rewards",
        "Dual governance with Protocol DAO and Oracle DAO",
      ]}
      faqs={[
        {
          question: "Is Rocket Pool more decentralized than Lido?",
          answer:
            "Yes. Rocket Pool is widely considered the most decentralized liquid staking protocol. Anyone can run a node permissionlessly with 8 ETH plus RPL collateral, compared to Lido's curated operator set. Rocket Pool has thousands of independent node operators globally, while Lido operates through approximately 30 selected operators.",
        },
        {
          question: "Why is Rocket Pool's fee higher than Lido's?",
          answer:
            "Rocket Pool's effective fee is approximately 14% of rewards, compared to Lido's 10%. The higher fee reflects the protocol's more decentralized and permissionless design, which has higher operational overhead. Node operators individually set their commission rates, and the RPL collateral system adds an additional layer of security that contributes to the overall cost structure.",
        },
        {
          question: "Can I run a Rocket Pool node?",
          answer:
            "Yes, anyone can run a Rocket Pool node by depositing 8 ETH and staking RPL tokens worth at least 10% of the borrowed ETH. You will also need dedicated hardware or a VPS with reliable uptime. Rocket Pool provides detailed guides and the community offers extensive support for new node operators.",
        },
        {
          question: "How does rETH compare to stETH?",
          answer:
            "rETH is a value-accruing token (balance stays the same, price increases), while stETH is a rebasing token (balance increases daily). rETH has fewer DeFi integrations but may be simpler for tax purposes. stETH has deeper liquidity and wider DeFi support. Both represent staked ETH and earn similar base yields.",
        },
      ]}
      relatedReviews={[
        { name: "Lido", slug: "lido" },
        { name: "StakeWise", slug: "stakewise" },
        { name: "EigenLayer", slug: "eigenlayer" },
      ]}
      relatedGuides={[
        { title: "Validator Guide", href: "/investing/staking/learn/validator-guide" },
        { title: "Liquid Staking Explained", href: "/investing/staking/learn/liquid-staking-explained" },
      ]}
    />
  );
}
