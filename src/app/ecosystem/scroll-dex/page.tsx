import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Scroll DEX: The Complete Guide 2026",
  description: "Scroll's native concentrated liquidity DEX · +120 XP · 10 min read · Updated March 2026",
  alternates: { canonical: "https://degen0x.com/ecosystem/scroll-dex" },
  openGraph: {
    title: "Scroll DEX: The Complete Guide 2026",
    description: "Scroll's native concentrated liquidity DEX · +120 XP · 10 min read · Updated March 2026",
    url: "https://degen0x.com/ecosystem/scroll-dex",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Scroll DEX: The Complete Guide 2026"
        description="Scroll"
        url="https://degen0x.com/ecosystem/scroll-dex"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/scroll-dex" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/scroll-dex" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/ecosystem/scroll-dex" />
    </>
  );
}
