import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `KYC and AML in Crypto: What You Need to Know (${CURRENT_YEAR}) | degen0x`,
  description:
    "Understand KYC and AML requirements in crypto: why exchanges require identity verification, how anti-money laundering rules work, the Travel Rule, privacy implications, and compliance best practices.",
};

export default function KycAmlCryptoPage() {
  return (
    <LearnPageLayout
      title="KYC and AML in Crypto: What You Need to Know"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations are the compliance frameworks that crypto exchanges and service providers must follow to prevent financial crime. Originally developed for traditional banking, these requirements have been extended to the crypto industry as it has grown in scale and mainstream adoption. Understanding KYC/AML is important for all crypto users, as it affects how you access exchanges, the information you must provide, and the regulatory environment that shapes the industry."
      toc={[
        { id: "what-is-kyc", title: "what-is-kyc", level: 2 },
        { id: "what-is-kyc-in-crypto", title: "What Is KYC in Crypto?", level: 2 },
        { id: "aml-framework", title: "aml-framework", level: 2 },
        { id: "the-aml-framework", title: "The AML Framework", level: 2 },
        { id: "travel-rule", title: "travel-rule", level: 2 },
        { id: "the-travel-rule", title: "The Travel Rule", level: 2 },
        { id: "privacy-debate", title: "privacy-debate", level: 2 },
        { id: "the-privacy-vs-compliance-debate", title: "The Privacy vs Compliance Debate", level: 2 }
      ]}
      faqs={[
        {
          question: "Why do crypto exchanges require KYC?",
          answer:
            "Regulated exchanges are legally required to verify customer identities under financial services regulations in most jurisdictions. KYC requirements help prevent money laundering, terrorist financing, sanctions evasion, and fraud. Exchanges that fail to implement adequate KYC face legal penalties, fines, and potential criminal charges against their operators.",
        },
        {
          question: "Can I use crypto without completing KYC?",
          answer:
            "Decentralized exchanges (DEXs) and peer-to-peer trading do not typically require KYC. However, converting crypto to fiat currency through regulated channels almost always requires KYC. Some jurisdictions allow small transactions without full KYC (simplified due diligence), and some non-custodial services can be used without identity verification, though this is becoming more limited as regulations tighten.",
        },
        {
          question: "Is my KYC data safe on crypto exchanges?",
          answer:
            "KYC data is a valuable target for hackers, and several exchanges have experienced data breaches exposing customer information. Reputable exchanges encrypt and secure KYC data according to data protection regulations (like GDPR in Europe), but the risk of data breach cannot be eliminated entirely. Provide KYC information only to well-established, regulated exchanges with strong security track records.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Regulation in the US", href: "/learn/crypto-regulation-us", category: "Learn" },
        { title: "MiCA: EU Crypto Regulation", href: "/learn/crypto-regulation-eu", category: "Learn" },
        { title: "Privacy Coins Explained", href: "/learn/privacy-coins", category: "Learn" },
        { title: "Legal Status of Crypto Worldwide", href: "/learn/crypto-legal-status", category: "Learn" },
      ]}
    >
      <section id="what-is-kyc">
        <h2>What Is KYC in Crypto?</h2>
        <p>
          Know Your Customer (KYC) is the process by which financial service providers verify the identity of their customers. In the crypto context, this typically involves providing a government-issued photo ID (passport, driver's license), proof of address (utility bill, bank statement), and sometimes a selfie or video verification. Enhanced KYC for larger transactions or higher-risk activities may require additional documentation such as source of funds declarations or tax identification numbers.
        </p>
        <p>
          KYC serves several purposes: it confirms that the person opening an account is who they claim to be, it enables ongoing monitoring of account activity for suspicious patterns, it ensures compliance with sanctions lists (verifying that the customer is not a sanctioned individual or entity), and it creates an audit trail that law enforcement can use to investigate financial crime. The level of KYC required varies by jurisdiction and by the services being accessed — basic identity verification for simple trading, enhanced due diligence for large withdrawals or institutional accounts.
        </p>
      </section>

      <section id="aml-framework">
        <h2>The AML Framework</h2>
        <p>
          Anti-Money Laundering (AML) regulations require crypto businesses to implement programs that detect and report suspicious activity. The AML compliance framework typically includes customer due diligence (CDD) through KYC processes, transaction monitoring systems that flag unusual patterns (like large transfers to/from sanctioned jurisdictions or rapid movement of funds through multiple accounts), suspicious activity reporting (SARs) to financial intelligence units, and record-keeping requirements that maintain transaction histories for a specified period.
        </p>
        <p>
          The Financial Action Task Force (FATF) sets international AML standards that most countries follow. FATF has classified virtual asset service providers (VASPs) as obligated entities that must implement full AML programs comparable to those required of banks. Blockchain analytics firms like Chainalysis, Elliptic, and TRM Labs provide tools that help exchanges comply by tracing the source and destination of funds, identifying high-risk addresses, and screening transactions against sanctions lists and known illicit activity patterns.
        </p>
      </section>

      <section id="travel-rule">
        <h2>The Travel Rule</h2>
        <p>
          The Travel Rule, adapted from traditional banking regulation, requires VASPs to share customer information with each other when transferring virtual assets above a certain threshold. When you send crypto from one exchange to another, the sending exchange must transmit your name, account number, and address (or equivalent identifying information) to the receiving exchange, which must verify the recipient's identity. This rule aims to make crypto transfers as traceable as traditional wire transfers.
        </p>
        <p>
          Implementation of the Travel Rule is one of the most significant technical and operational challenges for the crypto industry. Different jurisdictions have set different thresholds (the FATF recommends $1,000, but thresholds vary by country). Solutions like the TRISA protocol and Notabene are being developed to enable secure information sharing between VASPs. The Travel Rule applies only to transfers between VASPs — transfers to and from personal (unhosted) wallets have different requirements that vary by jurisdiction, with some countries requiring additional verification for self-hosted wallet transfers.
        </p>
      </section>

      <section id="privacy-debate">
        <h2>The Privacy vs Compliance Debate</h2>
        <p>
          KYC/AML requirements in crypto exist in tension with the technology's original ethos of privacy, pseudonymity, and permissionless access. Privacy advocates argue that mandatory identity verification contradicts the fundamental principles of cryptocurrency, creates honeypots of sensitive personal data, and excludes the unbanked population that crypto was partly designed to serve. They point out that blockchain's transparency already provides unprecedented financial surveillance capabilities.
        </p>
        <p>
          Regulators and compliance proponents argue that anonymous financial systems facilitate money laundering, terrorist financing, and sanctions evasion, and that bringing crypto into the regulated financial system requires comparable safeguards. The practical middle ground being explored includes zero-knowledge proof-based compliance (proving you meet regulatory requirements without revealing your identity to every counterparty), tiered access models (limited services without KYC, full access with KYC), and on-chain identity attestations that allow compliance verification without centralized data storage. The resolution of this debate will significantly influence the future character of the crypto industry.
        </p>
      </section>
    </LearnPageLayout>
  );
}
