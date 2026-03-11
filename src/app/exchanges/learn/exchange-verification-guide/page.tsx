import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `KYC Verification on Exchanges (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about KYC verification on crypto exchanges. Required documents, verification levels, processing times, privacy considerations, and tips for fast approval.",
};

export default function ExchangeVerificationGuide() {
  return (
    <LearnPageLayout
      title="KYC Verification on Exchanges"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="KYC (Know Your Customer) verification is required by most regulated crypto exchanges before you can trade, deposit, or withdraw funds. The process verifies your identity to comply with anti-money laundering regulations. While sometimes frustrating, understanding what is required and preparing documents in advance makes the process smoother and faster."
      toc={[
        { id: "what-is-kyc", title: "What Is KYC?", level: 2 },
        { id: "verification-levels", title: "Verification Levels", level: 2 },
        { id: "required-documents", title: "Required Documents", level: 2 },
        { id: "process", title: "The Verification Process", level: 2 },
        { id: "common-issues", title: "Common Issues and Solutions", level: 2 },
        { id: "privacy", title: "Privacy Considerations", level: 2 },
        { id: "tips", title: "Tips for Fast Approval", level: 2 },
      ]}
      faqs={[
        { question: "How long does KYC take?", answer: "Automated verification with photo ID can complete in minutes. Manual review may take 1-3 business days. During high demand periods, processing can take up to a week. Complete KYC before you need to trade to avoid delays." },
        { question: "Why do exchanges need KYC?", answer: "Regulated exchanges are legally required to verify customer identities to prevent money laundering, terrorism financing, and fraud. KYC compliance is mandatory under financial regulations in most jurisdictions worldwide." },
        { question: "Can I trade without KYC?", answer: "Very few regulated exchanges allow trading without KYC. Some platforms offer limited functionality without verification, such as small withdrawal limits. Decentralized exchanges (DEXs) generally do not require KYC but come with different tradeoffs." },
        { question: "Is my KYC data safe?", answer: "Reputable exchanges encrypt and securely store KYC data. However, data breaches can expose personal information. Use exchanges with strong security track records. The risk is real but regulated exchanges face legal requirements to protect this data." },
      ]}
      relatedArticles={[
        { title: "Exchange Deposit Methods", href: "/exchanges/learn/exchange-deposit-methods", category: "Exchanges" },
        { title: "Exchange Security Features", href: "/exchanges/learn/exchange-security-features", category: "Exchanges" },
        { title: "How to Choose a Crypto Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <section id="what-is-kyc">
        <h2>What Is KYC?</h2>
        <p>KYC stands for Know Your Customer, a regulatory requirement for financial institutions to verify the identity of their clients. In crypto, this means proving who you are before an exchange allows you to trade, deposit, or withdraw funds.</p>
        <p>KYC regulations exist to prevent money laundering (AML), terrorism financing (CTF), and fraud. Regulatory bodies worldwide require crypto exchanges to implement KYC processes. Exchanges that fail to comply face fines, license revocation, and legal action.</p>
        <p>While KYC creates friction, it also provides user protections. Verified accounts have stronger security, access to higher limits, and recourse through the exchange's support systems if something goes wrong. Unverified or anonymous trading carries more risk for the user.</p>
      </section>

      <section id="verification-levels">
        <h2>Verification Levels</h2>
        <p>Most exchanges use tiered verification. Basic verification typically requires an email address and phone number, providing minimal account access. Intermediate verification adds government ID and selfie verification, unlocking standard trading and withdrawal limits.</p>
        <p>Advanced verification may require proof of address documents, additional ID types, or video verification. This level unlocks the highest deposit and withdrawal limits. Institutional accounts require corporate documentation, beneficial ownership disclosure, and compliance certifications.</p>
        <p>Specific limits vary by exchange. Coinbase requires full verification for any trading. Binance offers limited functionality at basic verification. Kraken provides tiered access with increasing limits at each level. Check your exchange's specific requirements and limits.</p>
      </section>

      <section id="required-documents">
        <h2>Required Documents</h2>
        <p>Government-issued photo ID is universally required. Acceptable documents include passports, national ID cards, and driver's licenses. The document must be current, not expired, and clearly readable. Passports are accepted most universally across exchanges.</p>
        <p>Selfie or liveness verification confirms you are the person on the ID. This may involve taking a photo holding your ID, recording a short video, or completing a liveness check by turning your head. AI-based verification systems process these in minutes.</p>
        <p>Proof of address is required for higher verification tiers. Accepted documents include utility bills, bank statements, or government correspondence showing your name and residential address. Documents must typically be less than 3 months old. Some exchanges accept credit card statements or tax documents.</p>
      </section>

      <section id="process">
        <h2>The Verification Process</h2>
        <p>Start verification from your exchange account settings. Select the verification level you need and follow the prompts. Have your documents ready before starting, as some verification flows expire if not completed within a certain timeframe.</p>
        <p>Photo quality matters significantly. Ensure good lighting, clear focus, and that all text on documents is readable. Avoid glare, shadows, and cropped edges. Most rejections occur due to poor image quality rather than document issues.</p>
        <p>After submission, automated systems process most verifications within minutes. Some exchanges use third-party providers like Jumio or Onfido for identity verification. If manual review is needed, expect 1-3 business days. Complex cases or high-demand periods may take longer.</p>
      </section>

      <section id="common-issues">
        <h2>Common Issues and Solutions</h2>
        <p>Rejected photos are the most common issue. Retake images in bright, even lighting with a plain background. Ensure all four corners of the document are visible and no information is obscured by glare or shadows. Remove phone cases that might block the camera.</p>
        <p>Name mismatches between your ID and account information cause rejections. Ensure the name on your exchange account exactly matches your government ID. Middle names, hyphens, and special characters must be consistent across both.</p>
        <p>Address verification failures often occur when documents are too old, the address does not match, or the document type is not accepted. If your utility bills are electronic, print them or take a clear screenshot showing the provider's letterhead, your name, address, and date.</p>
      </section>

      <section id="privacy">
        <h2>Privacy Considerations</h2>
        <p>KYC data is sensitive personal information. Before submitting, research how the exchange stores and protects this data. Reputable exchanges encrypt KYC documents and limit employee access. Check the exchange's privacy policy for data retention and sharing practices.</p>
        <p>Data breaches at exchanges can expose KYC documents. While rare at major exchanges, the risk exists. Minimize exposure by only completing KYC on exchanges you plan to actively use. Consider the exchange's security track record before sharing personal documents.</p>
        <p>Some users prefer decentralized exchanges (DEXs) to avoid KYC entirely. DEXs operate without identity verification but require more technical knowledge, carry smart contract risks, and offer less recourse if something goes wrong. The privacy benefit comes with different tradeoffs.</p>
      </section>

      <section id="tips">
        <h2>Tips for Fast Approval</h2>
        <p>Complete KYC before you need to trade. Verification delays during market volatility are frustrating when you want to buy or sell immediately. Set up and verify your accounts on preferred exchanges well in advance.</p>
        <p>Use a passport if possible, as it is the most universally accepted ID across all exchanges and jurisdictions. Ensure the document is not expired and has at least 6 months of validity remaining.</p>
        <p>Submit during business hours when manual review teams are active. Avoid submitting during peak hours or immediately after major exchange announcements when support teams are overwhelmed. Clear, high-quality photos of valid documents submitted at off-peak times get the fastest processing.</p>
      </section>
    </LearnPageLayout>
  );
}
