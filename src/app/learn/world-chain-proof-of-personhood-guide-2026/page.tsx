import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "World Chain & Proof of Personhood Guide 2026",
  description: "Updated March 2026 · 13 min read",
  alternates: { canonical: "https://degen0x.com/learn/world-chain-proof-of-personhood-guide-2026" },
  openGraph: {
    title: "World Chain & Proof of Personhood Guide 2026",
    description: "Updated March 2026 · 13 min read",
    url: "https://degen0x.com/learn/world-chain-proof-of-personhood-guide-2026",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="World Chain & Proof of Personhood Guide 2026"
        description="Updated March 2026 · 13 min read"
        url="https://degen0x.com/learn/world-chain-proof-of-personhood-guide-2026"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/world-chain-proof-of-personhood-guide-2026" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/world-chain-proof-of-personhood-guide-2026" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
