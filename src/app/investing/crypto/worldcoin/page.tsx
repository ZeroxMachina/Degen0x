import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Worldcoin (WLD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Worldcoin (WLD), the identity and financial network co-founded by Sam Altman. Discover how it works, tokenomics, and how to buy WLD.",
};

export default function WorldcoinPage() {
  return (
    <LearnPageLayout
      title="What Is Worldcoin (WLD)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Worldcoin is a digital identity and cryptocurrency project co-founded by Sam Altman, CEO of OpenAI. It aims to create a global identity network using biometric verification through its Orb device, distributing free cryptocurrency to every verified human on Earth. WLD is the native token of the Worldcoin ecosystem."
      toc={[
        { id: "what-is", title: "What Is Worldcoin?", level: 2 },
        { id: "how-it-works", title: "How Worldcoin Works", level: 2 },
        { id: "tokenomics", title: "Worldcoin Tokenomics", level: 2 },
        { id: "use-cases", title: "Use Cases & Ecosystem", level: 2 },
        { id: "how-to-buy", title: "How to Buy Worldcoin", level: 2 },
        { id: "risks", title: "Risks & Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Worldcoin?",
          answer:
            "Worldcoin is a global identity and cryptocurrency project that uses iris-scanning Orb devices to verify unique humans and distribute tokens, aiming to create a universal basic income system.",
        },
        {
          question: "Where can I buy WLD?",
          answer:
            "WLD is available on Binance, OKX, Bybit, and other major exchanges. You can also receive free WLD by verifying your identity through a Worldcoin Orb.",
        },
        {
          question: "Is Worldcoin a good investment?",
          answer:
            "Worldcoin has a high-profile founding team and ambitious vision, but faces significant regulatory and privacy challenges. This is not financial advice. Always conduct your own research.",
        },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Worldcoin?</h2>
      <p>
        Worldcoin is a cryptocurrency and identity project launched in July 2023, co-founded by Sam Altman (CEO of OpenAI), Max Novendstern, and Alex Blania. The project&apos;s central thesis is that as AI becomes more prevalent, there will be an increasing need to distinguish humans from AI agents online.
      </p>
      <p>
        The project consists of three components: World ID (a digital identity protocol), the World App (a crypto wallet), and WLD (the cryptocurrency token). Users verify their unique humanness by scanning their iris with a physical Orb device, receiving a World ID that proves they are a unique human without revealing their identity.
      </p>
      <p>
        Worldcoin has attracted significant attention due to its ambitious goal of reaching every human on Earth and its connection to Sam Altman and the broader AI narrative. The project has verified millions of users across dozens of countries.
      </p>

      <h2 id="how-it-works">How Worldcoin Works</h2>
      <p>
        The Orb is a custom-built biometric device that scans a person&apos;s iris to create a unique hash called an IrisCode. This code is compared against all existing codes to ensure uniqueness, then the biometric data is deleted. The resulting World ID enables proof-of-personhood without revealing any personal information.
      </p>
      <p>
        Worldcoin operates on the World Chain, an Ethereum Layer 2 network built using the OP Stack. World Chain prioritizes transactions from verified humans and provides them with free gas allowances, creating a blockchain optimized for real human usage rather than bots.
      </p>

      <h2 id="tokenomics">Worldcoin Tokenomics</h2>
      <p>
        WLD has a total initial supply of 10 billion tokens, with 75% allocated to the community over time through grants to verified World ID holders. The remaining supply is split between the founding team, investors, and Tools for Humanity (the development company). Token distribution follows a multi-year vesting schedule.
      </p>
      <p>
        After the initial 10 billion token supply, the WLD governance community can decide on inflation of up to 1.5% annually. Verified World ID holders receive periodic WLD grants, creating a form of universal basic income in the crypto economy.
      </p>

      <h2 id="use-cases">Use Cases &amp; Ecosystem</h2>
      <p>
        World ID enables proof-of-personhood for online services, helping to combat bots and Sybil attacks. Applications include fair voting in DAOs, equitable token distributions, spam prevention, and verified reviews. The World App serves as a gateway to DeFi, payments, and digital identity services.
      </p>
      <p>
        The broader vision includes enabling universal basic income as AI displaces human jobs, creating fairer digital democratic systems, and providing financial inclusion for the unbanked. Third-party developers can integrate World ID into their applications through a simple SDK.
      </p>

      <h2 id="how-to-buy">How to Buy Worldcoin</h2>
      <p>
        To buy WLD, sign up on Binance, OKX, or Bybit. Complete KYC verification, deposit funds, and purchase WLD tokens. Alternatively, you can receive free WLD by verifying your identity at a Worldcoin Orb location near you and claiming grants through the World App.
      </p>

      <h2 id="risks">Risks &amp; Considerations</h2>
      <p>
        Worldcoin faces significant privacy concerns around biometric data collection, even though the project claims iris data is deleted after processing. Several countries have banned or restricted Worldcoin operations, and regulatory scrutiny from data protection authorities remains a major risk.
      </p>
      <p>
        The large insider token allocation and vesting schedule create potential sell pressure over time. The ambitious goal of reaching all humans faces logistical challenges with Orb distribution. Competition from other identity solutions and the ethical debate around biometric verification in crypto add uncertainty.
      </p>
    </LearnPageLayout>
  );
}
