import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Tellor (TRB)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Tellor (TRB), the decentralized oracle protocol with staking-based security. Discover how it works, tokenomics, use cases, and how to buy TRB.",
};

export default function TellorPage() {
  return (
    <LearnPageLayout
      title="What Is Tellor (TRB)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Tellor is a decentralized oracle protocol that uses a staking-based incentive system to deliver reliable off-chain data to on-chain smart contracts. Reporters stake TRB tokens to submit data values, with a dispute mechanism allowing anyone to challenge and remove incorrect data. Tellor emphasizes censorship resistance and permissionless participation in its oracle network."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-tellor", title: "What Is Tellor?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-tellor-work", title: "How Does Tellor Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "trb-tokenomics", title: "TRB Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-trb", title: "How to Buy TRB", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Tellor?",
          answer:
            "Tellor is a decentralized oracle protocol where reporters stake TRB to submit data on-chain. Anyone can report data or dispute incorrect submissions, creating a permissionless and censorship-resistant oracle.",
        },
        {
          question: "Where can I buy TRB?",
          answer:
            "TRB is available on Coinbase, Binance, OKX, and KuCoin. It trades against USDT, USD, and BTC pairs.",
        },
        {
          question: "Is Tellor a good investment?",
          answer:
            "Tellor offers a uniquely decentralized oracle approach, but has significantly smaller market share than Chainlink. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Tellor?</h2>
      <p>
        Tellor was founded by Brenda Loya and Nick Fett and launched in 2019 on Ethereum. The protocol was designed with a focus on true decentralization and permissionless data reporting, differentiating it from oracle networks that rely on curated node operator sets. Anyone who stakes TRB tokens can become a data reporter, and anyone can dispute a reported value by staking tokens to challenge it.
      </p>
      <p>
        Tellor has evolved through multiple versions, with Tellor X introducing a multi-chain deployment strategy. The protocol now operates on Ethereum, Polygon, Arbitrum, and other EVM chains. Its emphasis on censorship resistance makes it attractive for protocols that prioritize decentralization ideology and want to avoid dependence on any single oracle provider&apos;s permissioned node network.
      </p>

      <h2 id="how-it-works">How Does Tellor Work?</h2>
      <p>
        Data reporters stake TRB tokens and submit values for requested data feeds (called query IDs). Each submission includes a timestamp and the reported value. After submission, there is a dispute window during which anyone can challenge the accuracy of the data by staking TRB. If a dispute occurs, TRB token holders vote on whether the reported value was accurate. The losing party forfeits their stake.
      </p>
      <p>
        Data consumers read oracle values from the Tellor contracts, specifying a minimum age threshold for the data to ensure it has survived the dispute period. The longer the dispute window, the more secure the data is considered to be. Tips can be offered in TRB to incentivize reporters to submit specific data types, creating a marketplace for data reporting.
      </p>

      <h2 id="tokenomics">TRB Tokenomics</h2>
      <p>
        TRB has a supply that grows through time-based rewards to reporters. The token is used for staking by reporters to submit data, staking by disputers to challenge data, voting in dispute resolution, and tipping reporters for specific data feeds. Reporter rewards come from inflation and tips. The dispute mechanism creates strong incentives for accurate reporting, as reporters lose their stake if their data is successfully disputed.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Tellor provides price feeds for DeFi protocols, custom data feeds for any on-chain application, censorship-resistant oracle data for maximally decentralized protocols, random number generation, and event outcome reporting. The protocol is particularly valued by projects that prioritize decentralization and want an oracle that cannot be censored or controlled by any single entity.
      </p>

      <h2 id="how-to-buy">How to Buy TRB</h2>
      <p>
        To buy TRB, create an account on Coinbase, Binance, or OKX. Complete identity verification, deposit funds, and purchase TRB tokens. After purchasing, you can stake TRB to become a data reporter and earn reporting rewards, or hold for dispute voting participation. TRB is an ERC-20 token stored in MetaMask or Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Tellor&apos;s permissionless reporting model means data quality depends on the economic incentives being sufficient to attract honest reporters. During periods of low TRB price or high gas costs, reporting incentives may be insufficient. The dispute window introduces latency that makes Tellor unsuitable for time-critical price feeds needed by high-frequency DeFi applications.
      </p>
      <p>
        Market share compared to Chainlink is very small, limiting integrations and developer mindshare. The inflationary reward system for reporters creates ongoing selling pressure on TRB. Voter participation in disputes may be low, potentially allowing incorrect data to be resolved incorrectly. Competition from Chainlink, Pyth, and API3 makes gaining market share challenging.
      </p>
    </LearnPageLayout>
  );
}
