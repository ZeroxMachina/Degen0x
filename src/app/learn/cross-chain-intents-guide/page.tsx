import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Cross-Chain Intents Guide 2026: ERC-7683, Fillers & the End of Traditional Bridges",
  description: "This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guid — cross c",
  alternates: { canonical: "https://degen0x.com/learn/cross-chain-intents-guide" },
  openGraph: {
    title: "Cross-Chain Intents Guide 2026: ERC-7683, Fillers & the End of Traditional Bridges",
    description: "This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guid",
    url: "https://degen0x.com/learn/cross-chain-intents-guide",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Cross-Chain Intents Guide 2026: ERC-7683, Fillers & the End of Traditional Bridges"
        description="This is one of those topics where surface-level understanding is dangerous. We"
        url="https://degen0x.com/learn/cross-chain-intents-guide"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/cross-chain-intents-guide" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/cross-chain-intents-guide" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
