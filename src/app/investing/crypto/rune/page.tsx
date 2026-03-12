import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Rune (RUNE)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Rune (RUNE), a token in the Bitcoin Runes protocol ecosystem. Discover how it works, tokenomics, use cases, and how to buy RUNE.",
};

export default function RunePage() {
  return (
    <LearnPageLayout title="What Is Rune (RUNE)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="8 min read" intro="Rune refers to tokens created using the Bitcoin Runes protocol, a fungible token standard on Bitcoin designed by Casey Rodarmor (creator of Ordinals). Runes launched at the Bitcoin halving and represents an improved approach to creating fungible tokens on Bitcoin compared to the earlier BRC-20 standard." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-rune", title: "What Is Rune?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-runes-protocol-work", title: "How Does Runes Protocol Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "rune-tokenomics", title: "RUNE Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-rune", title: "How to Buy RUNE", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Rune?",answer:"Rune tokens are created using the Bitcoin Runes protocol, a fungible token standard on Bitcoin that is more efficient than BRC-20. The protocol launched at the 2024 Bitcoin halving."},{question:"Where can I buy Rune tokens?",answer:"Rune tokens are available on Bitcoin-native marketplaces like Magic Eden and select centralized exchanges."},{question:"Is Rune a good investment?",answer:"Runes represent an evolution in Bitcoin token technology, but the space is speculative and still early. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Bitcoin",href:"/investing/crypto/bitcoin",category:"Investing"}]}>
      <h2 id="what-is">What Is Rune?</h2>
      <p>The Bitcoin Runes protocol is a fungible token standard created by Casey Rodarmor, the same developer behind Bitcoin Ordinals. Launched at the April 2024 Bitcoin halving block, Runes provides a more efficient way to create and transfer fungible tokens on Bitcoin compared to BRC-20. The protocol uses Bitcoin's UTXO model directly rather than JSON inscriptions, resulting in less blockchain bloat.</p>
      <p>Rune tokens encompass a variety of tokens created using this protocol, with some achieving significant market capitalizations and trading volumes on Bitcoin-native marketplaces.</p>

      <h2 id="how-it-works">How Does Runes Protocol Work?</h2>
      <p>Runes uses Bitcoin's OP_RETURN output to store token data directly in the UTXO model. This is more efficient than BRC-20's inscription-based approach because it uses less block space and integrates naturally with Bitcoin's existing transaction structure. Token balances are tracked through UTXOs rather than requiring separate indexing of inscriptions.</p>
      <p>The protocol supports etching (creating new Rune tokens), minting (distributing tokens), and transferring operations. Each Rune token has configurable parameters including supply caps, mint limits, and divisibility.</p>

      <h2 id="tokenomics">RUNE Tokenomics</h2>
      <p>Individual Rune tokens have their own unique tokenomics defined at etching time, including total supply, mint mechanisms, and divisibility. The most popular Runes have been minted through open processes similar to BRC-20 fair mints. Each Rune operates independently with its own supply dynamics.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Rune tokens enable efficient fungible token creation on Bitcoin, community-driven token minting, speculative trading within the Bitcoin ecosystem, and an improved alternative to BRC-20 tokens for Bitcoin-native assets.</p>

      <h2 id="how-to-buy">How to Buy RUNE</h2>
      <p>To buy Rune tokens, use Bitcoin-native marketplaces like Magic Eden or specialized Runes trading platforms. Some Rune tokens may be listed on centralized exchanges. Store in a Bitcoin wallet that supports the Runes protocol. Verify the specific Rune token you are purchasing.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>The Runes protocol is new and still developing tooling and infrastructure. Market interest in Bitcoin tokens can be cyclical. Individual Rune tokens are highly speculative with no fundamental utility. The protocol competes with BRC-20 and other Bitcoin token standards. Liquidity for many Rune tokens can be limited. The long-term adoption of Bitcoin-native token standards is uncertain.</p>
    </LearnPageLayout>
  );
}
