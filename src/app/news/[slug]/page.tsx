import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { newsArticles, getArticleBySlug, getLatestArticles } from "@/data/news";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${SITE_URL}/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
    },
  };
}

const CATEGORY_COLORS: Record<string, string> = {
  market: "#22c55e",
  defi: "#8b5cf6",
  exchanges: "#6366f1",
  regulation: "#ef4444",
  nfts: "#d946ef",
  technology: "#06b6d4",
  wallets: "#f59e0b",
};

const CATEGORY_LABELS: Record<string, string> = {
  market: "Market News",
  defi: "DeFi",
  exchanges: "Exchanges",
  regulation: "Regulation",
  nfts: "NFTs & Web3",
  technology: "Technology",
  wallets: "Wallets & Security",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Simple markdown-to-HTML converter for article content
function renderContent(markdown: string): string {
  return markdown
    .trim()
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";

      // H1
      if (trimmed.startsWith("# ")) {
        return `<h1 class="text-3xl font-bold text-[var(--color-text)] mt-8 mb-4">${trimmed.slice(2)}</h1>`;
      }
      // H2
      if (trimmed.startsWith("## ")) {
        return `<h2 class="text-2xl font-bold text-[var(--color-text)] mt-8 mb-3">${trimmed.slice(3)}</h2>`;
      }
      // H3
      if (trimmed.startsWith("### ")) {
        return `<h3 class="text-xl font-semibold text-[var(--color-text)] mt-6 mb-2">${trimmed.slice(4)}</h3>`;
      }
      // Bullet list
      if (trimmed.split("\n").every((l) => l.startsWith("- "))) {
        const items = trimmed
          .split("\n")
          .map((l) => `<li class="mb-1">${parseLine(l.slice(2))}</li>`)
          .join("");
        return `<ul class="list-disc list-inside text-[var(--color-text-secondary)] space-y-1 mb-4 ml-4">${items}</ul>`;
      }
      // Numbered list
      if (trimmed.split("\n").every((l) => /^\d+\./.test(l))) {
        const items = trimmed
          .split("\n")
          .map((l) => `<li class="mb-1">${parseLine(l.replace(/^\d+\.\s*/, ""))}</li>`)
          .join("");
        return `<ol class="list-decimal list-inside text-[var(--color-text-secondary)] space-y-1 mb-4 ml-4">${items}</ol>`;
      }
      // Regular paragraph
      return `<p class="text-[var(--color-text-secondary)] leading-relaxed mb-4">${parseLine(trimmed)}</p>`;
    })
    .join("\n");
}

function parseLine(text: string): string {
  // Bold **text**
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[var(--color-text)]">$1</strong>')
    .replace(/_(.+?)_/g, "<em>$1</em>");
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getLatestArticles(4).filter((a) => a.slug !== article.slug).slice(0, 3);
  const categoryColor = CATEGORY_COLORS[article.category];
  const categoryLabel = CATEGORY_LABELS[article.category];
  const htmlContent = renderContent(article.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "Organization", name: SITE_NAME },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    url: `${SITE_URL}/news/${article.slug}`,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto News", href: "/news" },
            { label: article.title.slice(0, 40) + "…", href: `/news/${article.slug}` },
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Article Main */}
          <article className="lg:col-span-2">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-text)]"
                  style={{ backgroundColor: categoryColor }}
                >
                  {categoryLabel}
                </span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {article.readTime} min read
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight mb-4">
                {article.title}
              </h1>

              <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-4 py-4 border-t border-b border-[var(--color-border)]">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg font-bold text-[var(--color-primary)]">
                  {article.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-text)] text-sm">{article.author}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{article.authorTitle}</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Published {formatDate(article.publishedAt)}
                  </div>
                  {article.updatedAt !== article.publishedAt && (
                    <div className="text-xs text-[var(--color-text-secondary)]">
                      Updated {formatDate(article.updatedAt)}
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* Article Body */}
            <div
              className="prose-degen0x"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border)]">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill px-3 py-1.5 rounded-full text-xs font-medium text-[var(--color-text-secondary)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-8 glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl font-bold text-[var(--color-primary)] shrink-0">
                  {article.author[0]}
                </div>
                <div>
                  <div className="font-bold text-[var(--color-text)] mb-0.5">{article.author}</div>
                  <div className="text-sm text-[var(--color-primary)] mb-2">{article.authorTitle}</div>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    A member of the {SITE_NAME} editorial team specializing in crypto market analysis,
                    on-chain data research, and institutional developments. All opinions are the author's
                    own and do not constitute financial advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-lg border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
              <strong className="text-[var(--color-text)]">Disclaimer:</strong> This article is for
              informational purposes only and does not constitute financial, investment, or legal advice.
              Cryptocurrency investments carry significant risk. Always do your own research before
              making investment decisions.
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="glass rounded-xl p-5">
              <h3 className="font-bold text-[var(--color-text)] mb-4 text-sm uppercase tracking-wide">
                Latest Stories
              </h3>
              <div className="space-y-4">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/news/${a.slug}`}
                    className="block group"
                  >
                    <span
                      className="text-[10px] font-semibold uppercase tracking-wide"
                      style={{ color: CATEGORY_COLORS[a.category] }}
                    >
                      {CATEGORY_LABELS[a.category]}
                    </span>
                    <h4 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug mt-0.5">
                      {a.title}
                    </h4>
                    <span className="text-xs text-[var(--color-text-secondary)]">
                      {formatDate(a.publishedAt)}
                    </span>
                  </Link>
                ))}
              </div>
              <Link
                href="/news"
                className="block mt-4 text-center text-sm text-[var(--color-primary)] hover:underline"
              >
                View all news →
              </Link>
            </div>

            {/* Quick Tools */}
            <div className="glass rounded-xl p-5">
              <h3 className="font-bold text-[var(--color-text)] mb-4 text-sm uppercase tracking-wide">
                Useful Tools
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Crypto Converter", href: "/investing/tools/crypto-converter" },
                  { label: "Fear & Greed Index", href: "/#fear-greed" },
                  { label: "Gas Tracker", href: "/tools/gas-tracker" },
                  { label: "DeFi Yield Compare", href: "/defi-lending/best/yield-aggregators" },
                  { label: "Tax Calculator", href: "/taxes/calculators/tax-calculator" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="flex items-center justify-between py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors group"
                  >
                    <span>{tool.label}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="rounded-xl p-5 border border-[var(--color-primary)] border-opacity-30"
              style={{ background: "linear-gradient(135deg, var(--glass-bg) 0%, rgba(99,102,241,0.05) 100%)" }}
            >
              <h3 className="font-bold text-[var(--color-text)] mb-2">📬 Daily Brief</h3>
              <p className="text-xs text-[var(--color-text-secondary)] mb-3">
                Top 5 crypto stories every morning. Free.
              </p>
              <Link
                href="/#newsletter"
                className="affiliate-cta block text-center py-2 px-4 rounded-lg text-white text-sm font-semibold"
              >
                Subscribe →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
