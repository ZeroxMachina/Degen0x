import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";
import RelatedContent from "@/components/RelatedContent";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto News Aggregator — Free Crypto Tool",
  description: "Aggregate and filter crypto news from top sources in one real-time feed",
  alternates: { canonical: "https://degen0x.com/tools/news-aggregator" },
  openGraph: {
    title: "Crypto News Aggregator",
    description: "Aggregate and filter crypto news from top sources in one real-time feed",
    url: "https://degen0x.com/tools/news-aggregator",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/news-aggregator"
        name="Crypto News Aggregator"
        description="Aggregate and filter crypto news from top sources in one real-time feed"
      />
            <ArticleSchema
        headline="Crypto News Aggregator — Free Crypto Tool"
        description="Aggregate and filter crypto news from top sources in one real-time feed"
        url="https://degen0x.com/tools/news-aggregator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/news-aggregator" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/news-aggregator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/news-aggregator" />
    </>
  );
}
