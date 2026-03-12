import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is KYC? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what KYC (Know Your Customer) means in crypto, why exchanges require it, and how it impacts privacy and access.",
};

export default function KycPage() {
  return (
    <LearnPageLayout
      title="What Is KYC?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="KYC stands for Know Your Customer, a regulatory process that requires financial service providers to verify the identity of their users. In crypto, centralized exchanges and fiat on-ramps must collect personal information such as government ID, proof of address, and sometimes biometric data. KYC aims to prevent money laundering, fraud, and terrorist financing, but it creates tension with crypto's ethos of privacy and permissionless access."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-kyc", title: "What Is KYC?", level: 2 },
        { id: "requirements", title: "requirements", level: 2 },
        { id: "kyc-requirements", title: "KYC Requirements", level: 2 },
        { id: "why-required", title: "why-required", level: 2 },
        { id: "why-kyc-is-required", title: "Why KYC Is Required", level: 2 },
        { id: "kyc-debate", title: "kyc-debate", level: 2 },
        { id: "the-kyc-debate", title: "The KYC Debate", level: 2 },
        { id: "kyc-free-options", title: "kyc-free-options", level: 2 },
        { id: "kyc-free-alternatives", title: "KYC-Free Alternatives", level: 2 }
      ]}
      faqs={[
        {
          question: "Do all crypto platforms require KYC?",
          answer:
            "No. Centralized exchanges in regulated jurisdictions require KYC, but decentralized exchanges (DEXs) like Uniswap typically do not because users trade directly from their wallets without creating accounts. However, regulatory pressure is increasing, and some DeFi front-ends have started implementing restrictions based on jurisdiction.",
        },
        {
          question: "Is my KYC data safe with exchanges?",
          answer:
            "There have been cases of KYC data breaches where user identities, ID documents, and personal information were leaked or stolen. This is a legitimate concern. Reputable exchanges invest heavily in data security, but no system is immune to breaches. The exposure of crypto holdings data combined with identity information creates physical security risks.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is Fiat?", href: "/learn/glossary/fiat", category: "Glossary" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is KYC?</h2>
      <p>
        Know Your Customer (KYC) is a set of identity verification procedures that regulated financial institutions must perform on their customers. In the crypto context, KYC typically involves submitting a government-issued photo ID, proof of residential address, and sometimes a selfie or video for biometric verification. The goal is to confirm that the person using the service is who they claim to be.
      </p>

      <h2 id="requirements">KYC Requirements</h2>
      <p>
        KYC requirements vary by jurisdiction and platform. Basic KYC may only require name and email, while enhanced verification adds ID documents and address proof. Some platforms implement tiered KYC, where higher verification levels unlock greater withdrawal limits and features. The process is often paired with AML (Anti-Money Laundering) checks that monitor for suspicious transaction patterns.
      </p>

      <h2 id="why-required">Why KYC Is Required</h2>
      <p>
        Governments require KYC to combat money laundering, tax evasion, terrorist financing, and fraud. Cryptocurrency&apos;s pseudonymous nature makes it attractive for illicit use, which is why regulators worldwide have imposed KYC requirements on crypto service providers. Exchanges that fail to comply face fines, legal action, and potential shutdown. KYC is part of the broader AML regulatory framework.
      </p>

      <h2 id="kyc-debate">The KYC Debate</h2>
      <p>
        Critics argue that KYC contradicts crypto&apos;s founding principles of privacy and permissionless access. It excludes the unbanked who lack formal identification, creates honeypots of sensitive personal data vulnerable to breaches, and enables government surveillance of financial activity. Proponents counter that KYC is necessary for mainstream adoption, institutional participation, and preventing criminal misuse of crypto networks.
      </p>

      <h2 id="kyc-free-options">KYC-Free Alternatives</h2>
      <p>
        Decentralized exchanges, peer-to-peer trading platforms, and DeFi protocols generally operate without KYC since they do not custody user funds. Bitcoin ATMs may have lower KYC thresholds for small amounts. Zero-knowledge proof technology offers a potential future where users can prove compliance without revealing personal information, potentially resolving the tension between regulation and privacy.
      </p>
    </LearnPageLayout>
  );
}
