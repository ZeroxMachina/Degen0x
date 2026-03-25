import { Metadata } from "next";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Compound Finance: DeFi Lending OG Guide 2026 | degen0x",
  description:
    "Compound Finance created algorithmic money markets. Learn about Compound III (Comet), $COMP governance, interest rates, and how to earn yield in this complete 2026 guide.",
  keywords: [
    "Compound Finance",
    "Compound DeFi",
    "Compound III Comet",
    "COMP token",
    "DeFi lending",
    "algorithmic interest rates",
    "Compound guide 2026",
    "crypto lending protocol",
  ],
  openGraph: {
    title: "Compound Finance: DeFi Lending OG Guide 2026",
    description:
      "The protocol that invented algorithmic money markets. Learn Compound III, $COMP governance, and how to earn yield.",
    type: "article",
    url: "https://degen0x.com/ecosystem/compound",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+OG+Guide+2026&category=Ecosystem&type=exchange",
        width: 1200,
        height: 630,
        alt: "Compound Finance Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Finance: DeFi Lending OG Guide 2026",
    description:
      "The protocol that invented algorithmic money markets. Compound III, $COMP governance, and yield.",
    images: ["https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+OG+Guide+2026&category=Ecosystem&type=exchange"],
  },
};

export default function CompoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
