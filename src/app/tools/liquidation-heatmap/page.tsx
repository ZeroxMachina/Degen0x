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
  title: "Liquidation Heatmap — Free Crypto Tool",
  description: "Visualize leverage liquidation levels across crypto trading pairs",
  alternates: { canonical: "https://degen0x.com/tools/liquidation-heatmap" },
  openGraph: {
    title: "Liquidation Heatmap",
    description: "Visualize leverage liquidation levels across crypto trading pairs",
    url: "https://degen0x.com/tools/liquidation-heatmap",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/liquidation-heatmap"
        name="Liquidation Heatmap"
        description="Visualize leverage liquidation levels across crypto trading pairs"
      />
            <ArticleSchema
        headline="Liquidation Heatmap — Free Crypto Tool"
        description="Visualize leverage liquidation levels across crypto trading pairs"
        url="https://degen0x.com/tools/liquidation-heatmap"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/liquidation-heatmap" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/liquidation-heatmap" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/liquidation-heatmap" />
    </>
  );
}
