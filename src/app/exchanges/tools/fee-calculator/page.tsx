import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Exchange Fee Comparison 2026",
  description: "Enter your trade size and see exactly what you&apos;d pay across all 10 major exchanges — ranked from cheapest to most expensive. Toggle VIP rates and",
  alternates: { canonical: "https://degen0x.com/exchanges/tools/fee-calculator" },
  openGraph: {
    title: "Crypto Exchange Fee Comparison 2026",
    description: "Enter your trade size and see exactly what you&apos;d pay across all 10 major exchanges — ranked from cheapest to most expensive. Toggle VIP rates and",
    url: "https://degen0x.com/exchanges/tools/fee-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Exchange Fee Comparison 2026"
        description="Enter your trade size and see exactly what you&apos;d pay across all 10 major exchanges — ranked from cheapest to most expensive. Toggle VIP rates and"
        url="https://degen0x.com/exchanges/tools/fee-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/exchanges/tools/fee-calculator" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="exchanges"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/exchanges/tools/fee-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/exchanges/tools/fee-calculator" />
    </>
  );
}
