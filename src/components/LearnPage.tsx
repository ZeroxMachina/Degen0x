import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import TableOfContents from "./TableOfContents";
import FAQSection from "./FAQSection";
import { TOCItem, FAQ } from "@/lib/types";
import { CURRENT_MONTH, CURRENT_YEAR } from "@/lib/constants";

interface Props {
  title: string;
  categoryName: string;
  categorySlug: string;
  readTime: string;
  lastUpdated?: string;
  intro: string;
  toc: TOCItem[];
  children: React.ReactNode;
  faqs?: FAQ[];
  relatedArticles?: { title: string; href: string; category: string }[];
}

export default function LearnPageLayout({
  title,
  categoryName,
  categorySlug,
  readTime,
  lastUpdated,
  intro,
  toc,
  children,
  faqs = [],
  relatedArticles = [],
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: `${CURRENT_YEAR}-03-01`,
    dateModified: lastUpdated || `${CURRENT_YEAR}-03-01`,
    author: { "@type": "Organization", name: "CryptoDegen" },
    publisher: { "@type": "Organization", name: "CryptoDegen" },
  };

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/${categorySlug}` },
          { label: "Learn", href: `/${categorySlug}/learn` },
          { label: title, href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">{title}</h1>
      <div className="flex items-center gap-4 text-sm text-[var(--color-text-secondary)] mb-8">
        <span>Updated: {lastUpdated || `${CURRENT_MONTH} ${CURRENT_YEAR}`}</span>
        <span>|</span>
        <span>{readTime} read</span>
      </div>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">{intro}</p>

      <TableOfContents items={toc} />

      <div className="prose-crypto">{children}</div>

      {faqs.length > 0 && <FAQSection faqs={faqs} />}

      {relatedArticles.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="glass-subtle p-4 glass-hover"
              >
                <span className="text-xs text-[var(--color-primary)]">{article.category}</span>
                <h3 className="text-sm font-semibold text-[var(--color-text)] mt-1">{article.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
