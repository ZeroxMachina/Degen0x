import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Tokenized Funds Guide 2026: How TradFi Giants Are Bringing $15B+ in Assets On-Chain",
  description: "Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals — tokenized funds in",
  alternates: { canonical: "https://degen0x.com/learn/tokenized-funds-institutional-defi-guide" },
  openGraph: {
    title: "Tokenized Funds Guide 2026: How TradFi Giants Are Bringing $15B+ in Assets On-Chain",
    description: "Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.",
    url: "https://degen0x.com/learn/tokenized-funds-institutional-defi-guide",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Tokenized Funds Guide 2026: How TradFi Giants Are Bringing $15B+ in Assets On-Chain"
        description="Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals."
        url="https://degen0x.com/learn/tokenized-funds-institutional-defi-guide"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Learn"
      />
      <AuthoritySources url="/learn/tokenized-funds-institutional-defi-guide" />
      <AuthorAttribution
        author="DegenSensei"
        role="Senior Crypto Editor"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="learn"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/learn/tokenized-funds-institutional-defi-guide" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
