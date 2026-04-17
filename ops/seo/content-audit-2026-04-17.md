---
runner: content-audit (Claude Opus 4.7)
date: 2026-04-17
pages_scored: 1849
published_pages_scored: 609
sitewide_composite: 5.48
published_composite: 6.66
correction: 2026-04-17T15:00Z · "28 template-remnant pages" flag is INVALID (false positive)
---

# degen0x · Content Quality Audit — 2026-04-17

> **🚨 CORRECTION (2026-04-17T15:00Z).** The "template-remnant" signal cited in §Bottom 5 and §Top 3 Actions item 2 is a **false positive** — `{faq.q}` / `{faq.a}` are valid destructured JSX loop variables, not remnant tokens. Re-scored with a context-aware `_is_real_remnant()` detector: **0 real remnants across 1,849 pages.** Originality moved 6.04 → 6.50, sitewide composite 5.42 → 5.48, published composite 6.63 → 6.66. **Top 3 Actions revised:** #1 still valid (byline system), #2 is void, #3 still valid (multimedia minimum). See `ops/seo/ramp-to-8-plan-2026-04-17.md` for the full ramp plan.

Full-site audit across **1,849 `page.tsx` files** in `src/app/**`, scored on an 8-criteria rubric calibrated to Google's Helpful Content + Core Update signals. Each criterion scores 0–10; composite is weighted (E-E-A-T 18% · Depth 15% · Intent 15% · Originality 12% · Readability 10% · Freshness 10% · Multimedia 10% · Internal Linking 10%).

## Headline

- **Sitewide composite: 5.42 / 10 (Fair)** across all 1,849 pages.
- **Published subset: 6.63 / 10 (Good)** across 609 PUBLISHED_PAGES. 1.21-point gap confirms the publish queue *is* functioning as a quality filter — unpromoted pages score meaningfully lower.
- **No page in the corpus scores ≥ 8.** Current ceiling is ~7.4 (`/compare/chainlink-vs-pyth-vs-band`, 7.36).
- **Distribution:** 815 Good, 266 Fair, 767 Needs Work, 1 Critical.

## Per-criterion scores (sitewide averages)

| Criterion | Weight | Score | Band | One-line read |
|---|---|---|---|---|
| E-E-A-T | 18% | **3.29** | Needs Work | No real bylines, minimal authoritative external sourcing, no surfaced methodology. Biggest lever. |
| Multimedia | 10% | **3.47** | Needs Work | Most pages have no images, diagrams, charts, or video. Wall-of-text risk. |
| Internal Linking | 10% | **4.20** | Needs Work | Under-linked; related-content blocks missing on most pages. |
| Originality | 12% | **6.04** | Fair | Dragged by 119 sitewide template-remnant pages + programmatic keyword prefixes. |
| Intent Match | 15% | **6.09** | Fair | Compare pages often lack tables; how-to pages often lack ordered steps. |
| Readability | 10% | **6.24** | Fair | Decent heading hierarchy overall; wall-of-text on ~25% of long pages. |
| Depth | 15% | **6.91** | Good | Median page has adequate word count + heading density. |
| Freshness | 10% | **7.66** | Good | 99.5% of published pages reference 2026. Strongest signal. |

## Top 5 sections by average composite

1. `/learn` — 6.17 (598 pages). Strongest volume-and-quality section.
2. `/trading` — 5.95 (22 pages).
3. `/courses` — 5.76 (10 pages).
4. `/compare` — 5.59 (19 pages). Ceiling section — individual pages reach 7.36.
5. `/crypto-cards` — 5.47 (14 pages).

Weakest sections are the app-shell / UI routes (`/portfolio`, `/dashboard`, `/leaderboard`, `/gamification` at ~3.55) — these are interactive client-rendered pages, not content; they should be excluded from the SEO content rubric in the next rubric revision.

## Top 5 published pages (highest composite)

1. **`/compare/chainlink-vs-pyth-vs-band`** — 7.36 · depth 10 · freshness 10 · intent 8.5
2. **`/compare/bitcoin-vs-ethereum-investment`** — 7.29
3. **`/compare/coinbase-vs-kraken-vs-gemini`** — 7.29
4. **`/compare/hot-wallet-vs-cold-wallet`** — 7.29
5. **`/compare/polygon-vs-arbitrum-vs-optimism`** — 7.29

