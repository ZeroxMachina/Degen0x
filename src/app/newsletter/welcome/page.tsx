import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "You&apos;re In!",
  description: "While you wait, check out our most popular tools:",
  alternates: { canonical: "https://degen0x.com/newsletter/welcome" },
  openGraph: {
    title: "You&apos;re In!",
    description: "While you wait, check out our most popular tools:",
    url: "https://degen0x.com/newsletter/welcome",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="You&apos;re In!"
        description="While you wait, check out our most popular tools:"
        url="https://degen0x.com/newsletter/welcome"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/newsletter/welcome" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="newsletter"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/newsletter/welcome" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/newsletter/welcome" />
    </>
  );
}
