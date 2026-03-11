import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Wen (WEN)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Wen (WEN), the meme coin launched by Jupiter Exchange on Solana. Discover how it works, tokenomics, use cases, and how to buy WEN.",
};

export default function WenPage() {
  return (
    <LearnPageLayout title="What Is Wen (WEN)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Wen (WEN) is a meme coin on Solana that originated from the popular crypto phrase 'wen?' (slang for 'when?'). The token was airdropped to Solana users and gained traction as part of the broader Solana meme coin ecosystem, becoming one of the recognizable community tokens on the network." toc={[{id:"what-is",title:"What Is Wen?",level:2},{id:"how-it-works",title:"How Does Wen Work?",level:2},{id:"tokenomics",title:"WEN Tokenomics",level:2},{id:"use-cases",title:"Key Use Cases",level:2},{id:"how-to-buy",title:"How to Buy WEN",level:2},{id:"risks",title:"Risks and Considerations",level:2}]} faqs={[{question:"What is Wen?",answer:"Wen (WEN) is a Solana meme coin based on the popular crypto slang term 'wen?' It was distributed through airdrops and became a community staple in the Solana ecosystem."},{question:"Where can I buy WEN?",answer:"WEN is available on Solana DEXes like Jupiter and Raydium. Check centralized exchanges for additional listings."},{question:"Is Wen a good investment?",answer:"WEN is a meme coin driven by community sentiment. It has no underlying utility or revenue generation. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Jupiter",href:"/investing/crypto/jupiter",category:"Investing"}]}>
      <h2 id="what-is">What Is Wen?</h2>
      <p>Wen (WEN) takes its name from one of the most ubiquitous phrases in crypto culture: "wen?" -- the impatient question asked about everything from token launches to market pumps. The token was created as a community meme coin on Solana and distributed widely through airdrops to Solana wallet holders.</p>
      <p>The project resonated with the Solana community due to its cultural relevance and broad distribution, creating a large holder base that maintained interest in the token beyond initial launch excitement.</p>

      <h2 id="how-it-works">How Does Wen Work?</h2>
      <p>WEN operates as an SPL token on Solana with standard transfer and trading functionality. The token trades on DEXes through automated market maker pools. There are no protocol-level utilities or smart contract features beyond basic token operations. Value is driven by community engagement and meme coin market dynamics.</p>

      <h2 id="tokenomics">WEN Tokenomics</h2>
      <p>WEN has a large total supply distributed primarily through airdrops to the Solana community. A portion of unclaimed airdrop tokens was burned, reducing the effective total supply. The wide distribution through airdrops created a decentralized holder base. There are no vesting schedules or emission mechanisms.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>WEN functions as a community meme token on Solana, a speculative trading asset, and a cultural expression of crypto community humor. The token's wide distribution means it serves as a shared experience among Solana users who received the airdrop.</p>

      <h2 id="how-to-buy">How to Buy WEN</h2>
      <p>To buy WEN, swap SOL for WEN on Jupiter or Raydium on Solana. Store in Phantom or any Solana-compatible wallet. The large supply means token prices are very low per unit.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>WEN is a meme coin with no fundamental utility or revenue model. The large supply can make price appreciation difficult on a per-token basis. Meme coin market interest is cyclical and may not sustain long-term engagement. Competition from other Solana meme coins is fierce. There is no development team or roadmap for utility development.</p>
    </LearnPageLayout>
  );
}
