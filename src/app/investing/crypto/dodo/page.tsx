import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is DODO (DODO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about DODO (DODO), the proactive market maker DEX. Discover how it works, tokenomics, use cases, and how to buy DODO.",
};

export default function DodoPage() {
  return (
    <LearnPageLayout title="What Is DODO (DODO)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="DODO is a decentralized exchange powered by its Proactive Market Maker (PMM) algorithm, which provides better capital efficiency and less slippage than traditional AMMs. DODO supports multi-chain trading, token issuance through Crowdpooling, and custom liquidity pool creation, making it a versatile DeFi platform across Ethereum, BNB Chain, Arbitrum, and other networks." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-dodo", title: "What Is DODO?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-dodo-work", title: "How Does DODO Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "dodo-tokenomics", title: "DODO Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-dodo", title: "How to Buy DODO", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is DODO?",answer:"DODO is a DEX using the Proactive Market Maker algorithm for capital-efficient trading with less slippage, supporting multi-chain swaps, token issuance, and custom liquidity pools."},{question:"Where can I buy DODO?",answer:"DODO is available on Binance, Coinbase, OKX, and on the DODO DEX itself. It trades against USDT and ETH."},{question:"Is DODO a good investment?",answer:"DODO's PMM offers unique capital efficiency, but it competes with much larger DEXs like Uniswap. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"}]}>
      <h2 id="what-is">What Is DODO?</h2>
      <p>DODO was founded by Diane Dai and Radar Bear and launched in 2020 with an innovative approach to DEX design. The Proactive Market Maker algorithm uses oracle price feeds to concentrate liquidity around the current market price, achieving capital efficiency comparable to centralized exchange order books while maintaining the permissionless nature of AMMs. This design significantly reduces impermanent loss for liquidity providers.</p>
      <p>The platform offers Crowdpooling for fair token launches, custom pool creation for projects needing tailored liquidity solutions, and a SmartTrade aggregation feature that routes across multiple DEXs. DODO is deployed on over 10 blockchain networks, making it one of the most broadly available DEX protocols.</p>

      <h2 id="how-it-works">How Does DODO Work?</h2>
      <p>The PMM algorithm adjusts the pricing curve based on oracle-provided market prices, concentrating available liquidity near the current price. This results in less slippage for traders and higher capital efficiency for liquidity providers. Unlike constant-product AMMs that spread liquidity across the entire price range, PMM focuses capital where it is most needed, similar to an automated limit order book.</p>

      <h2 id="tokenomics">DODO Tokenomics</h2>
      <p>DODO has a total supply of 1 billion tokens. The token is used for governance, trading fee discounts, Crowdpooling participation, liquidity mining rewards, and vDODO membership for enhanced protocol benefits. vDODO stakers earn a share of trading fees and receive governance voting power.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>DODO enables capital-efficient DEX trading through PMM, token launches via Crowdpooling, custom liquidity pool creation for projects, multi-chain DEX aggregation, and professional market making with reduced impermanent loss.</p>

      <h2 id="how-to-buy">How to Buy DODO</h2>
      <p>To buy DODO, create an account on Binance, Coinbase, or OKX, or swap on the DODO DEX directly. Store DODO in MetaMask or a hardware wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>DODO competes with much larger DEXs for trading volume. The PMM&apos;s oracle dependency introduces price feed risk. Multi-chain deployment spreads liquidity thin. Token utility depends on sustained trading volume. Smart contract risk and DEX regulatory uncertainty are standard considerations.</p>
    </LearnPageLayout>
  );
}
