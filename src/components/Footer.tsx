import Link from "next/link";
import { CATEGORIES, SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export default function Footer() {
  const footerCategories = CATEGORIES.slice(0, 8);

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--glass-nav-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="text-xl font-bold gradient-text">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
              The most trusted crypto comparison platform. Expert reviews, tools, and guides to navigate the crypto world.
            </p>
          </div>

          {footerCategories.map((cat) => (
            <div key={cat.slug}>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.subcategories.slice(0, 5).map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/${cat.slug}/${sub.slug}`}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)]">
          <p className="text-xs text-[var(--color-text-secondary)] mb-4">
            <strong>Advertiser Disclosure:</strong> {SITE_NAME} is an independent comparison platform. We may receive compensation when you click on certain links or sign up for products through our site. This compensation may impact how and where products appear on our site (including the order in which they appear). Our editorial content is not influenced by compensation. We strive to provide accurate, unbiased information to help you make informed decisions.
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] mb-4">
            <strong>Risk Disclaimer:</strong> Cryptocurrency is highly volatile and involves significant risk. Past performance does not guarantee future results. Never invest more than you can afford to lose. Always do your own research (DYOR) before making any investment decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            &copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">About</Link>
            <Link href="/methodology" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Methodology</Link>
            <Link href="/privacy" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Privacy</Link>
            <Link href="/terms" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Terms</Link>
            <Link href="/contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)]">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
