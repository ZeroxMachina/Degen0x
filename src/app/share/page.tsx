import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Share Your Achievement",
  description: "Flex your crypto education progress across social",
  alternates: { canonical: "https://degen0x.com/share" },
  openGraph: {
    title: "Share Your Achievement",
    description: "Flex your crypto education progress across social",
    url: "https://degen0x.com/share",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Share Your Achievement"
        description="Flex your crypto education progress across social"
        url="https://degen0x.com/share"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/share" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="share"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/share" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/share" />
    </>
  );
}
