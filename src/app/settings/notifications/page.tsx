import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Notification Preferences",
  description: "Control how and when degen0x reaches you",
  alternates: { canonical: "https://degen0x.com/settings/notifications" },
  openGraph: {
    title: "Notification Preferences",
    description: "Control how and when degen0x reaches you",
    url: "https://degen0x.com/settings/notifications",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Notification Preferences"
        description="Control how and when degen0x reaches you"
        url="https://degen0x.com/settings/notifications"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/settings/notifications" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="settings"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/settings/notifications" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/settings/notifications" />
    </>
  );
}
