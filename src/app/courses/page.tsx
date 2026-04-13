import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import CoursesHub from '@/components/CoursesHub';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Free Crypto Courses — Earn XP & Badges | degen0x',
  description: "The most comprehensive free crypto curriculum. Learn Bitcoin, DeFi, Solana, Layer 2s, security, and more. Earn XP and badges as you progress. No signup",
  openGraph: {
    title: 'Free Crypto Courses | degen0x',
    description:
      'Learn crypto for free. Earn XP, unlock badges, track your progress across Bitcoin, DeFi, Solana, L2s and security courses.',
    images: [{ url: 'https://degen0x.com/og-courses.png', width: 1200, height: 630, alt: 'Free Crypto Courses on degen0x' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Crypto Courses | degen0x',
    description:
      'Learn crypto for free. Earn XP, unlock badges, track your progress across Bitcoin, DeFi, Solana, L2s and security courses.',
    images: ['https://degen0x.com/og-courses.png'],
  },

  alternates: { canonical: "/courses" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Courses', },
  ],
};

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="courses"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Courses" },
        ]}
      />
      <CoursesHub />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Free Crypto Courses \u2014 Earn XP & Badges | degen0x", "description": "The most comprehensive free crypto curriculum. Learn Bitcoin, DeFi, Solana, Layer 2s, security, and more. Earn XP and badges as you progress. No signup", "url": "https://degen0x.com/courses", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
