import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `PancakeSwap vs Uniswap (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Compare PancakeSwap vs Uniswap DEXs. Fees, chains, liquidity, features, and which decentralized exchange is better for your DeFi needs.",
};

export default function PancakeSwapVsUniswap() {
  return (
    <LearnPageLayout
      title="PancakeSwap vs Uniswap"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="PancakeSwap and Uniswap are the two largest decentralized exchanges by total value locked. PancakeSwap dominates BNB Chain while Uniswap leads on Ethereum and its L2s. This comparison examines fees, features, and ecosystems to help you choose the right DEX."
      toc={[
        { id: "overview", title: "Platform Overview", level: 2 },
        { id: "fees", title: "Fee Comparison", level: 2 },
        { id: "chains", title: "Chains and Ecosystems", level: 2 },
        { id: "features", title: "Features", level: 2 },
        { id: "tokenomics", title: "Tokenomics", level: 2 },
        { id: "verdict", title: "Which Should You Choose?", level: 2 },
      ]}
      faqs={[
        { question: "Which has lower gas fees?", answer: "PancakeSwap on BNB Chain has significantly lower gas fees (cents) compared to Uniswap on Ethereum mainnet (dollars). However, Uniswap on L2s like Arbitrum has comparable gas costs." },
        { question: "Which has more features?", answer: "PancakeSwap offers more features including farms, lottery, prediction markets, pottery, and IFOs. Uniswap is more focused on being the best swap platform." },
        { question: "Which has more liquidity?", answer: "Uniswap has more total liquidity across its deployments. PancakeSwap has the deepest liquidity on BNB Chain specifically." },
        { question: "Can I use both?", answer: "Yes, you can use both. PancakeSwap is best for BNB Chain tokens, while Uniswap excels for Ethereum and L2 tokens. Many DeFi users maintain both." },
      ]}
      relatedArticles={[
        { title: "Uniswap vs SushiSwap", href: "/exchanges/compare/uniswap-vs-sushiswap", category: "Exchanges" },
        { title: "Curve vs Uniswap", href: "/exchanges/compare/curve-vs-uniswap", category: "Exchanges" },
        { title: "DEX vs CEX", href: "/exchanges/learn/decentralized-vs-centralized", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>PancakeSwap launched in 2020 on BNB Chain (formerly BSC) and has grown into the largest DEX outside of Ethereum. It offers a gamified DeFi experience with token swaps, yield farming, lottery, prediction markets, and NFT marketplace. The platform has expanded to multiple chains including Ethereum, Arbitrum, and others.</p>
        <p>Uniswap is the original AMM DEX, launched in 2018 on Ethereum. It has pioneered innovations like concentrated liquidity (v3) and hook-based customizable pools (v4). Uniswap is deployed across Ethereum and most major L2 networks, maintaining its position as the highest-volume DEX.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>PancakeSwap charges 0.25% on standard swaps, with 0.17% to LPs, 0.03% to the treasury, and 0.05% to CAKE buyback and burn. The platform also offers v3 pools with concentrated liquidity and fee tiers similar to Uniswap.</p>
        <p>Uniswap v3 offers variable fee tiers from 0.01% to 1% depending on the pool. The most common tier is 0.3% for standard pairs and 0.05% for major pairs. Uniswap does not currently take a protocol fee on most pools.</p>
      </section>

      <section id="chains">
        <h2>Chains and Ecosystems</h2>
        <p>PancakeSwap's home is BNB Chain, where it dominates with the deepest liquidity. The platform has expanded to Ethereum, Arbitrum, Base, and several other chains. BNB Chain's low gas fees make PancakeSwap extremely accessible for small trades.</p>
        <p>Uniswap's primary deployment is Ethereum, with strong presence on Arbitrum, Optimism, Base, Polygon, and other L2s. The Ethereum ecosystem's liquidity depth is unmatched, and L2 deployments bring gas costs down to competitive levels.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>PancakeSwap offers a broader feature set: token swaps, yield farms, syrup pools, lottery, prediction markets, pottery, IFOs (Initial Farm Offerings), NFT marketplace, and a gamified profile system. The platform appeals to users who enjoy a more interactive DeFi experience.</p>
        <p>Uniswap focuses narrowly on being the best swap and liquidity protocol. Concentrated liquidity, the Uniswap wallet, and the upcoming v4 hooks represent its innovation focus. The simpler approach creates a more professional, streamlined experience.</p>
      </section>

      <section id="tokenomics">
        <h2>Tokenomics</h2>
        <p>CAKE has active token utility: staking for yield, governance, IFO access, profile creation, and fee discounts. PancakeSwap implements CAKE burning mechanisms to manage supply. The token captures protocol revenue more directly.</p>
        <p>UNI is primarily a governance token with no direct fee capture currently. The protocol fee switch, if activated by governance, could direct a share of trading fees to UNI holders. The token's value is largely based on governance rights over the protocol's future.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Choose PancakeSwap if you trade primarily on BNB Chain, want lower gas costs, enjoy gamified DeFi features, or want to earn CAKE through farming. It is the best DEX for the BSC ecosystem with the most diverse feature set.</p>
        <p>Choose Uniswap if you trade primarily on Ethereum or its L2s, need the deepest liquidity for major pairs, or prefer a focused, professional swap experience. Uniswap provides the best execution for high-value trades.</p>
      </section>
    </LearnPageLayout>
  );
}
