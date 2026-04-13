import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import DailyStreakSystem from "@/components/DailyStreakSystem";

export const metadata: Metadata = {
  title: "Daily Streak — degen0x | Earn XP Every Day",
  description: "Check in daily to maintain your streak and earn XP multipliers. 7-day → 1.0×, 30-day → 1.5×, 100-day → 2.0× XP. Streaks up to 3× for 365-day legends.",
  openGraph: {
    title: "Daily Streak — degen0x",
    description: "Earn XP multipliers by checking in daily. The longer the streak, the bigger the boost.",
  },

  alternates: { canonical: "/streak" },
  twitter: { card: "summary_large_image" }};

const S = {
  bg: "#0d1117", surface: "#161b22", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", orange: "#f0883e",
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Streak', },
  ],
};

export default function StreakPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="streak"
      />      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, rgba(240,136,62,0.12) 0%, rgba(13,17,23,0) 60%)",
        borderBottom: `1px solid ${S.border}`, padding: "48px 24px 40px",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🔥</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 900, marginBottom: 12, lineHeight: 1.15 }}>
            Daily Check-In Streak
          </h1>
          <p style={{ color: S.text2, fontSize: 16, lineHeight: 1.7, maxWidth: 500, margin: "0 auto 24px" }}>
            Show up every day and unlock XP multipliers. The longer your streak, the more XP you earn — up to 3× for 365-day legends.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[["🔥", "7 days", "1.0× XP", "#f0883e"], ["🌙", "30 days", "1.5× XP", "#bc8cff"], ["🏆", "100 days", "2.0× XP", "#3fb950"], ["👑", "365 days", "3.0× XP", "#f85149"]].map(([icon, label, mult, color]) => (
              <div key={String(label)} style={{ background: `${color}15`, border: `1px solid ${color}40`, borderRadius: 10, padding: "8px 16px", textAlign: "center" }}>
                <div style={{ fontSize: 18 }}>{icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: String(color) }}>{mult}</div>
                <div style={{ fontSize: 10, color: S.text2 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Streak Widget */}
      <div style={{ maxWidth: 740, margin: "40px auto", padding: "0 16px 80px" }}>
        <DailyStreakSystem />
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Daily Streak \u2014 degen0x | Earn XP Every Day", "description": "Check in daily to maintain your streak and earn XP multipliers. 7-day \u2192 1.0\u00d7, 30-day \u2192 1.5\u00d7, 100-day \u2192 2.0\u00d7 XP. Streaks up to 3\u00d7 for 365-day legends.", "url": "https://degen0x.com/streak"}) }} />
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
    </main>
  );
}
