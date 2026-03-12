import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is RWA Tokenization? Real World Assets on Blockchain (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what RWA tokenization is, how real-world assets are brought on-chain, key projects in the space, and why institutions are adopting tokenized assets.",
};

export default function WhatIsRwaPage() {
  return (
    <LearnPageLayout
      title="What Is RWA Tokenization?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="RWA tokenization is the process of representing ownership of real-world assets as digital tokens on a blockchain. These assets include treasury bonds, real estate, commodities, private credit, art, and more. By bringing traditional assets on-chain, tokenization enables fractional ownership, 24/7 trading, instant settlement, and global accessibility. RWA has become one of the fastest-growing sectors in crypto, with major institutions like BlackRock and Franklin Templeton entering the space."
      toc={[
        { id: "what-is-rwa", title: "what-is-rwa", level: 2 },
        { id: "what-is-rwa-tokenization", title: "What Is RWA Tokenization?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-rwa-tokenization-works", title: "How RWA Tokenization Works", level: 2 },
        { id: "asset-types", title: "asset-types", level: 2 },
        { id: "types-of-tokenized-assets", title: "Types of Tokenized Assets", level: 2 },
        { id: "future-of-rwa", title: "future-of-rwa", level: 2 },
        { id: "the-future-of-rwa", title: "The Future of RWA", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between RWA tokens and regular crypto?",
          answer:
            "Regular crypto tokens like ETH or UNI represent native digital assets. RWA tokens represent ownership or claims on physical or traditional financial assets that exist outside the blockchain. RWA tokens require a legal framework connecting the on-chain token to the off-chain asset, often involving custodians, legal entities, and regulatory compliance.",
        },
        {
          question: "Can anyone buy tokenized real-world assets?",
          answer:
            "It depends on the asset and jurisdiction. Many tokenized treasuries and private credit products require KYC verification and may be limited to accredited investors. Some tokenized commodities and real estate products are available to retail investors globally. Regulatory compliance requirements vary by product and region.",
        },
        {
          question: "Are RWA tokens safe?",
          answer:
            "RWA tokens carry both traditional asset risk and crypto-specific risk. The underlying asset can lose value, the issuer can default, smart contracts can have vulnerabilities, and the legal framework connecting token to asset may be untested. Choose products from established issuers with strong legal structures and transparent auditing.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Stablecoins?", href: "/learn/what-are-stablecoins", category: "Learn Crypto" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
        { title: "Security Token", href: "/learn/glossary/security-token", category: "Glossary" },
        { title: "Crypto Narratives", href: "/learn/crypto-narratives", category: "Learn Crypto" },
      ]}
    >
      <section id="what-is-rwa">
        <h2>What Is RWA Tokenization?</h2>
        <p>
          RWA tokenization creates a digital representation of a real-world asset on a blockchain. A tokenized US Treasury bond, for example, is a blockchain token that represents a claim on an actual Treasury held by a custodian. The token holder receives the yield from the underlying bond, and the token can be traded, used as collateral in DeFi, or held as a store of value. The total value of tokenized RWAs has grown to exceed $10 billion, excluding stablecoins.
        </p>
        <p>
          The appeal of tokenization lies in the efficiency gains it brings to traditional finance. Traditional asset settlement takes days and involves multiple intermediaries. Tokenized assets settle in minutes on-chain. Fractional ownership allows investors to buy portions of assets that previously required large minimum investments. A tokenized real estate fund can accept investments of $100, while traditional real estate funds might require $250,000 or more.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How RWA Tokenization Works</h2>
        <p>
          The tokenization process begins with asset selection and legal structuring. An issuer creates a special purpose vehicle (SPV) or trust that holds the underlying asset. Smart contracts are deployed to represent shares of this vehicle as blockchain tokens. The legal entity ensures that token holders have enforceable claims on the underlying asset, bridging the gap between blockchain records and traditional property rights.
        </p>
        <p>
          Oracles play a critical role by providing on-chain data about the off-chain asset, such as current valuations, interest payments, and compliance status. Chainlink and other oracle networks supply this data to smart contracts. Compliance is maintained through on-chain KYC and transfer restrictions, ensuring that tokens can only be held and traded by eligible participants as required by securities regulations.
        </p>
      </section>

      <section id="asset-types">
        <h2>Types of Tokenized Assets</h2>
        <p>
          Tokenized treasuries are the largest RWA category. Products from BlackRock (BUIDL), Franklin Templeton, and Ondo Finance provide on-chain access to US Treasury yields. These products have attracted billions in deposits from DeFi users seeking stable, low-risk yield. Private credit tokenization through platforms like Maple, Centrifuge, and Goldfinch brings institutional lending on-chain.
        </p>
        <p>
          Real estate tokenization allows fractional ownership of properties through platforms like RealT and Lofty. Commodity tokenization covers gold (PAX Gold, Tether Gold), carbon credits, and other physical assets. Art and collectibles tokenization has also emerged, though it remains a smaller niche. As the infrastructure matures, virtually any asset class can be tokenized, from equities and bonds to insurance contracts and intellectual property.
        </p>
      </section>

      <section id="future-of-rwa">
        <h2>The Future of RWA</h2>
        <p>
          Institutional adoption of RWA tokenization is accelerating. Major banks, asset managers, and governments are exploring or actively deploying tokenized asset platforms. The World Economic Forum estimates that $16 trillion in assets could be tokenized by 2030. This institutional momentum provides a strong foundation for continued growth, though regulatory clarity remains the biggest bottleneck.
        </p>
        <p>
          The convergence of RWA with DeFi represents a massive opportunity. Tokenized treasuries can serve as collateral in lending protocols, tokenized real estate can be used in yield strategies, and tokenized equities can be traded on decentralized exchanges. As the legal and technical infrastructure matures, RWA tokenization has the potential to bring trillions of dollars in traditional assets into the on-chain economy, fundamentally transforming global finance.
        </p>
      </section>
    </LearnPageLayout>
  );
}
