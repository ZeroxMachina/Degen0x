import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import AdaptiveQuizEngine from '@/components/AdaptiveQuizEngine';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Adaptive Crypto Quiz — Earn XP | degen0x',
  description: 'Test your crypto knowledge with our adaptive quiz engine. Questions adjust to your skill level — from novice to Chain God. Earn XP and unlock badges.',
  openGraph: {
    title: 'degen0x Adaptive Quiz Engine v3',
    description: 'Dynamic difficulty crypto quiz. Earn XP, climb the leaderboard.',
  },

  alternates: { canonical: "/quiz" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Quiz', },
  ],
};

export default function QuizPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', padding: '24px' }}>
      <ArticleSchema
        headline="Adaptive Crypto Quiz — Earn XP | degen0x"
        description="Test your crypto knowledge with our adaptive quiz engine. Questions adjust to your skill level — from novice to Chain God. Earn XP and unlock badges."
        url="/quiz"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/quiz" />
        <ReadingTime />
      </div>
<AuthoritySources url="/quiz" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="quiz"
      />      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <AdaptiveQuizEngine userXP={1500} maxQuestions={10} />
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Adaptive Crypto Quiz \u2014 Earn XP | degen0x", "description": "Test your crypto knowledge with our adaptive quiz engine. Questions adjust to your skill level \u2014 from novice to Chain God. Earn XP and unlock badges.", "url": "https://degen0x.com/quiz", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
          <a href="/achievements" style={{ color: "#fb923c", marginRight: "1rem" }}>Achievements</a>
        
          <a href="/notifications" style={{ color: "#fb923c", marginRight: "1rem" }}>Notifications</a>
        
          <a href="/signals" style={{ color: "#fb923c", marginRight: "1rem" }}>Signals</a>
        </nav>
    </main>
  );
}
