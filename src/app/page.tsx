import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME } from "@/lib/constants";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Onboarding the Next 1 Billion to Web3`,
  description: "The crypto world is powerful but intimidating. Free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.",
  alternates: { canonical: "/" }};

export default function HomePage() {
  return <HomeContent />;
}
