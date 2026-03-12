import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Drift Protocol (DRIFT)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Drift Protocol (DRIFT), Solana's leading perpetual futures DEX. Discover how it works, tokenomics, use cases, and how to buy DRIFT.",
};

export default function DriftPage() {
  return (
    <LearnPageLayout title="What Is Drift Protocol (DRIFT)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Drift Protocol is a decentralized perpetual futures and spot exchange on Solana that combines an order book, AMM, and JIT (Just-In-Time) liquidity into a unified trading platform. As one of the earliest perp DEXs on Solana, Drift has processed billions in trading volume and offers up to 20x leverage on major crypto assets." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-drift-protocol", title: "What Is Drift Protocol?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-drift-protocol-work", title: "How Does Drift Protocol Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "drift-tokenomics", title: "DRIFT Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-drift", title: "How to Buy DRIFT", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Drift Protocol?",answer:"Drift is a Solana-based perp and spot DEX combining order book, AMM, and JIT liquidity for low-slippage trading with up to 20x leverage on major crypto assets."},{question:"Where can I buy DRIFT?",answer:"DRIFT is available on Bybit, Gate.io, and Jupiter DEX on Solana. It trades against USDT and SOL pairs."},{question:"Is Drift a good investment?",answer:"Drift is a leading Solana perp DEX with innovative liquidity mechanisms, but faces competition from Jupiter Perps. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Solana",href:"/investing/crypto/solana",category:"Investing"}]}>
      <h2 id="what-is">What Is Drift Protocol?</h2>
      <p>Drift Protocol was founded by David Lu and Cindy Leow and launched on Solana in 2021. The protocol has evolved through multiple versions, with Drift V2 introducing a hybrid liquidity model that combines three liquidity sources: a decentralized limit order book (DLOB), an AMM (using a virtual AMM model), and Just-In-Time liquidity from market makers. This multi-source approach provides deep liquidity and tight spreads for traders.</p>
      <p>Beyond perpetual futures, Drift offers spot trading, lending and borrowing, and prediction markets. The platform&apos;s BET feature allows users to speculate on event outcomes. Drift&apos;s insurance fund and social loss mechanism provide safety nets for the protocol during extreme market conditions.</p>

      <h2 id="how-it-works">How Does Drift Protocol Work?</h2>
      <p>When a trade is submitted, Drift first checks the DLOB for matching limit orders. If no match exists, JIT market makers can fill the order within a short window at competitive prices. If neither fills the order, the virtual AMM serves as the backstop liquidity provider. This cascading system ensures trades are always fillable while incentivizing competitive market making.</p>

      <h2 id="tokenomics">DRIFT Tokenomics</h2>
      <p>DRIFT has a total supply of 1 billion tokens. The token is used for governance, staking for insurance fund participation, and ecosystem incentives. DRIFT stakers contribute to the insurance fund and earn a share of protocol fees. The token was distributed through airdrops to early users and ecosystem participants.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Drift enables leveraged perpetual futures trading on Solana, spot trading with deep liquidity, lending and borrowing of crypto assets, prediction markets through the BET feature, and market making through JIT liquidity provision.</p>

      <h2 id="how-to-buy">How to Buy DRIFT</h2>
      <p>To buy DRIFT, use Jupiter DEX on Solana or purchase on Bybit or Gate.io. Store DRIFT in Phantom or Backpack wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Competition from Jupiter Perps on Solana is intense. Perpetual futures carry leverage risk and potential for rapid losses. Smart contract risk on Solana differs from EVM security assumptions. Trading volume is cyclical. Regulatory scrutiny of decentralized derivatives is increasing. The insurance fund size relative to open interest is a key risk parameter.</p>
    </LearnPageLayout>
  );
}
