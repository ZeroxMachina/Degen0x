import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Compound Staking Calculator",
  description: "See how compounding supercharges your staking returns over time. Compare daily, weekly, and monthly compounding frequencies and add regular contribution",
  alternates: { canonical: "https://degen0x.com/investing/staking/calculators/compound-staking-calculator" },
  openGraph: {
    title: "Compound Staking Calculator",
    description: "See how compounding supercharges your staking returns over time. Compare daily, weekly, and monthly compounding frequencies and add regular contribution",
    url: "https://degen0x.com/investing/staking/calculators/compound-staking-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Compound Staking Calculator"
        description="See how compounding supercharges your staking returns over time. Compare daily, weekly, and monthly compounding frequencies and add regular contribution"
        url="https://degen0x.com/investing/staking/calculators/compound-staking-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/investing/staking/calculators/compound-staking-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/staking/calculators/compound-staking-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/staking/calculators/compound-staking-calculator" />
    </>
  );
}
