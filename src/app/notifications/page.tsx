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
    </>
  );
}
