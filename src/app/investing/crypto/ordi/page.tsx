import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is ORDI (ORDI)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about ORDI (ORDI), the first BRC-20 token on Bitcoin. Discover how it works, tokenomics, use cases, and how to buy ORDI.",
};

export default function OrdiPage() {
  return (
    <LearnPageLayout title="What Is ORDI (ORDI)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="ORDI is the first and most prominent BRC-20 token on the Bitcoin blockchain. Created using the Ordinals protocol, ORDI pioneered the concept of fungible tokens on Bitcoin through inscriptions, opening up a new era of Bitcoin-native token creation and trading." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-ordi", title: "What Is ORDI?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-ordi-work", title: "How Does ORDI Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "ordi-tokenomics", title: "ORDI Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-ordi", title: "How to Buy ORDI", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is ORDI?",answer:"ORDI is the first BRC-20 token created on Bitcoin using the Ordinals protocol. It pioneered fungible tokens on the Bitcoin blockchain."},{question:"Where can I buy ORDI?",answer:"ORDI is available on major exchanges including Binance, OKX, and Bybit, as well as Bitcoin-native marketplaces."},{question:"Is ORDI a good investment?",answer:"ORDI has first-mover advantage as the original BRC-20 token, but BRC-20 technology is experimental. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Bitcoin",href:"/investing/crypto/bitcoin",category:"Investing"}]}>
      <h2 id="what-is">What Is ORDI?</h2>
      <p>ORDI is the first BRC-20 token deployed on the Bitcoin blockchain, created using the Ordinals protocol that enables data inscriptions on individual satoshis (the smallest unit of Bitcoin). The BRC-20 standard, inspired by Ethereum's ERC-20, uses JSON inscriptions on Bitcoin to create, mint, and transfer fungible tokens natively on the Bitcoin network.</p>
      <p>As the first BRC-20 token, ORDI holds significant cultural and historical importance in the Bitcoin ecosystem, similar to how CryptoPunks established the NFT category on Ethereum. The token was fully minted by the community through a fair mint process.</p>

      <h2 id="how-it-works">How Does ORDI Work?</h2>
      <p>BRC-20 tokens use Bitcoin's Ordinals protocol to inscribe JSON data onto individual satoshis. Each inscription contains instructions for deploying, minting, or transferring tokens. ORDI transactions are recorded on the Bitcoin blockchain, inheriting Bitcoin's security and immutability. However, BRC-20 token balances are tracked by off-chain indexers that interpret the inscription data.</p>
      <p>Trading ORDI requires using platforms that support Bitcoin Ordinals, including specialized marketplaces and major centralized exchanges that have integrated BRC-20 support.</p>

      <h2 id="tokenomics">ORDI Tokenomics</h2>
      <p>ORDI has a total supply of 21 million tokens, matching Bitcoin's own supply cap as a symbolic gesture. The entire supply was minted through a fair, open process where anyone could inscribe mint transactions on Bitcoin. There is no team allocation, vesting schedule, or additional emission mechanism. The fair distribution is considered one of ORDI's strengths.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>ORDI serves as the flagship BRC-20 token on Bitcoin, a speculative trading asset, a demonstration of Bitcoin's expanding functionality through Ordinals, and a cultural artifact representing Bitcoin's evolving ecosystem beyond simple value transfer.</p>

      <h2 id="how-to-buy">How to Buy ORDI</h2>
      <p>To buy ORDI, use Binance, OKX, or other major exchanges where it is listed. For on-chain purchases, use Bitcoin Ordinals marketplaces. Store in a Bitcoin wallet that supports Ordinals inscriptions.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>BRC-20 technology is experimental and depends on off-chain indexers for balance tracking, which introduces trust assumptions. The Bitcoin community is divided on whether Ordinals and BRC-20 tokens are beneficial for the network. Bitcoin network congestion from inscriptions can increase fees for all users. Competition from other BRC-20 tokens and alternative Bitcoin token standards is ongoing. The long-term viability of BRC-20 as a token standard is uncertain.</p>
    </LearnPageLayout>
  );
}
