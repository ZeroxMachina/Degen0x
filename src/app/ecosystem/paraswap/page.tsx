import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "ParaSwap: Best-Rate DEX Aggregator",
  description: "+100 XP · 8 min read · Updated March 2026 — paraswap on degen0x.",
  alternates: { canonical: "https://degen0x.com/ecosystem/paraswap" },
  openGraph: {
    title: "ParaSwap: Best-Rate DEX Aggregator",
    description: "+100 XP · 8 min read · Updated March 2026",
    url: "https://degen0x.com/ecosystem/paraswap",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="ParaSwap: Best-Rate DEX Aggregator"
        description="+100 XP · 8 min read · Updated March 2026"
        url="https://degen0x.com/ecosystem/paraswap"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/paraswap" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/paraswap" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
