import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "🏆 Streak Leaderboard",
  description: "Who's been learning the longest?",
  alternates: { canonical: "https://degen0x.com/streak/leaderboard" },
  openGraph: {
    title: "🏆 Streak Leaderboard",
    description: "Who's been learning the longest?",
    url: "https://degen0x.com/streak/leaderboard",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="🏆 Streak Leaderboard"
        description="Who"
        url="https://degen0x.com/streak/leaderboard"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/streak/leaderboard" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="streak"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/streak/leaderboard" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/streak/leaderboard" />
    </>
  );
}
