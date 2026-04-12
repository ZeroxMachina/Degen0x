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

export default function NotificationsPage() {
  return <NotificationsClient />;
}
