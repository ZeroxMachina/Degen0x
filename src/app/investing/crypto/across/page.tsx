import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Across Protocol (ACX)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Across Protocol (ACX), the optimistic bridge powered by UMA's oracle. Discover how it works, tokenomics, use cases, and how to buy ACX.",
};

export default function AcrossPage() {
  return (
    <LearnPageLayout
      title="What Is Across Protocol (ACX)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Across Protocol is a cross-chain bridge that uses an optimistic oracle verification system powered by UMA to provide fast and capital-efficient token transfers between Ethereum and Layer 2 networks. Known for its speed and low fees, Across has become a popular bridge choice for users moving assets between rollups."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-across-protocol", title: "What Is Across Protocol?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-across-protocol-work", title: "How Does Across Protocol Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "acx-tokenomics", title: "ACX Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-acx", title: "How to Buy ACX", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Across Protocol?",
          answer:
            "Across Protocol is a cross-chain bridge using UMA's optimistic oracle for fast, capital-efficient token transfers between Ethereum and Layer 2 networks like Arbitrum, Optimism, and Base.",
        },
        {
          question: "Where can I buy ACX?",
          answer:
            "ACX is available on Coinbase, Gate.io, MEXC, and Uniswap. It trades against USDT and ETH pairs.",
        },
        {
          question: "Is Across Protocol a good investment?",
          answer:
            "Across has strong bridge market share and a unique relayer-based architecture, but bridge revenue depends on cross-chain activity levels. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Optimism", href: "/investing/crypto/optimism", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Across Protocol?</h2>
      <p>
        Across Protocol was developed by Risk Labs, the same team behind UMA (Universal Market Access), and launched in late 2022. The bridge was designed to solve the capital inefficiency problem that plagued earlier bridge designs. Instead of requiring massive liquidity pools on every chain, Across uses a relayer network where individual operators front capital to fill bridge transfers instantly and get reimbursed from a unified liquidity pool on Ethereum.
      </p>
      <p>
        This architecture makes Across one of the fastest and cheapest bridges in the ecosystem, with transfers typically completing in minutes. The protocol has gained significant market share in the L2 bridge sector, particularly for routes between Ethereum, Arbitrum, Optimism, Base, Polygon, and other EVM chains. Across is also a key infrastructure component for chain abstraction solutions.
      </p>

      <h2 id="how-it-works">How Does Across Protocol Work?</h2>
      <p>
        When a user initiates a bridge transfer, a relayer detects the deposit on the source chain and immediately sends funds to the user on the destination chain from their own balance. The relayer then submits a proof of the fill to the Across system, which verifies the transaction using UMA&apos;s optimistic oracle. After a verification period, the relayer is reimbursed from the Across liquidity pool on Ethereum mainnet, plus a fee.
      </p>
      <p>
        This intents-based design separates the user experience (fast transfers) from the settlement process (optimistic verification). Liquidity providers deposit into a single pool on Ethereum and earn yield from bridge fees across all supported chains. The optimistic oracle ensures that only valid transfers are reimbursed, with a dispute mechanism for challenging fraudulent claims.
      </p>

      <h2 id="tokenomics">ACX Tokenomics</h2>
      <p>
        ACX has a total supply of 1 billion tokens. The token is used for governance over protocol parameters, staking to earn a share of bridge fees, and incentivizing liquidity provision and relayer participation. ACX stakers receive a portion of the protocol&apos;s bridge fee revenue. The token was distributed through an airdrop to early bridge users, community members, and liquidity providers.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Across Protocol powers fast cross-chain token transfers between Ethereum and Layer 2 networks, capital-efficient bridging through the relayer network, liquidity provision earning multi-chain bridge fees from a single pool, and backend bridging infrastructure for chain abstraction protocols and wallet providers. The protocol is frequently integrated into DeFi frontends and aggregators seeking the best bridge routes for users.
      </p>

      <h2 id="how-to-buy">How to Buy ACX</h2>
      <p>
        To buy ACX, create an account on Coinbase or Gate.io. Complete identity verification, deposit funds, and purchase ACX tokens. You can also swap ETH for ACX on Uniswap. After purchasing, stake ACX through the Across staking interface to earn a share of bridge fee revenue. ACX is an ERC-20 token compatible with MetaMask and Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Bridge protocols carry inherent smart contract risk, and any vulnerability could lead to significant losses for liquidity providers. The relayer model depends on a healthy competitive market of relayers willing to front capital. If relayer participation declines, bridge speed and availability could be impacted. Competition from Stargate, LayerZero, and native bridge solutions continues to intensify.
      </p>
      <p>
        Bridge fee revenue depends on cross-chain transaction volume, which is highly correlated with market conditions. As Layer 2 ecosystems mature, users may have less need for frequent bridging. Dependence on UMA&apos;s optimistic oracle introduces a single point of trust. Regulatory scrutiny of cross-chain protocols could affect bridge operations and token classification.
      </p>
    </LearnPageLayout>
  );
}
