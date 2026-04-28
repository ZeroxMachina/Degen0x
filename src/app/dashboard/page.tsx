import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your real-time crypto command center",
  alternates: { canonical: "https://degen0x.com/dashboard" },
  openGraph: {
    title: "Dashboard",
    description: "Your real-time crypto command center",
    url: "https://degen0x.com/dashboard",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Dashboard"
        description="Your real-time crypto command center"
        url="https://degen0x.com/dashboard"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/dashboard" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="dashboard"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/dashboard" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/dashboard" />
    </>
  );
}
