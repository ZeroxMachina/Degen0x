import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Wormhole (W)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Wormhole (W), the cross-chain messaging protocol connecting 30+ blockchains. Discover how it works, tokenomics, use cases, and how to buy W.",
};

export default function WormholePage() {
  return (
    <LearnPageLayout
      title="What Is Wormhole (W)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="9 min read"
      intro="Wormhole is a cross-chain messaging and bridging protocol that connects over 30 blockchains including Ethereum, Solana, BNB Chain, and Cosmos-based chains. Originally developed by Jump Crypto, Wormhole has become one of the most widely used interoperability protocols, facilitating billions in cross-chain transfers and powering numerous multi-chain applications."
      toc={[
        { id: "what-is", title: "What Is Wormhole?", level: 2 },
        { id: "how-it-works", title: "How Does Wormhole Work?", level: 2 },
        { id: "tokenomics", title: "W Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy W", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Wormhole?",
          answer:
            "Wormhole is a cross-chain messaging protocol connecting 30+ blockchains. It enables token bridging, cross-chain data transfer, and multi-chain application development through a guardian-based verification network.",
        },
        {
          question: "Where can I buy W?",
          answer:
            "W is available on Binance, OKX, Bybit, Gate.io, and major DEXs on both Ethereum and Solana. It trades against USDT, USDC, and SOL pairs.",
        },
        {
          question: "Is Wormhole a good investment?",
          answer:
            "Wormhole has massive cross-chain volume and broad chain support, but past security incidents and strong competition are key considerations. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Solana", href: "/investing/crypto/solana", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Wormhole?</h2>
      <p>
        Wormhole was originally created as a bridge between Ethereum and Solana by Jump Crypto in 2021, and has since expanded to connect over 30 blockchain networks. The protocol is now developed by Wormhole Labs and governed by the Wormhole Foundation. It has processed billions of dollars in cross-chain transfers and supports the broadest range of non-EVM chains among major interoperability protocols, including Solana, Near, Aptos, Sui, and Cosmos chains.
      </p>
      <p>
        Following a major exploit in February 2022 where approximately $320 million was drained from its Solana bridge (subsequently replenished by Jump Crypto), Wormhole underwent significant security upgrades. The protocol now features enhanced guardian verification, rate limiting, and comprehensive security measures. The Wormhole ecosystem includes Portal Bridge for token transfers, Wormhole Connect for developer integration, and Wormhole Queries for cross-chain data access.
      </p>

      <h2 id="how-it-works">How Does Wormhole Work?</h2>
      <p>
        Wormhole operates through a network of 19 guardian nodes run by reputable validator companies. When a cross-chain message is submitted, guardians observe the source chain transaction, verify its validity, and produce signed attestations called Verified Action Approvals (VAAs). Once a supermajority (13 of 19) of guardians sign the VAA, it can be submitted to the destination chain to execute the cross-chain action.
      </p>
      <p>
        The protocol supports multiple integration methods: Native Token Transfers (NTT) allow token issuers to maintain full control over their cross-chain tokens, Wormhole Connect provides a drop-in widget for dApps to enable bridging, and the core messaging layer allows arbitrary data to be sent between chains. Wormhole Queries enables protocols to read state from remote chains without requiring full cross-chain transactions.
      </p>

      <h2 id="tokenomics">W Tokenomics</h2>
      <p>
        W has a total supply of 10 billion tokens, existing as a multi-chain token on both Ethereum and Solana. The token is used for governance through the Wormhole DAO, staking for network security, and protocol fee payment. W holders can delegate their tokens to guardian validators and participate in governance decisions. A portion of protocol fees is directed to W stakers, aligning token holder incentives with network security and usage.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Wormhole powers cross-chain token bridging between EVM and non-EVM chains, Native Token Transfer deployments for token issuers, cross-chain governance and DAO operations, multi-chain DeFi protocols, cross-chain NFT transfers, and remote state queries for oracle-like functionality. Its support for Solana, Move-based chains, and Cosmos alongside EVM networks makes it uniquely positioned for applications requiring broad multi-chain reach.
      </p>

      <h2 id="how-to-buy">How to Buy W</h2>
      <p>
        To buy W, create an account on Binance, OKX, or Bybit. Complete identity verification, deposit funds, and purchase W tokens. W is also available on Solana DEXs like Jupiter and Ethereum DEXs like Uniswap. After purchasing, stake W through the Wormhole governance portal for staking rewards and voting power. Store W in Phantom (Solana) or MetaMask (Ethereum).
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        The 2022 bridge exploit remains a significant historical concern, although security has been substantially upgraded since. The guardian-based security model relies on 19 trusted entities, which some critics consider insufficiently decentralized compared to fully permissionless validation. Any compromise of a guardian supermajority could endanger cross-chain assets.
      </p>
      <p>
        Competition from LayerZero, Axelar, and Hyperlane challenges Wormhole&apos;s market position. The large token supply of 10 billion W creates potential dilution pressure from ongoing token unlocks. Cross-chain messaging revenue depends on sustained multi-chain activity, which could consolidate if the market trends toward fewer dominant chains. Regulatory treatment of cross-chain protocols remains uncertain.
      </p>
    </LearnPageLayout>
  );
}
