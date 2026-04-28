import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "L2 Bridges & Rollups: The Complete 2026 Guide",
  description: "Bridges are protocols that enable moving tokens and data between different blockchain networks. They solve the fundamental problem of blockchain interoperabilit",
  alternates: { canonical: "https://degen0x.com/learn/l2-bridges-rollups-guide" },
  openGraph: {
    title: "L2 Bridges & Rollups: The Complete 2026 Guide",
    description: "Bridges are protocols that enable moving tokens and data between different blockchain networks. They solve the fundamental problem of blockchain interoperabilit",
    url: "https://degen0x.com/learn/l2-bridges-rollups-guide",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="L2 Bridges & Rollups: The Complete 2026 Guide"
        description="Bridges are protocols that enable moving tokens and data between different blockchain networks. They solve the fundamental problem of blockchain interoperabilit"
        url="https://degen0x.com/learn/l2-bridges-rollups-guide"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/l2-bridges-rollups-guide" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/l2-bridges-rollups-guide" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/learn/l2-bridges-rollups-guide" />
    </>
  );
}
