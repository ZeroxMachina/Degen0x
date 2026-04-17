import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { cryptoCards } from "@/data/crypto-cards";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthoritySources from '@/components/AuthoritySources';

import ArticleSchema from "@/components/ArticleSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Best Crypto Credit Cards & Debit Cards of April 2026`,
  description: `Compare the best crypto cards of ${CURRENT_YEAR}. Expert reviews of crypto credit cards, debit cards, and rewards cards. Earn Bitcoin, ETH, and cashback on every purchase.`,
  alternates: { canonical: "/crypto-cards" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const bestOfLinks = [
  { title: "Best Crypto Cards Overall", href: "/crypto-cards/best", description: "Best crypto debit and credit cards 2026. Compare features, fees, rewards, cashback programs. Spend crypto instantly or earn rewards on purchases." },
  { title: "Best Cashback Cards", href: "/crypto-cards/best/cashback", description: "Cards with the highest crypto cashback rates" },
  { title: "Best Rewards Cards", href: "/crypto-cards/best/rewards", description: "Earn the most crypto rewards on spending" },
  { title: "Best Free Cards (No Annual Fee)", href: "/crypto-cards/best/no-annual-fee", description: "Top crypto cards with zero annual fees" },
  { title: "Best Staking Rewards Cards", href: "/crypto-cards/best/staking-rewards", description: "Cards that reward you for staking tokens" },
  { title: "Best for Travel", href: "/crypto-cards/best/travel", description: "No foreign fees and airport lounge access" },
  { title: "Best for Beginners", href: "/crypto-cards/best/beginners", description: "Simple crypto cards for newcomers" },
  { title: "Best for High Spenders", href: "/crypto-cards/best/high-spenders", description: "Premium cards with elite benefits" },
  { title: "Best Business Cards", href: "/crypto-cards/best/business", description: "Crypto cards for businesses and freelancers" },
  { title: "Best Debit Cards", href: "/crypto-cards/best/debit", description: "Top crypto-funded debit cards" },
  { title: "Best Prepaid Cards", href: "/crypto-cards/best/prepaid", description: "Load and spend crypto with prepaid cards" },
];

const learnLinks = [
  { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
  { title: "Crypto Card Fees Explained", href: "/crypto-cards/learn/crypto-card-fees" },
  { title: "Credit vs Debit vs Prepaid Crypto Cards", href: "/crypto-cards/learn/credit-vs-debit-vs-prepaid" },
  { title: "Tax Implications of Crypto Card Rewards", href: "/crypto-cards/learn/tax-implications" },
  { title: "How to Choose the Right Crypto Card", href: "/crypto-cards/learn/how-to-choose" },
];

const faqs = [
  {
    question: "What is a crypto card?",
    answer: "A crypto card is a payment card (credit, debit, or prepaid) that connects to cryptocurrency. Some let you spend crypto directly by converting it to fiat at the point of sale. Others function like traditional cards but earn crypto rewards instead of cash back or airline miles.",
  },
  {
    question: "Are crypto card rewards taxable?",
    answer: "In most jurisdictions, crypto rewards earned from spending are treated similarly to credit card cash back and are generally not taxable at the time of receipt. However, selling or trading those rewards later may trigger capital gains tax. Consult a tax professional for advice specific to your situation.",
  },
  {
    question: "What is the difference between a crypto credit card and a crypto debit card?",
    answer: "A crypto credit card extends you a line of credit just like a traditional credit card, and you pay the bill later. It can help build your credit score. A crypto debit card draws funds from your existing crypto or fiat balance at the time of purchase, similar to a bank debit card.",
  },
  {
    question: "Do crypto cards charge foreign transaction fees?",
    answer: "Many crypto cards advertise zero foreign transaction fees, making them appealing for international travel. However, you should still check the exchange rate spread applied when converting crypto to a foreign currency, as that spread can function as a hidden fee.",
  },
  {
    question: "Can I use a crypto card at a regular store?",
    answer: "Yes. Most crypto cards run on the Visa or Mastercard network, so they are accepted at millions of merchants worldwide, both online and in physical stores. The crypto-to-fiat conversion happens behind the scenes at the point of sale.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Cards', },
  ],
};

export default function CryptoCardsPage() {
  const topCards = [...cryptoCards].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Crypto Cards of ${CURRENT_YEAR}`,
    description: `Compare the best crypto credit cards, debit cards, and rewards cards of ${CURRENT_YEAR}.`,
    url: "https://degen0x.com/crypto-cards",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <ArticleSchema
        headline="Best Crypto Cards Overall"
        description="Best crypto debit and credit cards 2026. Compare features, fees, rewards, cashback programs. Spend crypto instantly or earn rewards on purchases."
        url="/crypto-cards"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto Cards", href: "/crypto-cards" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Crypto Cards Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for comparing crypto credit cards, debit cards, and
            rewards cards. Find expert reviews, cashback comparisons, and guides to help
            you earn crypto on every purchase. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Featured Card Picks */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top-Rated Crypto Cards</h2>
            <Link href="/crypto-cards/best"
              className="text-[var(--color-primary)] hover:underline text-sm font-medium"
            >
              View all rankings &rarr;
            </Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">
            {topCards.map((card, index) => (
              <ProductCard
                key={card.slug}
                product={card}
                rank={index + 1}
                categorySlug="crypto-cards"
              />
            ))}
          </div>
        </section>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best Crypto Card For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link href="/crypto-cards/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Crypto Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link href="/crypto-cards/best"
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  Read guide &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review Crypto Cards</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Our crypto card reviews are based on hands-on testing and thorough research. Each card is
            evaluated across multiple categories including reward rates, fees, availability, card perks,
            supported cryptocurrencies, and issuer reliability. We apply for and use every card we
            review, tracking real-world rewards and spending experiences over weeks of testing.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our editorial team includes experienced crypto users and personal finance experts who
            understand both traditional card benefits and the nuances of crypto rewards. We maintain
            full transparency: when you click an affiliate link and sign up, we may receive a
            commission at no extra cost to you. This helps us keep our content free and current.
          </p>
        </section>

        <FAQSection faqs={faqs} />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Cards Overall", "description": "Best crypto debit and credit cards 2026. Compare features, fees, rewards, cashback programs. Spend crypto instantly or earn rewards on purchases.", "url": "https://degen0x.com/crypto-cards", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-cards" />
        <ReadingTime />
      </div>
<AuthoritySources url="/crypto-cards" />
    </>
  );
}
