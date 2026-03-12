"use client";
import Link from "next/link";
import { useState } from "react";
import { CATEGORIES, SITE_NAME } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";
import GlobalSearch from "./GlobalSearch";

const NAV_CATEGORIES = CATEGORIES.slice(0, 6);
const MORE_CATEGORIES = CATEGORIES.slice(6);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold gradient-text tracking-tight">{SITE_NAME}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/${cat.slug}`}
                  className="px-2.5 py-2 text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-all duration-300 rounded-xl hover:bg-[var(--glass-bg)] whitespace-nowrap"
                >
                  {cat.name}
                </Link>
                {activeDropdown === cat.slug && (
                  <div className="absolute top-full left-0 mt-2 w-64 p-2 glass-dropdown">
                    {cat.subcategories.map((sub) => (
                      <Link
                        key={sub.slug}
                        href={`/${cat.slug}/${sub.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--color-text)] transition-all duration-300"
                      >
                        <span className="font-medium text-[var(--color-text)]">{sub.name}</span>
                        <span className="block text-xs mt-0.5">{sub.description}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {MORE_CATEGORIES.length > 0 && (
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("more")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-2.5 py-2 text-[13px] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-all duration-300 rounded-xl hover:bg-[var(--glass-bg)]">
                  More
                </button>
                {activeDropdown === "more" && (
                  <div className="absolute top-full right-0 mt-2 w-64 p-2 glass-dropdown">
                    {MORE_CATEGORIES.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/${cat.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--color-text)] transition-all duration-300"
                      >
                        <span className="mr-2">{cat.icon}</span>
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="ml-3 flex items-center gap-2">
              <GlobalSearch />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <GlobalSearch />
            <ThemeToggle />
            <button
              className="p-2 text-[var(--color-text-secondary)]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--glass-border)] py-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="block px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--glass-bg)] rounded-lg transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
