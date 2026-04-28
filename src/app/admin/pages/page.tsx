import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "degen0x Admin",
  description: "Page Indexing Manager",
  alternates: { canonical: "https://degen0x.com/admin/pages" },
  openGraph: {
    title: "degen0x Admin",
    description: "Page Indexing Manager",
    url: "https://degen0x.com/admin/pages",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="degen0x Admin"
        description="Page Indexing Manager"
        url="https://degen0x.com/admin/pages"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/admin/pages" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="admin"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/admin/pages" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/admin/pages" />
    </>
  );
}