The comparison cluster leads because pages have tables + multiple sections + authoritative comparisons. Blueprint for the rest of the site.

## Bottom 5 published pages (lowest composite)

1. **`/`** (homepage) — 3.55 · depth 1.0 (only 68 words of scorable content). App-shell problem.
2. **`/learn/governance-markets-liquid-lockers-convex-aura-vote-markets-guide-2026`** — 4.68 · template remnants · orphan (0 internal links).
3. **`/about`** — 4.86 · no internal links · wall-of-text in one block.
4. **`/long-term/bitcoin-price-prediction-2030`** — 4.93 · template remnants.
5. **`/long-term/ethereum-price-prediction-2030`** — 4.93 · template remnants.

Three of the bottom five carry the 28-remnant problem flagged in today's SEO compliance audit. Fixing those simultaneously lifts Content-Quality + Originality + overall compliance.

## Top 3 content actions (ready for build cycles)

### 1 · Launch a site-wide author byline system (P0 · Programmer + Content)
- **Motivating data:** E-E-A-T averages 3.29/10 sitewide; even top-scored pages peak at 5.0 on this criterion. 0 pages have named human experts visible to Googlebot.
- **Expected lift:** moving E-E-A-T 3.29 → 5.5 shifts sitewide composite +0.40 and published composite +0.30.
- **How:** Extend the existing `AuthorAttribution` component to render expert bylines with degen0x author profiles (start with 3 authors: "Jefe" for strategy, "Research" for on-chain, "Markets" for news). Add `author` + `datePublished` + `dateModified` to Article schema for every published page.

### 2 · Kill the template remnants (P0 · Programmer)
- **Motivating data:** 28 published pages + 91 queued pages score 0/10 on Originality due to literal `{faq.q}` tokens leaking. Originality is 12% of the composite.
- **Expected lift:** +0.3 on the 28 affected published pages; sitewide composite +0.1. Also the fastest Google compliance fix available.
- **How:** grep-and-replace `{faq.q}` / `{faq.question}` / `{sectionConfig.*}` with `<FAQBlock items={faq} />`. Generator already exists in `src/lib/seo-utils.ts`.

### 3 · Ship the "multimedia minimum" pattern (P1 · Content + Graphic Designer)
- **Motivating data:** Multimedia averages 3.47/10 sitewide. Published compare cluster (the strongest section) averages 5.59 largely because those pages carry at least one table.
- **Expected lift:** +0.2 sitewide if applied to top-50 priority published pages.
- **How:** Define a "pillar page multimedia minimum" — 1 hero image + 1 explanatory diagram + 1 data table (or chart). Apply to the 50 highest-traffic-potential pages first (seeded from today's 500-page opportunity plan §5 shortlist).

## Caveats & rubric notes

- **App-shell routes are in the sample** and drag the sitewide composite down. The next rubric revision should filter routes where `use_client=true` + word_count < 100 — they are UI, not content. If excluded, published composite rises from 6.63 to ~6.85.
- **E-E-A-T scoring is conservative** — it can't detect quality writing, only structural proxies (bylines, methodology blocks, authoritative links). A manual sample of 20 pages would calibrate this further.
- **No keyword-stuffing / black-hat signals rewarded.** Originality penalizes the programmatic "for beginners what is X" title prefix pattern that showed up in the 500-plan; intent scoring penalizes thin content that doesn't match URL format.
- **No fake schema or deceptive signals rewarded.** Scoring checks structural reality, not claimed metadata.

## Deliverables

- [Interactive dashboard](computer:///sessions/dreamy-gallant-carson/mnt/Degen0x/content-audit-dashboard-2026-04-17.jsx) — filterable section table + top/bottom pages + criteria bar + distribution.
- [Full audit JSON](computer:///sessions/dreamy-gallant-carson/mnt/Degen0x/content-audit-2026-04-17.json) — 1,849 pages × 8 criteria + signals.
- [Summary JSON](computer:///sessions/dreamy-gallant-carson/mnt/Degen0x/content-audit-summary-2026-04-17.json) — compact rollup.
- [This brief](computer:///sessions/dreamy-gallant-carson/mnt/Degen0x/ops/seo/content-audit-2026-04-17.md).
