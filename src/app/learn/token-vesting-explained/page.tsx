import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Token Vesting Explained",
  description: "How Unlock Schedules Affect Crypto Prices",
  alternates: { canonical: "https://degen0x.com/learn/token-vesting-explained" },
  openGraph: {
    title: "Token Vesting Explained",
    description: "How Unlock Schedules Affect Crypto Prices",
    url: "https://degen0x.com/learn/token-vesting-explained",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Token Vesting Explained"
        description="How Unlock Schedules Affect Crypto Prices"
        url="https://degen0x.com/learn/token-vesting-explained"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/token-vesting-explained" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/token-vesting-explained" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
