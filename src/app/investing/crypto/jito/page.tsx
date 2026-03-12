import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Jito (JTO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Jito (JTO), the Solana liquid staking and MEV protocol. Discover how it works, tokenomics, use cases, and how to buy JTO.",
};

export default function JitoPage() {
  return (
    <LearnPageLayout
      title="What Is Jito (JTO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Jito is the leading liquid staking protocol on Solana, providing JitoSOL as a liquid staking token that earns enhanced yields through a combination of staking rewards and MEV (Maximal Extractable Value) revenue. Jito also operates the Jito-Solana validator client that optimizes MEV extraction for the Solana network."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-jito", title: "What Is Jito?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-jito-work", title: "How Does Jito Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "jto-tokenomics", title: "JTO Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-jto", title: "How to Buy JTO", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Jito?",
          answer: "Jito is Solana's leading liquid staking protocol providing JitoSOL tokens that earn staking rewards plus MEV revenue, delivering higher yields than standard Solana staking.",
        },
        {
          question: "Where can I buy JTO?",
          answer: "JTO is available on Binance, Coinbase, OKX, and Solana DEXs like Jupiter.",
        },
        {
          question: "Is Jito a good investment?",
          answer: "Jito leads Solana liquid staking with real MEV revenue, but depends on Solana ecosystem growth. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Lido DAO", href: "/investing/crypto/lido", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Jito?</h2>
      <p>
        Jito Labs was founded to address MEV on Solana and provide a liquid staking solution that captures MEV revenue for stakers. The Jito-Solana validator client is a modified Solana validator that includes a block engine for efficient MEV extraction, used by a significant portion of Solana validators. The Jito liquid staking protocol allows users to stake SOL and receive JitoSOL, which earns both standard staking rewards and a share of MEV tips.
      </p>
      <p>
        By combining staking and MEV yield, JitoSOL typically offers higher returns than standard Solana staking or competing liquid staking tokens. This yield advantage has helped Jito become the dominant liquid staking solution on Solana by total value locked. The protocol also launched (Re)staking services, bringing EigenLayer-style restaking to the Solana ecosystem.
      </p>

      <h2 id="how-it-works">How Does Jito Work?</h2>
      <p>
        Users deposit SOL into the Jito stake pool and receive JitoSOL, a value-accruing token whose exchange rate against SOL increases over time as rewards accumulate. The stake pool delegates SOL to validators running the Jito-Solana client. MEV tips collected by these validators are distributed to the stake pool, enhancing the yield for JitoSOL holders beyond standard staking rates.
      </p>

      <h2 id="tokenomics">JTO Tokenomics</h2>
      <p>
        JTO has a total supply of 1 billion tokens. The distribution includes allocations for the community through airdrops, core contributors, investors, and ecosystem development. JTO is used for governance over the Jito protocol, including decisions about stake pool parameters, validator delegation strategy, and fee structures. The initial airdrop was one of the largest in Solana ecosystem history.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Jito enables liquid staking on Solana with enhanced MEV yields, DeFi composability with JitoSOL across Solana lending and DEX protocols, governance over MEV distribution and staking parameters, and (Re)staking for additional yield layers. JitoSOL is widely integrated across Solana DeFi as a preferred collateral asset.
      </p>

      <h2 id="how-to-buy">How to Buy JTO</h2>
      <p>
        To buy JTO, register on Binance, Coinbase, or OKX. Complete identity verification, deposit funds, and purchase JTO tokens. To stake SOL through Jito, visit the Jito platform and deposit SOL to receive JitoSOL. JTO and JitoSOL are Solana tokens compatible with Phantom wallet and Ledger hardware wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Jito&apos;s value is closely tied to the Solana ecosystem, and SOL price declines directly impact staking economics. MEV revenue is variable and depends on Solana network activity. Smart contract risk across the staking pool and DeFi integrations exists. Competition from other Solana liquid staking protocols (Marinade, mSOL) and new entrants pressures market share.
      </p>
      <p>
        Token unlock schedules from investors and team create selling pressure. The MEV extraction model has faced criticism about its impact on regular users who may face worse execution due to MEV activity. Regulatory uncertainty around MEV-related activities and liquid staking tokens adds legal risk.
      </p>
    </LearnPageLayout>
  );
}
