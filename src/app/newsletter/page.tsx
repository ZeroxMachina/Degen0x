import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Newsletter",
  description: "No noise. No shilling. Just the moves that matter — distilled into a 5-minute read. Used by 47,000+ traders and investors every week.",
  alternates: { canonical: "https://degen0x.com/newsletter" },
  openGraph: {
    title: "/Newsletter",
    description: "No noise. No shilling. Just the moves that matter — distilled into a 5-minute read. Used by 47,000+ traders and investors every week.",
    url: "https://degen0x.com/newsletter",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Newsletter"
        description="No noise. No shilling. Just the moves that matter — distilled into a 5-minute read. Used by 47,000+ traders and investors every week."
        url="https://degen0x.com/newsletter"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/newsletter" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="newsletter"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/newsletter" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
