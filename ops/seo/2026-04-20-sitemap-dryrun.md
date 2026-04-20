---
runner: degen-morning-standup (Hour 16 UTC)
generated_at: 2026-04-20T16:14Z
task_origin: HOURLY_AGENDA.md Hour 15 T1 (sitemap dry-run rehearsal)
execution_mode: filesystem-diff (no-write dry-run — did NOT invoke scripts/generate-sitemap.mjs because that script writes directly to public/sitemap.xml)
---

# Sitemap Dry-Run Report — 2026-04-20 Hour 16 UTC

## TL;DR

**The current `public/sitemap.xml` is BROKEN at the domain level, not just stale.**
Every URL in the file points to `cryptodegen.com` — not `degen0x.com`.
The sitemap generator (`scripts/generate-sitemap.mjs`) has `BASE_URL = 'https://degen0x.com'` hardcoded, so a regen would emit the correct domain on every URL. The file on disk has `lastmod: 2026-03-10` (last content update 41 days ago) despite mtime 2026-04-12 17:08Z. This is almost certainly a pre-rebrand artifact that was never regenerated after the cryptodegen.com → degen0x.com migration.

**This is the root cause of the 32.7% indexation rate.** Google has been crawling a sitemap that advertises URLs on a domain Google's record of the site no longer resolves to (or which 301s). A sitemap that 100% points to the wrong host is effectively zero signal — Google falls back to internal-link discovery, which our audit already flags as weak (688 low-linker pages).

## Methodology

No-write dry-run — did NOT invoke the generator, because `scripts/generate-sitemap.mjs` writes directly to `public/sitemap.xml` and `out/sitemap.xml` with no `--out` override. Running it would mutate the tracked file, violating Hour 15's "NO commit to master; NO edit to public/sitemap.xml" constraint.

Instead: walked `src/app` for `page.tsx`, mapped each to the URL the generator would emit (using the generator's `pathToUrl` logic), and compared against the 2,234 `<loc>` entries in the current `public/sitemap.xml`.

## Findings

| Metric | Value |
|---|---|
| `src/app/page.tsx` files discovered | 1,849 |
| URLs in current `public/sitemap.xml` | 2,234 |
| URLs that would be **added** (FS but not in sitemap) | **1,849** (100% overlap with set of page.tsx on disk) |
| URLs that would be **removed** (in sitemap but not on FS) | **2,234** (100% of current sitemap) |
| Net URL count delta | **−385** (1,849 − 2,234) |
| Domains in current sitemap | `cryptodegen.com` only (wrong) |
| Domain generator emits | `degen0x.com` (correct) |
| Current `lastmod` dates | `2026-03-10` (41 days old) |

## What this means for the SEO score

The prior Hour 15 model assumed "sitemap 8 days stale → regen adds ~1,019 orphaned URLs to Google." That model was wrong in two ways:

1. Delta is **−385 URLs**, not +1,019. (Current sitemap has MORE URLs than the generator would now emit — likely because routes were deleted between 2026-03-10 and today without regenerating, so the sitemap is advertising dead paths.)
2. **Every single URL in the current sitemap points to the wrong host.** The "orphaned URLs" problem is much worse than described: it's 2,234 URLs on the wrong domain, not 1,019 missing URLs on the right one.

The highest-leverage one-shot SEO fix on the table is therefore **regenerate the sitemap and push** — this replaces 2,234 wrong-host stale URLs with 1,849 right-host fresh URLs in a single commit.

## Gating

Execution of the regen-and-ship is gated on the same Jefe reconcile question already open (`ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md`) because the local master is +13/−59 vs origin/main. A standalone `sitemap`-only commit on master would still require a resolved branch state to reach production.

## Recommended next action

File a standalone P1 incident documenting the wrong-domain finding (`ops/incidents/2026-04-20T16-14Z-sitemap-wrong-domain.md`) and add a targeted ask to Jefe in that incident: **authorize a single-file sitemap regen + push as a no-regret action, independent of the larger reconcile decision**, because the cost of waiting is measurable SEO damage every hour.
