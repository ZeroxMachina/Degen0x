import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "How to Add Crypto Widgets to Your Website",
  description: "A Developer's Guide to Integration",
  alternates: { canonical: "https://degen0x.com/learn/embed-widgets-crypto" },
  openGraph: {
    title: "How to Add Crypto Widgets to Your Website",
    description: "A Developer's Guide to Integration",
    url: "https://degen0x.com/learn/embed-widgets-crypto",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="How to Add Crypto Widgets to Your Website"
        description="A Developer"
        url="https://degen0x.com/learn/embed-widgets-crypto"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/embed-widgets-crypto" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/embed-widgets-crypto" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
