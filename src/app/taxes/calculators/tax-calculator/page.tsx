import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Tax Calculator",
  description: "Estimate your cryptocurrency tax liability based on your gains, losses, and income. This calculator uses 2024 single filer tax brackets for estimation p",
  alternates: { canonical: "https://degen0x.com/taxes/calculators/tax-calculator" },
  openGraph: {
    title: "Crypto Tax Calculator",
    description: "Estimate your cryptocurrency tax liability based on your gains, losses, and income. This calculator uses 2024 single filer tax brackets for estimation p",
    url: "https://degen0x.com/taxes/calculators/tax-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Tax Calculator"
        description="Estimate your cryptocurrency tax liability based on your gains, losses, and income. This calculator uses 2024 single filer tax brackets for estimation p"
        url="https://degen0x.com/taxes/calculators/tax-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/taxes/calculators/tax-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="taxes"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/taxes/calculators/tax-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/taxes/calculators/tax-calculator" />
    </>
  );
}
