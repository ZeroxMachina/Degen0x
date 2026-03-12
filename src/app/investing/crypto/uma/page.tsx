import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is UMA (UMA)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about UMA (UMA), the optimistic oracle and dispute resolution protocol. Discover how it works, tokenomics, use cases, and how to buy UMA.",
};

export default function UmaPage() {
  return (
    <LearnPageLayout
      title="What Is UMA (UMA)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="UMA (Universal Market Access) is an optimistic oracle and dispute resolution system that provides truthful data to smart contracts through economic incentives rather than automated data feeds. UMA's oracle works by assuming data assertions are correct unless challenged, with a human-powered dispute resolution process that makes it uniquely suited for subjective or complex data queries that traditional oracles cannot handle."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-uma", title: "What Is UMA?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-uma-work", title: "How Does UMA Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "uma-tokenomics", title: "UMA Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-uma", title: "How to Buy UMA", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is UMA?",
          answer:
            "UMA is an optimistic oracle that uses economic incentives and human-powered dispute resolution to provide truthful data to smart contracts, particularly for subjective queries that automated oracles cannot resolve.",
        },
        {
          question: "Where can I buy UMA?",
          answer:
            "UMA is available on Coinbase, Binance, Kraken, and OKX. It trades against USDT, USD, BTC, and ETH pairs.",
        },
        {
          question: "Is UMA a good investment?",
          answer:
            "UMA powers Across Protocol and Polymarket's oracle needs, providing real utility, but its niche optimistic oracle approach limits its market size. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is UMA?</h2>
      <p>
        UMA was founded by Hart Lambur and Allison Lu, both former Goldman Sachs traders, and launched in 2018 by Risk Labs. The protocol takes a fundamentally different approach to the oracle problem compared to Chainlink or Pyth. Instead of continuously pushing data on-chain, UMA&apos;s optimistic oracle assumes that data assertions are correct and only triggers a dispute resolution process when someone challenges an assertion. This makes it highly capital-efficient and suitable for a wide range of data types.
      </p>
      <p>
        UMA&apos;s oracle powers several major applications including Across Protocol (one of the leading cross-chain bridges) and Polymarket (the largest prediction market). The oracle&apos;s ability to handle subjective questions like election outcomes, sports results, and complex financial conditions makes it invaluable for prediction markets and insurance protocols that require human judgment to resolve.
      </p>

      <h2 id="how-it-works">How Does UMA Work?</h2>
      <p>
        When a protocol needs data, an asserter posts a claim along with a bond (denominated in approved tokens). This assertion enters an optimistic window where anyone can dispute it by posting their own bond. If no dispute occurs within the challenge period, the assertion is accepted as true. If disputed, the claim escalates to UMA&apos;s Data Verification Mechanism (DVM), where UMA token holders vote on the correct answer.
      </p>
      <p>
        The DVM voting system is designed to make honest voting the economically rational choice. Voters who vote with the majority receive rewards, while those who vote incorrectly receive nothing. The cost of corrupting the oracle (buying enough UMA to control the vote) is designed to always exceed the profit from corruption. This game-theoretic approach provides robust security without requiring continuous on-chain data pushing.
      </p>

      <h2 id="tokenomics">UMA Tokenomics</h2>
      <p>
        UMA has a total supply of approximately 119 million tokens. The token is used for dispute resolution voting in the DVM, governance over protocol parameters, and as a bonding mechanism for asserters and disputers. Voters earn rewards from protocol fees and inflation for participating in dispute resolution. The token&apos;s value is directly tied to the security model, as the total value of UMA must exceed the value at risk in any single oracle query.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        UMA powers Across Protocol&apos;s cross-chain bridge verification, Polymarket&apos;s prediction market resolution, insurance claim adjudication for DeFi coverage protocols, synthetic asset price verification, and any application requiring subjective or complex data resolution. The optimistic oracle model is particularly suited for use cases where data cannot be automated and requires human judgment or interpretation.
      </p>

      <h2 id="how-to-buy">How to Buy UMA</h2>
      <p>
        To buy UMA, create an account on Coinbase, Binance, or Kraken. Complete identity verification, deposit funds, and purchase UMA tokens. After purchasing, participate in DVM voting to earn rewards when disputes arise. UMA is an ERC-20 token compatible with MetaMask and Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        UMA&apos;s security model depends on the cost of corrupting the voting system remaining higher than the potential profit, which requires UMA&apos;s market cap to maintain a certain ratio to the value secured. If UMA&apos;s price drops significantly while secured value remains high, the security assumptions could weaken. The dispute resolution process involves delays that may not be suitable for time-critical applications.
      </p>
      <p>
        The optimistic oracle niche is smaller than the traditional oracle market, limiting revenue potential. Voter participation rates affect the security and reliability of dispute resolution. Competition from other oracle solutions for DeFi integrations is intense. Regulatory uncertainty around prediction markets and oracle-dependent financial products could impact demand for UMA&apos;s services.
      </p>
    </LearnPageLayout>
  );
}
