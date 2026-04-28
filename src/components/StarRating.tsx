interface Props {
  rating: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export default function StarRating({ rating, size = "md", showNumber = true }: Props) {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-2xl",
  };

  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0) - (rating % 1 > 0.7 ? 1 : 0);
  const adjustedFull = rating % 1 > 0.7 ? fullStars + 1 : fullStars;

  return (
    <div className="flex items-center gap-1">
      <div className={`star-rating ${sizeClasses[size]} flex`}>
        {Array.from({ length: adjustedFull }).map((_, i) => (
          <span key={`full-${i}`}>&#9733;</span>
        ))}
        {hasHalf && <span>&#9733;</span>}
        {Array.from({ length: Math.max(0, emptyStars) }).map((_, i) => (
          <span key={`empty-${i}`} className="opacity-30">&#9733;</span>
        ))}
      </div>
      {showNumber && (
        <span className={`font-semibold text-[var(--color-text)] ${size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : ""}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
