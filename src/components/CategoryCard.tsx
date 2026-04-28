import Link from "next/link";
import { CategoryInfo } from "@/lib/types";

interface Props {
  category: CategoryInfo;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/${category.slug}`}
      className="block glass p-6 card-hover"
    >
      <div className="text-3xl mb-3">{category.icon}</div>
      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{category.name}</h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4">{category.description}</p>
      <div className="flex flex-wrap gap-2">
        {category.subcategories.slice(0, 3).map((sub) => (
          <span
            key={sub.slug}
            className="inline-flex items-center glass-pill px-2.5 py-1 text-xs font-medium"
            style={{ color: category.color, borderColor: `${category.color}25` }}
          >
            {sub.name}
          </span>
        ))}
      </div>
    </Link>
  );
}
