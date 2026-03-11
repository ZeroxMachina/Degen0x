import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is RATS (RATS)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about RATS (RATS), the BRC-20 meme token on Bitcoin. Discover how it works, tokenomics, use cases, and how to buy RATS.",
};

export default function RatsPage() {
  return (
    <LearnPageLayout title="What Is RATS (RATS)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="RATS is a BRC-20 meme token on the Bitcoin blockchain that has built a dedicated community within the Bitcoin Ordinals ecosystem. As one of the popular community-driven BRC-20 tokens, RATS represents the meme coin culture that has extended from Ethereum and Solana onto Bitcoin." toc={[{id:"what-is",title:"What Is RATS?",level:2},{id:"how-it-works",title:"How Does RATS Work?",level:2},{id:"tokenomics",title:"RATS Tokenomics",level:2},{id:"use-cases",title:"Key Use Cases",level:2},{id:"how-to-buy",title:"How to Buy RATS",level:2},{id:"risks",title:"Risks and Considerations",level:2}]} faqs={[{question:"What is RATS?",answer:"RATS is a BRC-20 meme token on Bitcoin that has established a community within the Ordinals ecosystem. It is a community-driven speculative asset."},{question:"Where can I buy RATS?",answer:"RATS is available on select centralized exchanges and Bitcoin Ordinals marketplaces."},{question:"Is RATS a good investment?",answer:"RATS is a speculative meme token on experimental BRC-20 infrastructure. It carries high risk. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"ORDI",href:"/investing/crypto/ordi",category:"Investing"}]}>
      <h2 id="what-is">What Is RATS?</h2>
      <p>RATS is a community-driven BRC-20 meme token on Bitcoin that emerged during the Ordinals boom. The token represents the expansion of meme coin culture onto the Bitcoin blockchain, a space previously associated primarily with store-of-value and digital gold narratives. RATS has built an engaged community that participates in the broader Bitcoin Ordinals ecosystem.</p>
      <p>As a BRC-20 token, RATS benefits from being natively on Bitcoin, the most secure and widely recognized blockchain, while tapping into the speculative energy of meme coin markets.</p>

      <h2 id="how-it-works">How Does RATS Work?</h2>
      <p>RATS uses the BRC-20 token standard built on Bitcoin's Ordinals protocol. Token operations including minting, deploying, and transferring are encoded as JSON inscriptions on satoshis. Off-chain indexers interpret these inscriptions to maintain token balance records. Trading occurs on specialized Ordinals marketplaces and centralized exchanges.</p>

      <h2 id="tokenomics">RATS Tokenomics</h2>
      <p>RATS has a large total supply that was fair-minted by the community through open inscription transactions. There are no team allocations, vesting schedules, or controlled emission mechanisms. The fair mint distribution means the token is widely held across many community participants.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>RATS serves as a speculative trading asset within the BRC-20 ecosystem, a community token for Bitcoin Ordinals enthusiasts, and a meme coin bringing cultural energy to the Bitcoin blockchain.</p>

      <h2 id="how-to-buy">How to Buy RATS</h2>
      <p>To buy RATS, check centralized exchanges for listings or use Bitcoin Ordinals marketplaces for on-chain trading. Store in a Bitcoin wallet that supports Ordinals inscriptions. Verify you are purchasing the correct BRC-20 token.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>RATS is a highly speculative meme token on experimental BRC-20 infrastructure. Off-chain indexer dependencies add trust assumptions. Liquidity can be thin compared to major cryptocurrencies. The BRC-20 standard's long-term viability is unproven. Meme coins face extreme volatility and can lose most of their value rapidly.</p>
    </LearnPageLayout>
  );
}
