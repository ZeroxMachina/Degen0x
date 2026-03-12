import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Compound (COMP)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Compound (COMP), the DeFi lending protocol that pioneered algorithmic interest rates. Discover COMP tokenomics and how to buy.",
};

export default function CompoundPage() {
  return (
    <LearnPageLayout
      title="What Is Compound (COMP)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Compound (COMP) is the governance token of the Compound protocol, a pioneering decentralized lending platform on Ethereum. Compound introduced the concept of algorithmic, autonomous interest rate markets, allowing users to supply and borrow crypto assets without intermediaries. COMP launched in 2020 and kickstarted the DeFi summer by introducing governance token distribution to users."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-compound", title: "What Is Compound?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-compound-work", title: "How Does Compound Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "comp-tokenomics", title: "COMP Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-comp", title: "How to Buy COMP", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Compound?",
          answer:
            "Compound is an Ethereum-based DeFi protocol that creates algorithmic money markets for crypto assets. Users supply tokens to earn interest or borrow by providing collateral. COMP is the governance token used to vote on protocol changes.",
        },
        {
          question: "Where can I buy COMP?",
          answer:
            "COMP is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on Uniswap and other Ethereum DEXs.",
        },
        {
          question: "Is Compound a good investment?",
          answer:
            "Compound is a foundational DeFi protocol with strong brand recognition and institutional interest. However, it has lost market share to competitors like Aave and faces challenges in adapting its V3 architecture to maintain relevance.",
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
        <h2>What Is Compound?</h2>
        <p>
          Compound is one of the original decentralized lending protocols on Ethereum, launched in 2018 by Compound Labs. The protocol allows anyone to supply crypto assets to earn interest or borrow against their holdings without a centralized intermediary. Compound's innovation of distributing its governance token (COMP) to protocol users in June 2020 is widely credited with igniting "DeFi Summer," the explosive growth period that brought mainstream attention to decentralized finance.
        </p>
        <p>
          The protocol has processed billions of dollars in lending volume and served as the foundation for many subsequent DeFi protocols. Compound III (also known as Comet) introduced a more capital-efficient single-asset borrowing model, focusing on simplifying the user experience and reducing risk through isolated markets.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Compound Work?</h2>
        <p>
          Compound operates through autonomous interest rate markets governed by smart contracts. Suppliers deposit tokens into the protocol and receive cTokens (or in V3, direct accounting entries) representing their position and accruing interest. Interest rates are determined algorithmically based on supply and demand within each market. Borrowers provide collateral and can borrow up to a specified percentage of their collateral value, paying variable interest rates.
        </p>
        <p>
          Compound III shifted to a single-borrowable-asset model where each deployment focuses on one primary asset to borrow, with multiple collateral types accepted. This approach reduces risk and simplifies liquidation mechanisms. Governance decisions including new market deployments and risk parameter adjustments are made through on-chain COMP voting.
        </p>
      </section>

      <section id="tokenomics">
        <h2>COMP Tokenomics</h2>
        <p>
          COMP has a fixed total supply of 10 million tokens. The distribution includes allocations to shareholders and founders of Compound Labs, protocol users through liquidity mining, and the protocol treasury. COMP distribution to users was gradually reduced over time as the protocol matured. The token provides governance power proportional to holdings, and COMP can be delegated to other addresses without transferring custody, enabling representative governance.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          COMP is used for governance voting on protocol parameters, new market deployments, and treasury management. Holding COMP provides exposure to one of DeFi's most established lending platforms. The Compound protocol serves use cases including passive yield generation, leveraged trading strategies, capital-efficient borrowing, and institutional DeFi participation. Compound's open-source codebase has been forked extensively, demonstrating its influence on the broader DeFi landscape.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy COMP</h2>
        <p>
          COMP is available on major exchanges including Coinbase, Binance, and Kraken. It can also be purchased on Uniswap and other Ethereum DEXs. To buy, deposit funds on your preferred exchange, find the COMP trading pair, and execute your order. COMP can be stored in any Ethereum wallet and used for governance voting through the Compound governance portal. Consider the protocol's competitive position relative to Aave and newer lending platforms when evaluating your investment thesis.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Compound faces competitive pressure from Aave, Morpho, and newer lending protocols that have gained market share. The protocol experienced a significant governance exploit in 2023 where a bug in token distribution sent millions of COMP to unintended recipients, highlighting governance risks. Smart contract vulnerabilities remain an inherent risk despite extensive auditing. The shift to Compound III requires ongoing adoption of the new architecture. Regulatory uncertainty around DeFi lending and potential classification of lending tokens as securities are additional concerns.
        </p>
      </section>
    </LearnPageLayout>
  );
}
