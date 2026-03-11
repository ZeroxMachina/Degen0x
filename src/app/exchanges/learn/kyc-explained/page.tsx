import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `KYC in Crypto: What It Is and Why Exchanges Require It (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what KYC (Know Your Customer) means in crypto, why exchanges require identity verification, what documents you need, and how the process works step by step.",
};

export default function KycExplainedPage() {
  return (
    <LearnPageLayout
      title="KYC in Crypto: What It Is and Why Exchanges Require It"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="8 min"
      intro="If you have signed up for any major cryptocurrency exchange, you have encountered KYC -- Know Your Customer. This identity verification process requires you to submit personal documents before you can trade. While some crypto enthusiasts view KYC as antithetical to the principles of decentralization, it serves important purposes in the regulated financial world. This guide explains what KYC involves, why it exists, and what it means for you as a crypto user."
      toc={[
        { id: "what-is-kyc", title: "What Is KYC?", level: 2 },
        { id: "why-required", title: "Why Do Exchanges Require KYC?", level: 2 },
        { id: "kyc-process", title: "The KYC Verification Process", level: 2 },
        { id: "kyc-levels", title: "KYC Levels and What They Unlock", level: 2 },
        { id: "privacy-concerns", title: "Privacy Concerns and Data Security", level: 2 },
        { id: "no-kyc-options", title: "Trading Without KYC: Options and Limitations", level: 2 },
      ]}
      faqs={[
        {
          question: "Is KYC mandatory on all crypto exchanges?",
          answer:
            "KYC is mandatory on all regulated centralized exchanges. Decentralized exchanges (DEXs) like Uniswap and PancakeSwap do not require KYC since they operate as permissionless smart contracts. Some offshore centralized exchanges offer limited trading without KYC, but the trend is toward universal KYC requirements.",
        },
        {
          question: "How long does KYC verification take?",
          answer:
            "Most major exchanges now use automated verification that can approve your identity in minutes. However, during periods of high signup volume or if there are issues with your documents, it can take one to three business days. Ensure your documents are clear and current to avoid delays.",
        },
        {
          question: "Is my personal data safe with crypto exchanges?",
          answer:
            "Reputable exchanges encrypt and secure KYC data, often using third-party identity verification providers. However, no system is completely immune to breaches. Choose exchanges with strong security track records and understand that submitting KYC data carries some inherent risk of data exposure.",
        },
        {
          question: "Can I use the same KYC on multiple exchanges?",
          answer:
            "No. Each exchange has its own independent KYC process. You need to verify your identity separately on every platform you use. Some third-party services are working on portable identity verification, but this is not yet widely adopted.",
        },
      ]}
      relatedArticles={[
        {
          title: "How to Buy Cryptocurrency: A Step-by-Step Guide",
          href: "/exchanges/learn/how-to-buy-crypto",
          category: "Exchanges",
        },
        {
          title: "How to Secure Your Crypto Exchange Account",
          href: "/exchanges/learn/exchange-security-tips",
          category: "Exchanges",
        },
        {
          title: "CEX vs DEX: Centralized vs Decentralized Exchanges",
          href: "/exchanges/learn/cex-vs-dex",
          category: "Exchanges",
        },
      ]}
    >
      <h2 id="what-is-kyc">What Is KYC?</h2>
      <p>
        KYC stands for Know Your Customer (sometimes Know Your Client). It is a set of identity verification
        procedures that financial institutions use to confirm that their customers are who they claim to be. In the
        context of cryptocurrency, KYC typically involves submitting a government-issued ID, proof of address, and
        sometimes a selfie or video verification.
      </p>
      <p>
        KYC is part of a broader regulatory framework known as AML (Anti-Money Laundering) compliance. These
        regulations exist across the financial industry -- banks, brokerages, and payment processors all have KYC
        requirements. Crypto exchanges are no different, and as the industry has matured, KYC has become standard
        practice on virtually all major centralized platforms.
      </p>
      <p>
        The information collected during KYC typically includes your full legal name, date of birth, residential
        address, nationality, government ID number, and a photograph. Some exchanges also ask about your source of
        funds and intended use of the platform, particularly for higher verification tiers.
      </p>

      <h2 id="why-required">Why Do Exchanges Require KYC?</h2>
      <p>
        The primary reason exchanges implement KYC is legal compliance. In most countries, businesses that
        facilitate the exchange of fiat currency and cryptocurrency are classified as Money Service Businesses
        (MSBs) or equivalent, requiring them to follow AML and Counter-Terrorism Financing (CTF) regulations.
        Failure to comply can result in massive fines, loss of banking relationships, or criminal prosecution.
      </p>
      <p>
        KYC also protects users. By verifying identities, exchanges can prevent fraud, restrict access by
        sanctioned individuals, and assist law enforcement in recovering stolen funds. If your account is hacked,
        KYC documentation helps prove ownership and can facilitate account recovery.
      </p>
      <p>
        From a business perspective, KYC enables exchanges to offer fiat currency services. Banks and payment
        processors will not work with exchanges that do not have robust KYC procedures. Without banking
        relationships, an exchange cannot offer fiat deposits and withdrawals, which are essential for most users.
      </p>

      <h2 id="kyc-process">The KYC Verification Process</h2>
      <p>
        The standard KYC process on most crypto exchanges follows a similar pattern. First, you enter your
        personal information: name, date of birth, address, and nationality. Next, you upload or photograph a
        government-issued ID. Accepted documents typically include a passport, driver&apos;s license, or national
        identity card.
      </p>
      <p>
        Many exchanges then require a selfie or live video to match your face with the photo on your ID. Some use
        liveness detection technology to ensure you are present and not using a photograph. After submission, the
        exchange (or its third-party verification partner) reviews your documents and either approves or requests
        additional information.
      </p>
      <p>
        To ensure a smooth verification, make sure your ID is not expired, the photos are well-lit and clear, all
        four corners of the document are visible, and the information you entered matches your ID exactly. Common
        rejection reasons include blurry photos, expired documents, and name mismatches.
      </p>

      <h2 id="kyc-levels">KYC Levels and What They Unlock</h2>
      <p>
        Most exchanges implement tiered KYC with increasing verification requirements and corresponding higher
        limits. Basic verification (Tier 1) usually requires just an email and phone number and provides limited
        functionality -- perhaps crypto-to-crypto trading with low withdrawal limits.
      </p>
      <p>
        Intermediate verification (Tier 2) typically requires government ID and unlocks fiat deposits and
        withdrawals with moderate limits. Full verification (Tier 3) may require proof of address (utility bill or
        bank statement) and unlocks the highest limits, advanced trading features like margin and futures, and
        sometimes institutional-grade services.
      </p>
      <p>
        For example, on Binance, basic verification with just an ID allows up to 50,000 USDT in daily withdrawals.
        On Coinbase, full verification is required for most functionality. Kraken offers three tiers with
        progressively higher fiat and crypto limits. Choose the verification level that matches your intended
        trading volume and needs.
      </p>

      <h2 id="privacy-concerns">Privacy Concerns and Data Security</h2>
      <p>
        Submitting sensitive personal documents to a crypto exchange carries real privacy risks. Exchange data
        breaches have occurred in the past, exposing user identity documents and personal information. In some
        cases, stolen KYC data has appeared for sale on dark web marketplaces.
      </p>
      <p>
        To mitigate these risks, choose exchanges with strong security practices. Look for platforms that encrypt
        KYC data, use reputable third-party verification providers (like Jumio or Onfido), comply with data
        protection regulations like GDPR, and have clear data retention and deletion policies.
      </p>
      <p>
        On your end, consider using a unique email address for each exchange, avoid submitting more information
        than required, and keep records of which platforms hold your KYC data. Some users watermark their ID photos
        with the exchange name and date to track potential leaks, though not all exchanges accept watermarked
        documents.
      </p>

      <h2 id="no-kyc-options">Trading Without KYC: Options and Limitations</h2>
      <p>
        If you prefer to trade without completing KYC, decentralized exchanges are the primary option. Platforms
        like Uniswap, PancakeSwap, and Jupiter operate as permissionless smart contracts and require nothing more
        than a cryptocurrency wallet to use. However, you cannot buy crypto with fiat currency directly on these
        platforms.
      </p>
      <p>
        Some centralized exchanges historically offered limited trading without KYC, but this is becoming
        increasingly rare as global regulations tighten. Exchanges that still allow it typically impose very low
        withdrawal limits and restricted features.
      </p>
      <p>
        Peer-to-peer (P2P) trading platforms offer another avenue, though many that are integrated into major
        exchanges still require KYC. Fully decentralized P2P options exist but come with higher counterparty risk
        and less convenient user experiences. For most users, completing KYC on a reputable exchange remains the
        most practical and safest approach to accessing the crypto market.
      </p>
    </LearnPageLayout>
  );
}
