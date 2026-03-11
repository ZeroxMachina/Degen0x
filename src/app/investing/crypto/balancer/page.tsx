import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Balancer (BAL)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Balancer (BAL), the programmable liquidity protocol for customizable AMM pools. Discover BAL tokenomics and how to buy.",
};

export default function BalancerPage() {
  return (
    <LearnPageLayout
      title="What Is Balancer (BAL)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Balancer (BAL) is a decentralized exchange and automated market maker protocol that enables customizable liquidity pools with flexible token weightings. Unlike traditional AMMs that require 50/50 pools, Balancer supports pools with up to eight tokens and custom weight ratios, making it a versatile platform for portfolio management, trading, and liquidity provision."
      toc={[
        { id: "what-is", title: "What Is Balancer?", level: 2 },
        { id: "how-it-works", title: "How Does Balancer Work?", level: 2 },
        { id: "tokenomics", title: "BAL Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy BAL", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Balancer?",
          answer:
            "Balancer is a programmable liquidity protocol on Ethereum and other chains that supports customizable AMM pools with flexible token weightings. BAL is the governance token used through the veBAL vote-escrow system.",
        },
        {
          question: "Where can I buy BAL?",
          answer:
            "BAL is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on the Balancer exchange itself or Uniswap.",
        },
        {
          question: "Is Balancer a good investment?",
          answer:
            "Balancer offers unique programmable liquidity features that differentiate it from other DEXs. Its veBAL model aligns governance incentives, but competition from Uniswap and Curve is fierce.",
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
        <h2>What Is Balancer?</h2>
        <p>
          Balancer is a decentralized exchange and programmable liquidity protocol that launched on Ethereum in 2020. The protocol's key innovation is its support for customizable liquidity pools that can contain up to eight different tokens with arbitrary weight ratios. This flexibility allows pool creators to design self-rebalancing portfolios, weighted index funds, and specialized trading pools that go beyond the standard 50/50 pair model used by most AMMs.
        </p>
        <p>
          Balancer has deployed across multiple chains including Ethereum, Polygon, Arbitrum, Optimism, and Avalanche. The protocol serves as both a trading venue and a platform for other DeFi protocols to launch and manage liquidity. Aave's GHO stablecoin, for example, uses Balancer as its primary liquidity venue.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Balancer Work?</h2>
        <p>
          Balancer uses a generalized version of the constant product AMM formula that supports multiple tokens and custom weights. Pool creators can set up weighted pools (e.g., 80/20 ETH/USDC), stable pools (for like-kind assets), and composable pools that combine multiple pool types. Balancer V2 introduced a single Vault architecture that holds all pool assets in one smart contract, improving gas efficiency and enabling flash loans across all protocol liquidity.
        </p>
        <p>
          The veBAL governance system, inspired by Curve's veCRV model, allows BAL holders to lock their tokens along with BAL/WETH LP tokens to receive voting power over gauge emissions, boosted pool rewards, and a share of protocol trading fees. This mechanism incentivizes long-term alignment between governance participants and the protocol's success.
        </p>
      </section>

      <section id="tokenomics">
        <h2>BAL Tokenomics</h2>
        <p>
          BAL has a maximum supply of 96.15 million tokens, distributed through liquidity mining incentives and team allocations. The veBAL system requires locking BAL/WETH 80/20 pool tokens for up to one year to receive governance power and fee sharing. Protocol revenue from trading fees is distributed to veBAL holders, the protocol treasury, and ecosystem incentives. The token emission schedule decreases over time, reducing inflationary pressure as the protocol matures.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          BAL is used for governance over protocol parameters and gauge emissions, earning trading fee revenue through veBAL, and boosting LP yields. The Balancer protocol enables custom index fund-like pools, efficient stablecoin trading through stable pools, protocol-owned liquidity management, and composable DeFi strategies. Balancer is frequently used by other protocols to manage their token liquidity, making it infrastructure for the broader DeFi ecosystem.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy BAL</h2>
        <p>
          BAL is available on Coinbase, Binance, Kraken, and other centralized exchanges. It can be purchased directly on the Balancer exchange or through Uniswap. After buying, users can provide liquidity in Balancer pools or lock BAL/WETH LP tokens as veBAL for governance and fee revenue. Store BAL in MetaMask, Ledger, or any Ethereum-compatible wallet.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          Balancer faces intense competition from Uniswap, Curve, and emerging DEX protocols. The protocol's complex pool types increase smart contract surface area and potential attack vectors. Impermanent loss remains a significant risk for liquidity providers, particularly in volatile asset pools. The veBAL lock-up requires holding BAL/WETH LP tokens, exposing governance participants to ETH price risk. Multi-chain deployment introduces additional complexity and bridge-related risks.
        </p>
      </section>
    </LearnPageLayout>
  );
}
