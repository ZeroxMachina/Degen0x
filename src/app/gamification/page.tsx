import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import GamificationSystem from "@/components/GamificationSystem";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Gamification & Rewards | degen0x — XP, Badges, Leaderboard",
  description:
    "Earn XP, unlock rare badges, maintain daily streaks, and climb the global leaderboard. Level up your degen status on degen0x.",
  openGraph: {
    title: "Gamification & Rewards | degen0x",
    description: "Earn XP, unlock badges, and climb the leaderboard.",
    images: [{ url: 'https://degen0x.com/og-gamification.png', width: 1200, height: 630, alt: 'Gamification and Rewards on degen0x' }],
  },

  alternates: { canonical: "/gamification" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Gamification', },
  ],
};

export default function GamificationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="gamification"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Gamification" },
        ]}
      />
      <GamificationSystem />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Gamification & Rewards | degen0x \u2014 XP, Badges, Leaderboard", "description": "Earn XP, unlock rare badges, maintain daily streaks, and climb the global leaderboard. Level up your degen status on degen0x.", "url": "https://degen0x.com/gamification", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
