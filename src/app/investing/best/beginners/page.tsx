import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { TRADING_PLATFORMS, BEGINNER_FAQS } from "@/data/investing";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Platforms for Beginners ${CURRENT_YEAR} - Start Investing`,
  description: `The best crypto platforms for beginners in ${CURRENT_YEAR}. Easy-to-use exchanges, educational resources, and step-by-step guidance for new crypto investors.`,
  alternates: { canonical: "/investing/best/beginners" },
};

const beginnerPicks: Product[] = [
  { ...TRADING_PLATFORMS[0], category: "beginners" },
  { ...TRADING_PLATFORMS[2], category: "beginners" },
  {
    name: "Crypto.com",
    slug: "crypto-com",
    rating: 4.3,
    description: "An all-in-one crypto platform with a simple mobile app, crypto debit card, learn-to-earn rewards, and competitive fees for new investors.",
    pros: ["Simple mobile interface", "Crypto debit card", "Learn & earn program", "Wide asset selection"],
    cons: ["Complex fee structure", "CRO staking requirements for best rates", "App performance can be slow"],
    bestFor: "All-in-one beginner platform",
    affiliateUrl: "https://degen0x.com/go/crypto-com",
    category: "beginners",
  },
  {
    name: "Gemini",
    slug: "gemini",
    rating: 4.1,
    description: "A security-focused, regulated US exchange with a clean interface, educational resources, and a strong compliance track record.",
    pros: ["Strong regulatory compliance", "Clean interface", "SOC 2 certified", "Insurance on hot wallet"],
    cons: ["Higher fees than competitors", "Smaller asset selection", "Limited advanced features"],
    bestFor: "Security-conscious beginners",
    affiliateUrl: "https://degen0x.com/go/gemini",
    category: "beginners",
  },
];

const toc = [
  { id: "top-picks", title: "Best Platforms for Beginners", level: 2 },
  { id: "getting-started", title: "Getting Started Guide", level: 2 },
  { id: "what-to-buy", title: "What to Buy First", level: 2 },
  { id: "mistakes", title: "Common Beginner Mistakes", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestForBeginnersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best for Beginners", href: "/investing/best/beginners" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Platforms for Beginners in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Starting your crypto investing journey can feel overwhelming. We have identified the
          platforms that combine the simplest user experience with strong security, educational
          resources, and low minimums to help new investors get started with confidence.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Platforms for Beginners</h2>
        <div className="space-y-4">
          {beginnerPicks.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="getting-started" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Getting Started Guide</h2>
        <div className="space-y-3">
          {[
            { step: "1", title: "Choose a Platform", desc: "Sign up for a regulated exchange like Coinbase. Complete identity verification, which typically takes a few minutes." },
            { step: "2", title: "Fund Your Account", desc: "Connect your bank account and deposit funds. Bank transfers have the lowest fees. Start with an amount you are comfortable losing." },
            { step: "3", title: "Make Your First Purchase", desc: "Buy Bitcoin or Ethereum as your first crypto. These are the most established and lowest-risk options for beginners." },
            { step: "4", title: "Secure Your Account", desc: "Enable two-factor authentication, set a strong password, and learn about wallet options for storing your crypto safely." },
            { step: "5", title: "Learn and Grow", desc: "Take advantage of educational resources. Consider dollar-cost averaging to build your position over time rather than investing everything at once." },
          ].map((item) => (
            <div key={item.step} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            </div>

        <AuthorAttribution
          author="SatoshiGhost"
          role="Lead Researcher"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="investing"
        />

          ))}
        </div>
      </section>

      <section id="what-to-buy" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What to Buy First</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          For beginners, we recommend starting with Bitcoin and Ethereum. Bitcoin is the most
          established cryptocurrency with a 15+ year track record, institutional adoption through
          ETFs, and the strongest brand recognition. Ethereum is the leading smart contract platform
          powering most of the DeFi and NFT ecosystems. Together, they form a solid foundation
          for any crypto portfolio.
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
          Avoid the temptation to chase cheap coins or trending meme tokens as your first
          investment. Many beginners lose money by buying hype-driven tokens without understanding
          the risks. Build a foundation with established projects first, then explore altcoins
          with a small allocation once you understand market dynamics.
        </p>
      </section>

      <section id="mistakes" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Common Beginner Mistakes</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The most common mistake is investing more than you can afford to lose. Crypto is
          volatile and even established assets can drop 50% or more during bear markets. Other
          frequent errors include panic selling during dips, falling for scams that promise
          guaranteed returns, neglecting security practices like two-factor authentication,
          and over-trading based on short-term price movements.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Another critical mistake is not understanding taxes. Every time you sell or trade crypto,
          it is a taxable event in most countries. Keep records of all your transactions from day
          one to avoid headaches during tax season. Using crypto tax software like Koinly can
          automate this process.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={BEGINNER_FAQS} />
      </section>
    </div>
  );
}
