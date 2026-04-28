import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/News/Live",
  description: "Learn about live on degen0x — research, guides, and live data.",
  alternates: { canonical: "https://degen0x.com/news/live" },
  openGraph: {
    title: "/News/Live",
    description: "Learn about live on degen0x — research, guides, and live data.",
    url: "https://degen0x.com/news/live",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/News/Live"
        description="Learn about live on degen0x — research, guides, and live data."
        url="https://degen0x.com/news/live"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/news/live" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="news"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/news/live" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/news/live" />
    </>
  );
}
