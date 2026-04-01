import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Congressional Tokenization Hearing Guide 2026: Securities on Blockchain | degen0x",
  description:
    "Complete guide to the 2026 Congressional hearing on tokenized securities. Covering the Modernizing Markets Through Tokenization Act, Capital Markets Technology Modernization Act, CLARITY Act, and regulatory implications for crypto.",
  keywords: [
    "congressional tokenization hearing",
    "tokenized securities regulation",
    "Modernizing Markets Tokenization Act",
    "Capital Markets Technology Modernization",
    "CLARITY Act crypto",
    "SEC tokenization",
    "blockchain securities 2026",
    "crypto regulation Congress",
  ],
  openGraph: {
    title: "Congressional Tokenization Hearing Guide 2026: Securities on Blockchain",
    description:
      "Deep dive into the Congressional hearing on tokenized securities — key legislation, regulatory frameworks, and what it means for crypto markets.",
    url: `${SITE_URL}/learn/congressional-tokenization-hearing-guide-2026`,
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-congressional-tokenization-hearing-guide-2026.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Congressional Tokenization Hearing Guide 2026",
    description:
      "Congressional hearing on tokenized securities — Modernizing Markets Act, Capital Markets Tech Act, CLARITY Act, and what they mean for crypto regulation.",
    images: [`${SITE_URL}/og-congressional-tokenization-hearing-guide-2026.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/congressional-tokenization-hearing-guide-2026`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
