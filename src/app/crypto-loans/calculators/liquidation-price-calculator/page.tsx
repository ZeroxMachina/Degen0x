import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Liquidation Price Calculator",
  description: "Find the exact price at which your crypto loan position would be liquidated.",
  alternates: { canonical: "https://degen0x.com/crypto-loans/calculators/liquidation-price-calculator" },
  openGraph: {
    title: "Liquidation Price Calculator",
    description: "Find the exact price at which your crypto loan position would be liquidated.",
    url: "https://degen0x.com/crypto-loans/calculators/liquidation-price-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Liquidation Price Calculator"
        description="Find the exact price at which your crypto loan position would be liquidated."
        url="https://degen0x.com/crypto-loans/calculators/liquidation-price-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/crypto-loans/calculators/liquidation-price-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="crypto-loans"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-loans/calculators/liquidation-price-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/crypto-loans/calculators/liquidation-price-calculator" />
    </>
  );
}
