import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "💼 Crypto Portfolio Tracker",
  description: "Track your holdings, monitor live P&amp;L, and visualize your allocation. No signup required — runs entirely in your browser.",
  alternates: { canonical: "https://degen0x.com/investing/tools/portfolio-tracker" },
  openGraph: {
    title: "💼 Crypto Portfolio Tracker",
    description: "Track your holdings, monitor live P&amp;L, and visualize your allocation. No signup required — runs entirely in your browser.",
    url: "https://degen0x.com/investing/tools/portfolio-tracker",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="💼 Crypto Portfolio Tracker"
        description="Track your holdings, monitor live P&amp;L, and visualize your allocation. No signup required — runs entirely in your browser."
        url="https://degen0x.com/investing/tools/portfolio-tracker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/investing/tools/portfolio-tracker" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/tools/portfolio-tracker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/tools/portfolio-tracker" />
    </>
  );
}
