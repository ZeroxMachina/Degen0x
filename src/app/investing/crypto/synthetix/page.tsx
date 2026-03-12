import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Synthetix (SNX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Synthetix (SNX), the DeFi protocol for synthetic assets and perpetual futures. Discover SNX tokenomics, staking, and how to buy.",
};

export default function SynthetixPage() {
  return (
    <LearnPageLayout
      title="What Is Synthetix (SNX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Synthetix (SNX) is a decentralized protocol that enables the creation and trading of synthetic assets on Ethereum and Optimism. By staking SNX as collateral, users can mint synthetic tokens (Synths) that track the price of real-world assets, cryptocurrencies, and other financial instruments. Synthetix also powers several DeFi derivatives platforms."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-synthetix", title: "What Is Synthetix?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-synthetix-work", title: "How Does Synthetix Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "snx-tokenomics", title: "SNX Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-snx", title: "How to Buy SNX", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Synthetix?",
          answer:
            "Synthetix is a DeFi protocol for creating synthetic assets that mirror the price of real-world and crypto assets. SNX token holders stake their tokens as collateral to back the system and earn fees from trading activity on platforms built on Synthetix.",
        },
        {
          question: "Where can I buy SNX?",
          answer:
            "SNX is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on Uniswap and Velodrome on Optimism.",
        },
        {
          question: "Is Synthetix a good investment?",
          answer:
            "SNX offers unique exposure to the DeFi derivatives sector with a well-established protocol. Staking yields can be attractive, but the protocol's complexity, high collateralization requirements, and competitive landscape are important considerations.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Synthetix?</h2>
        <p>
          Synthetix is a decentralized liquidity protocol on Ethereum and Optimism that enables the creation and trading of synthetic assets. Founded in 2017, Synthetix allows users to gain exposure to assets like currencies, commodities, stocks, and crypto indices without directly holding the underlying assets. The protocol serves as a liquidity layer that powers perpetual futures platforms like Kwenta and Polynomial.
        </p>
        <p>
          Synthetix V3 represents a major architectural upgrade that modularizes the protocol, allowing developers to build custom derivatives markets and leverage Synthetix liquidity for various use cases. This evolution positions Synthetix as a foundational layer for the broader DeFi derivatives ecosystem.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Synthetix Work?</h2>
        <p>
          The Synthetix protocol operates through a pooled collateral model. SNX holders stake their tokens to provide collateral backing for all synthetic assets in the system. When traders open positions through Synthetix-powered platforms, they trade against this pool of SNX collateral rather than against individual counterparties. This design provides deep liquidity with zero slippage for any supported asset.
        </p>
        <p>
          Stakers must maintain a collateralization ratio (typically around 400-500%) to ensure the system remains solvent. In return, stakers earn a proportional share of trading fees generated across all Synthetix-powered platforms. The protocol uses Chainlink oracles to provide accurate price feeds for synthetic assets, ensuring that Synths accurately track their reference prices.
        </p>
      </section>

      <section id="tokenomics">
        <h2>SNX Tokenomics</h2>
        <p>
          SNX has a circulating supply of approximately 330 million tokens. The token was previously inflationary to incentivize staking, but inflation has been significantly reduced as the protocol matured. SNX stakers earn trading fees paid in sUSD (Synthetix's stablecoin) and can also receive additional rewards. The high collateralization requirement means a significant portion of SNX is locked in staking, reducing liquid circulating supply. Synthetix V3 introduces new staking mechanics and multi-collateral pools.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          SNX is used for staking to provide system collateral and earn trading fees, governance voting on protocol parameters and upgrades, and as exposure to the DeFi derivatives sector. The Synthetix protocol enables perpetual futures trading on platforms like Kwenta, atomic swaps between synthetic assets, and access to assets that may be restricted in certain jurisdictions. The protocol's liquidity layer model means it benefits from all trading activity across the platforms built on top of it.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy SNX</h2>
        <p>
          SNX is available on Coinbase, Binance, Kraken, and most major exchanges. On decentralized exchanges, it can be purchased on Uniswap (Ethereum) or Velodrome (Optimism). After purchasing, many holders choose to stake SNX on the Synthetix platform to earn trading fee rewards, which requires maintaining the protocol's collateralization ratio. Store SNX in MetaMask, Ledger, or any Ethereum-compatible wallet for self-custody and staking participation.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Synthetix involves significant complexity that can be challenging for non-technical users. Stakers take on counterparty risk against all traders in the system, meaning if traders are collectively profitable, stakers may face losses. The high collateralization requirement ties up substantial capital. Oracle dependence creates risk if price feeds are inaccurate or manipulated. Competition from centralized perpetual platforms and other DeFi derivatives protocols like GMX and dYdX is intense. The V3 migration introduces transition risks as the protocol shifts to its new architecture.
        </p>
      </section>
    </LearnPageLayout>
  );
}
