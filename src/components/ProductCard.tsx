import Link from "next/link";
import StarRating from "./StarRating";
import { Product } from "@/lib/types";

interface Props {
  product: Product;
  rank: number;
  categorySlug: string;
}

function TrustScoreBadge({ score }: { score: number }) {
  const label = score >= 90 ? "Excellent" : score >= 80 ? "Very Good" : score >= 70 ? "Good" : "Fair";
  const color = score >= 90 ? "#3fb950" : score >= 80 ? "#58a6ff" : score >= 70 ? "#f59e0b" : "#8b949e";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }} title={`degen0x Trust Score: ${score}/100`}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        border: `2px solid ${color}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: `${color}18`,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 10, fontWeight: 800, color }}>{score}</span>
      </div>
      <div>
        <div style={{ fontSize: 10, fontWeight: 700, color, lineHeight: 1.1 }}>{label}</div>
        <div style={{ fontSize: 9, color: "var(--color-text-secondary)", lineHeight: 1.1 }}>Trust Score</div>
      </div>
    </div>
  );
}

export default function ProductCard({ product, rank, categorySlug }: Props) {
  const trustScore = product.trustScore ?? Math.round(product.rating * 8 + 52);

  return (
    <div className="glass p-6 card-hover">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)]/80 backdrop-blur-sm flex items-center justify-center text-[var(--color-text)] font-bold shadow-lg shadow-indigo-500/20">
            {rank}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                <Link href={`/${categorySlug}/reviews/${product.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                  {product.name}
                </Link>
              </h3>
              {product.badge && (
                <span style={{
                  background: "#6366f120", color: "#818cf8",
                  border: "1px solid #6366f140",
                  borderRadius: 4, fontSize: 10,
                  padding: "2px 7px", fontWeight: 700, whiteSpace: "nowrap",
                }}>
                  {product.badge}
                </span>
              )}
            </div>
            <StarRating rating={product.rating} size="sm" />
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:block">
            <TrustScoreBadge score={trustScore} />
          </div>
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium whitespace-nowrap"
          >
            Visit Site
          </a>
        </div>
      </div>

      <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{product.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center glass-pill px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
          Best for: {product.bestFor}
        </span>
        {product.fees && (
          <span className="inline-flex items-center glass-pill px-3 py-1 text-xs font-medium text-[var(--color-success)]">
            Fees: {product.fees}
          </span>
        )}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
          <ul className="space-y-1">
            {product.pros.slice(0, 3).map((pro, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                <span className="text-[var(--color-success)] mt-0.5">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-[var(--color-danger)] mb-1">Cons</h4>
          <ul className="space-y-1">
            {product.cons.slice(0, 3).map((con, i) => (
              <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                <span className="text-[var(--color-danger)] mt-0.5">-</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-3 sm:hidden">
        <TrustScoreBadge score={trustScore} />
      </div>
    </div>
  );
}
