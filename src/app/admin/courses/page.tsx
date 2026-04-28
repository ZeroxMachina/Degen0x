import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Admin/Courses",
  description: "Learn about courses on degen0x — research, guides, and live data.",
  alternates: { canonical: "https://degen0x.com/admin/courses" },
  openGraph: {
    title: "/Admin/Courses",
    description: "Learn about courses on degen0x — research, guides, and live data.",
    url: "https://degen0x.com/admin/courses",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Admin/Courses"
        description="Learn about courses on degen0x — research, guides, and live data."
        url="https://degen0x.com/admin/courses"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/admin/courses" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="admin"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/admin/courses" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/admin/courses" />
    </>
  );
}
