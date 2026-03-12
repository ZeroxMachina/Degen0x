import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Dymension (DYM)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Dymension (DYM), the protocol for easily deploying rollups (RollApps). Discover how it works, tokenomics, use cases, and how to buy DYM.",
};

export default function DymensionPage() {
  return (
    <LearnPageLayout
      title="What Is Dymension (DYM)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Dymension is a network of easily deployable modular blockchains called RollApps. Built on the Cosmos SDK, Dymension provides the settlement layer, sequencing, and inter-rollup communication for application-specific rollups that can be deployed with minimal configuration. DYM is the native token used for gas, staking, and governance."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-dymension", title: "What Is Dymension?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-dymension-work", title: "How Does Dymension Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "dym-tokenomics", title: "DYM Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-dym", title: "How to Buy DYM", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Dymension?",
          answer: "Dymension is a protocol for deploying application-specific rollups (RollApps) with built-in settlement, sequencing, and cross-rollup communication in the Cosmos ecosystem.",
        },
        {
          question: "Where can I buy DYM?",
          answer: "DYM is available on Binance, KuCoin, Gate.io, and Osmosis DEX.",
        },
        {
          question: "Is Dymension a good investment?",
          answer: "Dymension simplifies rollup deployment but is early-stage with limited adoption. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Celestia", href: "/investing/crypto/celestia", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Dymension?</h2>
      <p>
        Dymension was founded by Yishay Harel and launched its mainnet in early 2024 with a large community airdrop to Cosmos ecosystem participants. The protocol creates a standardized framework for deploying application-specific rollups called RollApps, dramatically lowering the technical barrier to launching a blockchain. Dymension acts as the hub that provides settlement, consensus, and inter-RollApp communication.
      </p>
      <p>
        Each RollApp functions as its own blockchain optimized for a specific use case, such as a game, DeFi protocol, or social application. RollApps use Dymension for settlement and can leverage external data availability layers like Celestia for data publication. The IBC (Inter-Blockchain Communication) protocol enables seamless asset transfers and communication between RollApps and other Cosmos chains.
      </p>

      <h2 id="how-it-works">How Does Dymension Work?</h2>
      <p>
        Developers deploy RollApps using the Dymension RDK (RollApp Development Kit), specifying parameters like token economics, execution environment, and data availability layer. The Dymension Hub serves as the settlement and coordination layer, verifying RollApp state transitions and enabling cross-RollApp transfers. Sequencers order transactions for each RollApp and post state commitments to the Hub.
      </p>

      <h2 id="tokenomics">DYM Tokenomics</h2>
      <p>
        DYM has an initial supply distributed through the genesis airdrop, staking rewards, community pool, and contributor allocations. The token is used for transaction fees on the Dymension Hub, staking with validators, governance voting, and as the default gas token for RollApps. RollApps can also use their own tokens for gas while settling on DYM.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Dymension enables rapid deployment of application-specific rollups, cross-rollup asset transfers and communication, modular blockchain architecture combining settlement (Dymension), data availability (Celestia), and custom execution environments. The platform targets developers who want dedicated blockchain performance for their application without building infrastructure from scratch.
      </p>

      <h2 id="how-to-buy">How to Buy DYM</h2>
      <p>
        To buy DYM, register on Binance, KuCoin, or Gate.io. Complete identity verification, deposit funds, and purchase DYM tokens. You can also acquire DYM through Osmosis DEX in the Cosmos ecosystem. After buying, stake DYM through Keplr wallet for staking rewards and governance participation.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Dymension is early-stage with limited RollApp deployment and usage. The modular blockchain thesis is still being validated, and demand for application-specific rollups may be smaller than projected. Competition from other rollup deployment platforms (AltLayer, Saga, Caldera) fragments the market. Token inflation from staking rewards dilutes holders.
      </p>
      <p>
        The Cosmos ecosystem, while technically strong, has smaller overall TVL and user base compared to Ethereum and Solana. RollApp development and user adoption timelines are uncertain. The value accrual mechanism for DYM depends on RollApp activity generating meaningful transaction fees, which has not yet been demonstrated at scale.
      </p>
    </LearnPageLayout>
  );
}
