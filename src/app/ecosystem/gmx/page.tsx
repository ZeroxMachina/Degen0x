import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "GMX: Decentralized Perpetuals Exchange Guide 2026",
  description: "Trade BTC, ETH, SOL with up to 100× leverage on-chain · +150 XP · 13 min read",
  alternates: { canonical: "https://degen0x.com/ecosystem/gmx" },
  openGraph: {
    title: "GMX: Decentralized Perpetuals Exchange Guide 2026",
    description: "Trade BTC, ETH, SOL with up to 100× leverage on-chain · +150 XP · 13 min read",
    url: "https://degen0x.com/ecosystem/gmx",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="GMX: Decentralized Perpetuals Exchange Guide 2026"
        description="Trade BTC, ETH, SOL with up to 100× leverage on-chain · +150 XP · 13 min read"
        url="https://degen0x.com/ecosystem/gmx"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/gmx" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/gmx" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
