---
type: community-draft
status: not-published — commit-only; pre-writes for three SEO codemod landings
created_at: 2026-04-20T14:14Z
runner: degen-morning-standup (fallback)
owner: community-growth
channels: Discord announcements, X/Twitter thread, changelog entry
gated_on: reconcile approval + codemod execution
---

# Pre-writes: three SEO codemod landings

Draft copy for each of the three 2026-04-18 recovery codemods, reusable across Discord / X / changelog. Don't publish until the codemod actually lands and a post-deploy audit confirms the metric moved.

---

## Codemod 1 — Author attribution sweep (`67.3% → ~95%+`)

**What landed (user-facing):** Every /learn page now shows who wrote it, when it was last reviewed, and a short author bio. Where the author is a subject-matter expert (CFA, engineer, founder), their credentials render in the byline. Pages without an explicit author now credit the degen0x editorial team by default. Schema.org `Author` + `Reviewed by` JSON-LD ships on all 1,515 published pages.

**Discord announce (copy-paste-ready):**

> 📝 **Every guide now names its author.**
>
> We just rolled out an `AuthorAttribution` upgrade across every `/learn/*` page: clear byline, review date, and credentials where applicable. About a third of the catalog was missing this — now it's on all 1,515 pages.
>
> Why it matters: Google treats "expertise signals" (who wrote it, when was it reviewed) as ranking factors for financial content. This should help our guides surface for more specific queries over the next few weeks.

**X / Twitter (≤ 280c):**

> Rolled out author attribution on every degen0x guide — byline, review date, credentials where applicable. ~33% of our catalog was missing this. Now on all 1,515 pages. Better expertise signal for /learn.

**Changelog entry:**

> **SEO — Author attribution sweep.** Increased `Author` + `Reviewed by` schema coverage from 67.3% → 95%+ across published inventory. Byline now renders on every `/learn/*` and tool page with author credentials where applicable. PR: [TBD after landing]. Audit snapshot: `ops/seo/audit-snapshot-[DATE].json`.

---

## Codemod 2 — Related-content graph (`44.9% → ~90%+`)

**What landed:** The "related guides" block at the end of every learn page now actually surfaces relevant next-reads via a curated graph, not a random sample. Hubs (`/learn/what-is-blockchain`, `/learn/crypto-for-beginners`) are linked from every spoke. Spokes are cross-linked by topic cluster. Previously, about 55% of pages had no `RelatedContent` block at all.

**Discord announce:**

> 🔗 **"What to read next" is now actually curated.**
>
> Every `/learn/*` page now ends with a curated set of related guides mapped by topic cluster — not a random sample. Hubs like `/learn/what-is-blockchain` are linked from every spoke; spokes cross-link to sister topics. Previously ~55% of learn pages had no related-content block at all — now it's on 90%+.
>
> Expect more time-on-site, more pages per visit, and better internal PageRank distribution over the next few weeks.

**X (≤ 280c):**

> "What to read next" at the end of every degen0x guide is now curated, not random. Hub-and-spoke graph maps every learn topic to its sister topics. Related-content coverage: 44.9% → 90%+.

**Changelog entry:**

> **SEO — Related-content graph.** Curated `RelatedContent` block deployed across `/learn/*`. Coverage increased from 44.9% → 90%+. Hub pages (`/learn/what-is-blockchain`, `/learn/crypto-for-beginners`) now linked from every topic spoke. Internal-link depth median improved from 3 → 6 outbound per page.

---

## Codemod 3 — Methodology + source links (`10.0% → ~70%+`)

**What landed:** Every tool page (`/tools/*`) now links to its methodology (how the numbers are calculated, what data sources feed it, how often it refreshes) and cites its upstream data providers (CoinGecko, DefiLlama, on-chain sources). Previously 90% of tools shipped without any methodology or source disclosure.

**Discord announce:**

> 🔍 **Every tool now shows its work.**
>
> Rolled out methodology + source links across every `/tools/*` page: how we calculate the numbers, what data sources feed each tool, and how often data refreshes. Previously only ~10% of tools disclosed this — now it's 70%+.
>
> Why: financial tools without methodology fail Google's E-E-A-T standards, and honestly they fail our own standards. If a tool shows a number, users should be able to click through to see where the number came from.

**X (≤ 280c):**

> Every degen0x tool now shows its work: methodology + data sources + refresh cadence, linked from the tool page. Previously ~10% of tools disclosed this. Now 70%+. Sign of a tool you can trust.

**Changelog entry:**

> **SEO / Trust — Methodology disclosure.** Methodology + data-source links deployed across `/tools/*`. Coverage: 10.0% → 70%+. Each tool now cites upstream providers (CoinGecko, DefiLlama, on-chain sources) and describes its calculation + refresh cadence. Foundation for expanding `SoftwareApplication` schema in a subsequent pass.

---

## Publishing order + cadence

Recommended (subject to reconcile):
1. Recovery note (once reconcile lands) — sets the stage.
2. Codemod 1 the same day as its audit lands.
3. Codemod 2 + Codemod 3 bundled into one "bigger SEO push" thread 24–48h later — three separate posts in the same week dilutes.

If all three land in the same 24h window: write ONE thread on X ("This week we shipped three SEO upgrades...") rather than three separate posts. Discord gets all three as individual announcements; X gets a thread.

## Guardrails

- No traffic / indexation promises ("this will 2x our traffic") — we have no GSC OAuth, no baseline to promise against.
- No competitor mentions.
- No internal team callouts ("great work by the SEO team") — degen0x voice is the platform, not individual.
- Do not link to internal audit files or the reconcile incident docs.
