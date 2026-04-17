import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "1inch: The DEX Aggregator & MEV Protection",
  description: "Learn how 1inch routes swaps across 300+ DEXes to guarantee the best prices, and how 1inch Fusion+ eliminates MEV and front-running with professional resolvers.",
  alternates: { canonical: "https://degen0x.com/ecosystem/1inch" },
  openGraph: {
    title: "1inch: The DEX Aggregator & MEV Protection",
    description: "Learn how 1inch routes swaps across 300+ DEXes to guarantee the best prices, and how 1inch Fusion+ eliminates MEV and front-running with professional resolvers.",
    url: "https://degen0x.com/ecosystem/1inch",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="1inch: The DEX Aggregator & MEV Protection"
        description="Learn how 1inch routes swaps across 300+ DEXes to guarantee the best prices, and how 1inch Fusion+ eliminates MEV and front-running with professional resolvers."
        url="https://degen0x.com/ecosystem/1inch"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/1inch" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/1inch" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
