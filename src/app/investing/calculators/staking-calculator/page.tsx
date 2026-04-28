import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Staking Calculator",
  description: "Estimate your staking rewards based on the amount staked, APY, and duration. See how compounding affects your total returns.",
  alternates: { canonical: "https://degen0x.com/investing/calculators/staking-calculator" },
  openGraph: {
    title: "Crypto Staking Calculator",
    description: "Estimate your staking rewards based on the amount staked, APY, and duration. See how compounding affects your total returns.",
    url: "https://degen0x.com/investing/calculators/staking-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Staking Calculator"
        description="Estimate your staking rewards based on the amount staked, APY, and duration. See how compounding affects your total returns."
        url="https://degen0x.com/investing/calculators/staking-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/investing/calculators/staking-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/calculators/staking-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/calculators/staking-calculator" />
    </>
  );
}
