import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is API3 (API3)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about API3 (API3), the first-party oracle solution for Web3. Discover how it works, tokenomics, use cases, and how to buy API3.",
};

export default function Api3Page() {
  return (
    <LearnPageLayout
      title="What Is API3 (API3)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="API3 is a decentralized oracle project that enables first-party oracles, where API providers operate their own oracle nodes to deliver data directly to blockchains without third-party intermediaries. Through its Airnode technology, API3 eliminates the middleman layer in traditional oracle designs, allowing data providers to serve blockchain applications directly with greater accountability and transparency."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-api3", title: "What Is API3?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-api3-work", title: "How Does API3 Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "api3-tokenomics", title: "API3 Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-api3", title: "How to Buy API3", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        {
          question: "What is API3?",
          answer:
            "API3 is a first-party oracle solution where API providers operate their own nodes to deliver data directly to blockchains, eliminating third-party intermediaries through Airnode technology and dAPIs.",
        },
        {
          question: "Where can I buy API3?",
          answer:
            "API3 is available on Binance, Coinbase, OKX, and KuCoin. It trades against USDT, USD, BTC, and ETH pairs.",
        },
        {
          question: "Is API3 a good investment?",
          answer:
            "API3 offers a unique first-party oracle approach with growing DeFi integrations, but Chainlink dominates the oracle market. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is API3?</h2>
      <p>
        API3 was founded by Heikki Vanttinen and Burak Benligiray, launching with the thesis that the oracle problem is best solved by having data providers run their own nodes rather than relying on third-party node operators. In traditional oracle networks like Chainlink, professional node operators fetch data from APIs and deliver it on-chain. API3 argues this introduces an unnecessary trust layer and proposes that API providers themselves should directly operate oracle nodes.
      </p>
      <p>
        Through Airnode, a serverless oracle node designed to be deployed and operated by API providers with minimal technical overhead, API3 has onboarded numerous data providers to deliver first-party data directly to blockchains. The dAPI (decentralized API) product aggregates multiple first-party oracle feeds into managed, production-ready data feeds that DeFi protocols can integrate with confidence.
      </p>

      <h2 id="how-it-works">How Does API3 Work?</h2>
      <p>
        Airnode is designed as a set-and-forget oracle node that API providers deploy on cloud infrastructure. Once configured with their API credentials and deployment parameters, Airnode autonomously responds to on-chain data requests and pushes updates based on deviation thresholds. Because the API provider runs the node directly, there is clear accountability for data accuracy without intermediary risks.
      </p>
      <p>
        dAPIs aggregate data from multiple Airnode sources to create robust, manipulation-resistant price feeds. Self-funded dAPIs allow individual users to sponsor data feeds, while managed dAPIs are maintained by the API3 DAO for wide ecosystem use. The OEV (Oracle Extractable Value) Network captures value that would otherwise be lost to MEV bots during oracle updates and returns it to the dApp or protocol.
      </p>

      <h2 id="tokenomics">API3 Tokenomics</h2>
      <p>
        API3 has a total supply of approximately 148 million tokens. The token powers a unique staking-insurance model: API3 stakers deposit into a staking pool that also serves as collateral for a service coverage policy. If an oracle malfunction causes quantifiable damage to a user, they can file a claim against the staking pool. This creates strong financial incentives for accurate data delivery and aligns staker interests with data quality.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        API3 provides first-party price feeds for DeFi lending, trading, and derivatives platforms, random number generation through QRNG (Quantum Random Number Generation), OEV capture for maximizing protocol revenue, and verifiable data delivery from traditional API providers to blockchain applications. The protocol is integrated across multiple EVM chains and is particularly relevant for protocols prioritizing data provenance and accountability.
      </p>

      <h2 id="how-to-buy">How to Buy API3</h2>
      <p>
        To buy API3, create an account on Binance, Coinbase, or OKX. Complete identity verification, deposit funds, and purchase API3 tokens. After purchasing, stake API3 in the staking pool to earn rewards and participate in the insurance mechanism. API3 is an ERC-20 token compatible with MetaMask and hardware wallets like Ledger.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Chainlink&apos;s dominant market position and extensive ecosystem of integrations makes displacing it extremely difficult. API3&apos;s first-party oracle model requires convincing API providers to operate nodes, which adds operational burden they may not want. The staking-insurance mechanism has not been stress-tested in a major oracle failure scenario, and large claims could significantly impact staker capital.
      </p>
      <p>
        The oracle market is becoming more competitive with Pyth, RedStone, and others offering differentiated approaches. API3&apos;s focus on first-party data means it cannot easily aggregate data from sources unwilling to run their own nodes. Revenue generation depends on sustained dAPI subscription demand. Regulatory uncertainty around oracle services and DeFi infrastructure adds compliance risk.
      </p>
    </LearnPageLayout>
  );
}
