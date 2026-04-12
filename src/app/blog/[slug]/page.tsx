/**
 * Individual Blog Post Page — /blog/[slug]
 * ─────────────────────────────────────────────────────────────────
 * Renders individual blog posts with structured data, social sharing,
 * related articles, and reading time.
 * Sprint 11 — Content Agent + SEO Specialist
 */
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  getCategoryMeta,
} from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | ${SITE_NAME} Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}&category=Blog&type=learn`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Renders markdown-like content to JSX.
 * Handles headings (##), paragraphs, and bold text.
 */
function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) {
        elements.push(
          <p
            key={`p-${elements.length}`}
            className="text-base leading-relaxed mb-4"
            style={{ color: "#c9d1d9" }}
          >
            {text}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      elements.push(
        <h2
          key={`h2-${elements.length}`}
          className="text-2xl font-bold mt-8 mb-4"
          style={{ color: "#e6edf3" }}
        >
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushParagraph();
      elements.push(
        <h3
          key={`h3-${elements.length}`}
          className="text-xl font-bold mt-6 mb-3"
          style={{ color: "#e6edf3" }}
        >
          {trimmed.slice(4)}
        </h3>
      );
    } else if (trimmed === "") {
      flushParagraph();
    } else {
      currentParagraph.push(trimmed);
    }
  }
  flushParagraph();

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const catMeta = getCategoryMeta(post.category);

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "degen0x",
      url: "https://degen0x.com",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}&category=Blog&type=learn`,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d1117" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" style={{ color: "#8b949e" }}>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#e6edf3" }}>{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{
                backgroundColor: `${catMeta.color}10`,
                borderColor: `${catMeta.color}40`,
                color: catMeta.color,
              }}
            >
              {catMeta.icon} {catMeta.label}
            </span>
            <span className="text-sm" style={{ color: "#8b949e" }}>
              {formatDate(post.publishedAt)}
            </span>
            <span style={{ color: "#30363d" }}>·</span>
            <span className="text-sm" style={{ color: "#8b949e" }}>
              {post.readingTime} min read
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
            style={{ color: "#e6edf3" }}
          >
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "#8b949e" }}>
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6 pt-6 border-t" style={{ borderColor: "#30363d" }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                backgroundColor: `${catMeta.color}20`,
                color: catMeta.color,
              }}
            >
              {post.author.name.charAt(0)}
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: "#e6edf3" }}>
                {post.author.name}
              </div>
              <div className="text-xs" style={{ color: "#8b949e" }}>
                {post.author.role}
              </div>
            </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="blog"
        />

          </div>
        </header>

        {/* Content */}
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t" style={{ borderColor: "#30363d" }}>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                backgroundColor: "#161b22",
                borderColor: "#30363d",
                color: "#8b949e",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl font-bold mb-6" style={{ color: "#e6edf3" }}>
              Related Articles
            </h2>
            <div className="grid gap-4">
              {related.map((r) => {
                const rCatMeta = getCategoryMeta(r.category);
                return (
                  <Link href={`/blog/${r.slug}`}
                    key={r.slug}
                    className="block rounded-lg border p-5 transition-all"
                    style={{
                      backgroundColor: "#161b22",
                      borderColor: "#30363d",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: `${rCatMeta.color}15`,
                          color: rCatMeta.color,
                        }}
                      >
                        {rCatMeta.label}
                      </span>
                      <span className="text-xs" style={{ color: "#8b949e" }}>
                        {formatDate(r.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-bold" style={{ color: "#e6edf3" }}>
                      {r.title}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/uniswap-v4-hooks-amm-innovation-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Uniswap V4 Hooks Amm Innovation Guide 2026</a></li>
            <li><a href="/learn/what-is-a-crypto-airdrop" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>What Is A Crypto Airdrop</a></li>
            <li><a href="/learn/what-is-liquid-staking" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>What Is Liquid Staking</a></li>
            <li><a href="/learn/wrapped-tokens-explained" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Wrapped Tokens Explained</a></li>
          </ul>
        </nav>
      </article>
    </div>
  );
}
