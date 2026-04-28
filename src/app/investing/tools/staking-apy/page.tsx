import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "🏆 Best Crypto Staking Rewards 2026",
  description: "Compare staking APYs across 12 major cryptocurrencies. Updated weekly. Find the best staking rewards based on your risk tolerance, lockup preference, and amount",
  alternates: { canonical: "https://degen0x.com/investing/tools/staking-apy" },
  openGraph: {
    title: "🏆 Best Crypto Staking Rewards 2026",
    description: "Compare staking APYs across 12 major cryptocurrencies. Updated weekly. Find the best staking rewards based on your risk tolerance, lockup preference, and amount",
    url: "https://degen0x.com/investing/tools/staking-apy",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="🏆 Best Crypto Staking Rewards 2026"
        description="Compare staking APYs across 12 major cryptocurrencies. Updated weekly. Find the best staking rewards based on your risk tolerance, lockup preference, and amount"
        url="https://degen0x.com/investing/tools/staking-apy"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/investing/tools/staking-apy" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/tools/staking-apy" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/tools/staking-apy" />
    </>
  );
}
