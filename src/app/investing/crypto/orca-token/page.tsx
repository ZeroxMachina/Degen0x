import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Orca Token (ORCA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Orca Token (ORCA), the user-friendly DEX on Solana with concentrated liquidity. Discover ORCA tokenomics and how to buy.",
};

export default function OrcaTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Orca Token (ORCA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Orca Token (ORCA) is the governance token of Orca, a leading decentralized exchange on Solana known for its user-friendly interface and concentrated liquidity pools (Whirlpools). Orca focuses on simplicity and accessibility, making it one of the most popular DEXs for both retail users and liquidity providers on Solana."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-orca-token", title: "What Is Orca Token?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-orca-work", title: "How Does Orca Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "orca-tokenomics", title: "ORCA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-orca", title: "How to Buy ORCA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Orca Token?",
          answer:
            "ORCA is the governance token of the Orca DEX on Solana. Orca is known for its clean, beginner-friendly interface and Whirlpools, which are concentrated liquidity pools that improve capital efficiency for LPs.",
        },
        {
          question: "Where can I buy ORCA?",
          answer:
            "ORCA is available on Coinbase, KuCoin, and other exchanges. It can also be purchased on Orca itself or through Jupiter on Solana.",
        },
        {
          question: "Is Orca Token a good investment?",
          answer:
            "ORCA benefits from strong positioning on Solana with a focus on user experience. Its value depends on Solana ecosystem growth and its competitive position against Raydium and Jupiter.",
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
        <h2>What Is Orca Token?</h2>
        <p>
          Orca is a decentralized exchange on Solana that has distinguished itself through a focus on user experience and capital efficiency. Launched in 2021, Orca prioritizes simplicity and accessibility, offering a clean interface that makes DeFi trading approachable for newcomers. The protocol's Whirlpools feature provides concentrated liquidity capabilities, allowing liquidity providers to allocate capital within specific price ranges for enhanced fee earnings.
        </p>
        <p>
          Orca has become a major liquidity venue on Solana, serving as a primary routing destination for Jupiter aggregator and handling significant trading volume across SOL, stablecoin, and meme token pairs. The ORCA token provides governance rights and a stake in the protocol's future development direction.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Orca Work?</h2>
        <p>
          Orca operates through two pool types: standard pools for simple token swaps and Whirlpools for concentrated liquidity. Whirlpools allow LPs to set custom price ranges, concentrating their capital where trading is most active to earn proportionally higher fees. The protocol uses Solana's speed and low costs to provide near-instant swaps at negligible transaction fees. Trading fees are split between LPs and the protocol treasury.
        </p>
        <p>
          The Fair Price indicator helps users understand whether they are getting a competitive rate by comparing on-chain prices with market rates. This transparency feature is part of Orca's broader commitment to user trust and accessibility. The protocol integrates seamlessly with Jupiter and other Solana aggregators, extending its liquidity reach across the ecosystem.
        </p>
      </section>

      <section id="tokenomics">
        <h2>ORCA Tokenomics</h2>
        <p>
          ORCA has a total supply of 100 million tokens. The distribution includes allocations for the community, team, investors, and ecosystem development. The token's primary utility is governance, allowing holders to vote on protocol parameters, fee structures, and development priorities. Protocol trading fees contribute to the treasury, which is managed by governance. The relatively modest supply and focused use case create a straightforward value proposition tied to Solana DEX trading volume.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          ORCA is used for protocol governance and alignment with the Orca ecosystem. The Orca platform enables token swaps, concentrated liquidity provision, and yield generation for LPs. The protocol serves retail traders seeking user-friendly Solana trading, liquidity providers looking for capital-efficient pools, and aggregators routing trades through Solana's best available liquidity. Orca's emphasis on simplicity makes it a recommended entry point for users new to Solana DeFi.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy ORCA</h2>
        <p>
          ORCA is available on Coinbase, KuCoin, Gate.io, and other centralized exchanges. On Solana, it can be purchased through Orca directly or via Jupiter aggregator. Transfer SOL to a Phantom or Solflare wallet, connect to the Orca interface, and swap for ORCA. After purchasing, hold for governance participation or provide liquidity in Whirlpools for yield opportunities. Store in any Solana-compatible wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          ORCA faces competition from Raydium and Jupiter on Solana, both of which command significant market share. The token's value is closely tied to Solana ecosystem health and trading volume. Concentrated liquidity provision, while capital efficient, introduces impermanent loss risk that can be amplified compared to standard AMM pools. Solana network stability and smart contract risk on the platform are ongoing considerations. The relatively small team compared to larger competitors may limit the pace of feature development.
        </p>
      </section>
    </LearnPageLayout>
  );
}
