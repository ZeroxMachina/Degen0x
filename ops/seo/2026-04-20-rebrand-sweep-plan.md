# degen0x · Rebrand Sweep Plan — cryptodegen.com → degen0x.com (docs + OG badge)

**Generated:** 2026-04-20T17:14Z (Hour 17 standup; executes Hour 16 T3)
**Status:** PLAN ONLY — no source files touched this cycle. Execution gated on the sitemap T1 shipping first (per Hour 16 T3: one-theme-per-commit discipline — primary bleed fix first, paper cuts after).
**Scope:** 20 `cryptodegen.com` occurrences across 5 files. `public/sitemap.xml` is explicitly out of scope (covered by the sitemap regen T1 / incident `2026-04-20T16-14Z-sitemap-wrong-domain.md`); replacing it here would double-commit the same fix.

---

## File-by-file replacement inventory

| File | Occurrences | Kind | Notes |
|---|---|---|---|
| `SEO_DEPLOYMENT_CHECKLIST.md` | 9 | Docs (GSC setup + verification URLs) | All `https://cryptodegen.com` → `https://degen0x.com`. Checklist drives humans through Search Console setup — wrong domain here = humans type wrong domain into GSC. |
| `SETUP_OG_IMAGE.md` | 5 | Docs (OG image verification) | 3× GSC property-entry instructions + 2× curl verification commands. Same global substitution. |
| `SEO_INFRASTRUCTURE.md` | 3 | Docs (architecture reference) | L18: base-URL description; L112: robots.txt Sitemap: header doc; L347: `SITE_URL` example. Global substitution safe. |
| `SEO_DEPLOYMENT_SUMMARY.md` | 2 | Docs | L236: GSC property add; L320: `SITE_URL` constant example. Global substitution safe. |
| `public/og-image.svg` | 1 | Public asset (OG badge text) | L20: `<text>` element renders "cryptodegen.com" on every social share. Global substitution safe — badge is text-only, no layout re-flow risk. |

**Total:** 20 occurrences, 5 files, zero code-path (no TS/JS/config — all docs + one SVG public asset).

---

## Planned operations (run by Hour 18+ standup after T1 ships)

Single-pass sed replacement — `cryptodegen.com` → `degen0x.com`. All instances are the bare domain; no path suffixes need path-aware substitution.

```bash
# Dry-run first (should match the inventory counts above):
grep -c "cryptodegen\.com" \
  SETUP_OG_IMAGE.md \
  SEO_INFRASTRUCTURE.md \
  SEO_DEPLOYMENT_SUMMARY.md \
  SEO_DEPLOYMENT_CHECKLIST.md \
  public/og-image.svg
# Expected: 5, 3, 2, 9, 1  (sum 20)

# Execute:
sed -i 's/cryptodegen\.com/degen0x.com/g' \
  SETUP_OG_IMAGE.md \
  SEO_INFRASTRUCTURE.md \
  SEO_DEPLOYMENT_SUMMARY.md \
  SEO_DEPLOYMENT_CHECKLIST.md \
  public/og-image.svg

# Verify (all should return 0):
grep -c "cryptodegen\.com" \
  SETUP_OG_IMAGE.md \
  SEO_INFRASTRUCTURE.md \
  SEO_DEPLOYMENT_SUMMARY.md \
  SEO_DEPLOYMENT_CHECKLIST.md \
  public/og-image.svg
```

Expected diff shape: 20 line changes, 5 files, no structural changes, no new/deleted lines.

## Pre-flight guards

1. **Run AFTER sitemap regen commit lands** — commit order: (1) sitemap regen → (2) this sweep → (3) any related announcements. One-theme-per-commit.
2. **Re-grep before committing** — if occurrence count has grown (new docs added that reference the old domain), re-scope this plan rather than silently widening the sed.
3. **Spot-check the SVG visually** — open `public/og-image.svg` in the editor after substitution; confirm text renders inside the 1200×630 viewport (baseline: "cryptodegen.com" 13 chars, "degen0x.com" 11 chars → shorter, no overflow risk).
4. **No `git add -A`** — stage only the 5 expected files explicitly.

## Commit message (planned)

```
rebrand: sweep residual cryptodegen.com refs in docs + OG badge

- 5 files, 20 occurrences, docs/SVG only (no code-path).
- Follow-up to sitemap regen in <SITEMAP_SHA>.
- Closes the rebrand paper cuts; production sitemap remains the load-bearing fix.
```

## Rollback

`git revert HEAD` — single commit, fully reversible. No runtime effect (docs + unrenderd OG text; OG image is regenerated from the SVG on next build but change is text-only).

## What is explicitly NOT in this plan

- `public/sitemap.xml` — covered by separate regen T1 (incident `2026-04-20T16-14Z-sitemap-wrong-domain.md`).
- Any code under `src/`, `scripts/`, or `app/` — a separate audit at Hour 16 (`ops/seo/2026-04-20-sitemap-dryrun.md`) confirmed the live generator config already uses `degen0x.com`. No code drift to fix.
- `robots.txt` — already points at correct domain (confirmed in sitemap dry-run doc §3).
- `CNAME`, Vercel config, DNS — out of scope; domain is correctly pointed in production.

## Follow-on checklist (for whichever standup ships this)

- [ ] T1 (sitemap regen) has landed — verify the commit is in `git log origin/main` before starting.
- [ ] Dry-run grep counts match expected (5/3/2/9/1 = 20).
- [ ] `sed -i` applied; re-grep shows 0/0/0/0/0.
- [ ] SVG renders in preview without overflow.
- [ ] Single commit staged, 5 files only, no `git add -A`.
- [ ] Push + parallel-runner byte-equal check in next standup's cycle.
