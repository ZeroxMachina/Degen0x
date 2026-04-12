import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_APPS } from "@/data/investing";
import { FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best Crypto Apps ${CURRENT_YEAR} - Top Mobile Investment Apps`,
  description: `Compare the best crypto apps for ${CURRENT_YEAR}. Expert reviews of mobile crypto trading, portfolio tracking, and wallet apps for iOS and Android.`,
  alternates: { canonical: "/investing/best/apps" },
};

const faqs: FAQ[] = [
  {
    question: "What is the best crypto app for beginners?",
    answer: "Coinbase is the best crypto app for beginners due to its simple interface, strong security, regulatory compliance, and educational resources. The Learn & Earn feature lets new users earn free crypto while learning about different projects.",
  },
  {
    question: "Are crypto apps safe?",
    answer: "Reputable crypto apps from established companies like Coinbase, Kraken, and Crypto.com use industry-standard security including encryption, cold storage, and two-factor authentication. Always enable 2FA, use a strong unique password, and consider moving large holdings to a hardware wallet.",
  },
  {
    question: "Can I buy crypto with a debit card on mobile apps?",
    answer: "Yes. Most crypto apps support debit card purchases, though fees are typically higher than bank transfers (1-3% vs 0-1.5%). Apple Pay and Google Pay are also supported on many platforms. Bank transfers offer the lowest fees but take longer to process.",
  },
];

const toc = [
  { id: "top-picks", title: "Top Crypto Apps", level: 2 },
  { id: "what-to-look-for", title: "What to Look For", level: 2 },
  { id: "custodial-vs-noncustodial", title: "Custodial vs Non-Custodial", level: 2 },
  { id: "tips", title: "Mobile Security Tips", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestCryptoAppsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Crypto Apps", href: "/investing/best/apps" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Apps for {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          The best crypto apps make buying, selling, and managing cryptocurrency easy from your
          phone. We have tested the top mobile apps across iOS and Android for usability, features,
          security, and fees.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Crypto Apps for {CURRENT_YEAR}</h2>
        <div className="space-y-4">
          {CRYPTO_APPS.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="what-to-look-for" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What to Look For in a Crypto App</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          A great crypto app should combine ease of use with robust functionality. Look for
          intuitive navigation, fast trade execution, real-time price alerts, and comprehensive
          portfolio tracking. Supported payment methods matter as well. The best apps accept bank
          transfers, debit cards, and digital wallets like Apple Pay for funding.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#041a12', border: '1px solid #064e3b', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📈</span>
            <strong style={{ color: '#10b981', fontSize: 15 }}>Research Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We are long-term Bitcoin and Ethereum believers. Our analysis of other assets applies the same rigorous framework regardless of personal conviction.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          Security features are non-negotiable. Biometric login (Face ID or fingerprint), two-factor
          authentication, withdrawal confirmations, and session timeouts protect your account on
          mobile. Check the app's ratings and reviews on the App Store and Google Play, but be
          aware that some negative reviews may be from users who lost money trading rather than
          legitimate app complaints.
        </p>
      </section>

      <section id="custodial-vs-noncustodial" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Custodial vs Non-Custodial Apps</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Custodial apps like Coinbase and Crypto.com hold your crypto on your behalf. They are
          simpler to use and offer account recovery if you lose access. However, you trust the
          company to secure your funds. Non-custodial apps like Trust Wallet and Phantom give you
          full control via private keys, meaning only you can access your crypto, but losing your
          seed phrase means losing access permanently.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Many investors use both types. Custodial apps for convenient trading and small amounts,
          and non-custodial wallets for larger holdings and DeFi interactions. Choose based on
          your comfort level with self-custody and your need for DeFi access.
        </p>
      </section>

      <section id="tips" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Mobile Security Tips</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Keep your phone's operating system updated, use a strong screen lock, and never share
          your seed phrase digitally. Avoid public WiFi when accessing crypto apps. Enable all
          available security features including biometric login and 2FA. Be cautious of phishing
          links sent via SMS or email that impersonate crypto apps. Always download apps from
          official app stores only.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={faqs} />
      </section>
    </div>
  );
}
