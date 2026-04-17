import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Glossary",
  description: "No terms found. Try a different search.",
  alternates: { canonical: "https://degen0x.com/learn/glossary" },
  openGraph: {
    title: "Crypto Glossary",
    description: "No terms found. Try a different search.",
    url: "https://degen0x.com/learn/glossary",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Glossary"
        description="No terms found. Try a different search."
        url="https://degen0x.com/learn/glossary"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/glossary" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/glossary" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/learn/glossary" />
    </>
  );
}
