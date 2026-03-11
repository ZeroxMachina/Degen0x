import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Sommelier (SOMM)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Sommelier (SOMM), the intelligent DeFi vault protocol. Discover how it works, tokenomics, use cases, and how to buy SOMM.",
};

export default function SommelierPage() {
  return (
    <LearnPageLayout
      title="What Is Sommelier (SOMM)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Sommelier is a DeFi vault protocol built on Cosmos that enables intelligent, actively managed yield strategies across multiple blockchains. Using off-chain computation with on-chain execution, Sommelier Vaults can implement sophisticated strategies including leveraged staking, delta-neutral positions, and multi-protocol yield optimization while maintaining non-custodial security."
      toc={[
        { id: "what-is", title: "What Is Sommelier?", level: 2 },
        { id: "how-it-works", title: "How Does Sommelier Work?", level: 2 },
        { id: "tokenomics", title: "SOMM Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SOMM", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Sommelier?",
          answer:
            "Sommelier is a DeFi vault protocol on Cosmos that enables actively managed yield strategies using off-chain computation and on-chain execution across Ethereum and other chains.",
        },
        {
          question: "Where can I buy SOMM?",
          answer:
            "SOMM is available on Osmosis DEX, Coinbase, and smaller exchanges. It trades against USDC, ATOM, and OSMO pairs.",
        },
        {
          question: "Is Sommelier a good investment?",
          answer:
            "Sommelier offers innovative automated DeFi vaults with strong TVL, but vault performance depends on strategy success and market conditions. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Sommelier?</h2>
      <p>
        Sommelier was co-founded by Zaki Manian, a prominent Cosmos developer, and launched as a bridge between Cosmos chain intelligence and Ethereum DeFi execution. The protocol operates as a Cosmos SDK chain where validators run strategy computations off-chain and submit rebalancing proposals that are executed on Ethereum through the Sommelier bridge. This architecture enables complex, data-driven strategies that would be too expensive to run entirely on-chain.
      </p>
      <p>
        Sommelier Vaults (called Cellars) accept user deposits on Ethereum and actively manage those funds across DeFi protocols like Aave, Compound, Uniswap, and Morpho. Each Cellar has a specific strategy managed by a strategist who submits rebalancing instructions through the Sommelier chain. Validators verify these instructions before execution, ensuring no single party can drain vault funds. The protocol has attracted hundreds of millions in TVL across its various strategies.
      </p>

      <h2 id="how-it-works">How Does Sommelier Work?</h2>
      <p>
        Strategy computation happens off-chain where strategists analyze market data, yields, and risk metrics to determine optimal portfolio allocations. Rebalancing decisions are submitted as proposals to the Sommelier chain, where validators check that the proposed actions fall within the Cellar&apos;s predefined parameters (allowed protocols, position limits, risk boundaries). Once validated, the instructions are relayed to Ethereum and executed by the Cellar smart contract.
      </p>
      <p>
        This design provides a unique security model: strategists can optimize returns but cannot extract funds or interact with unauthorized protocols. Each Cellar is constrained by an adaptor whitelist that limits which DeFi protocols it can interact with. Users deposit and withdraw through standard ERC-20 share tokens that represent their proportional claim on the Cellar&apos;s assets.
      </p>

      <h2 id="tokenomics">SOMM Tokenomics</h2>
      <p>
        SOMM has a total supply of approximately 500 million tokens. The token is used for staking to secure the Sommelier chain, governance over Cellar approvals and protocol parameters, and validator operations. Validators earn staking rewards and a share of platform fees. Strategists earn performance fees denominated in vault assets. A portion of protocol revenue is directed to the SOMM treasury for ecosystem development.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Sommelier powers actively managed DeFi yield vaults across lending, DEX, and staking protocols, leveraged staking strategies for enhanced ETH staking yields, delta-neutral yield strategies for risk-averse depositors, multi-protocol yield optimization with automatic rebalancing, and real-yield strategies that adapt to changing market conditions. The platform is suited for users who want professional-grade DeFi management without the complexity of manual position management.
      </p>

      <h2 id="how-to-buy">How to Buy SOMM</h2>
      <p>
        To buy SOMM, create an account on Coinbase or visit Osmosis DEX. On Osmosis, swap ATOM or USDC for SOMM using Keplr wallet. After purchasing, stake SOMM through Keplr to earn staking rewards and participate in governance. To deposit into Sommelier vaults, connect an Ethereum wallet to the Sommelier app and deposit supported assets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Sommelier vaults carry smart contract risk across both the Sommelier chain and the underlying DeFi protocols they interact with. Strategy performance is not guaranteed and depends on market conditions and strategist skill. The bridge between Cosmos and Ethereum introduces additional complexity and potential failure points. Validator consensus on rebalancing actions creates latency that could impact strategy execution during volatile markets.
      </p>
      <p>
        Competition from Yearn Finance, Beefy, and other yield optimization protocols is significant. Actively managed strategies may underperform simpler passive strategies after fees. Regulatory uncertainty around managed DeFi vaults could classify them as investment products requiring registration. The dependency on external DeFi protocols means that any exploit in those protocols could affect Sommelier vault depositors.
      </p>
    </LearnPageLayout>
  );
}
