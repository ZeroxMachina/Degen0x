import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import MethodologyBlock from "@/components/MethodologyBlock";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "⚖️ Exchange Comparison Builder",
  description: "Compare up to 4 crypto exchanges side-by-side across fees, features, security, and more. Find the best exchange for your needs.",
  alternates: { canonical: "https://degen0x.com/exchanges/compare" },
  openGraph: {
    title: "⚖️ Exchange Comparison Builder",
    description: "Compare up to 4 crypto exchanges side-by-side across fees, features, security, and more. Find the best exchange for your needs.",
    url: "https://degen0x.com/exchanges/compare",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="⚖️ Exchange Comparison Builder"
        description="Compare up to 4 crypto exchanges side-by-side across fees, features, security, and more. Find the best exchange for your needs."
        url="https://degen0x.com/exchanges/compare"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/exchanges/compare" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="exchanges"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/exchanges/compare" />
        <ReadingTime />
      </div>
            <MethodologyBlock variant="compare" lastReviewed="2026-04-17" />
      <ClientPage />
      <RelatedContent pathname="/exchanges/compare" />
    </>
  );
}
