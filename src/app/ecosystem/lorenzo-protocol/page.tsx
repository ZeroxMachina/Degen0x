import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Lorenzo Protocol",
  description: "Bitcoin liquid staking protocol for DeFi participation and yield generation.",
  alternates: { canonical: "https://degen0x.com/ecosystem/lorenzo-protocol" },
  openGraph: {
    title: "Lorenzo Protocol",
    description: "Bitcoin liquid staking protocol for DeFi participation and yield generation.",
    url: "https://degen0x.com/ecosystem/lorenzo-protocol",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Lorenzo Protocol"
        description="Bitcoin liquid staking protocol for DeFi participation and yield generation."
        url="https://degen0x.com/ecosystem/lorenzo-protocol"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/lorenzo-protocol" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/lorenzo-protocol" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/ecosystem/lorenzo-protocol" />
    </>
  );
}
