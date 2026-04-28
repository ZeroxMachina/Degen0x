import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Solver Networks & Order Flow Auctions Guide 2026",
  description: "How competitive auction systems are replacing traditional DEX routing, protecting you from MEV, and improving execution quality across DeFi.",
  alternates: { canonical: "https://degen0x.com/learn/solver-networks-order-flow-auctions-guide-2026" },
  openGraph: {
    title: "Solver Networks & Order Flow Auctions Guide 2026",
    description: "How competitive auction systems are replacing traditional DEX routing, protecting you from MEV, and improving execution quality across DeFi.",
    url: "https://degen0x.com/learn/solver-networks-order-flow-auctions-guide-2026",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Solver Networks & Order Flow Auctions Guide 2026"
        description="How competitive auction systems are replacing traditional DEX routing, protecting you from MEV, and improving execution quality across DeFi."
        url="https://degen0x.com/learn/solver-networks-order-flow-auctions-guide-2026"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/solver-networks-order-flow-auctions-guide-2026" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/solver-networks-order-flow-auctions-guide-2026" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/learn/solver-networks-order-flow-auctions-guide-2026" />
    </>
  );
}
