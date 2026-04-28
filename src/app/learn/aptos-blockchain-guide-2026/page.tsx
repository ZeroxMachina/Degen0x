import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Aptos Blockchain Guide 2026",
  description: "Move language, $1B+ TVL, DeFi ecosystem, and real-world assets on the fastest growing Layer 1",
  alternates: { canonical: "https://degen0x.com/learn/aptos-blockchain-guide-2026" },
  openGraph: {
    title: "Aptos Blockchain Guide 2026",
    description: "Move language, $1B+ TVL, DeFi ecosystem, and real-world assets on the fastest growing Layer 1",
    url: "https://degen0x.com/learn/aptos-blockchain-guide-2026",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Aptos Blockchain Guide 2026"
        description="Move language, $1B+ TVL, DeFi ecosystem, and real-world assets on the fastest growing Layer 1"
        url="https://degen0x.com/learn/aptos-blockchain-guide-2026"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/aptos-blockchain-guide-2026" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/aptos-blockchain-guide-2026" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
