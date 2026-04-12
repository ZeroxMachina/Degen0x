import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import CopyTradingLeaderboard from "@/components/CopyTradingLeaderboard";
import SocialTradingFeed from "@/components/SocialTradingFeed";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Copy Trading Leaderboard — ${SITE_NAME}`,
  description: "Follow and copy the best crypto traders. Real-time PnL rankings, strategy analysis, risk scores, and one-click copy trading across Solana, Ethereum, and L2s.",
  keywords: ["copy trading", "crypto traders", "social trading", "trading leaderboard", "mirror trading"],
  alternates: { canonical: "/copy-trading" }};

export default function CopyTradingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="copy-trading"
      />      <CopyTradingLeaderboard />
      <hr className="border-[var(--color-border)]" />
      <SocialTradingFeed />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Copy Trading", "description": "Follow and copy the best crypto traders. Real-time PnL rankings, strategy analysis, risk scores, and one-click copy trading across Solana, Ethereum, and L2s.", "url": "https://degen0x.com/copy-trading"}) }} />
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
