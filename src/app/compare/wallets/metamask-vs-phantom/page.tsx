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
  title: "MetaMask vs Phantom",
  description: "Browser Wallet Comparison: DeFi, NFTs & Trading",
  alternates: { canonical: "https://degen0x.com/compare/wallets/metamask-vs-phantom" },
  openGraph: {
    title: "MetaMask vs Phantom",
    description: "Browser Wallet Comparison: DeFi, NFTs & Trading",
    url: "https://degen0x.com/compare/wallets/metamask-vs-phantom",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="MetaMask vs Phantom"
        description="Browser Wallet Comparison: DeFi, NFTs & Trading"
        url="https://degen0x.com/compare/wallets/metamask-vs-phantom"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Compare"
      />
      <AuthoritySources url="/compare/wallets/metamask-vs-phantom" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="compare"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/compare/wallets/metamask-vs-phantom" />
        <ReadingTime />
      </div>
            <MethodologyBlock variant="compare" lastReviewed="2026-04-17" />
      <ClientPage />
      <RelatedContent pathname="/compare/wallets/metamask-vs-phantom" />
    </>
  );
}
