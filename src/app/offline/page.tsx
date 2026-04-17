import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "You're Offline",
  description: "Looks like you've lost your internet connection. Don't worry, you can still view cached pages.",
  alternates: { canonical: "https://degen0x.com/offline" },
  openGraph: {
    title: "You're Offline",
    description: "Looks like you've lost your internet connection. Don't worry, you can still view cached pages.",
    url: "https://degen0x.com/offline",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="You"
        description="Looks like you"
        url="https://degen0x.com/offline"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/offline" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="offline"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/offline" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/offline" />
    </>
  );
}
