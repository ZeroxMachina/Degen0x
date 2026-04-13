import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import NotificationsClient from './NotificationsClient';

export const metadata: Metadata = {
  title: "Notifications — Price Alerts, Streak Reminders & More",
  description: "Stay updated with real-time crypto notifications. Price alerts, whale movements, streak reminders, new content alerts, and achievement unlocks — all in one",
  openGraph: {
    title: 'Notifications | degen0x',
    description:
      'Real-time crypto notifications — price alerts, whale moves, streak reminders, and more.',
    images: [
      {
        url: 'https://degen0x.com/og-notifications.png',
        width: 1200,
        height: 630,
        alt: 'Notifications on degen0x',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notifications | degen0x',
    description:
      'Real-time crypto notifications — price alerts, whale moves, streak reminders, and more.',
    images: ['https://degen0x.com/og-notifications.png'],
  },

  alternates: { canonical: "/notifications" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Notifications', },
  ],
};

export default function NotificationsPage() {
  return (
    <>
      <NotificationsClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Notifications | degen0x", "description": "Real-time crypto notifications — price alerts, whale moves, streak reminders, and more.", "url": "https://degen0x.com/notifications", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
