import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Fiat? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what fiat currency is, how it differs from cryptocurrency, and why it matters in the crypto ecosystem.",
};

export default function FiatPage() {
  return (
    <LearnPageLayout
      title="What Is Fiat?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Fiat currency is government-issued money that is not backed by a physical commodity like gold. Its value comes from the trust and authority of the issuing government. The US dollar, euro, and Japanese yen are all fiat currencies. In crypto, the term 'fiat' is used to distinguish traditional currencies from digital assets and is the primary on-ramp for entering the crypto market."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-fiat", title: "What Is Fiat?", level: 2 },
        { id: "fiat-vs-crypto", title: "fiat-vs-crypto", level: 2 },
        { id: "fiat-vs-cryptocurrency", title: "Fiat vs Cryptocurrency", level: 2 },
        { id: "fiat-on-ramps", title: "fiat-on-ramps", level: 2 },
        { id: "fiat-on-ramps", title: "Fiat On-Ramps", level: 2 },
        { id: "stablecoins-bridge", title: "stablecoins-bridge", level: 2 },
        { id: "stablecoins-as-a-bridge", title: "Stablecoins as a Bridge", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-fiat-matters-in-crypto", title: "Why Fiat Matters in Crypto", level: 2 }
      ]}
      faqs={[
        {
          question: "Why do crypto enthusiasts criticize fiat currency?",
          answer:
            "Critics argue that fiat currency can be inflated at will by governments and central banks, eroding purchasing power over time. Unlike Bitcoin, which has a fixed supply of 21 million, fiat money supply can be expanded without limit. This is a core philosophical motivation behind many cryptocurrency projects.",
        },
        {
          question: "Can I buy crypto directly with fiat?",
          answer:
            "Yes. Centralized exchanges like Coinbase and Kraken, as well as many on-ramp services, allow you to purchase cryptocurrency using fiat via bank transfer, credit card, or other payment methods. This fiat-to-crypto conversion is the most common way new users enter the market.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Stablecoin?", href: "/learn/glossary/stablecoin", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
        { title: "What Is KYC?", href: "/learn/glossary/kyc", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Fiat?</h2>
      <p>
        Fiat is a Latin word meaning &quot;let it be done.&quot; Fiat currency has value because a government declares it legal tender and citizens accept it for transactions and tax payments. Unlike commodity-backed money (such as the gold standard), fiat derives its worth from government authority and economic stability rather than intrinsic physical value. Nearly every national currency today is fiat.
      </p>

      <h2 id="fiat-vs-crypto">Fiat vs Cryptocurrency</h2>
      <p>
        Fiat is controlled by central banks that can adjust money supply, set interest rates, and implement monetary policy. Cryptocurrency operates on decentralized networks with rules encoded in software. Fiat supply is theoretically unlimited; many cryptocurrencies have fixed or predictable supply schedules. Fiat transactions require intermediaries like banks, while crypto enables peer-to-peer transfers.
      </p>

      <h2 id="fiat-on-ramps">Fiat On-Ramps</h2>
      <p>
        A fiat on-ramp is any service that lets you convert traditional currency into cryptocurrency. Centralized exchanges are the most common on-ramp, but peer-to-peer platforms, Bitcoin ATMs, and payment apps also offer conversion. Most on-ramps require KYC verification due to anti-money-laundering regulations, creating a bridge between the regulated financial system and the crypto ecosystem.
      </p>

      <h2 id="stablecoins-bridge">Stablecoins as a Bridge</h2>
      <p>
        Stablecoins like USDC and USDT are crypto tokens pegged to fiat currencies, typically the US dollar. They allow traders to hold a stable value within the crypto ecosystem without converting back to fiat. Stablecoins have become the primary trading pair on exchanges and the backbone of DeFi, serving as a bridge between fiat stability and crypto programmability.
      </p>

      <h2 id="why-it-matters">Why Fiat Matters in Crypto</h2>
      <p>
        Despite the crypto ethos of decentralization, fiat remains essential. It is how most people enter and exit the crypto market. Crypto prices are denominated in fiat (primarily USD). Regulatory frameworks are built around fiat systems. Understanding the relationship between fiat and crypto is fundamental to navigating the digital asset space effectively.
      </p>
    </LearnPageLayout>
  );
}
