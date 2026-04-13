import BeginnerOnboardingFlow from '@/components/BeginnerOnboardingFlow';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";

export const metadata = {
  title: 'Get Started — degen0x | Learn Crypto, Earn XP',
  description: 'Join degen0x and start your crypto journey. Learn at your pace, earn XP, explore 100+ dApps, and climb the leaderboard. Free forever.',
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
      <BeginnerOnboardingFlow />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
