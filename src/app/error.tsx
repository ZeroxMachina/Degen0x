"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="text-3xl font-bold mb-3 text-[var(--color-text)]">
        Something Went Wrong
      </h2>
      <p className="text-[var(--color-text-secondary)] mb-8 max-w-md">
        Looks like we hit a snag. This might be a temporary issue — try refreshing, or head back to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 glass text-[var(--color-text)] font-semibold rounded-xl hover:bg-[var(--glass-bg)] transition-colors"
        >
          Go Home
        </Link>
      </div>
      {error.digest && (
        <p className="mt-6 text-xs text-[var(--color-text-secondary)]">
          Error ID: {error.digest}
        </p>
      )}
    </div>
  );
}
