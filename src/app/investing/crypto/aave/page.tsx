import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Aave (AAVE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about Aave (AAVE), the leading decentralized lending and borrowing protocol. Discover AAVE tokenomics, multi-chain deployment, and how to buy.",
};

export default function AavePage() {
  return (
    <LearnPageLayout
      title="What Is Aave (AAVE)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Aave (AAVE) is the governance token of the Aave protocol, the largest decentralized lending and borrowing platform in DeFi. Deployed across Ethereum, Polygon, Arbitrum, Optimism, Avalanche, and other chains, Aave allows users to supply assets to earn interest or borrow against their collateral without intermediaries."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-aave", title: "What Is Aave?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-aave-work", title: "How Does Aave Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "aave-tokenomics", title: "AAVE Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-aave", title: "How to Buy AAVE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is Aave?",
          answer:
            "Aave is a decentralized, non-custodial lending protocol where users can deposit crypto to earn yield or borrow assets by providing collateral. AAVE is the governance token used to vote on protocol decisions and stake for safety module protection.",
        },
        {
          question: "Where can I buy AAVE?",
          answer:
            "AAVE is available on Coinbase, Binance, Kraken, and all major centralized exchanges. It can also be purchased on Uniswap, Balancer, and other DEXs.",
        },
        {
          question: "Is Aave a good investment?",
          answer:
            "Aave is considered one of the blue-chip DeFi protocols with strong revenue generation, multi-chain presence, and institutional interest. However, it faces smart contract risk, regulatory uncertainty, and competition from other lending platforms.",
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
        <h2>What Is Aave?</h2>
        <p>
          Aave is a decentralized, non-custodial liquidity protocol that enables users to earn interest on deposits and borrow crypto assets. Originally launched as ETHLend in 2017 before rebranding to Aave in 2020, the protocol has grown to become the dominant DeFi lending platform with billions of dollars in total value locked across multiple blockchain networks.
        </p>
        <p>
          Aave pioneered several innovations in DeFi lending including flash loans (uncollateralized loans that must be repaid within a single transaction), variable and stable interest rate switching, and credit delegation. The protocol is governed by AAVE token holders who vote on risk parameters, new asset listings, and protocol upgrades through on-chain governance.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Aave Work?</h2>
        <p>
          Aave operates through liquidity pools where depositors supply assets and earn variable or stable interest rates based on market demand. Borrowers provide overcollateralized positions and pay interest to access funds. Interest rates are algorithmically determined based on the utilization ratio of each asset pool. When utilization is high, interest rates increase to incentivize more deposits and discourage excessive borrowing.
        </p>
        <p>
          The protocol includes a Safety Module where AAVE holders can stake their tokens to provide insurance against protocol shortfall events. In return, stakers earn staking rewards from protocol revenue. Aave V3 introduced features like efficiency mode for correlated assets, isolation mode for newly listed tokens, and cross-chain portals for multi-network liquidity.
        </p>
      </section>

      <section id="tokenomics">
        <h2>AAVE Tokenomics</h2>
        <p>
          AAVE has a maximum supply of 16 million tokens. The token serves three functions: governance voting power, staking in the Safety Module for protocol insurance, and fee revenue participation. Protocol revenue from borrowing fees is distributed between ecosystem reserves, Safety Module stakers, and potential buyback mechanisms. The relatively low supply combined with strong protocol revenue metrics makes AAVE one of the most fundamentals-driven DeFi tokens.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          AAVE is used for governance participation in one of DeFi's most active DAOs, staking in the Safety Module to earn rewards while providing protocol insurance, and as a portfolio asset providing exposure to the DeFi lending sector. The Aave protocol itself serves use cases including yield generation on idle crypto assets, leveraged trading through recursive borrowing, flash loan arbitrage, and institutional treasury management. Aave's GHO stablecoin adds another revenue stream and utility layer to the ecosystem.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy AAVE</h2>
        <p>
          AAVE is widely available on centralized exchanges including Coinbase, Binance, Kraken, Gemini, and Bitstamp. For decentralized purchases, Uniswap and Balancer on Ethereum offer deep liquidity. Create an account on your preferred platform, deposit funds, and trade for AAVE. After purchasing, consider staking AAVE in the Safety Module to earn additional rewards, or hold in a self-custody wallet like MetaMask or Ledger for long-term storage and governance participation.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Despite being one of the most audited protocols in DeFi, Aave carries inherent smart contract risk. Multi-chain deployment increases the attack surface across different networks. Bad debt from liquidation failures during extreme market volatility is a known risk, as demonstrated during past market crashes. Regulatory actions against DeFi lending could impact the protocol's operations. Competition from protocols like Compound, Spark, and Morpho, as well as emerging lending platforms on newer chains, poses a continuous competitive threat.
        </p>
      </section>
    </LearnPageLayout>
  );
}
