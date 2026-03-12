/**
 * Blog Index Page — /blog
 * ─────────────────────────────────────────────────────────────────
 * Displays all blog posts with featured section, categories, and search.
 * Sprint 11 — Content Agent + Frontend Dev
 */
export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getFeaturedPosts, getCategoryMeta, type BlogCategory } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog — Crypto News, Analysis & Guides | ${SITE_NAME}`,
  description:
    "Stay ahead with degen0x blog. Market analysis, DeFi updates, regulation news, and expert guides for crypto investors.",
  openGraph: {
    title: `Blog — Crypto News & Analysis | ${SITE_NAME}`,
    description: "Market analysis, DeFi updates, regulation news, and expert guides.",
    url: `${SITE_URL}/blog`,
    images: [{ url: `${SITE_URL}/api/og?title=Blog+-+Crypto+News+%26+Analysis&category=Blog&type=page` }],
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  const categories: BlogCategory[] = [
    "market-analysis",
    "defi-updates",
    "regulation",
    "guides",
    "project-reviews",
    "opinion",
    "news",
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d1117" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Blog
          </h1>
          <p className="text-lg" style={{ color: "#8b949e" }}>
            Market analysis, DeFi updates, regulation news, and expert guides for
            crypto investors.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => {
            const meta = getCategoryMeta(cat);
            return (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-semibold border cursor-default"
                style={{
                  backgroundColor: `${meta.color}10`,
                  borderColor: `${meta.color}40`,
                  color: meta.color,
                }}
              >
                {meta.icon} {meta.label}
              </span>
            );
          })}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xl font-bold mb-6" style={{ color: "#e6edf3" }}>
              Featured
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => {
                const catMeta = getCategoryMeta(post.category);
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block rounded-xl border p-6 transition-all duration-200"
                    style={{
                      backgroundColor: "#161b22",
                      borderColor: "#30363d",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded"
                        style={{
                          backgroundColor: `${catMeta.color}15`,
                          color: catMeta.color,
                        }}
                      >
                        {catMeta.icon} {catMeta.label}
                      </span>
                      <span className="text-xs" style={{ color: "#8b949e" }}>
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold mb-2 leading-tight"
                      style={{ color: "#e6edf3" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "#8b949e" }}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium" style={{ color: "#8b949e" }}>
                        By {post.author.name}
                      </span>
                      <span style={{ color: "#30363d" }}>·</span>
                      <span className="text-xs" style={{ color: "#8b949e" }}>
                        {post.readingTime ?? 5} min read
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* All Posts */}
        <h2 className="text-xl font-bold mb-6" style={{ color: "#e6edf3" }}>
          All Posts
        </h2>
        <div className="space-y-4">
          {allPosts.map((post) => {
            const catMeta = getCategoryMeta(post.category);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-start gap-5 rounded-lg border p-5 transition-all duration-200"
                style={{
                  backgroundColor: "#161b22",
                  borderColor: "#30363d",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: `${catMeta.color}15`,
                        color: catMeta.color,
                      }}
                    >
                      {catMeta.label}
                    </span>
                    <span className="text-xs" style={{ color: "#8b949e" }}>
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-bold mb-1 leading-tight"
                    style={{ color: "#e6edf3" }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: "#8b949e" }}>
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-xs" style={{ color: "#8b949e" }}>
                    {post.readingTime ?? 5} min
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
