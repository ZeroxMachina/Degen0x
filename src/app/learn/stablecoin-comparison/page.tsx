import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Stablecoin Comparison Guide 2026",
  description: "Explore and compare the major stablecoins available in the crypto ecosystem. Understand their backing mechanisms, risk profiles, and yield opportuni",
  alternates: { canonical: "https://degen0x.com/learn/stablecoin-comparison" },
  openGraph: {
    title: "Stablecoin Comparison Guide 2026",
    description: "Explore and compare the major stablecoins available in the crypto ecosystem. Understand their backing mechanisms, risk profiles, and yield opportuni",
    url: "https://degen0x.com/learn/stablecoin-comparison",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Stablecoin Comparison Guide 2026"
        description="Explore and compare the major stablecoins available in the crypto ecosystem. Understand their backing mechanisms, risk profiles, and yield opportuni"
        url="https://degen0x.com/learn/stablecoin-comparison"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/stablecoin-comparison" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/stablecoin-comparison" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/learn/stablecoin-comparison" />
    </>
  );
}
