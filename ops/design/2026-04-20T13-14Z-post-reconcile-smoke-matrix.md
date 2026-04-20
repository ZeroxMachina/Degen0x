# Post-Reconcile Smoke Matrix — 10 URLs × 4 Visual States

**Timestamp:** 2026-04-20T13:14Z  
**Author:** design-polish scheduled task (Claude Opus 4.7)  
**Purpose:** Copy-paste-ready QA matrix for Hour 14+ after reconciliation lands. Covers the two patched components (AuthorAttribution, RelatedContent) across 10 representative URLs spanning page types.

---

## Target Components

| Component | Files Modified | Key Visual Change |
|---|---|---|
| AuthorAttribution | `.tsx` + `.module.css` (new) | Inline styles → CSS modules, brand avatar palette, glass morphism, focus-visible rings |
| RelatedContent | `.module.css` | Undefined vars → design system tokens, glass morphism cards, focus-visible states |

---

## Smoke Matrix

### Author-Attribution–Heavy Pages (5 URLs)

| # | URL | Page Type | AuthorAttribution? | RelatedContent? | Notes |
|---|---|---|---|---|---|
| 1 | `/learn/what-is-bitcoin` | Learn guide | ✅ | ✅ | Highest-traffic learn page. Both components present. Canonical test surface. |
| 2 | `/learn/what-is-ethereum` | Learn guide | ✅ | ✅ | Second-highest traffic. Same template as #1 — validates consistency. |
| 3 | `/learn/advanced-defi-strategies` | Learn guide | ✅ | ✅ | Long-form article — tests AuthorAttribution at top of deep-scroll page. |
| 4 | `/exchanges/binance` | Exchange review | ✅ | ✅ | Review context — AuthorAttribution within review header, not article header. |
| 5 | `/tools/dca-calculator` | Tool page | ✅ | ❌ | Tool page — AuthorAttribution only, no RelatedContent. Validates component renders correctly without sibling. |

### Related-Content–Heavy Pages (5 URLs)

| # | URL | Page Type | AuthorAttribution? | RelatedContent? | Notes |
|---|---|---|---|---|---|
| 6 | `/compare/bitcoin-vs-ethereum` | Compare page | ✅ | ✅ | Compare layout — potential edge case with side-by-side grid + RelatedContent at bottom. |
| 7 | `/learn/account-abstraction` | Learn guide | ✅ | ✅ | Technical guide — tests long RelatedContent card lists (likely 4+ cards). |
| 8 | `/learn/advanced-staking-strategies-guide-2026` | Learn guide | ✅ | ✅ | 2026-dated guide — confirms new content also renders correctly. |
| 9 | `/` | Homepage | ❌ | ❌ | No direct component usage, but CSS module changes could bleed via shared tokens. Regression check. |
| 10 | `/news` | News feed | ❌ | Possible | News page — verify no visual regression from CSS module changes. RelatedContent may or may not render here. |

---

## Visual States to Verify Per URL

For each URL above, check these 4 states on **3 viewports** (375px, 768px, 1440px):

### State 1: Default (resting)
- [ ] Glass morphism background visible on AuthorAttribution (not opaque dark)
- [ ] Avatar shows brand color from palette (`#6366f1` indigo, `#22c55e` green, etc.)
- [ ] Text uses `--color-text` and `--color-text-secondary` (not hardcoded hex)
- [ ] RelatedContent cards show glass border + subtle shadow
- [ ] No layout shift (CLS = 0)
- [ ] No undefined CSS var fallback artifacts (inspect for `var(--text)` → transparent)

### State 2: Hover
- [ ] AuthorAttribution: author name → color change + underline on hover
- [ ] RelatedContent cards: translateY(-4px), border → `--glass-border-hover`, bg → `--glass-bg-hover`
- [ ] RelatedContent card title: color → `--color-primary` on hover
- [ ] RelatedContent arrow: color → `--color-primary` + translateX(4px)
- [ ] Transitions smooth (200ms ease, not jarring)

### State 3: Focus-visible (keyboard navigation)
- [ ] AuthorAttribution author link: 2px primary outline, 2px offset
- [ ] RelatedContent cards: 2px primary outline, 2px offset, border/bg matches hover state
- [ ] Focus ring visible against both light and dark backgrounds
- [ ] Tab order logical (left-to-right, top-to-bottom)

### State 4: Dark mode / Light mode toggle
- [ ] Glass vars resolve to correct theme (not hardcoded dark hex values in light mode)
- [ ] Contrast ratio ≥ 4.5:1 for body text (13px+) in both modes (WCAG AA)
- [ ] Contrast ratio ≥ 3:1 for large text (18px+) in both modes
- [ ] No stale `#161b22`, `#30363d`, `#e6edf3` hex values visible (these should be replaced by CSS vars)

---

## Quick Reference: Pass/Fail Criteria

| Criterion | Pass | Fail |
|---|---|---|
| Layout shift | CLS = 0 on all viewports | Any visible jump on load or interaction |
| Contrast (AA) | ≥ 4.5:1 body text, ≥ 3:1 large text | Below threshold in either light or dark mode |
| Focus rings | Visible 2px outline on Tab for all interactive elements | Missing or invisible focus indicator |
| Glass morphism | backdrop-filter renders, not opaque fallback | Opaque solid background with no blur |
| Brand colors | Avatar uses palette from `AuthorAttribution.module.css` | Still shows old GitHub-style `#30363d` palette |
| CSS var resolution | All `var(--color-*)` and `var(--glass-*)` resolve | Inspect shows undefined/fallback on any element |
| Mobile (375px) | Single column, reduced padding/gaps per breakpoint | Overflow, horizontal scroll, or truncated content |
| Build | `npm run build` succeeds, zero CSS module errors | Build fails or console warnings about missing modules |

---

## Execution Notes

- **Total checks:** 10 URLs × 4 states × 3 viewports = 120 visual checks (estimate 20–25 minutes with checklist).
- **Priority order:** URLs 1, 6, 9 first (highest traffic + homepage regression). Then 2–5, 7–8, 10.
- **Tooling:** Browser DevTools responsive mode for viewport toggling. Tab key for focus-visible. `prefers-color-scheme` toggle in DevTools for dark/light.
- **Screenshot evidence:** Capture URL #1 at 375px and 1440px in both modes as baseline evidence for the QA report.
