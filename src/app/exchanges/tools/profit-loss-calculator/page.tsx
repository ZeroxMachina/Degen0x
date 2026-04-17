import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Profit &amp; Loss Calculator",
  description: "Calculate your potential profit or loss on a crypto trade. Enter your buy price, sell price, and position size to see a detailed breakdown including fee",
  alternates: { canonical: "https://degen0x.com/exchanges/tools/profit-loss-calculator" },
  openGraph: {
    title: "Crypto Profit &amp; Loss Calculator",
    description: "Calculate your potential profit or loss on a crypto trade. Enter your buy price, sell price, and position size to see a detailed breakdown including fee",
    url: "https://degen0x.com/exchanges/tools/profit-loss-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Profit &amp; Loss Calculator"
        description="Calculate your potential profit or loss on a crypto trade. Enter your buy price, sell price, and position size to see a detailed breakdown including fee"
        url="https://degen0x.com/exchanges/tools/profit-loss-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/exchanges/tools/profit-loss-calculator" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="exchanges"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/exchanges/tools/profit-loss-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/exchanges/tools/profit-loss-calculator" />
    </>
  );
}
