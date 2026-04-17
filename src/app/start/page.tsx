import BeginnerOnboardingFlow from '@/components/BeginnerOnboardingFlow';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata = {
  title: 'Get Started — degen0x | Learn Crypto, Earn XP',
  description: 'Join degen0x and start your crypto journey. Learn at your pace, earn XP, explore 100+ dApps, and climb the leaderboard. Free forever.',
  openGraph: {
    title: 'Get Started with degen0x — Learn Crypto, Earn XP',
    description: 'Join the degen0x community. Learn at your pace, earn XP, explore DeFi dApps, and climb the leaderboard. Free forever.',
    type: 'website',
    url: 'https://degen0x.com/start',
    images: [
      {
        url: 'https://degen0x.com/api/og?title=Get+Started&category=Onboarding&type=page',
        width: 1200,
        height: 630,
        alt: 'Get Started with degen0x',
      },
    ],
  },
  alternates: { canonical: "/start" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Start', },
  ],
};

export default function StartPage() {
  return (
    <>
      <ArticleSchema
        headline="Get Started — degen0x | Learn Crypto, Earn XP"
        description="Join degen0x and start your crypto journey. Learn at your pace, earn XP, explore 100+ dApps, and climb the leaderboard. Free forever."
        url="/start"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/start" />
        <ReadingTime />
      </div>
<AuthoritySources url="/start" />
      <BeginnerOnboardingFlow />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Get Started — degen0x | Learn Crypto, Earn XP", "description": "Join degen0x and start your crypto journey. Learn at your pace, earn XP, explore 100+ dApps, and climb the leaderboard. Free forever.", "url": "https://degen0x.com/start", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/about" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>About</a>
  <a href="/achievements" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Achievements</a>
  <a href="/airdrops" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Airdrops</a>
  <a href="/alerts" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alerts</a>
  <a href="/ar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ar</a>
  <a href="/badges" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Badges</a>
  <a href="/blog" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blog</a>
  <a href="/community" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Community</a>
</nav>
      </>
  );
}
