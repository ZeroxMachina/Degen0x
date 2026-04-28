import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Interactive Wallet Comparison Tool",
  description: "Select 2-4 wallets to compare their features side by side. Choose from hardware wallets, software wallets, and smart contract wallets.",
  alternates: { canonical: "https://degen0x.com/wallets/tools/wallet-comparison" },
  openGraph: {
    title: "Interactive Wallet Comparison Tool",
    description: "Select 2-4 wallets to compare their features side by side. Choose from hardware wallets, software wallets, and smart contract wallets.",
    url: "https://degen0x.com/wallets/tools/wallet-comparison",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Interactive Wallet Comparison Tool"
        description="Select 2-4 wallets to compare their features side by side. Choose from hardware wallets, software wallets, and smart contract wallets."
        url="https://degen0x.com/wallets/tools/wallet-comparison"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/wallets/tools/wallet-comparison" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="wallets"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/tools/wallet-comparison" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/wallets/tools/wallet-comparison" />
    </>
  );
}
