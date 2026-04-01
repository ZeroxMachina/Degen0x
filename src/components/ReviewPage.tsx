import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import StarRating from "./StarRating";
import AffiliateDisclosure from "./AffiliateDisclosure";
import FAQSection from "./FAQSection";
import CommunityReviews from "./CommunityReviews";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_MONTH, CURRENT_YEAR } from "@/lib/constants";

interface ReviewSection {
  id: string;
  title: string;
  content: string;
}

interface Props {
  product: Product;
  categoryName: string;
  categorySlug: string;
  lastUpdated?: string;
  overview: string;
  sections: ReviewSection[];
  fees: Record<string, string>;
  security: string[];
  features: string[];
  faqs: FAQ[];
  relatedReviews?: { name: string; slug: string }[];
  relatedGuides?: { title: string; href: string }[];
}

export default function ReviewPage({
  product,
  categoryName,
  categorySlug,
  lastUpdated,
  overview,
  sections,
  fees,
  security,
  features,
  faqs,
  relatedReviews = [],
  relatedGuides = [],
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: product.name,
      applicationCategory: categoryName,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: product.rating,
      bestRating: 5,
    },
    author: { "@type": "Organization", name: "degen0x" },
    datePublished: lastUpdated || `${CURRENT_YEAR}-03-01`,
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/${categorySlug}` },
          { label: "Reviews", href: `/${categorySlug}/reviews` },
          { label: product.name, href: `/${categorySlug}/reviews/${product.slug}` },
        ]}
      />

      <AffiliateDisclosure />

      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          {product.logo && (
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              width={56}
              height={56}
              className="rounded-xl flex-shrink-0 mt-1"
              style={{ width: 56, height: 56, objectFit: 'contain' }}
            />
          )}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
              {product.name} Review {CURRENT_YEAR}
            </h1>
            <p className="text-[var(--color-text-secondary)]">
              Last updated: {lastUpdated || `${CURRENT_MONTH} ${CURRENT_YEAR}`}
            </p>
            <div className="mt-2">
              <StarRating rating={product.rating} size="lg" />
            </div>
          </div>
        </div>
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="affiliate-cta px-6 py-3 rounded-lg text-white font-semibold whitespace-nowrap"
        >
          Visit {product.name}
        </a>
      </div>

      {/* Quick Summary */}
      <div className="glass p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Quick Summary</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="glass-pill px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            Best for: {product.bestFor}
          </span>
          {product.fees && (
            <span className="glass-pill px-3 py-1 text-xs font-medium text-[var(--color-success)]">
              Fees: {product.fees}
            </span>
          )}
        </div>
      </div>

      {/* TOC */}
      <div className="glass-subtle p-6 mb-8">
        <h2 className="text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wide">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#overview" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Overview</a></li>
          <li><a href="#pros-cons" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Pros & Cons</a></li>
          {sections.map((s) => (
            <li key={s.id}><a href={`#${s.id}`} className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">{s.title}</a></li>
          ))}
          <li><a href="#fees" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Fees</a></li>
          <li><a href="#security" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Security</a></li>
          <li><a href="#verdict" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Final Verdict</a></li>
          <li><a href="#faq" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">FAQ</a></li>
          <li><a href="#community-reviews" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)]">Community Reviews 🔥</a></li>
        </ul>
      </div>

      <div className="prose-crypto">
        <h2 id="overview">Overview</h2>
        <p>{overview}</p>

        <h2 id="pros-cons">Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
          <div className="glass p-6" style={{ borderColor: 'rgba(34, 197, 94, 0.2)', background: 'rgba(34, 197, 94, 0.04)' }}>
            <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Pros</h3>
            <ul className="space-y-2">
              {product.pros.map((pro, i) => (
                <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--color-success)] mt-0.5 flex-shrink-0">&#10003;</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass p-6" style={{ borderColor: 'rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.04)' }}>
            <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
            <ul className="space-y-2">
              {product.cons.map((con, i) => (
                <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--color-danger)] mt-0.5 flex-shrink-0">&#10007;</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}

        <h2 id="fees">Fees</h2>
        <div className="overflow-x-auto glass my-6 not-prose">
          <table className="w-full">
            <thead>
              <tr className="glass-table-header">
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Fee Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(fees).map(([type, amount]) => (
                <tr key={type} className="border-t border-[var(--glass-border)] glass-table-row">
                  <td className="px-6 py-3 text-sm text-[var(--color-text-secondary)]">{type}</td>
                  <td className="px-6 py-3 text-sm text-[var(--color-text)]">{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="security">Security</h2>
        <ul>
          {security.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        {features.length > 0 && (
          <>
            <h2>Key Features</h2>
            <ul>
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        <h2 id="verdict">Final Verdict</h2>
        <p>
          With a rating of {product.rating}/5, {product.name} is best suited for {product.bestFor.toLowerCase()}. {product.description}
        </p>

        <div className="not-prose my-8 text-center">
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="affiliate-cta inline-block px-8 py-3 rounded-lg text-white font-semibold text-lg"
          >
            Get Started with {product.name}
          </a>
        </div>
      </div>

      <FAQSection faqs={faqs} />

      {/* Community Reviews — Wallet-Gated */}
      <div className="mt-12">
        <CommunityReviews productSlug={product.slug} productName={product.name} />
      </div>

      {(relatedReviews.length > 0 || relatedGuides.length > 0) && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedReviews.map((r) => (
              <Link
                key={r.slug}
                href={`/${categorySlug}/reviews/${r.slug}`}
                className="glass-subtle p-4 glass-hover"
              >
                <span className="text-xs text-[var(--color-primary)]">Review</span>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{r.name} Review</h3>
              </Link>
            ))}
            {relatedGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="glass-subtle p-4 glass-hover"
              >
                <span className="text-xs text-[var(--color-secondary)]">Guide</span>
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{g.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
