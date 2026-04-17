import { Metadata } from "next";
import DailyTrivia from "@/components/DailyTrivia";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Daily Crypto Trivia Quiz | Test Your Knowledge — degen0x",
  description:
    "Play today's daily crypto trivia quiz. 10 questions on DeFi, Bitcoin, Ethereum, NFTs, trading, and blockchain. New quiz every day. Track your streak!",
  openGraph: {
    title: "Daily Crypto Trivia — degen0x",
    description: "10 crypto questions. 20 seconds each. New quiz daily. How much do you really know?",
    type: "website",
  },

  alternates: { canonical: "/learn/daily-trivia" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Daily Trivia', },
  ],
};

export default function DailyTriviaPage() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <span>›</span>
        <Link href="/learn" className="hover:text-[var(--color-primary)]">Learn</Link>
        <span>›</span>
        <span className="text-[var(--color-text)]">Daily Trivia</span>
      </nav>

      {/* Page Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-[var(--color-primary)] font-semibold mb-4">
          🗓️ {today}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          Daily Crypto Trivia
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">
          10 hand-crafted questions on Bitcoin, DeFi, NFTs, trading, and blockchain history.
          New quiz every day — build your streak!
        </p>
      </div>

      {/* Game Component */}
      <DailyTrivia />

      {/* Info section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 text-center">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="font-bold text-[var(--color-text)] mb-2">Score System</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Easy questions earn 100 pts, Medium 200 pts, Hard 300 pts. Max score: 1,900 pts. Earn grade S for 90%+.
          </p>
        </div>
        <div className="glass p-6 text-center">
          <div className="text-3xl mb-3">🔥</div>
          <h3 className="font-bold text-[var(--color-text)] mb-2">Daily Streaks</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Play every day to build your streak. Your streak is saved locally. Don't break the chain!
          </p>
        </div>
        <div className="glass p-6 text-center">
          <div className="text-3xl mb-3">📤</div>
          <h3 className="font-bold text-[var(--color-text)] mb-2">Share Results</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Share your daily score card to Twitter/X or Telegram. Challenge your friends to beat your streak.
          </p>
        </div>
      </section>

      {/* Related tools */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Keep Learning</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: "Crypto Glossary", href: "/learn/glossary", icon: "📖", desc: "223 crypto terms explained" },
            { title: "Crypto for Beginners", href: "/learn/crypto-for-beginners", icon: "🎓", desc: "Complete beginner guide" },
            { title: "What Is DeFi?", href: "/learn/what-is-defi", icon: "💰", desc: "DeFi explained simply" },
            { title: "NFT Glossary", href: "/nfts/learn/nft-glossary", icon: "🖼️", desc: "Every NFT term decoded" },
            { title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", icon: "🧾", desc: "Tax rules you need to know" },
            { title: "Fear & Greed Index", href: "/tools/fear-greed-timeline", icon: "😱", desc: "Market sentiment tracker" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="glass p-4 card-hover flex items-start gap-3">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-semibold text-sm text-[var(--color-text)]">{item.title}</div>
                <div className="text-xs text-[var(--color-text-secondary)]">{item.desc}</div>
              </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="learn"
        />

            </Link>
          ))}
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Daily Trivia",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/daily-trivia"
            })
          }}
        />
      </div>
      </section>
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
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/learn/crypto-glossary" style={{ color: "#fb923c", marginRight: "1rem" }}>Crypto Glossary</a>
        </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Daily Crypto Trivia Quiz | Test Your Knowledge \u2014 degen0x", "description": "Play today", "url": "https://degen0x.com/learn/daily-trivia", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="learn" currentSlug="/learn/daily-trivia" />
</main>
  );
}
