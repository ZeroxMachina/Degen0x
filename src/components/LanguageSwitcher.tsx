"use client";
import { useState } from "react";
import Link from "next/link";
import { SUPPORTED_LOCALES, LOCALE_NAMES, LOCALE_FLAGS, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ current = "en" }: { current?: Locale }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-[var(--glass-bg)]"
        style={{ color: "var(--color-text-secondary)", border: "1px solid var(--glass-border)" }}
        aria-label="Change language"
      >
        <span>{LOCALE_FLAGS[current]}</span>
        <span className="hidden sm:inline">{LOCALE_NAMES[current]}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 z-50 w-48 py-1 rounded-xl shadow-xl overflow-hidden"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            {SUPPORTED_LOCALES.map((locale) => (
              <Link
                key={locale}
                href={locale === "en" ? "/" : `/${locale}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-[var(--glass-bg)] ${
                  locale === current ? "font-bold" : ""
                }`}
                style={{ color: locale === current ? "var(--color-primary)" : "var(--color-text)" }}
              >
                <span>{LOCALE_FLAGS[locale]}</span>
                <span>{LOCALE_NAMES[locale]}</span>
                {locale === current && (
                  <span className="ml-auto text-xs" style={{ color: "var(--color-primary)" }}>✓</span>
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
