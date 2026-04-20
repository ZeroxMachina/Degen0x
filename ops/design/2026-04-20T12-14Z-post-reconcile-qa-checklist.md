# Post-Reconcile QA Checklist — Cherry-Pick `98771ac7`

**Timestamp:** 2026-04-20T12:14Z  
**Author:** design-polish scheduled task (Claude Opus 4.7)  
**Purpose:** Fast QA runbook for Hour 13+ after Jefe approves Option (a) and `98771ac7` is cherry-picked onto origin/main.

---

## Files Touched by `98771ac7`

| # | File | Change Summary | Conflict with Origin? |
|---|---|---|---|
| 1 | `src/components/AuthorAttribution.tsx` | Inline styles → CSS module classes; avatar palette rebranded; added `import styles from './AuthorAttribution.module.css'`; added `AUTHOR_BIO_SLUGS` canonical slug map (origin version); hover/focus states via CSS classes | **YES** — origin has added `AUTHOR_BIO_SLUGS` map + changed `authorHref` logic not present in local pre-polish version. Merge must preserve both the slug map AND the CSS module conversion. |
| 2 | `src/components/AuthorAttribution.module.css` | **New file** — 99 lines. Design system vars (`--glass-*`, `--color-*`), hover/focus-visible states, mobile breakpoint @480px | **YES** — origin does NOT have this file (exits 128). Cherry-pick should create it cleanly, but verify origin didn't create its own version under a different name. |
| 3 | `src/components/RelatedContent.module.css` | Replaced undefined `--text`, `--border`, `--surface`, `--text2` vars with `--color-text`, `--color-border`, `--glass-*` tokens; added `backdrop-filter`, `box-shadow`; added `.card:focus-visible`; added `.card:focus-visible .cardTitle` | **YES** — origin has the old vars (`--text`, `--border`, `--surface`, `--text2`). Our patch replaces them with design system tokens. Pure find-replace conflict. |

---

## Conflict Resolution Guide

### File 1: `AuthorAttribution.tsx`

**Origin state:** Uses inline styles (hardcoded `#161b22`, `#30363d`, `#e6edf3` dark-mode colors), has `AUTHOR_BIO_SLUGS` canonical slug map, `authorHref` resolves to `/about/authors/<slug>` or fallback `#<rawSlug>`.

**Our patch:** Converts inline styles to `className={styles.xxx}`, changes avatar color palette from GitHub-style to brand colors (`#6366f1`, `#22c55e`, etc.), adds `import styles` at top.

**Resolution strategy:**
1. Accept the FULL origin file as the base (keeps `AUTHOR_BIO_SLUGS`, the slug resolution logic, and the correct `authorHref`).
2. Apply our CSS module conversion on top: add `import styles from './AuthorAttribution.module.css'` at line 1, replace every `style={{...}}` block with the corresponding `className={styles.xxx}`.
3. Update avatar colors to brand palette.
4. Keep origin's `section` prop if present (unused but harmless).

### File 2: `AuthorAttribution.module.css`

**Origin state:** File does not exist.

**Resolution strategy:** Cherry-pick should create cleanly. If it doesn't (git confused about rename detection), just copy the file from our commit verbatim:
```
git show 98771ac7:src/components/AuthorAttribution.module.css > src/components/AuthorAttribution.module.css
```

### File 3: `RelatedContent.module.css`

**Origin state:** Uses old variable names (`--text`, `--border`, `--surface`, `--text2`) and hardcoded dark-mode hover colors (`#30363d`, `rgba(22,27,34,0.8)`, `#58a6ff`).

**Resolution strategy:** Accept our version wholesale — it's a strict superset:
- Replaces undefined vars with real design system tokens
- Adds `backdrop-filter` + glass morphism
- Adds `focus-visible` states (WCAG AA compliance)
- Uses design system transitions instead of hardcoded cubics

No origin-only additions exist in this file (verified by diffing origin HEAD vs origin's Phase 0 version — only the original Phase 0 version is present).

---

## Visual QA Spec

For each file, verify these on **3 viewports** (375px mobile, 768px tablet, 1440px desktop):

### AuthorAttribution Component
- [ ] Glass morphism background renders (not opaque `#161b22`)
- [ ] Avatar circle shows brand color (indigo/green/red/amber/slate/purple), not GitHub palette
- [ ] Author name link: hover → color change + underline
- [ ] Author name link: focus-visible → 2px primary outline, 2px offset
- [ ] Separator dots use `--color-text-secondary` with 0.5 opacity
- [ ] Role text uses `--color-text-secondary`
- [ ] Date metadata renders correctly
- [ ] Updated date shows "(updated ...)" when different from published
- [ ] Mobile (≤480px): gap shrinks to 6px/10px, padding to 10px/12px, font to 12px
- [ ] Light mode: glass vars resolve to light theme (no hardcoded dark colors)
- [ ] Dark mode: glass vars resolve to dark theme

### RelatedContent Component  
- [ ] Section title uses `--color-text` (not undefined `--text`)
- [ ] Subtitle uses `--color-text-secondary` (not undefined `--text2`)
- [ ] Cards have glass morphism (backdrop-filter blur + border + shadow)
- [ ] Card hover: translateY(-4px), border→`--glass-border-hover`, bg→`--glass-bg-hover`
- [ ] Card focus-visible: 2px primary outline, 2px offset, border/bg hover state
- [ ] Card title: hover/focus → `--color-primary` (not hardcoded `#58a6ff`)
- [ ] Footer border uses `--color-border` (not undefined `--border`)
- [ ] Arrow hover: color → `--color-primary` + translateX(4px) (check `--color-primary` replaces `#58a6ff`)
- [ ] Mobile (≤768px): single column grid, reduced margins
- [ ] Mobile (≤480px): further reduced padding
- [ ] No layout shift on any viewport (CLS = 0)

---

## Smoke URLs

After cherry-pick, hit these pages and visually verify both components render:

| URL | Why |
|---|---|
| `/learn/what-is-bitcoin` | High-traffic learn page — both AuthorAttribution + RelatedContent present |
| `/learn/what-is-ethereum` | Second-highest traffic — same components |
| `/tools/dca-calculator` | Tool page — verify AuthorAttribution renders at top |
| `/compare/bitcoin-vs-ethereum` | Compare page — both components + potential edge case with compare-specific layout |
| `/exchanges/binance` | Exchange review — AuthorAttribution + RelatedContent in review context |
| `/` | Homepage — verify no regression from component CSS module changes bleeding |
| `/news` | News page — verify no RelatedContent rendering issues |

---

## Build Verification

- [ ] `npm run build` succeeds (no TypeScript errors from CSS module import)
- [ ] No `Module not found: Can't resolve './AuthorAttribution.module.css'` errors
- [ ] No console warnings about undefined CSS custom properties
- [ ] Lighthouse accessibility score ≥ 90 on at least one smoke URL
- [ ] WCAG AA contrast check passes on AuthorAttribution text (13px, needs 4.5:1 ratio)

---

## Estimated QA Time

With this checklist pre-staged: **10–15 minutes** (3 viewports × 7 URLs = 21 checks, plus build verification).

Without this checklist: **45–60 minutes** (would need to re-derive conflict resolution + identify all affected pages + determine visual spec from scratch).
