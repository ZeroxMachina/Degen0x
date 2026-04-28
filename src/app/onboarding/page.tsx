import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import OnboardingWizard from '@/components/OnboardingWizard';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Get Started | degen0x',
  description: 'Set up your degen0x profile, choose your risk tolerance, and customize your crypto dashboard in minutes.',
  keywords: ['crypto onboarding', 'portfolio setup', 'risk profile', 'degen0x setup'],
  alternates: { canonical: "/onboarding" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Onboarding', },
  ],
};

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <ArticleSchema
        headline="Get Started | degen0x"
        description="Set up your degen0x profile, choose your risk tolerance, and customize your crypto dashboard in minutes."
        url="/onboarding"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/onboarding" />
        <ReadingTime />
      </div>
<AuthoritySources url="/onboarding" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="onboarding"
      />      <OnboardingWizard />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Get Started | degen0x", "description": "Set up your degen0x profile, choose your risk tolerance, and customize your crypto dashboard in minutes.", "url": "https://degen0x.com/onboarding", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
          <a href="/contact" style={{ color: "#fb923c", marginRight: "1rem" }}>Contact</a>
        
          <a href="/watchlists" style={{ color: "#fb923c", marginRight: "1rem" }}>Watchlists</a>
        
          <a href="/heatmap" style={{ color: "#fb923c", marginRight: "1rem" }}>Heatmap</a>
        
          <a href="/onboarding/email-drip" style={{ color: "#fb923c", marginRight: "1rem" }}>Email Drip</a>
        </nav>
    </main>
  );
}
