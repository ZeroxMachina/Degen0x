import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Worldcoin (WLD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Worldcoin (WLD), the digital identity and financial network using iris scanning. Discover how it works, tokenomics, use cases, and how to buy WLD.",
};

export default function WorldcoinIdPage() {
  return (
    <LearnPageLayout title="What Is Worldcoin (WLD)? Price, Guide & How to Buy" categoryName="Investing" categorySlug="investing" readTime="9 min read" intro="Worldcoin is a digital identity and financial network co-founded by Sam Altman that uses iris-scanning biometric technology (the Orb) to create a unique proof of personhood for every human. The project aims to distribute a universal basic income in WLD tokens to verified humans while building World ID as a global identity protocol that distinguishes humans from AI bots in an increasingly AI-driven world." toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-worldcoin", title: "What Is Worldcoin?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-worldcoin-work", title: "How Does Worldcoin Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "wld-tokenomics", title: "WLD Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-wld", title: "How to Buy WLD", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]} faqs={[{question:"What is Worldcoin?",answer:"Worldcoin is a digital identity network using iris-scanning biometrics to create proof of personhood, aiming to distribute tokens to all verified humans and build a global ID system."},{question:"Where can I buy WLD?",answer:"WLD is available on Binance, OKX, Bybit, Gate.io, and Uniswap. It trades against USDT and ETH pairs."},{question:"Is Worldcoin a good investment?",answer:"Worldcoin has ambitious global reach and high-profile backing, but faces regulatory scrutiny and privacy concerns. This is not financial advice. Do your own research."}]} relatedArticles={[{title:"Best Cryptos to Buy",href:"/investing/best/cryptos-to-buy",category:"Investing"},{title:"How to Invest in Crypto",href:"/investing/learn/how-to-invest-in-crypto",category:"Investing"},{title:"Ethereum",href:"/investing/crypto/ethereum",category:"Investing"}]}>
      <h2 id="what-is">What Is Worldcoin?</h2>
      <p>Worldcoin was co-founded by Sam Altman (CEO of OpenAI), Max Novendstern, and Alex Blania with the thesis that as AI becomes more capable, proving you are a unique human online will become critically important. The project developed the Orb, a custom hardware device that scans a person&apos;s iris to generate a unique biometric hash without storing the actual iris image. This creates a verifiable proof that someone is a real, unique human who hasn&apos;t already registered, enabling Sybil-resistant identity verification at global scale.</p>
      <p>The project operates on World Chain, an Ethereum Layer 2 built with the OP Stack that prioritizes transactions from verified humans. World App serves as the primary wallet and identity interface, allowing verified users to claim WLD grants, make payments, and use their World ID for authentication across supported applications. The project has verified millions of people across dozens of countries through Orb scanning locations.</p>

      <h2 id="how-it-works">How Does Worldcoin Work?</h2>
      <p>Users visit an Orb location to have their iris scanned. The Orb generates a unique iris code, a mathematical representation that is enrolled in the World ID registry. The actual iris images are deleted after processing on the Orb device. Once verified, users receive a World ID that proves they are a unique human without revealing their identity, using zero-knowledge proofs for privacy-preserving verification. Verified humans can claim periodic WLD token grants through the World App.</p>
      <p>World ID can be integrated by third-party applications as a Sybil-resistant authentication mechanism. Developers use the World ID SDK to verify that users are unique humans in their applications, useful for airdrops, voting, social media, and any system vulnerable to bot manipulation. World Chain provides priority block space for verified human transactions.</p>

      <h2 id="tokenomics">WLD Tokenomics</h2>
      <p>WLD has a total supply that is distributed through ongoing grants to verified World ID holders worldwide. The majority of tokens are allocated to the community through user grants and ecosystem development. The token is used for governance over the Worldcoin protocol, transaction gas on World Chain, and as the medium for universal human grants. The ongoing distribution model means new tokens continuously enter circulation as more people verify and claim grants.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Worldcoin enables proof of personhood for distinguishing humans from AI bots, universal token distribution to verified humans worldwide, Sybil-resistant identity for applications and governance systems, privacy-preserving authentication through zero-knowledge World ID, and a dedicated L2 chain prioritizing verified human transactions.</p>

      <h2 id="how-to-buy">How to Buy WLD</h2>
      <p>To buy WLD, purchase on Binance, OKX, Bybit, or swap ETH for WLD on Uniswap. WLD is also available for claiming by verified World ID holders through the World App. Store WLD in MetaMask, World App, or a hardware wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Worldcoin faces significant regulatory scrutiny over biometric data collection, with multiple countries investigating or restricting Orb operations. Privacy concerns about iris scanning persist despite the project&apos;s claims of data deletion. The continuous token distribution creates ongoing inflation. Hardware dependency on Orbs creates physical infrastructure scaling challenges. Centralization of the Orb manufacturing and verification process raises trust concerns. Competition from other proof of personhood solutions is emerging.</p>
    </LearnPageLayout>
  );
}
