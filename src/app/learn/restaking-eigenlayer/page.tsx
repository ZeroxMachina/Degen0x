import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Restaking & EigenLayer",
  description: "Maximizing Your Staked ETH Returns",
  alternates: { canonical: "https://degen0x.com/learn/restaking-eigenlayer" },
  openGraph: {
    title: "Restaking & EigenLayer",
    description: "Maximizing Your Staked ETH Returns",
    url: "https://degen0x.com/learn/restaking-eigenlayer",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Restaking & EigenLayer"
        description="Maximizing Your Staked ETH Returns"
        url="https://degen0x.com/learn/restaking-eigenlayer"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/restaking-eigenlayer" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/restaking-eigenlayer" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
