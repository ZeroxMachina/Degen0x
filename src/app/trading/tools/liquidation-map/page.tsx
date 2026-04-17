import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Trading/Tools/Liquidation Map",
  description: "Visualize where leveraged positions will be liquidated — find key price levels where mass liquidations could trigger cascades.",
  alternates: { canonical: "https://degen0x.com/trading/tools/liquidation-map" },
  openGraph: {
    title: "/Trading/Tools/Liquidation Map",
    description: "Visualize where leveraged positions will be liquidated — find key price levels where mass liquidations could trigger cascades.",
    url: "https://degen0x.com/trading/tools/liquidation-map",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Trading/Tools/Liquidation Map"
        description="Visualize where leveraged positions will be liquidated — find key price levels where mass liquidations could trigger cascades."
        url="https://degen0x.com/trading/tools/liquidation-map"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/trading/tools/liquidation-map" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="trading"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/trading/tools/liquidation-map" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/trading/tools/liquidation-map" />
    </>
  );
}
