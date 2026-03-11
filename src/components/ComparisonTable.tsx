import StarRating from "./StarRating";
import { ComparisonItem } from "@/lib/types";

interface Props {
  items: ComparisonItem[];
  features: string[];
  title?: string;
}

export default function ComparisonTable({ items, features, title }: Props) {
  return (
    <div className="overflow-x-auto glass">
      {title && (
        <div className="glass-table-header px-6 py-4 border-b border-[var(--glass-border)]">
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
        </div>
      )}
      <table className="w-full">
        <thead>
          <tr className="glass-table-header">
            <th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Feature</th>
            {items.map((item) => (
              <th key={item.slug} className="px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)]">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-[var(--glass-border)] glass-table-row">
            <td className="px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)]">Rating</td>
            {items.map((item) => (
              <td key={item.slug} className="px-6 py-3 text-center">
                <div className="flex justify-center">
                  <StarRating rating={item.rating} size="sm" />
                </div>
              </td>
            ))}
          </tr>
          {features.map((feature) => (
            <tr key={feature} className="border-t border-[var(--glass-border)] glass-table-row">
              <td className="px-6 py-3 text-sm font-medium text-[var(--color-text-secondary)]">{feature}</td>
              {items.map((item) => (
                <td key={item.slug} className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]">
                  {item.features[feature] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-[var(--glass-border)] glass-table-header">
            <td className="px-6 py-4"></td>
            {items.map((item) => (
              <td key={item.slug} className="px-6 py-4 text-center">
                <a
                  href={item.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="affiliate-cta inline-block px-4 py-2 rounded-lg text-white text-sm font-medium"
                >
                  Visit {item.name}
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
