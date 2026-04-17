import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import DailyChallenge from '@/components/DailyChallenge';
import Breadcrumb from '@/components/Breadcrumb';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Daily Crypto Challenge — Earn XP Every Day | degen0x',
  description:
    'One crypto question every day. Answer correctly to earn XP, build your streak, and unlock badges. The fastest way to level up your crypto knowledge.',
  openGraph: {
    title: 'Daily Crypto Challenge | degen0x',
    description:
      'Answer today\'s crypto question and earn XP. Build a daily streak for bonus rewards. Free, no signup required.',
    images: [{ url: 'https://degen0x.com/api/og?title=Daily+Crypto+Challenge&category=Gamification&type=tool', width: 1200, height: 630, alt: 'Daily Crypto Challenge on degen0x' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Crypto Challenge — Earn XP Every Day | degen0x',
    description:
      'One crypto question every day. Answer correctly to earn XP, build your streak, and unlock badges.',
    images: ['https://degen0x.com/api/og?title=Daily+Crypto+Challenge&category=Gamification&type=tool'],
  },

  alternates: { canonical: "/daily-challenge" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Daily Challenge', },
  ],
};

export default function DailyChallengePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <ArticleSchema
        headline="Daily Crypto Challenge — Earn XP Every Day | degen0x"
        description="One crypto question every day. Answer correctly to earn XP, build your streak, and unlock badges. The fastest way to level up your crypto knowledge."
        url="/daily-challenge"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/daily-challenge" />
        <ReadingTime />
      </div>
<AuthoritySources url="/daily-challenge" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="daily-challenge"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Daily Challenge" },
        ]}
      />
      <DailyChallenge />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Daily Crypto Challenge \u2014 Earn XP Every Day | degen0x", "description": "One crypto question every day. Answer correctly to earn XP, build your streak, and unlock badges. The fastest way to level up your crypto knowledge.", "url": "https://degen0x.com/daily-challenge", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
  );
}
