import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import TriviaLeaderboard from "@/components/TriviaLeaderboard";

export const metadata: Metadata = {
  title: "Crypto Trivia Leaderboard | Compete Globally — degen0x",
  description:
    "See who tops the crypto trivia leaderboard this week. Earn league ranks from Bronze to Diamond. Play daily, grow your streak, and climb the all-time rankings.",
  openGraph: {
    title: "Crypto Trivia Leaderboard — degen0x",
    description: "Bronze · Silver · Gold · Diamond. Where do you rank? Play today's quiz and find out.",
    type: "website",
  },

  alternates: { canonical: "/learn/trivia-leaderboard" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Trivia Leaderboard', },
  ],
};

export default function TriviaLeaderboardPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="learn"
      />      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <span>›</span>
        <Link href="/learn" className="hover:text-[var(--color-primary)]">Learn</Link>
        <span>›</span>
        <Link href="/learn/daily-trivia" className="hover:text-[var(--color-primary)]">Daily Trivia</Link>
        <span>›</span>
        <span className="text-[var(--color-text)]">Leaderboard</span>
      </nav>

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4"
             style={{ background: "#6366f120", color: "#818cf8" }}>
          🏆 Updated Live
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[var(--color-text)] mb-3">
          Crypto Trivia <span className="gradient-text">Leaderboard</span>
        </h1>
        <p className="text-[var(--color-text-secondary)] text-lg">
          The top degens competing in the daily crypto trivia challenge. Play every day to earn
          points, maintain your streak, and climb from Bronze to Diamond league.
        </p>
      </div>

      <TriviaLeaderboard />

      {/* CTA to play trivia */}
      <div className="mt-8 rounded-2xl border border-[var(--color-border)] p-6 text-center"
           style={{ background: "linear-gradient(135deg, #6366f110, #06b6d410)" }}>
        <div className="text-3xl mb-3">🧠</div>
        <h2 className="text-xl font-black text-[var(--color-text)] mb-2">
          Ready to Climb the Ranks?
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-4">
          Play today&apos;s 10-question quiz. New questions every day. Streak bonuses for consecutive days.
        </p>
        <Link href="/learn/daily-trivia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[var(--color-text)] font-bold"
              style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
          🎮 Play Today&apos;s Trivia
        </Link>
      </div>

      {/* Related links */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/learn/trivia"
              className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
              style={{ background: "var(--color-surface)" }}>
          <div className="text-2xl mb-2">🎯</div>
          <div className="font-bold text-sm text-[var(--color-text)]">Daily Trivia Quiz</div>
          <div className="text-xs text-[var(--color-text-secondary)] mt-1">10 questions · New every day</div>
        </Link>
        <Link href="/learn"
              className="rounded-xl border border-[var(--color-border)] p-4 hover:border-[var(--color-primary)] transition-colors"
              style={{ background: "var(--color-surface)" }}>
          <div className="text-2xl mb-2">📚</div>
          <div className="font-bold text-sm text-[var(--color-text)]">Learn Crypto</div>
          <div className="text-xs text-[var(--color-text-secondary)] mt-1">Guides, articles & tutorials</div>
        </Link>
        <Link href="/tools/degen-score"
              style={{ background: "var(--color-surface)" }}>
          <div className="text-2xl mb-2">🔥</div>
          <div className="font-bold text-sm text-[var(--color-text)]">Your Degen Score</div>
          <div className="text-xs text-[var(--color-text-secondary)] mt-1">Rate your crypto knowledge</div>
        </Link>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Trivia Leaderboard",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/trivia-leaderboard"
            })
          }}
        />
      </div>
    </main>
  );
}
