import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Knowledge Quiz",
  description: "Test your crypto knowledge with 10 randomized questions. From Bitcoin basics to advanced DeFi — see how much you really know.",
  alternates: { canonical: "https://degen0x.com/learn/quiz" },
  openGraph: {
    title: "Crypto Knowledge Quiz",
    description: "Test your crypto knowledge with 10 randomized questions. From Bitcoin basics to advanced DeFi — see how much you really know.",
    url: "https://degen0x.com/learn/quiz",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Knowledge Quiz"
        description="Test your crypto knowledge with 10 randomized questions. From Bitcoin basics to advanced DeFi — see how much you really know."
        url="https://degen0x.com/learn/quiz"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/quiz" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/quiz" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/learn/quiz" />
    </>
  );
}
