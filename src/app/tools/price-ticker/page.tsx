import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";
import RelatedContent from "@/components/RelatedContent";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Price Ticker — Free Crypto Tool",
  description: "Live crypto price ticker for embedding or monitoring",
  alternates: { canonical: "https://degen0x.com/tools/price-ticker" },
  openGraph: {
    title: "Price Ticker",
    description: "Live crypto price ticker for embedding or monitoring",
    url: "https://degen0x.com/tools/price-ticker",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/price-ticker"
        name="Price Ticker"
        description="Live crypto price ticker for embedding or monitoring"
      />
            <ArticleSchema
        headline="Price Ticker — Free Crypto Tool"
        description="Live crypto price ticker for embedding or monitoring"
        url="https://degen0x.com/tools/price-ticker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/price-ticker" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/price-ticker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/price-ticker" />
    </>
  );
}
