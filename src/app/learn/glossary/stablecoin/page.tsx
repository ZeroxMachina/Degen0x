import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Stablecoin? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what stablecoins are, the different types, and why they have become the backbone of crypto trading and DeFi.",
};

export default function StablecoinPage() {
  return (
    <LearnPageLayout
      title="What Is a Stablecoin?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="A stablecoin is a cryptocurrency designed to maintain a stable value, typically pegged to a fiat currency like the US dollar. Unlike volatile cryptocurrencies, stablecoins aim to hold a consistent $1 value, making them useful for trading, lending, payments, and as a store of value within the crypto ecosystem. USDT (Tether), USDC (Circle), and DAI (MakerDAO) are the most widely used stablecoins."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-stablecoin", title: "What Is a Stablecoin?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-stablecoins", title: "Types of Stablecoins", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-de-pegging", title: "Risks and De-Pegging", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-stablecoins-matter", title: "Why Stablecoins Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "Are stablecoins safe?",
          answer:
            "Stablecoins carry different risks depending on their type. Fiat-backed stablecoins depend on the issuer maintaining proper reserves and regulatory compliance. Algorithmic stablecoins have historically been the riskiest, as demonstrated by TerraUSD's collapse. No stablecoin is completely risk-free — evaluate the collateral, audits, and track record of any stablecoin before holding significant amounts.",
        },
        {
          question: "Can stablecoins lose their peg?",
          answer:
            "Yes. De-pegging events occur when a stablecoin trades significantly above or below its target value. TerraUSD (UST) famously collapsed from $1 to near zero in May 2022. Even well-backed stablecoins like USDC temporarily de-pegged during the Silicon Valley Bank crisis in 2023. The mechanism maintaining the peg and the quality of reserves determine de-peg risk.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Fiat?", href: "/learn/glossary/fiat", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is ERC-20?", href: "/learn/glossary/erc-20", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Stablecoin?</h2>
      <p>
        A stablecoin is a cryptocurrency engineered to maintain price stability relative to a reference asset, most commonly the US dollar. While most cryptocurrencies are volatile, stablecoins provide a reliable unit of account and medium of exchange within the crypto ecosystem. They serve as a bridge between the stability of fiat currency and the programmability and accessibility of blockchain technology.
      </p>

      <h2 id="types">Types of Stablecoins</h2>
      <p>
        Fiat-collateralized stablecoins (USDT, USDC) are backed by traditional assets held in bank accounts and treasuries. Crypto-collateralized stablecoins (DAI) are over-collateralized by crypto assets locked in smart contracts. Algorithmic stablecoins use supply-and-demand mechanisms without full collateral backing — these have the highest risk profile. Hybrid models combine elements of multiple approaches to balance stability and decentralization.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        Stablecoins are the primary trading pair on most exchanges, allowing traders to move in and out of volatile positions without converting to fiat. They are the dominant lending and borrowing asset in DeFi. Stablecoins enable cross-border payments that settle in minutes instead of days. They provide a dollar-denominated savings vehicle in countries with unstable local currencies. Businesses use them for payroll, invoicing, and treasury management.
      </p>

      <h2 id="risks">Risks and De-Pegging</h2>
      <p>
        Centralized stablecoins carry counterparty risk: you trust the issuer to maintain proper reserves. They can also be frozen or blacklisted by the issuer. Algorithmic stablecoins face death spiral risk where loss of confidence triggers a feedback loop of selling. Regulatory risk affects all stablecoins as governments worldwide develop frameworks to oversee them. Smart contract risk exists for on-chain stablecoin protocols.
      </p>

      <h2 id="why-it-matters">Why Stablecoins Matter</h2>
      <p>
        Stablecoins have become the most practically useful application of blockchain technology, with market caps exceeding $150 billion and transaction volumes rivaling major payment networks. They provide the stability needed for everyday financial activities while retaining blockchain benefits like programmability, 24/7 availability, and global accessibility. Stablecoins are arguably the killer application that makes the broader crypto ecosystem functional.
      </p>
    </LearnPageLayout>
  );
}
