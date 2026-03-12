import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is RedStone (RED)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about RedStone (RED), the modular oracle delivering data to DeFi. Discover how it works, tokenomics, use cases, and how to buy RED.",
};

export default function RedStonePage() {
  return (
    <LearnPageLayout
      title="What Is RedStone (RED)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="RedStone is a modular oracle protocol that delivers data to DeFi applications using an innovative approach where signed data packages are attached to user transactions rather than continuously pushed on-chain. This design dramatically reduces oracle operating costs while providing flexible, high-frequency data delivery for lending protocols, DEXs, and other DeFi applications across multiple blockchains."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-redstone", title: "What Is RedStone?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-redstone-work", title: "How Does RedStone Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "red-tokenomics", title: "RED Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-red", title: "How to Buy RED", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is RedStone?",
          answer:
            "RedStone is a modular oracle that delivers signed data packages in user transactions, reducing costs while providing high-frequency data for DeFi. It supports LST/LRT pricing and is integrated with major lending protocols.",
        },
        {
          question: "Where can I buy RED?",
          answer:
            "RED is available on Binance, OKX, Bybit, and other major exchanges following its token launch. Check current listings on CoinGecko.",
        },
        {
          question: "Is RedStone a good investment?",
          answer:
            "RedStone has strong DeFi integrations and innovative oracle design, but competes with Chainlink and Pyth for market share. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is RedStone?</h2>
      <p>
        RedStone was founded by Jakub Wojciechowski and launched with the goal of creating a more efficient oracle model for DeFi. The protocol recognized that traditional push-based oracles waste significant resources updating prices on-chain even when no one needs the data at that moment. RedStone&apos;s pull-based model only delivers data when it is actually needed, bundled with user transactions, making it significantly more cost-effective.
      </p>
      <p>
        The protocol has gained significant traction in the liquid staking and restaking sectors, providing pricing for LST (Liquid Staking Tokens) and LRT (Liquid Restaking Tokens) assets that many other oracles do not support. Major DeFi protocols including EtherFi, Morpho, Venus, and Pendle rely on RedStone for accurate pricing of these newer asset classes. RedStone is deployed across Ethereum, Arbitrum, Optimism, Base, and numerous other chains.
      </p>

      <h2 id="how-it-works">How Does RedStone Work?</h2>
      <p>
        RedStone data providers collect prices from multiple sources, sign the data with their cryptographic keys, and store the signed packages on a decentralized cache layer. When a user interacts with a DeFi protocol that uses RedStone, the protocol&apos;s frontend automatically fetches the latest signed data and includes it in the transaction calldata. The on-chain smart contract verifies the signatures before using the data.
      </p>
      <p>
        RedStone also offers a push-based model (RedStone Classic) for protocols that need traditional on-chain price feeds. The Core model supports EVM calldata injection for maximum gas efficiency. The X model uses a dedicated data availability layer for cross-chain data delivery. This modular approach allows each protocol to choose the delivery model that best fits their needs and gas budget.
      </p>

      <h2 id="tokenomics">RED Tokenomics</h2>
      <p>
        RED is the native token of the RedStone ecosystem. The token is used for staking by data providers to ensure honest data reporting, governance over protocol parameters and data provider approvals, and incentivizing the growth of the data provider network. Data providers stake RED as collateral that can be slashed for inaccurate data delivery. Token holders participate in governance over the curation of data providers and oracle configurations.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        RedStone provides pricing for liquid staking and restaking tokens (stETH, weETH, rsETH, etc.), DeFi lending protocol price feeds with gas-efficient delivery, DEX and derivatives platform oracle data, cross-chain data delivery for multi-chain protocols, and real-world asset price feeds for tokenized asset platforms. The protocol excels at pricing long-tail and exotic DeFi assets that larger oracles may not support.
      </p>

      <h2 id="how-to-buy">How to Buy RED</h2>
      <p>
        To buy RED, check Binance, OKX, or Bybit for available trading pairs. Complete identity verification, deposit funds, and purchase RED tokens. After purchasing, stake RED to participate in the oracle network&apos;s security or hold for governance participation. Store RED in MetaMask or a hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        RedStone&apos;s pull-based model requires frontend integration, which adds complexity compared to traditional push oracles. If a protocol&apos;s frontend fails to include RedStone data in a transaction, the oracle feed may be stale. Chainlink&apos;s dominant market position and established trust make it difficult for newer oracles to displace. Competition from Pyth, API3, and others fragments the alternative oracle market.
      </p>
      <p>
        The data provider network&apos;s size and decentralization affect security guarantees. Revenue from oracle services must grow to justify token valuation. The reliance on DeFi protocol integrations means that any downturn in DeFi activity directly impacts RedStone&apos;s usage. Pricing exotic assets like LRTs carries additional risk if the underlying pricing methodologies are flawed.
      </p>
    </LearnPageLayout>
  );
}
