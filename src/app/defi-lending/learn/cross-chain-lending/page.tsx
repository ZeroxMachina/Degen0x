import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cross-Chain DeFi Lending (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to cross-chain DeFi lending. Learn how to lend and borrow across different blockchains, the protocols enabling it, and the risks of multi-chain lending.",
};

export default function CrossChainLendingPage() {
  return (
    <LearnPageLayout title="Cross-Chain DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="As DeFi expands across multiple blockchains, cross-chain lending has emerged as a way to unify liquidity and enable borrowing on one chain using collateral on another. This capability addresses the liquidity fragmentation problem where capital is siloed across Ethereum, Arbitrum, Optimism, Base, Polygon, and other networks. Several approaches to cross-chain lending exist, each with different trust assumptions and trade-offs."
      toc={[{ id: "fragmentation-problem", title: "The Liquidity Fragmentation Problem", level: 2 }, { id: "approaches", title: "Cross-Chain Lending Approaches", level: 2 }, { id: "protocols", title: "Key Protocols", level: 2 }, { id: "risks", title: "Cross-Chain Risks", level: 2 }]}
      faqs={[
        { question: "Can I deposit on one chain and borrow on another?", answer: "Yes, though the options are still developing. Aave V3 Portals enable cross-chain liquidity flow through approved bridges. Some protocols like Radiant (despite its exploit) aimed for native cross-chain lending. In practice, many users bridge assets manually between chains to access lending on each." },
        { question: "Is cross-chain lending safe?", answer: "Cross-chain lending adds bridge risk on top of standard lending risk. Bridge exploits have been among the largest DeFi hacks (Wormhole, Ronin). Every cross-chain interaction introduces trust assumptions about the bridging mechanism. The technology is still maturing." },
        { question: "Which chains have the best lending opportunities?", answer: "Ethereum has the deepest liquidity and most established protocols. Arbitrum and Base have growing lending ecosystems with lower gas costs. Optimism offers lending through Aave and Sonne. Solana has a separate ecosystem with Kamino and MarginFi. Compare rates across chains using DeFiLlama." },
      ]}
      relatedArticles={[
        { title: "Top Lending Protocols", href: "/defi-lending/learn/lending-protocols-compared", category: "DeFi Lending" },
        { title: "Bridge Hack Insurance", href: "/insurance/learn/bridge-hack-insurance", category: "Insurance" },
        { title: "Layer 1 Comparison", href: "/long-term/learn/layer-1-comparison", category: "Long-Term" },
      ]}
    >
      <h2 id="fragmentation-problem">The Liquidity Fragmentation Problem</h2>
      <p>DeFi liquidity is spread across many chains. USDC lending pools exist on Ethereum, Arbitrum, Optimism, Polygon, Base, Avalanche, and more. Each pool operates independently with its own supply, demand, and interest rates. This fragmentation means: rates can vary significantly across chains for the same asset, capital efficiency is reduced as lenders must choose which chain to deploy on, and borrowers on one chain cannot easily access liquidity on another. The ideal solution would allow seamless lending and borrowing across all chains, with capital flowing automatically to where it is needed most. Current solutions range from manual bridging to protocol-native cross-chain features.</p>

      <h2 id="approaches">Cross-Chain Lending Approaches</h2>
      <p>The simplest approach is manual bridging: move assets between chains using a bridge and deposit into the lending protocol on each chain. This is the most common method but requires managing multiple positions and paying bridging costs. Protocol-native approaches include Aave V3 Portals, which allow approved bridge protocols to mint unbacked aTokens on the destination chain, with the backing transferred asynchronously. Messaging-layer approaches like Radiant&apos;s LayerZero integration attempt real-time cross-chain position management. Account abstraction solutions allow interaction with multiple chains from a single interface, abstracting the bridging complexity. Chain abstraction protocols aim to make the underlying chain invisible to the user, routing lending operations to the optimal chain automatically. The field is evolving rapidly with new bridging technology and interoperability standards.</p>

      <h2 id="protocols">Key Protocols</h2>
      <p>Aave V3 is deployed on more chains than any other lending protocol, with its Portal feature enabling some cross-chain liquidity flow. Each Aave deployment operates as an independent market governed by the same DAO. Compound III has expanded to a few chains beyond Ethereum. Morpho Blue is being deployed across multiple chains with the same minimal lending logic on each. For Solana, Kamino Finance and MarginFi serve as the primary lending protocols. Each chain&apos;s lending ecosystem has its own characteristics: Arbitrum tends to have the deepest L2 lending liquidity, Base is growing rapidly with Coinbase ecosystem support, and Optimism hosts Aave and several other lending protocols. When choosing where to lend across chains, consider the total TVL on that chain&apos;s deployment, the gas costs for interaction, and the reliability of any bridges needed to move funds.</p>

      <h2 id="risks">Cross-Chain Risks</h2>
      <p>Bridge risk is the primary additional danger in cross-chain lending. Bridge exploits have resulted in some of the largest losses in DeFi history, including the Wormhole ($320 million), Ronin ($625 million), and Nomad ($190 million) bridge hacks. Every cross-chain interaction depends on the security of the bridging mechanism. Wrapped assets (WBTC, bridged USDC) carry custodian or bridge risk in addition to the underlying asset risk. Messaging protocols (LayerZero, Axelar, Wormhole) introduce their own trust assumptions about validator sets and message verification. Finality differences between chains can create issues during reorgs or network instability. Oracle coverage may be less robust on smaller chains, increasing oracle risk. Cross-chain liquidation is more complex and may be slower or less reliable than single-chain liquidation. Given these additional risks, conservative cross-chain lending involves using the most established bridges and chains, keeping positions monitored, and not relying on cross-chain features for time-critical operations.</p>
    </LearnPageLayout>
  );
}
