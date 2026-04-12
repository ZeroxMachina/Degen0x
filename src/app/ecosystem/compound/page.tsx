import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import CompoundGuidePage from "./CompoundClient";

export const metadata: Metadata = {
  title: "Compound Finance Guide 2026: DeFi Lending & Borrowing",
  description:
    "Complete guide to Compound Finance — the pioneering DeFi lending protocol. Learn how to lend, borrow, and earn interest on crypto with Compound V3 in 2026.",
  keywords: [
    "compound finance",
    "compound defi",
    "compound lending",
    "compound v3",
    "COMP token",
    "defi lending",
    "crypto borrowing",
    "compound guide 2026",
  ],
  openGraph: {
    title: "Compound Finance Guide 2026: DeFi Lending & Borrowing",
    description:
      "Complete guide to Compound Finance — learn how to lend, borrow, and earn interest on crypto with Compound V3.",
    type: "article",
    url: "https://degen0x.com/ecosystem/compound",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+Guide&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Compound Finance Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Finance Guide 2026 | degen0x",
    description:
      "DeFi lending & borrowing with Compound V3. Lend, borrow, and earn interest on crypto.",
    images: [
      "https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+Guide&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/compound" }};

export default function CompoundPage() {
  return <CompoundGuidePage />;
}
