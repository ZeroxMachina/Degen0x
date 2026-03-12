import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mantle Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Mantle Network ecosystem including its modular L2 architecture, MNT token, DeFi protocols, and how to get started.",
  keywords: ["Mantle", "MNT", "Mantle Network", "Mantle ecosystem", "Mantle DeFi", "modular L2"],
};

export default function MantleEcosystemGuidePage() {
  return (
    <LearnPageLayout title="Mantle Ecosystem Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Mantle Network is a modular Layer 2 scaling solution for Ethereum that separates transaction execution from data availability. Backed by one of the largest DAO treasuries in crypto (BitDAO/Mantle), the network offers low-cost EVM-compatible transactions while leveraging innovative data availability solutions to reduce costs further than traditional rollups."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "mantle-overview", title: "Mantle Overview", level: 2 },
        { id: "architecture", title: "architecture", level: 2 },
        { id: "modular-architecture", title: "Modular Architecture", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "ecosystem", title: "Ecosystem", level: 2 },
        { id: "mnt-token", title: "mnt-token", level: 2 },
        { id: "mnt-token", title: "MNT Token", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "What makes Mantle different from other L2s?", answer: "Mantle uses a modular architecture that separates execution from data availability. Instead of posting all transaction data to Ethereum (which is expensive), Mantle uses its own data availability solution, significantly reducing costs while maintaining security through fraud proofs and Ethereum settlement." },
        { question: "What is the MNT token used for?", answer: "MNT is used for gas fees on Mantle Network, governance voting, and staking. It replaced the BIT token from the BitDAO era. MNT also plays a role in the network's economic security model and can be used as collateral in DeFi protocols on the network." },
        { question: "How is Mantle funded?", answer: "Mantle is backed by the Mantle Treasury, one of the largest DAO-governed treasuries in crypto with billions in assets. This substantial treasury provides long-term funding for ecosystem development, grants, and infrastructure investments." },
        { question: "Is Mantle EVM-compatible?", answer: "Yes, Mantle is fully EVM-compatible. Developers can deploy existing Ethereum smart contracts without modification using familiar tools like Hardhat, Foundry, and standard Ethereum libraries. This makes migration and multi-chain deployment straightforward." },
      ]}
      relatedArticles={[
        { title: "What Is Layer 2?", href: "/learn/what-is-layer-2", category: "Learn" },
        { title: "Arbitrum Ecosystem Guide", href: "/learn/arbitrum-ecosystem-guide", category: "Learn" },
        { title: "Optimism Ecosystem Guide", href: "/learn/optimism-ecosystem-guide", category: "Learn" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Mantle Overview</h2><p>Mantle Network emerged from BitDAO, one of the largest decentralized autonomous organizations in crypto. The transition from BitDAO to Mantle consolidated the project's focus on building Layer 2 infrastructure while leveraging the substantial treasury accumulated by BitDAO. Mantle launched its mainnet in 2023, quickly attracting DeFi protocols and users with its low transaction costs and EVM compatibility.</p><p>The network distinguishes itself through its modular design philosophy and the financial backing of the Mantle Treasury, which holds billions in diversified crypto assets. This treasury enables aggressive ecosystem funding through grants, partnerships, and incentive programs that have accelerated ecosystem growth. Mantle's approach combines technical innovation in data availability with the practical advantage of substantial financial resources for ecosystem development.</p></section>
      <section id="architecture"><h2>Modular Architecture</h2><p>Mantle's modular architecture separates the key functions of a blockchain — execution, data availability, consensus, and settlement — into distinct layers. Transaction execution happens on Mantle's L2, while settlement and dispute resolution occur on Ethereum L1. The key innovation is in data availability: rather than posting all data to Ethereum (expensive), Mantle uses its own data availability solution powered by EigenDA technology.</p><p>This modular approach significantly reduces the cost of operating on Mantle compared to rollups that post all data to Ethereum. The network uses optimistic rollup technology for its execution layer, meaning transactions are assumed valid unless challenged through a fraud proof mechanism. This combination of modular data availability and optimistic execution creates a cost-effective scaling solution that inherits Ethereum's security guarantees for settlement.</p></section>
      <section id="ecosystem"><h2>Ecosystem</h2><p>The Mantle ecosystem includes Agni Finance and FusionX as primary DEXs, Lendle for lending and borrowing, and various yield optimization protocols. The network has attracted bridging infrastructure from major providers, making it easy to move assets from Ethereum and other chains. Mantle's Liquid Staking protocol (mETH) allows users to stake ETH and receive a liquid staking token usable across the ecosystem's DeFi protocols.</p><p>The ecosystem benefits from substantial grant funding through the Mantle Grants Program, which has funded dozens of projects across DeFi, infrastructure, tooling, and gaming. Gaming and entertainment projects have found Mantle attractive due to its low transaction costs, which enable microtransactions and frequent on-chain interactions that would be prohibitively expensive on Ethereum mainnet.</p></section>
      <section id="mnt-token"><h2>MNT Token</h2><p>The MNT token serves as the native gas token for Mantle Network, replacing ETH as the fee currency. This design choice creates organic demand for MNT as the ecosystem grows. MNT is also used for governance, allowing holders to vote on treasury allocations, protocol upgrades, and ecosystem initiatives through the Mantle governance framework.</p><p>The Mantle Treasury's diversified holdings — including ETH, stablecoins, and other digital assets — provide a financial foundation that supports long-term ecosystem development independent of MNT's market price. This treasury model provides stability and funding predictability that newer ecosystems without such resources cannot match.</p></section>
      <section id="getting-started"><h2>Getting Started</h2><p>Add Mantle Network to MetaMask using the official network details from the Mantle documentation. Bridge assets from Ethereum using the official Mantle Bridge or third-party bridges for faster transfers. Acquire MNT for gas fees through exchanges or by bridging. Explore DeFi through Agni Finance or FusionX, consider liquid staking with mETH, and participate in governance with MNT holdings.</p></section>
    </LearnPageLayout>
  );
}
