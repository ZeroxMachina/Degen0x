import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Frax Share (FXS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Frax Share (FXS), the governance and value accrual token of the Frax ecosystem. Discover FXS tokenomics, staking, and how to buy.",
};

export default function FraxSharePage() {
  return (
    <LearnPageLayout
      title="What Is Frax Share (FXS)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Frax Share (FXS) is the governance and value accrual token of the Frax Finance ecosystem. FXS captures revenue generated across the entire Frax ecosystem including the FRAX stablecoin, frxETH liquid staking, Frax Lend, and the Fraxtal Layer 2. veFXS holders govern the protocol and receive protocol revenue distributions."
      toc={[
        { id: "what-is", title: "What Is Frax Share?", level: 2 },
        { id: "how-it-works", title: "How Does Frax Share Work?", level: 2 },
        { id: "tokenomics", title: "FXS Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy FXS", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Frax Share?", answer: "FXS is the governance and value accrual token of the Frax ecosystem. It captures revenue from FRAX stablecoin operations, frxETH liquid staking, lending activities, and the Fraxtal L2 chain." },
        { question: "Where can I buy FXS?", answer: "FXS is available on Coinbase, Binance, Kraken, and other major exchanges. It can also be purchased on Curve, Uniswap, and Fraxswap." },
        { question: "Is Frax Share a good investment?", answer: "FXS offers governance and revenue sharing across a diversified DeFi ecosystem. The breadth of Frax products provides multiple revenue streams, but regulatory risk to stablecoins and competition are key factors." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Frax Share?</h2><p>Frax Share (FXS) is the governance, utility, and value accrual token of the Frax Finance ecosystem. Unlike FRAX which maintains a stable dollar peg, FXS is a volatile asset that captures the value generated across all Frax ecosystem products. As the ecosystem has expanded to include stablecoins, liquid staking, lending, and a Layer 2 chain, FXS has become a diversified exposure to one of DeFi's most ambitious protocol families.</p><p>The veFXS system allows holders to lock FXS for up to four years to receive governance voting power, gauge emissions direction, and a share of protocol revenue. This vote-escrow model aligns FXS holders with the long-term success of the ecosystem and reduces circulating supply through extended lock periods.</p></section>
      <section id="how-it-works"><h2>How Does Frax Share Work?</h2><p>FXS captures value through multiple revenue streams. FRAX stablecoin operations generate income from AMO deployments in DeFi lending and liquidity provision. frxETH liquid staking earns validator rewards from Ethereum staking. Frax Lend generates interest income from borrowers. Fraxtal generates sequencer revenue from L2 transaction fees. All of these revenue streams flow to the Frax protocol treasury and are distributed to veFXS holders through governance-determined mechanisms.</p><p>veFXS holders vote on gauge weights that determine how FXS emissions are allocated across different liquidity pools and ecosystem products. Protocols seeking FXS emissions for their pools can bribe veFXS holders, creating additional yield opportunities similar to the Curve Wars dynamic.</p></section>
      <section id="tokenomics"><h2>FXS Tokenomics</h2><p>FXS has a maximum supply of approximately 100 million tokens. A significant portion is locked as veFXS, reducing liquid circulation. The token has buyback mechanisms funded by protocol revenue, creating deflationary pressure when the protocol is generating profits. FXS emissions are distributed to incentivize liquidity across the ecosystem, with gauge voting determining allocation. The diversified revenue base across stablecoins, staking, lending, and L2 operations provides multiple value accrual vectors.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>FXS is used for veFXS governance, earning protocol revenue, directing gauge emissions, and accessing the broader Frax ecosystem benefits. The token serves as the primary investment vehicle for exposure to Frax ecosystem growth. FXS is actively traded on major exchanges and used in DeFi as collateral and a liquidity pool asset.</p></section>
      <section id="how-to-buy"><h2>How to Buy FXS</h2><p>FXS is available on Coinbase, Binance, Kraken, OKX, and other major exchanges. It can also be purchased on Curve, Uniswap, and Fraxswap. After buying, locking as veFXS provides governance power and revenue sharing. Store FXS in MetaMask, Ledger, or any Ethereum-compatible wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>FXS's value is tied to the health of the entire Frax ecosystem. Stablecoin regulation could significantly impact FRAX operations and by extension FXS value. The complexity of managing multiple products across stablecoins, liquid staking, lending, and an L2 chain creates operational and smart contract risk. Competition in each product category is intense. The four-year veFXS lock creates significant liquidity risk for governance participants. Execution risk on the Fraxtal L2 and continued ecosystem expansion should be considered.</p></section>
    </LearnPageLayout>
  );
}
