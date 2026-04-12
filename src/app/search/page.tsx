import { Suspense } from "react";
import SearchContent from "./SearchContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search — Crypto Tools",
  description: "Explore Search on degen0x. Free crypto tools and in-depth analysis.",
  alternates: { canonical: "https://degen0x.com/search" },
};


export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Search degen0x</h1>
          <p className="text-lg text-[var(--color-text-secondary)]">Loading search...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
