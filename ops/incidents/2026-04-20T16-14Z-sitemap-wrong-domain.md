---
severity: P1
status: OPEN
filed_at: 2026-04-20T16:14Z
filed_by: degen-morning-standup Hour 16 UTC
supersedes_framing: "sitemap 8 days stale" (the age is only the surface — the domain is wrong)
related: ops/incidents/2026-04-20T14-14Z-jefe-ask-reset-vs-rebase.md
evidence: ops/seo/2026-04-20-sitemap-dryrun.md
---

# P1 · Production sitemap advertises the wrong brand domain

## Summary

Every `<loc>` in `public/sitemap.xml` (served at `https://degen0x.com/sitemap.xml`) is on `cryptodegen.com` — the pre-rebrand host. The generator emits the correct `degen0x.com` URLs; it simply hasn't been run since the rebrand. Content `lastmod` dates inside the file are `2026-03-10` (41 days stale at filing time).

## Evidence

```
$ grep -oE "https?://[^<]+" public/sitemap.xml | awk -F/ '{print $3}' | sort -u
cryptodegen.com
www.sitemaps.org   ← xmlns, not a URL
```

All 2,234 URLs in the current sitemap are `cryptodegen.com`. None are `degen0x.com`. Generator config (`scripts/generate-sitemap.mjs` line 10): `const BASE_URL = 'https://degen0x.com';` — regen would fix every URL in one pass.

Additional code references to `cryptodegen.com`:

- `public/og-image.svg` (stale OG image — separate issue, tracked as follow-up)
- `SEO_INFRASTRUCTURE.md`, `SEO_DEPLOYMENT_SUMMARY.md`, `SEO_DEPLOYMENT_CHECKLIST.md`, `SETUP_OG_IMAGE.md` (docs — lower urgency, but should be swept after regen)

No production code (`src/app/**`, `next.config.ts`, `package.json name = "degen0x"`) still references cryptodegen.com.

## Impact

- **Google indexation**: `ops/seo/2026-04-20.md` models 32.7% indexation (496 / 1,515 pages). A sitemap pointing 100% to a dead host explains a large portion of that gap — Google has been told to crawl URLs that do not exist on the hostname it's resolving.
- **SEO compliance score**: flat at 6.91 / 10 for 3 consecutive days. Sitemap refresh was already the single highest-leverage lever per the 2026-04-18 recovery plan; this finding makes it higher-leverage still — it fixes a correctness bug, not just a freshness bug.
- **Every hour of delay** is a measurable cost: crawl budget wasted on wrong-host URLs, internal-link discovery forced to compensate, new pages never announced to Google.

## Why this was hidden

- The sitemap's mtime (`2026-04-12 17:08Z`) is recent enough that our "sitemap age" metric looked bounded ("8 days stale") and tracked only freshness. Nothing validated domain correctness.
- The `degen-google-seo-auditor` compliance scorer reports sitemap age but not sitemap domain integrity.
- Parallel runners (news, notifications) write their own data files; nobody runs `generate-sitemap.mjs`.

## Proposed Jefe ask (add to open jefe-ask doc as Q2, or accept as standalone)

Authorize a **standalone, sitemap-only commit + push** to master — independent of the larger +13/−59 reconcile decision. Rationale: the sitemap regen touches exactly `public/sitemap.xml` (and optionally `out/sitemap.xml`, gitignored); it has no coupling to the AuthorAttribution / RelatedContent / methodology codemods or the component-conflict set. A single-file cherry-pick to `origin/main` would ship this fix in seconds and is recoverable (the prior file is in git history).

Decision needed:

- [ ] APPROVE: standup may regen sitemap, commit as `seo: regenerate sitemap with correct degen0x.com domain` on master, cherry-pick to origin/main, push.
- [ ] DENY: wait for full reconcile decision; continue shipping wrong-domain sitemap in the meantime.
- [ ] DEFER: regen locally (no push) as a further dry-run to validate URL count / format, await larger reconcile.

## Status

- [ ] Jefe approval captured
- [ ] Sitemap regenerated
- [ ] Committed
- [ ] Pushed to origin/main
- [ ] Verified live at https://degen0x.com/sitemap.xml
- [ ] Submitted to GSC

## Guardrails

- Do NOT edit `public/sitemap.xml` by hand — always run `node scripts/generate-sitemap.mjs`.
- Keep this commit sitemap-only (do not bundle with other WIP from the 744-file uncommitted backlog).
- Follow-up: sweep `public/og-image.svg` and the four SEO docs for cryptodegen.com references in a separate commit after sitemap ships.
