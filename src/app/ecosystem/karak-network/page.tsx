import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Karak Network",
  description: "Universal restaking layer enabling any asset to secure any blockchain.",
  alternates: { canonical: "https://degen0x.com/ecosystem/karak-network" },
  openGraph: {
    title: "Karak Network",
    description: "Universal restaking layer enabling any asset to secure any blockchain.",
    url: "https://degen0x.com/ecosystem/karak-network",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Karak Network"
        description="Universal restaking layer enabling any asset to secure any blockchain."
        url="https://degen0x.com/ecosystem/karak-network"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/karak-network" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/karak-network" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/ecosystem/karak-network" />
    </>
  );
}
