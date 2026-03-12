"use client";

import { useState, useEffect, useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

interface Review {
  id: string;
  wallet: string;
  rating: number;
  title: string;
  body: string;
  pros: string[];
  cons: string[];
  timestamp: number;
  upvotes: number;
  downvotes: number;
}

interface CommunityReviewsProps {
  productSlug: string;
  productName: string;
}

function StarSelector({ rating, onSelect }: { rating: number; onSelect: (r: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onSelect(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="text-2xl transition-transform hover:scale-110"
        >
          <span className={star <= (hover || rating) ? "text-amber-400" : "text-gray-400 opacity-40"}>
            ★
          </span>
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, onVote }: { review: Review; onVote: (id: string, type: "up" | "down") => void }) {
  const timeAgo = getTimeAgo(review.timestamp);
  const shortWallet = `${review.wallet.slice(0, 4)}...${review.wallet.slice(-4)}`;

  return (
    <div className="glass p-6 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className={`text-sm ${s <= review.rating ? "text-amber-400" : "text-gray-400 opacity-30"}`}>★</span>
              ))}
            </div>
            <h4 className="font-semibold text-[var(--color-text)]">{review.title}</h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
            <span className="glass-pill px-2 py-0.5 font-mono">{shortWallet}</span>
            <span>·</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{review.body}</p>

      {(review.pros.length > 0 || review.cons.length > 0) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {review.pros.length > 0 && (
            <div className="glass-subtle p-3 space-y-1">
              <span className="text-xs font-semibold text-green-500">PROS</span>
              {review.pros.map((p, i) => (
                <p key={i} className="text-xs text-[var(--color-text-secondary)] flex gap-1.5">
                  <span className="text-green-500">+</span> {p}
                </p>
              ))}
            </div>
          )}
          {review.cons.length > 0 && (
            <div className="glass-subtle p-3 space-y-1">
              <span className="text-xs font-semibold text-red-500">CONS</span>
              {review.cons.map((c, i) => (
                <p key={i} className="text-xs text-[var(--color-text-secondary)] flex gap-1.5">
                  <span className="text-red-500">−</span> {c}
                </p>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 pt-2 border-t border-[var(--glass-border)]">
        <button
          onClick={() => onVote(review.id, "up")}
          className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] hover:text-green-500 transition-colors glass-pill px-2.5 py-1"
        >
          <span>▲</span> {review.upvotes}
        </button>
        <button
          onClick={() => onVote(review.id, "down")}
          className="flex items-center gap-1 text-xs text-[var(--color-text-secondary)] hover:text-red-500 transition-colors glass-pill px-2.5 py-1"
        >
          <span>▼</span> {review.downvotes}
        </button>
      </div>
    </div>
  );
}

function getTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export default function CommunityReviews({ productSlug, productName }: CommunityReviewsProps) {
  const { publicKey, connected } = useWallet();
  const { setVisible } = useWalletModal();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState<"recent" | "rating" | "helpful">("recent");
  const [formData, setFormData] = useState({
    rating: 0,
    title: "",
    body: "",
    pros: [""],
    cons: [""],
  });
  const [submitted, setSubmitted] = useState(false);

  const storageKey = `reviews_${productSlug}`;

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setReviews(JSON.parse(stored));
      }
    } catch {}
  }, [storageKey]);

  const saveReviews = useCallback(
    (updated: Review[]) => {
      setReviews(updated);
      try {
        localStorage.setItem(storageKey, JSON.stringify(updated));
      } catch {}
    },
    [storageKey]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!publicKey || formData.rating === 0) return;

    const newReview: Review = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      wallet: publicKey.toBase58(),
      rating: formData.rating,
      title: formData.title,
      body: formData.body,
      pros: formData.pros.filter((p) => p.trim()),
      cons: formData.cons.filter((c) => c.trim()),
      timestamp: Date.now(),
      upvotes: 0,
      downvotes: 0,
    };

    saveReviews([newReview, ...reviews]);
    setFormData({ rating: 0, title: "", body: "", pros: [""], cons: [""] });
    setShowForm(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleVote = (id: string, type: "up" | "down") => {
    const updated = reviews.map((r) =>
      r.id === id
        ? { ...r, [type === "up" ? "upvotes" : "downvotes"]: r[type === "up" ? "upvotes" : "downvotes"] + 1 }
        : r
    );
    saveReviews(updated);
  };

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "recent") return b.timestamp - a.timestamp;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.upvotes - b.downvotes - (a.upvotes - a.downvotes);
  });

  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct: reviews.length ? (reviews.filter((r) => r.rating === star).length / reviews.length) * 100 : 0,
  }));

  return (
    <section className="space-y-6" id="community-reviews">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Community Reviews</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mt-1">
            Real reviews from wallet-verified degens
          </p>
        </div>
        {!showForm && (
          <button
            onClick={() => {
              if (!connected) {
                setVisible(true);
              } else {
                setShowForm(true);
              }
            }}
            className="affiliate-cta px-5 py-2.5 text-sm font-semibold flex items-center gap-2"
          >
            {connected ? (
              <>
                <span>✍️</span> Write a Review
              </>
            ) : (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
                Connect Wallet to Review
              </>
            )}
          </button>
        )}
      </div>

      {submitted && (
        <div className="glass p-4 border-l-4 border-green-500 flex items-center gap-3 animate-fade-in-up">
          <span className="text-green-500 text-xl">✓</span>
          <p className="text-sm text-[var(--color-text)]">Review submitted! Thanks for contributing, degen.</p>
        </div>
      )}

      {/* Rating Summary */}
      {reviews.length > 0 && (
        <div className="glass p-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="text-center">
              <div className="text-5xl font-bold text-[var(--color-text)]">{avgRating}</div>
              <div className="flex mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={`text-lg ${s <= Math.round(Number(avgRating)) ? "text-amber-400" : "text-gray-400 opacity-30"}`}>★</span>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">{reviews.length} review{reviews.length !== 1 ? "s" : ""}</p>
            </div>
            <div className="flex-1 space-y-1.5 w-full">
              {ratingDistribution.map(({ star, count, pct }) => (
                <div key={star} className="flex items-center gap-2 text-xs">
                  <span className="w-3 text-[var(--color-text-secondary)]">{star}</span>
                  <span className="text-amber-400">★</span>
                  <div className="flex-1 h-2 rounded-full bg-[var(--glass-subtle-bg)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-[var(--color-text-secondary)]">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Review Form */}
      {showForm && connected && (
        <form onSubmit={handleSubmit} className="glass-elevated p-6 space-y-5 animate-fade-in-up">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Review {productName}</h3>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] text-xl"
            >
              ×
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Your Rating</label>
            <StarSelector rating={formData.rating} onSelect={(r) => setFormData({ ...formData, rating: r })} />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Review Title</label>
            <input
              type="text"
              required
              maxLength={100}
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Sum up your experience..."
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Your Review</label>
            <textarea
              required
              rows={4}
              maxLength={2000}
              value={formData.body}
              onChange={(e) => setFormData({ ...formData, body: e.target.value })}
              placeholder="Share your experience with this product..."
              className="w-full px-4 py-2.5 rounded-xl bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-green-500 mb-2">Pros</label>
              {formData.pros.map((pro, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={pro}
                    onChange={(e) => {
                      const updated = [...formData.pros];
                      updated[i] = e.target.value;
                      setFormData({ ...formData, pros: updated });
                    }}
                    placeholder="What did you like?"
                    className="flex-1 px-3 py-2 rounded-lg bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-green-500"
                  />
                  {i === formData.pros.length - 1 && formData.pros.length < 5 && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, pros: [...formData.pros, ""] })}
                      className="px-2 text-green-500 hover:bg-green-500/10 rounded-lg transition-colors"
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block text-sm font-medium text-red-500 mb-2">Cons</label>
              {formData.cons.map((con, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={con}
                    onChange={(e) => {
                      const updated = [...formData.cons];
                      updated[i] = e.target.value;
                      setFormData({ ...formData, cons: updated });
                    }}
                    placeholder="What could improve?"
                    className="flex-1 px-3 py-2 rounded-lg bg-[var(--glass-subtle-bg)] border border-[var(--glass-border)] text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-red-500"
                  />
                  {i === formData.cons.length - 1 && formData.cons.length < 5 && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, cons: [...formData.cons, ""] })}
                      className="px-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                    >
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <p className="text-xs text-[var(--color-text-secondary)]">
              Signed as <span className="font-mono glass-pill px-2 py-0.5">{publicKey?.toBase58().slice(0, 4)}...{publicKey?.toBase58().slice(-4)}</span>
            </p>
            <button
              type="submit"
              disabled={formData.rating === 0 || !formData.title || !formData.body}
              className="affiliate-cta px-6 py-2.5 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}

      {/* Sort & Reviews List */}
      {reviews.length > 0 && (
        <>
          <div className="flex items-center gap-2">
            {(["recent", "rating", "helpful"] as const).map((opt) => (
              <button
                key={opt}
                onClick={() => setSortBy(opt)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  sortBy === opt
                    ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                    : "glass-pill text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                }`}
              >
                {opt === "recent" ? "Most Recent" : opt === "rating" ? "Highest Rated" : "Most Helpful"}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {sortedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} onVote={handleVote} />
            ))}
          </div>
        </>
      )}

      {/* Empty State */}
      {reviews.length === 0 && !showForm && (
        <div className="glass p-12 text-center">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">No reviews yet</h3>
          <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
            Be the first degen to review {productName}. Connect your wallet and share your experience.
          </p>
          <button
            onClick={() => {
              if (!connected) {
                setVisible(true);
              } else {
                setShowForm(true);
              }
            }}
            className="affiliate-cta px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
          >
            {connected ? "Write First Review" : "Connect Wallet to Review"}
          </button>
        </div>
      )}
    </section>
  );
}
